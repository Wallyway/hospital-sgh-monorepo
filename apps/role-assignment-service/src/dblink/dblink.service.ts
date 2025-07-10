/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Injectable,
  Logger,
  InternalServerErrorException,
  OnModuleDestroy,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

@Injectable()
export class DblinkService implements OnModuleDestroy {
  private readonly logger = new Logger(DblinkService.name);
  private readonly authDbPool: Pool;

  constructor(private configService: ConfigService) {
    this.authDbPool = new Pool({
      host: this.configService.get<string>('AUTH_DB_DBLINK_HOST'),
      port: this.configService.get<number>('AUTH_DB_DBLINK_PORT'),
      database: this.configService.get<string>('AUTH_DB_DBLINK_DBNAME'),
      user: this.configService.get<string>('AUTH_DB_DBLINK_USER'),
      password: this.configService.get<string>('AUTH_DB_DBLINK_PASSWORD'),
      ssl: { rejectUnauthorized: false },
    });
    this.authDbPool
      .query('CREATE EXTENSION IF NOT EXISTS dblink;')
      .then(() =>
        this.logger.log('DBLINK extension ensured in Auth Service DB.'),
      )
      .catch((err) =>
        this.logger.error(`Failed to ensure DBLINK extension: ${err.message}`),
      );
  }

  async userExistsInAuthDb(usuarioId: number): Promise<boolean> {
    try {
      const query = `
        SELECT EXISTS (
          SELECT 1 FROM "Usuario" WHERE "idUsuario" = $1
        ) as "exists";
      `;
      const res = await this.authDbPool.query(query, [usuarioId]);
      return res.rows[0]?.exists ?? false;
    } catch (error) {
      this.logger.error(
        `DBLINK error checking user ${usuarioId}: ${error.message}`,
      );
      throw new InternalServerErrorException(
        'Failed to verify user existence.',
      );
    }
  }

  async onModuleDestroy() {
    await this.authDbPool.end();
    this.logger.log('DBLINK service pool disconnected.');
  }
}
