import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { UsersService } from './users/users.service';

describe('AppController', () => {
  let appController: AppController;
  let usersService: UsersService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            createUser: jest.fn(),
          },
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    usersService = app.get<UsersService>(UsersService);
  });

  describe('signupUser', () => {
    it('should create a user', async () => {
      const userData = { name: 'Test User', email: 'test@example.com' };
      jest
        .spyOn(usersService, 'createUser')
        .mockResolvedValue({ id: 1, ...userData });

      await expect(appController.signupUser(userData)).resolves.toEqual({
        id: 1,
        ...userData,
      });
    });
  });
});
