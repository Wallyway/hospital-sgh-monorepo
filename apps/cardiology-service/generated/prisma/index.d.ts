
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Equipamiento
 * 
 */
export type Equipamiento = $Result.DefaultSelection<Prisma.$EquipamientoPayload>
/**
 * Model Empleado
 * 
 */
export type Empleado = $Result.DefaultSelection<Prisma.$EmpleadoPayload>
/**
 * Model PAdministrativo
 * 
 */
export type PAdministrativo = $Result.DefaultSelection<Prisma.$PAdministrativoPayload>
/**
 * Model Medico
 * 
 */
export type Medico = $Result.DefaultSelection<Prisma.$MedicoPayload>
/**
 * Model Medico_Equipo
 * 
 */
export type Medico_Equipo = $Result.DefaultSelection<Prisma.$Medico_EquipoPayload>
/**
 * Model Cita
 * 
 */
export type Cita = $Result.DefaultSelection<Prisma.$CitaPayload>
/**
 * Model PAdmin_Modifica_Paciente
 * 
 */
export type PAdmin_Modifica_Paciente = $Result.DefaultSelection<Prisma.$PAdmin_Modifica_PacientePayload>
/**
 * Model Actualizaciones_HistoriaClinica
 * 
 */
export type Actualizaciones_HistoriaClinica = $Result.DefaultSelection<Prisma.$Actualizaciones_HistoriaClinicaPayload>
/**
 * Model Medico_Preescribe_Medicamento
 * 
 */
export type Medico_Preescribe_Medicamento = $Result.DefaultSelection<Prisma.$Medico_Preescribe_MedicamentoPayload>
/**
 * Model Registro_Consulta_Medicamento
 * 
 */
export type Registro_Consulta_Medicamento = $Result.DefaultSelection<Prisma.$Registro_Consulta_MedicamentoPayload>
/**
 * Model PAdmin_Gestiona_Cita
 * 
 */
export type PAdmin_Gestiona_Cita = $Result.DefaultSelection<Prisma.$PAdmin_Gestiona_CitaPayload>
/**
 * Model Diagnostico
 * 
 */
export type Diagnostico = $Result.DefaultSelection<Prisma.$DiagnosticoPayload>
/**
 * Model Medico_dictamina_diagnostico
 * 
 */
export type Medico_dictamina_diagnostico = $Result.DefaultSelection<Prisma.$Medico_dictamina_diagnosticoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Equipamientos
 * const equipamientos = await prisma.equipamiento.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Equipamientos
   * const equipamientos = await prisma.equipamiento.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.equipamiento`: Exposes CRUD operations for the **Equipamiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipamientos
    * const equipamientos = await prisma.equipamiento.findMany()
    * ```
    */
  get equipamiento(): Prisma.EquipamientoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.empleado`: Exposes CRUD operations for the **Empleado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empleados
    * const empleados = await prisma.empleado.findMany()
    * ```
    */
  get empleado(): Prisma.EmpleadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pAdministrativo`: Exposes CRUD operations for the **PAdministrativo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PAdministrativos
    * const pAdministrativos = await prisma.pAdministrativo.findMany()
    * ```
    */
  get pAdministrativo(): Prisma.PAdministrativoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medico`: Exposes CRUD operations for the **Medico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicos
    * const medicos = await prisma.medico.findMany()
    * ```
    */
  get medico(): Prisma.MedicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medico_Equipo`: Exposes CRUD operations for the **Medico_Equipo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medico_Equipos
    * const medico_Equipos = await prisma.medico_Equipo.findMany()
    * ```
    */
  get medico_Equipo(): Prisma.Medico_EquipoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cita`: Exposes CRUD operations for the **Cita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Citas
    * const citas = await prisma.cita.findMany()
    * ```
    */
  get cita(): Prisma.CitaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pAdmin_Modifica_Paciente`: Exposes CRUD operations for the **PAdmin_Modifica_Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PAdmin_Modifica_Pacientes
    * const pAdmin_Modifica_Pacientes = await prisma.pAdmin_Modifica_Paciente.findMany()
    * ```
    */
  get pAdmin_Modifica_Paciente(): Prisma.PAdmin_Modifica_PacienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actualizaciones_HistoriaClinica`: Exposes CRUD operations for the **Actualizaciones_HistoriaClinica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actualizaciones_HistoriaClinicas
    * const actualizaciones_HistoriaClinicas = await prisma.actualizaciones_HistoriaClinica.findMany()
    * ```
    */
  get actualizaciones_HistoriaClinica(): Prisma.Actualizaciones_HistoriaClinicaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medico_Preescribe_Medicamento`: Exposes CRUD operations for the **Medico_Preescribe_Medicamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medico_Preescribe_Medicamentos
    * const medico_Preescribe_Medicamentos = await prisma.medico_Preescribe_Medicamento.findMany()
    * ```
    */
  get medico_Preescribe_Medicamento(): Prisma.Medico_Preescribe_MedicamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registro_Consulta_Medicamento`: Exposes CRUD operations for the **Registro_Consulta_Medicamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registro_Consulta_Medicamentos
    * const registro_Consulta_Medicamentos = await prisma.registro_Consulta_Medicamento.findMany()
    * ```
    */
  get registro_Consulta_Medicamento(): Prisma.Registro_Consulta_MedicamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pAdmin_Gestiona_Cita`: Exposes CRUD operations for the **PAdmin_Gestiona_Cita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PAdmin_Gestiona_Citas
    * const pAdmin_Gestiona_Citas = await prisma.pAdmin_Gestiona_Cita.findMany()
    * ```
    */
  get pAdmin_Gestiona_Cita(): Prisma.PAdmin_Gestiona_CitaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnostico`: Exposes CRUD operations for the **Diagnostico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnosticos
    * const diagnosticos = await prisma.diagnostico.findMany()
    * ```
    */
  get diagnostico(): Prisma.DiagnosticoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medico_dictamina_diagnostico`: Exposes CRUD operations for the **Medico_dictamina_diagnostico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medico_dictamina_diagnosticos
    * const medico_dictamina_diagnosticos = await prisma.medico_dictamina_diagnostico.findMany()
    * ```
    */
  get medico_dictamina_diagnostico(): Prisma.Medico_dictamina_diagnosticoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Equipamiento: 'Equipamiento',
    Empleado: 'Empleado',
    PAdministrativo: 'PAdministrativo',
    Medico: 'Medico',
    Medico_Equipo: 'Medico_Equipo',
    Cita: 'Cita',
    PAdmin_Modifica_Paciente: 'PAdmin_Modifica_Paciente',
    Actualizaciones_HistoriaClinica: 'Actualizaciones_HistoriaClinica',
    Medico_Preescribe_Medicamento: 'Medico_Preescribe_Medicamento',
    Registro_Consulta_Medicamento: 'Registro_Consulta_Medicamento',
    PAdmin_Gestiona_Cita: 'PAdmin_Gestiona_Cita',
    Diagnostico: 'Diagnostico',
    Medico_dictamina_diagnostico: 'Medico_dictamina_diagnostico'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "equipamiento" | "empleado" | "pAdministrativo" | "medico" | "medico_Equipo" | "cita" | "pAdmin_Modifica_Paciente" | "actualizaciones_HistoriaClinica" | "medico_Preescribe_Medicamento" | "registro_Consulta_Medicamento" | "pAdmin_Gestiona_Cita" | "diagnostico" | "medico_dictamina_diagnostico"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Equipamiento: {
        payload: Prisma.$EquipamientoPayload<ExtArgs>
        fields: Prisma.EquipamientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipamientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipamientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamientoPayload>
          }
          findFirst: {
            args: Prisma.EquipamientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipamientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamientoPayload>
          }
          findMany: {
            args: Prisma.EquipamientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamientoPayload>[]
          }
          create: {
            args: Prisma.EquipamientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamientoPayload>
          }
          createMany: {
            args: Prisma.EquipamientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipamientoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamientoPayload>[]
          }
          delete: {
            args: Prisma.EquipamientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamientoPayload>
          }
          update: {
            args: Prisma.EquipamientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamientoPayload>
          }
          deleteMany: {
            args: Prisma.EquipamientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipamientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipamientoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamientoPayload>[]
          }
          upsert: {
            args: Prisma.EquipamientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipamientoPayload>
          }
          aggregate: {
            args: Prisma.EquipamientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipamiento>
          }
          groupBy: {
            args: Prisma.EquipamientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipamientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipamientoCountArgs<ExtArgs>
            result: $Utils.Optional<EquipamientoCountAggregateOutputType> | number
          }
        }
      }
      Empleado: {
        payload: Prisma.$EmpleadoPayload<ExtArgs>
        fields: Prisma.EmpleadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpleadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpleadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          findFirst: {
            args: Prisma.EmpleadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpleadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          findMany: {
            args: Prisma.EmpleadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>[]
          }
          create: {
            args: Prisma.EmpleadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          createMany: {
            args: Prisma.EmpleadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmpleadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>[]
          }
          delete: {
            args: Prisma.EmpleadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          update: {
            args: Prisma.EmpleadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          deleteMany: {
            args: Prisma.EmpleadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpleadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmpleadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>[]
          }
          upsert: {
            args: Prisma.EmpleadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpleadoPayload>
          }
          aggregate: {
            args: Prisma.EmpleadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpleado>
          }
          groupBy: {
            args: Prisma.EmpleadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpleadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpleadoCountArgs<ExtArgs>
            result: $Utils.Optional<EmpleadoCountAggregateOutputType> | number
          }
        }
      }
      PAdministrativo: {
        payload: Prisma.$PAdministrativoPayload<ExtArgs>
        fields: Prisma.PAdministrativoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PAdministrativoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdministrativoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PAdministrativoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdministrativoPayload>
          }
          findFirst: {
            args: Prisma.PAdministrativoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdministrativoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PAdministrativoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdministrativoPayload>
          }
          findMany: {
            args: Prisma.PAdministrativoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdministrativoPayload>[]
          }
          create: {
            args: Prisma.PAdministrativoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdministrativoPayload>
          }
          createMany: {
            args: Prisma.PAdministrativoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PAdministrativoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdministrativoPayload>[]
          }
          delete: {
            args: Prisma.PAdministrativoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdministrativoPayload>
          }
          update: {
            args: Prisma.PAdministrativoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdministrativoPayload>
          }
          deleteMany: {
            args: Prisma.PAdministrativoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PAdministrativoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PAdministrativoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdministrativoPayload>[]
          }
          upsert: {
            args: Prisma.PAdministrativoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdministrativoPayload>
          }
          aggregate: {
            args: Prisma.PAdministrativoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePAdministrativo>
          }
          groupBy: {
            args: Prisma.PAdministrativoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PAdministrativoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PAdministrativoCountArgs<ExtArgs>
            result: $Utils.Optional<PAdministrativoCountAggregateOutputType> | number
          }
        }
      }
      Medico: {
        payload: Prisma.$MedicoPayload<ExtArgs>
        fields: Prisma.MedicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          findFirst: {
            args: Prisma.MedicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          findMany: {
            args: Prisma.MedicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>[]
          }
          create: {
            args: Prisma.MedicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          createMany: {
            args: Prisma.MedicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>[]
          }
          delete: {
            args: Prisma.MedicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          update: {
            args: Prisma.MedicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          deleteMany: {
            args: Prisma.MedicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>[]
          }
          upsert: {
            args: Prisma.MedicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          aggregate: {
            args: Prisma.MedicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedico>
          }
          groupBy: {
            args: Prisma.MedicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicoCountArgs<ExtArgs>
            result: $Utils.Optional<MedicoCountAggregateOutputType> | number
          }
        }
      }
      Medico_Equipo: {
        payload: Prisma.$Medico_EquipoPayload<ExtArgs>
        fields: Prisma.Medico_EquipoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Medico_EquipoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_EquipoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Medico_EquipoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_EquipoPayload>
          }
          findFirst: {
            args: Prisma.Medico_EquipoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_EquipoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Medico_EquipoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_EquipoPayload>
          }
          findMany: {
            args: Prisma.Medico_EquipoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_EquipoPayload>[]
          }
          create: {
            args: Prisma.Medico_EquipoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_EquipoPayload>
          }
          createMany: {
            args: Prisma.Medico_EquipoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Medico_EquipoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_EquipoPayload>[]
          }
          delete: {
            args: Prisma.Medico_EquipoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_EquipoPayload>
          }
          update: {
            args: Prisma.Medico_EquipoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_EquipoPayload>
          }
          deleteMany: {
            args: Prisma.Medico_EquipoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Medico_EquipoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Medico_EquipoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_EquipoPayload>[]
          }
          upsert: {
            args: Prisma.Medico_EquipoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_EquipoPayload>
          }
          aggregate: {
            args: Prisma.Medico_EquipoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedico_Equipo>
          }
          groupBy: {
            args: Prisma.Medico_EquipoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Medico_EquipoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Medico_EquipoCountArgs<ExtArgs>
            result: $Utils.Optional<Medico_EquipoCountAggregateOutputType> | number
          }
        }
      }
      Cita: {
        payload: Prisma.$CitaPayload<ExtArgs>
        fields: Prisma.CitaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CitaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CitaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          findFirst: {
            args: Prisma.CitaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CitaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          findMany: {
            args: Prisma.CitaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>[]
          }
          create: {
            args: Prisma.CitaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          createMany: {
            args: Prisma.CitaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CitaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>[]
          }
          delete: {
            args: Prisma.CitaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          update: {
            args: Prisma.CitaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          deleteMany: {
            args: Prisma.CitaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CitaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CitaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>[]
          }
          upsert: {
            args: Prisma.CitaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          aggregate: {
            args: Prisma.CitaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCita>
          }
          groupBy: {
            args: Prisma.CitaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CitaCountArgs<ExtArgs>
            result: $Utils.Optional<CitaCountAggregateOutputType> | number
          }
        }
      }
      PAdmin_Modifica_Paciente: {
        payload: Prisma.$PAdmin_Modifica_PacientePayload<ExtArgs>
        fields: Prisma.PAdmin_Modifica_PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PAdmin_Modifica_PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Modifica_PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PAdmin_Modifica_PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Modifica_PacientePayload>
          }
          findFirst: {
            args: Prisma.PAdmin_Modifica_PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Modifica_PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PAdmin_Modifica_PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Modifica_PacientePayload>
          }
          findMany: {
            args: Prisma.PAdmin_Modifica_PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Modifica_PacientePayload>[]
          }
          create: {
            args: Prisma.PAdmin_Modifica_PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Modifica_PacientePayload>
          }
          createMany: {
            args: Prisma.PAdmin_Modifica_PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PAdmin_Modifica_PacienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Modifica_PacientePayload>[]
          }
          delete: {
            args: Prisma.PAdmin_Modifica_PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Modifica_PacientePayload>
          }
          update: {
            args: Prisma.PAdmin_Modifica_PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Modifica_PacientePayload>
          }
          deleteMany: {
            args: Prisma.PAdmin_Modifica_PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PAdmin_Modifica_PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PAdmin_Modifica_PacienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Modifica_PacientePayload>[]
          }
          upsert: {
            args: Prisma.PAdmin_Modifica_PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Modifica_PacientePayload>
          }
          aggregate: {
            args: Prisma.PAdmin_Modifica_PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePAdmin_Modifica_Paciente>
          }
          groupBy: {
            args: Prisma.PAdmin_Modifica_PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PAdmin_Modifica_PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PAdmin_Modifica_PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PAdmin_Modifica_PacienteCountAggregateOutputType> | number
          }
        }
      }
      Actualizaciones_HistoriaClinica: {
        payload: Prisma.$Actualizaciones_HistoriaClinicaPayload<ExtArgs>
        fields: Prisma.Actualizaciones_HistoriaClinicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Actualizaciones_HistoriaClinicaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Actualizaciones_HistoriaClinicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Actualizaciones_HistoriaClinicaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Actualizaciones_HistoriaClinicaPayload>
          }
          findFirst: {
            args: Prisma.Actualizaciones_HistoriaClinicaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Actualizaciones_HistoriaClinicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Actualizaciones_HistoriaClinicaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Actualizaciones_HistoriaClinicaPayload>
          }
          findMany: {
            args: Prisma.Actualizaciones_HistoriaClinicaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Actualizaciones_HistoriaClinicaPayload>[]
          }
          create: {
            args: Prisma.Actualizaciones_HistoriaClinicaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Actualizaciones_HistoriaClinicaPayload>
          }
          createMany: {
            args: Prisma.Actualizaciones_HistoriaClinicaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Actualizaciones_HistoriaClinicaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Actualizaciones_HistoriaClinicaPayload>[]
          }
          delete: {
            args: Prisma.Actualizaciones_HistoriaClinicaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Actualizaciones_HistoriaClinicaPayload>
          }
          update: {
            args: Prisma.Actualizaciones_HistoriaClinicaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Actualizaciones_HistoriaClinicaPayload>
          }
          deleteMany: {
            args: Prisma.Actualizaciones_HistoriaClinicaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Actualizaciones_HistoriaClinicaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Actualizaciones_HistoriaClinicaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Actualizaciones_HistoriaClinicaPayload>[]
          }
          upsert: {
            args: Prisma.Actualizaciones_HistoriaClinicaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Actualizaciones_HistoriaClinicaPayload>
          }
          aggregate: {
            args: Prisma.Actualizaciones_HistoriaClinicaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActualizaciones_HistoriaClinica>
          }
          groupBy: {
            args: Prisma.Actualizaciones_HistoriaClinicaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Actualizaciones_HistoriaClinicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.Actualizaciones_HistoriaClinicaCountArgs<ExtArgs>
            result: $Utils.Optional<Actualizaciones_HistoriaClinicaCountAggregateOutputType> | number
          }
        }
      }
      Medico_Preescribe_Medicamento: {
        payload: Prisma.$Medico_Preescribe_MedicamentoPayload<ExtArgs>
        fields: Prisma.Medico_Preescribe_MedicamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Medico_Preescribe_MedicamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_Preescribe_MedicamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Medico_Preescribe_MedicamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_Preescribe_MedicamentoPayload>
          }
          findFirst: {
            args: Prisma.Medico_Preescribe_MedicamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_Preescribe_MedicamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Medico_Preescribe_MedicamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_Preescribe_MedicamentoPayload>
          }
          findMany: {
            args: Prisma.Medico_Preescribe_MedicamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_Preescribe_MedicamentoPayload>[]
          }
          create: {
            args: Prisma.Medico_Preescribe_MedicamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_Preescribe_MedicamentoPayload>
          }
          createMany: {
            args: Prisma.Medico_Preescribe_MedicamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Medico_Preescribe_MedicamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_Preescribe_MedicamentoPayload>[]
          }
          delete: {
            args: Prisma.Medico_Preescribe_MedicamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_Preescribe_MedicamentoPayload>
          }
          update: {
            args: Prisma.Medico_Preescribe_MedicamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_Preescribe_MedicamentoPayload>
          }
          deleteMany: {
            args: Prisma.Medico_Preescribe_MedicamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Medico_Preescribe_MedicamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Medico_Preescribe_MedicamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_Preescribe_MedicamentoPayload>[]
          }
          upsert: {
            args: Prisma.Medico_Preescribe_MedicamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_Preescribe_MedicamentoPayload>
          }
          aggregate: {
            args: Prisma.Medico_Preescribe_MedicamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedico_Preescribe_Medicamento>
          }
          groupBy: {
            args: Prisma.Medico_Preescribe_MedicamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Medico_Preescribe_MedicamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Medico_Preescribe_MedicamentoCountArgs<ExtArgs>
            result: $Utils.Optional<Medico_Preescribe_MedicamentoCountAggregateOutputType> | number
          }
        }
      }
      Registro_Consulta_Medicamento: {
        payload: Prisma.$Registro_Consulta_MedicamentoPayload<ExtArgs>
        fields: Prisma.Registro_Consulta_MedicamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Registro_Consulta_MedicamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Registro_Consulta_MedicamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Registro_Consulta_MedicamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Registro_Consulta_MedicamentoPayload>
          }
          findFirst: {
            args: Prisma.Registro_Consulta_MedicamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Registro_Consulta_MedicamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Registro_Consulta_MedicamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Registro_Consulta_MedicamentoPayload>
          }
          findMany: {
            args: Prisma.Registro_Consulta_MedicamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Registro_Consulta_MedicamentoPayload>[]
          }
          create: {
            args: Prisma.Registro_Consulta_MedicamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Registro_Consulta_MedicamentoPayload>
          }
          createMany: {
            args: Prisma.Registro_Consulta_MedicamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Registro_Consulta_MedicamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Registro_Consulta_MedicamentoPayload>[]
          }
          delete: {
            args: Prisma.Registro_Consulta_MedicamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Registro_Consulta_MedicamentoPayload>
          }
          update: {
            args: Prisma.Registro_Consulta_MedicamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Registro_Consulta_MedicamentoPayload>
          }
          deleteMany: {
            args: Prisma.Registro_Consulta_MedicamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Registro_Consulta_MedicamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Registro_Consulta_MedicamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Registro_Consulta_MedicamentoPayload>[]
          }
          upsert: {
            args: Prisma.Registro_Consulta_MedicamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Registro_Consulta_MedicamentoPayload>
          }
          aggregate: {
            args: Prisma.Registro_Consulta_MedicamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistro_Consulta_Medicamento>
          }
          groupBy: {
            args: Prisma.Registro_Consulta_MedicamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Registro_Consulta_MedicamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Registro_Consulta_MedicamentoCountArgs<ExtArgs>
            result: $Utils.Optional<Registro_Consulta_MedicamentoCountAggregateOutputType> | number
          }
        }
      }
      PAdmin_Gestiona_Cita: {
        payload: Prisma.$PAdmin_Gestiona_CitaPayload<ExtArgs>
        fields: Prisma.PAdmin_Gestiona_CitaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PAdmin_Gestiona_CitaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Gestiona_CitaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PAdmin_Gestiona_CitaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Gestiona_CitaPayload>
          }
          findFirst: {
            args: Prisma.PAdmin_Gestiona_CitaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Gestiona_CitaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PAdmin_Gestiona_CitaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Gestiona_CitaPayload>
          }
          findMany: {
            args: Prisma.PAdmin_Gestiona_CitaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Gestiona_CitaPayload>[]
          }
          create: {
            args: Prisma.PAdmin_Gestiona_CitaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Gestiona_CitaPayload>
          }
          createMany: {
            args: Prisma.PAdmin_Gestiona_CitaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PAdmin_Gestiona_CitaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Gestiona_CitaPayload>[]
          }
          delete: {
            args: Prisma.PAdmin_Gestiona_CitaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Gestiona_CitaPayload>
          }
          update: {
            args: Prisma.PAdmin_Gestiona_CitaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Gestiona_CitaPayload>
          }
          deleteMany: {
            args: Prisma.PAdmin_Gestiona_CitaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PAdmin_Gestiona_CitaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PAdmin_Gestiona_CitaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Gestiona_CitaPayload>[]
          }
          upsert: {
            args: Prisma.PAdmin_Gestiona_CitaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAdmin_Gestiona_CitaPayload>
          }
          aggregate: {
            args: Prisma.PAdmin_Gestiona_CitaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePAdmin_Gestiona_Cita>
          }
          groupBy: {
            args: Prisma.PAdmin_Gestiona_CitaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PAdmin_Gestiona_CitaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PAdmin_Gestiona_CitaCountArgs<ExtArgs>
            result: $Utils.Optional<PAdmin_Gestiona_CitaCountAggregateOutputType> | number
          }
        }
      }
      Diagnostico: {
        payload: Prisma.$DiagnosticoPayload<ExtArgs>
        fields: Prisma.DiagnosticoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosticoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosticoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>
          }
          findFirst: {
            args: Prisma.DiagnosticoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosticoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>
          }
          findMany: {
            args: Prisma.DiagnosticoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>[]
          }
          create: {
            args: Prisma.DiagnosticoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>
          }
          createMany: {
            args: Prisma.DiagnosticoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiagnosticoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>[]
          }
          delete: {
            args: Prisma.DiagnosticoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>
          }
          update: {
            args: Prisma.DiagnosticoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosticoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosticoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiagnosticoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>[]
          }
          upsert: {
            args: Prisma.DiagnosticoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>
          }
          aggregate: {
            args: Prisma.DiagnosticoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnostico>
          }
          groupBy: {
            args: Prisma.DiagnosticoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnosticoCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticoCountAggregateOutputType> | number
          }
        }
      }
      Medico_dictamina_diagnostico: {
        payload: Prisma.$Medico_dictamina_diagnosticoPayload<ExtArgs>
        fields: Prisma.Medico_dictamina_diagnosticoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Medico_dictamina_diagnosticoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_dictamina_diagnosticoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Medico_dictamina_diagnosticoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_dictamina_diagnosticoPayload>
          }
          findFirst: {
            args: Prisma.Medico_dictamina_diagnosticoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_dictamina_diagnosticoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Medico_dictamina_diagnosticoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_dictamina_diagnosticoPayload>
          }
          findMany: {
            args: Prisma.Medico_dictamina_diagnosticoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_dictamina_diagnosticoPayload>[]
          }
          create: {
            args: Prisma.Medico_dictamina_diagnosticoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_dictamina_diagnosticoPayload>
          }
          createMany: {
            args: Prisma.Medico_dictamina_diagnosticoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Medico_dictamina_diagnosticoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_dictamina_diagnosticoPayload>[]
          }
          delete: {
            args: Prisma.Medico_dictamina_diagnosticoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_dictamina_diagnosticoPayload>
          }
          update: {
            args: Prisma.Medico_dictamina_diagnosticoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_dictamina_diagnosticoPayload>
          }
          deleteMany: {
            args: Prisma.Medico_dictamina_diagnosticoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Medico_dictamina_diagnosticoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Medico_dictamina_diagnosticoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_dictamina_diagnosticoPayload>[]
          }
          upsert: {
            args: Prisma.Medico_dictamina_diagnosticoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Medico_dictamina_diagnosticoPayload>
          }
          aggregate: {
            args: Prisma.Medico_dictamina_diagnosticoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedico_dictamina_diagnostico>
          }
          groupBy: {
            args: Prisma.Medico_dictamina_diagnosticoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Medico_dictamina_diagnosticoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Medico_dictamina_diagnosticoCountArgs<ExtArgs>
            result: $Utils.Optional<Medico_dictamina_diagnosticoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    equipamiento?: EquipamientoOmit
    empleado?: EmpleadoOmit
    pAdministrativo?: PAdministrativoOmit
    medico?: MedicoOmit
    medico_Equipo?: Medico_EquipoOmit
    cita?: CitaOmit
    pAdmin_Modifica_Paciente?: PAdmin_Modifica_PacienteOmit
    actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaOmit
    medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoOmit
    registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoOmit
    pAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaOmit
    diagnostico?: DiagnosticoOmit
    medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EquipamientoCountOutputType
   */

  export type EquipamientoCountOutputType = {
    medicoEquipo: number
  }

  export type EquipamientoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicoEquipo?: boolean | EquipamientoCountOutputTypeCountMedicoEquipoArgs
  }

  // Custom InputTypes
  /**
   * EquipamientoCountOutputType without action
   */
  export type EquipamientoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipamientoCountOutputType
     */
    select?: EquipamientoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipamientoCountOutputType without action
   */
  export type EquipamientoCountOutputTypeCountMedicoEquipoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Medico_EquipoWhereInput
  }


  /**
   * Count Type EmpleadoCountOutputType
   */

  export type EmpleadoCountOutputType = {
    pAdministrativo: number
    medico: number
  }

  export type EmpleadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pAdministrativo?: boolean | EmpleadoCountOutputTypeCountPAdministrativoArgs
    medico?: boolean | EmpleadoCountOutputTypeCountMedicoArgs
  }

  // Custom InputTypes
  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpleadoCountOutputType
     */
    select?: EmpleadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeCountPAdministrativoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PAdministrativoWhereInput
  }

  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeCountMedicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicoWhereInput
  }


  /**
   * Count Type PAdministrativoCountOutputType
   */

  export type PAdministrativoCountOutputType = {
    PAdmin_Modifica_Paciente: number
    PAdmin_Gestiona_Cita: number
  }

  export type PAdministrativoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PAdmin_Modifica_Paciente?: boolean | PAdministrativoCountOutputTypeCountPAdmin_Modifica_PacienteArgs
    PAdmin_Gestiona_Cita?: boolean | PAdministrativoCountOutputTypeCountPAdmin_Gestiona_CitaArgs
  }

  // Custom InputTypes
  /**
   * PAdministrativoCountOutputType without action
   */
  export type PAdministrativoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdministrativoCountOutputType
     */
    select?: PAdministrativoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PAdministrativoCountOutputType without action
   */
  export type PAdministrativoCountOutputTypeCountPAdmin_Modifica_PacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PAdmin_Modifica_PacienteWhereInput
  }

  /**
   * PAdministrativoCountOutputType without action
   */
  export type PAdministrativoCountOutputTypeCountPAdmin_Gestiona_CitaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PAdmin_Gestiona_CitaWhereInput
  }


  /**
   * Count Type MedicoCountOutputType
   */

  export type MedicoCountOutputType = {
    medicoEquipo: number
    Cita: number
    Actualizaciones_HistoriaClinica: number
    Medico_Preescribe_Medicamento: number
    Registro_Consulta_Medicamento: number
    Medico_dictamina_diagnostico: number
  }

  export type MedicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicoEquipo?: boolean | MedicoCountOutputTypeCountMedicoEquipoArgs
    Cita?: boolean | MedicoCountOutputTypeCountCitaArgs
    Actualizaciones_HistoriaClinica?: boolean | MedicoCountOutputTypeCountActualizaciones_HistoriaClinicaArgs
    Medico_Preescribe_Medicamento?: boolean | MedicoCountOutputTypeCountMedico_Preescribe_MedicamentoArgs
    Registro_Consulta_Medicamento?: boolean | MedicoCountOutputTypeCountRegistro_Consulta_MedicamentoArgs
    Medico_dictamina_diagnostico?: boolean | MedicoCountOutputTypeCountMedico_dictamina_diagnosticoArgs
  }

  // Custom InputTypes
  /**
   * MedicoCountOutputType without action
   */
  export type MedicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicoCountOutputType
     */
    select?: MedicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicoCountOutputType without action
   */
  export type MedicoCountOutputTypeCountMedicoEquipoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Medico_EquipoWhereInput
  }

  /**
   * MedicoCountOutputType without action
   */
  export type MedicoCountOutputTypeCountCitaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
  }

  /**
   * MedicoCountOutputType without action
   */
  export type MedicoCountOutputTypeCountActualizaciones_HistoriaClinicaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Actualizaciones_HistoriaClinicaWhereInput
  }

  /**
   * MedicoCountOutputType without action
   */
  export type MedicoCountOutputTypeCountMedico_Preescribe_MedicamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Medico_Preescribe_MedicamentoWhereInput
  }

  /**
   * MedicoCountOutputType without action
   */
  export type MedicoCountOutputTypeCountRegistro_Consulta_MedicamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Registro_Consulta_MedicamentoWhereInput
  }

  /**
   * MedicoCountOutputType without action
   */
  export type MedicoCountOutputTypeCountMedico_dictamina_diagnosticoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Medico_dictamina_diagnosticoWhereInput
  }


  /**
   * Count Type CitaCountOutputType
   */

  export type CitaCountOutputType = {
    Actualizaciones_HistoriaClinica: number
    Medico_Preescribe_Medicamento: number
    PAdmin_Gestiona_Cita: number
    Medico_dictamina_diagnostico: number
  }

  export type CitaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Actualizaciones_HistoriaClinica?: boolean | CitaCountOutputTypeCountActualizaciones_HistoriaClinicaArgs
    Medico_Preescribe_Medicamento?: boolean | CitaCountOutputTypeCountMedico_Preescribe_MedicamentoArgs
    PAdmin_Gestiona_Cita?: boolean | CitaCountOutputTypeCountPAdmin_Gestiona_CitaArgs
    Medico_dictamina_diagnostico?: boolean | CitaCountOutputTypeCountMedico_dictamina_diagnosticoArgs
  }

  // Custom InputTypes
  /**
   * CitaCountOutputType without action
   */
  export type CitaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitaCountOutputType
     */
    select?: CitaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CitaCountOutputType without action
   */
  export type CitaCountOutputTypeCountActualizaciones_HistoriaClinicaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Actualizaciones_HistoriaClinicaWhereInput
  }

  /**
   * CitaCountOutputType without action
   */
  export type CitaCountOutputTypeCountMedico_Preescribe_MedicamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Medico_Preescribe_MedicamentoWhereInput
  }

  /**
   * CitaCountOutputType without action
   */
  export type CitaCountOutputTypeCountPAdmin_Gestiona_CitaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PAdmin_Gestiona_CitaWhereInput
  }

  /**
   * CitaCountOutputType without action
   */
  export type CitaCountOutputTypeCountMedico_dictamina_diagnosticoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Medico_dictamina_diagnosticoWhereInput
  }


  /**
   * Count Type DiagnosticoCountOutputType
   */

  export type DiagnosticoCountOutputType = {
    medicoDictaminaDiagnostico: number
  }

  export type DiagnosticoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicoDictaminaDiagnostico?: boolean | DiagnosticoCountOutputTypeCountMedicoDictaminaDiagnosticoArgs
  }

  // Custom InputTypes
  /**
   * DiagnosticoCountOutputType without action
   */
  export type DiagnosticoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticoCountOutputType
     */
    select?: DiagnosticoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiagnosticoCountOutputType without action
   */
  export type DiagnosticoCountOutputTypeCountMedicoDictaminaDiagnosticoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Medico_dictamina_diagnosticoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Equipamiento
   */

  export type AggregateEquipamiento = {
    _count: EquipamientoCountAggregateOutputType | null
    _avg: EquipamientoAvgAggregateOutputType | null
    _sum: EquipamientoSumAggregateOutputType | null
    _min: EquipamientoMinAggregateOutputType | null
    _max: EquipamientoMaxAggregateOutputType | null
  }

  export type EquipamientoAvgAggregateOutputType = {
    idEquipamiento: number | null
    idDepartamento: number | null
  }

  export type EquipamientoSumAggregateOutputType = {
    idEquipamiento: number | null
    idDepartamento: number | null
  }

  export type EquipamientoMinAggregateOutputType = {
    idEquipamiento: number | null
    idDepartamento: number | null
    nombre: string | null
    estado: string | null
    FContratacion: Date | null
  }

  export type EquipamientoMaxAggregateOutputType = {
    idEquipamiento: number | null
    idDepartamento: number | null
    nombre: string | null
    estado: string | null
    FContratacion: Date | null
  }

  export type EquipamientoCountAggregateOutputType = {
    idEquipamiento: number
    idDepartamento: number
    nombre: number
    estado: number
    FContratacion: number
    _all: number
  }


  export type EquipamientoAvgAggregateInputType = {
    idEquipamiento?: true
    idDepartamento?: true
  }

  export type EquipamientoSumAggregateInputType = {
    idEquipamiento?: true
    idDepartamento?: true
  }

  export type EquipamientoMinAggregateInputType = {
    idEquipamiento?: true
    idDepartamento?: true
    nombre?: true
    estado?: true
    FContratacion?: true
  }

  export type EquipamientoMaxAggregateInputType = {
    idEquipamiento?: true
    idDepartamento?: true
    nombre?: true
    estado?: true
    FContratacion?: true
  }

  export type EquipamientoCountAggregateInputType = {
    idEquipamiento?: true
    idDepartamento?: true
    nombre?: true
    estado?: true
    FContratacion?: true
    _all?: true
  }

  export type EquipamientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipamiento to aggregate.
     */
    where?: EquipamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipamientos to fetch.
     */
    orderBy?: EquipamientoOrderByWithRelationInput | EquipamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipamientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipamientos
    **/
    _count?: true | EquipamientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipamientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipamientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipamientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipamientoMaxAggregateInputType
  }

  export type GetEquipamientoAggregateType<T extends EquipamientoAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipamiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipamiento[P]>
      : GetScalarType<T[P], AggregateEquipamiento[P]>
  }




  export type EquipamientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipamientoWhereInput
    orderBy?: EquipamientoOrderByWithAggregationInput | EquipamientoOrderByWithAggregationInput[]
    by: EquipamientoScalarFieldEnum[] | EquipamientoScalarFieldEnum
    having?: EquipamientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipamientoCountAggregateInputType | true
    _avg?: EquipamientoAvgAggregateInputType
    _sum?: EquipamientoSumAggregateInputType
    _min?: EquipamientoMinAggregateInputType
    _max?: EquipamientoMaxAggregateInputType
  }

  export type EquipamientoGroupByOutputType = {
    idEquipamiento: number
    idDepartamento: number
    nombre: string
    estado: string
    FContratacion: Date
    _count: EquipamientoCountAggregateOutputType | null
    _avg: EquipamientoAvgAggregateOutputType | null
    _sum: EquipamientoSumAggregateOutputType | null
    _min: EquipamientoMinAggregateOutputType | null
    _max: EquipamientoMaxAggregateOutputType | null
  }

  type GetEquipamientoGroupByPayload<T extends EquipamientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipamientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipamientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipamientoGroupByOutputType[P]>
            : GetScalarType<T[P], EquipamientoGroupByOutputType[P]>
        }
      >
    >


  export type EquipamientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEquipamiento?: boolean
    idDepartamento?: boolean
    nombre?: boolean
    estado?: boolean
    FContratacion?: boolean
    medicoEquipo?: boolean | Equipamiento$medicoEquipoArgs<ExtArgs>
    _count?: boolean | EquipamientoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipamiento"]>

  export type EquipamientoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEquipamiento?: boolean
    idDepartamento?: boolean
    nombre?: boolean
    estado?: boolean
    FContratacion?: boolean
  }, ExtArgs["result"]["equipamiento"]>

  export type EquipamientoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEquipamiento?: boolean
    idDepartamento?: boolean
    nombre?: boolean
    estado?: boolean
    FContratacion?: boolean
  }, ExtArgs["result"]["equipamiento"]>

  export type EquipamientoSelectScalar = {
    idEquipamiento?: boolean
    idDepartamento?: boolean
    nombre?: boolean
    estado?: boolean
    FContratacion?: boolean
  }

  export type EquipamientoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idEquipamiento" | "idDepartamento" | "nombre" | "estado" | "FContratacion", ExtArgs["result"]["equipamiento"]>
  export type EquipamientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicoEquipo?: boolean | Equipamiento$medicoEquipoArgs<ExtArgs>
    _count?: boolean | EquipamientoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipamientoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EquipamientoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EquipamientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipamiento"
    objects: {
      medicoEquipo: Prisma.$Medico_EquipoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idEquipamiento: number
      idDepartamento: number
      nombre: string
      estado: string
      FContratacion: Date
    }, ExtArgs["result"]["equipamiento"]>
    composites: {}
  }

  type EquipamientoGetPayload<S extends boolean | null | undefined | EquipamientoDefaultArgs> = $Result.GetResult<Prisma.$EquipamientoPayload, S>

  type EquipamientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipamientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipamientoCountAggregateInputType | true
    }

  export interface EquipamientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipamiento'], meta: { name: 'Equipamiento' } }
    /**
     * Find zero or one Equipamiento that matches the filter.
     * @param {EquipamientoFindUniqueArgs} args - Arguments to find a Equipamiento
     * @example
     * // Get one Equipamiento
     * const equipamiento = await prisma.equipamiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipamientoFindUniqueArgs>(args: SelectSubset<T, EquipamientoFindUniqueArgs<ExtArgs>>): Prisma__EquipamientoClient<$Result.GetResult<Prisma.$EquipamientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipamiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipamientoFindUniqueOrThrowArgs} args - Arguments to find a Equipamiento
     * @example
     * // Get one Equipamiento
     * const equipamiento = await prisma.equipamiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipamientoFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipamientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipamientoClient<$Result.GetResult<Prisma.$EquipamientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipamiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamientoFindFirstArgs} args - Arguments to find a Equipamiento
     * @example
     * // Get one Equipamiento
     * const equipamiento = await prisma.equipamiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipamientoFindFirstArgs>(args?: SelectSubset<T, EquipamientoFindFirstArgs<ExtArgs>>): Prisma__EquipamientoClient<$Result.GetResult<Prisma.$EquipamientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipamiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamientoFindFirstOrThrowArgs} args - Arguments to find a Equipamiento
     * @example
     * // Get one Equipamiento
     * const equipamiento = await prisma.equipamiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipamientoFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipamientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipamientoClient<$Result.GetResult<Prisma.$EquipamientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipamientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipamientos
     * const equipamientos = await prisma.equipamiento.findMany()
     * 
     * // Get first 10 Equipamientos
     * const equipamientos = await prisma.equipamiento.findMany({ take: 10 })
     * 
     * // Only select the `idEquipamiento`
     * const equipamientoWithIdEquipamientoOnly = await prisma.equipamiento.findMany({ select: { idEquipamiento: true } })
     * 
     */
    findMany<T extends EquipamientoFindManyArgs>(args?: SelectSubset<T, EquipamientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipamientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipamiento.
     * @param {EquipamientoCreateArgs} args - Arguments to create a Equipamiento.
     * @example
     * // Create one Equipamiento
     * const Equipamiento = await prisma.equipamiento.create({
     *   data: {
     *     // ... data to create a Equipamiento
     *   }
     * })
     * 
     */
    create<T extends EquipamientoCreateArgs>(args: SelectSubset<T, EquipamientoCreateArgs<ExtArgs>>): Prisma__EquipamientoClient<$Result.GetResult<Prisma.$EquipamientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipamientos.
     * @param {EquipamientoCreateManyArgs} args - Arguments to create many Equipamientos.
     * @example
     * // Create many Equipamientos
     * const equipamiento = await prisma.equipamiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipamientoCreateManyArgs>(args?: SelectSubset<T, EquipamientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipamientos and returns the data saved in the database.
     * @param {EquipamientoCreateManyAndReturnArgs} args - Arguments to create many Equipamientos.
     * @example
     * // Create many Equipamientos
     * const equipamiento = await prisma.equipamiento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipamientos and only return the `idEquipamiento`
     * const equipamientoWithIdEquipamientoOnly = await prisma.equipamiento.createManyAndReturn({
     *   select: { idEquipamiento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipamientoCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipamientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipamientoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipamiento.
     * @param {EquipamientoDeleteArgs} args - Arguments to delete one Equipamiento.
     * @example
     * // Delete one Equipamiento
     * const Equipamiento = await prisma.equipamiento.delete({
     *   where: {
     *     // ... filter to delete one Equipamiento
     *   }
     * })
     * 
     */
    delete<T extends EquipamientoDeleteArgs>(args: SelectSubset<T, EquipamientoDeleteArgs<ExtArgs>>): Prisma__EquipamientoClient<$Result.GetResult<Prisma.$EquipamientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipamiento.
     * @param {EquipamientoUpdateArgs} args - Arguments to update one Equipamiento.
     * @example
     * // Update one Equipamiento
     * const equipamiento = await prisma.equipamiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipamientoUpdateArgs>(args: SelectSubset<T, EquipamientoUpdateArgs<ExtArgs>>): Prisma__EquipamientoClient<$Result.GetResult<Prisma.$EquipamientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipamientos.
     * @param {EquipamientoDeleteManyArgs} args - Arguments to filter Equipamientos to delete.
     * @example
     * // Delete a few Equipamientos
     * const { count } = await prisma.equipamiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipamientoDeleteManyArgs>(args?: SelectSubset<T, EquipamientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipamientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipamientos
     * const equipamiento = await prisma.equipamiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipamientoUpdateManyArgs>(args: SelectSubset<T, EquipamientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipamientos and returns the data updated in the database.
     * @param {EquipamientoUpdateManyAndReturnArgs} args - Arguments to update many Equipamientos.
     * @example
     * // Update many Equipamientos
     * const equipamiento = await prisma.equipamiento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipamientos and only return the `idEquipamiento`
     * const equipamientoWithIdEquipamientoOnly = await prisma.equipamiento.updateManyAndReturn({
     *   select: { idEquipamiento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipamientoUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipamientoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipamientoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipamiento.
     * @param {EquipamientoUpsertArgs} args - Arguments to update or create a Equipamiento.
     * @example
     * // Update or create a Equipamiento
     * const equipamiento = await prisma.equipamiento.upsert({
     *   create: {
     *     // ... data to create a Equipamiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipamiento we want to update
     *   }
     * })
     */
    upsert<T extends EquipamientoUpsertArgs>(args: SelectSubset<T, EquipamientoUpsertArgs<ExtArgs>>): Prisma__EquipamientoClient<$Result.GetResult<Prisma.$EquipamientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipamientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamientoCountArgs} args - Arguments to filter Equipamientos to count.
     * @example
     * // Count the number of Equipamientos
     * const count = await prisma.equipamiento.count({
     *   where: {
     *     // ... the filter for the Equipamientos we want to count
     *   }
     * })
    **/
    count<T extends EquipamientoCountArgs>(
      args?: Subset<T, EquipamientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipamientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipamiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipamientoAggregateArgs>(args: Subset<T, EquipamientoAggregateArgs>): Prisma.PrismaPromise<GetEquipamientoAggregateType<T>>

    /**
     * Group by Equipamiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamientoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipamientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipamientoGroupByArgs['orderBy'] }
        : { orderBy?: EquipamientoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipamientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipamientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipamiento model
   */
  readonly fields: EquipamientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipamiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipamientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicoEquipo<T extends Equipamiento$medicoEquipoArgs<ExtArgs> = {}>(args?: Subset<T, Equipamiento$medicoEquipoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Medico_EquipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Equipamiento model
   */
  interface EquipamientoFieldRefs {
    readonly idEquipamiento: FieldRef<"Equipamiento", 'Int'>
    readonly idDepartamento: FieldRef<"Equipamiento", 'Int'>
    readonly nombre: FieldRef<"Equipamiento", 'String'>
    readonly estado: FieldRef<"Equipamiento", 'String'>
    readonly FContratacion: FieldRef<"Equipamiento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Equipamiento findUnique
   */
  export type EquipamientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamiento
     */
    select?: EquipamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamiento
     */
    omit?: EquipamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamientoInclude<ExtArgs> | null
    /**
     * Filter, which Equipamiento to fetch.
     */
    where: EquipamientoWhereUniqueInput
  }

  /**
   * Equipamiento findUniqueOrThrow
   */
  export type EquipamientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamiento
     */
    select?: EquipamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamiento
     */
    omit?: EquipamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamientoInclude<ExtArgs> | null
    /**
     * Filter, which Equipamiento to fetch.
     */
    where: EquipamientoWhereUniqueInput
  }

  /**
   * Equipamiento findFirst
   */
  export type EquipamientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamiento
     */
    select?: EquipamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamiento
     */
    omit?: EquipamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamientoInclude<ExtArgs> | null
    /**
     * Filter, which Equipamiento to fetch.
     */
    where?: EquipamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipamientos to fetch.
     */
    orderBy?: EquipamientoOrderByWithRelationInput | EquipamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipamientos.
     */
    cursor?: EquipamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipamientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipamientos.
     */
    distinct?: EquipamientoScalarFieldEnum | EquipamientoScalarFieldEnum[]
  }

  /**
   * Equipamiento findFirstOrThrow
   */
  export type EquipamientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamiento
     */
    select?: EquipamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamiento
     */
    omit?: EquipamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamientoInclude<ExtArgs> | null
    /**
     * Filter, which Equipamiento to fetch.
     */
    where?: EquipamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipamientos to fetch.
     */
    orderBy?: EquipamientoOrderByWithRelationInput | EquipamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipamientos.
     */
    cursor?: EquipamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipamientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipamientos.
     */
    distinct?: EquipamientoScalarFieldEnum | EquipamientoScalarFieldEnum[]
  }

  /**
   * Equipamiento findMany
   */
  export type EquipamientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamiento
     */
    select?: EquipamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamiento
     */
    omit?: EquipamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamientoInclude<ExtArgs> | null
    /**
     * Filter, which Equipamientos to fetch.
     */
    where?: EquipamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipamientos to fetch.
     */
    orderBy?: EquipamientoOrderByWithRelationInput | EquipamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipamientos.
     */
    cursor?: EquipamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipamientos.
     */
    skip?: number
    distinct?: EquipamientoScalarFieldEnum | EquipamientoScalarFieldEnum[]
  }

  /**
   * Equipamiento create
   */
  export type EquipamientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamiento
     */
    select?: EquipamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamiento
     */
    omit?: EquipamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamientoInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipamiento.
     */
    data: XOR<EquipamientoCreateInput, EquipamientoUncheckedCreateInput>
  }

  /**
   * Equipamiento createMany
   */
  export type EquipamientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipamientos.
     */
    data: EquipamientoCreateManyInput | EquipamientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipamiento createManyAndReturn
   */
  export type EquipamientoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamiento
     */
    select?: EquipamientoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamiento
     */
    omit?: EquipamientoOmit<ExtArgs> | null
    /**
     * The data used to create many Equipamientos.
     */
    data: EquipamientoCreateManyInput | EquipamientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipamiento update
   */
  export type EquipamientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamiento
     */
    select?: EquipamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamiento
     */
    omit?: EquipamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamientoInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipamiento.
     */
    data: XOR<EquipamientoUpdateInput, EquipamientoUncheckedUpdateInput>
    /**
     * Choose, which Equipamiento to update.
     */
    where: EquipamientoWhereUniqueInput
  }

  /**
   * Equipamiento updateMany
   */
  export type EquipamientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipamientos.
     */
    data: XOR<EquipamientoUpdateManyMutationInput, EquipamientoUncheckedUpdateManyInput>
    /**
     * Filter which Equipamientos to update
     */
    where?: EquipamientoWhereInput
    /**
     * Limit how many Equipamientos to update.
     */
    limit?: number
  }

  /**
   * Equipamiento updateManyAndReturn
   */
  export type EquipamientoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamiento
     */
    select?: EquipamientoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamiento
     */
    omit?: EquipamientoOmit<ExtArgs> | null
    /**
     * The data used to update Equipamientos.
     */
    data: XOR<EquipamientoUpdateManyMutationInput, EquipamientoUncheckedUpdateManyInput>
    /**
     * Filter which Equipamientos to update
     */
    where?: EquipamientoWhereInput
    /**
     * Limit how many Equipamientos to update.
     */
    limit?: number
  }

  /**
   * Equipamiento upsert
   */
  export type EquipamientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamiento
     */
    select?: EquipamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamiento
     */
    omit?: EquipamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamientoInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipamiento to update in case it exists.
     */
    where: EquipamientoWhereUniqueInput
    /**
     * In case the Equipamiento found by the `where` argument doesn't exist, create a new Equipamiento with this data.
     */
    create: XOR<EquipamientoCreateInput, EquipamientoUncheckedCreateInput>
    /**
     * In case the Equipamiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipamientoUpdateInput, EquipamientoUncheckedUpdateInput>
  }

  /**
   * Equipamiento delete
   */
  export type EquipamientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamiento
     */
    select?: EquipamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamiento
     */
    omit?: EquipamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamientoInclude<ExtArgs> | null
    /**
     * Filter which Equipamiento to delete.
     */
    where: EquipamientoWhereUniqueInput
  }

  /**
   * Equipamiento deleteMany
   */
  export type EquipamientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipamientos to delete
     */
    where?: EquipamientoWhereInput
    /**
     * Limit how many Equipamientos to delete.
     */
    limit?: number
  }

  /**
   * Equipamiento.medicoEquipo
   */
  export type Equipamiento$medicoEquipoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Equipo
     */
    select?: Medico_EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Equipo
     */
    omit?: Medico_EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_EquipoInclude<ExtArgs> | null
    where?: Medico_EquipoWhereInput
    orderBy?: Medico_EquipoOrderByWithRelationInput | Medico_EquipoOrderByWithRelationInput[]
    cursor?: Medico_EquipoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Medico_EquipoScalarFieldEnum | Medico_EquipoScalarFieldEnum[]
  }

  /**
   * Equipamiento without action
   */
  export type EquipamientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamiento
     */
    select?: EquipamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipamiento
     */
    omit?: EquipamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipamientoInclude<ExtArgs> | null
  }


  /**
   * Model Empleado
   */

  export type AggregateEmpleado = {
    _count: EmpleadoCountAggregateOutputType | null
    _avg: EmpleadoAvgAggregateOutputType | null
    _sum: EmpleadoSumAggregateOutputType | null
    _min: EmpleadoMinAggregateOutputType | null
    _max: EmpleadoMaxAggregateOutputType | null
  }

  export type EmpleadoAvgAggregateOutputType = {
    idEmpleado: number | null
    idUsuario: number | null
    idDepartamento: number | null
  }

  export type EmpleadoSumAggregateOutputType = {
    idEmpleado: number | null
    idUsuario: bigint | null
    idDepartamento: number | null
  }

  export type EmpleadoMinAggregateOutputType = {
    idEmpleado: number | null
    idUsuario: bigint | null
    idDepartamento: number | null
    FContratacion: Date | null
    estado: string | null
  }

  export type EmpleadoMaxAggregateOutputType = {
    idEmpleado: number | null
    idUsuario: bigint | null
    idDepartamento: number | null
    FContratacion: Date | null
    estado: string | null
  }

  export type EmpleadoCountAggregateOutputType = {
    idEmpleado: number
    idUsuario: number
    idDepartamento: number
    FContratacion: number
    estado: number
    _all: number
  }


  export type EmpleadoAvgAggregateInputType = {
    idEmpleado?: true
    idUsuario?: true
    idDepartamento?: true
  }

  export type EmpleadoSumAggregateInputType = {
    idEmpleado?: true
    idUsuario?: true
    idDepartamento?: true
  }

  export type EmpleadoMinAggregateInputType = {
    idEmpleado?: true
    idUsuario?: true
    idDepartamento?: true
    FContratacion?: true
    estado?: true
  }

  export type EmpleadoMaxAggregateInputType = {
    idEmpleado?: true
    idUsuario?: true
    idDepartamento?: true
    FContratacion?: true
    estado?: true
  }

  export type EmpleadoCountAggregateInputType = {
    idEmpleado?: true
    idUsuario?: true
    idDepartamento?: true
    FContratacion?: true
    estado?: true
    _all?: true
  }

  export type EmpleadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empleado to aggregate.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empleados
    **/
    _count?: true | EmpleadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpleadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpleadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpleadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpleadoMaxAggregateInputType
  }

  export type GetEmpleadoAggregateType<T extends EmpleadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpleado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpleado[P]>
      : GetScalarType<T[P], AggregateEmpleado[P]>
  }




  export type EmpleadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpleadoWhereInput
    orderBy?: EmpleadoOrderByWithAggregationInput | EmpleadoOrderByWithAggregationInput[]
    by: EmpleadoScalarFieldEnum[] | EmpleadoScalarFieldEnum
    having?: EmpleadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpleadoCountAggregateInputType | true
    _avg?: EmpleadoAvgAggregateInputType
    _sum?: EmpleadoSumAggregateInputType
    _min?: EmpleadoMinAggregateInputType
    _max?: EmpleadoMaxAggregateInputType
  }

  export type EmpleadoGroupByOutputType = {
    idEmpleado: number
    idUsuario: bigint
    idDepartamento: number
    FContratacion: Date
    estado: string
    _count: EmpleadoCountAggregateOutputType | null
    _avg: EmpleadoAvgAggregateOutputType | null
    _sum: EmpleadoSumAggregateOutputType | null
    _min: EmpleadoMinAggregateOutputType | null
    _max: EmpleadoMaxAggregateOutputType | null
  }

  type GetEmpleadoGroupByPayload<T extends EmpleadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpleadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpleadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpleadoGroupByOutputType[P]>
            : GetScalarType<T[P], EmpleadoGroupByOutputType[P]>
        }
      >
    >


  export type EmpleadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEmpleado?: boolean
    idUsuario?: boolean
    idDepartamento?: boolean
    FContratacion?: boolean
    estado?: boolean
    pAdministrativo?: boolean | Empleado$pAdministrativoArgs<ExtArgs>
    medico?: boolean | Empleado$medicoArgs<ExtArgs>
    _count?: boolean | EmpleadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empleado"]>

  export type EmpleadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEmpleado?: boolean
    idUsuario?: boolean
    idDepartamento?: boolean
    FContratacion?: boolean
    estado?: boolean
  }, ExtArgs["result"]["empleado"]>

  export type EmpleadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEmpleado?: boolean
    idUsuario?: boolean
    idDepartamento?: boolean
    FContratacion?: boolean
    estado?: boolean
  }, ExtArgs["result"]["empleado"]>

  export type EmpleadoSelectScalar = {
    idEmpleado?: boolean
    idUsuario?: boolean
    idDepartamento?: boolean
    FContratacion?: boolean
    estado?: boolean
  }

  export type EmpleadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idEmpleado" | "idUsuario" | "idDepartamento" | "FContratacion" | "estado", ExtArgs["result"]["empleado"]>
  export type EmpleadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pAdministrativo?: boolean | Empleado$pAdministrativoArgs<ExtArgs>
    medico?: boolean | Empleado$medicoArgs<ExtArgs>
    _count?: boolean | EmpleadoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmpleadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmpleadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmpleadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empleado"
    objects: {
      pAdministrativo: Prisma.$PAdministrativoPayload<ExtArgs>[]
      medico: Prisma.$MedicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idEmpleado: number
      idUsuario: bigint
      idDepartamento: number
      FContratacion: Date
      estado: string
    }, ExtArgs["result"]["empleado"]>
    composites: {}
  }

  type EmpleadoGetPayload<S extends boolean | null | undefined | EmpleadoDefaultArgs> = $Result.GetResult<Prisma.$EmpleadoPayload, S>

  type EmpleadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpleadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpleadoCountAggregateInputType | true
    }

  export interface EmpleadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empleado'], meta: { name: 'Empleado' } }
    /**
     * Find zero or one Empleado that matches the filter.
     * @param {EmpleadoFindUniqueArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpleadoFindUniqueArgs>(args: SelectSubset<T, EmpleadoFindUniqueArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empleado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpleadoFindUniqueOrThrowArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpleadoFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpleadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empleado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoFindFirstArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpleadoFindFirstArgs>(args?: SelectSubset<T, EmpleadoFindFirstArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empleado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoFindFirstOrThrowArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpleadoFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpleadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empleados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empleados
     * const empleados = await prisma.empleado.findMany()
     * 
     * // Get first 10 Empleados
     * const empleados = await prisma.empleado.findMany({ take: 10 })
     * 
     * // Only select the `idEmpleado`
     * const empleadoWithIdEmpleadoOnly = await prisma.empleado.findMany({ select: { idEmpleado: true } })
     * 
     */
    findMany<T extends EmpleadoFindManyArgs>(args?: SelectSubset<T, EmpleadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empleado.
     * @param {EmpleadoCreateArgs} args - Arguments to create a Empleado.
     * @example
     * // Create one Empleado
     * const Empleado = await prisma.empleado.create({
     *   data: {
     *     // ... data to create a Empleado
     *   }
     * })
     * 
     */
    create<T extends EmpleadoCreateArgs>(args: SelectSubset<T, EmpleadoCreateArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empleados.
     * @param {EmpleadoCreateManyArgs} args - Arguments to create many Empleados.
     * @example
     * // Create many Empleados
     * const empleado = await prisma.empleado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpleadoCreateManyArgs>(args?: SelectSubset<T, EmpleadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empleados and returns the data saved in the database.
     * @param {EmpleadoCreateManyAndReturnArgs} args - Arguments to create many Empleados.
     * @example
     * // Create many Empleados
     * const empleado = await prisma.empleado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empleados and only return the `idEmpleado`
     * const empleadoWithIdEmpleadoOnly = await prisma.empleado.createManyAndReturn({
     *   select: { idEmpleado: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmpleadoCreateManyAndReturnArgs>(args?: SelectSubset<T, EmpleadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Empleado.
     * @param {EmpleadoDeleteArgs} args - Arguments to delete one Empleado.
     * @example
     * // Delete one Empleado
     * const Empleado = await prisma.empleado.delete({
     *   where: {
     *     // ... filter to delete one Empleado
     *   }
     * })
     * 
     */
    delete<T extends EmpleadoDeleteArgs>(args: SelectSubset<T, EmpleadoDeleteArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empleado.
     * @param {EmpleadoUpdateArgs} args - Arguments to update one Empleado.
     * @example
     * // Update one Empleado
     * const empleado = await prisma.empleado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpleadoUpdateArgs>(args: SelectSubset<T, EmpleadoUpdateArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empleados.
     * @param {EmpleadoDeleteManyArgs} args - Arguments to filter Empleados to delete.
     * @example
     * // Delete a few Empleados
     * const { count } = await prisma.empleado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpleadoDeleteManyArgs>(args?: SelectSubset<T, EmpleadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empleados
     * const empleado = await prisma.empleado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpleadoUpdateManyArgs>(args: SelectSubset<T, EmpleadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empleados and returns the data updated in the database.
     * @param {EmpleadoUpdateManyAndReturnArgs} args - Arguments to update many Empleados.
     * @example
     * // Update many Empleados
     * const empleado = await prisma.empleado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Empleados and only return the `idEmpleado`
     * const empleadoWithIdEmpleadoOnly = await prisma.empleado.updateManyAndReturn({
     *   select: { idEmpleado: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmpleadoUpdateManyAndReturnArgs>(args: SelectSubset<T, EmpleadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Empleado.
     * @param {EmpleadoUpsertArgs} args - Arguments to update or create a Empleado.
     * @example
     * // Update or create a Empleado
     * const empleado = await prisma.empleado.upsert({
     *   create: {
     *     // ... data to create a Empleado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empleado we want to update
     *   }
     * })
     */
    upsert<T extends EmpleadoUpsertArgs>(args: SelectSubset<T, EmpleadoUpsertArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoCountArgs} args - Arguments to filter Empleados to count.
     * @example
     * // Count the number of Empleados
     * const count = await prisma.empleado.count({
     *   where: {
     *     // ... the filter for the Empleados we want to count
     *   }
     * })
    **/
    count<T extends EmpleadoCountArgs>(
      args?: Subset<T, EmpleadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpleadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmpleadoAggregateArgs>(args: Subset<T, EmpleadoAggregateArgs>): Prisma.PrismaPromise<GetEmpleadoAggregateType<T>>

    /**
     * Group by Empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmpleadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpleadoGroupByArgs['orderBy'] }
        : { orderBy?: EmpleadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmpleadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpleadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empleado model
   */
  readonly fields: EmpleadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empleado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpleadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pAdministrativo<T extends Empleado$pAdministrativoArgs<ExtArgs> = {}>(args?: Subset<T, Empleado$pAdministrativoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAdministrativoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medico<T extends Empleado$medicoArgs<ExtArgs> = {}>(args?: Subset<T, Empleado$medicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Empleado model
   */
  interface EmpleadoFieldRefs {
    readonly idEmpleado: FieldRef<"Empleado", 'Int'>
    readonly idUsuario: FieldRef<"Empleado", 'BigInt'>
    readonly idDepartamento: FieldRef<"Empleado", 'Int'>
    readonly FContratacion: FieldRef<"Empleado", 'DateTime'>
    readonly estado: FieldRef<"Empleado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Empleado findUnique
   */
  export type EmpleadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado findUniqueOrThrow
   */
  export type EmpleadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado findFirst
   */
  export type EmpleadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empleados.
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Empleado findFirstOrThrow
   */
  export type EmpleadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleado to fetch.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empleados.
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Empleado findMany
   */
  export type EmpleadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter, which Empleados to fetch.
     */
    where?: EmpleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empleados to fetch.
     */
    orderBy?: EmpleadoOrderByWithRelationInput | EmpleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empleados.
     */
    cursor?: EmpleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empleados.
     */
    skip?: number
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * Empleado create
   */
  export type EmpleadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Empleado.
     */
    data: XOR<EmpleadoCreateInput, EmpleadoUncheckedCreateInput>
  }

  /**
   * Empleado createMany
   */
  export type EmpleadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empleados.
     */
    data: EmpleadoCreateManyInput | EmpleadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empleado createManyAndReturn
   */
  export type EmpleadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * The data used to create many Empleados.
     */
    data: EmpleadoCreateManyInput | EmpleadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empleado update
   */
  export type EmpleadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Empleado.
     */
    data: XOR<EmpleadoUpdateInput, EmpleadoUncheckedUpdateInput>
    /**
     * Choose, which Empleado to update.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado updateMany
   */
  export type EmpleadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empleados.
     */
    data: XOR<EmpleadoUpdateManyMutationInput, EmpleadoUncheckedUpdateManyInput>
    /**
     * Filter which Empleados to update
     */
    where?: EmpleadoWhereInput
    /**
     * Limit how many Empleados to update.
     */
    limit?: number
  }

  /**
   * Empleado updateManyAndReturn
   */
  export type EmpleadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * The data used to update Empleados.
     */
    data: XOR<EmpleadoUpdateManyMutationInput, EmpleadoUncheckedUpdateManyInput>
    /**
     * Filter which Empleados to update
     */
    where?: EmpleadoWhereInput
    /**
     * Limit how many Empleados to update.
     */
    limit?: number
  }

  /**
   * Empleado upsert
   */
  export type EmpleadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Empleado to update in case it exists.
     */
    where: EmpleadoWhereUniqueInput
    /**
     * In case the Empleado found by the `where` argument doesn't exist, create a new Empleado with this data.
     */
    create: XOR<EmpleadoCreateInput, EmpleadoUncheckedCreateInput>
    /**
     * In case the Empleado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpleadoUpdateInput, EmpleadoUncheckedUpdateInput>
  }

  /**
   * Empleado delete
   */
  export type EmpleadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
    /**
     * Filter which Empleado to delete.
     */
    where: EmpleadoWhereUniqueInput
  }

  /**
   * Empleado deleteMany
   */
  export type EmpleadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empleados to delete
     */
    where?: EmpleadoWhereInput
    /**
     * Limit how many Empleados to delete.
     */
    limit?: number
  }

  /**
   * Empleado.pAdministrativo
   */
  export type Empleado$pAdministrativoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdministrativo
     */
    select?: PAdministrativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdministrativo
     */
    omit?: PAdministrativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdministrativoInclude<ExtArgs> | null
    where?: PAdministrativoWhereInput
    orderBy?: PAdministrativoOrderByWithRelationInput | PAdministrativoOrderByWithRelationInput[]
    cursor?: PAdministrativoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PAdministrativoScalarFieldEnum | PAdministrativoScalarFieldEnum[]
  }

  /**
   * Empleado.medico
   */
  export type Empleado$medicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    where?: MedicoWhereInput
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    cursor?: MedicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Empleado without action
   */
  export type EmpleadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empleado
     */
    select?: EmpleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empleado
     */
    omit?: EmpleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpleadoInclude<ExtArgs> | null
  }


  /**
   * Model PAdministrativo
   */

  export type AggregatePAdministrativo = {
    _count: PAdministrativoCountAggregateOutputType | null
    _avg: PAdministrativoAvgAggregateOutputType | null
    _sum: PAdministrativoSumAggregateOutputType | null
    _min: PAdministrativoMinAggregateOutputType | null
    _max: PAdministrativoMaxAggregateOutputType | null
  }

  export type PAdministrativoAvgAggregateOutputType = {
    idPAdministrativo: number | null
    idEmpleado: number | null
    sueldo: number | null
  }

  export type PAdministrativoSumAggregateOutputType = {
    idPAdministrativo: number | null
    idEmpleado: number | null
    sueldo: bigint | null
  }

  export type PAdministrativoMinAggregateOutputType = {
    idPAdministrativo: number | null
    idEmpleado: number | null
    sueldo: bigint | null
  }

  export type PAdministrativoMaxAggregateOutputType = {
    idPAdministrativo: number | null
    idEmpleado: number | null
    sueldo: bigint | null
  }

  export type PAdministrativoCountAggregateOutputType = {
    idPAdministrativo: number
    idEmpleado: number
    sueldo: number
    _all: number
  }


  export type PAdministrativoAvgAggregateInputType = {
    idPAdministrativo?: true
    idEmpleado?: true
    sueldo?: true
  }

  export type PAdministrativoSumAggregateInputType = {
    idPAdministrativo?: true
    idEmpleado?: true
    sueldo?: true
  }

  export type PAdministrativoMinAggregateInputType = {
    idPAdministrativo?: true
    idEmpleado?: true
    sueldo?: true
  }

  export type PAdministrativoMaxAggregateInputType = {
    idPAdministrativo?: true
    idEmpleado?: true
    sueldo?: true
  }

  export type PAdministrativoCountAggregateInputType = {
    idPAdministrativo?: true
    idEmpleado?: true
    sueldo?: true
    _all?: true
  }

  export type PAdministrativoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PAdministrativo to aggregate.
     */
    where?: PAdministrativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAdministrativos to fetch.
     */
    orderBy?: PAdministrativoOrderByWithRelationInput | PAdministrativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PAdministrativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAdministrativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAdministrativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PAdministrativos
    **/
    _count?: true | PAdministrativoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PAdministrativoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PAdministrativoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PAdministrativoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PAdministrativoMaxAggregateInputType
  }

  export type GetPAdministrativoAggregateType<T extends PAdministrativoAggregateArgs> = {
        [P in keyof T & keyof AggregatePAdministrativo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePAdministrativo[P]>
      : GetScalarType<T[P], AggregatePAdministrativo[P]>
  }




  export type PAdministrativoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PAdministrativoWhereInput
    orderBy?: PAdministrativoOrderByWithAggregationInput | PAdministrativoOrderByWithAggregationInput[]
    by: PAdministrativoScalarFieldEnum[] | PAdministrativoScalarFieldEnum
    having?: PAdministrativoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PAdministrativoCountAggregateInputType | true
    _avg?: PAdministrativoAvgAggregateInputType
    _sum?: PAdministrativoSumAggregateInputType
    _min?: PAdministrativoMinAggregateInputType
    _max?: PAdministrativoMaxAggregateInputType
  }

  export type PAdministrativoGroupByOutputType = {
    idPAdministrativo: number
    idEmpleado: number
    sueldo: bigint
    _count: PAdministrativoCountAggregateOutputType | null
    _avg: PAdministrativoAvgAggregateOutputType | null
    _sum: PAdministrativoSumAggregateOutputType | null
    _min: PAdministrativoMinAggregateOutputType | null
    _max: PAdministrativoMaxAggregateOutputType | null
  }

  type GetPAdministrativoGroupByPayload<T extends PAdministrativoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PAdministrativoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PAdministrativoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PAdministrativoGroupByOutputType[P]>
            : GetScalarType<T[P], PAdministrativoGroupByOutputType[P]>
        }
      >
    >


  export type PAdministrativoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPAdministrativo?: boolean
    idEmpleado?: boolean
    sueldo?: boolean
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    PAdmin_Modifica_Paciente?: boolean | PAdministrativo$PAdmin_Modifica_PacienteArgs<ExtArgs>
    PAdmin_Gestiona_Cita?: boolean | PAdministrativo$PAdmin_Gestiona_CitaArgs<ExtArgs>
    _count?: boolean | PAdministrativoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pAdministrativo"]>

  export type PAdministrativoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPAdministrativo?: boolean
    idEmpleado?: boolean
    sueldo?: boolean
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pAdministrativo"]>

  export type PAdministrativoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPAdministrativo?: boolean
    idEmpleado?: boolean
    sueldo?: boolean
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pAdministrativo"]>

  export type PAdministrativoSelectScalar = {
    idPAdministrativo?: boolean
    idEmpleado?: boolean
    sueldo?: boolean
  }

  export type PAdministrativoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPAdministrativo" | "idEmpleado" | "sueldo", ExtArgs["result"]["pAdministrativo"]>
  export type PAdministrativoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    PAdmin_Modifica_Paciente?: boolean | PAdministrativo$PAdmin_Modifica_PacienteArgs<ExtArgs>
    PAdmin_Gestiona_Cita?: boolean | PAdministrativo$PAdmin_Gestiona_CitaArgs<ExtArgs>
    _count?: boolean | PAdministrativoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PAdministrativoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
  }
  export type PAdministrativoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
  }

  export type $PAdministrativoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PAdministrativo"
    objects: {
      empleado: Prisma.$EmpleadoPayload<ExtArgs>
      PAdmin_Modifica_Paciente: Prisma.$PAdmin_Modifica_PacientePayload<ExtArgs>[]
      PAdmin_Gestiona_Cita: Prisma.$PAdmin_Gestiona_CitaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idPAdministrativo: number
      idEmpleado: number
      sueldo: bigint
    }, ExtArgs["result"]["pAdministrativo"]>
    composites: {}
  }

  type PAdministrativoGetPayload<S extends boolean | null | undefined | PAdministrativoDefaultArgs> = $Result.GetResult<Prisma.$PAdministrativoPayload, S>

  type PAdministrativoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PAdministrativoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PAdministrativoCountAggregateInputType | true
    }

  export interface PAdministrativoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PAdministrativo'], meta: { name: 'PAdministrativo' } }
    /**
     * Find zero or one PAdministrativo that matches the filter.
     * @param {PAdministrativoFindUniqueArgs} args - Arguments to find a PAdministrativo
     * @example
     * // Get one PAdministrativo
     * const pAdministrativo = await prisma.pAdministrativo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PAdministrativoFindUniqueArgs>(args: SelectSubset<T, PAdministrativoFindUniqueArgs<ExtArgs>>): Prisma__PAdministrativoClient<$Result.GetResult<Prisma.$PAdministrativoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PAdministrativo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PAdministrativoFindUniqueOrThrowArgs} args - Arguments to find a PAdministrativo
     * @example
     * // Get one PAdministrativo
     * const pAdministrativo = await prisma.pAdministrativo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PAdministrativoFindUniqueOrThrowArgs>(args: SelectSubset<T, PAdministrativoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PAdministrativoClient<$Result.GetResult<Prisma.$PAdministrativoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PAdministrativo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdministrativoFindFirstArgs} args - Arguments to find a PAdministrativo
     * @example
     * // Get one PAdministrativo
     * const pAdministrativo = await prisma.pAdministrativo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PAdministrativoFindFirstArgs>(args?: SelectSubset<T, PAdministrativoFindFirstArgs<ExtArgs>>): Prisma__PAdministrativoClient<$Result.GetResult<Prisma.$PAdministrativoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PAdministrativo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdministrativoFindFirstOrThrowArgs} args - Arguments to find a PAdministrativo
     * @example
     * // Get one PAdministrativo
     * const pAdministrativo = await prisma.pAdministrativo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PAdministrativoFindFirstOrThrowArgs>(args?: SelectSubset<T, PAdministrativoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PAdministrativoClient<$Result.GetResult<Prisma.$PAdministrativoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PAdministrativos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdministrativoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PAdministrativos
     * const pAdministrativos = await prisma.pAdministrativo.findMany()
     * 
     * // Get first 10 PAdministrativos
     * const pAdministrativos = await prisma.pAdministrativo.findMany({ take: 10 })
     * 
     * // Only select the `idPAdministrativo`
     * const pAdministrativoWithIdPAdministrativoOnly = await prisma.pAdministrativo.findMany({ select: { idPAdministrativo: true } })
     * 
     */
    findMany<T extends PAdministrativoFindManyArgs>(args?: SelectSubset<T, PAdministrativoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAdministrativoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PAdministrativo.
     * @param {PAdministrativoCreateArgs} args - Arguments to create a PAdministrativo.
     * @example
     * // Create one PAdministrativo
     * const PAdministrativo = await prisma.pAdministrativo.create({
     *   data: {
     *     // ... data to create a PAdministrativo
     *   }
     * })
     * 
     */
    create<T extends PAdministrativoCreateArgs>(args: SelectSubset<T, PAdministrativoCreateArgs<ExtArgs>>): Prisma__PAdministrativoClient<$Result.GetResult<Prisma.$PAdministrativoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PAdministrativos.
     * @param {PAdministrativoCreateManyArgs} args - Arguments to create many PAdministrativos.
     * @example
     * // Create many PAdministrativos
     * const pAdministrativo = await prisma.pAdministrativo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PAdministrativoCreateManyArgs>(args?: SelectSubset<T, PAdministrativoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PAdministrativos and returns the data saved in the database.
     * @param {PAdministrativoCreateManyAndReturnArgs} args - Arguments to create many PAdministrativos.
     * @example
     * // Create many PAdministrativos
     * const pAdministrativo = await prisma.pAdministrativo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PAdministrativos and only return the `idPAdministrativo`
     * const pAdministrativoWithIdPAdministrativoOnly = await prisma.pAdministrativo.createManyAndReturn({
     *   select: { idPAdministrativo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PAdministrativoCreateManyAndReturnArgs>(args?: SelectSubset<T, PAdministrativoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAdministrativoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PAdministrativo.
     * @param {PAdministrativoDeleteArgs} args - Arguments to delete one PAdministrativo.
     * @example
     * // Delete one PAdministrativo
     * const PAdministrativo = await prisma.pAdministrativo.delete({
     *   where: {
     *     // ... filter to delete one PAdministrativo
     *   }
     * })
     * 
     */
    delete<T extends PAdministrativoDeleteArgs>(args: SelectSubset<T, PAdministrativoDeleteArgs<ExtArgs>>): Prisma__PAdministrativoClient<$Result.GetResult<Prisma.$PAdministrativoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PAdministrativo.
     * @param {PAdministrativoUpdateArgs} args - Arguments to update one PAdministrativo.
     * @example
     * // Update one PAdministrativo
     * const pAdministrativo = await prisma.pAdministrativo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PAdministrativoUpdateArgs>(args: SelectSubset<T, PAdministrativoUpdateArgs<ExtArgs>>): Prisma__PAdministrativoClient<$Result.GetResult<Prisma.$PAdministrativoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PAdministrativos.
     * @param {PAdministrativoDeleteManyArgs} args - Arguments to filter PAdministrativos to delete.
     * @example
     * // Delete a few PAdministrativos
     * const { count } = await prisma.pAdministrativo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PAdministrativoDeleteManyArgs>(args?: SelectSubset<T, PAdministrativoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PAdministrativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdministrativoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PAdministrativos
     * const pAdministrativo = await prisma.pAdministrativo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PAdministrativoUpdateManyArgs>(args: SelectSubset<T, PAdministrativoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PAdministrativos and returns the data updated in the database.
     * @param {PAdministrativoUpdateManyAndReturnArgs} args - Arguments to update many PAdministrativos.
     * @example
     * // Update many PAdministrativos
     * const pAdministrativo = await prisma.pAdministrativo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PAdministrativos and only return the `idPAdministrativo`
     * const pAdministrativoWithIdPAdministrativoOnly = await prisma.pAdministrativo.updateManyAndReturn({
     *   select: { idPAdministrativo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PAdministrativoUpdateManyAndReturnArgs>(args: SelectSubset<T, PAdministrativoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAdministrativoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PAdministrativo.
     * @param {PAdministrativoUpsertArgs} args - Arguments to update or create a PAdministrativo.
     * @example
     * // Update or create a PAdministrativo
     * const pAdministrativo = await prisma.pAdministrativo.upsert({
     *   create: {
     *     // ... data to create a PAdministrativo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PAdministrativo we want to update
     *   }
     * })
     */
    upsert<T extends PAdministrativoUpsertArgs>(args: SelectSubset<T, PAdministrativoUpsertArgs<ExtArgs>>): Prisma__PAdministrativoClient<$Result.GetResult<Prisma.$PAdministrativoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PAdministrativos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdministrativoCountArgs} args - Arguments to filter PAdministrativos to count.
     * @example
     * // Count the number of PAdministrativos
     * const count = await prisma.pAdministrativo.count({
     *   where: {
     *     // ... the filter for the PAdministrativos we want to count
     *   }
     * })
    **/
    count<T extends PAdministrativoCountArgs>(
      args?: Subset<T, PAdministrativoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PAdministrativoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PAdministrativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdministrativoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PAdministrativoAggregateArgs>(args: Subset<T, PAdministrativoAggregateArgs>): Prisma.PrismaPromise<GetPAdministrativoAggregateType<T>>

    /**
     * Group by PAdministrativo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdministrativoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PAdministrativoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PAdministrativoGroupByArgs['orderBy'] }
        : { orderBy?: PAdministrativoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PAdministrativoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPAdministrativoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PAdministrativo model
   */
  readonly fields: PAdministrativoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PAdministrativo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PAdministrativoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleado<T extends EmpleadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpleadoDefaultArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PAdmin_Modifica_Paciente<T extends PAdministrativo$PAdmin_Modifica_PacienteArgs<ExtArgs> = {}>(args?: Subset<T, PAdministrativo$PAdmin_Modifica_PacienteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAdmin_Modifica_PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PAdmin_Gestiona_Cita<T extends PAdministrativo$PAdmin_Gestiona_CitaArgs<ExtArgs> = {}>(args?: Subset<T, PAdministrativo$PAdmin_Gestiona_CitaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAdmin_Gestiona_CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PAdministrativo model
   */
  interface PAdministrativoFieldRefs {
    readonly idPAdministrativo: FieldRef<"PAdministrativo", 'Int'>
    readonly idEmpleado: FieldRef<"PAdministrativo", 'Int'>
    readonly sueldo: FieldRef<"PAdministrativo", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * PAdministrativo findUnique
   */
  export type PAdministrativoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdministrativo
     */
    select?: PAdministrativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdministrativo
     */
    omit?: PAdministrativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdministrativoInclude<ExtArgs> | null
    /**
     * Filter, which PAdministrativo to fetch.
     */
    where: PAdministrativoWhereUniqueInput
  }

  /**
   * PAdministrativo findUniqueOrThrow
   */
  export type PAdministrativoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdministrativo
     */
    select?: PAdministrativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdministrativo
     */
    omit?: PAdministrativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdministrativoInclude<ExtArgs> | null
    /**
     * Filter, which PAdministrativo to fetch.
     */
    where: PAdministrativoWhereUniqueInput
  }

  /**
   * PAdministrativo findFirst
   */
  export type PAdministrativoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdministrativo
     */
    select?: PAdministrativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdministrativo
     */
    omit?: PAdministrativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdministrativoInclude<ExtArgs> | null
    /**
     * Filter, which PAdministrativo to fetch.
     */
    where?: PAdministrativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAdministrativos to fetch.
     */
    orderBy?: PAdministrativoOrderByWithRelationInput | PAdministrativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PAdministrativos.
     */
    cursor?: PAdministrativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAdministrativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAdministrativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PAdministrativos.
     */
    distinct?: PAdministrativoScalarFieldEnum | PAdministrativoScalarFieldEnum[]
  }

  /**
   * PAdministrativo findFirstOrThrow
   */
  export type PAdministrativoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdministrativo
     */
    select?: PAdministrativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdministrativo
     */
    omit?: PAdministrativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdministrativoInclude<ExtArgs> | null
    /**
     * Filter, which PAdministrativo to fetch.
     */
    where?: PAdministrativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAdministrativos to fetch.
     */
    orderBy?: PAdministrativoOrderByWithRelationInput | PAdministrativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PAdministrativos.
     */
    cursor?: PAdministrativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAdministrativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAdministrativos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PAdministrativos.
     */
    distinct?: PAdministrativoScalarFieldEnum | PAdministrativoScalarFieldEnum[]
  }

  /**
   * PAdministrativo findMany
   */
  export type PAdministrativoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdministrativo
     */
    select?: PAdministrativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdministrativo
     */
    omit?: PAdministrativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdministrativoInclude<ExtArgs> | null
    /**
     * Filter, which PAdministrativos to fetch.
     */
    where?: PAdministrativoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAdministrativos to fetch.
     */
    orderBy?: PAdministrativoOrderByWithRelationInput | PAdministrativoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PAdministrativos.
     */
    cursor?: PAdministrativoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAdministrativos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAdministrativos.
     */
    skip?: number
    distinct?: PAdministrativoScalarFieldEnum | PAdministrativoScalarFieldEnum[]
  }

  /**
   * PAdministrativo create
   */
  export type PAdministrativoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdministrativo
     */
    select?: PAdministrativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdministrativo
     */
    omit?: PAdministrativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdministrativoInclude<ExtArgs> | null
    /**
     * The data needed to create a PAdministrativo.
     */
    data: XOR<PAdministrativoCreateInput, PAdministrativoUncheckedCreateInput>
  }

  /**
   * PAdministrativo createMany
   */
  export type PAdministrativoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PAdministrativos.
     */
    data: PAdministrativoCreateManyInput | PAdministrativoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PAdministrativo createManyAndReturn
   */
  export type PAdministrativoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdministrativo
     */
    select?: PAdministrativoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PAdministrativo
     */
    omit?: PAdministrativoOmit<ExtArgs> | null
    /**
     * The data used to create many PAdministrativos.
     */
    data: PAdministrativoCreateManyInput | PAdministrativoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdministrativoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PAdministrativo update
   */
  export type PAdministrativoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdministrativo
     */
    select?: PAdministrativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdministrativo
     */
    omit?: PAdministrativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdministrativoInclude<ExtArgs> | null
    /**
     * The data needed to update a PAdministrativo.
     */
    data: XOR<PAdministrativoUpdateInput, PAdministrativoUncheckedUpdateInput>
    /**
     * Choose, which PAdministrativo to update.
     */
    where: PAdministrativoWhereUniqueInput
  }

  /**
   * PAdministrativo updateMany
   */
  export type PAdministrativoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PAdministrativos.
     */
    data: XOR<PAdministrativoUpdateManyMutationInput, PAdministrativoUncheckedUpdateManyInput>
    /**
     * Filter which PAdministrativos to update
     */
    where?: PAdministrativoWhereInput
    /**
     * Limit how many PAdministrativos to update.
     */
    limit?: number
  }

  /**
   * PAdministrativo updateManyAndReturn
   */
  export type PAdministrativoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdministrativo
     */
    select?: PAdministrativoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PAdministrativo
     */
    omit?: PAdministrativoOmit<ExtArgs> | null
    /**
     * The data used to update PAdministrativos.
     */
    data: XOR<PAdministrativoUpdateManyMutationInput, PAdministrativoUncheckedUpdateManyInput>
    /**
     * Filter which PAdministrativos to update
     */
    where?: PAdministrativoWhereInput
    /**
     * Limit how many PAdministrativos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdministrativoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PAdministrativo upsert
   */
  export type PAdministrativoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdministrativo
     */
    select?: PAdministrativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdministrativo
     */
    omit?: PAdministrativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdministrativoInclude<ExtArgs> | null
    /**
     * The filter to search for the PAdministrativo to update in case it exists.
     */
    where: PAdministrativoWhereUniqueInput
    /**
     * In case the PAdministrativo found by the `where` argument doesn't exist, create a new PAdministrativo with this data.
     */
    create: XOR<PAdministrativoCreateInput, PAdministrativoUncheckedCreateInput>
    /**
     * In case the PAdministrativo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PAdministrativoUpdateInput, PAdministrativoUncheckedUpdateInput>
  }

  /**
   * PAdministrativo delete
   */
  export type PAdministrativoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdministrativo
     */
    select?: PAdministrativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdministrativo
     */
    omit?: PAdministrativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdministrativoInclude<ExtArgs> | null
    /**
     * Filter which PAdministrativo to delete.
     */
    where: PAdministrativoWhereUniqueInput
  }

  /**
   * PAdministrativo deleteMany
   */
  export type PAdministrativoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PAdministrativos to delete
     */
    where?: PAdministrativoWhereInput
    /**
     * Limit how many PAdministrativos to delete.
     */
    limit?: number
  }

  /**
   * PAdministrativo.PAdmin_Modifica_Paciente
   */
  export type PAdministrativo$PAdmin_Modifica_PacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Modifica_Paciente
     */
    select?: PAdmin_Modifica_PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Modifica_Paciente
     */
    omit?: PAdmin_Modifica_PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Modifica_PacienteInclude<ExtArgs> | null
    where?: PAdmin_Modifica_PacienteWhereInput
    orderBy?: PAdmin_Modifica_PacienteOrderByWithRelationInput | PAdmin_Modifica_PacienteOrderByWithRelationInput[]
    cursor?: PAdmin_Modifica_PacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PAdmin_Modifica_PacienteScalarFieldEnum | PAdmin_Modifica_PacienteScalarFieldEnum[]
  }

  /**
   * PAdministrativo.PAdmin_Gestiona_Cita
   */
  export type PAdministrativo$PAdmin_Gestiona_CitaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Gestiona_Cita
     */
    select?: PAdmin_Gestiona_CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Gestiona_Cita
     */
    omit?: PAdmin_Gestiona_CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Gestiona_CitaInclude<ExtArgs> | null
    where?: PAdmin_Gestiona_CitaWhereInput
    orderBy?: PAdmin_Gestiona_CitaOrderByWithRelationInput | PAdmin_Gestiona_CitaOrderByWithRelationInput[]
    cursor?: PAdmin_Gestiona_CitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PAdmin_Gestiona_CitaScalarFieldEnum | PAdmin_Gestiona_CitaScalarFieldEnum[]
  }

  /**
   * PAdministrativo without action
   */
  export type PAdministrativoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdministrativo
     */
    select?: PAdministrativoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdministrativo
     */
    omit?: PAdministrativoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdministrativoInclude<ExtArgs> | null
  }


  /**
   * Model Medico
   */

  export type AggregateMedico = {
    _count: MedicoCountAggregateOutputType | null
    _avg: MedicoAvgAggregateOutputType | null
    _sum: MedicoSumAggregateOutputType | null
    _min: MedicoMinAggregateOutputType | null
    _max: MedicoMaxAggregateOutputType | null
  }

  export type MedicoAvgAggregateOutputType = {
    idMedico: number | null
    idEmpleado: number | null
    sueldo: number | null
  }

  export type MedicoSumAggregateOutputType = {
    idMedico: number | null
    idEmpleado: number | null
    sueldo: bigint | null
  }

  export type MedicoMinAggregateOutputType = {
    idMedico: number | null
    idEmpleado: number | null
    sueldo: bigint | null
  }

  export type MedicoMaxAggregateOutputType = {
    idMedico: number | null
    idEmpleado: number | null
    sueldo: bigint | null
  }

  export type MedicoCountAggregateOutputType = {
    idMedico: number
    idEmpleado: number
    sueldo: number
    _all: number
  }


  export type MedicoAvgAggregateInputType = {
    idMedico?: true
    idEmpleado?: true
    sueldo?: true
  }

  export type MedicoSumAggregateInputType = {
    idMedico?: true
    idEmpleado?: true
    sueldo?: true
  }

  export type MedicoMinAggregateInputType = {
    idMedico?: true
    idEmpleado?: true
    sueldo?: true
  }

  export type MedicoMaxAggregateInputType = {
    idMedico?: true
    idEmpleado?: true
    sueldo?: true
  }

  export type MedicoCountAggregateInputType = {
    idMedico?: true
    idEmpleado?: true
    sueldo?: true
    _all?: true
  }

  export type MedicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medico to aggregate.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicos
    **/
    _count?: true | MedicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicoMaxAggregateInputType
  }

  export type GetMedicoAggregateType<T extends MedicoAggregateArgs> = {
        [P in keyof T & keyof AggregateMedico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedico[P]>
      : GetScalarType<T[P], AggregateMedico[P]>
  }




  export type MedicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicoWhereInput
    orderBy?: MedicoOrderByWithAggregationInput | MedicoOrderByWithAggregationInput[]
    by: MedicoScalarFieldEnum[] | MedicoScalarFieldEnum
    having?: MedicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicoCountAggregateInputType | true
    _avg?: MedicoAvgAggregateInputType
    _sum?: MedicoSumAggregateInputType
    _min?: MedicoMinAggregateInputType
    _max?: MedicoMaxAggregateInputType
  }

  export type MedicoGroupByOutputType = {
    idMedico: number
    idEmpleado: number
    sueldo: bigint
    _count: MedicoCountAggregateOutputType | null
    _avg: MedicoAvgAggregateOutputType | null
    _sum: MedicoSumAggregateOutputType | null
    _min: MedicoMinAggregateOutputType | null
    _max: MedicoMaxAggregateOutputType | null
  }

  type GetMedicoGroupByPayload<T extends MedicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicoGroupByOutputType[P]>
            : GetScalarType<T[P], MedicoGroupByOutputType[P]>
        }
      >
    >


  export type MedicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMedico?: boolean
    idEmpleado?: boolean
    sueldo?: boolean
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    medicoEquipo?: boolean | Medico$medicoEquipoArgs<ExtArgs>
    Cita?: boolean | Medico$CitaArgs<ExtArgs>
    Actualizaciones_HistoriaClinica?: boolean | Medico$Actualizaciones_HistoriaClinicaArgs<ExtArgs>
    Medico_Preescribe_Medicamento?: boolean | Medico$Medico_Preescribe_MedicamentoArgs<ExtArgs>
    Registro_Consulta_Medicamento?: boolean | Medico$Registro_Consulta_MedicamentoArgs<ExtArgs>
    Medico_dictamina_diagnostico?: boolean | Medico$Medico_dictamina_diagnosticoArgs<ExtArgs>
    _count?: boolean | MedicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico"]>

  export type MedicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMedico?: boolean
    idEmpleado?: boolean
    sueldo?: boolean
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico"]>

  export type MedicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMedico?: boolean
    idEmpleado?: boolean
    sueldo?: boolean
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico"]>

  export type MedicoSelectScalar = {
    idMedico?: boolean
    idEmpleado?: boolean
    sueldo?: boolean
  }

  export type MedicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idMedico" | "idEmpleado" | "sueldo", ExtArgs["result"]["medico"]>
  export type MedicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
    medicoEquipo?: boolean | Medico$medicoEquipoArgs<ExtArgs>
    Cita?: boolean | Medico$CitaArgs<ExtArgs>
    Actualizaciones_HistoriaClinica?: boolean | Medico$Actualizaciones_HistoriaClinicaArgs<ExtArgs>
    Medico_Preescribe_Medicamento?: boolean | Medico$Medico_Preescribe_MedicamentoArgs<ExtArgs>
    Registro_Consulta_Medicamento?: boolean | Medico$Registro_Consulta_MedicamentoArgs<ExtArgs>
    Medico_dictamina_diagnostico?: boolean | Medico$Medico_dictamina_diagnosticoArgs<ExtArgs>
    _count?: boolean | MedicoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
  }
  export type MedicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | EmpleadoDefaultArgs<ExtArgs>
  }

  export type $MedicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medico"
    objects: {
      empleado: Prisma.$EmpleadoPayload<ExtArgs>
      medicoEquipo: Prisma.$Medico_EquipoPayload<ExtArgs>[]
      Cita: Prisma.$CitaPayload<ExtArgs>[]
      Actualizaciones_HistoriaClinica: Prisma.$Actualizaciones_HistoriaClinicaPayload<ExtArgs>[]
      Medico_Preescribe_Medicamento: Prisma.$Medico_Preescribe_MedicamentoPayload<ExtArgs>[]
      Registro_Consulta_Medicamento: Prisma.$Registro_Consulta_MedicamentoPayload<ExtArgs>[]
      Medico_dictamina_diagnostico: Prisma.$Medico_dictamina_diagnosticoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idMedico: number
      idEmpleado: number
      sueldo: bigint
    }, ExtArgs["result"]["medico"]>
    composites: {}
  }

  type MedicoGetPayload<S extends boolean | null | undefined | MedicoDefaultArgs> = $Result.GetResult<Prisma.$MedicoPayload, S>

  type MedicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicoCountAggregateInputType | true
    }

  export interface MedicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medico'], meta: { name: 'Medico' } }
    /**
     * Find zero or one Medico that matches the filter.
     * @param {MedicoFindUniqueArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicoFindUniqueArgs>(args: SelectSubset<T, MedicoFindUniqueArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicoFindUniqueOrThrowArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicoFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindFirstArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicoFindFirstArgs>(args?: SelectSubset<T, MedicoFindFirstArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindFirstOrThrowArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicoFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicos
     * const medicos = await prisma.medico.findMany()
     * 
     * // Get first 10 Medicos
     * const medicos = await prisma.medico.findMany({ take: 10 })
     * 
     * // Only select the `idMedico`
     * const medicoWithIdMedicoOnly = await prisma.medico.findMany({ select: { idMedico: true } })
     * 
     */
    findMany<T extends MedicoFindManyArgs>(args?: SelectSubset<T, MedicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medico.
     * @param {MedicoCreateArgs} args - Arguments to create a Medico.
     * @example
     * // Create one Medico
     * const Medico = await prisma.medico.create({
     *   data: {
     *     // ... data to create a Medico
     *   }
     * })
     * 
     */
    create<T extends MedicoCreateArgs>(args: SelectSubset<T, MedicoCreateArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicos.
     * @param {MedicoCreateManyArgs} args - Arguments to create many Medicos.
     * @example
     * // Create many Medicos
     * const medico = await prisma.medico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicoCreateManyArgs>(args?: SelectSubset<T, MedicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicos and returns the data saved in the database.
     * @param {MedicoCreateManyAndReturnArgs} args - Arguments to create many Medicos.
     * @example
     * // Create many Medicos
     * const medico = await prisma.medico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicos and only return the `idMedico`
     * const medicoWithIdMedicoOnly = await prisma.medico.createManyAndReturn({
     *   select: { idMedico: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicoCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medico.
     * @param {MedicoDeleteArgs} args - Arguments to delete one Medico.
     * @example
     * // Delete one Medico
     * const Medico = await prisma.medico.delete({
     *   where: {
     *     // ... filter to delete one Medico
     *   }
     * })
     * 
     */
    delete<T extends MedicoDeleteArgs>(args: SelectSubset<T, MedicoDeleteArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medico.
     * @param {MedicoUpdateArgs} args - Arguments to update one Medico.
     * @example
     * // Update one Medico
     * const medico = await prisma.medico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicoUpdateArgs>(args: SelectSubset<T, MedicoUpdateArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicos.
     * @param {MedicoDeleteManyArgs} args - Arguments to filter Medicos to delete.
     * @example
     * // Delete a few Medicos
     * const { count } = await prisma.medico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicoDeleteManyArgs>(args?: SelectSubset<T, MedicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicos
     * const medico = await prisma.medico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicoUpdateManyArgs>(args: SelectSubset<T, MedicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicos and returns the data updated in the database.
     * @param {MedicoUpdateManyAndReturnArgs} args - Arguments to update many Medicos.
     * @example
     * // Update many Medicos
     * const medico = await prisma.medico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicos and only return the `idMedico`
     * const medicoWithIdMedicoOnly = await prisma.medico.updateManyAndReturn({
     *   select: { idMedico: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicoUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medico.
     * @param {MedicoUpsertArgs} args - Arguments to update or create a Medico.
     * @example
     * // Update or create a Medico
     * const medico = await prisma.medico.upsert({
     *   create: {
     *     // ... data to create a Medico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medico we want to update
     *   }
     * })
     */
    upsert<T extends MedicoUpsertArgs>(args: SelectSubset<T, MedicoUpsertArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoCountArgs} args - Arguments to filter Medicos to count.
     * @example
     * // Count the number of Medicos
     * const count = await prisma.medico.count({
     *   where: {
     *     // ... the filter for the Medicos we want to count
     *   }
     * })
    **/
    count<T extends MedicoCountArgs>(
      args?: Subset<T, MedicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicoAggregateArgs>(args: Subset<T, MedicoAggregateArgs>): Prisma.PrismaPromise<GetMedicoAggregateType<T>>

    /**
     * Group by Medico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicoGroupByArgs['orderBy'] }
        : { orderBy?: MedicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medico model
   */
  readonly fields: MedicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleado<T extends EmpleadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpleadoDefaultArgs<ExtArgs>>): Prisma__EmpleadoClient<$Result.GetResult<Prisma.$EmpleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicoEquipo<T extends Medico$medicoEquipoArgs<ExtArgs> = {}>(args?: Subset<T, Medico$medicoEquipoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Medico_EquipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Cita<T extends Medico$CitaArgs<ExtArgs> = {}>(args?: Subset<T, Medico$CitaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Actualizaciones_HistoriaClinica<T extends Medico$Actualizaciones_HistoriaClinicaArgs<ExtArgs> = {}>(args?: Subset<T, Medico$Actualizaciones_HistoriaClinicaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Actualizaciones_HistoriaClinicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Medico_Preescribe_Medicamento<T extends Medico$Medico_Preescribe_MedicamentoArgs<ExtArgs> = {}>(args?: Subset<T, Medico$Medico_Preescribe_MedicamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Medico_Preescribe_MedicamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Registro_Consulta_Medicamento<T extends Medico$Registro_Consulta_MedicamentoArgs<ExtArgs> = {}>(args?: Subset<T, Medico$Registro_Consulta_MedicamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Registro_Consulta_MedicamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Medico_dictamina_diagnostico<T extends Medico$Medico_dictamina_diagnosticoArgs<ExtArgs> = {}>(args?: Subset<T, Medico$Medico_dictamina_diagnosticoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Medico_dictamina_diagnosticoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medico model
   */
  interface MedicoFieldRefs {
    readonly idMedico: FieldRef<"Medico", 'Int'>
    readonly idEmpleado: FieldRef<"Medico", 'Int'>
    readonly sueldo: FieldRef<"Medico", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Medico findUnique
   */
  export type MedicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico findUniqueOrThrow
   */
  export type MedicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico findFirst
   */
  export type MedicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicos.
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicos.
     */
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Medico findFirstOrThrow
   */
  export type MedicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicos.
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicos.
     */
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Medico findMany
   */
  export type MedicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medicos to fetch.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicos.
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Medico create
   */
  export type MedicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * The data needed to create a Medico.
     */
    data: XOR<MedicoCreateInput, MedicoUncheckedCreateInput>
  }

  /**
   * Medico createMany
   */
  export type MedicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicos.
     */
    data: MedicoCreateManyInput | MedicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medico createManyAndReturn
   */
  export type MedicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * The data used to create many Medicos.
     */
    data: MedicoCreateManyInput | MedicoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medico update
   */
  export type MedicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * The data needed to update a Medico.
     */
    data: XOR<MedicoUpdateInput, MedicoUncheckedUpdateInput>
    /**
     * Choose, which Medico to update.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico updateMany
   */
  export type MedicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicos.
     */
    data: XOR<MedicoUpdateManyMutationInput, MedicoUncheckedUpdateManyInput>
    /**
     * Filter which Medicos to update
     */
    where?: MedicoWhereInput
    /**
     * Limit how many Medicos to update.
     */
    limit?: number
  }

  /**
   * Medico updateManyAndReturn
   */
  export type MedicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * The data used to update Medicos.
     */
    data: XOR<MedicoUpdateManyMutationInput, MedicoUncheckedUpdateManyInput>
    /**
     * Filter which Medicos to update
     */
    where?: MedicoWhereInput
    /**
     * Limit how many Medicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medico upsert
   */
  export type MedicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * The filter to search for the Medico to update in case it exists.
     */
    where: MedicoWhereUniqueInput
    /**
     * In case the Medico found by the `where` argument doesn't exist, create a new Medico with this data.
     */
    create: XOR<MedicoCreateInput, MedicoUncheckedCreateInput>
    /**
     * In case the Medico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicoUpdateInput, MedicoUncheckedUpdateInput>
  }

  /**
   * Medico delete
   */
  export type MedicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter which Medico to delete.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico deleteMany
   */
  export type MedicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicos to delete
     */
    where?: MedicoWhereInput
    /**
     * Limit how many Medicos to delete.
     */
    limit?: number
  }

  /**
   * Medico.medicoEquipo
   */
  export type Medico$medicoEquipoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Equipo
     */
    select?: Medico_EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Equipo
     */
    omit?: Medico_EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_EquipoInclude<ExtArgs> | null
    where?: Medico_EquipoWhereInput
    orderBy?: Medico_EquipoOrderByWithRelationInput | Medico_EquipoOrderByWithRelationInput[]
    cursor?: Medico_EquipoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Medico_EquipoScalarFieldEnum | Medico_EquipoScalarFieldEnum[]
  }

  /**
   * Medico.Cita
   */
  export type Medico$CitaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    cursor?: CitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Medico.Actualizaciones_HistoriaClinica
   */
  export type Medico$Actualizaciones_HistoriaClinicaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actualizaciones_HistoriaClinica
     */
    select?: Actualizaciones_HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actualizaciones_HistoriaClinica
     */
    omit?: Actualizaciones_HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Actualizaciones_HistoriaClinicaInclude<ExtArgs> | null
    where?: Actualizaciones_HistoriaClinicaWhereInput
    orderBy?: Actualizaciones_HistoriaClinicaOrderByWithRelationInput | Actualizaciones_HistoriaClinicaOrderByWithRelationInput[]
    cursor?: Actualizaciones_HistoriaClinicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Actualizaciones_HistoriaClinicaScalarFieldEnum | Actualizaciones_HistoriaClinicaScalarFieldEnum[]
  }

  /**
   * Medico.Medico_Preescribe_Medicamento
   */
  export type Medico$Medico_Preescribe_MedicamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Preescribe_Medicamento
     */
    select?: Medico_Preescribe_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Preescribe_Medicamento
     */
    omit?: Medico_Preescribe_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_Preescribe_MedicamentoInclude<ExtArgs> | null
    where?: Medico_Preescribe_MedicamentoWhereInput
    orderBy?: Medico_Preescribe_MedicamentoOrderByWithRelationInput | Medico_Preescribe_MedicamentoOrderByWithRelationInput[]
    cursor?: Medico_Preescribe_MedicamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Medico_Preescribe_MedicamentoScalarFieldEnum | Medico_Preescribe_MedicamentoScalarFieldEnum[]
  }

  /**
   * Medico.Registro_Consulta_Medicamento
   */
  export type Medico$Registro_Consulta_MedicamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro_Consulta_Medicamento
     */
    select?: Registro_Consulta_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro_Consulta_Medicamento
     */
    omit?: Registro_Consulta_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Registro_Consulta_MedicamentoInclude<ExtArgs> | null
    where?: Registro_Consulta_MedicamentoWhereInput
    orderBy?: Registro_Consulta_MedicamentoOrderByWithRelationInput | Registro_Consulta_MedicamentoOrderByWithRelationInput[]
    cursor?: Registro_Consulta_MedicamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Registro_Consulta_MedicamentoScalarFieldEnum | Registro_Consulta_MedicamentoScalarFieldEnum[]
  }

  /**
   * Medico.Medico_dictamina_diagnostico
   */
  export type Medico$Medico_dictamina_diagnosticoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_dictamina_diagnostico
     */
    select?: Medico_dictamina_diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_dictamina_diagnostico
     */
    omit?: Medico_dictamina_diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_dictamina_diagnosticoInclude<ExtArgs> | null
    where?: Medico_dictamina_diagnosticoWhereInput
    orderBy?: Medico_dictamina_diagnosticoOrderByWithRelationInput | Medico_dictamina_diagnosticoOrderByWithRelationInput[]
    cursor?: Medico_dictamina_diagnosticoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Medico_dictamina_diagnosticoScalarFieldEnum | Medico_dictamina_diagnosticoScalarFieldEnum[]
  }

  /**
   * Medico without action
   */
  export type MedicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico
     */
    omit?: MedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
  }


  /**
   * Model Medico_Equipo
   */

  export type AggregateMedico_Equipo = {
    _count: Medico_EquipoCountAggregateOutputType | null
    _avg: Medico_EquipoAvgAggregateOutputType | null
    _sum: Medico_EquipoSumAggregateOutputType | null
    _min: Medico_EquipoMinAggregateOutputType | null
    _max: Medico_EquipoMaxAggregateOutputType | null
  }

  export type Medico_EquipoAvgAggregateOutputType = {
    idMedico: number | null
    idEquipamiento: number | null
  }

  export type Medico_EquipoSumAggregateOutputType = {
    idMedico: number | null
    idEquipamiento: number | null
  }

  export type Medico_EquipoMinAggregateOutputType = {
    idMedico: number | null
    idEquipamiento: number | null
    FPrestamo: Date | null
    FDevolucion: Date | null
  }

  export type Medico_EquipoMaxAggregateOutputType = {
    idMedico: number | null
    idEquipamiento: number | null
    FPrestamo: Date | null
    FDevolucion: Date | null
  }

  export type Medico_EquipoCountAggregateOutputType = {
    idMedico: number
    idEquipamiento: number
    FPrestamo: number
    FDevolucion: number
    _all: number
  }


  export type Medico_EquipoAvgAggregateInputType = {
    idMedico?: true
    idEquipamiento?: true
  }

  export type Medico_EquipoSumAggregateInputType = {
    idMedico?: true
    idEquipamiento?: true
  }

  export type Medico_EquipoMinAggregateInputType = {
    idMedico?: true
    idEquipamiento?: true
    FPrestamo?: true
    FDevolucion?: true
  }

  export type Medico_EquipoMaxAggregateInputType = {
    idMedico?: true
    idEquipamiento?: true
    FPrestamo?: true
    FDevolucion?: true
  }

  export type Medico_EquipoCountAggregateInputType = {
    idMedico?: true
    idEquipamiento?: true
    FPrestamo?: true
    FDevolucion?: true
    _all?: true
  }

  export type Medico_EquipoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medico_Equipo to aggregate.
     */
    where?: Medico_EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medico_Equipos to fetch.
     */
    orderBy?: Medico_EquipoOrderByWithRelationInput | Medico_EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Medico_EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medico_Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medico_Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medico_Equipos
    **/
    _count?: true | Medico_EquipoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Medico_EquipoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Medico_EquipoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Medico_EquipoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Medico_EquipoMaxAggregateInputType
  }

  export type GetMedico_EquipoAggregateType<T extends Medico_EquipoAggregateArgs> = {
        [P in keyof T & keyof AggregateMedico_Equipo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedico_Equipo[P]>
      : GetScalarType<T[P], AggregateMedico_Equipo[P]>
  }




  export type Medico_EquipoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Medico_EquipoWhereInput
    orderBy?: Medico_EquipoOrderByWithAggregationInput | Medico_EquipoOrderByWithAggregationInput[]
    by: Medico_EquipoScalarFieldEnum[] | Medico_EquipoScalarFieldEnum
    having?: Medico_EquipoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Medico_EquipoCountAggregateInputType | true
    _avg?: Medico_EquipoAvgAggregateInputType
    _sum?: Medico_EquipoSumAggregateInputType
    _min?: Medico_EquipoMinAggregateInputType
    _max?: Medico_EquipoMaxAggregateInputType
  }

  export type Medico_EquipoGroupByOutputType = {
    idMedico: number
    idEquipamiento: number
    FPrestamo: Date
    FDevolucion: Date
    _count: Medico_EquipoCountAggregateOutputType | null
    _avg: Medico_EquipoAvgAggregateOutputType | null
    _sum: Medico_EquipoSumAggregateOutputType | null
    _min: Medico_EquipoMinAggregateOutputType | null
    _max: Medico_EquipoMaxAggregateOutputType | null
  }

  type GetMedico_EquipoGroupByPayload<T extends Medico_EquipoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Medico_EquipoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Medico_EquipoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Medico_EquipoGroupByOutputType[P]>
            : GetScalarType<T[P], Medico_EquipoGroupByOutputType[P]>
        }
      >
    >


  export type Medico_EquipoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMedico?: boolean
    idEquipamiento?: boolean
    FPrestamo?: boolean
    FDevolucion?: boolean
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    equipamiento?: boolean | EquipamientoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico_Equipo"]>

  export type Medico_EquipoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMedico?: boolean
    idEquipamiento?: boolean
    FPrestamo?: boolean
    FDevolucion?: boolean
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    equipamiento?: boolean | EquipamientoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico_Equipo"]>

  export type Medico_EquipoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMedico?: boolean
    idEquipamiento?: boolean
    FPrestamo?: boolean
    FDevolucion?: boolean
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    equipamiento?: boolean | EquipamientoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico_Equipo"]>

  export type Medico_EquipoSelectScalar = {
    idMedico?: boolean
    idEquipamiento?: boolean
    FPrestamo?: boolean
    FDevolucion?: boolean
  }

  export type Medico_EquipoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idMedico" | "idEquipamiento" | "FPrestamo" | "FDevolucion", ExtArgs["result"]["medico_Equipo"]>
  export type Medico_EquipoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    equipamiento?: boolean | EquipamientoDefaultArgs<ExtArgs>
  }
  export type Medico_EquipoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    equipamiento?: boolean | EquipamientoDefaultArgs<ExtArgs>
  }
  export type Medico_EquipoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    equipamiento?: boolean | EquipamientoDefaultArgs<ExtArgs>
  }

  export type $Medico_EquipoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medico_Equipo"
    objects: {
      medico: Prisma.$MedicoPayload<ExtArgs>
      equipamiento: Prisma.$EquipamientoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idMedico: number
      idEquipamiento: number
      FPrestamo: Date
      FDevolucion: Date
    }, ExtArgs["result"]["medico_Equipo"]>
    composites: {}
  }

  type Medico_EquipoGetPayload<S extends boolean | null | undefined | Medico_EquipoDefaultArgs> = $Result.GetResult<Prisma.$Medico_EquipoPayload, S>

  type Medico_EquipoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Medico_EquipoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Medico_EquipoCountAggregateInputType | true
    }

  export interface Medico_EquipoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medico_Equipo'], meta: { name: 'Medico_Equipo' } }
    /**
     * Find zero or one Medico_Equipo that matches the filter.
     * @param {Medico_EquipoFindUniqueArgs} args - Arguments to find a Medico_Equipo
     * @example
     * // Get one Medico_Equipo
     * const medico_Equipo = await prisma.medico_Equipo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Medico_EquipoFindUniqueArgs>(args: SelectSubset<T, Medico_EquipoFindUniqueArgs<ExtArgs>>): Prisma__Medico_EquipoClient<$Result.GetResult<Prisma.$Medico_EquipoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medico_Equipo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Medico_EquipoFindUniqueOrThrowArgs} args - Arguments to find a Medico_Equipo
     * @example
     * // Get one Medico_Equipo
     * const medico_Equipo = await prisma.medico_Equipo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Medico_EquipoFindUniqueOrThrowArgs>(args: SelectSubset<T, Medico_EquipoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Medico_EquipoClient<$Result.GetResult<Prisma.$Medico_EquipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medico_Equipo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_EquipoFindFirstArgs} args - Arguments to find a Medico_Equipo
     * @example
     * // Get one Medico_Equipo
     * const medico_Equipo = await prisma.medico_Equipo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Medico_EquipoFindFirstArgs>(args?: SelectSubset<T, Medico_EquipoFindFirstArgs<ExtArgs>>): Prisma__Medico_EquipoClient<$Result.GetResult<Prisma.$Medico_EquipoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medico_Equipo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_EquipoFindFirstOrThrowArgs} args - Arguments to find a Medico_Equipo
     * @example
     * // Get one Medico_Equipo
     * const medico_Equipo = await prisma.medico_Equipo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Medico_EquipoFindFirstOrThrowArgs>(args?: SelectSubset<T, Medico_EquipoFindFirstOrThrowArgs<ExtArgs>>): Prisma__Medico_EquipoClient<$Result.GetResult<Prisma.$Medico_EquipoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medico_Equipos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_EquipoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medico_Equipos
     * const medico_Equipos = await prisma.medico_Equipo.findMany()
     * 
     * // Get first 10 Medico_Equipos
     * const medico_Equipos = await prisma.medico_Equipo.findMany({ take: 10 })
     * 
     * // Only select the `idMedico`
     * const medico_EquipoWithIdMedicoOnly = await prisma.medico_Equipo.findMany({ select: { idMedico: true } })
     * 
     */
    findMany<T extends Medico_EquipoFindManyArgs>(args?: SelectSubset<T, Medico_EquipoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Medico_EquipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medico_Equipo.
     * @param {Medico_EquipoCreateArgs} args - Arguments to create a Medico_Equipo.
     * @example
     * // Create one Medico_Equipo
     * const Medico_Equipo = await prisma.medico_Equipo.create({
     *   data: {
     *     // ... data to create a Medico_Equipo
     *   }
     * })
     * 
     */
    create<T extends Medico_EquipoCreateArgs>(args: SelectSubset<T, Medico_EquipoCreateArgs<ExtArgs>>): Prisma__Medico_EquipoClient<$Result.GetResult<Prisma.$Medico_EquipoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medico_Equipos.
     * @param {Medico_EquipoCreateManyArgs} args - Arguments to create many Medico_Equipos.
     * @example
     * // Create many Medico_Equipos
     * const medico_Equipo = await prisma.medico_Equipo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Medico_EquipoCreateManyArgs>(args?: SelectSubset<T, Medico_EquipoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medico_Equipos and returns the data saved in the database.
     * @param {Medico_EquipoCreateManyAndReturnArgs} args - Arguments to create many Medico_Equipos.
     * @example
     * // Create many Medico_Equipos
     * const medico_Equipo = await prisma.medico_Equipo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medico_Equipos and only return the `idMedico`
     * const medico_EquipoWithIdMedicoOnly = await prisma.medico_Equipo.createManyAndReturn({
     *   select: { idMedico: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Medico_EquipoCreateManyAndReturnArgs>(args?: SelectSubset<T, Medico_EquipoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Medico_EquipoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medico_Equipo.
     * @param {Medico_EquipoDeleteArgs} args - Arguments to delete one Medico_Equipo.
     * @example
     * // Delete one Medico_Equipo
     * const Medico_Equipo = await prisma.medico_Equipo.delete({
     *   where: {
     *     // ... filter to delete one Medico_Equipo
     *   }
     * })
     * 
     */
    delete<T extends Medico_EquipoDeleteArgs>(args: SelectSubset<T, Medico_EquipoDeleteArgs<ExtArgs>>): Prisma__Medico_EquipoClient<$Result.GetResult<Prisma.$Medico_EquipoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medico_Equipo.
     * @param {Medico_EquipoUpdateArgs} args - Arguments to update one Medico_Equipo.
     * @example
     * // Update one Medico_Equipo
     * const medico_Equipo = await prisma.medico_Equipo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Medico_EquipoUpdateArgs>(args: SelectSubset<T, Medico_EquipoUpdateArgs<ExtArgs>>): Prisma__Medico_EquipoClient<$Result.GetResult<Prisma.$Medico_EquipoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medico_Equipos.
     * @param {Medico_EquipoDeleteManyArgs} args - Arguments to filter Medico_Equipos to delete.
     * @example
     * // Delete a few Medico_Equipos
     * const { count } = await prisma.medico_Equipo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Medico_EquipoDeleteManyArgs>(args?: SelectSubset<T, Medico_EquipoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medico_Equipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_EquipoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medico_Equipos
     * const medico_Equipo = await prisma.medico_Equipo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Medico_EquipoUpdateManyArgs>(args: SelectSubset<T, Medico_EquipoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medico_Equipos and returns the data updated in the database.
     * @param {Medico_EquipoUpdateManyAndReturnArgs} args - Arguments to update many Medico_Equipos.
     * @example
     * // Update many Medico_Equipos
     * const medico_Equipo = await prisma.medico_Equipo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medico_Equipos and only return the `idMedico`
     * const medico_EquipoWithIdMedicoOnly = await prisma.medico_Equipo.updateManyAndReturn({
     *   select: { idMedico: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Medico_EquipoUpdateManyAndReturnArgs>(args: SelectSubset<T, Medico_EquipoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Medico_EquipoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medico_Equipo.
     * @param {Medico_EquipoUpsertArgs} args - Arguments to update or create a Medico_Equipo.
     * @example
     * // Update or create a Medico_Equipo
     * const medico_Equipo = await prisma.medico_Equipo.upsert({
     *   create: {
     *     // ... data to create a Medico_Equipo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medico_Equipo we want to update
     *   }
     * })
     */
    upsert<T extends Medico_EquipoUpsertArgs>(args: SelectSubset<T, Medico_EquipoUpsertArgs<ExtArgs>>): Prisma__Medico_EquipoClient<$Result.GetResult<Prisma.$Medico_EquipoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medico_Equipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_EquipoCountArgs} args - Arguments to filter Medico_Equipos to count.
     * @example
     * // Count the number of Medico_Equipos
     * const count = await prisma.medico_Equipo.count({
     *   where: {
     *     // ... the filter for the Medico_Equipos we want to count
     *   }
     * })
    **/
    count<T extends Medico_EquipoCountArgs>(
      args?: Subset<T, Medico_EquipoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Medico_EquipoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medico_Equipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_EquipoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Medico_EquipoAggregateArgs>(args: Subset<T, Medico_EquipoAggregateArgs>): Prisma.PrismaPromise<GetMedico_EquipoAggregateType<T>>

    /**
     * Group by Medico_Equipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_EquipoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Medico_EquipoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Medico_EquipoGroupByArgs['orderBy'] }
        : { orderBy?: Medico_EquipoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Medico_EquipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedico_EquipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medico_Equipo model
   */
  readonly fields: Medico_EquipoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medico_Equipo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Medico_EquipoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medico<T extends MedicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicoDefaultArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    equipamiento<T extends EquipamientoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipamientoDefaultArgs<ExtArgs>>): Prisma__EquipamientoClient<$Result.GetResult<Prisma.$EquipamientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medico_Equipo model
   */
  interface Medico_EquipoFieldRefs {
    readonly idMedico: FieldRef<"Medico_Equipo", 'Int'>
    readonly idEquipamiento: FieldRef<"Medico_Equipo", 'Int'>
    readonly FPrestamo: FieldRef<"Medico_Equipo", 'DateTime'>
    readonly FDevolucion: FieldRef<"Medico_Equipo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Medico_Equipo findUnique
   */
  export type Medico_EquipoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Equipo
     */
    select?: Medico_EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Equipo
     */
    omit?: Medico_EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Medico_Equipo to fetch.
     */
    where: Medico_EquipoWhereUniqueInput
  }

  /**
   * Medico_Equipo findUniqueOrThrow
   */
  export type Medico_EquipoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Equipo
     */
    select?: Medico_EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Equipo
     */
    omit?: Medico_EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Medico_Equipo to fetch.
     */
    where: Medico_EquipoWhereUniqueInput
  }

  /**
   * Medico_Equipo findFirst
   */
  export type Medico_EquipoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Equipo
     */
    select?: Medico_EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Equipo
     */
    omit?: Medico_EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Medico_Equipo to fetch.
     */
    where?: Medico_EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medico_Equipos to fetch.
     */
    orderBy?: Medico_EquipoOrderByWithRelationInput | Medico_EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medico_Equipos.
     */
    cursor?: Medico_EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medico_Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medico_Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medico_Equipos.
     */
    distinct?: Medico_EquipoScalarFieldEnum | Medico_EquipoScalarFieldEnum[]
  }

  /**
   * Medico_Equipo findFirstOrThrow
   */
  export type Medico_EquipoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Equipo
     */
    select?: Medico_EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Equipo
     */
    omit?: Medico_EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Medico_Equipo to fetch.
     */
    where?: Medico_EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medico_Equipos to fetch.
     */
    orderBy?: Medico_EquipoOrderByWithRelationInput | Medico_EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medico_Equipos.
     */
    cursor?: Medico_EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medico_Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medico_Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medico_Equipos.
     */
    distinct?: Medico_EquipoScalarFieldEnum | Medico_EquipoScalarFieldEnum[]
  }

  /**
   * Medico_Equipo findMany
   */
  export type Medico_EquipoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Equipo
     */
    select?: Medico_EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Equipo
     */
    omit?: Medico_EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Medico_Equipos to fetch.
     */
    where?: Medico_EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medico_Equipos to fetch.
     */
    orderBy?: Medico_EquipoOrderByWithRelationInput | Medico_EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medico_Equipos.
     */
    cursor?: Medico_EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medico_Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medico_Equipos.
     */
    skip?: number
    distinct?: Medico_EquipoScalarFieldEnum | Medico_EquipoScalarFieldEnum[]
  }

  /**
   * Medico_Equipo create
   */
  export type Medico_EquipoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Equipo
     */
    select?: Medico_EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Equipo
     */
    omit?: Medico_EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_EquipoInclude<ExtArgs> | null
    /**
     * The data needed to create a Medico_Equipo.
     */
    data: XOR<Medico_EquipoCreateInput, Medico_EquipoUncheckedCreateInput>
  }

  /**
   * Medico_Equipo createMany
   */
  export type Medico_EquipoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medico_Equipos.
     */
    data: Medico_EquipoCreateManyInput | Medico_EquipoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medico_Equipo createManyAndReturn
   */
  export type Medico_EquipoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Equipo
     */
    select?: Medico_EquipoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Equipo
     */
    omit?: Medico_EquipoOmit<ExtArgs> | null
    /**
     * The data used to create many Medico_Equipos.
     */
    data: Medico_EquipoCreateManyInput | Medico_EquipoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_EquipoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medico_Equipo update
   */
  export type Medico_EquipoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Equipo
     */
    select?: Medico_EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Equipo
     */
    omit?: Medico_EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_EquipoInclude<ExtArgs> | null
    /**
     * The data needed to update a Medico_Equipo.
     */
    data: XOR<Medico_EquipoUpdateInput, Medico_EquipoUncheckedUpdateInput>
    /**
     * Choose, which Medico_Equipo to update.
     */
    where: Medico_EquipoWhereUniqueInput
  }

  /**
   * Medico_Equipo updateMany
   */
  export type Medico_EquipoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medico_Equipos.
     */
    data: XOR<Medico_EquipoUpdateManyMutationInput, Medico_EquipoUncheckedUpdateManyInput>
    /**
     * Filter which Medico_Equipos to update
     */
    where?: Medico_EquipoWhereInput
    /**
     * Limit how many Medico_Equipos to update.
     */
    limit?: number
  }

  /**
   * Medico_Equipo updateManyAndReturn
   */
  export type Medico_EquipoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Equipo
     */
    select?: Medico_EquipoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Equipo
     */
    omit?: Medico_EquipoOmit<ExtArgs> | null
    /**
     * The data used to update Medico_Equipos.
     */
    data: XOR<Medico_EquipoUpdateManyMutationInput, Medico_EquipoUncheckedUpdateManyInput>
    /**
     * Filter which Medico_Equipos to update
     */
    where?: Medico_EquipoWhereInput
    /**
     * Limit how many Medico_Equipos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_EquipoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medico_Equipo upsert
   */
  export type Medico_EquipoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Equipo
     */
    select?: Medico_EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Equipo
     */
    omit?: Medico_EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_EquipoInclude<ExtArgs> | null
    /**
     * The filter to search for the Medico_Equipo to update in case it exists.
     */
    where: Medico_EquipoWhereUniqueInput
    /**
     * In case the Medico_Equipo found by the `where` argument doesn't exist, create a new Medico_Equipo with this data.
     */
    create: XOR<Medico_EquipoCreateInput, Medico_EquipoUncheckedCreateInput>
    /**
     * In case the Medico_Equipo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Medico_EquipoUpdateInput, Medico_EquipoUncheckedUpdateInput>
  }

  /**
   * Medico_Equipo delete
   */
  export type Medico_EquipoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Equipo
     */
    select?: Medico_EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Equipo
     */
    omit?: Medico_EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_EquipoInclude<ExtArgs> | null
    /**
     * Filter which Medico_Equipo to delete.
     */
    where: Medico_EquipoWhereUniqueInput
  }

  /**
   * Medico_Equipo deleteMany
   */
  export type Medico_EquipoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medico_Equipos to delete
     */
    where?: Medico_EquipoWhereInput
    /**
     * Limit how many Medico_Equipos to delete.
     */
    limit?: number
  }

  /**
   * Medico_Equipo without action
   */
  export type Medico_EquipoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Equipo
     */
    select?: Medico_EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Equipo
     */
    omit?: Medico_EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_EquipoInclude<ExtArgs> | null
  }


  /**
   * Model Cita
   */

  export type AggregateCita = {
    _count: CitaCountAggregateOutputType | null
    _avg: CitaAvgAggregateOutputType | null
    _sum: CitaSumAggregateOutputType | null
    _min: CitaMinAggregateOutputType | null
    _max: CitaMaxAggregateOutputType | null
  }

  export type CitaAvgAggregateOutputType = {
    idCita: number | null
    idPaciente: number | null
    idMedico: number | null
  }

  export type CitaSumAggregateOutputType = {
    idCita: number | null
    idPaciente: number | null
    idMedico: number | null
  }

  export type CitaMinAggregateOutputType = {
    idCita: number | null
    idPaciente: number | null
    idMedico: number | null
    fechaYHora: Date | null
    estado: string | null
    resumen: string | null
  }

  export type CitaMaxAggregateOutputType = {
    idCita: number | null
    idPaciente: number | null
    idMedico: number | null
    fechaYHora: Date | null
    estado: string | null
    resumen: string | null
  }

  export type CitaCountAggregateOutputType = {
    idCita: number
    idPaciente: number
    idMedico: number
    fechaYHora: number
    estado: number
    resumen: number
    _all: number
  }


  export type CitaAvgAggregateInputType = {
    idCita?: true
    idPaciente?: true
    idMedico?: true
  }

  export type CitaSumAggregateInputType = {
    idCita?: true
    idPaciente?: true
    idMedico?: true
  }

  export type CitaMinAggregateInputType = {
    idCita?: true
    idPaciente?: true
    idMedico?: true
    fechaYHora?: true
    estado?: true
    resumen?: true
  }

  export type CitaMaxAggregateInputType = {
    idCita?: true
    idPaciente?: true
    idMedico?: true
    fechaYHora?: true
    estado?: true
    resumen?: true
  }

  export type CitaCountAggregateInputType = {
    idCita?: true
    idPaciente?: true
    idMedico?: true
    fechaYHora?: true
    estado?: true
    resumen?: true
    _all?: true
  }

  export type CitaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cita to aggregate.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Citas
    **/
    _count?: true | CitaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CitaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitaMaxAggregateInputType
  }

  export type GetCitaAggregateType<T extends CitaAggregateArgs> = {
        [P in keyof T & keyof AggregateCita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCita[P]>
      : GetScalarType<T[P], AggregateCita[P]>
  }




  export type CitaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithAggregationInput | CitaOrderByWithAggregationInput[]
    by: CitaScalarFieldEnum[] | CitaScalarFieldEnum
    having?: CitaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitaCountAggregateInputType | true
    _avg?: CitaAvgAggregateInputType
    _sum?: CitaSumAggregateInputType
    _min?: CitaMinAggregateInputType
    _max?: CitaMaxAggregateInputType
  }

  export type CitaGroupByOutputType = {
    idCita: number
    idPaciente: number
    idMedico: number
    fechaYHora: Date
    estado: string
    resumen: string
    _count: CitaCountAggregateOutputType | null
    _avg: CitaAvgAggregateOutputType | null
    _sum: CitaSumAggregateOutputType | null
    _min: CitaMinAggregateOutputType | null
    _max: CitaMaxAggregateOutputType | null
  }

  type GetCitaGroupByPayload<T extends CitaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitaGroupByOutputType[P]>
            : GetScalarType<T[P], CitaGroupByOutputType[P]>
        }
      >
    >


  export type CitaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCita?: boolean
    idPaciente?: boolean
    idMedico?: boolean
    fechaYHora?: boolean
    estado?: boolean
    resumen?: boolean
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    Actualizaciones_HistoriaClinica?: boolean | Cita$Actualizaciones_HistoriaClinicaArgs<ExtArgs>
    Medico_Preescribe_Medicamento?: boolean | Cita$Medico_Preescribe_MedicamentoArgs<ExtArgs>
    PAdmin_Gestiona_Cita?: boolean | Cita$PAdmin_Gestiona_CitaArgs<ExtArgs>
    Medico_dictamina_diagnostico?: boolean | Cita$Medico_dictamina_diagnosticoArgs<ExtArgs>
    _count?: boolean | CitaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cita"]>

  export type CitaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCita?: boolean
    idPaciente?: boolean
    idMedico?: boolean
    fechaYHora?: boolean
    estado?: boolean
    resumen?: boolean
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cita"]>

  export type CitaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCita?: boolean
    idPaciente?: boolean
    idMedico?: boolean
    fechaYHora?: boolean
    estado?: boolean
    resumen?: boolean
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cita"]>

  export type CitaSelectScalar = {
    idCita?: boolean
    idPaciente?: boolean
    idMedico?: boolean
    fechaYHora?: boolean
    estado?: boolean
    resumen?: boolean
  }

  export type CitaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idCita" | "idPaciente" | "idMedico" | "fechaYHora" | "estado" | "resumen", ExtArgs["result"]["cita"]>
  export type CitaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    Actualizaciones_HistoriaClinica?: boolean | Cita$Actualizaciones_HistoriaClinicaArgs<ExtArgs>
    Medico_Preescribe_Medicamento?: boolean | Cita$Medico_Preescribe_MedicamentoArgs<ExtArgs>
    PAdmin_Gestiona_Cita?: boolean | Cita$PAdmin_Gestiona_CitaArgs<ExtArgs>
    Medico_dictamina_diagnostico?: boolean | Cita$Medico_dictamina_diagnosticoArgs<ExtArgs>
    _count?: boolean | CitaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CitaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }
  export type CitaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }

  export type $CitaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cita"
    objects: {
      medico: Prisma.$MedicoPayload<ExtArgs>
      Actualizaciones_HistoriaClinica: Prisma.$Actualizaciones_HistoriaClinicaPayload<ExtArgs>[]
      Medico_Preescribe_Medicamento: Prisma.$Medico_Preescribe_MedicamentoPayload<ExtArgs>[]
      PAdmin_Gestiona_Cita: Prisma.$PAdmin_Gestiona_CitaPayload<ExtArgs>[]
      Medico_dictamina_diagnostico: Prisma.$Medico_dictamina_diagnosticoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idCita: number
      idPaciente: number
      idMedico: number
      fechaYHora: Date
      estado: string
      resumen: string
    }, ExtArgs["result"]["cita"]>
    composites: {}
  }

  type CitaGetPayload<S extends boolean | null | undefined | CitaDefaultArgs> = $Result.GetResult<Prisma.$CitaPayload, S>

  type CitaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CitaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CitaCountAggregateInputType | true
    }

  export interface CitaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cita'], meta: { name: 'Cita' } }
    /**
     * Find zero or one Cita that matches the filter.
     * @param {CitaFindUniqueArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CitaFindUniqueArgs>(args: SelectSubset<T, CitaFindUniqueArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CitaFindUniqueOrThrowArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CitaFindUniqueOrThrowArgs>(args: SelectSubset<T, CitaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindFirstArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CitaFindFirstArgs>(args?: SelectSubset<T, CitaFindFirstArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindFirstOrThrowArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CitaFindFirstOrThrowArgs>(args?: SelectSubset<T, CitaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Citas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Citas
     * const citas = await prisma.cita.findMany()
     * 
     * // Get first 10 Citas
     * const citas = await prisma.cita.findMany({ take: 10 })
     * 
     * // Only select the `idCita`
     * const citaWithIdCitaOnly = await prisma.cita.findMany({ select: { idCita: true } })
     * 
     */
    findMany<T extends CitaFindManyArgs>(args?: SelectSubset<T, CitaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cita.
     * @param {CitaCreateArgs} args - Arguments to create a Cita.
     * @example
     * // Create one Cita
     * const Cita = await prisma.cita.create({
     *   data: {
     *     // ... data to create a Cita
     *   }
     * })
     * 
     */
    create<T extends CitaCreateArgs>(args: SelectSubset<T, CitaCreateArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Citas.
     * @param {CitaCreateManyArgs} args - Arguments to create many Citas.
     * @example
     * // Create many Citas
     * const cita = await prisma.cita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CitaCreateManyArgs>(args?: SelectSubset<T, CitaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Citas and returns the data saved in the database.
     * @param {CitaCreateManyAndReturnArgs} args - Arguments to create many Citas.
     * @example
     * // Create many Citas
     * const cita = await prisma.cita.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Citas and only return the `idCita`
     * const citaWithIdCitaOnly = await prisma.cita.createManyAndReturn({
     *   select: { idCita: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CitaCreateManyAndReturnArgs>(args?: SelectSubset<T, CitaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cita.
     * @param {CitaDeleteArgs} args - Arguments to delete one Cita.
     * @example
     * // Delete one Cita
     * const Cita = await prisma.cita.delete({
     *   where: {
     *     // ... filter to delete one Cita
     *   }
     * })
     * 
     */
    delete<T extends CitaDeleteArgs>(args: SelectSubset<T, CitaDeleteArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cita.
     * @param {CitaUpdateArgs} args - Arguments to update one Cita.
     * @example
     * // Update one Cita
     * const cita = await prisma.cita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CitaUpdateArgs>(args: SelectSubset<T, CitaUpdateArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Citas.
     * @param {CitaDeleteManyArgs} args - Arguments to filter Citas to delete.
     * @example
     * // Delete a few Citas
     * const { count } = await prisma.cita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CitaDeleteManyArgs>(args?: SelectSubset<T, CitaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Citas
     * const cita = await prisma.cita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CitaUpdateManyArgs>(args: SelectSubset<T, CitaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Citas and returns the data updated in the database.
     * @param {CitaUpdateManyAndReturnArgs} args - Arguments to update many Citas.
     * @example
     * // Update many Citas
     * const cita = await prisma.cita.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Citas and only return the `idCita`
     * const citaWithIdCitaOnly = await prisma.cita.updateManyAndReturn({
     *   select: { idCita: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CitaUpdateManyAndReturnArgs>(args: SelectSubset<T, CitaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cita.
     * @param {CitaUpsertArgs} args - Arguments to update or create a Cita.
     * @example
     * // Update or create a Cita
     * const cita = await prisma.cita.upsert({
     *   create: {
     *     // ... data to create a Cita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cita we want to update
     *   }
     * })
     */
    upsert<T extends CitaUpsertArgs>(args: SelectSubset<T, CitaUpsertArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaCountArgs} args - Arguments to filter Citas to count.
     * @example
     * // Count the number of Citas
     * const count = await prisma.cita.count({
     *   where: {
     *     // ... the filter for the Citas we want to count
     *   }
     * })
    **/
    count<T extends CitaCountArgs>(
      args?: Subset<T, CitaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CitaAggregateArgs>(args: Subset<T, CitaAggregateArgs>): Prisma.PrismaPromise<GetCitaAggregateType<T>>

    /**
     * Group by Cita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CitaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CitaGroupByArgs['orderBy'] }
        : { orderBy?: CitaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CitaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cita model
   */
  readonly fields: CitaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CitaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medico<T extends MedicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicoDefaultArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Actualizaciones_HistoriaClinica<T extends Cita$Actualizaciones_HistoriaClinicaArgs<ExtArgs> = {}>(args?: Subset<T, Cita$Actualizaciones_HistoriaClinicaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Actualizaciones_HistoriaClinicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Medico_Preescribe_Medicamento<T extends Cita$Medico_Preescribe_MedicamentoArgs<ExtArgs> = {}>(args?: Subset<T, Cita$Medico_Preescribe_MedicamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Medico_Preescribe_MedicamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PAdmin_Gestiona_Cita<T extends Cita$PAdmin_Gestiona_CitaArgs<ExtArgs> = {}>(args?: Subset<T, Cita$PAdmin_Gestiona_CitaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAdmin_Gestiona_CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Medico_dictamina_diagnostico<T extends Cita$Medico_dictamina_diagnosticoArgs<ExtArgs> = {}>(args?: Subset<T, Cita$Medico_dictamina_diagnosticoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Medico_dictamina_diagnosticoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cita model
   */
  interface CitaFieldRefs {
    readonly idCita: FieldRef<"Cita", 'Int'>
    readonly idPaciente: FieldRef<"Cita", 'Int'>
    readonly idMedico: FieldRef<"Cita", 'Int'>
    readonly fechaYHora: FieldRef<"Cita", 'DateTime'>
    readonly estado: FieldRef<"Cita", 'String'>
    readonly resumen: FieldRef<"Cita", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cita findUnique
   */
  export type CitaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita findUniqueOrThrow
   */
  export type CitaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita findFirst
   */
  export type CitaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citas.
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Cita findFirstOrThrow
   */
  export type CitaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citas.
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Cita findMany
   */
  export type CitaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Citas to fetch.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Citas.
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Cita create
   */
  export type CitaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cita.
     */
    data: XOR<CitaCreateInput, CitaUncheckedCreateInput>
  }

  /**
   * Cita createMany
   */
  export type CitaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Citas.
     */
    data: CitaCreateManyInput | CitaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cita createManyAndReturn
   */
  export type CitaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * The data used to create many Citas.
     */
    data: CitaCreateManyInput | CitaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cita update
   */
  export type CitaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cita.
     */
    data: XOR<CitaUpdateInput, CitaUncheckedUpdateInput>
    /**
     * Choose, which Cita to update.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita updateMany
   */
  export type CitaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Citas.
     */
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyInput>
    /**
     * Filter which Citas to update
     */
    where?: CitaWhereInput
    /**
     * Limit how many Citas to update.
     */
    limit?: number
  }

  /**
   * Cita updateManyAndReturn
   */
  export type CitaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * The data used to update Citas.
     */
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyInput>
    /**
     * Filter which Citas to update
     */
    where?: CitaWhereInput
    /**
     * Limit how many Citas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cita upsert
   */
  export type CitaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cita to update in case it exists.
     */
    where: CitaWhereUniqueInput
    /**
     * In case the Cita found by the `where` argument doesn't exist, create a new Cita with this data.
     */
    create: XOR<CitaCreateInput, CitaUncheckedCreateInput>
    /**
     * In case the Cita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CitaUpdateInput, CitaUncheckedUpdateInput>
  }

  /**
   * Cita delete
   */
  export type CitaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter which Cita to delete.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita deleteMany
   */
  export type CitaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Citas to delete
     */
    where?: CitaWhereInput
    /**
     * Limit how many Citas to delete.
     */
    limit?: number
  }

  /**
   * Cita.Actualizaciones_HistoriaClinica
   */
  export type Cita$Actualizaciones_HistoriaClinicaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actualizaciones_HistoriaClinica
     */
    select?: Actualizaciones_HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actualizaciones_HistoriaClinica
     */
    omit?: Actualizaciones_HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Actualizaciones_HistoriaClinicaInclude<ExtArgs> | null
    where?: Actualizaciones_HistoriaClinicaWhereInput
    orderBy?: Actualizaciones_HistoriaClinicaOrderByWithRelationInput | Actualizaciones_HistoriaClinicaOrderByWithRelationInput[]
    cursor?: Actualizaciones_HistoriaClinicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Actualizaciones_HistoriaClinicaScalarFieldEnum | Actualizaciones_HistoriaClinicaScalarFieldEnum[]
  }

  /**
   * Cita.Medico_Preescribe_Medicamento
   */
  export type Cita$Medico_Preescribe_MedicamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Preescribe_Medicamento
     */
    select?: Medico_Preescribe_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Preescribe_Medicamento
     */
    omit?: Medico_Preescribe_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_Preescribe_MedicamentoInclude<ExtArgs> | null
    where?: Medico_Preescribe_MedicamentoWhereInput
    orderBy?: Medico_Preescribe_MedicamentoOrderByWithRelationInput | Medico_Preescribe_MedicamentoOrderByWithRelationInput[]
    cursor?: Medico_Preescribe_MedicamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Medico_Preescribe_MedicamentoScalarFieldEnum | Medico_Preescribe_MedicamentoScalarFieldEnum[]
  }

  /**
   * Cita.PAdmin_Gestiona_Cita
   */
  export type Cita$PAdmin_Gestiona_CitaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Gestiona_Cita
     */
    select?: PAdmin_Gestiona_CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Gestiona_Cita
     */
    omit?: PAdmin_Gestiona_CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Gestiona_CitaInclude<ExtArgs> | null
    where?: PAdmin_Gestiona_CitaWhereInput
    orderBy?: PAdmin_Gestiona_CitaOrderByWithRelationInput | PAdmin_Gestiona_CitaOrderByWithRelationInput[]
    cursor?: PAdmin_Gestiona_CitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PAdmin_Gestiona_CitaScalarFieldEnum | PAdmin_Gestiona_CitaScalarFieldEnum[]
  }

  /**
   * Cita.Medico_dictamina_diagnostico
   */
  export type Cita$Medico_dictamina_diagnosticoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_dictamina_diagnostico
     */
    select?: Medico_dictamina_diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_dictamina_diagnostico
     */
    omit?: Medico_dictamina_diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_dictamina_diagnosticoInclude<ExtArgs> | null
    where?: Medico_dictamina_diagnosticoWhereInput
    orderBy?: Medico_dictamina_diagnosticoOrderByWithRelationInput | Medico_dictamina_diagnosticoOrderByWithRelationInput[]
    cursor?: Medico_dictamina_diagnosticoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Medico_dictamina_diagnosticoScalarFieldEnum | Medico_dictamina_diagnosticoScalarFieldEnum[]
  }

  /**
   * Cita without action
   */
  export type CitaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
  }


  /**
   * Model PAdmin_Modifica_Paciente
   */

  export type AggregatePAdmin_Modifica_Paciente = {
    _count: PAdmin_Modifica_PacienteCountAggregateOutputType | null
    _avg: PAdmin_Modifica_PacienteAvgAggregateOutputType | null
    _sum: PAdmin_Modifica_PacienteSumAggregateOutputType | null
    _min: PAdmin_Modifica_PacienteMinAggregateOutputType | null
    _max: PAdmin_Modifica_PacienteMaxAggregateOutputType | null
  }

  export type PAdmin_Modifica_PacienteAvgAggregateOutputType = {
    idPAdministrativo: number | null
    idPaciente: number | null
  }

  export type PAdmin_Modifica_PacienteSumAggregateOutputType = {
    idPAdministrativo: number | null
    idPaciente: number | null
  }

  export type PAdmin_Modifica_PacienteMinAggregateOutputType = {
    idPAdministrativo: number | null
    idPaciente: number | null
    FModificacion: Date | null
    descripcion: string | null
  }

  export type PAdmin_Modifica_PacienteMaxAggregateOutputType = {
    idPAdministrativo: number | null
    idPaciente: number | null
    FModificacion: Date | null
    descripcion: string | null
  }

  export type PAdmin_Modifica_PacienteCountAggregateOutputType = {
    idPAdministrativo: number
    idPaciente: number
    FModificacion: number
    descripcion: number
    _all: number
  }


  export type PAdmin_Modifica_PacienteAvgAggregateInputType = {
    idPAdministrativo?: true
    idPaciente?: true
  }

  export type PAdmin_Modifica_PacienteSumAggregateInputType = {
    idPAdministrativo?: true
    idPaciente?: true
  }

  export type PAdmin_Modifica_PacienteMinAggregateInputType = {
    idPAdministrativo?: true
    idPaciente?: true
    FModificacion?: true
    descripcion?: true
  }

  export type PAdmin_Modifica_PacienteMaxAggregateInputType = {
    idPAdministrativo?: true
    idPaciente?: true
    FModificacion?: true
    descripcion?: true
  }

  export type PAdmin_Modifica_PacienteCountAggregateInputType = {
    idPAdministrativo?: true
    idPaciente?: true
    FModificacion?: true
    descripcion?: true
    _all?: true
  }

  export type PAdmin_Modifica_PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PAdmin_Modifica_Paciente to aggregate.
     */
    where?: PAdmin_Modifica_PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAdmin_Modifica_Pacientes to fetch.
     */
    orderBy?: PAdmin_Modifica_PacienteOrderByWithRelationInput | PAdmin_Modifica_PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PAdmin_Modifica_PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAdmin_Modifica_Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAdmin_Modifica_Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PAdmin_Modifica_Pacientes
    **/
    _count?: true | PAdmin_Modifica_PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PAdmin_Modifica_PacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PAdmin_Modifica_PacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PAdmin_Modifica_PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PAdmin_Modifica_PacienteMaxAggregateInputType
  }

  export type GetPAdmin_Modifica_PacienteAggregateType<T extends PAdmin_Modifica_PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePAdmin_Modifica_Paciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePAdmin_Modifica_Paciente[P]>
      : GetScalarType<T[P], AggregatePAdmin_Modifica_Paciente[P]>
  }




  export type PAdmin_Modifica_PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PAdmin_Modifica_PacienteWhereInput
    orderBy?: PAdmin_Modifica_PacienteOrderByWithAggregationInput | PAdmin_Modifica_PacienteOrderByWithAggregationInput[]
    by: PAdmin_Modifica_PacienteScalarFieldEnum[] | PAdmin_Modifica_PacienteScalarFieldEnum
    having?: PAdmin_Modifica_PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PAdmin_Modifica_PacienteCountAggregateInputType | true
    _avg?: PAdmin_Modifica_PacienteAvgAggregateInputType
    _sum?: PAdmin_Modifica_PacienteSumAggregateInputType
    _min?: PAdmin_Modifica_PacienteMinAggregateInputType
    _max?: PAdmin_Modifica_PacienteMaxAggregateInputType
  }

  export type PAdmin_Modifica_PacienteGroupByOutputType = {
    idPAdministrativo: number
    idPaciente: number
    FModificacion: Date
    descripcion: string
    _count: PAdmin_Modifica_PacienteCountAggregateOutputType | null
    _avg: PAdmin_Modifica_PacienteAvgAggregateOutputType | null
    _sum: PAdmin_Modifica_PacienteSumAggregateOutputType | null
    _min: PAdmin_Modifica_PacienteMinAggregateOutputType | null
    _max: PAdmin_Modifica_PacienteMaxAggregateOutputType | null
  }

  type GetPAdmin_Modifica_PacienteGroupByPayload<T extends PAdmin_Modifica_PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PAdmin_Modifica_PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PAdmin_Modifica_PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PAdmin_Modifica_PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PAdmin_Modifica_PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PAdmin_Modifica_PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPAdministrativo?: boolean
    idPaciente?: boolean
    FModificacion?: boolean
    descripcion?: boolean
    pAdministrativo?: boolean | PAdministrativoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pAdmin_Modifica_Paciente"]>

  export type PAdmin_Modifica_PacienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPAdministrativo?: boolean
    idPaciente?: boolean
    FModificacion?: boolean
    descripcion?: boolean
    pAdministrativo?: boolean | PAdministrativoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pAdmin_Modifica_Paciente"]>

  export type PAdmin_Modifica_PacienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPAdministrativo?: boolean
    idPaciente?: boolean
    FModificacion?: boolean
    descripcion?: boolean
    pAdministrativo?: boolean | PAdministrativoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pAdmin_Modifica_Paciente"]>

  export type PAdmin_Modifica_PacienteSelectScalar = {
    idPAdministrativo?: boolean
    idPaciente?: boolean
    FModificacion?: boolean
    descripcion?: boolean
  }

  export type PAdmin_Modifica_PacienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPAdministrativo" | "idPaciente" | "FModificacion" | "descripcion", ExtArgs["result"]["pAdmin_Modifica_Paciente"]>
  export type PAdmin_Modifica_PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pAdministrativo?: boolean | PAdministrativoDefaultArgs<ExtArgs>
  }
  export type PAdmin_Modifica_PacienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pAdministrativo?: boolean | PAdministrativoDefaultArgs<ExtArgs>
  }
  export type PAdmin_Modifica_PacienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pAdministrativo?: boolean | PAdministrativoDefaultArgs<ExtArgs>
  }

  export type $PAdmin_Modifica_PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PAdmin_Modifica_Paciente"
    objects: {
      pAdministrativo: Prisma.$PAdministrativoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idPAdministrativo: number
      idPaciente: number
      FModificacion: Date
      descripcion: string
    }, ExtArgs["result"]["pAdmin_Modifica_Paciente"]>
    composites: {}
  }

  type PAdmin_Modifica_PacienteGetPayload<S extends boolean | null | undefined | PAdmin_Modifica_PacienteDefaultArgs> = $Result.GetResult<Prisma.$PAdmin_Modifica_PacientePayload, S>

  type PAdmin_Modifica_PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PAdmin_Modifica_PacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PAdmin_Modifica_PacienteCountAggregateInputType | true
    }

  export interface PAdmin_Modifica_PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PAdmin_Modifica_Paciente'], meta: { name: 'PAdmin_Modifica_Paciente' } }
    /**
     * Find zero or one PAdmin_Modifica_Paciente that matches the filter.
     * @param {PAdmin_Modifica_PacienteFindUniqueArgs} args - Arguments to find a PAdmin_Modifica_Paciente
     * @example
     * // Get one PAdmin_Modifica_Paciente
     * const pAdmin_Modifica_Paciente = await prisma.pAdmin_Modifica_Paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PAdmin_Modifica_PacienteFindUniqueArgs>(args: SelectSubset<T, PAdmin_Modifica_PacienteFindUniqueArgs<ExtArgs>>): Prisma__PAdmin_Modifica_PacienteClient<$Result.GetResult<Prisma.$PAdmin_Modifica_PacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PAdmin_Modifica_Paciente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PAdmin_Modifica_PacienteFindUniqueOrThrowArgs} args - Arguments to find a PAdmin_Modifica_Paciente
     * @example
     * // Get one PAdmin_Modifica_Paciente
     * const pAdmin_Modifica_Paciente = await prisma.pAdmin_Modifica_Paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PAdmin_Modifica_PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PAdmin_Modifica_PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PAdmin_Modifica_PacienteClient<$Result.GetResult<Prisma.$PAdmin_Modifica_PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PAdmin_Modifica_Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdmin_Modifica_PacienteFindFirstArgs} args - Arguments to find a PAdmin_Modifica_Paciente
     * @example
     * // Get one PAdmin_Modifica_Paciente
     * const pAdmin_Modifica_Paciente = await prisma.pAdmin_Modifica_Paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PAdmin_Modifica_PacienteFindFirstArgs>(args?: SelectSubset<T, PAdmin_Modifica_PacienteFindFirstArgs<ExtArgs>>): Prisma__PAdmin_Modifica_PacienteClient<$Result.GetResult<Prisma.$PAdmin_Modifica_PacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PAdmin_Modifica_Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdmin_Modifica_PacienteFindFirstOrThrowArgs} args - Arguments to find a PAdmin_Modifica_Paciente
     * @example
     * // Get one PAdmin_Modifica_Paciente
     * const pAdmin_Modifica_Paciente = await prisma.pAdmin_Modifica_Paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PAdmin_Modifica_PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PAdmin_Modifica_PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PAdmin_Modifica_PacienteClient<$Result.GetResult<Prisma.$PAdmin_Modifica_PacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PAdmin_Modifica_Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdmin_Modifica_PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PAdmin_Modifica_Pacientes
     * const pAdmin_Modifica_Pacientes = await prisma.pAdmin_Modifica_Paciente.findMany()
     * 
     * // Get first 10 PAdmin_Modifica_Pacientes
     * const pAdmin_Modifica_Pacientes = await prisma.pAdmin_Modifica_Paciente.findMany({ take: 10 })
     * 
     * // Only select the `idPAdministrativo`
     * const pAdmin_Modifica_PacienteWithIdPAdministrativoOnly = await prisma.pAdmin_Modifica_Paciente.findMany({ select: { idPAdministrativo: true } })
     * 
     */
    findMany<T extends PAdmin_Modifica_PacienteFindManyArgs>(args?: SelectSubset<T, PAdmin_Modifica_PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAdmin_Modifica_PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PAdmin_Modifica_Paciente.
     * @param {PAdmin_Modifica_PacienteCreateArgs} args - Arguments to create a PAdmin_Modifica_Paciente.
     * @example
     * // Create one PAdmin_Modifica_Paciente
     * const PAdmin_Modifica_Paciente = await prisma.pAdmin_Modifica_Paciente.create({
     *   data: {
     *     // ... data to create a PAdmin_Modifica_Paciente
     *   }
     * })
     * 
     */
    create<T extends PAdmin_Modifica_PacienteCreateArgs>(args: SelectSubset<T, PAdmin_Modifica_PacienteCreateArgs<ExtArgs>>): Prisma__PAdmin_Modifica_PacienteClient<$Result.GetResult<Prisma.$PAdmin_Modifica_PacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PAdmin_Modifica_Pacientes.
     * @param {PAdmin_Modifica_PacienteCreateManyArgs} args - Arguments to create many PAdmin_Modifica_Pacientes.
     * @example
     * // Create many PAdmin_Modifica_Pacientes
     * const pAdmin_Modifica_Paciente = await prisma.pAdmin_Modifica_Paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PAdmin_Modifica_PacienteCreateManyArgs>(args?: SelectSubset<T, PAdmin_Modifica_PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PAdmin_Modifica_Pacientes and returns the data saved in the database.
     * @param {PAdmin_Modifica_PacienteCreateManyAndReturnArgs} args - Arguments to create many PAdmin_Modifica_Pacientes.
     * @example
     * // Create many PAdmin_Modifica_Pacientes
     * const pAdmin_Modifica_Paciente = await prisma.pAdmin_Modifica_Paciente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PAdmin_Modifica_Pacientes and only return the `idPAdministrativo`
     * const pAdmin_Modifica_PacienteWithIdPAdministrativoOnly = await prisma.pAdmin_Modifica_Paciente.createManyAndReturn({
     *   select: { idPAdministrativo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PAdmin_Modifica_PacienteCreateManyAndReturnArgs>(args?: SelectSubset<T, PAdmin_Modifica_PacienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAdmin_Modifica_PacientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PAdmin_Modifica_Paciente.
     * @param {PAdmin_Modifica_PacienteDeleteArgs} args - Arguments to delete one PAdmin_Modifica_Paciente.
     * @example
     * // Delete one PAdmin_Modifica_Paciente
     * const PAdmin_Modifica_Paciente = await prisma.pAdmin_Modifica_Paciente.delete({
     *   where: {
     *     // ... filter to delete one PAdmin_Modifica_Paciente
     *   }
     * })
     * 
     */
    delete<T extends PAdmin_Modifica_PacienteDeleteArgs>(args: SelectSubset<T, PAdmin_Modifica_PacienteDeleteArgs<ExtArgs>>): Prisma__PAdmin_Modifica_PacienteClient<$Result.GetResult<Prisma.$PAdmin_Modifica_PacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PAdmin_Modifica_Paciente.
     * @param {PAdmin_Modifica_PacienteUpdateArgs} args - Arguments to update one PAdmin_Modifica_Paciente.
     * @example
     * // Update one PAdmin_Modifica_Paciente
     * const pAdmin_Modifica_Paciente = await prisma.pAdmin_Modifica_Paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PAdmin_Modifica_PacienteUpdateArgs>(args: SelectSubset<T, PAdmin_Modifica_PacienteUpdateArgs<ExtArgs>>): Prisma__PAdmin_Modifica_PacienteClient<$Result.GetResult<Prisma.$PAdmin_Modifica_PacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PAdmin_Modifica_Pacientes.
     * @param {PAdmin_Modifica_PacienteDeleteManyArgs} args - Arguments to filter PAdmin_Modifica_Pacientes to delete.
     * @example
     * // Delete a few PAdmin_Modifica_Pacientes
     * const { count } = await prisma.pAdmin_Modifica_Paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PAdmin_Modifica_PacienteDeleteManyArgs>(args?: SelectSubset<T, PAdmin_Modifica_PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PAdmin_Modifica_Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdmin_Modifica_PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PAdmin_Modifica_Pacientes
     * const pAdmin_Modifica_Paciente = await prisma.pAdmin_Modifica_Paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PAdmin_Modifica_PacienteUpdateManyArgs>(args: SelectSubset<T, PAdmin_Modifica_PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PAdmin_Modifica_Pacientes and returns the data updated in the database.
     * @param {PAdmin_Modifica_PacienteUpdateManyAndReturnArgs} args - Arguments to update many PAdmin_Modifica_Pacientes.
     * @example
     * // Update many PAdmin_Modifica_Pacientes
     * const pAdmin_Modifica_Paciente = await prisma.pAdmin_Modifica_Paciente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PAdmin_Modifica_Pacientes and only return the `idPAdministrativo`
     * const pAdmin_Modifica_PacienteWithIdPAdministrativoOnly = await prisma.pAdmin_Modifica_Paciente.updateManyAndReturn({
     *   select: { idPAdministrativo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PAdmin_Modifica_PacienteUpdateManyAndReturnArgs>(args: SelectSubset<T, PAdmin_Modifica_PacienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAdmin_Modifica_PacientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PAdmin_Modifica_Paciente.
     * @param {PAdmin_Modifica_PacienteUpsertArgs} args - Arguments to update or create a PAdmin_Modifica_Paciente.
     * @example
     * // Update or create a PAdmin_Modifica_Paciente
     * const pAdmin_Modifica_Paciente = await prisma.pAdmin_Modifica_Paciente.upsert({
     *   create: {
     *     // ... data to create a PAdmin_Modifica_Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PAdmin_Modifica_Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PAdmin_Modifica_PacienteUpsertArgs>(args: SelectSubset<T, PAdmin_Modifica_PacienteUpsertArgs<ExtArgs>>): Prisma__PAdmin_Modifica_PacienteClient<$Result.GetResult<Prisma.$PAdmin_Modifica_PacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PAdmin_Modifica_Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdmin_Modifica_PacienteCountArgs} args - Arguments to filter PAdmin_Modifica_Pacientes to count.
     * @example
     * // Count the number of PAdmin_Modifica_Pacientes
     * const count = await prisma.pAdmin_Modifica_Paciente.count({
     *   where: {
     *     // ... the filter for the PAdmin_Modifica_Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PAdmin_Modifica_PacienteCountArgs>(
      args?: Subset<T, PAdmin_Modifica_PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PAdmin_Modifica_PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PAdmin_Modifica_Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdmin_Modifica_PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PAdmin_Modifica_PacienteAggregateArgs>(args: Subset<T, PAdmin_Modifica_PacienteAggregateArgs>): Prisma.PrismaPromise<GetPAdmin_Modifica_PacienteAggregateType<T>>

    /**
     * Group by PAdmin_Modifica_Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdmin_Modifica_PacienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PAdmin_Modifica_PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PAdmin_Modifica_PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PAdmin_Modifica_PacienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PAdmin_Modifica_PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPAdmin_Modifica_PacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PAdmin_Modifica_Paciente model
   */
  readonly fields: PAdmin_Modifica_PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PAdmin_Modifica_Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PAdmin_Modifica_PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pAdministrativo<T extends PAdministrativoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PAdministrativoDefaultArgs<ExtArgs>>): Prisma__PAdministrativoClient<$Result.GetResult<Prisma.$PAdministrativoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PAdmin_Modifica_Paciente model
   */
  interface PAdmin_Modifica_PacienteFieldRefs {
    readonly idPAdministrativo: FieldRef<"PAdmin_Modifica_Paciente", 'Int'>
    readonly idPaciente: FieldRef<"PAdmin_Modifica_Paciente", 'Int'>
    readonly FModificacion: FieldRef<"PAdmin_Modifica_Paciente", 'DateTime'>
    readonly descripcion: FieldRef<"PAdmin_Modifica_Paciente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PAdmin_Modifica_Paciente findUnique
   */
  export type PAdmin_Modifica_PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Modifica_Paciente
     */
    select?: PAdmin_Modifica_PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Modifica_Paciente
     */
    omit?: PAdmin_Modifica_PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Modifica_PacienteInclude<ExtArgs> | null
    /**
     * Filter, which PAdmin_Modifica_Paciente to fetch.
     */
    where: PAdmin_Modifica_PacienteWhereUniqueInput
  }

  /**
   * PAdmin_Modifica_Paciente findUniqueOrThrow
   */
  export type PAdmin_Modifica_PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Modifica_Paciente
     */
    select?: PAdmin_Modifica_PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Modifica_Paciente
     */
    omit?: PAdmin_Modifica_PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Modifica_PacienteInclude<ExtArgs> | null
    /**
     * Filter, which PAdmin_Modifica_Paciente to fetch.
     */
    where: PAdmin_Modifica_PacienteWhereUniqueInput
  }

  /**
   * PAdmin_Modifica_Paciente findFirst
   */
  export type PAdmin_Modifica_PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Modifica_Paciente
     */
    select?: PAdmin_Modifica_PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Modifica_Paciente
     */
    omit?: PAdmin_Modifica_PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Modifica_PacienteInclude<ExtArgs> | null
    /**
     * Filter, which PAdmin_Modifica_Paciente to fetch.
     */
    where?: PAdmin_Modifica_PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAdmin_Modifica_Pacientes to fetch.
     */
    orderBy?: PAdmin_Modifica_PacienteOrderByWithRelationInput | PAdmin_Modifica_PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PAdmin_Modifica_Pacientes.
     */
    cursor?: PAdmin_Modifica_PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAdmin_Modifica_Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAdmin_Modifica_Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PAdmin_Modifica_Pacientes.
     */
    distinct?: PAdmin_Modifica_PacienteScalarFieldEnum | PAdmin_Modifica_PacienteScalarFieldEnum[]
  }

  /**
   * PAdmin_Modifica_Paciente findFirstOrThrow
   */
  export type PAdmin_Modifica_PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Modifica_Paciente
     */
    select?: PAdmin_Modifica_PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Modifica_Paciente
     */
    omit?: PAdmin_Modifica_PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Modifica_PacienteInclude<ExtArgs> | null
    /**
     * Filter, which PAdmin_Modifica_Paciente to fetch.
     */
    where?: PAdmin_Modifica_PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAdmin_Modifica_Pacientes to fetch.
     */
    orderBy?: PAdmin_Modifica_PacienteOrderByWithRelationInput | PAdmin_Modifica_PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PAdmin_Modifica_Pacientes.
     */
    cursor?: PAdmin_Modifica_PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAdmin_Modifica_Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAdmin_Modifica_Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PAdmin_Modifica_Pacientes.
     */
    distinct?: PAdmin_Modifica_PacienteScalarFieldEnum | PAdmin_Modifica_PacienteScalarFieldEnum[]
  }

  /**
   * PAdmin_Modifica_Paciente findMany
   */
  export type PAdmin_Modifica_PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Modifica_Paciente
     */
    select?: PAdmin_Modifica_PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Modifica_Paciente
     */
    omit?: PAdmin_Modifica_PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Modifica_PacienteInclude<ExtArgs> | null
    /**
     * Filter, which PAdmin_Modifica_Pacientes to fetch.
     */
    where?: PAdmin_Modifica_PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAdmin_Modifica_Pacientes to fetch.
     */
    orderBy?: PAdmin_Modifica_PacienteOrderByWithRelationInput | PAdmin_Modifica_PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PAdmin_Modifica_Pacientes.
     */
    cursor?: PAdmin_Modifica_PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAdmin_Modifica_Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAdmin_Modifica_Pacientes.
     */
    skip?: number
    distinct?: PAdmin_Modifica_PacienteScalarFieldEnum | PAdmin_Modifica_PacienteScalarFieldEnum[]
  }

  /**
   * PAdmin_Modifica_Paciente create
   */
  export type PAdmin_Modifica_PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Modifica_Paciente
     */
    select?: PAdmin_Modifica_PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Modifica_Paciente
     */
    omit?: PAdmin_Modifica_PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Modifica_PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a PAdmin_Modifica_Paciente.
     */
    data: XOR<PAdmin_Modifica_PacienteCreateInput, PAdmin_Modifica_PacienteUncheckedCreateInput>
  }

  /**
   * PAdmin_Modifica_Paciente createMany
   */
  export type PAdmin_Modifica_PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PAdmin_Modifica_Pacientes.
     */
    data: PAdmin_Modifica_PacienteCreateManyInput | PAdmin_Modifica_PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PAdmin_Modifica_Paciente createManyAndReturn
   */
  export type PAdmin_Modifica_PacienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Modifica_Paciente
     */
    select?: PAdmin_Modifica_PacienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Modifica_Paciente
     */
    omit?: PAdmin_Modifica_PacienteOmit<ExtArgs> | null
    /**
     * The data used to create many PAdmin_Modifica_Pacientes.
     */
    data: PAdmin_Modifica_PacienteCreateManyInput | PAdmin_Modifica_PacienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Modifica_PacienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PAdmin_Modifica_Paciente update
   */
  export type PAdmin_Modifica_PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Modifica_Paciente
     */
    select?: PAdmin_Modifica_PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Modifica_Paciente
     */
    omit?: PAdmin_Modifica_PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Modifica_PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a PAdmin_Modifica_Paciente.
     */
    data: XOR<PAdmin_Modifica_PacienteUpdateInput, PAdmin_Modifica_PacienteUncheckedUpdateInput>
    /**
     * Choose, which PAdmin_Modifica_Paciente to update.
     */
    where: PAdmin_Modifica_PacienteWhereUniqueInput
  }

  /**
   * PAdmin_Modifica_Paciente updateMany
   */
  export type PAdmin_Modifica_PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PAdmin_Modifica_Pacientes.
     */
    data: XOR<PAdmin_Modifica_PacienteUpdateManyMutationInput, PAdmin_Modifica_PacienteUncheckedUpdateManyInput>
    /**
     * Filter which PAdmin_Modifica_Pacientes to update
     */
    where?: PAdmin_Modifica_PacienteWhereInput
    /**
     * Limit how many PAdmin_Modifica_Pacientes to update.
     */
    limit?: number
  }

  /**
   * PAdmin_Modifica_Paciente updateManyAndReturn
   */
  export type PAdmin_Modifica_PacienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Modifica_Paciente
     */
    select?: PAdmin_Modifica_PacienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Modifica_Paciente
     */
    omit?: PAdmin_Modifica_PacienteOmit<ExtArgs> | null
    /**
     * The data used to update PAdmin_Modifica_Pacientes.
     */
    data: XOR<PAdmin_Modifica_PacienteUpdateManyMutationInput, PAdmin_Modifica_PacienteUncheckedUpdateManyInput>
    /**
     * Filter which PAdmin_Modifica_Pacientes to update
     */
    where?: PAdmin_Modifica_PacienteWhereInput
    /**
     * Limit how many PAdmin_Modifica_Pacientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Modifica_PacienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PAdmin_Modifica_Paciente upsert
   */
  export type PAdmin_Modifica_PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Modifica_Paciente
     */
    select?: PAdmin_Modifica_PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Modifica_Paciente
     */
    omit?: PAdmin_Modifica_PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Modifica_PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the PAdmin_Modifica_Paciente to update in case it exists.
     */
    where: PAdmin_Modifica_PacienteWhereUniqueInput
    /**
     * In case the PAdmin_Modifica_Paciente found by the `where` argument doesn't exist, create a new PAdmin_Modifica_Paciente with this data.
     */
    create: XOR<PAdmin_Modifica_PacienteCreateInput, PAdmin_Modifica_PacienteUncheckedCreateInput>
    /**
     * In case the PAdmin_Modifica_Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PAdmin_Modifica_PacienteUpdateInput, PAdmin_Modifica_PacienteUncheckedUpdateInput>
  }

  /**
   * PAdmin_Modifica_Paciente delete
   */
  export type PAdmin_Modifica_PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Modifica_Paciente
     */
    select?: PAdmin_Modifica_PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Modifica_Paciente
     */
    omit?: PAdmin_Modifica_PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Modifica_PacienteInclude<ExtArgs> | null
    /**
     * Filter which PAdmin_Modifica_Paciente to delete.
     */
    where: PAdmin_Modifica_PacienteWhereUniqueInput
  }

  /**
   * PAdmin_Modifica_Paciente deleteMany
   */
  export type PAdmin_Modifica_PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PAdmin_Modifica_Pacientes to delete
     */
    where?: PAdmin_Modifica_PacienteWhereInput
    /**
     * Limit how many PAdmin_Modifica_Pacientes to delete.
     */
    limit?: number
  }

  /**
   * PAdmin_Modifica_Paciente without action
   */
  export type PAdmin_Modifica_PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Modifica_Paciente
     */
    select?: PAdmin_Modifica_PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Modifica_Paciente
     */
    omit?: PAdmin_Modifica_PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Modifica_PacienteInclude<ExtArgs> | null
  }


  /**
   * Model Actualizaciones_HistoriaClinica
   */

  export type AggregateActualizaciones_HistoriaClinica = {
    _count: Actualizaciones_HistoriaClinicaCountAggregateOutputType | null
    _avg: Actualizaciones_HistoriaClinicaAvgAggregateOutputType | null
    _sum: Actualizaciones_HistoriaClinicaSumAggregateOutputType | null
    _min: Actualizaciones_HistoriaClinicaMinAggregateOutputType | null
    _max: Actualizaciones_HistoriaClinicaMaxAggregateOutputType | null
  }

  export type Actualizaciones_HistoriaClinicaAvgAggregateOutputType = {
    idMedico: number | null
    idCita: number | null
    idHistoriaClinica: number | null
  }

  export type Actualizaciones_HistoriaClinicaSumAggregateOutputType = {
    idMedico: number | null
    idCita: number | null
    idHistoriaClinica: number | null
  }

  export type Actualizaciones_HistoriaClinicaMinAggregateOutputType = {
    idMedico: number | null
    idCita: number | null
    idHistoriaClinica: number | null
    FActualizacion: Date | null
  }

  export type Actualizaciones_HistoriaClinicaMaxAggregateOutputType = {
    idMedico: number | null
    idCita: number | null
    idHistoriaClinica: number | null
    FActualizacion: Date | null
  }

  export type Actualizaciones_HistoriaClinicaCountAggregateOutputType = {
    idMedico: number
    idCita: number
    idHistoriaClinica: number
    FActualizacion: number
    _all: number
  }


  export type Actualizaciones_HistoriaClinicaAvgAggregateInputType = {
    idMedico?: true
    idCita?: true
    idHistoriaClinica?: true
  }

  export type Actualizaciones_HistoriaClinicaSumAggregateInputType = {
    idMedico?: true
    idCita?: true
    idHistoriaClinica?: true
  }

  export type Actualizaciones_HistoriaClinicaMinAggregateInputType = {
    idMedico?: true
    idCita?: true
    idHistoriaClinica?: true
    FActualizacion?: true
  }

  export type Actualizaciones_HistoriaClinicaMaxAggregateInputType = {
    idMedico?: true
    idCita?: true
    idHistoriaClinica?: true
    FActualizacion?: true
  }

  export type Actualizaciones_HistoriaClinicaCountAggregateInputType = {
    idMedico?: true
    idCita?: true
    idHistoriaClinica?: true
    FActualizacion?: true
    _all?: true
  }

  export type Actualizaciones_HistoriaClinicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actualizaciones_HistoriaClinica to aggregate.
     */
    where?: Actualizaciones_HistoriaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actualizaciones_HistoriaClinicas to fetch.
     */
    orderBy?: Actualizaciones_HistoriaClinicaOrderByWithRelationInput | Actualizaciones_HistoriaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Actualizaciones_HistoriaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actualizaciones_HistoriaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actualizaciones_HistoriaClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actualizaciones_HistoriaClinicas
    **/
    _count?: true | Actualizaciones_HistoriaClinicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Actualizaciones_HistoriaClinicaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Actualizaciones_HistoriaClinicaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Actualizaciones_HistoriaClinicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Actualizaciones_HistoriaClinicaMaxAggregateInputType
  }

  export type GetActualizaciones_HistoriaClinicaAggregateType<T extends Actualizaciones_HistoriaClinicaAggregateArgs> = {
        [P in keyof T & keyof AggregateActualizaciones_HistoriaClinica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActualizaciones_HistoriaClinica[P]>
      : GetScalarType<T[P], AggregateActualizaciones_HistoriaClinica[P]>
  }




  export type Actualizaciones_HistoriaClinicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Actualizaciones_HistoriaClinicaWhereInput
    orderBy?: Actualizaciones_HistoriaClinicaOrderByWithAggregationInput | Actualizaciones_HistoriaClinicaOrderByWithAggregationInput[]
    by: Actualizaciones_HistoriaClinicaScalarFieldEnum[] | Actualizaciones_HistoriaClinicaScalarFieldEnum
    having?: Actualizaciones_HistoriaClinicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Actualizaciones_HistoriaClinicaCountAggregateInputType | true
    _avg?: Actualizaciones_HistoriaClinicaAvgAggregateInputType
    _sum?: Actualizaciones_HistoriaClinicaSumAggregateInputType
    _min?: Actualizaciones_HistoriaClinicaMinAggregateInputType
    _max?: Actualizaciones_HistoriaClinicaMaxAggregateInputType
  }

  export type Actualizaciones_HistoriaClinicaGroupByOutputType = {
    idMedico: number
    idCita: number
    idHistoriaClinica: number
    FActualizacion: Date
    _count: Actualizaciones_HistoriaClinicaCountAggregateOutputType | null
    _avg: Actualizaciones_HistoriaClinicaAvgAggregateOutputType | null
    _sum: Actualizaciones_HistoriaClinicaSumAggregateOutputType | null
    _min: Actualizaciones_HistoriaClinicaMinAggregateOutputType | null
    _max: Actualizaciones_HistoriaClinicaMaxAggregateOutputType | null
  }

  type GetActualizaciones_HistoriaClinicaGroupByPayload<T extends Actualizaciones_HistoriaClinicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Actualizaciones_HistoriaClinicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Actualizaciones_HistoriaClinicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Actualizaciones_HistoriaClinicaGroupByOutputType[P]>
            : GetScalarType<T[P], Actualizaciones_HistoriaClinicaGroupByOutputType[P]>
        }
      >
    >


  export type Actualizaciones_HistoriaClinicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMedico?: boolean
    idCita?: boolean
    idHistoriaClinica?: boolean
    FActualizacion?: boolean
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actualizaciones_HistoriaClinica"]>

  export type Actualizaciones_HistoriaClinicaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMedico?: boolean
    idCita?: boolean
    idHistoriaClinica?: boolean
    FActualizacion?: boolean
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actualizaciones_HistoriaClinica"]>

  export type Actualizaciones_HistoriaClinicaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMedico?: boolean
    idCita?: boolean
    idHistoriaClinica?: boolean
    FActualizacion?: boolean
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actualizaciones_HistoriaClinica"]>

  export type Actualizaciones_HistoriaClinicaSelectScalar = {
    idMedico?: boolean
    idCita?: boolean
    idHistoriaClinica?: boolean
    FActualizacion?: boolean
  }

  export type Actualizaciones_HistoriaClinicaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idMedico" | "idCita" | "idHistoriaClinica" | "FActualizacion", ExtArgs["result"]["actualizaciones_HistoriaClinica"]>
  export type Actualizaciones_HistoriaClinicaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }
  export type Actualizaciones_HistoriaClinicaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }
  export type Actualizaciones_HistoriaClinicaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }

  export type $Actualizaciones_HistoriaClinicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Actualizaciones_HistoriaClinica"
    objects: {
      medico: Prisma.$MedicoPayload<ExtArgs>
      cita: Prisma.$CitaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idMedico: number
      idCita: number
      idHistoriaClinica: number
      FActualizacion: Date
    }, ExtArgs["result"]["actualizaciones_HistoriaClinica"]>
    composites: {}
  }

  type Actualizaciones_HistoriaClinicaGetPayload<S extends boolean | null | undefined | Actualizaciones_HistoriaClinicaDefaultArgs> = $Result.GetResult<Prisma.$Actualizaciones_HistoriaClinicaPayload, S>

  type Actualizaciones_HistoriaClinicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Actualizaciones_HistoriaClinicaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Actualizaciones_HistoriaClinicaCountAggregateInputType | true
    }

  export interface Actualizaciones_HistoriaClinicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Actualizaciones_HistoriaClinica'], meta: { name: 'Actualizaciones_HistoriaClinica' } }
    /**
     * Find zero or one Actualizaciones_HistoriaClinica that matches the filter.
     * @param {Actualizaciones_HistoriaClinicaFindUniqueArgs} args - Arguments to find a Actualizaciones_HistoriaClinica
     * @example
     * // Get one Actualizaciones_HistoriaClinica
     * const actualizaciones_HistoriaClinica = await prisma.actualizaciones_HistoriaClinica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Actualizaciones_HistoriaClinicaFindUniqueArgs>(args: SelectSubset<T, Actualizaciones_HistoriaClinicaFindUniqueArgs<ExtArgs>>): Prisma__Actualizaciones_HistoriaClinicaClient<$Result.GetResult<Prisma.$Actualizaciones_HistoriaClinicaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actualizaciones_HistoriaClinica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Actualizaciones_HistoriaClinicaFindUniqueOrThrowArgs} args - Arguments to find a Actualizaciones_HistoriaClinica
     * @example
     * // Get one Actualizaciones_HistoriaClinica
     * const actualizaciones_HistoriaClinica = await prisma.actualizaciones_HistoriaClinica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Actualizaciones_HistoriaClinicaFindUniqueOrThrowArgs>(args: SelectSubset<T, Actualizaciones_HistoriaClinicaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Actualizaciones_HistoriaClinicaClient<$Result.GetResult<Prisma.$Actualizaciones_HistoriaClinicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actualizaciones_HistoriaClinica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Actualizaciones_HistoriaClinicaFindFirstArgs} args - Arguments to find a Actualizaciones_HistoriaClinica
     * @example
     * // Get one Actualizaciones_HistoriaClinica
     * const actualizaciones_HistoriaClinica = await prisma.actualizaciones_HistoriaClinica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Actualizaciones_HistoriaClinicaFindFirstArgs>(args?: SelectSubset<T, Actualizaciones_HistoriaClinicaFindFirstArgs<ExtArgs>>): Prisma__Actualizaciones_HistoriaClinicaClient<$Result.GetResult<Prisma.$Actualizaciones_HistoriaClinicaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actualizaciones_HistoriaClinica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Actualizaciones_HistoriaClinicaFindFirstOrThrowArgs} args - Arguments to find a Actualizaciones_HistoriaClinica
     * @example
     * // Get one Actualizaciones_HistoriaClinica
     * const actualizaciones_HistoriaClinica = await prisma.actualizaciones_HistoriaClinica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Actualizaciones_HistoriaClinicaFindFirstOrThrowArgs>(args?: SelectSubset<T, Actualizaciones_HistoriaClinicaFindFirstOrThrowArgs<ExtArgs>>): Prisma__Actualizaciones_HistoriaClinicaClient<$Result.GetResult<Prisma.$Actualizaciones_HistoriaClinicaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actualizaciones_HistoriaClinicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Actualizaciones_HistoriaClinicaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actualizaciones_HistoriaClinicas
     * const actualizaciones_HistoriaClinicas = await prisma.actualizaciones_HistoriaClinica.findMany()
     * 
     * // Get first 10 Actualizaciones_HistoriaClinicas
     * const actualizaciones_HistoriaClinicas = await prisma.actualizaciones_HistoriaClinica.findMany({ take: 10 })
     * 
     * // Only select the `idMedico`
     * const actualizaciones_HistoriaClinicaWithIdMedicoOnly = await prisma.actualizaciones_HistoriaClinica.findMany({ select: { idMedico: true } })
     * 
     */
    findMany<T extends Actualizaciones_HistoriaClinicaFindManyArgs>(args?: SelectSubset<T, Actualizaciones_HistoriaClinicaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Actualizaciones_HistoriaClinicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actualizaciones_HistoriaClinica.
     * @param {Actualizaciones_HistoriaClinicaCreateArgs} args - Arguments to create a Actualizaciones_HistoriaClinica.
     * @example
     * // Create one Actualizaciones_HistoriaClinica
     * const Actualizaciones_HistoriaClinica = await prisma.actualizaciones_HistoriaClinica.create({
     *   data: {
     *     // ... data to create a Actualizaciones_HistoriaClinica
     *   }
     * })
     * 
     */
    create<T extends Actualizaciones_HistoriaClinicaCreateArgs>(args: SelectSubset<T, Actualizaciones_HistoriaClinicaCreateArgs<ExtArgs>>): Prisma__Actualizaciones_HistoriaClinicaClient<$Result.GetResult<Prisma.$Actualizaciones_HistoriaClinicaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actualizaciones_HistoriaClinicas.
     * @param {Actualizaciones_HistoriaClinicaCreateManyArgs} args - Arguments to create many Actualizaciones_HistoriaClinicas.
     * @example
     * // Create many Actualizaciones_HistoriaClinicas
     * const actualizaciones_HistoriaClinica = await prisma.actualizaciones_HistoriaClinica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Actualizaciones_HistoriaClinicaCreateManyArgs>(args?: SelectSubset<T, Actualizaciones_HistoriaClinicaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actualizaciones_HistoriaClinicas and returns the data saved in the database.
     * @param {Actualizaciones_HistoriaClinicaCreateManyAndReturnArgs} args - Arguments to create many Actualizaciones_HistoriaClinicas.
     * @example
     * // Create many Actualizaciones_HistoriaClinicas
     * const actualizaciones_HistoriaClinica = await prisma.actualizaciones_HistoriaClinica.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actualizaciones_HistoriaClinicas and only return the `idMedico`
     * const actualizaciones_HistoriaClinicaWithIdMedicoOnly = await prisma.actualizaciones_HistoriaClinica.createManyAndReturn({
     *   select: { idMedico: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Actualizaciones_HistoriaClinicaCreateManyAndReturnArgs>(args?: SelectSubset<T, Actualizaciones_HistoriaClinicaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Actualizaciones_HistoriaClinicaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Actualizaciones_HistoriaClinica.
     * @param {Actualizaciones_HistoriaClinicaDeleteArgs} args - Arguments to delete one Actualizaciones_HistoriaClinica.
     * @example
     * // Delete one Actualizaciones_HistoriaClinica
     * const Actualizaciones_HistoriaClinica = await prisma.actualizaciones_HistoriaClinica.delete({
     *   where: {
     *     // ... filter to delete one Actualizaciones_HistoriaClinica
     *   }
     * })
     * 
     */
    delete<T extends Actualizaciones_HistoriaClinicaDeleteArgs>(args: SelectSubset<T, Actualizaciones_HistoriaClinicaDeleteArgs<ExtArgs>>): Prisma__Actualizaciones_HistoriaClinicaClient<$Result.GetResult<Prisma.$Actualizaciones_HistoriaClinicaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actualizaciones_HistoriaClinica.
     * @param {Actualizaciones_HistoriaClinicaUpdateArgs} args - Arguments to update one Actualizaciones_HistoriaClinica.
     * @example
     * // Update one Actualizaciones_HistoriaClinica
     * const actualizaciones_HistoriaClinica = await prisma.actualizaciones_HistoriaClinica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Actualizaciones_HistoriaClinicaUpdateArgs>(args: SelectSubset<T, Actualizaciones_HistoriaClinicaUpdateArgs<ExtArgs>>): Prisma__Actualizaciones_HistoriaClinicaClient<$Result.GetResult<Prisma.$Actualizaciones_HistoriaClinicaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actualizaciones_HistoriaClinicas.
     * @param {Actualizaciones_HistoriaClinicaDeleteManyArgs} args - Arguments to filter Actualizaciones_HistoriaClinicas to delete.
     * @example
     * // Delete a few Actualizaciones_HistoriaClinicas
     * const { count } = await prisma.actualizaciones_HistoriaClinica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Actualizaciones_HistoriaClinicaDeleteManyArgs>(args?: SelectSubset<T, Actualizaciones_HistoriaClinicaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actualizaciones_HistoriaClinicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Actualizaciones_HistoriaClinicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actualizaciones_HistoriaClinicas
     * const actualizaciones_HistoriaClinica = await prisma.actualizaciones_HistoriaClinica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Actualizaciones_HistoriaClinicaUpdateManyArgs>(args: SelectSubset<T, Actualizaciones_HistoriaClinicaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actualizaciones_HistoriaClinicas and returns the data updated in the database.
     * @param {Actualizaciones_HistoriaClinicaUpdateManyAndReturnArgs} args - Arguments to update many Actualizaciones_HistoriaClinicas.
     * @example
     * // Update many Actualizaciones_HistoriaClinicas
     * const actualizaciones_HistoriaClinica = await prisma.actualizaciones_HistoriaClinica.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actualizaciones_HistoriaClinicas and only return the `idMedico`
     * const actualizaciones_HistoriaClinicaWithIdMedicoOnly = await prisma.actualizaciones_HistoriaClinica.updateManyAndReturn({
     *   select: { idMedico: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Actualizaciones_HistoriaClinicaUpdateManyAndReturnArgs>(args: SelectSubset<T, Actualizaciones_HistoriaClinicaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Actualizaciones_HistoriaClinicaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Actualizaciones_HistoriaClinica.
     * @param {Actualizaciones_HistoriaClinicaUpsertArgs} args - Arguments to update or create a Actualizaciones_HistoriaClinica.
     * @example
     * // Update or create a Actualizaciones_HistoriaClinica
     * const actualizaciones_HistoriaClinica = await prisma.actualizaciones_HistoriaClinica.upsert({
     *   create: {
     *     // ... data to create a Actualizaciones_HistoriaClinica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actualizaciones_HistoriaClinica we want to update
     *   }
     * })
     */
    upsert<T extends Actualizaciones_HistoriaClinicaUpsertArgs>(args: SelectSubset<T, Actualizaciones_HistoriaClinicaUpsertArgs<ExtArgs>>): Prisma__Actualizaciones_HistoriaClinicaClient<$Result.GetResult<Prisma.$Actualizaciones_HistoriaClinicaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actualizaciones_HistoriaClinicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Actualizaciones_HistoriaClinicaCountArgs} args - Arguments to filter Actualizaciones_HistoriaClinicas to count.
     * @example
     * // Count the number of Actualizaciones_HistoriaClinicas
     * const count = await prisma.actualizaciones_HistoriaClinica.count({
     *   where: {
     *     // ... the filter for the Actualizaciones_HistoriaClinicas we want to count
     *   }
     * })
    **/
    count<T extends Actualizaciones_HistoriaClinicaCountArgs>(
      args?: Subset<T, Actualizaciones_HistoriaClinicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Actualizaciones_HistoriaClinicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actualizaciones_HistoriaClinica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Actualizaciones_HistoriaClinicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Actualizaciones_HistoriaClinicaAggregateArgs>(args: Subset<T, Actualizaciones_HistoriaClinicaAggregateArgs>): Prisma.PrismaPromise<GetActualizaciones_HistoriaClinicaAggregateType<T>>

    /**
     * Group by Actualizaciones_HistoriaClinica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Actualizaciones_HistoriaClinicaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Actualizaciones_HistoriaClinicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Actualizaciones_HistoriaClinicaGroupByArgs['orderBy'] }
        : { orderBy?: Actualizaciones_HistoriaClinicaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Actualizaciones_HistoriaClinicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActualizaciones_HistoriaClinicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Actualizaciones_HistoriaClinica model
   */
  readonly fields: Actualizaciones_HistoriaClinicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actualizaciones_HistoriaClinica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Actualizaciones_HistoriaClinicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medico<T extends MedicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicoDefaultArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cita<T extends CitaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CitaDefaultArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Actualizaciones_HistoriaClinica model
   */
  interface Actualizaciones_HistoriaClinicaFieldRefs {
    readonly idMedico: FieldRef<"Actualizaciones_HistoriaClinica", 'Int'>
    readonly idCita: FieldRef<"Actualizaciones_HistoriaClinica", 'Int'>
    readonly idHistoriaClinica: FieldRef<"Actualizaciones_HistoriaClinica", 'Int'>
    readonly FActualizacion: FieldRef<"Actualizaciones_HistoriaClinica", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Actualizaciones_HistoriaClinica findUnique
   */
  export type Actualizaciones_HistoriaClinicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actualizaciones_HistoriaClinica
     */
    select?: Actualizaciones_HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actualizaciones_HistoriaClinica
     */
    omit?: Actualizaciones_HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Actualizaciones_HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which Actualizaciones_HistoriaClinica to fetch.
     */
    where: Actualizaciones_HistoriaClinicaWhereUniqueInput
  }

  /**
   * Actualizaciones_HistoriaClinica findUniqueOrThrow
   */
  export type Actualizaciones_HistoriaClinicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actualizaciones_HistoriaClinica
     */
    select?: Actualizaciones_HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actualizaciones_HistoriaClinica
     */
    omit?: Actualizaciones_HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Actualizaciones_HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which Actualizaciones_HistoriaClinica to fetch.
     */
    where: Actualizaciones_HistoriaClinicaWhereUniqueInput
  }

  /**
   * Actualizaciones_HistoriaClinica findFirst
   */
  export type Actualizaciones_HistoriaClinicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actualizaciones_HistoriaClinica
     */
    select?: Actualizaciones_HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actualizaciones_HistoriaClinica
     */
    omit?: Actualizaciones_HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Actualizaciones_HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which Actualizaciones_HistoriaClinica to fetch.
     */
    where?: Actualizaciones_HistoriaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actualizaciones_HistoriaClinicas to fetch.
     */
    orderBy?: Actualizaciones_HistoriaClinicaOrderByWithRelationInput | Actualizaciones_HistoriaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actualizaciones_HistoriaClinicas.
     */
    cursor?: Actualizaciones_HistoriaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actualizaciones_HistoriaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actualizaciones_HistoriaClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actualizaciones_HistoriaClinicas.
     */
    distinct?: Actualizaciones_HistoriaClinicaScalarFieldEnum | Actualizaciones_HistoriaClinicaScalarFieldEnum[]
  }

  /**
   * Actualizaciones_HistoriaClinica findFirstOrThrow
   */
  export type Actualizaciones_HistoriaClinicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actualizaciones_HistoriaClinica
     */
    select?: Actualizaciones_HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actualizaciones_HistoriaClinica
     */
    omit?: Actualizaciones_HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Actualizaciones_HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which Actualizaciones_HistoriaClinica to fetch.
     */
    where?: Actualizaciones_HistoriaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actualizaciones_HistoriaClinicas to fetch.
     */
    orderBy?: Actualizaciones_HistoriaClinicaOrderByWithRelationInput | Actualizaciones_HistoriaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actualizaciones_HistoriaClinicas.
     */
    cursor?: Actualizaciones_HistoriaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actualizaciones_HistoriaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actualizaciones_HistoriaClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actualizaciones_HistoriaClinicas.
     */
    distinct?: Actualizaciones_HistoriaClinicaScalarFieldEnum | Actualizaciones_HistoriaClinicaScalarFieldEnum[]
  }

  /**
   * Actualizaciones_HistoriaClinica findMany
   */
  export type Actualizaciones_HistoriaClinicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actualizaciones_HistoriaClinica
     */
    select?: Actualizaciones_HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actualizaciones_HistoriaClinica
     */
    omit?: Actualizaciones_HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Actualizaciones_HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which Actualizaciones_HistoriaClinicas to fetch.
     */
    where?: Actualizaciones_HistoriaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actualizaciones_HistoriaClinicas to fetch.
     */
    orderBy?: Actualizaciones_HistoriaClinicaOrderByWithRelationInput | Actualizaciones_HistoriaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actualizaciones_HistoriaClinicas.
     */
    cursor?: Actualizaciones_HistoriaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actualizaciones_HistoriaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actualizaciones_HistoriaClinicas.
     */
    skip?: number
    distinct?: Actualizaciones_HistoriaClinicaScalarFieldEnum | Actualizaciones_HistoriaClinicaScalarFieldEnum[]
  }

  /**
   * Actualizaciones_HistoriaClinica create
   */
  export type Actualizaciones_HistoriaClinicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actualizaciones_HistoriaClinica
     */
    select?: Actualizaciones_HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actualizaciones_HistoriaClinica
     */
    omit?: Actualizaciones_HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Actualizaciones_HistoriaClinicaInclude<ExtArgs> | null
    /**
     * The data needed to create a Actualizaciones_HistoriaClinica.
     */
    data: XOR<Actualizaciones_HistoriaClinicaCreateInput, Actualizaciones_HistoriaClinicaUncheckedCreateInput>
  }

  /**
   * Actualizaciones_HistoriaClinica createMany
   */
  export type Actualizaciones_HistoriaClinicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actualizaciones_HistoriaClinicas.
     */
    data: Actualizaciones_HistoriaClinicaCreateManyInput | Actualizaciones_HistoriaClinicaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actualizaciones_HistoriaClinica createManyAndReturn
   */
  export type Actualizaciones_HistoriaClinicaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actualizaciones_HistoriaClinica
     */
    select?: Actualizaciones_HistoriaClinicaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actualizaciones_HistoriaClinica
     */
    omit?: Actualizaciones_HistoriaClinicaOmit<ExtArgs> | null
    /**
     * The data used to create many Actualizaciones_HistoriaClinicas.
     */
    data: Actualizaciones_HistoriaClinicaCreateManyInput | Actualizaciones_HistoriaClinicaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Actualizaciones_HistoriaClinicaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Actualizaciones_HistoriaClinica update
   */
  export type Actualizaciones_HistoriaClinicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actualizaciones_HistoriaClinica
     */
    select?: Actualizaciones_HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actualizaciones_HistoriaClinica
     */
    omit?: Actualizaciones_HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Actualizaciones_HistoriaClinicaInclude<ExtArgs> | null
    /**
     * The data needed to update a Actualizaciones_HistoriaClinica.
     */
    data: XOR<Actualizaciones_HistoriaClinicaUpdateInput, Actualizaciones_HistoriaClinicaUncheckedUpdateInput>
    /**
     * Choose, which Actualizaciones_HistoriaClinica to update.
     */
    where: Actualizaciones_HistoriaClinicaWhereUniqueInput
  }

  /**
   * Actualizaciones_HistoriaClinica updateMany
   */
  export type Actualizaciones_HistoriaClinicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actualizaciones_HistoriaClinicas.
     */
    data: XOR<Actualizaciones_HistoriaClinicaUpdateManyMutationInput, Actualizaciones_HistoriaClinicaUncheckedUpdateManyInput>
    /**
     * Filter which Actualizaciones_HistoriaClinicas to update
     */
    where?: Actualizaciones_HistoriaClinicaWhereInput
    /**
     * Limit how many Actualizaciones_HistoriaClinicas to update.
     */
    limit?: number
  }

  /**
   * Actualizaciones_HistoriaClinica updateManyAndReturn
   */
  export type Actualizaciones_HistoriaClinicaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actualizaciones_HistoriaClinica
     */
    select?: Actualizaciones_HistoriaClinicaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actualizaciones_HistoriaClinica
     */
    omit?: Actualizaciones_HistoriaClinicaOmit<ExtArgs> | null
    /**
     * The data used to update Actualizaciones_HistoriaClinicas.
     */
    data: XOR<Actualizaciones_HistoriaClinicaUpdateManyMutationInput, Actualizaciones_HistoriaClinicaUncheckedUpdateManyInput>
    /**
     * Filter which Actualizaciones_HistoriaClinicas to update
     */
    where?: Actualizaciones_HistoriaClinicaWhereInput
    /**
     * Limit how many Actualizaciones_HistoriaClinicas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Actualizaciones_HistoriaClinicaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Actualizaciones_HistoriaClinica upsert
   */
  export type Actualizaciones_HistoriaClinicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actualizaciones_HistoriaClinica
     */
    select?: Actualizaciones_HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actualizaciones_HistoriaClinica
     */
    omit?: Actualizaciones_HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Actualizaciones_HistoriaClinicaInclude<ExtArgs> | null
    /**
     * The filter to search for the Actualizaciones_HistoriaClinica to update in case it exists.
     */
    where: Actualizaciones_HistoriaClinicaWhereUniqueInput
    /**
     * In case the Actualizaciones_HistoriaClinica found by the `where` argument doesn't exist, create a new Actualizaciones_HistoriaClinica with this data.
     */
    create: XOR<Actualizaciones_HistoriaClinicaCreateInput, Actualizaciones_HistoriaClinicaUncheckedCreateInput>
    /**
     * In case the Actualizaciones_HistoriaClinica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Actualizaciones_HistoriaClinicaUpdateInput, Actualizaciones_HistoriaClinicaUncheckedUpdateInput>
  }

  /**
   * Actualizaciones_HistoriaClinica delete
   */
  export type Actualizaciones_HistoriaClinicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actualizaciones_HistoriaClinica
     */
    select?: Actualizaciones_HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actualizaciones_HistoriaClinica
     */
    omit?: Actualizaciones_HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Actualizaciones_HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter which Actualizaciones_HistoriaClinica to delete.
     */
    where: Actualizaciones_HistoriaClinicaWhereUniqueInput
  }

  /**
   * Actualizaciones_HistoriaClinica deleteMany
   */
  export type Actualizaciones_HistoriaClinicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actualizaciones_HistoriaClinicas to delete
     */
    where?: Actualizaciones_HistoriaClinicaWhereInput
    /**
     * Limit how many Actualizaciones_HistoriaClinicas to delete.
     */
    limit?: number
  }

  /**
   * Actualizaciones_HistoriaClinica without action
   */
  export type Actualizaciones_HistoriaClinicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actualizaciones_HistoriaClinica
     */
    select?: Actualizaciones_HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actualizaciones_HistoriaClinica
     */
    omit?: Actualizaciones_HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Actualizaciones_HistoriaClinicaInclude<ExtArgs> | null
  }


  /**
   * Model Medico_Preescribe_Medicamento
   */

  export type AggregateMedico_Preescribe_Medicamento = {
    _count: Medico_Preescribe_MedicamentoCountAggregateOutputType | null
    _avg: Medico_Preescribe_MedicamentoAvgAggregateOutputType | null
    _sum: Medico_Preescribe_MedicamentoSumAggregateOutputType | null
    _min: Medico_Preescribe_MedicamentoMinAggregateOutputType | null
    _max: Medico_Preescribe_MedicamentoMaxAggregateOutputType | null
  }

  export type Medico_Preescribe_MedicamentoAvgAggregateOutputType = {
    idMedico: number | null
    idCita: number | null
    idMedicamento: number | null
    idPaciente: number | null
  }

  export type Medico_Preescribe_MedicamentoSumAggregateOutputType = {
    idMedico: number | null
    idCita: number | null
    idMedicamento: number | null
    idPaciente: number | null
  }

  export type Medico_Preescribe_MedicamentoMinAggregateOutputType = {
    idMedico: number | null
    idCita: number | null
    idMedicamento: number | null
    idPaciente: number | null
    posologia: string | null
    particular: string | null
  }

  export type Medico_Preescribe_MedicamentoMaxAggregateOutputType = {
    idMedico: number | null
    idCita: number | null
    idMedicamento: number | null
    idPaciente: number | null
    posologia: string | null
    particular: string | null
  }

  export type Medico_Preescribe_MedicamentoCountAggregateOutputType = {
    idMedico: number
    idCita: number
    idMedicamento: number
    idPaciente: number
    posologia: number
    particular: number
    _all: number
  }


  export type Medico_Preescribe_MedicamentoAvgAggregateInputType = {
    idMedico?: true
    idCita?: true
    idMedicamento?: true
    idPaciente?: true
  }

  export type Medico_Preescribe_MedicamentoSumAggregateInputType = {
    idMedico?: true
    idCita?: true
    idMedicamento?: true
    idPaciente?: true
  }

  export type Medico_Preescribe_MedicamentoMinAggregateInputType = {
    idMedico?: true
    idCita?: true
    idMedicamento?: true
    idPaciente?: true
    posologia?: true
    particular?: true
  }

  export type Medico_Preescribe_MedicamentoMaxAggregateInputType = {
    idMedico?: true
    idCita?: true
    idMedicamento?: true
    idPaciente?: true
    posologia?: true
    particular?: true
  }

  export type Medico_Preescribe_MedicamentoCountAggregateInputType = {
    idMedico?: true
    idCita?: true
    idMedicamento?: true
    idPaciente?: true
    posologia?: true
    particular?: true
    _all?: true
  }

  export type Medico_Preescribe_MedicamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medico_Preescribe_Medicamento to aggregate.
     */
    where?: Medico_Preescribe_MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medico_Preescribe_Medicamentos to fetch.
     */
    orderBy?: Medico_Preescribe_MedicamentoOrderByWithRelationInput | Medico_Preescribe_MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Medico_Preescribe_MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medico_Preescribe_Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medico_Preescribe_Medicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medico_Preescribe_Medicamentos
    **/
    _count?: true | Medico_Preescribe_MedicamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Medico_Preescribe_MedicamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Medico_Preescribe_MedicamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Medico_Preescribe_MedicamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Medico_Preescribe_MedicamentoMaxAggregateInputType
  }

  export type GetMedico_Preescribe_MedicamentoAggregateType<T extends Medico_Preescribe_MedicamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateMedico_Preescribe_Medicamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedico_Preescribe_Medicamento[P]>
      : GetScalarType<T[P], AggregateMedico_Preescribe_Medicamento[P]>
  }




  export type Medico_Preescribe_MedicamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Medico_Preescribe_MedicamentoWhereInput
    orderBy?: Medico_Preescribe_MedicamentoOrderByWithAggregationInput | Medico_Preescribe_MedicamentoOrderByWithAggregationInput[]
    by: Medico_Preescribe_MedicamentoScalarFieldEnum[] | Medico_Preescribe_MedicamentoScalarFieldEnum
    having?: Medico_Preescribe_MedicamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Medico_Preescribe_MedicamentoCountAggregateInputType | true
    _avg?: Medico_Preescribe_MedicamentoAvgAggregateInputType
    _sum?: Medico_Preescribe_MedicamentoSumAggregateInputType
    _min?: Medico_Preescribe_MedicamentoMinAggregateInputType
    _max?: Medico_Preescribe_MedicamentoMaxAggregateInputType
  }

  export type Medico_Preescribe_MedicamentoGroupByOutputType = {
    idMedico: number
    idCita: number
    idMedicamento: number
    idPaciente: number
    posologia: string
    particular: string
    _count: Medico_Preescribe_MedicamentoCountAggregateOutputType | null
    _avg: Medico_Preescribe_MedicamentoAvgAggregateOutputType | null
    _sum: Medico_Preescribe_MedicamentoSumAggregateOutputType | null
    _min: Medico_Preescribe_MedicamentoMinAggregateOutputType | null
    _max: Medico_Preescribe_MedicamentoMaxAggregateOutputType | null
  }

  type GetMedico_Preescribe_MedicamentoGroupByPayload<T extends Medico_Preescribe_MedicamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Medico_Preescribe_MedicamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Medico_Preescribe_MedicamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Medico_Preescribe_MedicamentoGroupByOutputType[P]>
            : GetScalarType<T[P], Medico_Preescribe_MedicamentoGroupByOutputType[P]>
        }
      >
    >


  export type Medico_Preescribe_MedicamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMedico?: boolean
    idCita?: boolean
    idMedicamento?: boolean
    idPaciente?: boolean
    posologia?: boolean
    particular?: boolean
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico_Preescribe_Medicamento"]>

  export type Medico_Preescribe_MedicamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMedico?: boolean
    idCita?: boolean
    idMedicamento?: boolean
    idPaciente?: boolean
    posologia?: boolean
    particular?: boolean
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico_Preescribe_Medicamento"]>

  export type Medico_Preescribe_MedicamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMedico?: boolean
    idCita?: boolean
    idMedicamento?: boolean
    idPaciente?: boolean
    posologia?: boolean
    particular?: boolean
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico_Preescribe_Medicamento"]>

  export type Medico_Preescribe_MedicamentoSelectScalar = {
    idMedico?: boolean
    idCita?: boolean
    idMedicamento?: boolean
    idPaciente?: boolean
    posologia?: boolean
    particular?: boolean
  }

  export type Medico_Preescribe_MedicamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idMedico" | "idCita" | "idMedicamento" | "idPaciente" | "posologia" | "particular", ExtArgs["result"]["medico_Preescribe_Medicamento"]>
  export type Medico_Preescribe_MedicamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }
  export type Medico_Preescribe_MedicamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }
  export type Medico_Preescribe_MedicamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }

  export type $Medico_Preescribe_MedicamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medico_Preescribe_Medicamento"
    objects: {
      medico: Prisma.$MedicoPayload<ExtArgs>
      cita: Prisma.$CitaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idMedico: number
      idCita: number
      idMedicamento: number
      idPaciente: number
      posologia: string
      particular: string
    }, ExtArgs["result"]["medico_Preescribe_Medicamento"]>
    composites: {}
  }

  type Medico_Preescribe_MedicamentoGetPayload<S extends boolean | null | undefined | Medico_Preescribe_MedicamentoDefaultArgs> = $Result.GetResult<Prisma.$Medico_Preescribe_MedicamentoPayload, S>

  type Medico_Preescribe_MedicamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Medico_Preescribe_MedicamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Medico_Preescribe_MedicamentoCountAggregateInputType | true
    }

  export interface Medico_Preescribe_MedicamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medico_Preescribe_Medicamento'], meta: { name: 'Medico_Preescribe_Medicamento' } }
    /**
     * Find zero or one Medico_Preescribe_Medicamento that matches the filter.
     * @param {Medico_Preescribe_MedicamentoFindUniqueArgs} args - Arguments to find a Medico_Preescribe_Medicamento
     * @example
     * // Get one Medico_Preescribe_Medicamento
     * const medico_Preescribe_Medicamento = await prisma.medico_Preescribe_Medicamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Medico_Preescribe_MedicamentoFindUniqueArgs>(args: SelectSubset<T, Medico_Preescribe_MedicamentoFindUniqueArgs<ExtArgs>>): Prisma__Medico_Preescribe_MedicamentoClient<$Result.GetResult<Prisma.$Medico_Preescribe_MedicamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medico_Preescribe_Medicamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Medico_Preescribe_MedicamentoFindUniqueOrThrowArgs} args - Arguments to find a Medico_Preescribe_Medicamento
     * @example
     * // Get one Medico_Preescribe_Medicamento
     * const medico_Preescribe_Medicamento = await prisma.medico_Preescribe_Medicamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Medico_Preescribe_MedicamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, Medico_Preescribe_MedicamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Medico_Preescribe_MedicamentoClient<$Result.GetResult<Prisma.$Medico_Preescribe_MedicamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medico_Preescribe_Medicamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_Preescribe_MedicamentoFindFirstArgs} args - Arguments to find a Medico_Preescribe_Medicamento
     * @example
     * // Get one Medico_Preescribe_Medicamento
     * const medico_Preescribe_Medicamento = await prisma.medico_Preescribe_Medicamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Medico_Preescribe_MedicamentoFindFirstArgs>(args?: SelectSubset<T, Medico_Preescribe_MedicamentoFindFirstArgs<ExtArgs>>): Prisma__Medico_Preescribe_MedicamentoClient<$Result.GetResult<Prisma.$Medico_Preescribe_MedicamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medico_Preescribe_Medicamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_Preescribe_MedicamentoFindFirstOrThrowArgs} args - Arguments to find a Medico_Preescribe_Medicamento
     * @example
     * // Get one Medico_Preescribe_Medicamento
     * const medico_Preescribe_Medicamento = await prisma.medico_Preescribe_Medicamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Medico_Preescribe_MedicamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, Medico_Preescribe_MedicamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__Medico_Preescribe_MedicamentoClient<$Result.GetResult<Prisma.$Medico_Preescribe_MedicamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medico_Preescribe_Medicamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_Preescribe_MedicamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medico_Preescribe_Medicamentos
     * const medico_Preescribe_Medicamentos = await prisma.medico_Preescribe_Medicamento.findMany()
     * 
     * // Get first 10 Medico_Preescribe_Medicamentos
     * const medico_Preescribe_Medicamentos = await prisma.medico_Preescribe_Medicamento.findMany({ take: 10 })
     * 
     * // Only select the `idMedico`
     * const medico_Preescribe_MedicamentoWithIdMedicoOnly = await prisma.medico_Preescribe_Medicamento.findMany({ select: { idMedico: true } })
     * 
     */
    findMany<T extends Medico_Preescribe_MedicamentoFindManyArgs>(args?: SelectSubset<T, Medico_Preescribe_MedicamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Medico_Preescribe_MedicamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medico_Preescribe_Medicamento.
     * @param {Medico_Preescribe_MedicamentoCreateArgs} args - Arguments to create a Medico_Preescribe_Medicamento.
     * @example
     * // Create one Medico_Preescribe_Medicamento
     * const Medico_Preescribe_Medicamento = await prisma.medico_Preescribe_Medicamento.create({
     *   data: {
     *     // ... data to create a Medico_Preescribe_Medicamento
     *   }
     * })
     * 
     */
    create<T extends Medico_Preescribe_MedicamentoCreateArgs>(args: SelectSubset<T, Medico_Preescribe_MedicamentoCreateArgs<ExtArgs>>): Prisma__Medico_Preescribe_MedicamentoClient<$Result.GetResult<Prisma.$Medico_Preescribe_MedicamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medico_Preescribe_Medicamentos.
     * @param {Medico_Preescribe_MedicamentoCreateManyArgs} args - Arguments to create many Medico_Preescribe_Medicamentos.
     * @example
     * // Create many Medico_Preescribe_Medicamentos
     * const medico_Preescribe_Medicamento = await prisma.medico_Preescribe_Medicamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Medico_Preescribe_MedicamentoCreateManyArgs>(args?: SelectSubset<T, Medico_Preescribe_MedicamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medico_Preescribe_Medicamentos and returns the data saved in the database.
     * @param {Medico_Preescribe_MedicamentoCreateManyAndReturnArgs} args - Arguments to create many Medico_Preescribe_Medicamentos.
     * @example
     * // Create many Medico_Preescribe_Medicamentos
     * const medico_Preescribe_Medicamento = await prisma.medico_Preescribe_Medicamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medico_Preescribe_Medicamentos and only return the `idMedico`
     * const medico_Preescribe_MedicamentoWithIdMedicoOnly = await prisma.medico_Preescribe_Medicamento.createManyAndReturn({
     *   select: { idMedico: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Medico_Preescribe_MedicamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, Medico_Preescribe_MedicamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Medico_Preescribe_MedicamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medico_Preescribe_Medicamento.
     * @param {Medico_Preescribe_MedicamentoDeleteArgs} args - Arguments to delete one Medico_Preescribe_Medicamento.
     * @example
     * // Delete one Medico_Preescribe_Medicamento
     * const Medico_Preescribe_Medicamento = await prisma.medico_Preescribe_Medicamento.delete({
     *   where: {
     *     // ... filter to delete one Medico_Preescribe_Medicamento
     *   }
     * })
     * 
     */
    delete<T extends Medico_Preescribe_MedicamentoDeleteArgs>(args: SelectSubset<T, Medico_Preescribe_MedicamentoDeleteArgs<ExtArgs>>): Prisma__Medico_Preescribe_MedicamentoClient<$Result.GetResult<Prisma.$Medico_Preescribe_MedicamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medico_Preescribe_Medicamento.
     * @param {Medico_Preescribe_MedicamentoUpdateArgs} args - Arguments to update one Medico_Preescribe_Medicamento.
     * @example
     * // Update one Medico_Preescribe_Medicamento
     * const medico_Preescribe_Medicamento = await prisma.medico_Preescribe_Medicamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Medico_Preescribe_MedicamentoUpdateArgs>(args: SelectSubset<T, Medico_Preescribe_MedicamentoUpdateArgs<ExtArgs>>): Prisma__Medico_Preescribe_MedicamentoClient<$Result.GetResult<Prisma.$Medico_Preescribe_MedicamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medico_Preescribe_Medicamentos.
     * @param {Medico_Preescribe_MedicamentoDeleteManyArgs} args - Arguments to filter Medico_Preescribe_Medicamentos to delete.
     * @example
     * // Delete a few Medico_Preescribe_Medicamentos
     * const { count } = await prisma.medico_Preescribe_Medicamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Medico_Preescribe_MedicamentoDeleteManyArgs>(args?: SelectSubset<T, Medico_Preescribe_MedicamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medico_Preescribe_Medicamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_Preescribe_MedicamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medico_Preescribe_Medicamentos
     * const medico_Preescribe_Medicamento = await prisma.medico_Preescribe_Medicamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Medico_Preescribe_MedicamentoUpdateManyArgs>(args: SelectSubset<T, Medico_Preescribe_MedicamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medico_Preescribe_Medicamentos and returns the data updated in the database.
     * @param {Medico_Preescribe_MedicamentoUpdateManyAndReturnArgs} args - Arguments to update many Medico_Preescribe_Medicamentos.
     * @example
     * // Update many Medico_Preescribe_Medicamentos
     * const medico_Preescribe_Medicamento = await prisma.medico_Preescribe_Medicamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medico_Preescribe_Medicamentos and only return the `idMedico`
     * const medico_Preescribe_MedicamentoWithIdMedicoOnly = await prisma.medico_Preescribe_Medicamento.updateManyAndReturn({
     *   select: { idMedico: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Medico_Preescribe_MedicamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, Medico_Preescribe_MedicamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Medico_Preescribe_MedicamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medico_Preescribe_Medicamento.
     * @param {Medico_Preescribe_MedicamentoUpsertArgs} args - Arguments to update or create a Medico_Preescribe_Medicamento.
     * @example
     * // Update or create a Medico_Preescribe_Medicamento
     * const medico_Preescribe_Medicamento = await prisma.medico_Preescribe_Medicamento.upsert({
     *   create: {
     *     // ... data to create a Medico_Preescribe_Medicamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medico_Preescribe_Medicamento we want to update
     *   }
     * })
     */
    upsert<T extends Medico_Preescribe_MedicamentoUpsertArgs>(args: SelectSubset<T, Medico_Preescribe_MedicamentoUpsertArgs<ExtArgs>>): Prisma__Medico_Preescribe_MedicamentoClient<$Result.GetResult<Prisma.$Medico_Preescribe_MedicamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medico_Preescribe_Medicamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_Preescribe_MedicamentoCountArgs} args - Arguments to filter Medico_Preescribe_Medicamentos to count.
     * @example
     * // Count the number of Medico_Preescribe_Medicamentos
     * const count = await prisma.medico_Preescribe_Medicamento.count({
     *   where: {
     *     // ... the filter for the Medico_Preescribe_Medicamentos we want to count
     *   }
     * })
    **/
    count<T extends Medico_Preescribe_MedicamentoCountArgs>(
      args?: Subset<T, Medico_Preescribe_MedicamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Medico_Preescribe_MedicamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medico_Preescribe_Medicamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_Preescribe_MedicamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Medico_Preescribe_MedicamentoAggregateArgs>(args: Subset<T, Medico_Preescribe_MedicamentoAggregateArgs>): Prisma.PrismaPromise<GetMedico_Preescribe_MedicamentoAggregateType<T>>

    /**
     * Group by Medico_Preescribe_Medicamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_Preescribe_MedicamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Medico_Preescribe_MedicamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Medico_Preescribe_MedicamentoGroupByArgs['orderBy'] }
        : { orderBy?: Medico_Preescribe_MedicamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Medico_Preescribe_MedicamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedico_Preescribe_MedicamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medico_Preescribe_Medicamento model
   */
  readonly fields: Medico_Preescribe_MedicamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medico_Preescribe_Medicamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Medico_Preescribe_MedicamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medico<T extends MedicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicoDefaultArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cita<T extends CitaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CitaDefaultArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medico_Preescribe_Medicamento model
   */
  interface Medico_Preescribe_MedicamentoFieldRefs {
    readonly idMedico: FieldRef<"Medico_Preescribe_Medicamento", 'Int'>
    readonly idCita: FieldRef<"Medico_Preescribe_Medicamento", 'Int'>
    readonly idMedicamento: FieldRef<"Medico_Preescribe_Medicamento", 'Int'>
    readonly idPaciente: FieldRef<"Medico_Preescribe_Medicamento", 'Int'>
    readonly posologia: FieldRef<"Medico_Preescribe_Medicamento", 'String'>
    readonly particular: FieldRef<"Medico_Preescribe_Medicamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Medico_Preescribe_Medicamento findUnique
   */
  export type Medico_Preescribe_MedicamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Preescribe_Medicamento
     */
    select?: Medico_Preescribe_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Preescribe_Medicamento
     */
    omit?: Medico_Preescribe_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_Preescribe_MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medico_Preescribe_Medicamento to fetch.
     */
    where: Medico_Preescribe_MedicamentoWhereUniqueInput
  }

  /**
   * Medico_Preescribe_Medicamento findUniqueOrThrow
   */
  export type Medico_Preescribe_MedicamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Preescribe_Medicamento
     */
    select?: Medico_Preescribe_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Preescribe_Medicamento
     */
    omit?: Medico_Preescribe_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_Preescribe_MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medico_Preescribe_Medicamento to fetch.
     */
    where: Medico_Preescribe_MedicamentoWhereUniqueInput
  }

  /**
   * Medico_Preescribe_Medicamento findFirst
   */
  export type Medico_Preescribe_MedicamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Preescribe_Medicamento
     */
    select?: Medico_Preescribe_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Preescribe_Medicamento
     */
    omit?: Medico_Preescribe_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_Preescribe_MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medico_Preescribe_Medicamento to fetch.
     */
    where?: Medico_Preescribe_MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medico_Preescribe_Medicamentos to fetch.
     */
    orderBy?: Medico_Preescribe_MedicamentoOrderByWithRelationInput | Medico_Preescribe_MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medico_Preescribe_Medicamentos.
     */
    cursor?: Medico_Preescribe_MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medico_Preescribe_Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medico_Preescribe_Medicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medico_Preescribe_Medicamentos.
     */
    distinct?: Medico_Preescribe_MedicamentoScalarFieldEnum | Medico_Preescribe_MedicamentoScalarFieldEnum[]
  }

  /**
   * Medico_Preescribe_Medicamento findFirstOrThrow
   */
  export type Medico_Preescribe_MedicamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Preescribe_Medicamento
     */
    select?: Medico_Preescribe_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Preescribe_Medicamento
     */
    omit?: Medico_Preescribe_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_Preescribe_MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medico_Preescribe_Medicamento to fetch.
     */
    where?: Medico_Preescribe_MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medico_Preescribe_Medicamentos to fetch.
     */
    orderBy?: Medico_Preescribe_MedicamentoOrderByWithRelationInput | Medico_Preescribe_MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medico_Preescribe_Medicamentos.
     */
    cursor?: Medico_Preescribe_MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medico_Preescribe_Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medico_Preescribe_Medicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medico_Preescribe_Medicamentos.
     */
    distinct?: Medico_Preescribe_MedicamentoScalarFieldEnum | Medico_Preescribe_MedicamentoScalarFieldEnum[]
  }

  /**
   * Medico_Preescribe_Medicamento findMany
   */
  export type Medico_Preescribe_MedicamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Preescribe_Medicamento
     */
    select?: Medico_Preescribe_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Preescribe_Medicamento
     */
    omit?: Medico_Preescribe_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_Preescribe_MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medico_Preescribe_Medicamentos to fetch.
     */
    where?: Medico_Preescribe_MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medico_Preescribe_Medicamentos to fetch.
     */
    orderBy?: Medico_Preescribe_MedicamentoOrderByWithRelationInput | Medico_Preescribe_MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medico_Preescribe_Medicamentos.
     */
    cursor?: Medico_Preescribe_MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medico_Preescribe_Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medico_Preescribe_Medicamentos.
     */
    skip?: number
    distinct?: Medico_Preescribe_MedicamentoScalarFieldEnum | Medico_Preescribe_MedicamentoScalarFieldEnum[]
  }

  /**
   * Medico_Preescribe_Medicamento create
   */
  export type Medico_Preescribe_MedicamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Preescribe_Medicamento
     */
    select?: Medico_Preescribe_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Preescribe_Medicamento
     */
    omit?: Medico_Preescribe_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_Preescribe_MedicamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Medico_Preescribe_Medicamento.
     */
    data: XOR<Medico_Preescribe_MedicamentoCreateInput, Medico_Preescribe_MedicamentoUncheckedCreateInput>
  }

  /**
   * Medico_Preescribe_Medicamento createMany
   */
  export type Medico_Preescribe_MedicamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medico_Preescribe_Medicamentos.
     */
    data: Medico_Preescribe_MedicamentoCreateManyInput | Medico_Preescribe_MedicamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medico_Preescribe_Medicamento createManyAndReturn
   */
  export type Medico_Preescribe_MedicamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Preescribe_Medicamento
     */
    select?: Medico_Preescribe_MedicamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Preescribe_Medicamento
     */
    omit?: Medico_Preescribe_MedicamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Medico_Preescribe_Medicamentos.
     */
    data: Medico_Preescribe_MedicamentoCreateManyInput | Medico_Preescribe_MedicamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_Preescribe_MedicamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medico_Preescribe_Medicamento update
   */
  export type Medico_Preescribe_MedicamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Preescribe_Medicamento
     */
    select?: Medico_Preescribe_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Preescribe_Medicamento
     */
    omit?: Medico_Preescribe_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_Preescribe_MedicamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Medico_Preescribe_Medicamento.
     */
    data: XOR<Medico_Preescribe_MedicamentoUpdateInput, Medico_Preescribe_MedicamentoUncheckedUpdateInput>
    /**
     * Choose, which Medico_Preescribe_Medicamento to update.
     */
    where: Medico_Preescribe_MedicamentoWhereUniqueInput
  }

  /**
   * Medico_Preescribe_Medicamento updateMany
   */
  export type Medico_Preescribe_MedicamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medico_Preescribe_Medicamentos.
     */
    data: XOR<Medico_Preescribe_MedicamentoUpdateManyMutationInput, Medico_Preescribe_MedicamentoUncheckedUpdateManyInput>
    /**
     * Filter which Medico_Preescribe_Medicamentos to update
     */
    where?: Medico_Preescribe_MedicamentoWhereInput
    /**
     * Limit how many Medico_Preescribe_Medicamentos to update.
     */
    limit?: number
  }

  /**
   * Medico_Preescribe_Medicamento updateManyAndReturn
   */
  export type Medico_Preescribe_MedicamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Preescribe_Medicamento
     */
    select?: Medico_Preescribe_MedicamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Preescribe_Medicamento
     */
    omit?: Medico_Preescribe_MedicamentoOmit<ExtArgs> | null
    /**
     * The data used to update Medico_Preescribe_Medicamentos.
     */
    data: XOR<Medico_Preescribe_MedicamentoUpdateManyMutationInput, Medico_Preescribe_MedicamentoUncheckedUpdateManyInput>
    /**
     * Filter which Medico_Preescribe_Medicamentos to update
     */
    where?: Medico_Preescribe_MedicamentoWhereInput
    /**
     * Limit how many Medico_Preescribe_Medicamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_Preescribe_MedicamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medico_Preescribe_Medicamento upsert
   */
  export type Medico_Preescribe_MedicamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Preescribe_Medicamento
     */
    select?: Medico_Preescribe_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Preescribe_Medicamento
     */
    omit?: Medico_Preescribe_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_Preescribe_MedicamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Medico_Preescribe_Medicamento to update in case it exists.
     */
    where: Medico_Preescribe_MedicamentoWhereUniqueInput
    /**
     * In case the Medico_Preescribe_Medicamento found by the `where` argument doesn't exist, create a new Medico_Preescribe_Medicamento with this data.
     */
    create: XOR<Medico_Preescribe_MedicamentoCreateInput, Medico_Preescribe_MedicamentoUncheckedCreateInput>
    /**
     * In case the Medico_Preescribe_Medicamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Medico_Preescribe_MedicamentoUpdateInput, Medico_Preescribe_MedicamentoUncheckedUpdateInput>
  }

  /**
   * Medico_Preescribe_Medicamento delete
   */
  export type Medico_Preescribe_MedicamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Preescribe_Medicamento
     */
    select?: Medico_Preescribe_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Preescribe_Medicamento
     */
    omit?: Medico_Preescribe_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_Preescribe_MedicamentoInclude<ExtArgs> | null
    /**
     * Filter which Medico_Preescribe_Medicamento to delete.
     */
    where: Medico_Preescribe_MedicamentoWhereUniqueInput
  }

  /**
   * Medico_Preescribe_Medicamento deleteMany
   */
  export type Medico_Preescribe_MedicamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medico_Preescribe_Medicamentos to delete
     */
    where?: Medico_Preescribe_MedicamentoWhereInput
    /**
     * Limit how many Medico_Preescribe_Medicamentos to delete.
     */
    limit?: number
  }

  /**
   * Medico_Preescribe_Medicamento without action
   */
  export type Medico_Preescribe_MedicamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_Preescribe_Medicamento
     */
    select?: Medico_Preescribe_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_Preescribe_Medicamento
     */
    omit?: Medico_Preescribe_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_Preescribe_MedicamentoInclude<ExtArgs> | null
  }


  /**
   * Model Registro_Consulta_Medicamento
   */

  export type AggregateRegistro_Consulta_Medicamento = {
    _count: Registro_Consulta_MedicamentoCountAggregateOutputType | null
    _avg: Registro_Consulta_MedicamentoAvgAggregateOutputType | null
    _sum: Registro_Consulta_MedicamentoSumAggregateOutputType | null
    _min: Registro_Consulta_MedicamentoMinAggregateOutputType | null
    _max: Registro_Consulta_MedicamentoMaxAggregateOutputType | null
  }

  export type Registro_Consulta_MedicamentoAvgAggregateOutputType = {
    idMedico: number | null
    idMedicamento: number | null
  }

  export type Registro_Consulta_MedicamentoSumAggregateOutputType = {
    idMedico: number | null
    idMedicamento: number | null
  }

  export type Registro_Consulta_MedicamentoMinAggregateOutputType = {
    idMedico: number | null
    idMedicamento: number | null
    FConsulta: Date | null
  }

  export type Registro_Consulta_MedicamentoMaxAggregateOutputType = {
    idMedico: number | null
    idMedicamento: number | null
    FConsulta: Date | null
  }

  export type Registro_Consulta_MedicamentoCountAggregateOutputType = {
    idMedico: number
    idMedicamento: number
    FConsulta: number
    _all: number
  }


  export type Registro_Consulta_MedicamentoAvgAggregateInputType = {
    idMedico?: true
    idMedicamento?: true
  }

  export type Registro_Consulta_MedicamentoSumAggregateInputType = {
    idMedico?: true
    idMedicamento?: true
  }

  export type Registro_Consulta_MedicamentoMinAggregateInputType = {
    idMedico?: true
    idMedicamento?: true
    FConsulta?: true
  }

  export type Registro_Consulta_MedicamentoMaxAggregateInputType = {
    idMedico?: true
    idMedicamento?: true
    FConsulta?: true
  }

  export type Registro_Consulta_MedicamentoCountAggregateInputType = {
    idMedico?: true
    idMedicamento?: true
    FConsulta?: true
    _all?: true
  }

  export type Registro_Consulta_MedicamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registro_Consulta_Medicamento to aggregate.
     */
    where?: Registro_Consulta_MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registro_Consulta_Medicamentos to fetch.
     */
    orderBy?: Registro_Consulta_MedicamentoOrderByWithRelationInput | Registro_Consulta_MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Registro_Consulta_MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registro_Consulta_Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registro_Consulta_Medicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registro_Consulta_Medicamentos
    **/
    _count?: true | Registro_Consulta_MedicamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Registro_Consulta_MedicamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Registro_Consulta_MedicamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Registro_Consulta_MedicamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Registro_Consulta_MedicamentoMaxAggregateInputType
  }

  export type GetRegistro_Consulta_MedicamentoAggregateType<T extends Registro_Consulta_MedicamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistro_Consulta_Medicamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistro_Consulta_Medicamento[P]>
      : GetScalarType<T[P], AggregateRegistro_Consulta_Medicamento[P]>
  }




  export type Registro_Consulta_MedicamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Registro_Consulta_MedicamentoWhereInput
    orderBy?: Registro_Consulta_MedicamentoOrderByWithAggregationInput | Registro_Consulta_MedicamentoOrderByWithAggregationInput[]
    by: Registro_Consulta_MedicamentoScalarFieldEnum[] | Registro_Consulta_MedicamentoScalarFieldEnum
    having?: Registro_Consulta_MedicamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Registro_Consulta_MedicamentoCountAggregateInputType | true
    _avg?: Registro_Consulta_MedicamentoAvgAggregateInputType
    _sum?: Registro_Consulta_MedicamentoSumAggregateInputType
    _min?: Registro_Consulta_MedicamentoMinAggregateInputType
    _max?: Registro_Consulta_MedicamentoMaxAggregateInputType
  }

  export type Registro_Consulta_MedicamentoGroupByOutputType = {
    idMedico: number
    idMedicamento: number
    FConsulta: Date
    _count: Registro_Consulta_MedicamentoCountAggregateOutputType | null
    _avg: Registro_Consulta_MedicamentoAvgAggregateOutputType | null
    _sum: Registro_Consulta_MedicamentoSumAggregateOutputType | null
    _min: Registro_Consulta_MedicamentoMinAggregateOutputType | null
    _max: Registro_Consulta_MedicamentoMaxAggregateOutputType | null
  }

  type GetRegistro_Consulta_MedicamentoGroupByPayload<T extends Registro_Consulta_MedicamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Registro_Consulta_MedicamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Registro_Consulta_MedicamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Registro_Consulta_MedicamentoGroupByOutputType[P]>
            : GetScalarType<T[P], Registro_Consulta_MedicamentoGroupByOutputType[P]>
        }
      >
    >


  export type Registro_Consulta_MedicamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMedico?: boolean
    idMedicamento?: boolean
    FConsulta?: boolean
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registro_Consulta_Medicamento"]>

  export type Registro_Consulta_MedicamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMedico?: boolean
    idMedicamento?: boolean
    FConsulta?: boolean
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registro_Consulta_Medicamento"]>

  export type Registro_Consulta_MedicamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMedico?: boolean
    idMedicamento?: boolean
    FConsulta?: boolean
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registro_Consulta_Medicamento"]>

  export type Registro_Consulta_MedicamentoSelectScalar = {
    idMedico?: boolean
    idMedicamento?: boolean
    FConsulta?: boolean
  }

  export type Registro_Consulta_MedicamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idMedico" | "idMedicamento" | "FConsulta", ExtArgs["result"]["registro_Consulta_Medicamento"]>
  export type Registro_Consulta_MedicamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }
  export type Registro_Consulta_MedicamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }
  export type Registro_Consulta_MedicamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
  }

  export type $Registro_Consulta_MedicamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Registro_Consulta_Medicamento"
    objects: {
      medico: Prisma.$MedicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idMedico: number
      idMedicamento: number
      FConsulta: Date
    }, ExtArgs["result"]["registro_Consulta_Medicamento"]>
    composites: {}
  }

  type Registro_Consulta_MedicamentoGetPayload<S extends boolean | null | undefined | Registro_Consulta_MedicamentoDefaultArgs> = $Result.GetResult<Prisma.$Registro_Consulta_MedicamentoPayload, S>

  type Registro_Consulta_MedicamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Registro_Consulta_MedicamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Registro_Consulta_MedicamentoCountAggregateInputType | true
    }

  export interface Registro_Consulta_MedicamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Registro_Consulta_Medicamento'], meta: { name: 'Registro_Consulta_Medicamento' } }
    /**
     * Find zero or one Registro_Consulta_Medicamento that matches the filter.
     * @param {Registro_Consulta_MedicamentoFindUniqueArgs} args - Arguments to find a Registro_Consulta_Medicamento
     * @example
     * // Get one Registro_Consulta_Medicamento
     * const registro_Consulta_Medicamento = await prisma.registro_Consulta_Medicamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Registro_Consulta_MedicamentoFindUniqueArgs>(args: SelectSubset<T, Registro_Consulta_MedicamentoFindUniqueArgs<ExtArgs>>): Prisma__Registro_Consulta_MedicamentoClient<$Result.GetResult<Prisma.$Registro_Consulta_MedicamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registro_Consulta_Medicamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Registro_Consulta_MedicamentoFindUniqueOrThrowArgs} args - Arguments to find a Registro_Consulta_Medicamento
     * @example
     * // Get one Registro_Consulta_Medicamento
     * const registro_Consulta_Medicamento = await prisma.registro_Consulta_Medicamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Registro_Consulta_MedicamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, Registro_Consulta_MedicamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Registro_Consulta_MedicamentoClient<$Result.GetResult<Prisma.$Registro_Consulta_MedicamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registro_Consulta_Medicamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Registro_Consulta_MedicamentoFindFirstArgs} args - Arguments to find a Registro_Consulta_Medicamento
     * @example
     * // Get one Registro_Consulta_Medicamento
     * const registro_Consulta_Medicamento = await prisma.registro_Consulta_Medicamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Registro_Consulta_MedicamentoFindFirstArgs>(args?: SelectSubset<T, Registro_Consulta_MedicamentoFindFirstArgs<ExtArgs>>): Prisma__Registro_Consulta_MedicamentoClient<$Result.GetResult<Prisma.$Registro_Consulta_MedicamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registro_Consulta_Medicamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Registro_Consulta_MedicamentoFindFirstOrThrowArgs} args - Arguments to find a Registro_Consulta_Medicamento
     * @example
     * // Get one Registro_Consulta_Medicamento
     * const registro_Consulta_Medicamento = await prisma.registro_Consulta_Medicamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Registro_Consulta_MedicamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, Registro_Consulta_MedicamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__Registro_Consulta_MedicamentoClient<$Result.GetResult<Prisma.$Registro_Consulta_MedicamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registro_Consulta_Medicamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Registro_Consulta_MedicamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registro_Consulta_Medicamentos
     * const registro_Consulta_Medicamentos = await prisma.registro_Consulta_Medicamento.findMany()
     * 
     * // Get first 10 Registro_Consulta_Medicamentos
     * const registro_Consulta_Medicamentos = await prisma.registro_Consulta_Medicamento.findMany({ take: 10 })
     * 
     * // Only select the `idMedico`
     * const registro_Consulta_MedicamentoWithIdMedicoOnly = await prisma.registro_Consulta_Medicamento.findMany({ select: { idMedico: true } })
     * 
     */
    findMany<T extends Registro_Consulta_MedicamentoFindManyArgs>(args?: SelectSubset<T, Registro_Consulta_MedicamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Registro_Consulta_MedicamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registro_Consulta_Medicamento.
     * @param {Registro_Consulta_MedicamentoCreateArgs} args - Arguments to create a Registro_Consulta_Medicamento.
     * @example
     * // Create one Registro_Consulta_Medicamento
     * const Registro_Consulta_Medicamento = await prisma.registro_Consulta_Medicamento.create({
     *   data: {
     *     // ... data to create a Registro_Consulta_Medicamento
     *   }
     * })
     * 
     */
    create<T extends Registro_Consulta_MedicamentoCreateArgs>(args: SelectSubset<T, Registro_Consulta_MedicamentoCreateArgs<ExtArgs>>): Prisma__Registro_Consulta_MedicamentoClient<$Result.GetResult<Prisma.$Registro_Consulta_MedicamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registro_Consulta_Medicamentos.
     * @param {Registro_Consulta_MedicamentoCreateManyArgs} args - Arguments to create many Registro_Consulta_Medicamentos.
     * @example
     * // Create many Registro_Consulta_Medicamentos
     * const registro_Consulta_Medicamento = await prisma.registro_Consulta_Medicamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Registro_Consulta_MedicamentoCreateManyArgs>(args?: SelectSubset<T, Registro_Consulta_MedicamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registro_Consulta_Medicamentos and returns the data saved in the database.
     * @param {Registro_Consulta_MedicamentoCreateManyAndReturnArgs} args - Arguments to create many Registro_Consulta_Medicamentos.
     * @example
     * // Create many Registro_Consulta_Medicamentos
     * const registro_Consulta_Medicamento = await prisma.registro_Consulta_Medicamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registro_Consulta_Medicamentos and only return the `idMedico`
     * const registro_Consulta_MedicamentoWithIdMedicoOnly = await prisma.registro_Consulta_Medicamento.createManyAndReturn({
     *   select: { idMedico: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Registro_Consulta_MedicamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, Registro_Consulta_MedicamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Registro_Consulta_MedicamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Registro_Consulta_Medicamento.
     * @param {Registro_Consulta_MedicamentoDeleteArgs} args - Arguments to delete one Registro_Consulta_Medicamento.
     * @example
     * // Delete one Registro_Consulta_Medicamento
     * const Registro_Consulta_Medicamento = await prisma.registro_Consulta_Medicamento.delete({
     *   where: {
     *     // ... filter to delete one Registro_Consulta_Medicamento
     *   }
     * })
     * 
     */
    delete<T extends Registro_Consulta_MedicamentoDeleteArgs>(args: SelectSubset<T, Registro_Consulta_MedicamentoDeleteArgs<ExtArgs>>): Prisma__Registro_Consulta_MedicamentoClient<$Result.GetResult<Prisma.$Registro_Consulta_MedicamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registro_Consulta_Medicamento.
     * @param {Registro_Consulta_MedicamentoUpdateArgs} args - Arguments to update one Registro_Consulta_Medicamento.
     * @example
     * // Update one Registro_Consulta_Medicamento
     * const registro_Consulta_Medicamento = await prisma.registro_Consulta_Medicamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Registro_Consulta_MedicamentoUpdateArgs>(args: SelectSubset<T, Registro_Consulta_MedicamentoUpdateArgs<ExtArgs>>): Prisma__Registro_Consulta_MedicamentoClient<$Result.GetResult<Prisma.$Registro_Consulta_MedicamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registro_Consulta_Medicamentos.
     * @param {Registro_Consulta_MedicamentoDeleteManyArgs} args - Arguments to filter Registro_Consulta_Medicamentos to delete.
     * @example
     * // Delete a few Registro_Consulta_Medicamentos
     * const { count } = await prisma.registro_Consulta_Medicamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Registro_Consulta_MedicamentoDeleteManyArgs>(args?: SelectSubset<T, Registro_Consulta_MedicamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registro_Consulta_Medicamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Registro_Consulta_MedicamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registro_Consulta_Medicamentos
     * const registro_Consulta_Medicamento = await prisma.registro_Consulta_Medicamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Registro_Consulta_MedicamentoUpdateManyArgs>(args: SelectSubset<T, Registro_Consulta_MedicamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registro_Consulta_Medicamentos and returns the data updated in the database.
     * @param {Registro_Consulta_MedicamentoUpdateManyAndReturnArgs} args - Arguments to update many Registro_Consulta_Medicamentos.
     * @example
     * // Update many Registro_Consulta_Medicamentos
     * const registro_Consulta_Medicamento = await prisma.registro_Consulta_Medicamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Registro_Consulta_Medicamentos and only return the `idMedico`
     * const registro_Consulta_MedicamentoWithIdMedicoOnly = await prisma.registro_Consulta_Medicamento.updateManyAndReturn({
     *   select: { idMedico: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Registro_Consulta_MedicamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, Registro_Consulta_MedicamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Registro_Consulta_MedicamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Registro_Consulta_Medicamento.
     * @param {Registro_Consulta_MedicamentoUpsertArgs} args - Arguments to update or create a Registro_Consulta_Medicamento.
     * @example
     * // Update or create a Registro_Consulta_Medicamento
     * const registro_Consulta_Medicamento = await prisma.registro_Consulta_Medicamento.upsert({
     *   create: {
     *     // ... data to create a Registro_Consulta_Medicamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registro_Consulta_Medicamento we want to update
     *   }
     * })
     */
    upsert<T extends Registro_Consulta_MedicamentoUpsertArgs>(args: SelectSubset<T, Registro_Consulta_MedicamentoUpsertArgs<ExtArgs>>): Prisma__Registro_Consulta_MedicamentoClient<$Result.GetResult<Prisma.$Registro_Consulta_MedicamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registro_Consulta_Medicamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Registro_Consulta_MedicamentoCountArgs} args - Arguments to filter Registro_Consulta_Medicamentos to count.
     * @example
     * // Count the number of Registro_Consulta_Medicamentos
     * const count = await prisma.registro_Consulta_Medicamento.count({
     *   where: {
     *     // ... the filter for the Registro_Consulta_Medicamentos we want to count
     *   }
     * })
    **/
    count<T extends Registro_Consulta_MedicamentoCountArgs>(
      args?: Subset<T, Registro_Consulta_MedicamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Registro_Consulta_MedicamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registro_Consulta_Medicamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Registro_Consulta_MedicamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Registro_Consulta_MedicamentoAggregateArgs>(args: Subset<T, Registro_Consulta_MedicamentoAggregateArgs>): Prisma.PrismaPromise<GetRegistro_Consulta_MedicamentoAggregateType<T>>

    /**
     * Group by Registro_Consulta_Medicamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Registro_Consulta_MedicamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Registro_Consulta_MedicamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Registro_Consulta_MedicamentoGroupByArgs['orderBy'] }
        : { orderBy?: Registro_Consulta_MedicamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Registro_Consulta_MedicamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistro_Consulta_MedicamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Registro_Consulta_Medicamento model
   */
  readonly fields: Registro_Consulta_MedicamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Registro_Consulta_Medicamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Registro_Consulta_MedicamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medico<T extends MedicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicoDefaultArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Registro_Consulta_Medicamento model
   */
  interface Registro_Consulta_MedicamentoFieldRefs {
    readonly idMedico: FieldRef<"Registro_Consulta_Medicamento", 'Int'>
    readonly idMedicamento: FieldRef<"Registro_Consulta_Medicamento", 'Int'>
    readonly FConsulta: FieldRef<"Registro_Consulta_Medicamento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Registro_Consulta_Medicamento findUnique
   */
  export type Registro_Consulta_MedicamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro_Consulta_Medicamento
     */
    select?: Registro_Consulta_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro_Consulta_Medicamento
     */
    omit?: Registro_Consulta_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Registro_Consulta_MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Registro_Consulta_Medicamento to fetch.
     */
    where: Registro_Consulta_MedicamentoWhereUniqueInput
  }

  /**
   * Registro_Consulta_Medicamento findUniqueOrThrow
   */
  export type Registro_Consulta_MedicamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro_Consulta_Medicamento
     */
    select?: Registro_Consulta_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro_Consulta_Medicamento
     */
    omit?: Registro_Consulta_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Registro_Consulta_MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Registro_Consulta_Medicamento to fetch.
     */
    where: Registro_Consulta_MedicamentoWhereUniqueInput
  }

  /**
   * Registro_Consulta_Medicamento findFirst
   */
  export type Registro_Consulta_MedicamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro_Consulta_Medicamento
     */
    select?: Registro_Consulta_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro_Consulta_Medicamento
     */
    omit?: Registro_Consulta_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Registro_Consulta_MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Registro_Consulta_Medicamento to fetch.
     */
    where?: Registro_Consulta_MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registro_Consulta_Medicamentos to fetch.
     */
    orderBy?: Registro_Consulta_MedicamentoOrderByWithRelationInput | Registro_Consulta_MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registro_Consulta_Medicamentos.
     */
    cursor?: Registro_Consulta_MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registro_Consulta_Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registro_Consulta_Medicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registro_Consulta_Medicamentos.
     */
    distinct?: Registro_Consulta_MedicamentoScalarFieldEnum | Registro_Consulta_MedicamentoScalarFieldEnum[]
  }

  /**
   * Registro_Consulta_Medicamento findFirstOrThrow
   */
  export type Registro_Consulta_MedicamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro_Consulta_Medicamento
     */
    select?: Registro_Consulta_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro_Consulta_Medicamento
     */
    omit?: Registro_Consulta_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Registro_Consulta_MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Registro_Consulta_Medicamento to fetch.
     */
    where?: Registro_Consulta_MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registro_Consulta_Medicamentos to fetch.
     */
    orderBy?: Registro_Consulta_MedicamentoOrderByWithRelationInput | Registro_Consulta_MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registro_Consulta_Medicamentos.
     */
    cursor?: Registro_Consulta_MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registro_Consulta_Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registro_Consulta_Medicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registro_Consulta_Medicamentos.
     */
    distinct?: Registro_Consulta_MedicamentoScalarFieldEnum | Registro_Consulta_MedicamentoScalarFieldEnum[]
  }

  /**
   * Registro_Consulta_Medicamento findMany
   */
  export type Registro_Consulta_MedicamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro_Consulta_Medicamento
     */
    select?: Registro_Consulta_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro_Consulta_Medicamento
     */
    omit?: Registro_Consulta_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Registro_Consulta_MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Registro_Consulta_Medicamentos to fetch.
     */
    where?: Registro_Consulta_MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registro_Consulta_Medicamentos to fetch.
     */
    orderBy?: Registro_Consulta_MedicamentoOrderByWithRelationInput | Registro_Consulta_MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registro_Consulta_Medicamentos.
     */
    cursor?: Registro_Consulta_MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registro_Consulta_Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registro_Consulta_Medicamentos.
     */
    skip?: number
    distinct?: Registro_Consulta_MedicamentoScalarFieldEnum | Registro_Consulta_MedicamentoScalarFieldEnum[]
  }

  /**
   * Registro_Consulta_Medicamento create
   */
  export type Registro_Consulta_MedicamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro_Consulta_Medicamento
     */
    select?: Registro_Consulta_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro_Consulta_Medicamento
     */
    omit?: Registro_Consulta_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Registro_Consulta_MedicamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Registro_Consulta_Medicamento.
     */
    data: XOR<Registro_Consulta_MedicamentoCreateInput, Registro_Consulta_MedicamentoUncheckedCreateInput>
  }

  /**
   * Registro_Consulta_Medicamento createMany
   */
  export type Registro_Consulta_MedicamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registro_Consulta_Medicamentos.
     */
    data: Registro_Consulta_MedicamentoCreateManyInput | Registro_Consulta_MedicamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registro_Consulta_Medicamento createManyAndReturn
   */
  export type Registro_Consulta_MedicamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro_Consulta_Medicamento
     */
    select?: Registro_Consulta_MedicamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registro_Consulta_Medicamento
     */
    omit?: Registro_Consulta_MedicamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Registro_Consulta_Medicamentos.
     */
    data: Registro_Consulta_MedicamentoCreateManyInput | Registro_Consulta_MedicamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Registro_Consulta_MedicamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registro_Consulta_Medicamento update
   */
  export type Registro_Consulta_MedicamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro_Consulta_Medicamento
     */
    select?: Registro_Consulta_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro_Consulta_Medicamento
     */
    omit?: Registro_Consulta_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Registro_Consulta_MedicamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Registro_Consulta_Medicamento.
     */
    data: XOR<Registro_Consulta_MedicamentoUpdateInput, Registro_Consulta_MedicamentoUncheckedUpdateInput>
    /**
     * Choose, which Registro_Consulta_Medicamento to update.
     */
    where: Registro_Consulta_MedicamentoWhereUniqueInput
  }

  /**
   * Registro_Consulta_Medicamento updateMany
   */
  export type Registro_Consulta_MedicamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registro_Consulta_Medicamentos.
     */
    data: XOR<Registro_Consulta_MedicamentoUpdateManyMutationInput, Registro_Consulta_MedicamentoUncheckedUpdateManyInput>
    /**
     * Filter which Registro_Consulta_Medicamentos to update
     */
    where?: Registro_Consulta_MedicamentoWhereInput
    /**
     * Limit how many Registro_Consulta_Medicamentos to update.
     */
    limit?: number
  }

  /**
   * Registro_Consulta_Medicamento updateManyAndReturn
   */
  export type Registro_Consulta_MedicamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro_Consulta_Medicamento
     */
    select?: Registro_Consulta_MedicamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registro_Consulta_Medicamento
     */
    omit?: Registro_Consulta_MedicamentoOmit<ExtArgs> | null
    /**
     * The data used to update Registro_Consulta_Medicamentos.
     */
    data: XOR<Registro_Consulta_MedicamentoUpdateManyMutationInput, Registro_Consulta_MedicamentoUncheckedUpdateManyInput>
    /**
     * Filter which Registro_Consulta_Medicamentos to update
     */
    where?: Registro_Consulta_MedicamentoWhereInput
    /**
     * Limit how many Registro_Consulta_Medicamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Registro_Consulta_MedicamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registro_Consulta_Medicamento upsert
   */
  export type Registro_Consulta_MedicamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro_Consulta_Medicamento
     */
    select?: Registro_Consulta_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro_Consulta_Medicamento
     */
    omit?: Registro_Consulta_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Registro_Consulta_MedicamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Registro_Consulta_Medicamento to update in case it exists.
     */
    where: Registro_Consulta_MedicamentoWhereUniqueInput
    /**
     * In case the Registro_Consulta_Medicamento found by the `where` argument doesn't exist, create a new Registro_Consulta_Medicamento with this data.
     */
    create: XOR<Registro_Consulta_MedicamentoCreateInput, Registro_Consulta_MedicamentoUncheckedCreateInput>
    /**
     * In case the Registro_Consulta_Medicamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Registro_Consulta_MedicamentoUpdateInput, Registro_Consulta_MedicamentoUncheckedUpdateInput>
  }

  /**
   * Registro_Consulta_Medicamento delete
   */
  export type Registro_Consulta_MedicamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro_Consulta_Medicamento
     */
    select?: Registro_Consulta_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro_Consulta_Medicamento
     */
    omit?: Registro_Consulta_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Registro_Consulta_MedicamentoInclude<ExtArgs> | null
    /**
     * Filter which Registro_Consulta_Medicamento to delete.
     */
    where: Registro_Consulta_MedicamentoWhereUniqueInput
  }

  /**
   * Registro_Consulta_Medicamento deleteMany
   */
  export type Registro_Consulta_MedicamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registro_Consulta_Medicamentos to delete
     */
    where?: Registro_Consulta_MedicamentoWhereInput
    /**
     * Limit how many Registro_Consulta_Medicamentos to delete.
     */
    limit?: number
  }

  /**
   * Registro_Consulta_Medicamento without action
   */
  export type Registro_Consulta_MedicamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro_Consulta_Medicamento
     */
    select?: Registro_Consulta_MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro_Consulta_Medicamento
     */
    omit?: Registro_Consulta_MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Registro_Consulta_MedicamentoInclude<ExtArgs> | null
  }


  /**
   * Model PAdmin_Gestiona_Cita
   */

  export type AggregatePAdmin_Gestiona_Cita = {
    _count: PAdmin_Gestiona_CitaCountAggregateOutputType | null
    _avg: PAdmin_Gestiona_CitaAvgAggregateOutputType | null
    _sum: PAdmin_Gestiona_CitaSumAggregateOutputType | null
    _min: PAdmin_Gestiona_CitaMinAggregateOutputType | null
    _max: PAdmin_Gestiona_CitaMaxAggregateOutputType | null
  }

  export type PAdmin_Gestiona_CitaAvgAggregateOutputType = {
    idPAdministrativo: number | null
    idCita: number | null
  }

  export type PAdmin_Gestiona_CitaSumAggregateOutputType = {
    idPAdministrativo: number | null
    idCita: number | null
  }

  export type PAdmin_Gestiona_CitaMinAggregateOutputType = {
    idPAdministrativo: number | null
    idCita: number | null
    accion: string | null
    FAccion: Date | null
  }

  export type PAdmin_Gestiona_CitaMaxAggregateOutputType = {
    idPAdministrativo: number | null
    idCita: number | null
    accion: string | null
    FAccion: Date | null
  }

  export type PAdmin_Gestiona_CitaCountAggregateOutputType = {
    idPAdministrativo: number
    idCita: number
    accion: number
    FAccion: number
    _all: number
  }


  export type PAdmin_Gestiona_CitaAvgAggregateInputType = {
    idPAdministrativo?: true
    idCita?: true
  }

  export type PAdmin_Gestiona_CitaSumAggregateInputType = {
    idPAdministrativo?: true
    idCita?: true
  }

  export type PAdmin_Gestiona_CitaMinAggregateInputType = {
    idPAdministrativo?: true
    idCita?: true
    accion?: true
    FAccion?: true
  }

  export type PAdmin_Gestiona_CitaMaxAggregateInputType = {
    idPAdministrativo?: true
    idCita?: true
    accion?: true
    FAccion?: true
  }

  export type PAdmin_Gestiona_CitaCountAggregateInputType = {
    idPAdministrativo?: true
    idCita?: true
    accion?: true
    FAccion?: true
    _all?: true
  }

  export type PAdmin_Gestiona_CitaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PAdmin_Gestiona_Cita to aggregate.
     */
    where?: PAdmin_Gestiona_CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAdmin_Gestiona_Citas to fetch.
     */
    orderBy?: PAdmin_Gestiona_CitaOrderByWithRelationInput | PAdmin_Gestiona_CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PAdmin_Gestiona_CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAdmin_Gestiona_Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAdmin_Gestiona_Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PAdmin_Gestiona_Citas
    **/
    _count?: true | PAdmin_Gestiona_CitaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PAdmin_Gestiona_CitaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PAdmin_Gestiona_CitaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PAdmin_Gestiona_CitaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PAdmin_Gestiona_CitaMaxAggregateInputType
  }

  export type GetPAdmin_Gestiona_CitaAggregateType<T extends PAdmin_Gestiona_CitaAggregateArgs> = {
        [P in keyof T & keyof AggregatePAdmin_Gestiona_Cita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePAdmin_Gestiona_Cita[P]>
      : GetScalarType<T[P], AggregatePAdmin_Gestiona_Cita[P]>
  }




  export type PAdmin_Gestiona_CitaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PAdmin_Gestiona_CitaWhereInput
    orderBy?: PAdmin_Gestiona_CitaOrderByWithAggregationInput | PAdmin_Gestiona_CitaOrderByWithAggregationInput[]
    by: PAdmin_Gestiona_CitaScalarFieldEnum[] | PAdmin_Gestiona_CitaScalarFieldEnum
    having?: PAdmin_Gestiona_CitaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PAdmin_Gestiona_CitaCountAggregateInputType | true
    _avg?: PAdmin_Gestiona_CitaAvgAggregateInputType
    _sum?: PAdmin_Gestiona_CitaSumAggregateInputType
    _min?: PAdmin_Gestiona_CitaMinAggregateInputType
    _max?: PAdmin_Gestiona_CitaMaxAggregateInputType
  }

  export type PAdmin_Gestiona_CitaGroupByOutputType = {
    idPAdministrativo: number
    idCita: number
    accion: string
    FAccion: Date
    _count: PAdmin_Gestiona_CitaCountAggregateOutputType | null
    _avg: PAdmin_Gestiona_CitaAvgAggregateOutputType | null
    _sum: PAdmin_Gestiona_CitaSumAggregateOutputType | null
    _min: PAdmin_Gestiona_CitaMinAggregateOutputType | null
    _max: PAdmin_Gestiona_CitaMaxAggregateOutputType | null
  }

  type GetPAdmin_Gestiona_CitaGroupByPayload<T extends PAdmin_Gestiona_CitaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PAdmin_Gestiona_CitaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PAdmin_Gestiona_CitaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PAdmin_Gestiona_CitaGroupByOutputType[P]>
            : GetScalarType<T[P], PAdmin_Gestiona_CitaGroupByOutputType[P]>
        }
      >
    >


  export type PAdmin_Gestiona_CitaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPAdministrativo?: boolean
    idCita?: boolean
    accion?: boolean
    FAccion?: boolean
    pAdministrativo?: boolean | PAdministrativoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pAdmin_Gestiona_Cita"]>

  export type PAdmin_Gestiona_CitaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPAdministrativo?: boolean
    idCita?: boolean
    accion?: boolean
    FAccion?: boolean
    pAdministrativo?: boolean | PAdministrativoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pAdmin_Gestiona_Cita"]>

  export type PAdmin_Gestiona_CitaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPAdministrativo?: boolean
    idCita?: boolean
    accion?: boolean
    FAccion?: boolean
    pAdministrativo?: boolean | PAdministrativoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pAdmin_Gestiona_Cita"]>

  export type PAdmin_Gestiona_CitaSelectScalar = {
    idPAdministrativo?: boolean
    idCita?: boolean
    accion?: boolean
    FAccion?: boolean
  }

  export type PAdmin_Gestiona_CitaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPAdministrativo" | "idCita" | "accion" | "FAccion", ExtArgs["result"]["pAdmin_Gestiona_Cita"]>
  export type PAdmin_Gestiona_CitaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pAdministrativo?: boolean | PAdministrativoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }
  export type PAdmin_Gestiona_CitaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pAdministrativo?: boolean | PAdministrativoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }
  export type PAdmin_Gestiona_CitaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pAdministrativo?: boolean | PAdministrativoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }

  export type $PAdmin_Gestiona_CitaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PAdmin_Gestiona_Cita"
    objects: {
      pAdministrativo: Prisma.$PAdministrativoPayload<ExtArgs>
      cita: Prisma.$CitaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idPAdministrativo: number
      idCita: number
      accion: string
      FAccion: Date
    }, ExtArgs["result"]["pAdmin_Gestiona_Cita"]>
    composites: {}
  }

  type PAdmin_Gestiona_CitaGetPayload<S extends boolean | null | undefined | PAdmin_Gestiona_CitaDefaultArgs> = $Result.GetResult<Prisma.$PAdmin_Gestiona_CitaPayload, S>

  type PAdmin_Gestiona_CitaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PAdmin_Gestiona_CitaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PAdmin_Gestiona_CitaCountAggregateInputType | true
    }

  export interface PAdmin_Gestiona_CitaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PAdmin_Gestiona_Cita'], meta: { name: 'PAdmin_Gestiona_Cita' } }
    /**
     * Find zero or one PAdmin_Gestiona_Cita that matches the filter.
     * @param {PAdmin_Gestiona_CitaFindUniqueArgs} args - Arguments to find a PAdmin_Gestiona_Cita
     * @example
     * // Get one PAdmin_Gestiona_Cita
     * const pAdmin_Gestiona_Cita = await prisma.pAdmin_Gestiona_Cita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PAdmin_Gestiona_CitaFindUniqueArgs>(args: SelectSubset<T, PAdmin_Gestiona_CitaFindUniqueArgs<ExtArgs>>): Prisma__PAdmin_Gestiona_CitaClient<$Result.GetResult<Prisma.$PAdmin_Gestiona_CitaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PAdmin_Gestiona_Cita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PAdmin_Gestiona_CitaFindUniqueOrThrowArgs} args - Arguments to find a PAdmin_Gestiona_Cita
     * @example
     * // Get one PAdmin_Gestiona_Cita
     * const pAdmin_Gestiona_Cita = await prisma.pAdmin_Gestiona_Cita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PAdmin_Gestiona_CitaFindUniqueOrThrowArgs>(args: SelectSubset<T, PAdmin_Gestiona_CitaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PAdmin_Gestiona_CitaClient<$Result.GetResult<Prisma.$PAdmin_Gestiona_CitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PAdmin_Gestiona_Cita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdmin_Gestiona_CitaFindFirstArgs} args - Arguments to find a PAdmin_Gestiona_Cita
     * @example
     * // Get one PAdmin_Gestiona_Cita
     * const pAdmin_Gestiona_Cita = await prisma.pAdmin_Gestiona_Cita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PAdmin_Gestiona_CitaFindFirstArgs>(args?: SelectSubset<T, PAdmin_Gestiona_CitaFindFirstArgs<ExtArgs>>): Prisma__PAdmin_Gestiona_CitaClient<$Result.GetResult<Prisma.$PAdmin_Gestiona_CitaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PAdmin_Gestiona_Cita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdmin_Gestiona_CitaFindFirstOrThrowArgs} args - Arguments to find a PAdmin_Gestiona_Cita
     * @example
     * // Get one PAdmin_Gestiona_Cita
     * const pAdmin_Gestiona_Cita = await prisma.pAdmin_Gestiona_Cita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PAdmin_Gestiona_CitaFindFirstOrThrowArgs>(args?: SelectSubset<T, PAdmin_Gestiona_CitaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PAdmin_Gestiona_CitaClient<$Result.GetResult<Prisma.$PAdmin_Gestiona_CitaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PAdmin_Gestiona_Citas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdmin_Gestiona_CitaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PAdmin_Gestiona_Citas
     * const pAdmin_Gestiona_Citas = await prisma.pAdmin_Gestiona_Cita.findMany()
     * 
     * // Get first 10 PAdmin_Gestiona_Citas
     * const pAdmin_Gestiona_Citas = await prisma.pAdmin_Gestiona_Cita.findMany({ take: 10 })
     * 
     * // Only select the `idPAdministrativo`
     * const pAdmin_Gestiona_CitaWithIdPAdministrativoOnly = await prisma.pAdmin_Gestiona_Cita.findMany({ select: { idPAdministrativo: true } })
     * 
     */
    findMany<T extends PAdmin_Gestiona_CitaFindManyArgs>(args?: SelectSubset<T, PAdmin_Gestiona_CitaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAdmin_Gestiona_CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PAdmin_Gestiona_Cita.
     * @param {PAdmin_Gestiona_CitaCreateArgs} args - Arguments to create a PAdmin_Gestiona_Cita.
     * @example
     * // Create one PAdmin_Gestiona_Cita
     * const PAdmin_Gestiona_Cita = await prisma.pAdmin_Gestiona_Cita.create({
     *   data: {
     *     // ... data to create a PAdmin_Gestiona_Cita
     *   }
     * })
     * 
     */
    create<T extends PAdmin_Gestiona_CitaCreateArgs>(args: SelectSubset<T, PAdmin_Gestiona_CitaCreateArgs<ExtArgs>>): Prisma__PAdmin_Gestiona_CitaClient<$Result.GetResult<Prisma.$PAdmin_Gestiona_CitaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PAdmin_Gestiona_Citas.
     * @param {PAdmin_Gestiona_CitaCreateManyArgs} args - Arguments to create many PAdmin_Gestiona_Citas.
     * @example
     * // Create many PAdmin_Gestiona_Citas
     * const pAdmin_Gestiona_Cita = await prisma.pAdmin_Gestiona_Cita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PAdmin_Gestiona_CitaCreateManyArgs>(args?: SelectSubset<T, PAdmin_Gestiona_CitaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PAdmin_Gestiona_Citas and returns the data saved in the database.
     * @param {PAdmin_Gestiona_CitaCreateManyAndReturnArgs} args - Arguments to create many PAdmin_Gestiona_Citas.
     * @example
     * // Create many PAdmin_Gestiona_Citas
     * const pAdmin_Gestiona_Cita = await prisma.pAdmin_Gestiona_Cita.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PAdmin_Gestiona_Citas and only return the `idPAdministrativo`
     * const pAdmin_Gestiona_CitaWithIdPAdministrativoOnly = await prisma.pAdmin_Gestiona_Cita.createManyAndReturn({
     *   select: { idPAdministrativo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PAdmin_Gestiona_CitaCreateManyAndReturnArgs>(args?: SelectSubset<T, PAdmin_Gestiona_CitaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAdmin_Gestiona_CitaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PAdmin_Gestiona_Cita.
     * @param {PAdmin_Gestiona_CitaDeleteArgs} args - Arguments to delete one PAdmin_Gestiona_Cita.
     * @example
     * // Delete one PAdmin_Gestiona_Cita
     * const PAdmin_Gestiona_Cita = await prisma.pAdmin_Gestiona_Cita.delete({
     *   where: {
     *     // ... filter to delete one PAdmin_Gestiona_Cita
     *   }
     * })
     * 
     */
    delete<T extends PAdmin_Gestiona_CitaDeleteArgs>(args: SelectSubset<T, PAdmin_Gestiona_CitaDeleteArgs<ExtArgs>>): Prisma__PAdmin_Gestiona_CitaClient<$Result.GetResult<Prisma.$PAdmin_Gestiona_CitaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PAdmin_Gestiona_Cita.
     * @param {PAdmin_Gestiona_CitaUpdateArgs} args - Arguments to update one PAdmin_Gestiona_Cita.
     * @example
     * // Update one PAdmin_Gestiona_Cita
     * const pAdmin_Gestiona_Cita = await prisma.pAdmin_Gestiona_Cita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PAdmin_Gestiona_CitaUpdateArgs>(args: SelectSubset<T, PAdmin_Gestiona_CitaUpdateArgs<ExtArgs>>): Prisma__PAdmin_Gestiona_CitaClient<$Result.GetResult<Prisma.$PAdmin_Gestiona_CitaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PAdmin_Gestiona_Citas.
     * @param {PAdmin_Gestiona_CitaDeleteManyArgs} args - Arguments to filter PAdmin_Gestiona_Citas to delete.
     * @example
     * // Delete a few PAdmin_Gestiona_Citas
     * const { count } = await prisma.pAdmin_Gestiona_Cita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PAdmin_Gestiona_CitaDeleteManyArgs>(args?: SelectSubset<T, PAdmin_Gestiona_CitaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PAdmin_Gestiona_Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdmin_Gestiona_CitaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PAdmin_Gestiona_Citas
     * const pAdmin_Gestiona_Cita = await prisma.pAdmin_Gestiona_Cita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PAdmin_Gestiona_CitaUpdateManyArgs>(args: SelectSubset<T, PAdmin_Gestiona_CitaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PAdmin_Gestiona_Citas and returns the data updated in the database.
     * @param {PAdmin_Gestiona_CitaUpdateManyAndReturnArgs} args - Arguments to update many PAdmin_Gestiona_Citas.
     * @example
     * // Update many PAdmin_Gestiona_Citas
     * const pAdmin_Gestiona_Cita = await prisma.pAdmin_Gestiona_Cita.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PAdmin_Gestiona_Citas and only return the `idPAdministrativo`
     * const pAdmin_Gestiona_CitaWithIdPAdministrativoOnly = await prisma.pAdmin_Gestiona_Cita.updateManyAndReturn({
     *   select: { idPAdministrativo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PAdmin_Gestiona_CitaUpdateManyAndReturnArgs>(args: SelectSubset<T, PAdmin_Gestiona_CitaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAdmin_Gestiona_CitaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PAdmin_Gestiona_Cita.
     * @param {PAdmin_Gestiona_CitaUpsertArgs} args - Arguments to update or create a PAdmin_Gestiona_Cita.
     * @example
     * // Update or create a PAdmin_Gestiona_Cita
     * const pAdmin_Gestiona_Cita = await prisma.pAdmin_Gestiona_Cita.upsert({
     *   create: {
     *     // ... data to create a PAdmin_Gestiona_Cita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PAdmin_Gestiona_Cita we want to update
     *   }
     * })
     */
    upsert<T extends PAdmin_Gestiona_CitaUpsertArgs>(args: SelectSubset<T, PAdmin_Gestiona_CitaUpsertArgs<ExtArgs>>): Prisma__PAdmin_Gestiona_CitaClient<$Result.GetResult<Prisma.$PAdmin_Gestiona_CitaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PAdmin_Gestiona_Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdmin_Gestiona_CitaCountArgs} args - Arguments to filter PAdmin_Gestiona_Citas to count.
     * @example
     * // Count the number of PAdmin_Gestiona_Citas
     * const count = await prisma.pAdmin_Gestiona_Cita.count({
     *   where: {
     *     // ... the filter for the PAdmin_Gestiona_Citas we want to count
     *   }
     * })
    **/
    count<T extends PAdmin_Gestiona_CitaCountArgs>(
      args?: Subset<T, PAdmin_Gestiona_CitaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PAdmin_Gestiona_CitaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PAdmin_Gestiona_Cita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdmin_Gestiona_CitaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PAdmin_Gestiona_CitaAggregateArgs>(args: Subset<T, PAdmin_Gestiona_CitaAggregateArgs>): Prisma.PrismaPromise<GetPAdmin_Gestiona_CitaAggregateType<T>>

    /**
     * Group by PAdmin_Gestiona_Cita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAdmin_Gestiona_CitaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PAdmin_Gestiona_CitaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PAdmin_Gestiona_CitaGroupByArgs['orderBy'] }
        : { orderBy?: PAdmin_Gestiona_CitaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PAdmin_Gestiona_CitaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPAdmin_Gestiona_CitaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PAdmin_Gestiona_Cita model
   */
  readonly fields: PAdmin_Gestiona_CitaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PAdmin_Gestiona_Cita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PAdmin_Gestiona_CitaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pAdministrativo<T extends PAdministrativoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PAdministrativoDefaultArgs<ExtArgs>>): Prisma__PAdministrativoClient<$Result.GetResult<Prisma.$PAdministrativoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cita<T extends CitaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CitaDefaultArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PAdmin_Gestiona_Cita model
   */
  interface PAdmin_Gestiona_CitaFieldRefs {
    readonly idPAdministrativo: FieldRef<"PAdmin_Gestiona_Cita", 'Int'>
    readonly idCita: FieldRef<"PAdmin_Gestiona_Cita", 'Int'>
    readonly accion: FieldRef<"PAdmin_Gestiona_Cita", 'String'>
    readonly FAccion: FieldRef<"PAdmin_Gestiona_Cita", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PAdmin_Gestiona_Cita findUnique
   */
  export type PAdmin_Gestiona_CitaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Gestiona_Cita
     */
    select?: PAdmin_Gestiona_CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Gestiona_Cita
     */
    omit?: PAdmin_Gestiona_CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Gestiona_CitaInclude<ExtArgs> | null
    /**
     * Filter, which PAdmin_Gestiona_Cita to fetch.
     */
    where: PAdmin_Gestiona_CitaWhereUniqueInput
  }

  /**
   * PAdmin_Gestiona_Cita findUniqueOrThrow
   */
  export type PAdmin_Gestiona_CitaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Gestiona_Cita
     */
    select?: PAdmin_Gestiona_CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Gestiona_Cita
     */
    omit?: PAdmin_Gestiona_CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Gestiona_CitaInclude<ExtArgs> | null
    /**
     * Filter, which PAdmin_Gestiona_Cita to fetch.
     */
    where: PAdmin_Gestiona_CitaWhereUniqueInput
  }

  /**
   * PAdmin_Gestiona_Cita findFirst
   */
  export type PAdmin_Gestiona_CitaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Gestiona_Cita
     */
    select?: PAdmin_Gestiona_CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Gestiona_Cita
     */
    omit?: PAdmin_Gestiona_CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Gestiona_CitaInclude<ExtArgs> | null
    /**
     * Filter, which PAdmin_Gestiona_Cita to fetch.
     */
    where?: PAdmin_Gestiona_CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAdmin_Gestiona_Citas to fetch.
     */
    orderBy?: PAdmin_Gestiona_CitaOrderByWithRelationInput | PAdmin_Gestiona_CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PAdmin_Gestiona_Citas.
     */
    cursor?: PAdmin_Gestiona_CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAdmin_Gestiona_Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAdmin_Gestiona_Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PAdmin_Gestiona_Citas.
     */
    distinct?: PAdmin_Gestiona_CitaScalarFieldEnum | PAdmin_Gestiona_CitaScalarFieldEnum[]
  }

  /**
   * PAdmin_Gestiona_Cita findFirstOrThrow
   */
  export type PAdmin_Gestiona_CitaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Gestiona_Cita
     */
    select?: PAdmin_Gestiona_CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Gestiona_Cita
     */
    omit?: PAdmin_Gestiona_CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Gestiona_CitaInclude<ExtArgs> | null
    /**
     * Filter, which PAdmin_Gestiona_Cita to fetch.
     */
    where?: PAdmin_Gestiona_CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAdmin_Gestiona_Citas to fetch.
     */
    orderBy?: PAdmin_Gestiona_CitaOrderByWithRelationInput | PAdmin_Gestiona_CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PAdmin_Gestiona_Citas.
     */
    cursor?: PAdmin_Gestiona_CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAdmin_Gestiona_Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAdmin_Gestiona_Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PAdmin_Gestiona_Citas.
     */
    distinct?: PAdmin_Gestiona_CitaScalarFieldEnum | PAdmin_Gestiona_CitaScalarFieldEnum[]
  }

  /**
   * PAdmin_Gestiona_Cita findMany
   */
  export type PAdmin_Gestiona_CitaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Gestiona_Cita
     */
    select?: PAdmin_Gestiona_CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Gestiona_Cita
     */
    omit?: PAdmin_Gestiona_CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Gestiona_CitaInclude<ExtArgs> | null
    /**
     * Filter, which PAdmin_Gestiona_Citas to fetch.
     */
    where?: PAdmin_Gestiona_CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAdmin_Gestiona_Citas to fetch.
     */
    orderBy?: PAdmin_Gestiona_CitaOrderByWithRelationInput | PAdmin_Gestiona_CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PAdmin_Gestiona_Citas.
     */
    cursor?: PAdmin_Gestiona_CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAdmin_Gestiona_Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAdmin_Gestiona_Citas.
     */
    skip?: number
    distinct?: PAdmin_Gestiona_CitaScalarFieldEnum | PAdmin_Gestiona_CitaScalarFieldEnum[]
  }

  /**
   * PAdmin_Gestiona_Cita create
   */
  export type PAdmin_Gestiona_CitaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Gestiona_Cita
     */
    select?: PAdmin_Gestiona_CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Gestiona_Cita
     */
    omit?: PAdmin_Gestiona_CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Gestiona_CitaInclude<ExtArgs> | null
    /**
     * The data needed to create a PAdmin_Gestiona_Cita.
     */
    data: XOR<PAdmin_Gestiona_CitaCreateInput, PAdmin_Gestiona_CitaUncheckedCreateInput>
  }

  /**
   * PAdmin_Gestiona_Cita createMany
   */
  export type PAdmin_Gestiona_CitaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PAdmin_Gestiona_Citas.
     */
    data: PAdmin_Gestiona_CitaCreateManyInput | PAdmin_Gestiona_CitaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PAdmin_Gestiona_Cita createManyAndReturn
   */
  export type PAdmin_Gestiona_CitaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Gestiona_Cita
     */
    select?: PAdmin_Gestiona_CitaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Gestiona_Cita
     */
    omit?: PAdmin_Gestiona_CitaOmit<ExtArgs> | null
    /**
     * The data used to create many PAdmin_Gestiona_Citas.
     */
    data: PAdmin_Gestiona_CitaCreateManyInput | PAdmin_Gestiona_CitaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Gestiona_CitaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PAdmin_Gestiona_Cita update
   */
  export type PAdmin_Gestiona_CitaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Gestiona_Cita
     */
    select?: PAdmin_Gestiona_CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Gestiona_Cita
     */
    omit?: PAdmin_Gestiona_CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Gestiona_CitaInclude<ExtArgs> | null
    /**
     * The data needed to update a PAdmin_Gestiona_Cita.
     */
    data: XOR<PAdmin_Gestiona_CitaUpdateInput, PAdmin_Gestiona_CitaUncheckedUpdateInput>
    /**
     * Choose, which PAdmin_Gestiona_Cita to update.
     */
    where: PAdmin_Gestiona_CitaWhereUniqueInput
  }

  /**
   * PAdmin_Gestiona_Cita updateMany
   */
  export type PAdmin_Gestiona_CitaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PAdmin_Gestiona_Citas.
     */
    data: XOR<PAdmin_Gestiona_CitaUpdateManyMutationInput, PAdmin_Gestiona_CitaUncheckedUpdateManyInput>
    /**
     * Filter which PAdmin_Gestiona_Citas to update
     */
    where?: PAdmin_Gestiona_CitaWhereInput
    /**
     * Limit how many PAdmin_Gestiona_Citas to update.
     */
    limit?: number
  }

  /**
   * PAdmin_Gestiona_Cita updateManyAndReturn
   */
  export type PAdmin_Gestiona_CitaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Gestiona_Cita
     */
    select?: PAdmin_Gestiona_CitaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Gestiona_Cita
     */
    omit?: PAdmin_Gestiona_CitaOmit<ExtArgs> | null
    /**
     * The data used to update PAdmin_Gestiona_Citas.
     */
    data: XOR<PAdmin_Gestiona_CitaUpdateManyMutationInput, PAdmin_Gestiona_CitaUncheckedUpdateManyInput>
    /**
     * Filter which PAdmin_Gestiona_Citas to update
     */
    where?: PAdmin_Gestiona_CitaWhereInput
    /**
     * Limit how many PAdmin_Gestiona_Citas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Gestiona_CitaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PAdmin_Gestiona_Cita upsert
   */
  export type PAdmin_Gestiona_CitaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Gestiona_Cita
     */
    select?: PAdmin_Gestiona_CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Gestiona_Cita
     */
    omit?: PAdmin_Gestiona_CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Gestiona_CitaInclude<ExtArgs> | null
    /**
     * The filter to search for the PAdmin_Gestiona_Cita to update in case it exists.
     */
    where: PAdmin_Gestiona_CitaWhereUniqueInput
    /**
     * In case the PAdmin_Gestiona_Cita found by the `where` argument doesn't exist, create a new PAdmin_Gestiona_Cita with this data.
     */
    create: XOR<PAdmin_Gestiona_CitaCreateInput, PAdmin_Gestiona_CitaUncheckedCreateInput>
    /**
     * In case the PAdmin_Gestiona_Cita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PAdmin_Gestiona_CitaUpdateInput, PAdmin_Gestiona_CitaUncheckedUpdateInput>
  }

  /**
   * PAdmin_Gestiona_Cita delete
   */
  export type PAdmin_Gestiona_CitaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Gestiona_Cita
     */
    select?: PAdmin_Gestiona_CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Gestiona_Cita
     */
    omit?: PAdmin_Gestiona_CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Gestiona_CitaInclude<ExtArgs> | null
    /**
     * Filter which PAdmin_Gestiona_Cita to delete.
     */
    where: PAdmin_Gestiona_CitaWhereUniqueInput
  }

  /**
   * PAdmin_Gestiona_Cita deleteMany
   */
  export type PAdmin_Gestiona_CitaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PAdmin_Gestiona_Citas to delete
     */
    where?: PAdmin_Gestiona_CitaWhereInput
    /**
     * Limit how many PAdmin_Gestiona_Citas to delete.
     */
    limit?: number
  }

  /**
   * PAdmin_Gestiona_Cita without action
   */
  export type PAdmin_Gestiona_CitaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAdmin_Gestiona_Cita
     */
    select?: PAdmin_Gestiona_CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAdmin_Gestiona_Cita
     */
    omit?: PAdmin_Gestiona_CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAdmin_Gestiona_CitaInclude<ExtArgs> | null
  }


  /**
   * Model Diagnostico
   */

  export type AggregateDiagnostico = {
    _count: DiagnosticoCountAggregateOutputType | null
    _avg: DiagnosticoAvgAggregateOutputType | null
    _sum: DiagnosticoSumAggregateOutputType | null
    _min: DiagnosticoMinAggregateOutputType | null
    _max: DiagnosticoMaxAggregateOutputType | null
  }

  export type DiagnosticoAvgAggregateOutputType = {
    idDiagnostico: number | null
  }

  export type DiagnosticoSumAggregateOutputType = {
    idDiagnostico: number | null
  }

  export type DiagnosticoMinAggregateOutputType = {
    idDiagnostico: number | null
    nombre: string | null
  }

  export type DiagnosticoMaxAggregateOutputType = {
    idDiagnostico: number | null
    nombre: string | null
  }

  export type DiagnosticoCountAggregateOutputType = {
    idDiagnostico: number
    nombre: number
    _all: number
  }


  export type DiagnosticoAvgAggregateInputType = {
    idDiagnostico?: true
  }

  export type DiagnosticoSumAggregateInputType = {
    idDiagnostico?: true
  }

  export type DiagnosticoMinAggregateInputType = {
    idDiagnostico?: true
    nombre?: true
  }

  export type DiagnosticoMaxAggregateInputType = {
    idDiagnostico?: true
    nombre?: true
  }

  export type DiagnosticoCountAggregateInputType = {
    idDiagnostico?: true
    nombre?: true
    _all?: true
  }

  export type DiagnosticoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnostico to aggregate.
     */
    where?: DiagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnosticos to fetch.
     */
    orderBy?: DiagnosticoOrderByWithRelationInput | DiagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diagnosticos
    **/
    _count?: true | DiagnosticoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiagnosticoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiagnosticoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosticoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosticoMaxAggregateInputType
  }

  export type GetDiagnosticoAggregateType<T extends DiagnosticoAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnostico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnostico[P]>
      : GetScalarType<T[P], AggregateDiagnostico[P]>
  }




  export type DiagnosticoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticoWhereInput
    orderBy?: DiagnosticoOrderByWithAggregationInput | DiagnosticoOrderByWithAggregationInput[]
    by: DiagnosticoScalarFieldEnum[] | DiagnosticoScalarFieldEnum
    having?: DiagnosticoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosticoCountAggregateInputType | true
    _avg?: DiagnosticoAvgAggregateInputType
    _sum?: DiagnosticoSumAggregateInputType
    _min?: DiagnosticoMinAggregateInputType
    _max?: DiagnosticoMaxAggregateInputType
  }

  export type DiagnosticoGroupByOutputType = {
    idDiagnostico: number
    nombre: string
    _count: DiagnosticoCountAggregateOutputType | null
    _avg: DiagnosticoAvgAggregateOutputType | null
    _sum: DiagnosticoSumAggregateOutputType | null
    _min: DiagnosticoMinAggregateOutputType | null
    _max: DiagnosticoMaxAggregateOutputType | null
  }

  type GetDiagnosticoGroupByPayload<T extends DiagnosticoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosticoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosticoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosticoGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosticoGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosticoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idDiagnostico?: boolean
    nombre?: boolean
    medicoDictaminaDiagnostico?: boolean | Diagnostico$medicoDictaminaDiagnosticoArgs<ExtArgs>
    _count?: boolean | DiagnosticoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostico"]>

  export type DiagnosticoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idDiagnostico?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["diagnostico"]>

  export type DiagnosticoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idDiagnostico?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["diagnostico"]>

  export type DiagnosticoSelectScalar = {
    idDiagnostico?: boolean
    nombre?: boolean
  }

  export type DiagnosticoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idDiagnostico" | "nombre", ExtArgs["result"]["diagnostico"]>
  export type DiagnosticoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicoDictaminaDiagnostico?: boolean | Diagnostico$medicoDictaminaDiagnosticoArgs<ExtArgs>
    _count?: boolean | DiagnosticoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiagnosticoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DiagnosticoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DiagnosticoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diagnostico"
    objects: {
      medicoDictaminaDiagnostico: Prisma.$Medico_dictamina_diagnosticoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idDiagnostico: number
      nombre: string
    }, ExtArgs["result"]["diagnostico"]>
    composites: {}
  }

  type DiagnosticoGetPayload<S extends boolean | null | undefined | DiagnosticoDefaultArgs> = $Result.GetResult<Prisma.$DiagnosticoPayload, S>

  type DiagnosticoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosticoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosticoCountAggregateInputType | true
    }

  export interface DiagnosticoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diagnostico'], meta: { name: 'Diagnostico' } }
    /**
     * Find zero or one Diagnostico that matches the filter.
     * @param {DiagnosticoFindUniqueArgs} args - Arguments to find a Diagnostico
     * @example
     * // Get one Diagnostico
     * const diagnostico = await prisma.diagnostico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosticoFindUniqueArgs>(args: SelectSubset<T, DiagnosticoFindUniqueArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diagnostico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosticoFindUniqueOrThrowArgs} args - Arguments to find a Diagnostico
     * @example
     * // Get one Diagnostico
     * const diagnostico = await prisma.diagnostico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosticoFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosticoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnostico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoFindFirstArgs} args - Arguments to find a Diagnostico
     * @example
     * // Get one Diagnostico
     * const diagnostico = await prisma.diagnostico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosticoFindFirstArgs>(args?: SelectSubset<T, DiagnosticoFindFirstArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnostico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoFindFirstOrThrowArgs} args - Arguments to find a Diagnostico
     * @example
     * // Get one Diagnostico
     * const diagnostico = await prisma.diagnostico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosticoFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosticoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diagnosticos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnosticos
     * const diagnosticos = await prisma.diagnostico.findMany()
     * 
     * // Get first 10 Diagnosticos
     * const diagnosticos = await prisma.diagnostico.findMany({ take: 10 })
     * 
     * // Only select the `idDiagnostico`
     * const diagnosticoWithIdDiagnosticoOnly = await prisma.diagnostico.findMany({ select: { idDiagnostico: true } })
     * 
     */
    findMany<T extends DiagnosticoFindManyArgs>(args?: SelectSubset<T, DiagnosticoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diagnostico.
     * @param {DiagnosticoCreateArgs} args - Arguments to create a Diagnostico.
     * @example
     * // Create one Diagnostico
     * const Diagnostico = await prisma.diagnostico.create({
     *   data: {
     *     // ... data to create a Diagnostico
     *   }
     * })
     * 
     */
    create<T extends DiagnosticoCreateArgs>(args: SelectSubset<T, DiagnosticoCreateArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diagnosticos.
     * @param {DiagnosticoCreateManyArgs} args - Arguments to create many Diagnosticos.
     * @example
     * // Create many Diagnosticos
     * const diagnostico = await prisma.diagnostico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosticoCreateManyArgs>(args?: SelectSubset<T, DiagnosticoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diagnosticos and returns the data saved in the database.
     * @param {DiagnosticoCreateManyAndReturnArgs} args - Arguments to create many Diagnosticos.
     * @example
     * // Create many Diagnosticos
     * const diagnostico = await prisma.diagnostico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diagnosticos and only return the `idDiagnostico`
     * const diagnosticoWithIdDiagnosticoOnly = await prisma.diagnostico.createManyAndReturn({
     *   select: { idDiagnostico: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiagnosticoCreateManyAndReturnArgs>(args?: SelectSubset<T, DiagnosticoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diagnostico.
     * @param {DiagnosticoDeleteArgs} args - Arguments to delete one Diagnostico.
     * @example
     * // Delete one Diagnostico
     * const Diagnostico = await prisma.diagnostico.delete({
     *   where: {
     *     // ... filter to delete one Diagnostico
     *   }
     * })
     * 
     */
    delete<T extends DiagnosticoDeleteArgs>(args: SelectSubset<T, DiagnosticoDeleteArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diagnostico.
     * @param {DiagnosticoUpdateArgs} args - Arguments to update one Diagnostico.
     * @example
     * // Update one Diagnostico
     * const diagnostico = await prisma.diagnostico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosticoUpdateArgs>(args: SelectSubset<T, DiagnosticoUpdateArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diagnosticos.
     * @param {DiagnosticoDeleteManyArgs} args - Arguments to filter Diagnosticos to delete.
     * @example
     * // Delete a few Diagnosticos
     * const { count } = await prisma.diagnostico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosticoDeleteManyArgs>(args?: SelectSubset<T, DiagnosticoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnosticos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnosticos
     * const diagnostico = await prisma.diagnostico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosticoUpdateManyArgs>(args: SelectSubset<T, DiagnosticoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnosticos and returns the data updated in the database.
     * @param {DiagnosticoUpdateManyAndReturnArgs} args - Arguments to update many Diagnosticos.
     * @example
     * // Update many Diagnosticos
     * const diagnostico = await prisma.diagnostico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diagnosticos and only return the `idDiagnostico`
     * const diagnosticoWithIdDiagnosticoOnly = await prisma.diagnostico.updateManyAndReturn({
     *   select: { idDiagnostico: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiagnosticoUpdateManyAndReturnArgs>(args: SelectSubset<T, DiagnosticoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diagnostico.
     * @param {DiagnosticoUpsertArgs} args - Arguments to update or create a Diagnostico.
     * @example
     * // Update or create a Diagnostico
     * const diagnostico = await prisma.diagnostico.upsert({
     *   create: {
     *     // ... data to create a Diagnostico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnostico we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosticoUpsertArgs>(args: SelectSubset<T, DiagnosticoUpsertArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diagnosticos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoCountArgs} args - Arguments to filter Diagnosticos to count.
     * @example
     * // Count the number of Diagnosticos
     * const count = await prisma.diagnostico.count({
     *   where: {
     *     // ... the filter for the Diagnosticos we want to count
     *   }
     * })
    **/
    count<T extends DiagnosticoCountArgs>(
      args?: Subset<T, DiagnosticoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosticoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnostico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiagnosticoAggregateArgs>(args: Subset<T, DiagnosticoAggregateArgs>): Prisma.PrismaPromise<GetDiagnosticoAggregateType<T>>

    /**
     * Group by Diagnostico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiagnosticoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosticoGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosticoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiagnosticoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosticoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diagnostico model
   */
  readonly fields: DiagnosticoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diagnostico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosticoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicoDictaminaDiagnostico<T extends Diagnostico$medicoDictaminaDiagnosticoArgs<ExtArgs> = {}>(args?: Subset<T, Diagnostico$medicoDictaminaDiagnosticoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Medico_dictamina_diagnosticoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Diagnostico model
   */
  interface DiagnosticoFieldRefs {
    readonly idDiagnostico: FieldRef<"Diagnostico", 'Int'>
    readonly nombre: FieldRef<"Diagnostico", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Diagnostico findUnique
   */
  export type DiagnosticoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostico to fetch.
     */
    where: DiagnosticoWhereUniqueInput
  }

  /**
   * Diagnostico findUniqueOrThrow
   */
  export type DiagnosticoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostico to fetch.
     */
    where: DiagnosticoWhereUniqueInput
  }

  /**
   * Diagnostico findFirst
   */
  export type DiagnosticoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostico to fetch.
     */
    where?: DiagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnosticos to fetch.
     */
    orderBy?: DiagnosticoOrderByWithRelationInput | DiagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnosticos.
     */
    cursor?: DiagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnosticos.
     */
    distinct?: DiagnosticoScalarFieldEnum | DiagnosticoScalarFieldEnum[]
  }

  /**
   * Diagnostico findFirstOrThrow
   */
  export type DiagnosticoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostico to fetch.
     */
    where?: DiagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnosticos to fetch.
     */
    orderBy?: DiagnosticoOrderByWithRelationInput | DiagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnosticos.
     */
    cursor?: DiagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnosticos.
     */
    distinct?: DiagnosticoScalarFieldEnum | DiagnosticoScalarFieldEnum[]
  }

  /**
   * Diagnostico findMany
   */
  export type DiagnosticoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Diagnosticos to fetch.
     */
    where?: DiagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnosticos to fetch.
     */
    orderBy?: DiagnosticoOrderByWithRelationInput | DiagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diagnosticos.
     */
    cursor?: DiagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnosticos.
     */
    skip?: number
    distinct?: DiagnosticoScalarFieldEnum | DiagnosticoScalarFieldEnum[]
  }

  /**
   * Diagnostico create
   */
  export type DiagnosticoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * The data needed to create a Diagnostico.
     */
    data: XOR<DiagnosticoCreateInput, DiagnosticoUncheckedCreateInput>
  }

  /**
   * Diagnostico createMany
   */
  export type DiagnosticoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diagnosticos.
     */
    data: DiagnosticoCreateManyInput | DiagnosticoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Diagnostico createManyAndReturn
   */
  export type DiagnosticoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * The data used to create many Diagnosticos.
     */
    data: DiagnosticoCreateManyInput | DiagnosticoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Diagnostico update
   */
  export type DiagnosticoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * The data needed to update a Diagnostico.
     */
    data: XOR<DiagnosticoUpdateInput, DiagnosticoUncheckedUpdateInput>
    /**
     * Choose, which Diagnostico to update.
     */
    where: DiagnosticoWhereUniqueInput
  }

  /**
   * Diagnostico updateMany
   */
  export type DiagnosticoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diagnosticos.
     */
    data: XOR<DiagnosticoUpdateManyMutationInput, DiagnosticoUncheckedUpdateManyInput>
    /**
     * Filter which Diagnosticos to update
     */
    where?: DiagnosticoWhereInput
    /**
     * Limit how many Diagnosticos to update.
     */
    limit?: number
  }

  /**
   * Diagnostico updateManyAndReturn
   */
  export type DiagnosticoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * The data used to update Diagnosticos.
     */
    data: XOR<DiagnosticoUpdateManyMutationInput, DiagnosticoUncheckedUpdateManyInput>
    /**
     * Filter which Diagnosticos to update
     */
    where?: DiagnosticoWhereInput
    /**
     * Limit how many Diagnosticos to update.
     */
    limit?: number
  }

  /**
   * Diagnostico upsert
   */
  export type DiagnosticoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * The filter to search for the Diagnostico to update in case it exists.
     */
    where: DiagnosticoWhereUniqueInput
    /**
     * In case the Diagnostico found by the `where` argument doesn't exist, create a new Diagnostico with this data.
     */
    create: XOR<DiagnosticoCreateInput, DiagnosticoUncheckedCreateInput>
    /**
     * In case the Diagnostico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosticoUpdateInput, DiagnosticoUncheckedUpdateInput>
  }

  /**
   * Diagnostico delete
   */
  export type DiagnosticoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * Filter which Diagnostico to delete.
     */
    where: DiagnosticoWhereUniqueInput
  }

  /**
   * Diagnostico deleteMany
   */
  export type DiagnosticoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnosticos to delete
     */
    where?: DiagnosticoWhereInput
    /**
     * Limit how many Diagnosticos to delete.
     */
    limit?: number
  }

  /**
   * Diagnostico.medicoDictaminaDiagnostico
   */
  export type Diagnostico$medicoDictaminaDiagnosticoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_dictamina_diagnostico
     */
    select?: Medico_dictamina_diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_dictamina_diagnostico
     */
    omit?: Medico_dictamina_diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_dictamina_diagnosticoInclude<ExtArgs> | null
    where?: Medico_dictamina_diagnosticoWhereInput
    orderBy?: Medico_dictamina_diagnosticoOrderByWithRelationInput | Medico_dictamina_diagnosticoOrderByWithRelationInput[]
    cursor?: Medico_dictamina_diagnosticoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Medico_dictamina_diagnosticoScalarFieldEnum | Medico_dictamina_diagnosticoScalarFieldEnum[]
  }

  /**
   * Diagnostico without action
   */
  export type DiagnosticoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
  }


  /**
   * Model Medico_dictamina_diagnostico
   */

  export type AggregateMedico_dictamina_diagnostico = {
    _count: Medico_dictamina_diagnosticoCountAggregateOutputType | null
    _avg: Medico_dictamina_diagnosticoAvgAggregateOutputType | null
    _sum: Medico_dictamina_diagnosticoSumAggregateOutputType | null
    _min: Medico_dictamina_diagnosticoMinAggregateOutputType | null
    _max: Medico_dictamina_diagnosticoMaxAggregateOutputType | null
  }

  export type Medico_dictamina_diagnosticoAvgAggregateOutputType = {
    idDiagnostico: number | null
    idMedico: number | null
    idCita: number | null
  }

  export type Medico_dictamina_diagnosticoSumAggregateOutputType = {
    idDiagnostico: number | null
    idMedico: number | null
    idCita: number | null
  }

  export type Medico_dictamina_diagnosticoMinAggregateOutputType = {
    idDiagnostico: number | null
    idMedico: number | null
    idCita: number | null
  }

  export type Medico_dictamina_diagnosticoMaxAggregateOutputType = {
    idDiagnostico: number | null
    idMedico: number | null
    idCita: number | null
  }

  export type Medico_dictamina_diagnosticoCountAggregateOutputType = {
    idDiagnostico: number
    idMedico: number
    idCita: number
    _all: number
  }


  export type Medico_dictamina_diagnosticoAvgAggregateInputType = {
    idDiagnostico?: true
    idMedico?: true
    idCita?: true
  }

  export type Medico_dictamina_diagnosticoSumAggregateInputType = {
    idDiagnostico?: true
    idMedico?: true
    idCita?: true
  }

  export type Medico_dictamina_diagnosticoMinAggregateInputType = {
    idDiagnostico?: true
    idMedico?: true
    idCita?: true
  }

  export type Medico_dictamina_diagnosticoMaxAggregateInputType = {
    idDiagnostico?: true
    idMedico?: true
    idCita?: true
  }

  export type Medico_dictamina_diagnosticoCountAggregateInputType = {
    idDiagnostico?: true
    idMedico?: true
    idCita?: true
    _all?: true
  }

  export type Medico_dictamina_diagnosticoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medico_dictamina_diagnostico to aggregate.
     */
    where?: Medico_dictamina_diagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medico_dictamina_diagnosticos to fetch.
     */
    orderBy?: Medico_dictamina_diagnosticoOrderByWithRelationInput | Medico_dictamina_diagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Medico_dictamina_diagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medico_dictamina_diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medico_dictamina_diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medico_dictamina_diagnosticos
    **/
    _count?: true | Medico_dictamina_diagnosticoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Medico_dictamina_diagnosticoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Medico_dictamina_diagnosticoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Medico_dictamina_diagnosticoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Medico_dictamina_diagnosticoMaxAggregateInputType
  }

  export type GetMedico_dictamina_diagnosticoAggregateType<T extends Medico_dictamina_diagnosticoAggregateArgs> = {
        [P in keyof T & keyof AggregateMedico_dictamina_diagnostico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedico_dictamina_diagnostico[P]>
      : GetScalarType<T[P], AggregateMedico_dictamina_diagnostico[P]>
  }




  export type Medico_dictamina_diagnosticoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Medico_dictamina_diagnosticoWhereInput
    orderBy?: Medico_dictamina_diagnosticoOrderByWithAggregationInput | Medico_dictamina_diagnosticoOrderByWithAggregationInput[]
    by: Medico_dictamina_diagnosticoScalarFieldEnum[] | Medico_dictamina_diagnosticoScalarFieldEnum
    having?: Medico_dictamina_diagnosticoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Medico_dictamina_diagnosticoCountAggregateInputType | true
    _avg?: Medico_dictamina_diagnosticoAvgAggregateInputType
    _sum?: Medico_dictamina_diagnosticoSumAggregateInputType
    _min?: Medico_dictamina_diagnosticoMinAggregateInputType
    _max?: Medico_dictamina_diagnosticoMaxAggregateInputType
  }

  export type Medico_dictamina_diagnosticoGroupByOutputType = {
    idDiagnostico: number
    idMedico: number
    idCita: number
    _count: Medico_dictamina_diagnosticoCountAggregateOutputType | null
    _avg: Medico_dictamina_diagnosticoAvgAggregateOutputType | null
    _sum: Medico_dictamina_diagnosticoSumAggregateOutputType | null
    _min: Medico_dictamina_diagnosticoMinAggregateOutputType | null
    _max: Medico_dictamina_diagnosticoMaxAggregateOutputType | null
  }

  type GetMedico_dictamina_diagnosticoGroupByPayload<T extends Medico_dictamina_diagnosticoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Medico_dictamina_diagnosticoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Medico_dictamina_diagnosticoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Medico_dictamina_diagnosticoGroupByOutputType[P]>
            : GetScalarType<T[P], Medico_dictamina_diagnosticoGroupByOutputType[P]>
        }
      >
    >


  export type Medico_dictamina_diagnosticoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idDiagnostico?: boolean
    idMedico?: boolean
    idCita?: boolean
    diagnostico?: boolean | DiagnosticoDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico_dictamina_diagnostico"]>

  export type Medico_dictamina_diagnosticoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idDiagnostico?: boolean
    idMedico?: boolean
    idCita?: boolean
    diagnostico?: boolean | DiagnosticoDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico_dictamina_diagnostico"]>

  export type Medico_dictamina_diagnosticoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idDiagnostico?: boolean
    idMedico?: boolean
    idCita?: boolean
    diagnostico?: boolean | DiagnosticoDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico_dictamina_diagnostico"]>

  export type Medico_dictamina_diagnosticoSelectScalar = {
    idDiagnostico?: boolean
    idMedico?: boolean
    idCita?: boolean
  }

  export type Medico_dictamina_diagnosticoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idDiagnostico" | "idMedico" | "idCita", ExtArgs["result"]["medico_dictamina_diagnostico"]>
  export type Medico_dictamina_diagnosticoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostico?: boolean | DiagnosticoDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }
  export type Medico_dictamina_diagnosticoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostico?: boolean | DiagnosticoDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }
  export type Medico_dictamina_diagnosticoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostico?: boolean | DiagnosticoDefaultArgs<ExtArgs>
    medico?: boolean | MedicoDefaultArgs<ExtArgs>
    cita?: boolean | CitaDefaultArgs<ExtArgs>
  }

  export type $Medico_dictamina_diagnosticoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medico_dictamina_diagnostico"
    objects: {
      diagnostico: Prisma.$DiagnosticoPayload<ExtArgs>
      medico: Prisma.$MedicoPayload<ExtArgs>
      cita: Prisma.$CitaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idDiagnostico: number
      idMedico: number
      idCita: number
    }, ExtArgs["result"]["medico_dictamina_diagnostico"]>
    composites: {}
  }

  type Medico_dictamina_diagnosticoGetPayload<S extends boolean | null | undefined | Medico_dictamina_diagnosticoDefaultArgs> = $Result.GetResult<Prisma.$Medico_dictamina_diagnosticoPayload, S>

  type Medico_dictamina_diagnosticoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Medico_dictamina_diagnosticoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Medico_dictamina_diagnosticoCountAggregateInputType | true
    }

  export interface Medico_dictamina_diagnosticoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medico_dictamina_diagnostico'], meta: { name: 'Medico_dictamina_diagnostico' } }
    /**
     * Find zero or one Medico_dictamina_diagnostico that matches the filter.
     * @param {Medico_dictamina_diagnosticoFindUniqueArgs} args - Arguments to find a Medico_dictamina_diagnostico
     * @example
     * // Get one Medico_dictamina_diagnostico
     * const medico_dictamina_diagnostico = await prisma.medico_dictamina_diagnostico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Medico_dictamina_diagnosticoFindUniqueArgs>(args: SelectSubset<T, Medico_dictamina_diagnosticoFindUniqueArgs<ExtArgs>>): Prisma__Medico_dictamina_diagnosticoClient<$Result.GetResult<Prisma.$Medico_dictamina_diagnosticoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medico_dictamina_diagnostico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Medico_dictamina_diagnosticoFindUniqueOrThrowArgs} args - Arguments to find a Medico_dictamina_diagnostico
     * @example
     * // Get one Medico_dictamina_diagnostico
     * const medico_dictamina_diagnostico = await prisma.medico_dictamina_diagnostico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Medico_dictamina_diagnosticoFindUniqueOrThrowArgs>(args: SelectSubset<T, Medico_dictamina_diagnosticoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Medico_dictamina_diagnosticoClient<$Result.GetResult<Prisma.$Medico_dictamina_diagnosticoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medico_dictamina_diagnostico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_dictamina_diagnosticoFindFirstArgs} args - Arguments to find a Medico_dictamina_diagnostico
     * @example
     * // Get one Medico_dictamina_diagnostico
     * const medico_dictamina_diagnostico = await prisma.medico_dictamina_diagnostico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Medico_dictamina_diagnosticoFindFirstArgs>(args?: SelectSubset<T, Medico_dictamina_diagnosticoFindFirstArgs<ExtArgs>>): Prisma__Medico_dictamina_diagnosticoClient<$Result.GetResult<Prisma.$Medico_dictamina_diagnosticoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medico_dictamina_diagnostico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_dictamina_diagnosticoFindFirstOrThrowArgs} args - Arguments to find a Medico_dictamina_diagnostico
     * @example
     * // Get one Medico_dictamina_diagnostico
     * const medico_dictamina_diagnostico = await prisma.medico_dictamina_diagnostico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Medico_dictamina_diagnosticoFindFirstOrThrowArgs>(args?: SelectSubset<T, Medico_dictamina_diagnosticoFindFirstOrThrowArgs<ExtArgs>>): Prisma__Medico_dictamina_diagnosticoClient<$Result.GetResult<Prisma.$Medico_dictamina_diagnosticoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medico_dictamina_diagnosticos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_dictamina_diagnosticoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medico_dictamina_diagnosticos
     * const medico_dictamina_diagnosticos = await prisma.medico_dictamina_diagnostico.findMany()
     * 
     * // Get first 10 Medico_dictamina_diagnosticos
     * const medico_dictamina_diagnosticos = await prisma.medico_dictamina_diagnostico.findMany({ take: 10 })
     * 
     * // Only select the `idDiagnostico`
     * const medico_dictamina_diagnosticoWithIdDiagnosticoOnly = await prisma.medico_dictamina_diagnostico.findMany({ select: { idDiagnostico: true } })
     * 
     */
    findMany<T extends Medico_dictamina_diagnosticoFindManyArgs>(args?: SelectSubset<T, Medico_dictamina_diagnosticoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Medico_dictamina_diagnosticoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medico_dictamina_diagnostico.
     * @param {Medico_dictamina_diagnosticoCreateArgs} args - Arguments to create a Medico_dictamina_diagnostico.
     * @example
     * // Create one Medico_dictamina_diagnostico
     * const Medico_dictamina_diagnostico = await prisma.medico_dictamina_diagnostico.create({
     *   data: {
     *     // ... data to create a Medico_dictamina_diagnostico
     *   }
     * })
     * 
     */
    create<T extends Medico_dictamina_diagnosticoCreateArgs>(args: SelectSubset<T, Medico_dictamina_diagnosticoCreateArgs<ExtArgs>>): Prisma__Medico_dictamina_diagnosticoClient<$Result.GetResult<Prisma.$Medico_dictamina_diagnosticoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medico_dictamina_diagnosticos.
     * @param {Medico_dictamina_diagnosticoCreateManyArgs} args - Arguments to create many Medico_dictamina_diagnosticos.
     * @example
     * // Create many Medico_dictamina_diagnosticos
     * const medico_dictamina_diagnostico = await prisma.medico_dictamina_diagnostico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Medico_dictamina_diagnosticoCreateManyArgs>(args?: SelectSubset<T, Medico_dictamina_diagnosticoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medico_dictamina_diagnosticos and returns the data saved in the database.
     * @param {Medico_dictamina_diagnosticoCreateManyAndReturnArgs} args - Arguments to create many Medico_dictamina_diagnosticos.
     * @example
     * // Create many Medico_dictamina_diagnosticos
     * const medico_dictamina_diagnostico = await prisma.medico_dictamina_diagnostico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medico_dictamina_diagnosticos and only return the `idDiagnostico`
     * const medico_dictamina_diagnosticoWithIdDiagnosticoOnly = await prisma.medico_dictamina_diagnostico.createManyAndReturn({
     *   select: { idDiagnostico: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Medico_dictamina_diagnosticoCreateManyAndReturnArgs>(args?: SelectSubset<T, Medico_dictamina_diagnosticoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Medico_dictamina_diagnosticoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medico_dictamina_diagnostico.
     * @param {Medico_dictamina_diagnosticoDeleteArgs} args - Arguments to delete one Medico_dictamina_diagnostico.
     * @example
     * // Delete one Medico_dictamina_diagnostico
     * const Medico_dictamina_diagnostico = await prisma.medico_dictamina_diagnostico.delete({
     *   where: {
     *     // ... filter to delete one Medico_dictamina_diagnostico
     *   }
     * })
     * 
     */
    delete<T extends Medico_dictamina_diagnosticoDeleteArgs>(args: SelectSubset<T, Medico_dictamina_diagnosticoDeleteArgs<ExtArgs>>): Prisma__Medico_dictamina_diagnosticoClient<$Result.GetResult<Prisma.$Medico_dictamina_diagnosticoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medico_dictamina_diagnostico.
     * @param {Medico_dictamina_diagnosticoUpdateArgs} args - Arguments to update one Medico_dictamina_diagnostico.
     * @example
     * // Update one Medico_dictamina_diagnostico
     * const medico_dictamina_diagnostico = await prisma.medico_dictamina_diagnostico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Medico_dictamina_diagnosticoUpdateArgs>(args: SelectSubset<T, Medico_dictamina_diagnosticoUpdateArgs<ExtArgs>>): Prisma__Medico_dictamina_diagnosticoClient<$Result.GetResult<Prisma.$Medico_dictamina_diagnosticoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medico_dictamina_diagnosticos.
     * @param {Medico_dictamina_diagnosticoDeleteManyArgs} args - Arguments to filter Medico_dictamina_diagnosticos to delete.
     * @example
     * // Delete a few Medico_dictamina_diagnosticos
     * const { count } = await prisma.medico_dictamina_diagnostico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Medico_dictamina_diagnosticoDeleteManyArgs>(args?: SelectSubset<T, Medico_dictamina_diagnosticoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medico_dictamina_diagnosticos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_dictamina_diagnosticoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medico_dictamina_diagnosticos
     * const medico_dictamina_diagnostico = await prisma.medico_dictamina_diagnostico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Medico_dictamina_diagnosticoUpdateManyArgs>(args: SelectSubset<T, Medico_dictamina_diagnosticoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medico_dictamina_diagnosticos and returns the data updated in the database.
     * @param {Medico_dictamina_diagnosticoUpdateManyAndReturnArgs} args - Arguments to update many Medico_dictamina_diagnosticos.
     * @example
     * // Update many Medico_dictamina_diagnosticos
     * const medico_dictamina_diagnostico = await prisma.medico_dictamina_diagnostico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medico_dictamina_diagnosticos and only return the `idDiagnostico`
     * const medico_dictamina_diagnosticoWithIdDiagnosticoOnly = await prisma.medico_dictamina_diagnostico.updateManyAndReturn({
     *   select: { idDiagnostico: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Medico_dictamina_diagnosticoUpdateManyAndReturnArgs>(args: SelectSubset<T, Medico_dictamina_diagnosticoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Medico_dictamina_diagnosticoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medico_dictamina_diagnostico.
     * @param {Medico_dictamina_diagnosticoUpsertArgs} args - Arguments to update or create a Medico_dictamina_diagnostico.
     * @example
     * // Update or create a Medico_dictamina_diagnostico
     * const medico_dictamina_diagnostico = await prisma.medico_dictamina_diagnostico.upsert({
     *   create: {
     *     // ... data to create a Medico_dictamina_diagnostico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medico_dictamina_diagnostico we want to update
     *   }
     * })
     */
    upsert<T extends Medico_dictamina_diagnosticoUpsertArgs>(args: SelectSubset<T, Medico_dictamina_diagnosticoUpsertArgs<ExtArgs>>): Prisma__Medico_dictamina_diagnosticoClient<$Result.GetResult<Prisma.$Medico_dictamina_diagnosticoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medico_dictamina_diagnosticos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_dictamina_diagnosticoCountArgs} args - Arguments to filter Medico_dictamina_diagnosticos to count.
     * @example
     * // Count the number of Medico_dictamina_diagnosticos
     * const count = await prisma.medico_dictamina_diagnostico.count({
     *   where: {
     *     // ... the filter for the Medico_dictamina_diagnosticos we want to count
     *   }
     * })
    **/
    count<T extends Medico_dictamina_diagnosticoCountArgs>(
      args?: Subset<T, Medico_dictamina_diagnosticoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Medico_dictamina_diagnosticoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medico_dictamina_diagnostico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_dictamina_diagnosticoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Medico_dictamina_diagnosticoAggregateArgs>(args: Subset<T, Medico_dictamina_diagnosticoAggregateArgs>): Prisma.PrismaPromise<GetMedico_dictamina_diagnosticoAggregateType<T>>

    /**
     * Group by Medico_dictamina_diagnostico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medico_dictamina_diagnosticoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Medico_dictamina_diagnosticoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Medico_dictamina_diagnosticoGroupByArgs['orderBy'] }
        : { orderBy?: Medico_dictamina_diagnosticoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Medico_dictamina_diagnosticoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedico_dictamina_diagnosticoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medico_dictamina_diagnostico model
   */
  readonly fields: Medico_dictamina_diagnosticoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medico_dictamina_diagnostico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Medico_dictamina_diagnosticoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnostico<T extends DiagnosticoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiagnosticoDefaultArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medico<T extends MedicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicoDefaultArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cita<T extends CitaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CitaDefaultArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medico_dictamina_diagnostico model
   */
  interface Medico_dictamina_diagnosticoFieldRefs {
    readonly idDiagnostico: FieldRef<"Medico_dictamina_diagnostico", 'Int'>
    readonly idMedico: FieldRef<"Medico_dictamina_diagnostico", 'Int'>
    readonly idCita: FieldRef<"Medico_dictamina_diagnostico", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Medico_dictamina_diagnostico findUnique
   */
  export type Medico_dictamina_diagnosticoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_dictamina_diagnostico
     */
    select?: Medico_dictamina_diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_dictamina_diagnostico
     */
    omit?: Medico_dictamina_diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_dictamina_diagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Medico_dictamina_diagnostico to fetch.
     */
    where: Medico_dictamina_diagnosticoWhereUniqueInput
  }

  /**
   * Medico_dictamina_diagnostico findUniqueOrThrow
   */
  export type Medico_dictamina_diagnosticoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_dictamina_diagnostico
     */
    select?: Medico_dictamina_diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_dictamina_diagnostico
     */
    omit?: Medico_dictamina_diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_dictamina_diagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Medico_dictamina_diagnostico to fetch.
     */
    where: Medico_dictamina_diagnosticoWhereUniqueInput
  }

  /**
   * Medico_dictamina_diagnostico findFirst
   */
  export type Medico_dictamina_diagnosticoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_dictamina_diagnostico
     */
    select?: Medico_dictamina_diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_dictamina_diagnostico
     */
    omit?: Medico_dictamina_diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_dictamina_diagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Medico_dictamina_diagnostico to fetch.
     */
    where?: Medico_dictamina_diagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medico_dictamina_diagnosticos to fetch.
     */
    orderBy?: Medico_dictamina_diagnosticoOrderByWithRelationInput | Medico_dictamina_diagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medico_dictamina_diagnosticos.
     */
    cursor?: Medico_dictamina_diagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medico_dictamina_diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medico_dictamina_diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medico_dictamina_diagnosticos.
     */
    distinct?: Medico_dictamina_diagnosticoScalarFieldEnum | Medico_dictamina_diagnosticoScalarFieldEnum[]
  }

  /**
   * Medico_dictamina_diagnostico findFirstOrThrow
   */
  export type Medico_dictamina_diagnosticoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_dictamina_diagnostico
     */
    select?: Medico_dictamina_diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_dictamina_diagnostico
     */
    omit?: Medico_dictamina_diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_dictamina_diagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Medico_dictamina_diagnostico to fetch.
     */
    where?: Medico_dictamina_diagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medico_dictamina_diagnosticos to fetch.
     */
    orderBy?: Medico_dictamina_diagnosticoOrderByWithRelationInput | Medico_dictamina_diagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medico_dictamina_diagnosticos.
     */
    cursor?: Medico_dictamina_diagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medico_dictamina_diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medico_dictamina_diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medico_dictamina_diagnosticos.
     */
    distinct?: Medico_dictamina_diagnosticoScalarFieldEnum | Medico_dictamina_diagnosticoScalarFieldEnum[]
  }

  /**
   * Medico_dictamina_diagnostico findMany
   */
  export type Medico_dictamina_diagnosticoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_dictamina_diagnostico
     */
    select?: Medico_dictamina_diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_dictamina_diagnostico
     */
    omit?: Medico_dictamina_diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_dictamina_diagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Medico_dictamina_diagnosticos to fetch.
     */
    where?: Medico_dictamina_diagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medico_dictamina_diagnosticos to fetch.
     */
    orderBy?: Medico_dictamina_diagnosticoOrderByWithRelationInput | Medico_dictamina_diagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medico_dictamina_diagnosticos.
     */
    cursor?: Medico_dictamina_diagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medico_dictamina_diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medico_dictamina_diagnosticos.
     */
    skip?: number
    distinct?: Medico_dictamina_diagnosticoScalarFieldEnum | Medico_dictamina_diagnosticoScalarFieldEnum[]
  }

  /**
   * Medico_dictamina_diagnostico create
   */
  export type Medico_dictamina_diagnosticoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_dictamina_diagnostico
     */
    select?: Medico_dictamina_diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_dictamina_diagnostico
     */
    omit?: Medico_dictamina_diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_dictamina_diagnosticoInclude<ExtArgs> | null
    /**
     * The data needed to create a Medico_dictamina_diagnostico.
     */
    data: XOR<Medico_dictamina_diagnosticoCreateInput, Medico_dictamina_diagnosticoUncheckedCreateInput>
  }

  /**
   * Medico_dictamina_diagnostico createMany
   */
  export type Medico_dictamina_diagnosticoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medico_dictamina_diagnosticos.
     */
    data: Medico_dictamina_diagnosticoCreateManyInput | Medico_dictamina_diagnosticoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medico_dictamina_diagnostico createManyAndReturn
   */
  export type Medico_dictamina_diagnosticoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_dictamina_diagnostico
     */
    select?: Medico_dictamina_diagnosticoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_dictamina_diagnostico
     */
    omit?: Medico_dictamina_diagnosticoOmit<ExtArgs> | null
    /**
     * The data used to create many Medico_dictamina_diagnosticos.
     */
    data: Medico_dictamina_diagnosticoCreateManyInput | Medico_dictamina_diagnosticoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_dictamina_diagnosticoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medico_dictamina_diagnostico update
   */
  export type Medico_dictamina_diagnosticoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_dictamina_diagnostico
     */
    select?: Medico_dictamina_diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_dictamina_diagnostico
     */
    omit?: Medico_dictamina_diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_dictamina_diagnosticoInclude<ExtArgs> | null
    /**
     * The data needed to update a Medico_dictamina_diagnostico.
     */
    data: XOR<Medico_dictamina_diagnosticoUpdateInput, Medico_dictamina_diagnosticoUncheckedUpdateInput>
    /**
     * Choose, which Medico_dictamina_diagnostico to update.
     */
    where: Medico_dictamina_diagnosticoWhereUniqueInput
  }

  /**
   * Medico_dictamina_diagnostico updateMany
   */
  export type Medico_dictamina_diagnosticoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medico_dictamina_diagnosticos.
     */
    data: XOR<Medico_dictamina_diagnosticoUpdateManyMutationInput, Medico_dictamina_diagnosticoUncheckedUpdateManyInput>
    /**
     * Filter which Medico_dictamina_diagnosticos to update
     */
    where?: Medico_dictamina_diagnosticoWhereInput
    /**
     * Limit how many Medico_dictamina_diagnosticos to update.
     */
    limit?: number
  }

  /**
   * Medico_dictamina_diagnostico updateManyAndReturn
   */
  export type Medico_dictamina_diagnosticoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_dictamina_diagnostico
     */
    select?: Medico_dictamina_diagnosticoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_dictamina_diagnostico
     */
    omit?: Medico_dictamina_diagnosticoOmit<ExtArgs> | null
    /**
     * The data used to update Medico_dictamina_diagnosticos.
     */
    data: XOR<Medico_dictamina_diagnosticoUpdateManyMutationInput, Medico_dictamina_diagnosticoUncheckedUpdateManyInput>
    /**
     * Filter which Medico_dictamina_diagnosticos to update
     */
    where?: Medico_dictamina_diagnosticoWhereInput
    /**
     * Limit how many Medico_dictamina_diagnosticos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_dictamina_diagnosticoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medico_dictamina_diagnostico upsert
   */
  export type Medico_dictamina_diagnosticoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_dictamina_diagnostico
     */
    select?: Medico_dictamina_diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_dictamina_diagnostico
     */
    omit?: Medico_dictamina_diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_dictamina_diagnosticoInclude<ExtArgs> | null
    /**
     * The filter to search for the Medico_dictamina_diagnostico to update in case it exists.
     */
    where: Medico_dictamina_diagnosticoWhereUniqueInput
    /**
     * In case the Medico_dictamina_diagnostico found by the `where` argument doesn't exist, create a new Medico_dictamina_diagnostico with this data.
     */
    create: XOR<Medico_dictamina_diagnosticoCreateInput, Medico_dictamina_diagnosticoUncheckedCreateInput>
    /**
     * In case the Medico_dictamina_diagnostico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Medico_dictamina_diagnosticoUpdateInput, Medico_dictamina_diagnosticoUncheckedUpdateInput>
  }

  /**
   * Medico_dictamina_diagnostico delete
   */
  export type Medico_dictamina_diagnosticoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_dictamina_diagnostico
     */
    select?: Medico_dictamina_diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_dictamina_diagnostico
     */
    omit?: Medico_dictamina_diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_dictamina_diagnosticoInclude<ExtArgs> | null
    /**
     * Filter which Medico_dictamina_diagnostico to delete.
     */
    where: Medico_dictamina_diagnosticoWhereUniqueInput
  }

  /**
   * Medico_dictamina_diagnostico deleteMany
   */
  export type Medico_dictamina_diagnosticoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medico_dictamina_diagnosticos to delete
     */
    where?: Medico_dictamina_diagnosticoWhereInput
    /**
     * Limit how many Medico_dictamina_diagnosticos to delete.
     */
    limit?: number
  }

  /**
   * Medico_dictamina_diagnostico without action
   */
  export type Medico_dictamina_diagnosticoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico_dictamina_diagnostico
     */
    select?: Medico_dictamina_diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medico_dictamina_diagnostico
     */
    omit?: Medico_dictamina_diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Medico_dictamina_diagnosticoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EquipamientoScalarFieldEnum: {
    idEquipamiento: 'idEquipamiento',
    idDepartamento: 'idDepartamento',
    nombre: 'nombre',
    estado: 'estado',
    FContratacion: 'FContratacion'
  };

  export type EquipamientoScalarFieldEnum = (typeof EquipamientoScalarFieldEnum)[keyof typeof EquipamientoScalarFieldEnum]


  export const EmpleadoScalarFieldEnum: {
    idEmpleado: 'idEmpleado',
    idUsuario: 'idUsuario',
    idDepartamento: 'idDepartamento',
    FContratacion: 'FContratacion',
    estado: 'estado'
  };

  export type EmpleadoScalarFieldEnum = (typeof EmpleadoScalarFieldEnum)[keyof typeof EmpleadoScalarFieldEnum]


  export const PAdministrativoScalarFieldEnum: {
    idPAdministrativo: 'idPAdministrativo',
    idEmpleado: 'idEmpleado',
    sueldo: 'sueldo'
  };

  export type PAdministrativoScalarFieldEnum = (typeof PAdministrativoScalarFieldEnum)[keyof typeof PAdministrativoScalarFieldEnum]


  export const MedicoScalarFieldEnum: {
    idMedico: 'idMedico',
    idEmpleado: 'idEmpleado',
    sueldo: 'sueldo'
  };

  export type MedicoScalarFieldEnum = (typeof MedicoScalarFieldEnum)[keyof typeof MedicoScalarFieldEnum]


  export const Medico_EquipoScalarFieldEnum: {
    idMedico: 'idMedico',
    idEquipamiento: 'idEquipamiento',
    FPrestamo: 'FPrestamo',
    FDevolucion: 'FDevolucion'
  };

  export type Medico_EquipoScalarFieldEnum = (typeof Medico_EquipoScalarFieldEnum)[keyof typeof Medico_EquipoScalarFieldEnum]


  export const CitaScalarFieldEnum: {
    idCita: 'idCita',
    idPaciente: 'idPaciente',
    idMedico: 'idMedico',
    fechaYHora: 'fechaYHora',
    estado: 'estado',
    resumen: 'resumen'
  };

  export type CitaScalarFieldEnum = (typeof CitaScalarFieldEnum)[keyof typeof CitaScalarFieldEnum]


  export const PAdmin_Modifica_PacienteScalarFieldEnum: {
    idPAdministrativo: 'idPAdministrativo',
    idPaciente: 'idPaciente',
    FModificacion: 'FModificacion',
    descripcion: 'descripcion'
  };

  export type PAdmin_Modifica_PacienteScalarFieldEnum = (typeof PAdmin_Modifica_PacienteScalarFieldEnum)[keyof typeof PAdmin_Modifica_PacienteScalarFieldEnum]


  export const Actualizaciones_HistoriaClinicaScalarFieldEnum: {
    idMedico: 'idMedico',
    idCita: 'idCita',
    idHistoriaClinica: 'idHistoriaClinica',
    FActualizacion: 'FActualizacion'
  };

  export type Actualizaciones_HistoriaClinicaScalarFieldEnum = (typeof Actualizaciones_HistoriaClinicaScalarFieldEnum)[keyof typeof Actualizaciones_HistoriaClinicaScalarFieldEnum]


  export const Medico_Preescribe_MedicamentoScalarFieldEnum: {
    idMedico: 'idMedico',
    idCita: 'idCita',
    idMedicamento: 'idMedicamento',
    idPaciente: 'idPaciente',
    posologia: 'posologia',
    particular: 'particular'
  };

  export type Medico_Preescribe_MedicamentoScalarFieldEnum = (typeof Medico_Preescribe_MedicamentoScalarFieldEnum)[keyof typeof Medico_Preescribe_MedicamentoScalarFieldEnum]


  export const Registro_Consulta_MedicamentoScalarFieldEnum: {
    idMedico: 'idMedico',
    idMedicamento: 'idMedicamento',
    FConsulta: 'FConsulta'
  };

  export type Registro_Consulta_MedicamentoScalarFieldEnum = (typeof Registro_Consulta_MedicamentoScalarFieldEnum)[keyof typeof Registro_Consulta_MedicamentoScalarFieldEnum]


  export const PAdmin_Gestiona_CitaScalarFieldEnum: {
    idPAdministrativo: 'idPAdministrativo',
    idCita: 'idCita',
    accion: 'accion',
    FAccion: 'FAccion'
  };

  export type PAdmin_Gestiona_CitaScalarFieldEnum = (typeof PAdmin_Gestiona_CitaScalarFieldEnum)[keyof typeof PAdmin_Gestiona_CitaScalarFieldEnum]


  export const DiagnosticoScalarFieldEnum: {
    idDiagnostico: 'idDiagnostico',
    nombre: 'nombre'
  };

  export type DiagnosticoScalarFieldEnum = (typeof DiagnosticoScalarFieldEnum)[keyof typeof DiagnosticoScalarFieldEnum]


  export const Medico_dictamina_diagnosticoScalarFieldEnum: {
    idDiagnostico: 'idDiagnostico',
    idMedico: 'idMedico',
    idCita: 'idCita'
  };

  export type Medico_dictamina_diagnosticoScalarFieldEnum = (typeof Medico_dictamina_diagnosticoScalarFieldEnum)[keyof typeof Medico_dictamina_diagnosticoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EquipamientoWhereInput = {
    AND?: EquipamientoWhereInput | EquipamientoWhereInput[]
    OR?: EquipamientoWhereInput[]
    NOT?: EquipamientoWhereInput | EquipamientoWhereInput[]
    idEquipamiento?: IntFilter<"Equipamiento"> | number
    idDepartamento?: IntFilter<"Equipamiento"> | number
    nombre?: StringFilter<"Equipamiento"> | string
    estado?: StringFilter<"Equipamiento"> | string
    FContratacion?: DateTimeFilter<"Equipamiento"> | Date | string
    medicoEquipo?: Medico_EquipoListRelationFilter
  }

  export type EquipamientoOrderByWithRelationInput = {
    idEquipamiento?: SortOrder
    idDepartamento?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
    FContratacion?: SortOrder
    medicoEquipo?: Medico_EquipoOrderByRelationAggregateInput
  }

  export type EquipamientoWhereUniqueInput = Prisma.AtLeast<{
    idEquipamiento?: number
    AND?: EquipamientoWhereInput | EquipamientoWhereInput[]
    OR?: EquipamientoWhereInput[]
    NOT?: EquipamientoWhereInput | EquipamientoWhereInput[]
    idDepartamento?: IntFilter<"Equipamiento"> | number
    nombre?: StringFilter<"Equipamiento"> | string
    estado?: StringFilter<"Equipamiento"> | string
    FContratacion?: DateTimeFilter<"Equipamiento"> | Date | string
    medicoEquipo?: Medico_EquipoListRelationFilter
  }, "idEquipamiento">

  export type EquipamientoOrderByWithAggregationInput = {
    idEquipamiento?: SortOrder
    idDepartamento?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
    FContratacion?: SortOrder
    _count?: EquipamientoCountOrderByAggregateInput
    _avg?: EquipamientoAvgOrderByAggregateInput
    _max?: EquipamientoMaxOrderByAggregateInput
    _min?: EquipamientoMinOrderByAggregateInput
    _sum?: EquipamientoSumOrderByAggregateInput
  }

  export type EquipamientoScalarWhereWithAggregatesInput = {
    AND?: EquipamientoScalarWhereWithAggregatesInput | EquipamientoScalarWhereWithAggregatesInput[]
    OR?: EquipamientoScalarWhereWithAggregatesInput[]
    NOT?: EquipamientoScalarWhereWithAggregatesInput | EquipamientoScalarWhereWithAggregatesInput[]
    idEquipamiento?: IntWithAggregatesFilter<"Equipamiento"> | number
    idDepartamento?: IntWithAggregatesFilter<"Equipamiento"> | number
    nombre?: StringWithAggregatesFilter<"Equipamiento"> | string
    estado?: StringWithAggregatesFilter<"Equipamiento"> | string
    FContratacion?: DateTimeWithAggregatesFilter<"Equipamiento"> | Date | string
  }

  export type EmpleadoWhereInput = {
    AND?: EmpleadoWhereInput | EmpleadoWhereInput[]
    OR?: EmpleadoWhereInput[]
    NOT?: EmpleadoWhereInput | EmpleadoWhereInput[]
    idEmpleado?: IntFilter<"Empleado"> | number
    idUsuario?: BigIntFilter<"Empleado"> | bigint | number
    idDepartamento?: IntFilter<"Empleado"> | number
    FContratacion?: DateTimeFilter<"Empleado"> | Date | string
    estado?: StringFilter<"Empleado"> | string
    pAdministrativo?: PAdministrativoListRelationFilter
    medico?: MedicoListRelationFilter
  }

  export type EmpleadoOrderByWithRelationInput = {
    idEmpleado?: SortOrder
    idUsuario?: SortOrder
    idDepartamento?: SortOrder
    FContratacion?: SortOrder
    estado?: SortOrder
    pAdministrativo?: PAdministrativoOrderByRelationAggregateInput
    medico?: MedicoOrderByRelationAggregateInput
  }

  export type EmpleadoWhereUniqueInput = Prisma.AtLeast<{
    idEmpleado?: number
    AND?: EmpleadoWhereInput | EmpleadoWhereInput[]
    OR?: EmpleadoWhereInput[]
    NOT?: EmpleadoWhereInput | EmpleadoWhereInput[]
    idUsuario?: BigIntFilter<"Empleado"> | bigint | number
    idDepartamento?: IntFilter<"Empleado"> | number
    FContratacion?: DateTimeFilter<"Empleado"> | Date | string
    estado?: StringFilter<"Empleado"> | string
    pAdministrativo?: PAdministrativoListRelationFilter
    medico?: MedicoListRelationFilter
  }, "idEmpleado">

  export type EmpleadoOrderByWithAggregationInput = {
    idEmpleado?: SortOrder
    idUsuario?: SortOrder
    idDepartamento?: SortOrder
    FContratacion?: SortOrder
    estado?: SortOrder
    _count?: EmpleadoCountOrderByAggregateInput
    _avg?: EmpleadoAvgOrderByAggregateInput
    _max?: EmpleadoMaxOrderByAggregateInput
    _min?: EmpleadoMinOrderByAggregateInput
    _sum?: EmpleadoSumOrderByAggregateInput
  }

  export type EmpleadoScalarWhereWithAggregatesInput = {
    AND?: EmpleadoScalarWhereWithAggregatesInput | EmpleadoScalarWhereWithAggregatesInput[]
    OR?: EmpleadoScalarWhereWithAggregatesInput[]
    NOT?: EmpleadoScalarWhereWithAggregatesInput | EmpleadoScalarWhereWithAggregatesInput[]
    idEmpleado?: IntWithAggregatesFilter<"Empleado"> | number
    idUsuario?: BigIntWithAggregatesFilter<"Empleado"> | bigint | number
    idDepartamento?: IntWithAggregatesFilter<"Empleado"> | number
    FContratacion?: DateTimeWithAggregatesFilter<"Empleado"> | Date | string
    estado?: StringWithAggregatesFilter<"Empleado"> | string
  }

  export type PAdministrativoWhereInput = {
    AND?: PAdministrativoWhereInput | PAdministrativoWhereInput[]
    OR?: PAdministrativoWhereInput[]
    NOT?: PAdministrativoWhereInput | PAdministrativoWhereInput[]
    idPAdministrativo?: IntFilter<"PAdministrativo"> | number
    idEmpleado?: IntFilter<"PAdministrativo"> | number
    sueldo?: BigIntFilter<"PAdministrativo"> | bigint | number
    empleado?: XOR<EmpleadoScalarRelationFilter, EmpleadoWhereInput>
    PAdmin_Modifica_Paciente?: PAdmin_Modifica_PacienteListRelationFilter
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaListRelationFilter
  }

  export type PAdministrativoOrderByWithRelationInput = {
    idPAdministrativo?: SortOrder
    idEmpleado?: SortOrder
    sueldo?: SortOrder
    empleado?: EmpleadoOrderByWithRelationInput
    PAdmin_Modifica_Paciente?: PAdmin_Modifica_PacienteOrderByRelationAggregateInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaOrderByRelationAggregateInput
  }

  export type PAdministrativoWhereUniqueInput = Prisma.AtLeast<{
    idPAdministrativo?: number
    AND?: PAdministrativoWhereInput | PAdministrativoWhereInput[]
    OR?: PAdministrativoWhereInput[]
    NOT?: PAdministrativoWhereInput | PAdministrativoWhereInput[]
    idEmpleado?: IntFilter<"PAdministrativo"> | number
    sueldo?: BigIntFilter<"PAdministrativo"> | bigint | number
    empleado?: XOR<EmpleadoScalarRelationFilter, EmpleadoWhereInput>
    PAdmin_Modifica_Paciente?: PAdmin_Modifica_PacienteListRelationFilter
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaListRelationFilter
  }, "idPAdministrativo">

  export type PAdministrativoOrderByWithAggregationInput = {
    idPAdministrativo?: SortOrder
    idEmpleado?: SortOrder
    sueldo?: SortOrder
    _count?: PAdministrativoCountOrderByAggregateInput
    _avg?: PAdministrativoAvgOrderByAggregateInput
    _max?: PAdministrativoMaxOrderByAggregateInput
    _min?: PAdministrativoMinOrderByAggregateInput
    _sum?: PAdministrativoSumOrderByAggregateInput
  }

  export type PAdministrativoScalarWhereWithAggregatesInput = {
    AND?: PAdministrativoScalarWhereWithAggregatesInput | PAdministrativoScalarWhereWithAggregatesInput[]
    OR?: PAdministrativoScalarWhereWithAggregatesInput[]
    NOT?: PAdministrativoScalarWhereWithAggregatesInput | PAdministrativoScalarWhereWithAggregatesInput[]
    idPAdministrativo?: IntWithAggregatesFilter<"PAdministrativo"> | number
    idEmpleado?: IntWithAggregatesFilter<"PAdministrativo"> | number
    sueldo?: BigIntWithAggregatesFilter<"PAdministrativo"> | bigint | number
  }

  export type MedicoWhereInput = {
    AND?: MedicoWhereInput | MedicoWhereInput[]
    OR?: MedicoWhereInput[]
    NOT?: MedicoWhereInput | MedicoWhereInput[]
    idMedico?: IntFilter<"Medico"> | number
    idEmpleado?: IntFilter<"Medico"> | number
    sueldo?: BigIntFilter<"Medico"> | bigint | number
    empleado?: XOR<EmpleadoScalarRelationFilter, EmpleadoWhereInput>
    medicoEquipo?: Medico_EquipoListRelationFilter
    Cita?: CitaListRelationFilter
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaListRelationFilter
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoListRelationFilter
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoListRelationFilter
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoListRelationFilter
  }

  export type MedicoOrderByWithRelationInput = {
    idMedico?: SortOrder
    idEmpleado?: SortOrder
    sueldo?: SortOrder
    empleado?: EmpleadoOrderByWithRelationInput
    medicoEquipo?: Medico_EquipoOrderByRelationAggregateInput
    Cita?: CitaOrderByRelationAggregateInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaOrderByRelationAggregateInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoOrderByRelationAggregateInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoOrderByRelationAggregateInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoOrderByRelationAggregateInput
  }

  export type MedicoWhereUniqueInput = Prisma.AtLeast<{
    idMedico?: number
    AND?: MedicoWhereInput | MedicoWhereInput[]
    OR?: MedicoWhereInput[]
    NOT?: MedicoWhereInput | MedicoWhereInput[]
    idEmpleado?: IntFilter<"Medico"> | number
    sueldo?: BigIntFilter<"Medico"> | bigint | number
    empleado?: XOR<EmpleadoScalarRelationFilter, EmpleadoWhereInput>
    medicoEquipo?: Medico_EquipoListRelationFilter
    Cita?: CitaListRelationFilter
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaListRelationFilter
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoListRelationFilter
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoListRelationFilter
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoListRelationFilter
  }, "idMedico">

  export type MedicoOrderByWithAggregationInput = {
    idMedico?: SortOrder
    idEmpleado?: SortOrder
    sueldo?: SortOrder
    _count?: MedicoCountOrderByAggregateInput
    _avg?: MedicoAvgOrderByAggregateInput
    _max?: MedicoMaxOrderByAggregateInput
    _min?: MedicoMinOrderByAggregateInput
    _sum?: MedicoSumOrderByAggregateInput
  }

  export type MedicoScalarWhereWithAggregatesInput = {
    AND?: MedicoScalarWhereWithAggregatesInput | MedicoScalarWhereWithAggregatesInput[]
    OR?: MedicoScalarWhereWithAggregatesInput[]
    NOT?: MedicoScalarWhereWithAggregatesInput | MedicoScalarWhereWithAggregatesInput[]
    idMedico?: IntWithAggregatesFilter<"Medico"> | number
    idEmpleado?: IntWithAggregatesFilter<"Medico"> | number
    sueldo?: BigIntWithAggregatesFilter<"Medico"> | bigint | number
  }

  export type Medico_EquipoWhereInput = {
    AND?: Medico_EquipoWhereInput | Medico_EquipoWhereInput[]
    OR?: Medico_EquipoWhereInput[]
    NOT?: Medico_EquipoWhereInput | Medico_EquipoWhereInput[]
    idMedico?: IntFilter<"Medico_Equipo"> | number
    idEquipamiento?: IntFilter<"Medico_Equipo"> | number
    FPrestamo?: DateTimeFilter<"Medico_Equipo"> | Date | string
    FDevolucion?: DateTimeFilter<"Medico_Equipo"> | Date | string
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
    equipamiento?: XOR<EquipamientoScalarRelationFilter, EquipamientoWhereInput>
  }

  export type Medico_EquipoOrderByWithRelationInput = {
    idMedico?: SortOrder
    idEquipamiento?: SortOrder
    FPrestamo?: SortOrder
    FDevolucion?: SortOrder
    medico?: MedicoOrderByWithRelationInput
    equipamiento?: EquipamientoOrderByWithRelationInput
  }

  export type Medico_EquipoWhereUniqueInput = Prisma.AtLeast<{
    idMedico_idEquipamiento?: Medico_EquipoIdMedicoIdEquipamientoCompoundUniqueInput
    AND?: Medico_EquipoWhereInput | Medico_EquipoWhereInput[]
    OR?: Medico_EquipoWhereInput[]
    NOT?: Medico_EquipoWhereInput | Medico_EquipoWhereInput[]
    idMedico?: IntFilter<"Medico_Equipo"> | number
    idEquipamiento?: IntFilter<"Medico_Equipo"> | number
    FPrestamo?: DateTimeFilter<"Medico_Equipo"> | Date | string
    FDevolucion?: DateTimeFilter<"Medico_Equipo"> | Date | string
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
    equipamiento?: XOR<EquipamientoScalarRelationFilter, EquipamientoWhereInput>
  }, "idMedico_idEquipamiento">

  export type Medico_EquipoOrderByWithAggregationInput = {
    idMedico?: SortOrder
    idEquipamiento?: SortOrder
    FPrestamo?: SortOrder
    FDevolucion?: SortOrder
    _count?: Medico_EquipoCountOrderByAggregateInput
    _avg?: Medico_EquipoAvgOrderByAggregateInput
    _max?: Medico_EquipoMaxOrderByAggregateInput
    _min?: Medico_EquipoMinOrderByAggregateInput
    _sum?: Medico_EquipoSumOrderByAggregateInput
  }

  export type Medico_EquipoScalarWhereWithAggregatesInput = {
    AND?: Medico_EquipoScalarWhereWithAggregatesInput | Medico_EquipoScalarWhereWithAggregatesInput[]
    OR?: Medico_EquipoScalarWhereWithAggregatesInput[]
    NOT?: Medico_EquipoScalarWhereWithAggregatesInput | Medico_EquipoScalarWhereWithAggregatesInput[]
    idMedico?: IntWithAggregatesFilter<"Medico_Equipo"> | number
    idEquipamiento?: IntWithAggregatesFilter<"Medico_Equipo"> | number
    FPrestamo?: DateTimeWithAggregatesFilter<"Medico_Equipo"> | Date | string
    FDevolucion?: DateTimeWithAggregatesFilter<"Medico_Equipo"> | Date | string
  }

  export type CitaWhereInput = {
    AND?: CitaWhereInput | CitaWhereInput[]
    OR?: CitaWhereInput[]
    NOT?: CitaWhereInput | CitaWhereInput[]
    idCita?: IntFilter<"Cita"> | number
    idPaciente?: IntFilter<"Cita"> | number
    idMedico?: IntFilter<"Cita"> | number
    fechaYHora?: DateTimeFilter<"Cita"> | Date | string
    estado?: StringFilter<"Cita"> | string
    resumen?: StringFilter<"Cita"> | string
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaListRelationFilter
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoListRelationFilter
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaListRelationFilter
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoListRelationFilter
  }

  export type CitaOrderByWithRelationInput = {
    idCita?: SortOrder
    idPaciente?: SortOrder
    idMedico?: SortOrder
    fechaYHora?: SortOrder
    estado?: SortOrder
    resumen?: SortOrder
    medico?: MedicoOrderByWithRelationInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaOrderByRelationAggregateInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoOrderByRelationAggregateInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaOrderByRelationAggregateInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoOrderByRelationAggregateInput
  }

  export type CitaWhereUniqueInput = Prisma.AtLeast<{
    idCita?: number
    AND?: CitaWhereInput | CitaWhereInput[]
    OR?: CitaWhereInput[]
    NOT?: CitaWhereInput | CitaWhereInput[]
    idPaciente?: IntFilter<"Cita"> | number
    idMedico?: IntFilter<"Cita"> | number
    fechaYHora?: DateTimeFilter<"Cita"> | Date | string
    estado?: StringFilter<"Cita"> | string
    resumen?: StringFilter<"Cita"> | string
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaListRelationFilter
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoListRelationFilter
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaListRelationFilter
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoListRelationFilter
  }, "idCita">

  export type CitaOrderByWithAggregationInput = {
    idCita?: SortOrder
    idPaciente?: SortOrder
    idMedico?: SortOrder
    fechaYHora?: SortOrder
    estado?: SortOrder
    resumen?: SortOrder
    _count?: CitaCountOrderByAggregateInput
    _avg?: CitaAvgOrderByAggregateInput
    _max?: CitaMaxOrderByAggregateInput
    _min?: CitaMinOrderByAggregateInput
    _sum?: CitaSumOrderByAggregateInput
  }

  export type CitaScalarWhereWithAggregatesInput = {
    AND?: CitaScalarWhereWithAggregatesInput | CitaScalarWhereWithAggregatesInput[]
    OR?: CitaScalarWhereWithAggregatesInput[]
    NOT?: CitaScalarWhereWithAggregatesInput | CitaScalarWhereWithAggregatesInput[]
    idCita?: IntWithAggregatesFilter<"Cita"> | number
    idPaciente?: IntWithAggregatesFilter<"Cita"> | number
    idMedico?: IntWithAggregatesFilter<"Cita"> | number
    fechaYHora?: DateTimeWithAggregatesFilter<"Cita"> | Date | string
    estado?: StringWithAggregatesFilter<"Cita"> | string
    resumen?: StringWithAggregatesFilter<"Cita"> | string
  }

  export type PAdmin_Modifica_PacienteWhereInput = {
    AND?: PAdmin_Modifica_PacienteWhereInput | PAdmin_Modifica_PacienteWhereInput[]
    OR?: PAdmin_Modifica_PacienteWhereInput[]
    NOT?: PAdmin_Modifica_PacienteWhereInput | PAdmin_Modifica_PacienteWhereInput[]
    idPAdministrativo?: IntFilter<"PAdmin_Modifica_Paciente"> | number
    idPaciente?: IntFilter<"PAdmin_Modifica_Paciente"> | number
    FModificacion?: DateTimeFilter<"PAdmin_Modifica_Paciente"> | Date | string
    descripcion?: StringFilter<"PAdmin_Modifica_Paciente"> | string
    pAdministrativo?: XOR<PAdministrativoScalarRelationFilter, PAdministrativoWhereInput>
  }

  export type PAdmin_Modifica_PacienteOrderByWithRelationInput = {
    idPAdministrativo?: SortOrder
    idPaciente?: SortOrder
    FModificacion?: SortOrder
    descripcion?: SortOrder
    pAdministrativo?: PAdministrativoOrderByWithRelationInput
  }

  export type PAdmin_Modifica_PacienteWhereUniqueInput = Prisma.AtLeast<{
    idPAdministrativo_idPaciente?: PAdmin_Modifica_PacienteIdPAdministrativoIdPacienteCompoundUniqueInput
    AND?: PAdmin_Modifica_PacienteWhereInput | PAdmin_Modifica_PacienteWhereInput[]
    OR?: PAdmin_Modifica_PacienteWhereInput[]
    NOT?: PAdmin_Modifica_PacienteWhereInput | PAdmin_Modifica_PacienteWhereInput[]
    idPAdministrativo?: IntFilter<"PAdmin_Modifica_Paciente"> | number
    idPaciente?: IntFilter<"PAdmin_Modifica_Paciente"> | number
    FModificacion?: DateTimeFilter<"PAdmin_Modifica_Paciente"> | Date | string
    descripcion?: StringFilter<"PAdmin_Modifica_Paciente"> | string
    pAdministrativo?: XOR<PAdministrativoScalarRelationFilter, PAdministrativoWhereInput>
  }, "idPAdministrativo_idPaciente">

  export type PAdmin_Modifica_PacienteOrderByWithAggregationInput = {
    idPAdministrativo?: SortOrder
    idPaciente?: SortOrder
    FModificacion?: SortOrder
    descripcion?: SortOrder
    _count?: PAdmin_Modifica_PacienteCountOrderByAggregateInput
    _avg?: PAdmin_Modifica_PacienteAvgOrderByAggregateInput
    _max?: PAdmin_Modifica_PacienteMaxOrderByAggregateInput
    _min?: PAdmin_Modifica_PacienteMinOrderByAggregateInput
    _sum?: PAdmin_Modifica_PacienteSumOrderByAggregateInput
  }

  export type PAdmin_Modifica_PacienteScalarWhereWithAggregatesInput = {
    AND?: PAdmin_Modifica_PacienteScalarWhereWithAggregatesInput | PAdmin_Modifica_PacienteScalarWhereWithAggregatesInput[]
    OR?: PAdmin_Modifica_PacienteScalarWhereWithAggregatesInput[]
    NOT?: PAdmin_Modifica_PacienteScalarWhereWithAggregatesInput | PAdmin_Modifica_PacienteScalarWhereWithAggregatesInput[]
    idPAdministrativo?: IntWithAggregatesFilter<"PAdmin_Modifica_Paciente"> | number
    idPaciente?: IntWithAggregatesFilter<"PAdmin_Modifica_Paciente"> | number
    FModificacion?: DateTimeWithAggregatesFilter<"PAdmin_Modifica_Paciente"> | Date | string
    descripcion?: StringWithAggregatesFilter<"PAdmin_Modifica_Paciente"> | string
  }

  export type Actualizaciones_HistoriaClinicaWhereInput = {
    AND?: Actualizaciones_HistoriaClinicaWhereInput | Actualizaciones_HistoriaClinicaWhereInput[]
    OR?: Actualizaciones_HistoriaClinicaWhereInput[]
    NOT?: Actualizaciones_HistoriaClinicaWhereInput | Actualizaciones_HistoriaClinicaWhereInput[]
    idMedico?: IntFilter<"Actualizaciones_HistoriaClinica"> | number
    idCita?: IntFilter<"Actualizaciones_HistoriaClinica"> | number
    idHistoriaClinica?: IntFilter<"Actualizaciones_HistoriaClinica"> | number
    FActualizacion?: DateTimeFilter<"Actualizaciones_HistoriaClinica"> | Date | string
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
    cita?: XOR<CitaScalarRelationFilter, CitaWhereInput>
  }

  export type Actualizaciones_HistoriaClinicaOrderByWithRelationInput = {
    idMedico?: SortOrder
    idCita?: SortOrder
    idHistoriaClinica?: SortOrder
    FActualizacion?: SortOrder
    medico?: MedicoOrderByWithRelationInput
    cita?: CitaOrderByWithRelationInput
  }

  export type Actualizaciones_HistoriaClinicaWhereUniqueInput = Prisma.AtLeast<{
    idMedico_idCita_idHistoriaClinica?: Actualizaciones_HistoriaClinicaIdMedicoIdCitaIdHistoriaClinicaCompoundUniqueInput
    AND?: Actualizaciones_HistoriaClinicaWhereInput | Actualizaciones_HistoriaClinicaWhereInput[]
    OR?: Actualizaciones_HistoriaClinicaWhereInput[]
    NOT?: Actualizaciones_HistoriaClinicaWhereInput | Actualizaciones_HistoriaClinicaWhereInput[]
    idMedico?: IntFilter<"Actualizaciones_HistoriaClinica"> | number
    idCita?: IntFilter<"Actualizaciones_HistoriaClinica"> | number
    idHistoriaClinica?: IntFilter<"Actualizaciones_HistoriaClinica"> | number
    FActualizacion?: DateTimeFilter<"Actualizaciones_HistoriaClinica"> | Date | string
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
    cita?: XOR<CitaScalarRelationFilter, CitaWhereInput>
  }, "idMedico_idCita_idHistoriaClinica">

  export type Actualizaciones_HistoriaClinicaOrderByWithAggregationInput = {
    idMedico?: SortOrder
    idCita?: SortOrder
    idHistoriaClinica?: SortOrder
    FActualizacion?: SortOrder
    _count?: Actualizaciones_HistoriaClinicaCountOrderByAggregateInput
    _avg?: Actualizaciones_HistoriaClinicaAvgOrderByAggregateInput
    _max?: Actualizaciones_HistoriaClinicaMaxOrderByAggregateInput
    _min?: Actualizaciones_HistoriaClinicaMinOrderByAggregateInput
    _sum?: Actualizaciones_HistoriaClinicaSumOrderByAggregateInput
  }

  export type Actualizaciones_HistoriaClinicaScalarWhereWithAggregatesInput = {
    AND?: Actualizaciones_HistoriaClinicaScalarWhereWithAggregatesInput | Actualizaciones_HistoriaClinicaScalarWhereWithAggregatesInput[]
    OR?: Actualizaciones_HistoriaClinicaScalarWhereWithAggregatesInput[]
    NOT?: Actualizaciones_HistoriaClinicaScalarWhereWithAggregatesInput | Actualizaciones_HistoriaClinicaScalarWhereWithAggregatesInput[]
    idMedico?: IntWithAggregatesFilter<"Actualizaciones_HistoriaClinica"> | number
    idCita?: IntWithAggregatesFilter<"Actualizaciones_HistoriaClinica"> | number
    idHistoriaClinica?: IntWithAggregatesFilter<"Actualizaciones_HistoriaClinica"> | number
    FActualizacion?: DateTimeWithAggregatesFilter<"Actualizaciones_HistoriaClinica"> | Date | string
  }

  export type Medico_Preescribe_MedicamentoWhereInput = {
    AND?: Medico_Preescribe_MedicamentoWhereInput | Medico_Preescribe_MedicamentoWhereInput[]
    OR?: Medico_Preescribe_MedicamentoWhereInput[]
    NOT?: Medico_Preescribe_MedicamentoWhereInput | Medico_Preescribe_MedicamentoWhereInput[]
    idMedico?: IntFilter<"Medico_Preescribe_Medicamento"> | number
    idCita?: IntFilter<"Medico_Preescribe_Medicamento"> | number
    idMedicamento?: IntFilter<"Medico_Preescribe_Medicamento"> | number
    idPaciente?: IntFilter<"Medico_Preescribe_Medicamento"> | number
    posologia?: StringFilter<"Medico_Preescribe_Medicamento"> | string
    particular?: StringFilter<"Medico_Preescribe_Medicamento"> | string
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
    cita?: XOR<CitaScalarRelationFilter, CitaWhereInput>
  }

  export type Medico_Preescribe_MedicamentoOrderByWithRelationInput = {
    idMedico?: SortOrder
    idCita?: SortOrder
    idMedicamento?: SortOrder
    idPaciente?: SortOrder
    posologia?: SortOrder
    particular?: SortOrder
    medico?: MedicoOrderByWithRelationInput
    cita?: CitaOrderByWithRelationInput
  }

  export type Medico_Preescribe_MedicamentoWhereUniqueInput = Prisma.AtLeast<{
    idMedico_idCita_idMedicamento_idPaciente?: Medico_Preescribe_MedicamentoIdMedicoIdCitaIdMedicamentoIdPacienteCompoundUniqueInput
    AND?: Medico_Preescribe_MedicamentoWhereInput | Medico_Preescribe_MedicamentoWhereInput[]
    OR?: Medico_Preescribe_MedicamentoWhereInput[]
    NOT?: Medico_Preescribe_MedicamentoWhereInput | Medico_Preescribe_MedicamentoWhereInput[]
    idMedico?: IntFilter<"Medico_Preescribe_Medicamento"> | number
    idCita?: IntFilter<"Medico_Preescribe_Medicamento"> | number
    idMedicamento?: IntFilter<"Medico_Preescribe_Medicamento"> | number
    idPaciente?: IntFilter<"Medico_Preescribe_Medicamento"> | number
    posologia?: StringFilter<"Medico_Preescribe_Medicamento"> | string
    particular?: StringFilter<"Medico_Preescribe_Medicamento"> | string
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
    cita?: XOR<CitaScalarRelationFilter, CitaWhereInput>
  }, "idMedico_idCita_idMedicamento_idPaciente">

  export type Medico_Preescribe_MedicamentoOrderByWithAggregationInput = {
    idMedico?: SortOrder
    idCita?: SortOrder
    idMedicamento?: SortOrder
    idPaciente?: SortOrder
    posologia?: SortOrder
    particular?: SortOrder
    _count?: Medico_Preescribe_MedicamentoCountOrderByAggregateInput
    _avg?: Medico_Preescribe_MedicamentoAvgOrderByAggregateInput
    _max?: Medico_Preescribe_MedicamentoMaxOrderByAggregateInput
    _min?: Medico_Preescribe_MedicamentoMinOrderByAggregateInput
    _sum?: Medico_Preescribe_MedicamentoSumOrderByAggregateInput
  }

  export type Medico_Preescribe_MedicamentoScalarWhereWithAggregatesInput = {
    AND?: Medico_Preescribe_MedicamentoScalarWhereWithAggregatesInput | Medico_Preescribe_MedicamentoScalarWhereWithAggregatesInput[]
    OR?: Medico_Preescribe_MedicamentoScalarWhereWithAggregatesInput[]
    NOT?: Medico_Preescribe_MedicamentoScalarWhereWithAggregatesInput | Medico_Preescribe_MedicamentoScalarWhereWithAggregatesInput[]
    idMedico?: IntWithAggregatesFilter<"Medico_Preescribe_Medicamento"> | number
    idCita?: IntWithAggregatesFilter<"Medico_Preescribe_Medicamento"> | number
    idMedicamento?: IntWithAggregatesFilter<"Medico_Preescribe_Medicamento"> | number
    idPaciente?: IntWithAggregatesFilter<"Medico_Preescribe_Medicamento"> | number
    posologia?: StringWithAggregatesFilter<"Medico_Preescribe_Medicamento"> | string
    particular?: StringWithAggregatesFilter<"Medico_Preescribe_Medicamento"> | string
  }

  export type Registro_Consulta_MedicamentoWhereInput = {
    AND?: Registro_Consulta_MedicamentoWhereInput | Registro_Consulta_MedicamentoWhereInput[]
    OR?: Registro_Consulta_MedicamentoWhereInput[]
    NOT?: Registro_Consulta_MedicamentoWhereInput | Registro_Consulta_MedicamentoWhereInput[]
    idMedico?: IntFilter<"Registro_Consulta_Medicamento"> | number
    idMedicamento?: IntFilter<"Registro_Consulta_Medicamento"> | number
    FConsulta?: DateTimeFilter<"Registro_Consulta_Medicamento"> | Date | string
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
  }

  export type Registro_Consulta_MedicamentoOrderByWithRelationInput = {
    idMedico?: SortOrder
    idMedicamento?: SortOrder
    FConsulta?: SortOrder
    medico?: MedicoOrderByWithRelationInput
  }

  export type Registro_Consulta_MedicamentoWhereUniqueInput = Prisma.AtLeast<{
    idMedico_idMedicamento?: Registro_Consulta_MedicamentoIdMedicoIdMedicamentoCompoundUniqueInput
    AND?: Registro_Consulta_MedicamentoWhereInput | Registro_Consulta_MedicamentoWhereInput[]
    OR?: Registro_Consulta_MedicamentoWhereInput[]
    NOT?: Registro_Consulta_MedicamentoWhereInput | Registro_Consulta_MedicamentoWhereInput[]
    idMedico?: IntFilter<"Registro_Consulta_Medicamento"> | number
    idMedicamento?: IntFilter<"Registro_Consulta_Medicamento"> | number
    FConsulta?: DateTimeFilter<"Registro_Consulta_Medicamento"> | Date | string
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
  }, "idMedico_idMedicamento">

  export type Registro_Consulta_MedicamentoOrderByWithAggregationInput = {
    idMedico?: SortOrder
    idMedicamento?: SortOrder
    FConsulta?: SortOrder
    _count?: Registro_Consulta_MedicamentoCountOrderByAggregateInput
    _avg?: Registro_Consulta_MedicamentoAvgOrderByAggregateInput
    _max?: Registro_Consulta_MedicamentoMaxOrderByAggregateInput
    _min?: Registro_Consulta_MedicamentoMinOrderByAggregateInput
    _sum?: Registro_Consulta_MedicamentoSumOrderByAggregateInput
  }

  export type Registro_Consulta_MedicamentoScalarWhereWithAggregatesInput = {
    AND?: Registro_Consulta_MedicamentoScalarWhereWithAggregatesInput | Registro_Consulta_MedicamentoScalarWhereWithAggregatesInput[]
    OR?: Registro_Consulta_MedicamentoScalarWhereWithAggregatesInput[]
    NOT?: Registro_Consulta_MedicamentoScalarWhereWithAggregatesInput | Registro_Consulta_MedicamentoScalarWhereWithAggregatesInput[]
    idMedico?: IntWithAggregatesFilter<"Registro_Consulta_Medicamento"> | number
    idMedicamento?: IntWithAggregatesFilter<"Registro_Consulta_Medicamento"> | number
    FConsulta?: DateTimeWithAggregatesFilter<"Registro_Consulta_Medicamento"> | Date | string
  }

  export type PAdmin_Gestiona_CitaWhereInput = {
    AND?: PAdmin_Gestiona_CitaWhereInput | PAdmin_Gestiona_CitaWhereInput[]
    OR?: PAdmin_Gestiona_CitaWhereInput[]
    NOT?: PAdmin_Gestiona_CitaWhereInput | PAdmin_Gestiona_CitaWhereInput[]
    idPAdministrativo?: IntFilter<"PAdmin_Gestiona_Cita"> | number
    idCita?: IntFilter<"PAdmin_Gestiona_Cita"> | number
    accion?: StringFilter<"PAdmin_Gestiona_Cita"> | string
    FAccion?: DateTimeFilter<"PAdmin_Gestiona_Cita"> | Date | string
    pAdministrativo?: XOR<PAdministrativoScalarRelationFilter, PAdministrativoWhereInput>
    cita?: XOR<CitaScalarRelationFilter, CitaWhereInput>
  }

  export type PAdmin_Gestiona_CitaOrderByWithRelationInput = {
    idPAdministrativo?: SortOrder
    idCita?: SortOrder
    accion?: SortOrder
    FAccion?: SortOrder
    pAdministrativo?: PAdministrativoOrderByWithRelationInput
    cita?: CitaOrderByWithRelationInput
  }

  export type PAdmin_Gestiona_CitaWhereUniqueInput = Prisma.AtLeast<{
    idPAdministrativo_idCita?: PAdmin_Gestiona_CitaIdPAdministrativoIdCitaCompoundUniqueInput
    AND?: PAdmin_Gestiona_CitaWhereInput | PAdmin_Gestiona_CitaWhereInput[]
    OR?: PAdmin_Gestiona_CitaWhereInput[]
    NOT?: PAdmin_Gestiona_CitaWhereInput | PAdmin_Gestiona_CitaWhereInput[]
    idPAdministrativo?: IntFilter<"PAdmin_Gestiona_Cita"> | number
    idCita?: IntFilter<"PAdmin_Gestiona_Cita"> | number
    accion?: StringFilter<"PAdmin_Gestiona_Cita"> | string
    FAccion?: DateTimeFilter<"PAdmin_Gestiona_Cita"> | Date | string
    pAdministrativo?: XOR<PAdministrativoScalarRelationFilter, PAdministrativoWhereInput>
    cita?: XOR<CitaScalarRelationFilter, CitaWhereInput>
  }, "idPAdministrativo_idCita">

  export type PAdmin_Gestiona_CitaOrderByWithAggregationInput = {
    idPAdministrativo?: SortOrder
    idCita?: SortOrder
    accion?: SortOrder
    FAccion?: SortOrder
    _count?: PAdmin_Gestiona_CitaCountOrderByAggregateInput
    _avg?: PAdmin_Gestiona_CitaAvgOrderByAggregateInput
    _max?: PAdmin_Gestiona_CitaMaxOrderByAggregateInput
    _min?: PAdmin_Gestiona_CitaMinOrderByAggregateInput
    _sum?: PAdmin_Gestiona_CitaSumOrderByAggregateInput
  }

  export type PAdmin_Gestiona_CitaScalarWhereWithAggregatesInput = {
    AND?: PAdmin_Gestiona_CitaScalarWhereWithAggregatesInput | PAdmin_Gestiona_CitaScalarWhereWithAggregatesInput[]
    OR?: PAdmin_Gestiona_CitaScalarWhereWithAggregatesInput[]
    NOT?: PAdmin_Gestiona_CitaScalarWhereWithAggregatesInput | PAdmin_Gestiona_CitaScalarWhereWithAggregatesInput[]
    idPAdministrativo?: IntWithAggregatesFilter<"PAdmin_Gestiona_Cita"> | number
    idCita?: IntWithAggregatesFilter<"PAdmin_Gestiona_Cita"> | number
    accion?: StringWithAggregatesFilter<"PAdmin_Gestiona_Cita"> | string
    FAccion?: DateTimeWithAggregatesFilter<"PAdmin_Gestiona_Cita"> | Date | string
  }

  export type DiagnosticoWhereInput = {
    AND?: DiagnosticoWhereInput | DiagnosticoWhereInput[]
    OR?: DiagnosticoWhereInput[]
    NOT?: DiagnosticoWhereInput | DiagnosticoWhereInput[]
    idDiagnostico?: IntFilter<"Diagnostico"> | number
    nombre?: StringFilter<"Diagnostico"> | string
    medicoDictaminaDiagnostico?: Medico_dictamina_diagnosticoListRelationFilter
  }

  export type DiagnosticoOrderByWithRelationInput = {
    idDiagnostico?: SortOrder
    nombre?: SortOrder
    medicoDictaminaDiagnostico?: Medico_dictamina_diagnosticoOrderByRelationAggregateInput
  }

  export type DiagnosticoWhereUniqueInput = Prisma.AtLeast<{
    idDiagnostico?: number
    nombre?: string
    AND?: DiagnosticoWhereInput | DiagnosticoWhereInput[]
    OR?: DiagnosticoWhereInput[]
    NOT?: DiagnosticoWhereInput | DiagnosticoWhereInput[]
    medicoDictaminaDiagnostico?: Medico_dictamina_diagnosticoListRelationFilter
  }, "idDiagnostico" | "nombre">

  export type DiagnosticoOrderByWithAggregationInput = {
    idDiagnostico?: SortOrder
    nombre?: SortOrder
    _count?: DiagnosticoCountOrderByAggregateInput
    _avg?: DiagnosticoAvgOrderByAggregateInput
    _max?: DiagnosticoMaxOrderByAggregateInput
    _min?: DiagnosticoMinOrderByAggregateInput
    _sum?: DiagnosticoSumOrderByAggregateInput
  }

  export type DiagnosticoScalarWhereWithAggregatesInput = {
    AND?: DiagnosticoScalarWhereWithAggregatesInput | DiagnosticoScalarWhereWithAggregatesInput[]
    OR?: DiagnosticoScalarWhereWithAggregatesInput[]
    NOT?: DiagnosticoScalarWhereWithAggregatesInput | DiagnosticoScalarWhereWithAggregatesInput[]
    idDiagnostico?: IntWithAggregatesFilter<"Diagnostico"> | number
    nombre?: StringWithAggregatesFilter<"Diagnostico"> | string
  }

  export type Medico_dictamina_diagnosticoWhereInput = {
    AND?: Medico_dictamina_diagnosticoWhereInput | Medico_dictamina_diagnosticoWhereInput[]
    OR?: Medico_dictamina_diagnosticoWhereInput[]
    NOT?: Medico_dictamina_diagnosticoWhereInput | Medico_dictamina_diagnosticoWhereInput[]
    idDiagnostico?: IntFilter<"Medico_dictamina_diagnostico"> | number
    idMedico?: IntFilter<"Medico_dictamina_diagnostico"> | number
    idCita?: IntFilter<"Medico_dictamina_diagnostico"> | number
    diagnostico?: XOR<DiagnosticoScalarRelationFilter, DiagnosticoWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
    cita?: XOR<CitaScalarRelationFilter, CitaWhereInput>
  }

  export type Medico_dictamina_diagnosticoOrderByWithRelationInput = {
    idDiagnostico?: SortOrder
    idMedico?: SortOrder
    idCita?: SortOrder
    diagnostico?: DiagnosticoOrderByWithRelationInput
    medico?: MedicoOrderByWithRelationInput
    cita?: CitaOrderByWithRelationInput
  }

  export type Medico_dictamina_diagnosticoWhereUniqueInput = Prisma.AtLeast<{
    idDiagnostico_idMedico_idCita?: Medico_dictamina_diagnosticoIdDiagnosticoIdMedicoIdCitaCompoundUniqueInput
    AND?: Medico_dictamina_diagnosticoWhereInput | Medico_dictamina_diagnosticoWhereInput[]
    OR?: Medico_dictamina_diagnosticoWhereInput[]
    NOT?: Medico_dictamina_diagnosticoWhereInput | Medico_dictamina_diagnosticoWhereInput[]
    idDiagnostico?: IntFilter<"Medico_dictamina_diagnostico"> | number
    idMedico?: IntFilter<"Medico_dictamina_diagnostico"> | number
    idCita?: IntFilter<"Medico_dictamina_diagnostico"> | number
    diagnostico?: XOR<DiagnosticoScalarRelationFilter, DiagnosticoWhereInput>
    medico?: XOR<MedicoScalarRelationFilter, MedicoWhereInput>
    cita?: XOR<CitaScalarRelationFilter, CitaWhereInput>
  }, "idDiagnostico_idMedico_idCita">

  export type Medico_dictamina_diagnosticoOrderByWithAggregationInput = {
    idDiagnostico?: SortOrder
    idMedico?: SortOrder
    idCita?: SortOrder
    _count?: Medico_dictamina_diagnosticoCountOrderByAggregateInput
    _avg?: Medico_dictamina_diagnosticoAvgOrderByAggregateInput
    _max?: Medico_dictamina_diagnosticoMaxOrderByAggregateInput
    _min?: Medico_dictamina_diagnosticoMinOrderByAggregateInput
    _sum?: Medico_dictamina_diagnosticoSumOrderByAggregateInput
  }

  export type Medico_dictamina_diagnosticoScalarWhereWithAggregatesInput = {
    AND?: Medico_dictamina_diagnosticoScalarWhereWithAggregatesInput | Medico_dictamina_diagnosticoScalarWhereWithAggregatesInput[]
    OR?: Medico_dictamina_diagnosticoScalarWhereWithAggregatesInput[]
    NOT?: Medico_dictamina_diagnosticoScalarWhereWithAggregatesInput | Medico_dictamina_diagnosticoScalarWhereWithAggregatesInput[]
    idDiagnostico?: IntWithAggregatesFilter<"Medico_dictamina_diagnostico"> | number
    idMedico?: IntWithAggregatesFilter<"Medico_dictamina_diagnostico"> | number
    idCita?: IntWithAggregatesFilter<"Medico_dictamina_diagnostico"> | number
  }

  export type EquipamientoCreateInput = {
    idDepartamento: number
    nombre: string
    estado?: string
    FContratacion?: Date | string
    medicoEquipo?: Medico_EquipoCreateNestedManyWithoutEquipamientoInput
  }

  export type EquipamientoUncheckedCreateInput = {
    idEquipamiento?: number
    idDepartamento: number
    nombre: string
    estado?: string
    FContratacion?: Date | string
    medicoEquipo?: Medico_EquipoUncheckedCreateNestedManyWithoutEquipamientoInput
  }

  export type EquipamientoUpdateInput = {
    idDepartamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    FContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
    medicoEquipo?: Medico_EquipoUpdateManyWithoutEquipamientoNestedInput
  }

  export type EquipamientoUncheckedUpdateInput = {
    idEquipamiento?: IntFieldUpdateOperationsInput | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    FContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
    medicoEquipo?: Medico_EquipoUncheckedUpdateManyWithoutEquipamientoNestedInput
  }

  export type EquipamientoCreateManyInput = {
    idEquipamiento?: number
    idDepartamento: number
    nombre: string
    estado?: string
    FContratacion?: Date | string
  }

  export type EquipamientoUpdateManyMutationInput = {
    idDepartamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    FContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipamientoUncheckedUpdateManyInput = {
    idEquipamiento?: IntFieldUpdateOperationsInput | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    FContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpleadoCreateInput = {
    idUsuario: bigint | number
    idDepartamento: number
    FContratacion?: Date | string
    estado?: string
    pAdministrativo?: PAdministrativoCreateNestedManyWithoutEmpleadoInput
    medico?: MedicoCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoUncheckedCreateInput = {
    idEmpleado?: number
    idUsuario: bigint | number
    idDepartamento: number
    FContratacion?: Date | string
    estado?: string
    pAdministrativo?: PAdministrativoUncheckedCreateNestedManyWithoutEmpleadoInput
    medico?: MedicoUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoUpdateInput = {
    idUsuario?: BigIntFieldUpdateOperationsInput | bigint | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
    FContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    pAdministrativo?: PAdministrativoUpdateManyWithoutEmpleadoNestedInput
    medico?: MedicoUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoUncheckedUpdateInput = {
    idEmpleado?: IntFieldUpdateOperationsInput | number
    idUsuario?: BigIntFieldUpdateOperationsInput | bigint | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
    FContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    pAdministrativo?: PAdministrativoUncheckedUpdateManyWithoutEmpleadoNestedInput
    medico?: MedicoUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoCreateManyInput = {
    idEmpleado?: number
    idUsuario: bigint | number
    idDepartamento: number
    FContratacion?: Date | string
    estado?: string
  }

  export type EmpleadoUpdateManyMutationInput = {
    idUsuario?: BigIntFieldUpdateOperationsInput | bigint | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
    FContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type EmpleadoUncheckedUpdateManyInput = {
    idEmpleado?: IntFieldUpdateOperationsInput | number
    idUsuario?: BigIntFieldUpdateOperationsInput | bigint | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
    FContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type PAdministrativoCreateInput = {
    sueldo: bigint | number
    empleado: EmpleadoCreateNestedOneWithoutPAdministrativoInput
    PAdmin_Modifica_Paciente?: PAdmin_Modifica_PacienteCreateNestedManyWithoutPAdministrativoInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaCreateNestedManyWithoutPAdministrativoInput
  }

  export type PAdministrativoUncheckedCreateInput = {
    idPAdministrativo?: number
    idEmpleado: number
    sueldo: bigint | number
    PAdmin_Modifica_Paciente?: PAdmin_Modifica_PacienteUncheckedCreateNestedManyWithoutPAdministrativoInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUncheckedCreateNestedManyWithoutPAdministrativoInput
  }

  export type PAdministrativoUpdateInput = {
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    empleado?: EmpleadoUpdateOneRequiredWithoutPAdministrativoNestedInput
    PAdmin_Modifica_Paciente?: PAdmin_Modifica_PacienteUpdateManyWithoutPAdministrativoNestedInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUpdateManyWithoutPAdministrativoNestedInput
  }

  export type PAdministrativoUncheckedUpdateInput = {
    idPAdministrativo?: IntFieldUpdateOperationsInput | number
    idEmpleado?: IntFieldUpdateOperationsInput | number
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    PAdmin_Modifica_Paciente?: PAdmin_Modifica_PacienteUncheckedUpdateManyWithoutPAdministrativoNestedInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUncheckedUpdateManyWithoutPAdministrativoNestedInput
  }

  export type PAdministrativoCreateManyInput = {
    idPAdministrativo?: number
    idEmpleado: number
    sueldo: bigint | number
  }

  export type PAdministrativoUpdateManyMutationInput = {
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PAdministrativoUncheckedUpdateManyInput = {
    idPAdministrativo?: IntFieldUpdateOperationsInput | number
    idEmpleado?: IntFieldUpdateOperationsInput | number
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MedicoCreateInput = {
    sueldo: bigint | number
    empleado: EmpleadoCreateNestedOneWithoutMedicoInput
    medicoEquipo?: Medico_EquipoCreateNestedManyWithoutMedicoInput
    Cita?: CitaCreateNestedManyWithoutMedicoInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaCreateNestedManyWithoutMedicoInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoCreateNestedManyWithoutMedicoInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoCreateNestedManyWithoutMedicoInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateInput = {
    idMedico?: number
    idEmpleado: number
    sueldo: bigint | number
    medicoEquipo?: Medico_EquipoUncheckedCreateNestedManyWithoutMedicoInput
    Cita?: CitaUncheckedCreateNestedManyWithoutMedicoInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedCreateNestedManyWithoutMedicoInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUncheckedCreateNestedManyWithoutMedicoInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUpdateInput = {
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    empleado?: EmpleadoUpdateOneRequiredWithoutMedicoNestedInput
    medicoEquipo?: Medico_EquipoUpdateManyWithoutMedicoNestedInput
    Cita?: CitaUpdateManyWithoutMedicoNestedInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUpdateManyWithoutMedicoNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUpdateManyWithoutMedicoNestedInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUpdateManyWithoutMedicoNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idEmpleado?: IntFieldUpdateOperationsInput | number
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    medicoEquipo?: Medico_EquipoUncheckedUpdateManyWithoutMedicoNestedInput
    Cita?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedUpdateManyWithoutMedicoNestedInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUncheckedUpdateManyWithoutMedicoNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoCreateManyInput = {
    idMedico?: number
    idEmpleado: number
    sueldo: bigint | number
  }

  export type MedicoUpdateManyMutationInput = {
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MedicoUncheckedUpdateManyInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idEmpleado?: IntFieldUpdateOperationsInput | number
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Medico_EquipoCreateInput = {
    FPrestamo: Date | string
    FDevolucion: Date | string
    medico: MedicoCreateNestedOneWithoutMedicoEquipoInput
    equipamiento: EquipamientoCreateNestedOneWithoutMedicoEquipoInput
  }

  export type Medico_EquipoUncheckedCreateInput = {
    idMedico: number
    idEquipamiento: number
    FPrestamo: Date | string
    FDevolucion: Date | string
  }

  export type Medico_EquipoUpdateInput = {
    FPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    FDevolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    medico?: MedicoUpdateOneRequiredWithoutMedicoEquipoNestedInput
    equipamiento?: EquipamientoUpdateOneRequiredWithoutMedicoEquipoNestedInput
  }

  export type Medico_EquipoUncheckedUpdateInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idEquipamiento?: IntFieldUpdateOperationsInput | number
    FPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    FDevolucion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Medico_EquipoCreateManyInput = {
    idMedico: number
    idEquipamiento: number
    FPrestamo: Date | string
    FDevolucion: Date | string
  }

  export type Medico_EquipoUpdateManyMutationInput = {
    FPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    FDevolucion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Medico_EquipoUncheckedUpdateManyInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idEquipamiento?: IntFieldUpdateOperationsInput | number
    FPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    FDevolucion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaCreateInput = {
    idPaciente: number
    fechaYHora: Date | string
    estado?: string
    resumen: string
    medico: MedicoCreateNestedOneWithoutCitaInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaCreateNestedManyWithoutCitaInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoCreateNestedManyWithoutCitaInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaCreateNestedManyWithoutCitaInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoCreateNestedManyWithoutCitaInput
  }

  export type CitaUncheckedCreateInput = {
    idCita?: number
    idPaciente: number
    idMedico: number
    fechaYHora: Date | string
    estado?: string
    resumen: string
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedCreateNestedManyWithoutCitaInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedCreateNestedManyWithoutCitaInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUncheckedCreateNestedManyWithoutCitaInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedCreateNestedManyWithoutCitaInput
  }

  export type CitaUpdateInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    fechaYHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneRequiredWithoutCitaNestedInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUpdateManyWithoutCitaNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUpdateManyWithoutCitaNestedInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUpdateManyWithoutCitaNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUpdateManyWithoutCitaNestedInput
  }

  export type CitaUncheckedUpdateInput = {
    idCita?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    idMedico?: IntFieldUpdateOperationsInput | number
    fechaYHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedUpdateManyWithoutCitaNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedUpdateManyWithoutCitaNestedInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUncheckedUpdateManyWithoutCitaNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutCitaNestedInput
  }

  export type CitaCreateManyInput = {
    idCita?: number
    idPaciente: number
    idMedico: number
    fechaYHora: Date | string
    estado?: string
    resumen: string
  }

  export type CitaUpdateManyMutationInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    fechaYHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
  }

  export type CitaUncheckedUpdateManyInput = {
    idCita?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    idMedico?: IntFieldUpdateOperationsInput | number
    fechaYHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
  }

  export type PAdmin_Modifica_PacienteCreateInput = {
    idPaciente: number
    FModificacion?: Date | string
    descripcion: string
    pAdministrativo: PAdministrativoCreateNestedOneWithoutPAdmin_Modifica_PacienteInput
  }

  export type PAdmin_Modifica_PacienteUncheckedCreateInput = {
    idPAdministrativo: number
    idPaciente: number
    FModificacion?: Date | string
    descripcion: string
  }

  export type PAdmin_Modifica_PacienteUpdateInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    FModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pAdministrativo?: PAdministrativoUpdateOneRequiredWithoutPAdmin_Modifica_PacienteNestedInput
  }

  export type PAdmin_Modifica_PacienteUncheckedUpdateInput = {
    idPAdministrativo?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    FModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type PAdmin_Modifica_PacienteCreateManyInput = {
    idPAdministrativo: number
    idPaciente: number
    FModificacion?: Date | string
    descripcion: string
  }

  export type PAdmin_Modifica_PacienteUpdateManyMutationInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    FModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type PAdmin_Modifica_PacienteUncheckedUpdateManyInput = {
    idPAdministrativo?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    FModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type Actualizaciones_HistoriaClinicaCreateInput = {
    idHistoriaClinica: number
    FActualizacion?: Date | string
    medico: MedicoCreateNestedOneWithoutActualizaciones_HistoriaClinicaInput
    cita: CitaCreateNestedOneWithoutActualizaciones_HistoriaClinicaInput
  }

  export type Actualizaciones_HistoriaClinicaUncheckedCreateInput = {
    idMedico: number
    idCita: number
    idHistoriaClinica: number
    FActualizacion?: Date | string
  }

  export type Actualizaciones_HistoriaClinicaUpdateInput = {
    idHistoriaClinica?: IntFieldUpdateOperationsInput | number
    FActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    medico?: MedicoUpdateOneRequiredWithoutActualizaciones_HistoriaClinicaNestedInput
    cita?: CitaUpdateOneRequiredWithoutActualizaciones_HistoriaClinicaNestedInput
  }

  export type Actualizaciones_HistoriaClinicaUncheckedUpdateInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idCita?: IntFieldUpdateOperationsInput | number
    idHistoriaClinica?: IntFieldUpdateOperationsInput | number
    FActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Actualizaciones_HistoriaClinicaCreateManyInput = {
    idMedico: number
    idCita: number
    idHistoriaClinica: number
    FActualizacion?: Date | string
  }

  export type Actualizaciones_HistoriaClinicaUpdateManyMutationInput = {
    idHistoriaClinica?: IntFieldUpdateOperationsInput | number
    FActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Actualizaciones_HistoriaClinicaUncheckedUpdateManyInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idCita?: IntFieldUpdateOperationsInput | number
    idHistoriaClinica?: IntFieldUpdateOperationsInput | number
    FActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Medico_Preescribe_MedicamentoCreateInput = {
    idMedicamento: number
    idPaciente: number
    posologia: string
    particular?: string
    medico: MedicoCreateNestedOneWithoutMedico_Preescribe_MedicamentoInput
    cita: CitaCreateNestedOneWithoutMedico_Preescribe_MedicamentoInput
  }

  export type Medico_Preescribe_MedicamentoUncheckedCreateInput = {
    idMedico: number
    idCita: number
    idMedicamento: number
    idPaciente: number
    posologia: string
    particular?: string
  }

  export type Medico_Preescribe_MedicamentoUpdateInput = {
    idMedicamento?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    posologia?: StringFieldUpdateOperationsInput | string
    particular?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneRequiredWithoutMedico_Preescribe_MedicamentoNestedInput
    cita?: CitaUpdateOneRequiredWithoutMedico_Preescribe_MedicamentoNestedInput
  }

  export type Medico_Preescribe_MedicamentoUncheckedUpdateInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idCita?: IntFieldUpdateOperationsInput | number
    idMedicamento?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    posologia?: StringFieldUpdateOperationsInput | string
    particular?: StringFieldUpdateOperationsInput | string
  }

  export type Medico_Preescribe_MedicamentoCreateManyInput = {
    idMedico: number
    idCita: number
    idMedicamento: number
    idPaciente: number
    posologia: string
    particular?: string
  }

  export type Medico_Preescribe_MedicamentoUpdateManyMutationInput = {
    idMedicamento?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    posologia?: StringFieldUpdateOperationsInput | string
    particular?: StringFieldUpdateOperationsInput | string
  }

  export type Medico_Preescribe_MedicamentoUncheckedUpdateManyInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idCita?: IntFieldUpdateOperationsInput | number
    idMedicamento?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    posologia?: StringFieldUpdateOperationsInput | string
    particular?: StringFieldUpdateOperationsInput | string
  }

  export type Registro_Consulta_MedicamentoCreateInput = {
    idMedicamento: number
    FConsulta?: Date | string
    medico: MedicoCreateNestedOneWithoutRegistro_Consulta_MedicamentoInput
  }

  export type Registro_Consulta_MedicamentoUncheckedCreateInput = {
    idMedico: number
    idMedicamento: number
    FConsulta?: Date | string
  }

  export type Registro_Consulta_MedicamentoUpdateInput = {
    idMedicamento?: IntFieldUpdateOperationsInput | number
    FConsulta?: DateTimeFieldUpdateOperationsInput | Date | string
    medico?: MedicoUpdateOneRequiredWithoutRegistro_Consulta_MedicamentoNestedInput
  }

  export type Registro_Consulta_MedicamentoUncheckedUpdateInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idMedicamento?: IntFieldUpdateOperationsInput | number
    FConsulta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Registro_Consulta_MedicamentoCreateManyInput = {
    idMedico: number
    idMedicamento: number
    FConsulta?: Date | string
  }

  export type Registro_Consulta_MedicamentoUpdateManyMutationInput = {
    idMedicamento?: IntFieldUpdateOperationsInput | number
    FConsulta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Registro_Consulta_MedicamentoUncheckedUpdateManyInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idMedicamento?: IntFieldUpdateOperationsInput | number
    FConsulta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PAdmin_Gestiona_CitaCreateInput = {
    accion?: string
    FAccion?: Date | string
    pAdministrativo: PAdministrativoCreateNestedOneWithoutPAdmin_Gestiona_CitaInput
    cita: CitaCreateNestedOneWithoutPAdmin_Gestiona_CitaInput
  }

  export type PAdmin_Gestiona_CitaUncheckedCreateInput = {
    idPAdministrativo: number
    idCita: number
    accion?: string
    FAccion?: Date | string
  }

  export type PAdmin_Gestiona_CitaUpdateInput = {
    accion?: StringFieldUpdateOperationsInput | string
    FAccion?: DateTimeFieldUpdateOperationsInput | Date | string
    pAdministrativo?: PAdministrativoUpdateOneRequiredWithoutPAdmin_Gestiona_CitaNestedInput
    cita?: CitaUpdateOneRequiredWithoutPAdmin_Gestiona_CitaNestedInput
  }

  export type PAdmin_Gestiona_CitaUncheckedUpdateInput = {
    idPAdministrativo?: IntFieldUpdateOperationsInput | number
    idCita?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    FAccion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PAdmin_Gestiona_CitaCreateManyInput = {
    idPAdministrativo: number
    idCita: number
    accion?: string
    FAccion?: Date | string
  }

  export type PAdmin_Gestiona_CitaUpdateManyMutationInput = {
    accion?: StringFieldUpdateOperationsInput | string
    FAccion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PAdmin_Gestiona_CitaUncheckedUpdateManyInput = {
    idPAdministrativo?: IntFieldUpdateOperationsInput | number
    idCita?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    FAccion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticoCreateInput = {
    nombre: string
    medicoDictaminaDiagnostico?: Medico_dictamina_diagnosticoCreateNestedManyWithoutDiagnosticoInput
  }

  export type DiagnosticoUncheckedCreateInput = {
    idDiagnostico?: number
    nombre: string
    medicoDictaminaDiagnostico?: Medico_dictamina_diagnosticoUncheckedCreateNestedManyWithoutDiagnosticoInput
  }

  export type DiagnosticoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    medicoDictaminaDiagnostico?: Medico_dictamina_diagnosticoUpdateManyWithoutDiagnosticoNestedInput
  }

  export type DiagnosticoUncheckedUpdateInput = {
    idDiagnostico?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    medicoDictaminaDiagnostico?: Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutDiagnosticoNestedInput
  }

  export type DiagnosticoCreateManyInput = {
    idDiagnostico?: number
    nombre: string
  }

  export type DiagnosticoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticoUncheckedUpdateManyInput = {
    idDiagnostico?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type Medico_dictamina_diagnosticoCreateInput = {
    diagnostico: DiagnosticoCreateNestedOneWithoutMedicoDictaminaDiagnosticoInput
    medico: MedicoCreateNestedOneWithoutMedico_dictamina_diagnosticoInput
    cita: CitaCreateNestedOneWithoutMedico_dictamina_diagnosticoInput
  }

  export type Medico_dictamina_diagnosticoUncheckedCreateInput = {
    idDiagnostico: number
    idMedico: number
    idCita: number
  }

  export type Medico_dictamina_diagnosticoUpdateInput = {
    diagnostico?: DiagnosticoUpdateOneRequiredWithoutMedicoDictaminaDiagnosticoNestedInput
    medico?: MedicoUpdateOneRequiredWithoutMedico_dictamina_diagnosticoNestedInput
    cita?: CitaUpdateOneRequiredWithoutMedico_dictamina_diagnosticoNestedInput
  }

  export type Medico_dictamina_diagnosticoUncheckedUpdateInput = {
    idDiagnostico?: IntFieldUpdateOperationsInput | number
    idMedico?: IntFieldUpdateOperationsInput | number
    idCita?: IntFieldUpdateOperationsInput | number
  }

  export type Medico_dictamina_diagnosticoCreateManyInput = {
    idDiagnostico: number
    idMedico: number
    idCita: number
  }

  export type Medico_dictamina_diagnosticoUpdateManyMutationInput = {

  }

  export type Medico_dictamina_diagnosticoUncheckedUpdateManyInput = {
    idDiagnostico?: IntFieldUpdateOperationsInput | number
    idMedico?: IntFieldUpdateOperationsInput | number
    idCita?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Medico_EquipoListRelationFilter = {
    every?: Medico_EquipoWhereInput
    some?: Medico_EquipoWhereInput
    none?: Medico_EquipoWhereInput
  }

  export type Medico_EquipoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipamientoCountOrderByAggregateInput = {
    idEquipamiento?: SortOrder
    idDepartamento?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
    FContratacion?: SortOrder
  }

  export type EquipamientoAvgOrderByAggregateInput = {
    idEquipamiento?: SortOrder
    idDepartamento?: SortOrder
  }

  export type EquipamientoMaxOrderByAggregateInput = {
    idEquipamiento?: SortOrder
    idDepartamento?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
    FContratacion?: SortOrder
  }

  export type EquipamientoMinOrderByAggregateInput = {
    idEquipamiento?: SortOrder
    idDepartamento?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
    FContratacion?: SortOrder
  }

  export type EquipamientoSumOrderByAggregateInput = {
    idEquipamiento?: SortOrder
    idDepartamento?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type PAdministrativoListRelationFilter = {
    every?: PAdministrativoWhereInput
    some?: PAdministrativoWhereInput
    none?: PAdministrativoWhereInput
  }

  export type MedicoListRelationFilter = {
    every?: MedicoWhereInput
    some?: MedicoWhereInput
    none?: MedicoWhereInput
  }

  export type PAdministrativoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpleadoCountOrderByAggregateInput = {
    idEmpleado?: SortOrder
    idUsuario?: SortOrder
    idDepartamento?: SortOrder
    FContratacion?: SortOrder
    estado?: SortOrder
  }

  export type EmpleadoAvgOrderByAggregateInput = {
    idEmpleado?: SortOrder
    idUsuario?: SortOrder
    idDepartamento?: SortOrder
  }

  export type EmpleadoMaxOrderByAggregateInput = {
    idEmpleado?: SortOrder
    idUsuario?: SortOrder
    idDepartamento?: SortOrder
    FContratacion?: SortOrder
    estado?: SortOrder
  }

  export type EmpleadoMinOrderByAggregateInput = {
    idEmpleado?: SortOrder
    idUsuario?: SortOrder
    idDepartamento?: SortOrder
    FContratacion?: SortOrder
    estado?: SortOrder
  }

  export type EmpleadoSumOrderByAggregateInput = {
    idEmpleado?: SortOrder
    idUsuario?: SortOrder
    idDepartamento?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EmpleadoScalarRelationFilter = {
    is?: EmpleadoWhereInput
    isNot?: EmpleadoWhereInput
  }

  export type PAdmin_Modifica_PacienteListRelationFilter = {
    every?: PAdmin_Modifica_PacienteWhereInput
    some?: PAdmin_Modifica_PacienteWhereInput
    none?: PAdmin_Modifica_PacienteWhereInput
  }

  export type PAdmin_Gestiona_CitaListRelationFilter = {
    every?: PAdmin_Gestiona_CitaWhereInput
    some?: PAdmin_Gestiona_CitaWhereInput
    none?: PAdmin_Gestiona_CitaWhereInput
  }

  export type PAdmin_Modifica_PacienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PAdmin_Gestiona_CitaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PAdministrativoCountOrderByAggregateInput = {
    idPAdministrativo?: SortOrder
    idEmpleado?: SortOrder
    sueldo?: SortOrder
  }

  export type PAdministrativoAvgOrderByAggregateInput = {
    idPAdministrativo?: SortOrder
    idEmpleado?: SortOrder
    sueldo?: SortOrder
  }

  export type PAdministrativoMaxOrderByAggregateInput = {
    idPAdministrativo?: SortOrder
    idEmpleado?: SortOrder
    sueldo?: SortOrder
  }

  export type PAdministrativoMinOrderByAggregateInput = {
    idPAdministrativo?: SortOrder
    idEmpleado?: SortOrder
    sueldo?: SortOrder
  }

  export type PAdministrativoSumOrderByAggregateInput = {
    idPAdministrativo?: SortOrder
    idEmpleado?: SortOrder
    sueldo?: SortOrder
  }

  export type CitaListRelationFilter = {
    every?: CitaWhereInput
    some?: CitaWhereInput
    none?: CitaWhereInput
  }

  export type Actualizaciones_HistoriaClinicaListRelationFilter = {
    every?: Actualizaciones_HistoriaClinicaWhereInput
    some?: Actualizaciones_HistoriaClinicaWhereInput
    none?: Actualizaciones_HistoriaClinicaWhereInput
  }

  export type Medico_Preescribe_MedicamentoListRelationFilter = {
    every?: Medico_Preescribe_MedicamentoWhereInput
    some?: Medico_Preescribe_MedicamentoWhereInput
    none?: Medico_Preescribe_MedicamentoWhereInput
  }

  export type Registro_Consulta_MedicamentoListRelationFilter = {
    every?: Registro_Consulta_MedicamentoWhereInput
    some?: Registro_Consulta_MedicamentoWhereInput
    none?: Registro_Consulta_MedicamentoWhereInput
  }

  export type Medico_dictamina_diagnosticoListRelationFilter = {
    every?: Medico_dictamina_diagnosticoWhereInput
    some?: Medico_dictamina_diagnosticoWhereInput
    none?: Medico_dictamina_diagnosticoWhereInput
  }

  export type CitaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Actualizaciones_HistoriaClinicaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Medico_Preescribe_MedicamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Registro_Consulta_MedicamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Medico_dictamina_diagnosticoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicoCountOrderByAggregateInput = {
    idMedico?: SortOrder
    idEmpleado?: SortOrder
    sueldo?: SortOrder
  }

  export type MedicoAvgOrderByAggregateInput = {
    idMedico?: SortOrder
    idEmpleado?: SortOrder
    sueldo?: SortOrder
  }

  export type MedicoMaxOrderByAggregateInput = {
    idMedico?: SortOrder
    idEmpleado?: SortOrder
    sueldo?: SortOrder
  }

  export type MedicoMinOrderByAggregateInput = {
    idMedico?: SortOrder
    idEmpleado?: SortOrder
    sueldo?: SortOrder
  }

  export type MedicoSumOrderByAggregateInput = {
    idMedico?: SortOrder
    idEmpleado?: SortOrder
    sueldo?: SortOrder
  }

  export type MedicoScalarRelationFilter = {
    is?: MedicoWhereInput
    isNot?: MedicoWhereInput
  }

  export type EquipamientoScalarRelationFilter = {
    is?: EquipamientoWhereInput
    isNot?: EquipamientoWhereInput
  }

  export type Medico_EquipoIdMedicoIdEquipamientoCompoundUniqueInput = {
    idMedico: number
    idEquipamiento: number
  }

  export type Medico_EquipoCountOrderByAggregateInput = {
    idMedico?: SortOrder
    idEquipamiento?: SortOrder
    FPrestamo?: SortOrder
    FDevolucion?: SortOrder
  }

  export type Medico_EquipoAvgOrderByAggregateInput = {
    idMedico?: SortOrder
    idEquipamiento?: SortOrder
  }

  export type Medico_EquipoMaxOrderByAggregateInput = {
    idMedico?: SortOrder
    idEquipamiento?: SortOrder
    FPrestamo?: SortOrder
    FDevolucion?: SortOrder
  }

  export type Medico_EquipoMinOrderByAggregateInput = {
    idMedico?: SortOrder
    idEquipamiento?: SortOrder
    FPrestamo?: SortOrder
    FDevolucion?: SortOrder
  }

  export type Medico_EquipoSumOrderByAggregateInput = {
    idMedico?: SortOrder
    idEquipamiento?: SortOrder
  }

  export type CitaCountOrderByAggregateInput = {
    idCita?: SortOrder
    idPaciente?: SortOrder
    idMedico?: SortOrder
    fechaYHora?: SortOrder
    estado?: SortOrder
    resumen?: SortOrder
  }

  export type CitaAvgOrderByAggregateInput = {
    idCita?: SortOrder
    idPaciente?: SortOrder
    idMedico?: SortOrder
  }

  export type CitaMaxOrderByAggregateInput = {
    idCita?: SortOrder
    idPaciente?: SortOrder
    idMedico?: SortOrder
    fechaYHora?: SortOrder
    estado?: SortOrder
    resumen?: SortOrder
  }

  export type CitaMinOrderByAggregateInput = {
    idCita?: SortOrder
    idPaciente?: SortOrder
    idMedico?: SortOrder
    fechaYHora?: SortOrder
    estado?: SortOrder
    resumen?: SortOrder
  }

  export type CitaSumOrderByAggregateInput = {
    idCita?: SortOrder
    idPaciente?: SortOrder
    idMedico?: SortOrder
  }

  export type PAdministrativoScalarRelationFilter = {
    is?: PAdministrativoWhereInput
    isNot?: PAdministrativoWhereInput
  }

  export type PAdmin_Modifica_PacienteIdPAdministrativoIdPacienteCompoundUniqueInput = {
    idPAdministrativo: number
    idPaciente: number
  }

  export type PAdmin_Modifica_PacienteCountOrderByAggregateInput = {
    idPAdministrativo?: SortOrder
    idPaciente?: SortOrder
    FModificacion?: SortOrder
    descripcion?: SortOrder
  }

  export type PAdmin_Modifica_PacienteAvgOrderByAggregateInput = {
    idPAdministrativo?: SortOrder
    idPaciente?: SortOrder
  }

  export type PAdmin_Modifica_PacienteMaxOrderByAggregateInput = {
    idPAdministrativo?: SortOrder
    idPaciente?: SortOrder
    FModificacion?: SortOrder
    descripcion?: SortOrder
  }

  export type PAdmin_Modifica_PacienteMinOrderByAggregateInput = {
    idPAdministrativo?: SortOrder
    idPaciente?: SortOrder
    FModificacion?: SortOrder
    descripcion?: SortOrder
  }

  export type PAdmin_Modifica_PacienteSumOrderByAggregateInput = {
    idPAdministrativo?: SortOrder
    idPaciente?: SortOrder
  }

  export type CitaScalarRelationFilter = {
    is?: CitaWhereInput
    isNot?: CitaWhereInput
  }

  export type Actualizaciones_HistoriaClinicaIdMedicoIdCitaIdHistoriaClinicaCompoundUniqueInput = {
    idMedico: number
    idCita: number
    idHistoriaClinica: number
  }

  export type Actualizaciones_HistoriaClinicaCountOrderByAggregateInput = {
    idMedico?: SortOrder
    idCita?: SortOrder
    idHistoriaClinica?: SortOrder
    FActualizacion?: SortOrder
  }

  export type Actualizaciones_HistoriaClinicaAvgOrderByAggregateInput = {
    idMedico?: SortOrder
    idCita?: SortOrder
    idHistoriaClinica?: SortOrder
  }

  export type Actualizaciones_HistoriaClinicaMaxOrderByAggregateInput = {
    idMedico?: SortOrder
    idCita?: SortOrder
    idHistoriaClinica?: SortOrder
    FActualizacion?: SortOrder
  }

  export type Actualizaciones_HistoriaClinicaMinOrderByAggregateInput = {
    idMedico?: SortOrder
    idCita?: SortOrder
    idHistoriaClinica?: SortOrder
    FActualizacion?: SortOrder
  }

  export type Actualizaciones_HistoriaClinicaSumOrderByAggregateInput = {
    idMedico?: SortOrder
    idCita?: SortOrder
    idHistoriaClinica?: SortOrder
  }

  export type Medico_Preescribe_MedicamentoIdMedicoIdCitaIdMedicamentoIdPacienteCompoundUniqueInput = {
    idMedico: number
    idCita: number
    idMedicamento: number
    idPaciente: number
  }

  export type Medico_Preescribe_MedicamentoCountOrderByAggregateInput = {
    idMedico?: SortOrder
    idCita?: SortOrder
    idMedicamento?: SortOrder
    idPaciente?: SortOrder
    posologia?: SortOrder
    particular?: SortOrder
  }

  export type Medico_Preescribe_MedicamentoAvgOrderByAggregateInput = {
    idMedico?: SortOrder
    idCita?: SortOrder
    idMedicamento?: SortOrder
    idPaciente?: SortOrder
  }

  export type Medico_Preescribe_MedicamentoMaxOrderByAggregateInput = {
    idMedico?: SortOrder
    idCita?: SortOrder
    idMedicamento?: SortOrder
    idPaciente?: SortOrder
    posologia?: SortOrder
    particular?: SortOrder
  }

  export type Medico_Preescribe_MedicamentoMinOrderByAggregateInput = {
    idMedico?: SortOrder
    idCita?: SortOrder
    idMedicamento?: SortOrder
    idPaciente?: SortOrder
    posologia?: SortOrder
    particular?: SortOrder
  }

  export type Medico_Preescribe_MedicamentoSumOrderByAggregateInput = {
    idMedico?: SortOrder
    idCita?: SortOrder
    idMedicamento?: SortOrder
    idPaciente?: SortOrder
  }

  export type Registro_Consulta_MedicamentoIdMedicoIdMedicamentoCompoundUniqueInput = {
    idMedico: number
    idMedicamento: number
  }

  export type Registro_Consulta_MedicamentoCountOrderByAggregateInput = {
    idMedico?: SortOrder
    idMedicamento?: SortOrder
    FConsulta?: SortOrder
  }

  export type Registro_Consulta_MedicamentoAvgOrderByAggregateInput = {
    idMedico?: SortOrder
    idMedicamento?: SortOrder
  }

  export type Registro_Consulta_MedicamentoMaxOrderByAggregateInput = {
    idMedico?: SortOrder
    idMedicamento?: SortOrder
    FConsulta?: SortOrder
  }

  export type Registro_Consulta_MedicamentoMinOrderByAggregateInput = {
    idMedico?: SortOrder
    idMedicamento?: SortOrder
    FConsulta?: SortOrder
  }

  export type Registro_Consulta_MedicamentoSumOrderByAggregateInput = {
    idMedico?: SortOrder
    idMedicamento?: SortOrder
  }

  export type PAdmin_Gestiona_CitaIdPAdministrativoIdCitaCompoundUniqueInput = {
    idPAdministrativo: number
    idCita: number
  }

  export type PAdmin_Gestiona_CitaCountOrderByAggregateInput = {
    idPAdministrativo?: SortOrder
    idCita?: SortOrder
    accion?: SortOrder
    FAccion?: SortOrder
  }

  export type PAdmin_Gestiona_CitaAvgOrderByAggregateInput = {
    idPAdministrativo?: SortOrder
    idCita?: SortOrder
  }

  export type PAdmin_Gestiona_CitaMaxOrderByAggregateInput = {
    idPAdministrativo?: SortOrder
    idCita?: SortOrder
    accion?: SortOrder
    FAccion?: SortOrder
  }

  export type PAdmin_Gestiona_CitaMinOrderByAggregateInput = {
    idPAdministrativo?: SortOrder
    idCita?: SortOrder
    accion?: SortOrder
    FAccion?: SortOrder
  }

  export type PAdmin_Gestiona_CitaSumOrderByAggregateInput = {
    idPAdministrativo?: SortOrder
    idCita?: SortOrder
  }

  export type DiagnosticoCountOrderByAggregateInput = {
    idDiagnostico?: SortOrder
    nombre?: SortOrder
  }

  export type DiagnosticoAvgOrderByAggregateInput = {
    idDiagnostico?: SortOrder
  }

  export type DiagnosticoMaxOrderByAggregateInput = {
    idDiagnostico?: SortOrder
    nombre?: SortOrder
  }

  export type DiagnosticoMinOrderByAggregateInput = {
    idDiagnostico?: SortOrder
    nombre?: SortOrder
  }

  export type DiagnosticoSumOrderByAggregateInput = {
    idDiagnostico?: SortOrder
  }

  export type DiagnosticoScalarRelationFilter = {
    is?: DiagnosticoWhereInput
    isNot?: DiagnosticoWhereInput
  }

  export type Medico_dictamina_diagnosticoIdDiagnosticoIdMedicoIdCitaCompoundUniqueInput = {
    idDiagnostico: number
    idMedico: number
    idCita: number
  }

  export type Medico_dictamina_diagnosticoCountOrderByAggregateInput = {
    idDiagnostico?: SortOrder
    idMedico?: SortOrder
    idCita?: SortOrder
  }

  export type Medico_dictamina_diagnosticoAvgOrderByAggregateInput = {
    idDiagnostico?: SortOrder
    idMedico?: SortOrder
    idCita?: SortOrder
  }

  export type Medico_dictamina_diagnosticoMaxOrderByAggregateInput = {
    idDiagnostico?: SortOrder
    idMedico?: SortOrder
    idCita?: SortOrder
  }

  export type Medico_dictamina_diagnosticoMinOrderByAggregateInput = {
    idDiagnostico?: SortOrder
    idMedico?: SortOrder
    idCita?: SortOrder
  }

  export type Medico_dictamina_diagnosticoSumOrderByAggregateInput = {
    idDiagnostico?: SortOrder
    idMedico?: SortOrder
    idCita?: SortOrder
  }

  export type Medico_EquipoCreateNestedManyWithoutEquipamientoInput = {
    create?: XOR<Medico_EquipoCreateWithoutEquipamientoInput, Medico_EquipoUncheckedCreateWithoutEquipamientoInput> | Medico_EquipoCreateWithoutEquipamientoInput[] | Medico_EquipoUncheckedCreateWithoutEquipamientoInput[]
    connectOrCreate?: Medico_EquipoCreateOrConnectWithoutEquipamientoInput | Medico_EquipoCreateOrConnectWithoutEquipamientoInput[]
    createMany?: Medico_EquipoCreateManyEquipamientoInputEnvelope
    connect?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
  }

  export type Medico_EquipoUncheckedCreateNestedManyWithoutEquipamientoInput = {
    create?: XOR<Medico_EquipoCreateWithoutEquipamientoInput, Medico_EquipoUncheckedCreateWithoutEquipamientoInput> | Medico_EquipoCreateWithoutEquipamientoInput[] | Medico_EquipoUncheckedCreateWithoutEquipamientoInput[]
    connectOrCreate?: Medico_EquipoCreateOrConnectWithoutEquipamientoInput | Medico_EquipoCreateOrConnectWithoutEquipamientoInput[]
    createMany?: Medico_EquipoCreateManyEquipamientoInputEnvelope
    connect?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Medico_EquipoUpdateManyWithoutEquipamientoNestedInput = {
    create?: XOR<Medico_EquipoCreateWithoutEquipamientoInput, Medico_EquipoUncheckedCreateWithoutEquipamientoInput> | Medico_EquipoCreateWithoutEquipamientoInput[] | Medico_EquipoUncheckedCreateWithoutEquipamientoInput[]
    connectOrCreate?: Medico_EquipoCreateOrConnectWithoutEquipamientoInput | Medico_EquipoCreateOrConnectWithoutEquipamientoInput[]
    upsert?: Medico_EquipoUpsertWithWhereUniqueWithoutEquipamientoInput | Medico_EquipoUpsertWithWhereUniqueWithoutEquipamientoInput[]
    createMany?: Medico_EquipoCreateManyEquipamientoInputEnvelope
    set?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
    disconnect?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
    delete?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
    connect?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
    update?: Medico_EquipoUpdateWithWhereUniqueWithoutEquipamientoInput | Medico_EquipoUpdateWithWhereUniqueWithoutEquipamientoInput[]
    updateMany?: Medico_EquipoUpdateManyWithWhereWithoutEquipamientoInput | Medico_EquipoUpdateManyWithWhereWithoutEquipamientoInput[]
    deleteMany?: Medico_EquipoScalarWhereInput | Medico_EquipoScalarWhereInput[]
  }

  export type Medico_EquipoUncheckedUpdateManyWithoutEquipamientoNestedInput = {
    create?: XOR<Medico_EquipoCreateWithoutEquipamientoInput, Medico_EquipoUncheckedCreateWithoutEquipamientoInput> | Medico_EquipoCreateWithoutEquipamientoInput[] | Medico_EquipoUncheckedCreateWithoutEquipamientoInput[]
    connectOrCreate?: Medico_EquipoCreateOrConnectWithoutEquipamientoInput | Medico_EquipoCreateOrConnectWithoutEquipamientoInput[]
    upsert?: Medico_EquipoUpsertWithWhereUniqueWithoutEquipamientoInput | Medico_EquipoUpsertWithWhereUniqueWithoutEquipamientoInput[]
    createMany?: Medico_EquipoCreateManyEquipamientoInputEnvelope
    set?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
    disconnect?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
    delete?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
    connect?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
    update?: Medico_EquipoUpdateWithWhereUniqueWithoutEquipamientoInput | Medico_EquipoUpdateWithWhereUniqueWithoutEquipamientoInput[]
    updateMany?: Medico_EquipoUpdateManyWithWhereWithoutEquipamientoInput | Medico_EquipoUpdateManyWithWhereWithoutEquipamientoInput[]
    deleteMany?: Medico_EquipoScalarWhereInput | Medico_EquipoScalarWhereInput[]
  }

  export type PAdministrativoCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<PAdministrativoCreateWithoutEmpleadoInput, PAdministrativoUncheckedCreateWithoutEmpleadoInput> | PAdministrativoCreateWithoutEmpleadoInput[] | PAdministrativoUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: PAdministrativoCreateOrConnectWithoutEmpleadoInput | PAdministrativoCreateOrConnectWithoutEmpleadoInput[]
    createMany?: PAdministrativoCreateManyEmpleadoInputEnvelope
    connect?: PAdministrativoWhereUniqueInput | PAdministrativoWhereUniqueInput[]
  }

  export type MedicoCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<MedicoCreateWithoutEmpleadoInput, MedicoUncheckedCreateWithoutEmpleadoInput> | MedicoCreateWithoutEmpleadoInput[] | MedicoUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: MedicoCreateOrConnectWithoutEmpleadoInput | MedicoCreateOrConnectWithoutEmpleadoInput[]
    createMany?: MedicoCreateManyEmpleadoInputEnvelope
    connect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
  }

  export type PAdministrativoUncheckedCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<PAdministrativoCreateWithoutEmpleadoInput, PAdministrativoUncheckedCreateWithoutEmpleadoInput> | PAdministrativoCreateWithoutEmpleadoInput[] | PAdministrativoUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: PAdministrativoCreateOrConnectWithoutEmpleadoInput | PAdministrativoCreateOrConnectWithoutEmpleadoInput[]
    createMany?: PAdministrativoCreateManyEmpleadoInputEnvelope
    connect?: PAdministrativoWhereUniqueInput | PAdministrativoWhereUniqueInput[]
  }

  export type MedicoUncheckedCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<MedicoCreateWithoutEmpleadoInput, MedicoUncheckedCreateWithoutEmpleadoInput> | MedicoCreateWithoutEmpleadoInput[] | MedicoUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: MedicoCreateOrConnectWithoutEmpleadoInput | MedicoCreateOrConnectWithoutEmpleadoInput[]
    createMany?: MedicoCreateManyEmpleadoInputEnvelope
    connect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type PAdministrativoUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<PAdministrativoCreateWithoutEmpleadoInput, PAdministrativoUncheckedCreateWithoutEmpleadoInput> | PAdministrativoCreateWithoutEmpleadoInput[] | PAdministrativoUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: PAdministrativoCreateOrConnectWithoutEmpleadoInput | PAdministrativoCreateOrConnectWithoutEmpleadoInput[]
    upsert?: PAdministrativoUpsertWithWhereUniqueWithoutEmpleadoInput | PAdministrativoUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: PAdministrativoCreateManyEmpleadoInputEnvelope
    set?: PAdministrativoWhereUniqueInput | PAdministrativoWhereUniqueInput[]
    disconnect?: PAdministrativoWhereUniqueInput | PAdministrativoWhereUniqueInput[]
    delete?: PAdministrativoWhereUniqueInput | PAdministrativoWhereUniqueInput[]
    connect?: PAdministrativoWhereUniqueInput | PAdministrativoWhereUniqueInput[]
    update?: PAdministrativoUpdateWithWhereUniqueWithoutEmpleadoInput | PAdministrativoUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: PAdministrativoUpdateManyWithWhereWithoutEmpleadoInput | PAdministrativoUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: PAdministrativoScalarWhereInput | PAdministrativoScalarWhereInput[]
  }

  export type MedicoUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<MedicoCreateWithoutEmpleadoInput, MedicoUncheckedCreateWithoutEmpleadoInput> | MedicoCreateWithoutEmpleadoInput[] | MedicoUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: MedicoCreateOrConnectWithoutEmpleadoInput | MedicoCreateOrConnectWithoutEmpleadoInput[]
    upsert?: MedicoUpsertWithWhereUniqueWithoutEmpleadoInput | MedicoUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: MedicoCreateManyEmpleadoInputEnvelope
    set?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    disconnect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    delete?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    connect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    update?: MedicoUpdateWithWhereUniqueWithoutEmpleadoInput | MedicoUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: MedicoUpdateManyWithWhereWithoutEmpleadoInput | MedicoUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: MedicoScalarWhereInput | MedicoScalarWhereInput[]
  }

  export type PAdministrativoUncheckedUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<PAdministrativoCreateWithoutEmpleadoInput, PAdministrativoUncheckedCreateWithoutEmpleadoInput> | PAdministrativoCreateWithoutEmpleadoInput[] | PAdministrativoUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: PAdministrativoCreateOrConnectWithoutEmpleadoInput | PAdministrativoCreateOrConnectWithoutEmpleadoInput[]
    upsert?: PAdministrativoUpsertWithWhereUniqueWithoutEmpleadoInput | PAdministrativoUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: PAdministrativoCreateManyEmpleadoInputEnvelope
    set?: PAdministrativoWhereUniqueInput | PAdministrativoWhereUniqueInput[]
    disconnect?: PAdministrativoWhereUniqueInput | PAdministrativoWhereUniqueInput[]
    delete?: PAdministrativoWhereUniqueInput | PAdministrativoWhereUniqueInput[]
    connect?: PAdministrativoWhereUniqueInput | PAdministrativoWhereUniqueInput[]
    update?: PAdministrativoUpdateWithWhereUniqueWithoutEmpleadoInput | PAdministrativoUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: PAdministrativoUpdateManyWithWhereWithoutEmpleadoInput | PAdministrativoUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: PAdministrativoScalarWhereInput | PAdministrativoScalarWhereInput[]
  }

  export type MedicoUncheckedUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<MedicoCreateWithoutEmpleadoInput, MedicoUncheckedCreateWithoutEmpleadoInput> | MedicoCreateWithoutEmpleadoInput[] | MedicoUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: MedicoCreateOrConnectWithoutEmpleadoInput | MedicoCreateOrConnectWithoutEmpleadoInput[]
    upsert?: MedicoUpsertWithWhereUniqueWithoutEmpleadoInput | MedicoUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: MedicoCreateManyEmpleadoInputEnvelope
    set?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    disconnect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    delete?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    connect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    update?: MedicoUpdateWithWhereUniqueWithoutEmpleadoInput | MedicoUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: MedicoUpdateManyWithWhereWithoutEmpleadoInput | MedicoUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: MedicoScalarWhereInput | MedicoScalarWhereInput[]
  }

  export type EmpleadoCreateNestedOneWithoutPAdministrativoInput = {
    create?: XOR<EmpleadoCreateWithoutPAdministrativoInput, EmpleadoUncheckedCreateWithoutPAdministrativoInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutPAdministrativoInput
    connect?: EmpleadoWhereUniqueInput
  }

  export type PAdmin_Modifica_PacienteCreateNestedManyWithoutPAdministrativoInput = {
    create?: XOR<PAdmin_Modifica_PacienteCreateWithoutPAdministrativoInput, PAdmin_Modifica_PacienteUncheckedCreateWithoutPAdministrativoInput> | PAdmin_Modifica_PacienteCreateWithoutPAdministrativoInput[] | PAdmin_Modifica_PacienteUncheckedCreateWithoutPAdministrativoInput[]
    connectOrCreate?: PAdmin_Modifica_PacienteCreateOrConnectWithoutPAdministrativoInput | PAdmin_Modifica_PacienteCreateOrConnectWithoutPAdministrativoInput[]
    createMany?: PAdmin_Modifica_PacienteCreateManyPAdministrativoInputEnvelope
    connect?: PAdmin_Modifica_PacienteWhereUniqueInput | PAdmin_Modifica_PacienteWhereUniqueInput[]
  }

  export type PAdmin_Gestiona_CitaCreateNestedManyWithoutPAdministrativoInput = {
    create?: XOR<PAdmin_Gestiona_CitaCreateWithoutPAdministrativoInput, PAdmin_Gestiona_CitaUncheckedCreateWithoutPAdministrativoInput> | PAdmin_Gestiona_CitaCreateWithoutPAdministrativoInput[] | PAdmin_Gestiona_CitaUncheckedCreateWithoutPAdministrativoInput[]
    connectOrCreate?: PAdmin_Gestiona_CitaCreateOrConnectWithoutPAdministrativoInput | PAdmin_Gestiona_CitaCreateOrConnectWithoutPAdministrativoInput[]
    createMany?: PAdmin_Gestiona_CitaCreateManyPAdministrativoInputEnvelope
    connect?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
  }

  export type PAdmin_Modifica_PacienteUncheckedCreateNestedManyWithoutPAdministrativoInput = {
    create?: XOR<PAdmin_Modifica_PacienteCreateWithoutPAdministrativoInput, PAdmin_Modifica_PacienteUncheckedCreateWithoutPAdministrativoInput> | PAdmin_Modifica_PacienteCreateWithoutPAdministrativoInput[] | PAdmin_Modifica_PacienteUncheckedCreateWithoutPAdministrativoInput[]
    connectOrCreate?: PAdmin_Modifica_PacienteCreateOrConnectWithoutPAdministrativoInput | PAdmin_Modifica_PacienteCreateOrConnectWithoutPAdministrativoInput[]
    createMany?: PAdmin_Modifica_PacienteCreateManyPAdministrativoInputEnvelope
    connect?: PAdmin_Modifica_PacienteWhereUniqueInput | PAdmin_Modifica_PacienteWhereUniqueInput[]
  }

  export type PAdmin_Gestiona_CitaUncheckedCreateNestedManyWithoutPAdministrativoInput = {
    create?: XOR<PAdmin_Gestiona_CitaCreateWithoutPAdministrativoInput, PAdmin_Gestiona_CitaUncheckedCreateWithoutPAdministrativoInput> | PAdmin_Gestiona_CitaCreateWithoutPAdministrativoInput[] | PAdmin_Gestiona_CitaUncheckedCreateWithoutPAdministrativoInput[]
    connectOrCreate?: PAdmin_Gestiona_CitaCreateOrConnectWithoutPAdministrativoInput | PAdmin_Gestiona_CitaCreateOrConnectWithoutPAdministrativoInput[]
    createMany?: PAdmin_Gestiona_CitaCreateManyPAdministrativoInputEnvelope
    connect?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
  }

  export type EmpleadoUpdateOneRequiredWithoutPAdministrativoNestedInput = {
    create?: XOR<EmpleadoCreateWithoutPAdministrativoInput, EmpleadoUncheckedCreateWithoutPAdministrativoInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutPAdministrativoInput
    upsert?: EmpleadoUpsertWithoutPAdministrativoInput
    connect?: EmpleadoWhereUniqueInput
    update?: XOR<XOR<EmpleadoUpdateToOneWithWhereWithoutPAdministrativoInput, EmpleadoUpdateWithoutPAdministrativoInput>, EmpleadoUncheckedUpdateWithoutPAdministrativoInput>
  }

  export type PAdmin_Modifica_PacienteUpdateManyWithoutPAdministrativoNestedInput = {
    create?: XOR<PAdmin_Modifica_PacienteCreateWithoutPAdministrativoInput, PAdmin_Modifica_PacienteUncheckedCreateWithoutPAdministrativoInput> | PAdmin_Modifica_PacienteCreateWithoutPAdministrativoInput[] | PAdmin_Modifica_PacienteUncheckedCreateWithoutPAdministrativoInput[]
    connectOrCreate?: PAdmin_Modifica_PacienteCreateOrConnectWithoutPAdministrativoInput | PAdmin_Modifica_PacienteCreateOrConnectWithoutPAdministrativoInput[]
    upsert?: PAdmin_Modifica_PacienteUpsertWithWhereUniqueWithoutPAdministrativoInput | PAdmin_Modifica_PacienteUpsertWithWhereUniqueWithoutPAdministrativoInput[]
    createMany?: PAdmin_Modifica_PacienteCreateManyPAdministrativoInputEnvelope
    set?: PAdmin_Modifica_PacienteWhereUniqueInput | PAdmin_Modifica_PacienteWhereUniqueInput[]
    disconnect?: PAdmin_Modifica_PacienteWhereUniqueInput | PAdmin_Modifica_PacienteWhereUniqueInput[]
    delete?: PAdmin_Modifica_PacienteWhereUniqueInput | PAdmin_Modifica_PacienteWhereUniqueInput[]
    connect?: PAdmin_Modifica_PacienteWhereUniqueInput | PAdmin_Modifica_PacienteWhereUniqueInput[]
    update?: PAdmin_Modifica_PacienteUpdateWithWhereUniqueWithoutPAdministrativoInput | PAdmin_Modifica_PacienteUpdateWithWhereUniqueWithoutPAdministrativoInput[]
    updateMany?: PAdmin_Modifica_PacienteUpdateManyWithWhereWithoutPAdministrativoInput | PAdmin_Modifica_PacienteUpdateManyWithWhereWithoutPAdministrativoInput[]
    deleteMany?: PAdmin_Modifica_PacienteScalarWhereInput | PAdmin_Modifica_PacienteScalarWhereInput[]
  }

  export type PAdmin_Gestiona_CitaUpdateManyWithoutPAdministrativoNestedInput = {
    create?: XOR<PAdmin_Gestiona_CitaCreateWithoutPAdministrativoInput, PAdmin_Gestiona_CitaUncheckedCreateWithoutPAdministrativoInput> | PAdmin_Gestiona_CitaCreateWithoutPAdministrativoInput[] | PAdmin_Gestiona_CitaUncheckedCreateWithoutPAdministrativoInput[]
    connectOrCreate?: PAdmin_Gestiona_CitaCreateOrConnectWithoutPAdministrativoInput | PAdmin_Gestiona_CitaCreateOrConnectWithoutPAdministrativoInput[]
    upsert?: PAdmin_Gestiona_CitaUpsertWithWhereUniqueWithoutPAdministrativoInput | PAdmin_Gestiona_CitaUpsertWithWhereUniqueWithoutPAdministrativoInput[]
    createMany?: PAdmin_Gestiona_CitaCreateManyPAdministrativoInputEnvelope
    set?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
    disconnect?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
    delete?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
    connect?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
    update?: PAdmin_Gestiona_CitaUpdateWithWhereUniqueWithoutPAdministrativoInput | PAdmin_Gestiona_CitaUpdateWithWhereUniqueWithoutPAdministrativoInput[]
    updateMany?: PAdmin_Gestiona_CitaUpdateManyWithWhereWithoutPAdministrativoInput | PAdmin_Gestiona_CitaUpdateManyWithWhereWithoutPAdministrativoInput[]
    deleteMany?: PAdmin_Gestiona_CitaScalarWhereInput | PAdmin_Gestiona_CitaScalarWhereInput[]
  }

  export type PAdmin_Modifica_PacienteUncheckedUpdateManyWithoutPAdministrativoNestedInput = {
    create?: XOR<PAdmin_Modifica_PacienteCreateWithoutPAdministrativoInput, PAdmin_Modifica_PacienteUncheckedCreateWithoutPAdministrativoInput> | PAdmin_Modifica_PacienteCreateWithoutPAdministrativoInput[] | PAdmin_Modifica_PacienteUncheckedCreateWithoutPAdministrativoInput[]
    connectOrCreate?: PAdmin_Modifica_PacienteCreateOrConnectWithoutPAdministrativoInput | PAdmin_Modifica_PacienteCreateOrConnectWithoutPAdministrativoInput[]
    upsert?: PAdmin_Modifica_PacienteUpsertWithWhereUniqueWithoutPAdministrativoInput | PAdmin_Modifica_PacienteUpsertWithWhereUniqueWithoutPAdministrativoInput[]
    createMany?: PAdmin_Modifica_PacienteCreateManyPAdministrativoInputEnvelope
    set?: PAdmin_Modifica_PacienteWhereUniqueInput | PAdmin_Modifica_PacienteWhereUniqueInput[]
    disconnect?: PAdmin_Modifica_PacienteWhereUniqueInput | PAdmin_Modifica_PacienteWhereUniqueInput[]
    delete?: PAdmin_Modifica_PacienteWhereUniqueInput | PAdmin_Modifica_PacienteWhereUniqueInput[]
    connect?: PAdmin_Modifica_PacienteWhereUniqueInput | PAdmin_Modifica_PacienteWhereUniqueInput[]
    update?: PAdmin_Modifica_PacienteUpdateWithWhereUniqueWithoutPAdministrativoInput | PAdmin_Modifica_PacienteUpdateWithWhereUniqueWithoutPAdministrativoInput[]
    updateMany?: PAdmin_Modifica_PacienteUpdateManyWithWhereWithoutPAdministrativoInput | PAdmin_Modifica_PacienteUpdateManyWithWhereWithoutPAdministrativoInput[]
    deleteMany?: PAdmin_Modifica_PacienteScalarWhereInput | PAdmin_Modifica_PacienteScalarWhereInput[]
  }

  export type PAdmin_Gestiona_CitaUncheckedUpdateManyWithoutPAdministrativoNestedInput = {
    create?: XOR<PAdmin_Gestiona_CitaCreateWithoutPAdministrativoInput, PAdmin_Gestiona_CitaUncheckedCreateWithoutPAdministrativoInput> | PAdmin_Gestiona_CitaCreateWithoutPAdministrativoInput[] | PAdmin_Gestiona_CitaUncheckedCreateWithoutPAdministrativoInput[]
    connectOrCreate?: PAdmin_Gestiona_CitaCreateOrConnectWithoutPAdministrativoInput | PAdmin_Gestiona_CitaCreateOrConnectWithoutPAdministrativoInput[]
    upsert?: PAdmin_Gestiona_CitaUpsertWithWhereUniqueWithoutPAdministrativoInput | PAdmin_Gestiona_CitaUpsertWithWhereUniqueWithoutPAdministrativoInput[]
    createMany?: PAdmin_Gestiona_CitaCreateManyPAdministrativoInputEnvelope
    set?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
    disconnect?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
    delete?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
    connect?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
    update?: PAdmin_Gestiona_CitaUpdateWithWhereUniqueWithoutPAdministrativoInput | PAdmin_Gestiona_CitaUpdateWithWhereUniqueWithoutPAdministrativoInput[]
    updateMany?: PAdmin_Gestiona_CitaUpdateManyWithWhereWithoutPAdministrativoInput | PAdmin_Gestiona_CitaUpdateManyWithWhereWithoutPAdministrativoInput[]
    deleteMany?: PAdmin_Gestiona_CitaScalarWhereInput | PAdmin_Gestiona_CitaScalarWhereInput[]
  }

  export type EmpleadoCreateNestedOneWithoutMedicoInput = {
    create?: XOR<EmpleadoCreateWithoutMedicoInput, EmpleadoUncheckedCreateWithoutMedicoInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutMedicoInput
    connect?: EmpleadoWhereUniqueInput
  }

  export type Medico_EquipoCreateNestedManyWithoutMedicoInput = {
    create?: XOR<Medico_EquipoCreateWithoutMedicoInput, Medico_EquipoUncheckedCreateWithoutMedicoInput> | Medico_EquipoCreateWithoutMedicoInput[] | Medico_EquipoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Medico_EquipoCreateOrConnectWithoutMedicoInput | Medico_EquipoCreateOrConnectWithoutMedicoInput[]
    createMany?: Medico_EquipoCreateManyMedicoInputEnvelope
    connect?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
  }

  export type CitaCreateNestedManyWithoutMedicoInput = {
    create?: XOR<CitaCreateWithoutMedicoInput, CitaUncheckedCreateWithoutMedicoInput> | CitaCreateWithoutMedicoInput[] | CitaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutMedicoInput | CitaCreateOrConnectWithoutMedicoInput[]
    createMany?: CitaCreateManyMedicoInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type Actualizaciones_HistoriaClinicaCreateNestedManyWithoutMedicoInput = {
    create?: XOR<Actualizaciones_HistoriaClinicaCreateWithoutMedicoInput, Actualizaciones_HistoriaClinicaUncheckedCreateWithoutMedicoInput> | Actualizaciones_HistoriaClinicaCreateWithoutMedicoInput[] | Actualizaciones_HistoriaClinicaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Actualizaciones_HistoriaClinicaCreateOrConnectWithoutMedicoInput | Actualizaciones_HistoriaClinicaCreateOrConnectWithoutMedicoInput[]
    createMany?: Actualizaciones_HistoriaClinicaCreateManyMedicoInputEnvelope
    connect?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
  }

  export type Medico_Preescribe_MedicamentoCreateNestedManyWithoutMedicoInput = {
    create?: XOR<Medico_Preescribe_MedicamentoCreateWithoutMedicoInput, Medico_Preescribe_MedicamentoUncheckedCreateWithoutMedicoInput> | Medico_Preescribe_MedicamentoCreateWithoutMedicoInput[] | Medico_Preescribe_MedicamentoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Medico_Preescribe_MedicamentoCreateOrConnectWithoutMedicoInput | Medico_Preescribe_MedicamentoCreateOrConnectWithoutMedicoInput[]
    createMany?: Medico_Preescribe_MedicamentoCreateManyMedicoInputEnvelope
    connect?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
  }

  export type Registro_Consulta_MedicamentoCreateNestedManyWithoutMedicoInput = {
    create?: XOR<Registro_Consulta_MedicamentoCreateWithoutMedicoInput, Registro_Consulta_MedicamentoUncheckedCreateWithoutMedicoInput> | Registro_Consulta_MedicamentoCreateWithoutMedicoInput[] | Registro_Consulta_MedicamentoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Registro_Consulta_MedicamentoCreateOrConnectWithoutMedicoInput | Registro_Consulta_MedicamentoCreateOrConnectWithoutMedicoInput[]
    createMany?: Registro_Consulta_MedicamentoCreateManyMedicoInputEnvelope
    connect?: Registro_Consulta_MedicamentoWhereUniqueInput | Registro_Consulta_MedicamentoWhereUniqueInput[]
  }

  export type Medico_dictamina_diagnosticoCreateNestedManyWithoutMedicoInput = {
    create?: XOR<Medico_dictamina_diagnosticoCreateWithoutMedicoInput, Medico_dictamina_diagnosticoUncheckedCreateWithoutMedicoInput> | Medico_dictamina_diagnosticoCreateWithoutMedicoInput[] | Medico_dictamina_diagnosticoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Medico_dictamina_diagnosticoCreateOrConnectWithoutMedicoInput | Medico_dictamina_diagnosticoCreateOrConnectWithoutMedicoInput[]
    createMany?: Medico_dictamina_diagnosticoCreateManyMedicoInputEnvelope
    connect?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
  }

  export type Medico_EquipoUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: XOR<Medico_EquipoCreateWithoutMedicoInput, Medico_EquipoUncheckedCreateWithoutMedicoInput> | Medico_EquipoCreateWithoutMedicoInput[] | Medico_EquipoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Medico_EquipoCreateOrConnectWithoutMedicoInput | Medico_EquipoCreateOrConnectWithoutMedicoInput[]
    createMany?: Medico_EquipoCreateManyMedicoInputEnvelope
    connect?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
  }

  export type CitaUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: XOR<CitaCreateWithoutMedicoInput, CitaUncheckedCreateWithoutMedicoInput> | CitaCreateWithoutMedicoInput[] | CitaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutMedicoInput | CitaCreateOrConnectWithoutMedicoInput[]
    createMany?: CitaCreateManyMedicoInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type Actualizaciones_HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: XOR<Actualizaciones_HistoriaClinicaCreateWithoutMedicoInput, Actualizaciones_HistoriaClinicaUncheckedCreateWithoutMedicoInput> | Actualizaciones_HistoriaClinicaCreateWithoutMedicoInput[] | Actualizaciones_HistoriaClinicaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Actualizaciones_HistoriaClinicaCreateOrConnectWithoutMedicoInput | Actualizaciones_HistoriaClinicaCreateOrConnectWithoutMedicoInput[]
    createMany?: Actualizaciones_HistoriaClinicaCreateManyMedicoInputEnvelope
    connect?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
  }

  export type Medico_Preescribe_MedicamentoUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: XOR<Medico_Preescribe_MedicamentoCreateWithoutMedicoInput, Medico_Preescribe_MedicamentoUncheckedCreateWithoutMedicoInput> | Medico_Preescribe_MedicamentoCreateWithoutMedicoInput[] | Medico_Preescribe_MedicamentoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Medico_Preescribe_MedicamentoCreateOrConnectWithoutMedicoInput | Medico_Preescribe_MedicamentoCreateOrConnectWithoutMedicoInput[]
    createMany?: Medico_Preescribe_MedicamentoCreateManyMedicoInputEnvelope
    connect?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
  }

  export type Registro_Consulta_MedicamentoUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: XOR<Registro_Consulta_MedicamentoCreateWithoutMedicoInput, Registro_Consulta_MedicamentoUncheckedCreateWithoutMedicoInput> | Registro_Consulta_MedicamentoCreateWithoutMedicoInput[] | Registro_Consulta_MedicamentoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Registro_Consulta_MedicamentoCreateOrConnectWithoutMedicoInput | Registro_Consulta_MedicamentoCreateOrConnectWithoutMedicoInput[]
    createMany?: Registro_Consulta_MedicamentoCreateManyMedicoInputEnvelope
    connect?: Registro_Consulta_MedicamentoWhereUniqueInput | Registro_Consulta_MedicamentoWhereUniqueInput[]
  }

  export type Medico_dictamina_diagnosticoUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: XOR<Medico_dictamina_diagnosticoCreateWithoutMedicoInput, Medico_dictamina_diagnosticoUncheckedCreateWithoutMedicoInput> | Medico_dictamina_diagnosticoCreateWithoutMedicoInput[] | Medico_dictamina_diagnosticoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Medico_dictamina_diagnosticoCreateOrConnectWithoutMedicoInput | Medico_dictamina_diagnosticoCreateOrConnectWithoutMedicoInput[]
    createMany?: Medico_dictamina_diagnosticoCreateManyMedicoInputEnvelope
    connect?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
  }

  export type EmpleadoUpdateOneRequiredWithoutMedicoNestedInput = {
    create?: XOR<EmpleadoCreateWithoutMedicoInput, EmpleadoUncheckedCreateWithoutMedicoInput>
    connectOrCreate?: EmpleadoCreateOrConnectWithoutMedicoInput
    upsert?: EmpleadoUpsertWithoutMedicoInput
    connect?: EmpleadoWhereUniqueInput
    update?: XOR<XOR<EmpleadoUpdateToOneWithWhereWithoutMedicoInput, EmpleadoUpdateWithoutMedicoInput>, EmpleadoUncheckedUpdateWithoutMedicoInput>
  }

  export type Medico_EquipoUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<Medico_EquipoCreateWithoutMedicoInput, Medico_EquipoUncheckedCreateWithoutMedicoInput> | Medico_EquipoCreateWithoutMedicoInput[] | Medico_EquipoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Medico_EquipoCreateOrConnectWithoutMedicoInput | Medico_EquipoCreateOrConnectWithoutMedicoInput[]
    upsert?: Medico_EquipoUpsertWithWhereUniqueWithoutMedicoInput | Medico_EquipoUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: Medico_EquipoCreateManyMedicoInputEnvelope
    set?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
    disconnect?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
    delete?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
    connect?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
    update?: Medico_EquipoUpdateWithWhereUniqueWithoutMedicoInput | Medico_EquipoUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: Medico_EquipoUpdateManyWithWhereWithoutMedicoInput | Medico_EquipoUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: Medico_EquipoScalarWhereInput | Medico_EquipoScalarWhereInput[]
  }

  export type CitaUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<CitaCreateWithoutMedicoInput, CitaUncheckedCreateWithoutMedicoInput> | CitaCreateWithoutMedicoInput[] | CitaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutMedicoInput | CitaCreateOrConnectWithoutMedicoInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutMedicoInput | CitaUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: CitaCreateManyMedicoInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutMedicoInput | CitaUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutMedicoInput | CitaUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type Actualizaciones_HistoriaClinicaUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<Actualizaciones_HistoriaClinicaCreateWithoutMedicoInput, Actualizaciones_HistoriaClinicaUncheckedCreateWithoutMedicoInput> | Actualizaciones_HistoriaClinicaCreateWithoutMedicoInput[] | Actualizaciones_HistoriaClinicaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Actualizaciones_HistoriaClinicaCreateOrConnectWithoutMedicoInput | Actualizaciones_HistoriaClinicaCreateOrConnectWithoutMedicoInput[]
    upsert?: Actualizaciones_HistoriaClinicaUpsertWithWhereUniqueWithoutMedicoInput | Actualizaciones_HistoriaClinicaUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: Actualizaciones_HistoriaClinicaCreateManyMedicoInputEnvelope
    set?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
    disconnect?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
    delete?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
    connect?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
    update?: Actualizaciones_HistoriaClinicaUpdateWithWhereUniqueWithoutMedicoInput | Actualizaciones_HistoriaClinicaUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: Actualizaciones_HistoriaClinicaUpdateManyWithWhereWithoutMedicoInput | Actualizaciones_HistoriaClinicaUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: Actualizaciones_HistoriaClinicaScalarWhereInput | Actualizaciones_HistoriaClinicaScalarWhereInput[]
  }

  export type Medico_Preescribe_MedicamentoUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<Medico_Preescribe_MedicamentoCreateWithoutMedicoInput, Medico_Preescribe_MedicamentoUncheckedCreateWithoutMedicoInput> | Medico_Preescribe_MedicamentoCreateWithoutMedicoInput[] | Medico_Preescribe_MedicamentoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Medico_Preescribe_MedicamentoCreateOrConnectWithoutMedicoInput | Medico_Preescribe_MedicamentoCreateOrConnectWithoutMedicoInput[]
    upsert?: Medico_Preescribe_MedicamentoUpsertWithWhereUniqueWithoutMedicoInput | Medico_Preescribe_MedicamentoUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: Medico_Preescribe_MedicamentoCreateManyMedicoInputEnvelope
    set?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
    disconnect?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
    delete?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
    connect?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
    update?: Medico_Preescribe_MedicamentoUpdateWithWhereUniqueWithoutMedicoInput | Medico_Preescribe_MedicamentoUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: Medico_Preescribe_MedicamentoUpdateManyWithWhereWithoutMedicoInput | Medico_Preescribe_MedicamentoUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: Medico_Preescribe_MedicamentoScalarWhereInput | Medico_Preescribe_MedicamentoScalarWhereInput[]
  }

  export type Registro_Consulta_MedicamentoUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<Registro_Consulta_MedicamentoCreateWithoutMedicoInput, Registro_Consulta_MedicamentoUncheckedCreateWithoutMedicoInput> | Registro_Consulta_MedicamentoCreateWithoutMedicoInput[] | Registro_Consulta_MedicamentoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Registro_Consulta_MedicamentoCreateOrConnectWithoutMedicoInput | Registro_Consulta_MedicamentoCreateOrConnectWithoutMedicoInput[]
    upsert?: Registro_Consulta_MedicamentoUpsertWithWhereUniqueWithoutMedicoInput | Registro_Consulta_MedicamentoUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: Registro_Consulta_MedicamentoCreateManyMedicoInputEnvelope
    set?: Registro_Consulta_MedicamentoWhereUniqueInput | Registro_Consulta_MedicamentoWhereUniqueInput[]
    disconnect?: Registro_Consulta_MedicamentoWhereUniqueInput | Registro_Consulta_MedicamentoWhereUniqueInput[]
    delete?: Registro_Consulta_MedicamentoWhereUniqueInput | Registro_Consulta_MedicamentoWhereUniqueInput[]
    connect?: Registro_Consulta_MedicamentoWhereUniqueInput | Registro_Consulta_MedicamentoWhereUniqueInput[]
    update?: Registro_Consulta_MedicamentoUpdateWithWhereUniqueWithoutMedicoInput | Registro_Consulta_MedicamentoUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: Registro_Consulta_MedicamentoUpdateManyWithWhereWithoutMedicoInput | Registro_Consulta_MedicamentoUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: Registro_Consulta_MedicamentoScalarWhereInput | Registro_Consulta_MedicamentoScalarWhereInput[]
  }

  export type Medico_dictamina_diagnosticoUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<Medico_dictamina_diagnosticoCreateWithoutMedicoInput, Medico_dictamina_diagnosticoUncheckedCreateWithoutMedicoInput> | Medico_dictamina_diagnosticoCreateWithoutMedicoInput[] | Medico_dictamina_diagnosticoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Medico_dictamina_diagnosticoCreateOrConnectWithoutMedicoInput | Medico_dictamina_diagnosticoCreateOrConnectWithoutMedicoInput[]
    upsert?: Medico_dictamina_diagnosticoUpsertWithWhereUniqueWithoutMedicoInput | Medico_dictamina_diagnosticoUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: Medico_dictamina_diagnosticoCreateManyMedicoInputEnvelope
    set?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    disconnect?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    delete?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    connect?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    update?: Medico_dictamina_diagnosticoUpdateWithWhereUniqueWithoutMedicoInput | Medico_dictamina_diagnosticoUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: Medico_dictamina_diagnosticoUpdateManyWithWhereWithoutMedicoInput | Medico_dictamina_diagnosticoUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: Medico_dictamina_diagnosticoScalarWhereInput | Medico_dictamina_diagnosticoScalarWhereInput[]
  }

  export type Medico_EquipoUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<Medico_EquipoCreateWithoutMedicoInput, Medico_EquipoUncheckedCreateWithoutMedicoInput> | Medico_EquipoCreateWithoutMedicoInput[] | Medico_EquipoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Medico_EquipoCreateOrConnectWithoutMedicoInput | Medico_EquipoCreateOrConnectWithoutMedicoInput[]
    upsert?: Medico_EquipoUpsertWithWhereUniqueWithoutMedicoInput | Medico_EquipoUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: Medico_EquipoCreateManyMedicoInputEnvelope
    set?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
    disconnect?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
    delete?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
    connect?: Medico_EquipoWhereUniqueInput | Medico_EquipoWhereUniqueInput[]
    update?: Medico_EquipoUpdateWithWhereUniqueWithoutMedicoInput | Medico_EquipoUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: Medico_EquipoUpdateManyWithWhereWithoutMedicoInput | Medico_EquipoUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: Medico_EquipoScalarWhereInput | Medico_EquipoScalarWhereInput[]
  }

  export type CitaUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<CitaCreateWithoutMedicoInput, CitaUncheckedCreateWithoutMedicoInput> | CitaCreateWithoutMedicoInput[] | CitaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutMedicoInput | CitaCreateOrConnectWithoutMedicoInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutMedicoInput | CitaUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: CitaCreateManyMedicoInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutMedicoInput | CitaUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutMedicoInput | CitaUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type Actualizaciones_HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<Actualizaciones_HistoriaClinicaCreateWithoutMedicoInput, Actualizaciones_HistoriaClinicaUncheckedCreateWithoutMedicoInput> | Actualizaciones_HistoriaClinicaCreateWithoutMedicoInput[] | Actualizaciones_HistoriaClinicaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Actualizaciones_HistoriaClinicaCreateOrConnectWithoutMedicoInput | Actualizaciones_HistoriaClinicaCreateOrConnectWithoutMedicoInput[]
    upsert?: Actualizaciones_HistoriaClinicaUpsertWithWhereUniqueWithoutMedicoInput | Actualizaciones_HistoriaClinicaUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: Actualizaciones_HistoriaClinicaCreateManyMedicoInputEnvelope
    set?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
    disconnect?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
    delete?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
    connect?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
    update?: Actualizaciones_HistoriaClinicaUpdateWithWhereUniqueWithoutMedicoInput | Actualizaciones_HistoriaClinicaUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: Actualizaciones_HistoriaClinicaUpdateManyWithWhereWithoutMedicoInput | Actualizaciones_HistoriaClinicaUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: Actualizaciones_HistoriaClinicaScalarWhereInput | Actualizaciones_HistoriaClinicaScalarWhereInput[]
  }

  export type Medico_Preescribe_MedicamentoUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<Medico_Preescribe_MedicamentoCreateWithoutMedicoInput, Medico_Preescribe_MedicamentoUncheckedCreateWithoutMedicoInput> | Medico_Preescribe_MedicamentoCreateWithoutMedicoInput[] | Medico_Preescribe_MedicamentoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Medico_Preescribe_MedicamentoCreateOrConnectWithoutMedicoInput | Medico_Preescribe_MedicamentoCreateOrConnectWithoutMedicoInput[]
    upsert?: Medico_Preescribe_MedicamentoUpsertWithWhereUniqueWithoutMedicoInput | Medico_Preescribe_MedicamentoUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: Medico_Preescribe_MedicamentoCreateManyMedicoInputEnvelope
    set?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
    disconnect?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
    delete?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
    connect?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
    update?: Medico_Preescribe_MedicamentoUpdateWithWhereUniqueWithoutMedicoInput | Medico_Preescribe_MedicamentoUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: Medico_Preescribe_MedicamentoUpdateManyWithWhereWithoutMedicoInput | Medico_Preescribe_MedicamentoUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: Medico_Preescribe_MedicamentoScalarWhereInput | Medico_Preescribe_MedicamentoScalarWhereInput[]
  }

  export type Registro_Consulta_MedicamentoUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<Registro_Consulta_MedicamentoCreateWithoutMedicoInput, Registro_Consulta_MedicamentoUncheckedCreateWithoutMedicoInput> | Registro_Consulta_MedicamentoCreateWithoutMedicoInput[] | Registro_Consulta_MedicamentoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Registro_Consulta_MedicamentoCreateOrConnectWithoutMedicoInput | Registro_Consulta_MedicamentoCreateOrConnectWithoutMedicoInput[]
    upsert?: Registro_Consulta_MedicamentoUpsertWithWhereUniqueWithoutMedicoInput | Registro_Consulta_MedicamentoUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: Registro_Consulta_MedicamentoCreateManyMedicoInputEnvelope
    set?: Registro_Consulta_MedicamentoWhereUniqueInput | Registro_Consulta_MedicamentoWhereUniqueInput[]
    disconnect?: Registro_Consulta_MedicamentoWhereUniqueInput | Registro_Consulta_MedicamentoWhereUniqueInput[]
    delete?: Registro_Consulta_MedicamentoWhereUniqueInput | Registro_Consulta_MedicamentoWhereUniqueInput[]
    connect?: Registro_Consulta_MedicamentoWhereUniqueInput | Registro_Consulta_MedicamentoWhereUniqueInput[]
    update?: Registro_Consulta_MedicamentoUpdateWithWhereUniqueWithoutMedicoInput | Registro_Consulta_MedicamentoUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: Registro_Consulta_MedicamentoUpdateManyWithWhereWithoutMedicoInput | Registro_Consulta_MedicamentoUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: Registro_Consulta_MedicamentoScalarWhereInput | Registro_Consulta_MedicamentoScalarWhereInput[]
  }

  export type Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<Medico_dictamina_diagnosticoCreateWithoutMedicoInput, Medico_dictamina_diagnosticoUncheckedCreateWithoutMedicoInput> | Medico_dictamina_diagnosticoCreateWithoutMedicoInput[] | Medico_dictamina_diagnosticoUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: Medico_dictamina_diagnosticoCreateOrConnectWithoutMedicoInput | Medico_dictamina_diagnosticoCreateOrConnectWithoutMedicoInput[]
    upsert?: Medico_dictamina_diagnosticoUpsertWithWhereUniqueWithoutMedicoInput | Medico_dictamina_diagnosticoUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: Medico_dictamina_diagnosticoCreateManyMedicoInputEnvelope
    set?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    disconnect?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    delete?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    connect?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    update?: Medico_dictamina_diagnosticoUpdateWithWhereUniqueWithoutMedicoInput | Medico_dictamina_diagnosticoUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: Medico_dictamina_diagnosticoUpdateManyWithWhereWithoutMedicoInput | Medico_dictamina_diagnosticoUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: Medico_dictamina_diagnosticoScalarWhereInput | Medico_dictamina_diagnosticoScalarWhereInput[]
  }

  export type MedicoCreateNestedOneWithoutMedicoEquipoInput = {
    create?: XOR<MedicoCreateWithoutMedicoEquipoInput, MedicoUncheckedCreateWithoutMedicoEquipoInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutMedicoEquipoInput
    connect?: MedicoWhereUniqueInput
  }

  export type EquipamientoCreateNestedOneWithoutMedicoEquipoInput = {
    create?: XOR<EquipamientoCreateWithoutMedicoEquipoInput, EquipamientoUncheckedCreateWithoutMedicoEquipoInput>
    connectOrCreate?: EquipamientoCreateOrConnectWithoutMedicoEquipoInput
    connect?: EquipamientoWhereUniqueInput
  }

  export type MedicoUpdateOneRequiredWithoutMedicoEquipoNestedInput = {
    create?: XOR<MedicoCreateWithoutMedicoEquipoInput, MedicoUncheckedCreateWithoutMedicoEquipoInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutMedicoEquipoInput
    upsert?: MedicoUpsertWithoutMedicoEquipoInput
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutMedicoEquipoInput, MedicoUpdateWithoutMedicoEquipoInput>, MedicoUncheckedUpdateWithoutMedicoEquipoInput>
  }

  export type EquipamientoUpdateOneRequiredWithoutMedicoEquipoNestedInput = {
    create?: XOR<EquipamientoCreateWithoutMedicoEquipoInput, EquipamientoUncheckedCreateWithoutMedicoEquipoInput>
    connectOrCreate?: EquipamientoCreateOrConnectWithoutMedicoEquipoInput
    upsert?: EquipamientoUpsertWithoutMedicoEquipoInput
    connect?: EquipamientoWhereUniqueInput
    update?: XOR<XOR<EquipamientoUpdateToOneWithWhereWithoutMedicoEquipoInput, EquipamientoUpdateWithoutMedicoEquipoInput>, EquipamientoUncheckedUpdateWithoutMedicoEquipoInput>
  }

  export type MedicoCreateNestedOneWithoutCitaInput = {
    create?: XOR<MedicoCreateWithoutCitaInput, MedicoUncheckedCreateWithoutCitaInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutCitaInput
    connect?: MedicoWhereUniqueInput
  }

  export type Actualizaciones_HistoriaClinicaCreateNestedManyWithoutCitaInput = {
    create?: XOR<Actualizaciones_HistoriaClinicaCreateWithoutCitaInput, Actualizaciones_HistoriaClinicaUncheckedCreateWithoutCitaInput> | Actualizaciones_HistoriaClinicaCreateWithoutCitaInput[] | Actualizaciones_HistoriaClinicaUncheckedCreateWithoutCitaInput[]
    connectOrCreate?: Actualizaciones_HistoriaClinicaCreateOrConnectWithoutCitaInput | Actualizaciones_HistoriaClinicaCreateOrConnectWithoutCitaInput[]
    createMany?: Actualizaciones_HistoriaClinicaCreateManyCitaInputEnvelope
    connect?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
  }

  export type Medico_Preescribe_MedicamentoCreateNestedManyWithoutCitaInput = {
    create?: XOR<Medico_Preescribe_MedicamentoCreateWithoutCitaInput, Medico_Preescribe_MedicamentoUncheckedCreateWithoutCitaInput> | Medico_Preescribe_MedicamentoCreateWithoutCitaInput[] | Medico_Preescribe_MedicamentoUncheckedCreateWithoutCitaInput[]
    connectOrCreate?: Medico_Preescribe_MedicamentoCreateOrConnectWithoutCitaInput | Medico_Preescribe_MedicamentoCreateOrConnectWithoutCitaInput[]
    createMany?: Medico_Preescribe_MedicamentoCreateManyCitaInputEnvelope
    connect?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
  }

  export type PAdmin_Gestiona_CitaCreateNestedManyWithoutCitaInput = {
    create?: XOR<PAdmin_Gestiona_CitaCreateWithoutCitaInput, PAdmin_Gestiona_CitaUncheckedCreateWithoutCitaInput> | PAdmin_Gestiona_CitaCreateWithoutCitaInput[] | PAdmin_Gestiona_CitaUncheckedCreateWithoutCitaInput[]
    connectOrCreate?: PAdmin_Gestiona_CitaCreateOrConnectWithoutCitaInput | PAdmin_Gestiona_CitaCreateOrConnectWithoutCitaInput[]
    createMany?: PAdmin_Gestiona_CitaCreateManyCitaInputEnvelope
    connect?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
  }

  export type Medico_dictamina_diagnosticoCreateNestedManyWithoutCitaInput = {
    create?: XOR<Medico_dictamina_diagnosticoCreateWithoutCitaInput, Medico_dictamina_diagnosticoUncheckedCreateWithoutCitaInput> | Medico_dictamina_diagnosticoCreateWithoutCitaInput[] | Medico_dictamina_diagnosticoUncheckedCreateWithoutCitaInput[]
    connectOrCreate?: Medico_dictamina_diagnosticoCreateOrConnectWithoutCitaInput | Medico_dictamina_diagnosticoCreateOrConnectWithoutCitaInput[]
    createMany?: Medico_dictamina_diagnosticoCreateManyCitaInputEnvelope
    connect?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
  }

  export type Actualizaciones_HistoriaClinicaUncheckedCreateNestedManyWithoutCitaInput = {
    create?: XOR<Actualizaciones_HistoriaClinicaCreateWithoutCitaInput, Actualizaciones_HistoriaClinicaUncheckedCreateWithoutCitaInput> | Actualizaciones_HistoriaClinicaCreateWithoutCitaInput[] | Actualizaciones_HistoriaClinicaUncheckedCreateWithoutCitaInput[]
    connectOrCreate?: Actualizaciones_HistoriaClinicaCreateOrConnectWithoutCitaInput | Actualizaciones_HistoriaClinicaCreateOrConnectWithoutCitaInput[]
    createMany?: Actualizaciones_HistoriaClinicaCreateManyCitaInputEnvelope
    connect?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
  }

  export type Medico_Preescribe_MedicamentoUncheckedCreateNestedManyWithoutCitaInput = {
    create?: XOR<Medico_Preescribe_MedicamentoCreateWithoutCitaInput, Medico_Preescribe_MedicamentoUncheckedCreateWithoutCitaInput> | Medico_Preescribe_MedicamentoCreateWithoutCitaInput[] | Medico_Preescribe_MedicamentoUncheckedCreateWithoutCitaInput[]
    connectOrCreate?: Medico_Preescribe_MedicamentoCreateOrConnectWithoutCitaInput | Medico_Preescribe_MedicamentoCreateOrConnectWithoutCitaInput[]
    createMany?: Medico_Preescribe_MedicamentoCreateManyCitaInputEnvelope
    connect?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
  }

  export type PAdmin_Gestiona_CitaUncheckedCreateNestedManyWithoutCitaInput = {
    create?: XOR<PAdmin_Gestiona_CitaCreateWithoutCitaInput, PAdmin_Gestiona_CitaUncheckedCreateWithoutCitaInput> | PAdmin_Gestiona_CitaCreateWithoutCitaInput[] | PAdmin_Gestiona_CitaUncheckedCreateWithoutCitaInput[]
    connectOrCreate?: PAdmin_Gestiona_CitaCreateOrConnectWithoutCitaInput | PAdmin_Gestiona_CitaCreateOrConnectWithoutCitaInput[]
    createMany?: PAdmin_Gestiona_CitaCreateManyCitaInputEnvelope
    connect?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
  }

  export type Medico_dictamina_diagnosticoUncheckedCreateNestedManyWithoutCitaInput = {
    create?: XOR<Medico_dictamina_diagnosticoCreateWithoutCitaInput, Medico_dictamina_diagnosticoUncheckedCreateWithoutCitaInput> | Medico_dictamina_diagnosticoCreateWithoutCitaInput[] | Medico_dictamina_diagnosticoUncheckedCreateWithoutCitaInput[]
    connectOrCreate?: Medico_dictamina_diagnosticoCreateOrConnectWithoutCitaInput | Medico_dictamina_diagnosticoCreateOrConnectWithoutCitaInput[]
    createMany?: Medico_dictamina_diagnosticoCreateManyCitaInputEnvelope
    connect?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
  }

  export type MedicoUpdateOneRequiredWithoutCitaNestedInput = {
    create?: XOR<MedicoCreateWithoutCitaInput, MedicoUncheckedCreateWithoutCitaInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutCitaInput
    upsert?: MedicoUpsertWithoutCitaInput
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutCitaInput, MedicoUpdateWithoutCitaInput>, MedicoUncheckedUpdateWithoutCitaInput>
  }

  export type Actualizaciones_HistoriaClinicaUpdateManyWithoutCitaNestedInput = {
    create?: XOR<Actualizaciones_HistoriaClinicaCreateWithoutCitaInput, Actualizaciones_HistoriaClinicaUncheckedCreateWithoutCitaInput> | Actualizaciones_HistoriaClinicaCreateWithoutCitaInput[] | Actualizaciones_HistoriaClinicaUncheckedCreateWithoutCitaInput[]
    connectOrCreate?: Actualizaciones_HistoriaClinicaCreateOrConnectWithoutCitaInput | Actualizaciones_HistoriaClinicaCreateOrConnectWithoutCitaInput[]
    upsert?: Actualizaciones_HistoriaClinicaUpsertWithWhereUniqueWithoutCitaInput | Actualizaciones_HistoriaClinicaUpsertWithWhereUniqueWithoutCitaInput[]
    createMany?: Actualizaciones_HistoriaClinicaCreateManyCitaInputEnvelope
    set?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
    disconnect?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
    delete?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
    connect?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
    update?: Actualizaciones_HistoriaClinicaUpdateWithWhereUniqueWithoutCitaInput | Actualizaciones_HistoriaClinicaUpdateWithWhereUniqueWithoutCitaInput[]
    updateMany?: Actualizaciones_HistoriaClinicaUpdateManyWithWhereWithoutCitaInput | Actualizaciones_HistoriaClinicaUpdateManyWithWhereWithoutCitaInput[]
    deleteMany?: Actualizaciones_HistoriaClinicaScalarWhereInput | Actualizaciones_HistoriaClinicaScalarWhereInput[]
  }

  export type Medico_Preescribe_MedicamentoUpdateManyWithoutCitaNestedInput = {
    create?: XOR<Medico_Preescribe_MedicamentoCreateWithoutCitaInput, Medico_Preescribe_MedicamentoUncheckedCreateWithoutCitaInput> | Medico_Preescribe_MedicamentoCreateWithoutCitaInput[] | Medico_Preescribe_MedicamentoUncheckedCreateWithoutCitaInput[]
    connectOrCreate?: Medico_Preescribe_MedicamentoCreateOrConnectWithoutCitaInput | Medico_Preescribe_MedicamentoCreateOrConnectWithoutCitaInput[]
    upsert?: Medico_Preescribe_MedicamentoUpsertWithWhereUniqueWithoutCitaInput | Medico_Preescribe_MedicamentoUpsertWithWhereUniqueWithoutCitaInput[]
    createMany?: Medico_Preescribe_MedicamentoCreateManyCitaInputEnvelope
    set?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
    disconnect?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
    delete?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
    connect?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
    update?: Medico_Preescribe_MedicamentoUpdateWithWhereUniqueWithoutCitaInput | Medico_Preescribe_MedicamentoUpdateWithWhereUniqueWithoutCitaInput[]
    updateMany?: Medico_Preescribe_MedicamentoUpdateManyWithWhereWithoutCitaInput | Medico_Preescribe_MedicamentoUpdateManyWithWhereWithoutCitaInput[]
    deleteMany?: Medico_Preescribe_MedicamentoScalarWhereInput | Medico_Preescribe_MedicamentoScalarWhereInput[]
  }

  export type PAdmin_Gestiona_CitaUpdateManyWithoutCitaNestedInput = {
    create?: XOR<PAdmin_Gestiona_CitaCreateWithoutCitaInput, PAdmin_Gestiona_CitaUncheckedCreateWithoutCitaInput> | PAdmin_Gestiona_CitaCreateWithoutCitaInput[] | PAdmin_Gestiona_CitaUncheckedCreateWithoutCitaInput[]
    connectOrCreate?: PAdmin_Gestiona_CitaCreateOrConnectWithoutCitaInput | PAdmin_Gestiona_CitaCreateOrConnectWithoutCitaInput[]
    upsert?: PAdmin_Gestiona_CitaUpsertWithWhereUniqueWithoutCitaInput | PAdmin_Gestiona_CitaUpsertWithWhereUniqueWithoutCitaInput[]
    createMany?: PAdmin_Gestiona_CitaCreateManyCitaInputEnvelope
    set?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
    disconnect?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
    delete?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
    connect?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
    update?: PAdmin_Gestiona_CitaUpdateWithWhereUniqueWithoutCitaInput | PAdmin_Gestiona_CitaUpdateWithWhereUniqueWithoutCitaInput[]
    updateMany?: PAdmin_Gestiona_CitaUpdateManyWithWhereWithoutCitaInput | PAdmin_Gestiona_CitaUpdateManyWithWhereWithoutCitaInput[]
    deleteMany?: PAdmin_Gestiona_CitaScalarWhereInput | PAdmin_Gestiona_CitaScalarWhereInput[]
  }

  export type Medico_dictamina_diagnosticoUpdateManyWithoutCitaNestedInput = {
    create?: XOR<Medico_dictamina_diagnosticoCreateWithoutCitaInput, Medico_dictamina_diagnosticoUncheckedCreateWithoutCitaInput> | Medico_dictamina_diagnosticoCreateWithoutCitaInput[] | Medico_dictamina_diagnosticoUncheckedCreateWithoutCitaInput[]
    connectOrCreate?: Medico_dictamina_diagnosticoCreateOrConnectWithoutCitaInput | Medico_dictamina_diagnosticoCreateOrConnectWithoutCitaInput[]
    upsert?: Medico_dictamina_diagnosticoUpsertWithWhereUniqueWithoutCitaInput | Medico_dictamina_diagnosticoUpsertWithWhereUniqueWithoutCitaInput[]
    createMany?: Medico_dictamina_diagnosticoCreateManyCitaInputEnvelope
    set?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    disconnect?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    delete?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    connect?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    update?: Medico_dictamina_diagnosticoUpdateWithWhereUniqueWithoutCitaInput | Medico_dictamina_diagnosticoUpdateWithWhereUniqueWithoutCitaInput[]
    updateMany?: Medico_dictamina_diagnosticoUpdateManyWithWhereWithoutCitaInput | Medico_dictamina_diagnosticoUpdateManyWithWhereWithoutCitaInput[]
    deleteMany?: Medico_dictamina_diagnosticoScalarWhereInput | Medico_dictamina_diagnosticoScalarWhereInput[]
  }

  export type Actualizaciones_HistoriaClinicaUncheckedUpdateManyWithoutCitaNestedInput = {
    create?: XOR<Actualizaciones_HistoriaClinicaCreateWithoutCitaInput, Actualizaciones_HistoriaClinicaUncheckedCreateWithoutCitaInput> | Actualizaciones_HistoriaClinicaCreateWithoutCitaInput[] | Actualizaciones_HistoriaClinicaUncheckedCreateWithoutCitaInput[]
    connectOrCreate?: Actualizaciones_HistoriaClinicaCreateOrConnectWithoutCitaInput | Actualizaciones_HistoriaClinicaCreateOrConnectWithoutCitaInput[]
    upsert?: Actualizaciones_HistoriaClinicaUpsertWithWhereUniqueWithoutCitaInput | Actualizaciones_HistoriaClinicaUpsertWithWhereUniqueWithoutCitaInput[]
    createMany?: Actualizaciones_HistoriaClinicaCreateManyCitaInputEnvelope
    set?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
    disconnect?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
    delete?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
    connect?: Actualizaciones_HistoriaClinicaWhereUniqueInput | Actualizaciones_HistoriaClinicaWhereUniqueInput[]
    update?: Actualizaciones_HistoriaClinicaUpdateWithWhereUniqueWithoutCitaInput | Actualizaciones_HistoriaClinicaUpdateWithWhereUniqueWithoutCitaInput[]
    updateMany?: Actualizaciones_HistoriaClinicaUpdateManyWithWhereWithoutCitaInput | Actualizaciones_HistoriaClinicaUpdateManyWithWhereWithoutCitaInput[]
    deleteMany?: Actualizaciones_HistoriaClinicaScalarWhereInput | Actualizaciones_HistoriaClinicaScalarWhereInput[]
  }

  export type Medico_Preescribe_MedicamentoUncheckedUpdateManyWithoutCitaNestedInput = {
    create?: XOR<Medico_Preescribe_MedicamentoCreateWithoutCitaInput, Medico_Preescribe_MedicamentoUncheckedCreateWithoutCitaInput> | Medico_Preescribe_MedicamentoCreateWithoutCitaInput[] | Medico_Preescribe_MedicamentoUncheckedCreateWithoutCitaInput[]
    connectOrCreate?: Medico_Preescribe_MedicamentoCreateOrConnectWithoutCitaInput | Medico_Preescribe_MedicamentoCreateOrConnectWithoutCitaInput[]
    upsert?: Medico_Preescribe_MedicamentoUpsertWithWhereUniqueWithoutCitaInput | Medico_Preescribe_MedicamentoUpsertWithWhereUniqueWithoutCitaInput[]
    createMany?: Medico_Preescribe_MedicamentoCreateManyCitaInputEnvelope
    set?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
    disconnect?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
    delete?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
    connect?: Medico_Preescribe_MedicamentoWhereUniqueInput | Medico_Preescribe_MedicamentoWhereUniqueInput[]
    update?: Medico_Preescribe_MedicamentoUpdateWithWhereUniqueWithoutCitaInput | Medico_Preescribe_MedicamentoUpdateWithWhereUniqueWithoutCitaInput[]
    updateMany?: Medico_Preescribe_MedicamentoUpdateManyWithWhereWithoutCitaInput | Medico_Preescribe_MedicamentoUpdateManyWithWhereWithoutCitaInput[]
    deleteMany?: Medico_Preescribe_MedicamentoScalarWhereInput | Medico_Preescribe_MedicamentoScalarWhereInput[]
  }

  export type PAdmin_Gestiona_CitaUncheckedUpdateManyWithoutCitaNestedInput = {
    create?: XOR<PAdmin_Gestiona_CitaCreateWithoutCitaInput, PAdmin_Gestiona_CitaUncheckedCreateWithoutCitaInput> | PAdmin_Gestiona_CitaCreateWithoutCitaInput[] | PAdmin_Gestiona_CitaUncheckedCreateWithoutCitaInput[]
    connectOrCreate?: PAdmin_Gestiona_CitaCreateOrConnectWithoutCitaInput | PAdmin_Gestiona_CitaCreateOrConnectWithoutCitaInput[]
    upsert?: PAdmin_Gestiona_CitaUpsertWithWhereUniqueWithoutCitaInput | PAdmin_Gestiona_CitaUpsertWithWhereUniqueWithoutCitaInput[]
    createMany?: PAdmin_Gestiona_CitaCreateManyCitaInputEnvelope
    set?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
    disconnect?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
    delete?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
    connect?: PAdmin_Gestiona_CitaWhereUniqueInput | PAdmin_Gestiona_CitaWhereUniqueInput[]
    update?: PAdmin_Gestiona_CitaUpdateWithWhereUniqueWithoutCitaInput | PAdmin_Gestiona_CitaUpdateWithWhereUniqueWithoutCitaInput[]
    updateMany?: PAdmin_Gestiona_CitaUpdateManyWithWhereWithoutCitaInput | PAdmin_Gestiona_CitaUpdateManyWithWhereWithoutCitaInput[]
    deleteMany?: PAdmin_Gestiona_CitaScalarWhereInput | PAdmin_Gestiona_CitaScalarWhereInput[]
  }

  export type Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutCitaNestedInput = {
    create?: XOR<Medico_dictamina_diagnosticoCreateWithoutCitaInput, Medico_dictamina_diagnosticoUncheckedCreateWithoutCitaInput> | Medico_dictamina_diagnosticoCreateWithoutCitaInput[] | Medico_dictamina_diagnosticoUncheckedCreateWithoutCitaInput[]
    connectOrCreate?: Medico_dictamina_diagnosticoCreateOrConnectWithoutCitaInput | Medico_dictamina_diagnosticoCreateOrConnectWithoutCitaInput[]
    upsert?: Medico_dictamina_diagnosticoUpsertWithWhereUniqueWithoutCitaInput | Medico_dictamina_diagnosticoUpsertWithWhereUniqueWithoutCitaInput[]
    createMany?: Medico_dictamina_diagnosticoCreateManyCitaInputEnvelope
    set?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    disconnect?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    delete?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    connect?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    update?: Medico_dictamina_diagnosticoUpdateWithWhereUniqueWithoutCitaInput | Medico_dictamina_diagnosticoUpdateWithWhereUniqueWithoutCitaInput[]
    updateMany?: Medico_dictamina_diagnosticoUpdateManyWithWhereWithoutCitaInput | Medico_dictamina_diagnosticoUpdateManyWithWhereWithoutCitaInput[]
    deleteMany?: Medico_dictamina_diagnosticoScalarWhereInput | Medico_dictamina_diagnosticoScalarWhereInput[]
  }

  export type PAdministrativoCreateNestedOneWithoutPAdmin_Modifica_PacienteInput = {
    create?: XOR<PAdministrativoCreateWithoutPAdmin_Modifica_PacienteInput, PAdministrativoUncheckedCreateWithoutPAdmin_Modifica_PacienteInput>
    connectOrCreate?: PAdministrativoCreateOrConnectWithoutPAdmin_Modifica_PacienteInput
    connect?: PAdministrativoWhereUniqueInput
  }

  export type PAdministrativoUpdateOneRequiredWithoutPAdmin_Modifica_PacienteNestedInput = {
    create?: XOR<PAdministrativoCreateWithoutPAdmin_Modifica_PacienteInput, PAdministrativoUncheckedCreateWithoutPAdmin_Modifica_PacienteInput>
    connectOrCreate?: PAdministrativoCreateOrConnectWithoutPAdmin_Modifica_PacienteInput
    upsert?: PAdministrativoUpsertWithoutPAdmin_Modifica_PacienteInput
    connect?: PAdministrativoWhereUniqueInput
    update?: XOR<XOR<PAdministrativoUpdateToOneWithWhereWithoutPAdmin_Modifica_PacienteInput, PAdministrativoUpdateWithoutPAdmin_Modifica_PacienteInput>, PAdministrativoUncheckedUpdateWithoutPAdmin_Modifica_PacienteInput>
  }

  export type MedicoCreateNestedOneWithoutActualizaciones_HistoriaClinicaInput = {
    create?: XOR<MedicoCreateWithoutActualizaciones_HistoriaClinicaInput, MedicoUncheckedCreateWithoutActualizaciones_HistoriaClinicaInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutActualizaciones_HistoriaClinicaInput
    connect?: MedicoWhereUniqueInput
  }

  export type CitaCreateNestedOneWithoutActualizaciones_HistoriaClinicaInput = {
    create?: XOR<CitaCreateWithoutActualizaciones_HistoriaClinicaInput, CitaUncheckedCreateWithoutActualizaciones_HistoriaClinicaInput>
    connectOrCreate?: CitaCreateOrConnectWithoutActualizaciones_HistoriaClinicaInput
    connect?: CitaWhereUniqueInput
  }

  export type MedicoUpdateOneRequiredWithoutActualizaciones_HistoriaClinicaNestedInput = {
    create?: XOR<MedicoCreateWithoutActualizaciones_HistoriaClinicaInput, MedicoUncheckedCreateWithoutActualizaciones_HistoriaClinicaInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutActualizaciones_HistoriaClinicaInput
    upsert?: MedicoUpsertWithoutActualizaciones_HistoriaClinicaInput
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutActualizaciones_HistoriaClinicaInput, MedicoUpdateWithoutActualizaciones_HistoriaClinicaInput>, MedicoUncheckedUpdateWithoutActualizaciones_HistoriaClinicaInput>
  }

  export type CitaUpdateOneRequiredWithoutActualizaciones_HistoriaClinicaNestedInput = {
    create?: XOR<CitaCreateWithoutActualizaciones_HistoriaClinicaInput, CitaUncheckedCreateWithoutActualizaciones_HistoriaClinicaInput>
    connectOrCreate?: CitaCreateOrConnectWithoutActualizaciones_HistoriaClinicaInput
    upsert?: CitaUpsertWithoutActualizaciones_HistoriaClinicaInput
    connect?: CitaWhereUniqueInput
    update?: XOR<XOR<CitaUpdateToOneWithWhereWithoutActualizaciones_HistoriaClinicaInput, CitaUpdateWithoutActualizaciones_HistoriaClinicaInput>, CitaUncheckedUpdateWithoutActualizaciones_HistoriaClinicaInput>
  }

  export type MedicoCreateNestedOneWithoutMedico_Preescribe_MedicamentoInput = {
    create?: XOR<MedicoCreateWithoutMedico_Preescribe_MedicamentoInput, MedicoUncheckedCreateWithoutMedico_Preescribe_MedicamentoInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutMedico_Preescribe_MedicamentoInput
    connect?: MedicoWhereUniqueInput
  }

  export type CitaCreateNestedOneWithoutMedico_Preescribe_MedicamentoInput = {
    create?: XOR<CitaCreateWithoutMedico_Preescribe_MedicamentoInput, CitaUncheckedCreateWithoutMedico_Preescribe_MedicamentoInput>
    connectOrCreate?: CitaCreateOrConnectWithoutMedico_Preescribe_MedicamentoInput
    connect?: CitaWhereUniqueInput
  }

  export type MedicoUpdateOneRequiredWithoutMedico_Preescribe_MedicamentoNestedInput = {
    create?: XOR<MedicoCreateWithoutMedico_Preescribe_MedicamentoInput, MedicoUncheckedCreateWithoutMedico_Preescribe_MedicamentoInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutMedico_Preescribe_MedicamentoInput
    upsert?: MedicoUpsertWithoutMedico_Preescribe_MedicamentoInput
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutMedico_Preescribe_MedicamentoInput, MedicoUpdateWithoutMedico_Preescribe_MedicamentoInput>, MedicoUncheckedUpdateWithoutMedico_Preescribe_MedicamentoInput>
  }

  export type CitaUpdateOneRequiredWithoutMedico_Preescribe_MedicamentoNestedInput = {
    create?: XOR<CitaCreateWithoutMedico_Preescribe_MedicamentoInput, CitaUncheckedCreateWithoutMedico_Preescribe_MedicamentoInput>
    connectOrCreate?: CitaCreateOrConnectWithoutMedico_Preescribe_MedicamentoInput
    upsert?: CitaUpsertWithoutMedico_Preescribe_MedicamentoInput
    connect?: CitaWhereUniqueInput
    update?: XOR<XOR<CitaUpdateToOneWithWhereWithoutMedico_Preescribe_MedicamentoInput, CitaUpdateWithoutMedico_Preescribe_MedicamentoInput>, CitaUncheckedUpdateWithoutMedico_Preescribe_MedicamentoInput>
  }

  export type MedicoCreateNestedOneWithoutRegistro_Consulta_MedicamentoInput = {
    create?: XOR<MedicoCreateWithoutRegistro_Consulta_MedicamentoInput, MedicoUncheckedCreateWithoutRegistro_Consulta_MedicamentoInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutRegistro_Consulta_MedicamentoInput
    connect?: MedicoWhereUniqueInput
  }

  export type MedicoUpdateOneRequiredWithoutRegistro_Consulta_MedicamentoNestedInput = {
    create?: XOR<MedicoCreateWithoutRegistro_Consulta_MedicamentoInput, MedicoUncheckedCreateWithoutRegistro_Consulta_MedicamentoInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutRegistro_Consulta_MedicamentoInput
    upsert?: MedicoUpsertWithoutRegistro_Consulta_MedicamentoInput
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutRegistro_Consulta_MedicamentoInput, MedicoUpdateWithoutRegistro_Consulta_MedicamentoInput>, MedicoUncheckedUpdateWithoutRegistro_Consulta_MedicamentoInput>
  }

  export type PAdministrativoCreateNestedOneWithoutPAdmin_Gestiona_CitaInput = {
    create?: XOR<PAdministrativoCreateWithoutPAdmin_Gestiona_CitaInput, PAdministrativoUncheckedCreateWithoutPAdmin_Gestiona_CitaInput>
    connectOrCreate?: PAdministrativoCreateOrConnectWithoutPAdmin_Gestiona_CitaInput
    connect?: PAdministrativoWhereUniqueInput
  }

  export type CitaCreateNestedOneWithoutPAdmin_Gestiona_CitaInput = {
    create?: XOR<CitaCreateWithoutPAdmin_Gestiona_CitaInput, CitaUncheckedCreateWithoutPAdmin_Gestiona_CitaInput>
    connectOrCreate?: CitaCreateOrConnectWithoutPAdmin_Gestiona_CitaInput
    connect?: CitaWhereUniqueInput
  }

  export type PAdministrativoUpdateOneRequiredWithoutPAdmin_Gestiona_CitaNestedInput = {
    create?: XOR<PAdministrativoCreateWithoutPAdmin_Gestiona_CitaInput, PAdministrativoUncheckedCreateWithoutPAdmin_Gestiona_CitaInput>
    connectOrCreate?: PAdministrativoCreateOrConnectWithoutPAdmin_Gestiona_CitaInput
    upsert?: PAdministrativoUpsertWithoutPAdmin_Gestiona_CitaInput
    connect?: PAdministrativoWhereUniqueInput
    update?: XOR<XOR<PAdministrativoUpdateToOneWithWhereWithoutPAdmin_Gestiona_CitaInput, PAdministrativoUpdateWithoutPAdmin_Gestiona_CitaInput>, PAdministrativoUncheckedUpdateWithoutPAdmin_Gestiona_CitaInput>
  }

  export type CitaUpdateOneRequiredWithoutPAdmin_Gestiona_CitaNestedInput = {
    create?: XOR<CitaCreateWithoutPAdmin_Gestiona_CitaInput, CitaUncheckedCreateWithoutPAdmin_Gestiona_CitaInput>
    connectOrCreate?: CitaCreateOrConnectWithoutPAdmin_Gestiona_CitaInput
    upsert?: CitaUpsertWithoutPAdmin_Gestiona_CitaInput
    connect?: CitaWhereUniqueInput
    update?: XOR<XOR<CitaUpdateToOneWithWhereWithoutPAdmin_Gestiona_CitaInput, CitaUpdateWithoutPAdmin_Gestiona_CitaInput>, CitaUncheckedUpdateWithoutPAdmin_Gestiona_CitaInput>
  }

  export type Medico_dictamina_diagnosticoCreateNestedManyWithoutDiagnosticoInput = {
    create?: XOR<Medico_dictamina_diagnosticoCreateWithoutDiagnosticoInput, Medico_dictamina_diagnosticoUncheckedCreateWithoutDiagnosticoInput> | Medico_dictamina_diagnosticoCreateWithoutDiagnosticoInput[] | Medico_dictamina_diagnosticoUncheckedCreateWithoutDiagnosticoInput[]
    connectOrCreate?: Medico_dictamina_diagnosticoCreateOrConnectWithoutDiagnosticoInput | Medico_dictamina_diagnosticoCreateOrConnectWithoutDiagnosticoInput[]
    createMany?: Medico_dictamina_diagnosticoCreateManyDiagnosticoInputEnvelope
    connect?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
  }

  export type Medico_dictamina_diagnosticoUncheckedCreateNestedManyWithoutDiagnosticoInput = {
    create?: XOR<Medico_dictamina_diagnosticoCreateWithoutDiagnosticoInput, Medico_dictamina_diagnosticoUncheckedCreateWithoutDiagnosticoInput> | Medico_dictamina_diagnosticoCreateWithoutDiagnosticoInput[] | Medico_dictamina_diagnosticoUncheckedCreateWithoutDiagnosticoInput[]
    connectOrCreate?: Medico_dictamina_diagnosticoCreateOrConnectWithoutDiagnosticoInput | Medico_dictamina_diagnosticoCreateOrConnectWithoutDiagnosticoInput[]
    createMany?: Medico_dictamina_diagnosticoCreateManyDiagnosticoInputEnvelope
    connect?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
  }

  export type Medico_dictamina_diagnosticoUpdateManyWithoutDiagnosticoNestedInput = {
    create?: XOR<Medico_dictamina_diagnosticoCreateWithoutDiagnosticoInput, Medico_dictamina_diagnosticoUncheckedCreateWithoutDiagnosticoInput> | Medico_dictamina_diagnosticoCreateWithoutDiagnosticoInput[] | Medico_dictamina_diagnosticoUncheckedCreateWithoutDiagnosticoInput[]
    connectOrCreate?: Medico_dictamina_diagnosticoCreateOrConnectWithoutDiagnosticoInput | Medico_dictamina_diagnosticoCreateOrConnectWithoutDiagnosticoInput[]
    upsert?: Medico_dictamina_diagnosticoUpsertWithWhereUniqueWithoutDiagnosticoInput | Medico_dictamina_diagnosticoUpsertWithWhereUniqueWithoutDiagnosticoInput[]
    createMany?: Medico_dictamina_diagnosticoCreateManyDiagnosticoInputEnvelope
    set?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    disconnect?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    delete?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    connect?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    update?: Medico_dictamina_diagnosticoUpdateWithWhereUniqueWithoutDiagnosticoInput | Medico_dictamina_diagnosticoUpdateWithWhereUniqueWithoutDiagnosticoInput[]
    updateMany?: Medico_dictamina_diagnosticoUpdateManyWithWhereWithoutDiagnosticoInput | Medico_dictamina_diagnosticoUpdateManyWithWhereWithoutDiagnosticoInput[]
    deleteMany?: Medico_dictamina_diagnosticoScalarWhereInput | Medico_dictamina_diagnosticoScalarWhereInput[]
  }

  export type Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutDiagnosticoNestedInput = {
    create?: XOR<Medico_dictamina_diagnosticoCreateWithoutDiagnosticoInput, Medico_dictamina_diagnosticoUncheckedCreateWithoutDiagnosticoInput> | Medico_dictamina_diagnosticoCreateWithoutDiagnosticoInput[] | Medico_dictamina_diagnosticoUncheckedCreateWithoutDiagnosticoInput[]
    connectOrCreate?: Medico_dictamina_diagnosticoCreateOrConnectWithoutDiagnosticoInput | Medico_dictamina_diagnosticoCreateOrConnectWithoutDiagnosticoInput[]
    upsert?: Medico_dictamina_diagnosticoUpsertWithWhereUniqueWithoutDiagnosticoInput | Medico_dictamina_diagnosticoUpsertWithWhereUniqueWithoutDiagnosticoInput[]
    createMany?: Medico_dictamina_diagnosticoCreateManyDiagnosticoInputEnvelope
    set?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    disconnect?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    delete?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    connect?: Medico_dictamina_diagnosticoWhereUniqueInput | Medico_dictamina_diagnosticoWhereUniqueInput[]
    update?: Medico_dictamina_diagnosticoUpdateWithWhereUniqueWithoutDiagnosticoInput | Medico_dictamina_diagnosticoUpdateWithWhereUniqueWithoutDiagnosticoInput[]
    updateMany?: Medico_dictamina_diagnosticoUpdateManyWithWhereWithoutDiagnosticoInput | Medico_dictamina_diagnosticoUpdateManyWithWhereWithoutDiagnosticoInput[]
    deleteMany?: Medico_dictamina_diagnosticoScalarWhereInput | Medico_dictamina_diagnosticoScalarWhereInput[]
  }

  export type DiagnosticoCreateNestedOneWithoutMedicoDictaminaDiagnosticoInput = {
    create?: XOR<DiagnosticoCreateWithoutMedicoDictaminaDiagnosticoInput, DiagnosticoUncheckedCreateWithoutMedicoDictaminaDiagnosticoInput>
    connectOrCreate?: DiagnosticoCreateOrConnectWithoutMedicoDictaminaDiagnosticoInput
    connect?: DiagnosticoWhereUniqueInput
  }

  export type MedicoCreateNestedOneWithoutMedico_dictamina_diagnosticoInput = {
    create?: XOR<MedicoCreateWithoutMedico_dictamina_diagnosticoInput, MedicoUncheckedCreateWithoutMedico_dictamina_diagnosticoInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutMedico_dictamina_diagnosticoInput
    connect?: MedicoWhereUniqueInput
  }

  export type CitaCreateNestedOneWithoutMedico_dictamina_diagnosticoInput = {
    create?: XOR<CitaCreateWithoutMedico_dictamina_diagnosticoInput, CitaUncheckedCreateWithoutMedico_dictamina_diagnosticoInput>
    connectOrCreate?: CitaCreateOrConnectWithoutMedico_dictamina_diagnosticoInput
    connect?: CitaWhereUniqueInput
  }

  export type DiagnosticoUpdateOneRequiredWithoutMedicoDictaminaDiagnosticoNestedInput = {
    create?: XOR<DiagnosticoCreateWithoutMedicoDictaminaDiagnosticoInput, DiagnosticoUncheckedCreateWithoutMedicoDictaminaDiagnosticoInput>
    connectOrCreate?: DiagnosticoCreateOrConnectWithoutMedicoDictaminaDiagnosticoInput
    upsert?: DiagnosticoUpsertWithoutMedicoDictaminaDiagnosticoInput
    connect?: DiagnosticoWhereUniqueInput
    update?: XOR<XOR<DiagnosticoUpdateToOneWithWhereWithoutMedicoDictaminaDiagnosticoInput, DiagnosticoUpdateWithoutMedicoDictaminaDiagnosticoInput>, DiagnosticoUncheckedUpdateWithoutMedicoDictaminaDiagnosticoInput>
  }

  export type MedicoUpdateOneRequiredWithoutMedico_dictamina_diagnosticoNestedInput = {
    create?: XOR<MedicoCreateWithoutMedico_dictamina_diagnosticoInput, MedicoUncheckedCreateWithoutMedico_dictamina_diagnosticoInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutMedico_dictamina_diagnosticoInput
    upsert?: MedicoUpsertWithoutMedico_dictamina_diagnosticoInput
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutMedico_dictamina_diagnosticoInput, MedicoUpdateWithoutMedico_dictamina_diagnosticoInput>, MedicoUncheckedUpdateWithoutMedico_dictamina_diagnosticoInput>
  }

  export type CitaUpdateOneRequiredWithoutMedico_dictamina_diagnosticoNestedInput = {
    create?: XOR<CitaCreateWithoutMedico_dictamina_diagnosticoInput, CitaUncheckedCreateWithoutMedico_dictamina_diagnosticoInput>
    connectOrCreate?: CitaCreateOrConnectWithoutMedico_dictamina_diagnosticoInput
    upsert?: CitaUpsertWithoutMedico_dictamina_diagnosticoInput
    connect?: CitaWhereUniqueInput
    update?: XOR<XOR<CitaUpdateToOneWithWhereWithoutMedico_dictamina_diagnosticoInput, CitaUpdateWithoutMedico_dictamina_diagnosticoInput>, CitaUncheckedUpdateWithoutMedico_dictamina_diagnosticoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type Medico_EquipoCreateWithoutEquipamientoInput = {
    FPrestamo: Date | string
    FDevolucion: Date | string
    medico: MedicoCreateNestedOneWithoutMedicoEquipoInput
  }

  export type Medico_EquipoUncheckedCreateWithoutEquipamientoInput = {
    idMedico: number
    FPrestamo: Date | string
    FDevolucion: Date | string
  }

  export type Medico_EquipoCreateOrConnectWithoutEquipamientoInput = {
    where: Medico_EquipoWhereUniqueInput
    create: XOR<Medico_EquipoCreateWithoutEquipamientoInput, Medico_EquipoUncheckedCreateWithoutEquipamientoInput>
  }

  export type Medico_EquipoCreateManyEquipamientoInputEnvelope = {
    data: Medico_EquipoCreateManyEquipamientoInput | Medico_EquipoCreateManyEquipamientoInput[]
    skipDuplicates?: boolean
  }

  export type Medico_EquipoUpsertWithWhereUniqueWithoutEquipamientoInput = {
    where: Medico_EquipoWhereUniqueInput
    update: XOR<Medico_EquipoUpdateWithoutEquipamientoInput, Medico_EquipoUncheckedUpdateWithoutEquipamientoInput>
    create: XOR<Medico_EquipoCreateWithoutEquipamientoInput, Medico_EquipoUncheckedCreateWithoutEquipamientoInput>
  }

  export type Medico_EquipoUpdateWithWhereUniqueWithoutEquipamientoInput = {
    where: Medico_EquipoWhereUniqueInput
    data: XOR<Medico_EquipoUpdateWithoutEquipamientoInput, Medico_EquipoUncheckedUpdateWithoutEquipamientoInput>
  }

  export type Medico_EquipoUpdateManyWithWhereWithoutEquipamientoInput = {
    where: Medico_EquipoScalarWhereInput
    data: XOR<Medico_EquipoUpdateManyMutationInput, Medico_EquipoUncheckedUpdateManyWithoutEquipamientoInput>
  }

  export type Medico_EquipoScalarWhereInput = {
    AND?: Medico_EquipoScalarWhereInput | Medico_EquipoScalarWhereInput[]
    OR?: Medico_EquipoScalarWhereInput[]
    NOT?: Medico_EquipoScalarWhereInput | Medico_EquipoScalarWhereInput[]
    idMedico?: IntFilter<"Medico_Equipo"> | number
    idEquipamiento?: IntFilter<"Medico_Equipo"> | number
    FPrestamo?: DateTimeFilter<"Medico_Equipo"> | Date | string
    FDevolucion?: DateTimeFilter<"Medico_Equipo"> | Date | string
  }

  export type PAdministrativoCreateWithoutEmpleadoInput = {
    sueldo: bigint | number
    PAdmin_Modifica_Paciente?: PAdmin_Modifica_PacienteCreateNestedManyWithoutPAdministrativoInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaCreateNestedManyWithoutPAdministrativoInput
  }

  export type PAdministrativoUncheckedCreateWithoutEmpleadoInput = {
    idPAdministrativo?: number
    sueldo: bigint | number
    PAdmin_Modifica_Paciente?: PAdmin_Modifica_PacienteUncheckedCreateNestedManyWithoutPAdministrativoInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUncheckedCreateNestedManyWithoutPAdministrativoInput
  }

  export type PAdministrativoCreateOrConnectWithoutEmpleadoInput = {
    where: PAdministrativoWhereUniqueInput
    create: XOR<PAdministrativoCreateWithoutEmpleadoInput, PAdministrativoUncheckedCreateWithoutEmpleadoInput>
  }

  export type PAdministrativoCreateManyEmpleadoInputEnvelope = {
    data: PAdministrativoCreateManyEmpleadoInput | PAdministrativoCreateManyEmpleadoInput[]
    skipDuplicates?: boolean
  }

  export type MedicoCreateWithoutEmpleadoInput = {
    sueldo: bigint | number
    medicoEquipo?: Medico_EquipoCreateNestedManyWithoutMedicoInput
    Cita?: CitaCreateNestedManyWithoutMedicoInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaCreateNestedManyWithoutMedicoInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoCreateNestedManyWithoutMedicoInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoCreateNestedManyWithoutMedicoInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutEmpleadoInput = {
    idMedico?: number
    sueldo: bigint | number
    medicoEquipo?: Medico_EquipoUncheckedCreateNestedManyWithoutMedicoInput
    Cita?: CitaUncheckedCreateNestedManyWithoutMedicoInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedCreateNestedManyWithoutMedicoInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUncheckedCreateNestedManyWithoutMedicoInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutEmpleadoInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutEmpleadoInput, MedicoUncheckedCreateWithoutEmpleadoInput>
  }

  export type MedicoCreateManyEmpleadoInputEnvelope = {
    data: MedicoCreateManyEmpleadoInput | MedicoCreateManyEmpleadoInput[]
    skipDuplicates?: boolean
  }

  export type PAdministrativoUpsertWithWhereUniqueWithoutEmpleadoInput = {
    where: PAdministrativoWhereUniqueInput
    update: XOR<PAdministrativoUpdateWithoutEmpleadoInput, PAdministrativoUncheckedUpdateWithoutEmpleadoInput>
    create: XOR<PAdministrativoCreateWithoutEmpleadoInput, PAdministrativoUncheckedCreateWithoutEmpleadoInput>
  }

  export type PAdministrativoUpdateWithWhereUniqueWithoutEmpleadoInput = {
    where: PAdministrativoWhereUniqueInput
    data: XOR<PAdministrativoUpdateWithoutEmpleadoInput, PAdministrativoUncheckedUpdateWithoutEmpleadoInput>
  }

  export type PAdministrativoUpdateManyWithWhereWithoutEmpleadoInput = {
    where: PAdministrativoScalarWhereInput
    data: XOR<PAdministrativoUpdateManyMutationInput, PAdministrativoUncheckedUpdateManyWithoutEmpleadoInput>
  }

  export type PAdministrativoScalarWhereInput = {
    AND?: PAdministrativoScalarWhereInput | PAdministrativoScalarWhereInput[]
    OR?: PAdministrativoScalarWhereInput[]
    NOT?: PAdministrativoScalarWhereInput | PAdministrativoScalarWhereInput[]
    idPAdministrativo?: IntFilter<"PAdministrativo"> | number
    idEmpleado?: IntFilter<"PAdministrativo"> | number
    sueldo?: BigIntFilter<"PAdministrativo"> | bigint | number
  }

  export type MedicoUpsertWithWhereUniqueWithoutEmpleadoInput = {
    where: MedicoWhereUniqueInput
    update: XOR<MedicoUpdateWithoutEmpleadoInput, MedicoUncheckedUpdateWithoutEmpleadoInput>
    create: XOR<MedicoCreateWithoutEmpleadoInput, MedicoUncheckedCreateWithoutEmpleadoInput>
  }

  export type MedicoUpdateWithWhereUniqueWithoutEmpleadoInput = {
    where: MedicoWhereUniqueInput
    data: XOR<MedicoUpdateWithoutEmpleadoInput, MedicoUncheckedUpdateWithoutEmpleadoInput>
  }

  export type MedicoUpdateManyWithWhereWithoutEmpleadoInput = {
    where: MedicoScalarWhereInput
    data: XOR<MedicoUpdateManyMutationInput, MedicoUncheckedUpdateManyWithoutEmpleadoInput>
  }

  export type MedicoScalarWhereInput = {
    AND?: MedicoScalarWhereInput | MedicoScalarWhereInput[]
    OR?: MedicoScalarWhereInput[]
    NOT?: MedicoScalarWhereInput | MedicoScalarWhereInput[]
    idMedico?: IntFilter<"Medico"> | number
    idEmpleado?: IntFilter<"Medico"> | number
    sueldo?: BigIntFilter<"Medico"> | bigint | number
  }

  export type EmpleadoCreateWithoutPAdministrativoInput = {
    idUsuario: bigint | number
    idDepartamento: number
    FContratacion?: Date | string
    estado?: string
    medico?: MedicoCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoUncheckedCreateWithoutPAdministrativoInput = {
    idEmpleado?: number
    idUsuario: bigint | number
    idDepartamento: number
    FContratacion?: Date | string
    estado?: string
    medico?: MedicoUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoCreateOrConnectWithoutPAdministrativoInput = {
    where: EmpleadoWhereUniqueInput
    create: XOR<EmpleadoCreateWithoutPAdministrativoInput, EmpleadoUncheckedCreateWithoutPAdministrativoInput>
  }

  export type PAdmin_Modifica_PacienteCreateWithoutPAdministrativoInput = {
    idPaciente: number
    FModificacion?: Date | string
    descripcion: string
  }

  export type PAdmin_Modifica_PacienteUncheckedCreateWithoutPAdministrativoInput = {
    idPaciente: number
    FModificacion?: Date | string
    descripcion: string
  }

  export type PAdmin_Modifica_PacienteCreateOrConnectWithoutPAdministrativoInput = {
    where: PAdmin_Modifica_PacienteWhereUniqueInput
    create: XOR<PAdmin_Modifica_PacienteCreateWithoutPAdministrativoInput, PAdmin_Modifica_PacienteUncheckedCreateWithoutPAdministrativoInput>
  }

  export type PAdmin_Modifica_PacienteCreateManyPAdministrativoInputEnvelope = {
    data: PAdmin_Modifica_PacienteCreateManyPAdministrativoInput | PAdmin_Modifica_PacienteCreateManyPAdministrativoInput[]
    skipDuplicates?: boolean
  }

  export type PAdmin_Gestiona_CitaCreateWithoutPAdministrativoInput = {
    accion?: string
    FAccion?: Date | string
    cita: CitaCreateNestedOneWithoutPAdmin_Gestiona_CitaInput
  }

  export type PAdmin_Gestiona_CitaUncheckedCreateWithoutPAdministrativoInput = {
    idCita: number
    accion?: string
    FAccion?: Date | string
  }

  export type PAdmin_Gestiona_CitaCreateOrConnectWithoutPAdministrativoInput = {
    where: PAdmin_Gestiona_CitaWhereUniqueInput
    create: XOR<PAdmin_Gestiona_CitaCreateWithoutPAdministrativoInput, PAdmin_Gestiona_CitaUncheckedCreateWithoutPAdministrativoInput>
  }

  export type PAdmin_Gestiona_CitaCreateManyPAdministrativoInputEnvelope = {
    data: PAdmin_Gestiona_CitaCreateManyPAdministrativoInput | PAdmin_Gestiona_CitaCreateManyPAdministrativoInput[]
    skipDuplicates?: boolean
  }

  export type EmpleadoUpsertWithoutPAdministrativoInput = {
    update: XOR<EmpleadoUpdateWithoutPAdministrativoInput, EmpleadoUncheckedUpdateWithoutPAdministrativoInput>
    create: XOR<EmpleadoCreateWithoutPAdministrativoInput, EmpleadoUncheckedCreateWithoutPAdministrativoInput>
    where?: EmpleadoWhereInput
  }

  export type EmpleadoUpdateToOneWithWhereWithoutPAdministrativoInput = {
    where?: EmpleadoWhereInput
    data: XOR<EmpleadoUpdateWithoutPAdministrativoInput, EmpleadoUncheckedUpdateWithoutPAdministrativoInput>
  }

  export type EmpleadoUpdateWithoutPAdministrativoInput = {
    idUsuario?: BigIntFieldUpdateOperationsInput | bigint | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
    FContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoUncheckedUpdateWithoutPAdministrativoInput = {
    idEmpleado?: IntFieldUpdateOperationsInput | number
    idUsuario?: BigIntFieldUpdateOperationsInput | bigint | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
    FContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type PAdmin_Modifica_PacienteUpsertWithWhereUniqueWithoutPAdministrativoInput = {
    where: PAdmin_Modifica_PacienteWhereUniqueInput
    update: XOR<PAdmin_Modifica_PacienteUpdateWithoutPAdministrativoInput, PAdmin_Modifica_PacienteUncheckedUpdateWithoutPAdministrativoInput>
    create: XOR<PAdmin_Modifica_PacienteCreateWithoutPAdministrativoInput, PAdmin_Modifica_PacienteUncheckedCreateWithoutPAdministrativoInput>
  }

  export type PAdmin_Modifica_PacienteUpdateWithWhereUniqueWithoutPAdministrativoInput = {
    where: PAdmin_Modifica_PacienteWhereUniqueInput
    data: XOR<PAdmin_Modifica_PacienteUpdateWithoutPAdministrativoInput, PAdmin_Modifica_PacienteUncheckedUpdateWithoutPAdministrativoInput>
  }

  export type PAdmin_Modifica_PacienteUpdateManyWithWhereWithoutPAdministrativoInput = {
    where: PAdmin_Modifica_PacienteScalarWhereInput
    data: XOR<PAdmin_Modifica_PacienteUpdateManyMutationInput, PAdmin_Modifica_PacienteUncheckedUpdateManyWithoutPAdministrativoInput>
  }

  export type PAdmin_Modifica_PacienteScalarWhereInput = {
    AND?: PAdmin_Modifica_PacienteScalarWhereInput | PAdmin_Modifica_PacienteScalarWhereInput[]
    OR?: PAdmin_Modifica_PacienteScalarWhereInput[]
    NOT?: PAdmin_Modifica_PacienteScalarWhereInput | PAdmin_Modifica_PacienteScalarWhereInput[]
    idPAdministrativo?: IntFilter<"PAdmin_Modifica_Paciente"> | number
    idPaciente?: IntFilter<"PAdmin_Modifica_Paciente"> | number
    FModificacion?: DateTimeFilter<"PAdmin_Modifica_Paciente"> | Date | string
    descripcion?: StringFilter<"PAdmin_Modifica_Paciente"> | string
  }

  export type PAdmin_Gestiona_CitaUpsertWithWhereUniqueWithoutPAdministrativoInput = {
    where: PAdmin_Gestiona_CitaWhereUniqueInput
    update: XOR<PAdmin_Gestiona_CitaUpdateWithoutPAdministrativoInput, PAdmin_Gestiona_CitaUncheckedUpdateWithoutPAdministrativoInput>
    create: XOR<PAdmin_Gestiona_CitaCreateWithoutPAdministrativoInput, PAdmin_Gestiona_CitaUncheckedCreateWithoutPAdministrativoInput>
  }

  export type PAdmin_Gestiona_CitaUpdateWithWhereUniqueWithoutPAdministrativoInput = {
    where: PAdmin_Gestiona_CitaWhereUniqueInput
    data: XOR<PAdmin_Gestiona_CitaUpdateWithoutPAdministrativoInput, PAdmin_Gestiona_CitaUncheckedUpdateWithoutPAdministrativoInput>
  }

  export type PAdmin_Gestiona_CitaUpdateManyWithWhereWithoutPAdministrativoInput = {
    where: PAdmin_Gestiona_CitaScalarWhereInput
    data: XOR<PAdmin_Gestiona_CitaUpdateManyMutationInput, PAdmin_Gestiona_CitaUncheckedUpdateManyWithoutPAdministrativoInput>
  }

  export type PAdmin_Gestiona_CitaScalarWhereInput = {
    AND?: PAdmin_Gestiona_CitaScalarWhereInput | PAdmin_Gestiona_CitaScalarWhereInput[]
    OR?: PAdmin_Gestiona_CitaScalarWhereInput[]
    NOT?: PAdmin_Gestiona_CitaScalarWhereInput | PAdmin_Gestiona_CitaScalarWhereInput[]
    idPAdministrativo?: IntFilter<"PAdmin_Gestiona_Cita"> | number
    idCita?: IntFilter<"PAdmin_Gestiona_Cita"> | number
    accion?: StringFilter<"PAdmin_Gestiona_Cita"> | string
    FAccion?: DateTimeFilter<"PAdmin_Gestiona_Cita"> | Date | string
  }

  export type EmpleadoCreateWithoutMedicoInput = {
    idUsuario: bigint | number
    idDepartamento: number
    FContratacion?: Date | string
    estado?: string
    pAdministrativo?: PAdministrativoCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoUncheckedCreateWithoutMedicoInput = {
    idEmpleado?: number
    idUsuario: bigint | number
    idDepartamento: number
    FContratacion?: Date | string
    estado?: string
    pAdministrativo?: PAdministrativoUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type EmpleadoCreateOrConnectWithoutMedicoInput = {
    where: EmpleadoWhereUniqueInput
    create: XOR<EmpleadoCreateWithoutMedicoInput, EmpleadoUncheckedCreateWithoutMedicoInput>
  }

  export type Medico_EquipoCreateWithoutMedicoInput = {
    FPrestamo: Date | string
    FDevolucion: Date | string
    equipamiento: EquipamientoCreateNestedOneWithoutMedicoEquipoInput
  }

  export type Medico_EquipoUncheckedCreateWithoutMedicoInput = {
    idEquipamiento: number
    FPrestamo: Date | string
    FDevolucion: Date | string
  }

  export type Medico_EquipoCreateOrConnectWithoutMedicoInput = {
    where: Medico_EquipoWhereUniqueInput
    create: XOR<Medico_EquipoCreateWithoutMedicoInput, Medico_EquipoUncheckedCreateWithoutMedicoInput>
  }

  export type Medico_EquipoCreateManyMedicoInputEnvelope = {
    data: Medico_EquipoCreateManyMedicoInput | Medico_EquipoCreateManyMedicoInput[]
    skipDuplicates?: boolean
  }

  export type CitaCreateWithoutMedicoInput = {
    idPaciente: number
    fechaYHora: Date | string
    estado?: string
    resumen: string
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaCreateNestedManyWithoutCitaInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoCreateNestedManyWithoutCitaInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaCreateNestedManyWithoutCitaInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoCreateNestedManyWithoutCitaInput
  }

  export type CitaUncheckedCreateWithoutMedicoInput = {
    idCita?: number
    idPaciente: number
    fechaYHora: Date | string
    estado?: string
    resumen: string
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedCreateNestedManyWithoutCitaInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedCreateNestedManyWithoutCitaInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUncheckedCreateNestedManyWithoutCitaInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedCreateNestedManyWithoutCitaInput
  }

  export type CitaCreateOrConnectWithoutMedicoInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutMedicoInput, CitaUncheckedCreateWithoutMedicoInput>
  }

  export type CitaCreateManyMedicoInputEnvelope = {
    data: CitaCreateManyMedicoInput | CitaCreateManyMedicoInput[]
    skipDuplicates?: boolean
  }

  export type Actualizaciones_HistoriaClinicaCreateWithoutMedicoInput = {
    idHistoriaClinica: number
    FActualizacion?: Date | string
    cita: CitaCreateNestedOneWithoutActualizaciones_HistoriaClinicaInput
  }

  export type Actualizaciones_HistoriaClinicaUncheckedCreateWithoutMedicoInput = {
    idCita: number
    idHistoriaClinica: number
    FActualizacion?: Date | string
  }

  export type Actualizaciones_HistoriaClinicaCreateOrConnectWithoutMedicoInput = {
    where: Actualizaciones_HistoriaClinicaWhereUniqueInput
    create: XOR<Actualizaciones_HistoriaClinicaCreateWithoutMedicoInput, Actualizaciones_HistoriaClinicaUncheckedCreateWithoutMedicoInput>
  }

  export type Actualizaciones_HistoriaClinicaCreateManyMedicoInputEnvelope = {
    data: Actualizaciones_HistoriaClinicaCreateManyMedicoInput | Actualizaciones_HistoriaClinicaCreateManyMedicoInput[]
    skipDuplicates?: boolean
  }

  export type Medico_Preescribe_MedicamentoCreateWithoutMedicoInput = {
    idMedicamento: number
    idPaciente: number
    posologia: string
    particular?: string
    cita: CitaCreateNestedOneWithoutMedico_Preescribe_MedicamentoInput
  }

  export type Medico_Preescribe_MedicamentoUncheckedCreateWithoutMedicoInput = {
    idCita: number
    idMedicamento: number
    idPaciente: number
    posologia: string
    particular?: string
  }

  export type Medico_Preescribe_MedicamentoCreateOrConnectWithoutMedicoInput = {
    where: Medico_Preescribe_MedicamentoWhereUniqueInput
    create: XOR<Medico_Preescribe_MedicamentoCreateWithoutMedicoInput, Medico_Preescribe_MedicamentoUncheckedCreateWithoutMedicoInput>
  }

  export type Medico_Preescribe_MedicamentoCreateManyMedicoInputEnvelope = {
    data: Medico_Preescribe_MedicamentoCreateManyMedicoInput | Medico_Preescribe_MedicamentoCreateManyMedicoInput[]
    skipDuplicates?: boolean
  }

  export type Registro_Consulta_MedicamentoCreateWithoutMedicoInput = {
    idMedicamento: number
    FConsulta?: Date | string
  }

  export type Registro_Consulta_MedicamentoUncheckedCreateWithoutMedicoInput = {
    idMedicamento: number
    FConsulta?: Date | string
  }

  export type Registro_Consulta_MedicamentoCreateOrConnectWithoutMedicoInput = {
    where: Registro_Consulta_MedicamentoWhereUniqueInput
    create: XOR<Registro_Consulta_MedicamentoCreateWithoutMedicoInput, Registro_Consulta_MedicamentoUncheckedCreateWithoutMedicoInput>
  }

  export type Registro_Consulta_MedicamentoCreateManyMedicoInputEnvelope = {
    data: Registro_Consulta_MedicamentoCreateManyMedicoInput | Registro_Consulta_MedicamentoCreateManyMedicoInput[]
    skipDuplicates?: boolean
  }

  export type Medico_dictamina_diagnosticoCreateWithoutMedicoInput = {
    diagnostico: DiagnosticoCreateNestedOneWithoutMedicoDictaminaDiagnosticoInput
    cita: CitaCreateNestedOneWithoutMedico_dictamina_diagnosticoInput
  }

  export type Medico_dictamina_diagnosticoUncheckedCreateWithoutMedicoInput = {
    idDiagnostico: number
    idCita: number
  }

  export type Medico_dictamina_diagnosticoCreateOrConnectWithoutMedicoInput = {
    where: Medico_dictamina_diagnosticoWhereUniqueInput
    create: XOR<Medico_dictamina_diagnosticoCreateWithoutMedicoInput, Medico_dictamina_diagnosticoUncheckedCreateWithoutMedicoInput>
  }

  export type Medico_dictamina_diagnosticoCreateManyMedicoInputEnvelope = {
    data: Medico_dictamina_diagnosticoCreateManyMedicoInput | Medico_dictamina_diagnosticoCreateManyMedicoInput[]
    skipDuplicates?: boolean
  }

  export type EmpleadoUpsertWithoutMedicoInput = {
    update: XOR<EmpleadoUpdateWithoutMedicoInput, EmpleadoUncheckedUpdateWithoutMedicoInput>
    create: XOR<EmpleadoCreateWithoutMedicoInput, EmpleadoUncheckedCreateWithoutMedicoInput>
    where?: EmpleadoWhereInput
  }

  export type EmpleadoUpdateToOneWithWhereWithoutMedicoInput = {
    where?: EmpleadoWhereInput
    data: XOR<EmpleadoUpdateWithoutMedicoInput, EmpleadoUncheckedUpdateWithoutMedicoInput>
  }

  export type EmpleadoUpdateWithoutMedicoInput = {
    idUsuario?: BigIntFieldUpdateOperationsInput | bigint | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
    FContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    pAdministrativo?: PAdministrativoUpdateManyWithoutEmpleadoNestedInput
  }

  export type EmpleadoUncheckedUpdateWithoutMedicoInput = {
    idEmpleado?: IntFieldUpdateOperationsInput | number
    idUsuario?: BigIntFieldUpdateOperationsInput | bigint | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
    FContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    pAdministrativo?: PAdministrativoUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type Medico_EquipoUpsertWithWhereUniqueWithoutMedicoInput = {
    where: Medico_EquipoWhereUniqueInput
    update: XOR<Medico_EquipoUpdateWithoutMedicoInput, Medico_EquipoUncheckedUpdateWithoutMedicoInput>
    create: XOR<Medico_EquipoCreateWithoutMedicoInput, Medico_EquipoUncheckedCreateWithoutMedicoInput>
  }

  export type Medico_EquipoUpdateWithWhereUniqueWithoutMedicoInput = {
    where: Medico_EquipoWhereUniqueInput
    data: XOR<Medico_EquipoUpdateWithoutMedicoInput, Medico_EquipoUncheckedUpdateWithoutMedicoInput>
  }

  export type Medico_EquipoUpdateManyWithWhereWithoutMedicoInput = {
    where: Medico_EquipoScalarWhereInput
    data: XOR<Medico_EquipoUpdateManyMutationInput, Medico_EquipoUncheckedUpdateManyWithoutMedicoInput>
  }

  export type CitaUpsertWithWhereUniqueWithoutMedicoInput = {
    where: CitaWhereUniqueInput
    update: XOR<CitaUpdateWithoutMedicoInput, CitaUncheckedUpdateWithoutMedicoInput>
    create: XOR<CitaCreateWithoutMedicoInput, CitaUncheckedCreateWithoutMedicoInput>
  }

  export type CitaUpdateWithWhereUniqueWithoutMedicoInput = {
    where: CitaWhereUniqueInput
    data: XOR<CitaUpdateWithoutMedicoInput, CitaUncheckedUpdateWithoutMedicoInput>
  }

  export type CitaUpdateManyWithWhereWithoutMedicoInput = {
    where: CitaScalarWhereInput
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyWithoutMedicoInput>
  }

  export type CitaScalarWhereInput = {
    AND?: CitaScalarWhereInput | CitaScalarWhereInput[]
    OR?: CitaScalarWhereInput[]
    NOT?: CitaScalarWhereInput | CitaScalarWhereInput[]
    idCita?: IntFilter<"Cita"> | number
    idPaciente?: IntFilter<"Cita"> | number
    idMedico?: IntFilter<"Cita"> | number
    fechaYHora?: DateTimeFilter<"Cita"> | Date | string
    estado?: StringFilter<"Cita"> | string
    resumen?: StringFilter<"Cita"> | string
  }

  export type Actualizaciones_HistoriaClinicaUpsertWithWhereUniqueWithoutMedicoInput = {
    where: Actualizaciones_HistoriaClinicaWhereUniqueInput
    update: XOR<Actualizaciones_HistoriaClinicaUpdateWithoutMedicoInput, Actualizaciones_HistoriaClinicaUncheckedUpdateWithoutMedicoInput>
    create: XOR<Actualizaciones_HistoriaClinicaCreateWithoutMedicoInput, Actualizaciones_HistoriaClinicaUncheckedCreateWithoutMedicoInput>
  }

  export type Actualizaciones_HistoriaClinicaUpdateWithWhereUniqueWithoutMedicoInput = {
    where: Actualizaciones_HistoriaClinicaWhereUniqueInput
    data: XOR<Actualizaciones_HistoriaClinicaUpdateWithoutMedicoInput, Actualizaciones_HistoriaClinicaUncheckedUpdateWithoutMedicoInput>
  }

  export type Actualizaciones_HistoriaClinicaUpdateManyWithWhereWithoutMedicoInput = {
    where: Actualizaciones_HistoriaClinicaScalarWhereInput
    data: XOR<Actualizaciones_HistoriaClinicaUpdateManyMutationInput, Actualizaciones_HistoriaClinicaUncheckedUpdateManyWithoutMedicoInput>
  }

  export type Actualizaciones_HistoriaClinicaScalarWhereInput = {
    AND?: Actualizaciones_HistoriaClinicaScalarWhereInput | Actualizaciones_HistoriaClinicaScalarWhereInput[]
    OR?: Actualizaciones_HistoriaClinicaScalarWhereInput[]
    NOT?: Actualizaciones_HistoriaClinicaScalarWhereInput | Actualizaciones_HistoriaClinicaScalarWhereInput[]
    idMedico?: IntFilter<"Actualizaciones_HistoriaClinica"> | number
    idCita?: IntFilter<"Actualizaciones_HistoriaClinica"> | number
    idHistoriaClinica?: IntFilter<"Actualizaciones_HistoriaClinica"> | number
    FActualizacion?: DateTimeFilter<"Actualizaciones_HistoriaClinica"> | Date | string
  }

  export type Medico_Preescribe_MedicamentoUpsertWithWhereUniqueWithoutMedicoInput = {
    where: Medico_Preescribe_MedicamentoWhereUniqueInput
    update: XOR<Medico_Preescribe_MedicamentoUpdateWithoutMedicoInput, Medico_Preescribe_MedicamentoUncheckedUpdateWithoutMedicoInput>
    create: XOR<Medico_Preescribe_MedicamentoCreateWithoutMedicoInput, Medico_Preescribe_MedicamentoUncheckedCreateWithoutMedicoInput>
  }

  export type Medico_Preescribe_MedicamentoUpdateWithWhereUniqueWithoutMedicoInput = {
    where: Medico_Preescribe_MedicamentoWhereUniqueInput
    data: XOR<Medico_Preescribe_MedicamentoUpdateWithoutMedicoInput, Medico_Preescribe_MedicamentoUncheckedUpdateWithoutMedicoInput>
  }

  export type Medico_Preescribe_MedicamentoUpdateManyWithWhereWithoutMedicoInput = {
    where: Medico_Preescribe_MedicamentoScalarWhereInput
    data: XOR<Medico_Preescribe_MedicamentoUpdateManyMutationInput, Medico_Preescribe_MedicamentoUncheckedUpdateManyWithoutMedicoInput>
  }

  export type Medico_Preescribe_MedicamentoScalarWhereInput = {
    AND?: Medico_Preescribe_MedicamentoScalarWhereInput | Medico_Preescribe_MedicamentoScalarWhereInput[]
    OR?: Medico_Preescribe_MedicamentoScalarWhereInput[]
    NOT?: Medico_Preescribe_MedicamentoScalarWhereInput | Medico_Preescribe_MedicamentoScalarWhereInput[]
    idMedico?: IntFilter<"Medico_Preescribe_Medicamento"> | number
    idCita?: IntFilter<"Medico_Preescribe_Medicamento"> | number
    idMedicamento?: IntFilter<"Medico_Preescribe_Medicamento"> | number
    idPaciente?: IntFilter<"Medico_Preescribe_Medicamento"> | number
    posologia?: StringFilter<"Medico_Preescribe_Medicamento"> | string
    particular?: StringFilter<"Medico_Preescribe_Medicamento"> | string
  }

  export type Registro_Consulta_MedicamentoUpsertWithWhereUniqueWithoutMedicoInput = {
    where: Registro_Consulta_MedicamentoWhereUniqueInput
    update: XOR<Registro_Consulta_MedicamentoUpdateWithoutMedicoInput, Registro_Consulta_MedicamentoUncheckedUpdateWithoutMedicoInput>
    create: XOR<Registro_Consulta_MedicamentoCreateWithoutMedicoInput, Registro_Consulta_MedicamentoUncheckedCreateWithoutMedicoInput>
  }

  export type Registro_Consulta_MedicamentoUpdateWithWhereUniqueWithoutMedicoInput = {
    where: Registro_Consulta_MedicamentoWhereUniqueInput
    data: XOR<Registro_Consulta_MedicamentoUpdateWithoutMedicoInput, Registro_Consulta_MedicamentoUncheckedUpdateWithoutMedicoInput>
  }

  export type Registro_Consulta_MedicamentoUpdateManyWithWhereWithoutMedicoInput = {
    where: Registro_Consulta_MedicamentoScalarWhereInput
    data: XOR<Registro_Consulta_MedicamentoUpdateManyMutationInput, Registro_Consulta_MedicamentoUncheckedUpdateManyWithoutMedicoInput>
  }

  export type Registro_Consulta_MedicamentoScalarWhereInput = {
    AND?: Registro_Consulta_MedicamentoScalarWhereInput | Registro_Consulta_MedicamentoScalarWhereInput[]
    OR?: Registro_Consulta_MedicamentoScalarWhereInput[]
    NOT?: Registro_Consulta_MedicamentoScalarWhereInput | Registro_Consulta_MedicamentoScalarWhereInput[]
    idMedico?: IntFilter<"Registro_Consulta_Medicamento"> | number
    idMedicamento?: IntFilter<"Registro_Consulta_Medicamento"> | number
    FConsulta?: DateTimeFilter<"Registro_Consulta_Medicamento"> | Date | string
  }

  export type Medico_dictamina_diagnosticoUpsertWithWhereUniqueWithoutMedicoInput = {
    where: Medico_dictamina_diagnosticoWhereUniqueInput
    update: XOR<Medico_dictamina_diagnosticoUpdateWithoutMedicoInput, Medico_dictamina_diagnosticoUncheckedUpdateWithoutMedicoInput>
    create: XOR<Medico_dictamina_diagnosticoCreateWithoutMedicoInput, Medico_dictamina_diagnosticoUncheckedCreateWithoutMedicoInput>
  }

  export type Medico_dictamina_diagnosticoUpdateWithWhereUniqueWithoutMedicoInput = {
    where: Medico_dictamina_diagnosticoWhereUniqueInput
    data: XOR<Medico_dictamina_diagnosticoUpdateWithoutMedicoInput, Medico_dictamina_diagnosticoUncheckedUpdateWithoutMedicoInput>
  }

  export type Medico_dictamina_diagnosticoUpdateManyWithWhereWithoutMedicoInput = {
    where: Medico_dictamina_diagnosticoScalarWhereInput
    data: XOR<Medico_dictamina_diagnosticoUpdateManyMutationInput, Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutMedicoInput>
  }

  export type Medico_dictamina_diagnosticoScalarWhereInput = {
    AND?: Medico_dictamina_diagnosticoScalarWhereInput | Medico_dictamina_diagnosticoScalarWhereInput[]
    OR?: Medico_dictamina_diagnosticoScalarWhereInput[]
    NOT?: Medico_dictamina_diagnosticoScalarWhereInput | Medico_dictamina_diagnosticoScalarWhereInput[]
    idDiagnostico?: IntFilter<"Medico_dictamina_diagnostico"> | number
    idMedico?: IntFilter<"Medico_dictamina_diagnostico"> | number
    idCita?: IntFilter<"Medico_dictamina_diagnostico"> | number
  }

  export type MedicoCreateWithoutMedicoEquipoInput = {
    sueldo: bigint | number
    empleado: EmpleadoCreateNestedOneWithoutMedicoInput
    Cita?: CitaCreateNestedManyWithoutMedicoInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaCreateNestedManyWithoutMedicoInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoCreateNestedManyWithoutMedicoInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoCreateNestedManyWithoutMedicoInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutMedicoEquipoInput = {
    idMedico?: number
    idEmpleado: number
    sueldo: bigint | number
    Cita?: CitaUncheckedCreateNestedManyWithoutMedicoInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedCreateNestedManyWithoutMedicoInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUncheckedCreateNestedManyWithoutMedicoInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutMedicoEquipoInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutMedicoEquipoInput, MedicoUncheckedCreateWithoutMedicoEquipoInput>
  }

  export type EquipamientoCreateWithoutMedicoEquipoInput = {
    idDepartamento: number
    nombre: string
    estado?: string
    FContratacion?: Date | string
  }

  export type EquipamientoUncheckedCreateWithoutMedicoEquipoInput = {
    idEquipamiento?: number
    idDepartamento: number
    nombre: string
    estado?: string
    FContratacion?: Date | string
  }

  export type EquipamientoCreateOrConnectWithoutMedicoEquipoInput = {
    where: EquipamientoWhereUniqueInput
    create: XOR<EquipamientoCreateWithoutMedicoEquipoInput, EquipamientoUncheckedCreateWithoutMedicoEquipoInput>
  }

  export type MedicoUpsertWithoutMedicoEquipoInput = {
    update: XOR<MedicoUpdateWithoutMedicoEquipoInput, MedicoUncheckedUpdateWithoutMedicoEquipoInput>
    create: XOR<MedicoCreateWithoutMedicoEquipoInput, MedicoUncheckedCreateWithoutMedicoEquipoInput>
    where?: MedicoWhereInput
  }

  export type MedicoUpdateToOneWithWhereWithoutMedicoEquipoInput = {
    where?: MedicoWhereInput
    data: XOR<MedicoUpdateWithoutMedicoEquipoInput, MedicoUncheckedUpdateWithoutMedicoEquipoInput>
  }

  export type MedicoUpdateWithoutMedicoEquipoInput = {
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    empleado?: EmpleadoUpdateOneRequiredWithoutMedicoNestedInput
    Cita?: CitaUpdateManyWithoutMedicoNestedInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUpdateManyWithoutMedicoNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUpdateManyWithoutMedicoNestedInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUpdateManyWithoutMedicoNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutMedicoEquipoInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idEmpleado?: IntFieldUpdateOperationsInput | number
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    Cita?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedUpdateManyWithoutMedicoNestedInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUncheckedUpdateManyWithoutMedicoNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type EquipamientoUpsertWithoutMedicoEquipoInput = {
    update: XOR<EquipamientoUpdateWithoutMedicoEquipoInput, EquipamientoUncheckedUpdateWithoutMedicoEquipoInput>
    create: XOR<EquipamientoCreateWithoutMedicoEquipoInput, EquipamientoUncheckedCreateWithoutMedicoEquipoInput>
    where?: EquipamientoWhereInput
  }

  export type EquipamientoUpdateToOneWithWhereWithoutMedicoEquipoInput = {
    where?: EquipamientoWhereInput
    data: XOR<EquipamientoUpdateWithoutMedicoEquipoInput, EquipamientoUncheckedUpdateWithoutMedicoEquipoInput>
  }

  export type EquipamientoUpdateWithoutMedicoEquipoInput = {
    idDepartamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    FContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipamientoUncheckedUpdateWithoutMedicoEquipoInput = {
    idEquipamiento?: IntFieldUpdateOperationsInput | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    FContratacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicoCreateWithoutCitaInput = {
    sueldo: bigint | number
    empleado: EmpleadoCreateNestedOneWithoutMedicoInput
    medicoEquipo?: Medico_EquipoCreateNestedManyWithoutMedicoInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaCreateNestedManyWithoutMedicoInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoCreateNestedManyWithoutMedicoInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoCreateNestedManyWithoutMedicoInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutCitaInput = {
    idMedico?: number
    idEmpleado: number
    sueldo: bigint | number
    medicoEquipo?: Medico_EquipoUncheckedCreateNestedManyWithoutMedicoInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedCreateNestedManyWithoutMedicoInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUncheckedCreateNestedManyWithoutMedicoInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutCitaInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutCitaInput, MedicoUncheckedCreateWithoutCitaInput>
  }

  export type Actualizaciones_HistoriaClinicaCreateWithoutCitaInput = {
    idHistoriaClinica: number
    FActualizacion?: Date | string
    medico: MedicoCreateNestedOneWithoutActualizaciones_HistoriaClinicaInput
  }

  export type Actualizaciones_HistoriaClinicaUncheckedCreateWithoutCitaInput = {
    idMedico: number
    idHistoriaClinica: number
    FActualizacion?: Date | string
  }

  export type Actualizaciones_HistoriaClinicaCreateOrConnectWithoutCitaInput = {
    where: Actualizaciones_HistoriaClinicaWhereUniqueInput
    create: XOR<Actualizaciones_HistoriaClinicaCreateWithoutCitaInput, Actualizaciones_HistoriaClinicaUncheckedCreateWithoutCitaInput>
  }

  export type Actualizaciones_HistoriaClinicaCreateManyCitaInputEnvelope = {
    data: Actualizaciones_HistoriaClinicaCreateManyCitaInput | Actualizaciones_HistoriaClinicaCreateManyCitaInput[]
    skipDuplicates?: boolean
  }

  export type Medico_Preescribe_MedicamentoCreateWithoutCitaInput = {
    idMedicamento: number
    idPaciente: number
    posologia: string
    particular?: string
    medico: MedicoCreateNestedOneWithoutMedico_Preescribe_MedicamentoInput
  }

  export type Medico_Preescribe_MedicamentoUncheckedCreateWithoutCitaInput = {
    idMedico: number
    idMedicamento: number
    idPaciente: number
    posologia: string
    particular?: string
  }

  export type Medico_Preescribe_MedicamentoCreateOrConnectWithoutCitaInput = {
    where: Medico_Preescribe_MedicamentoWhereUniqueInput
    create: XOR<Medico_Preescribe_MedicamentoCreateWithoutCitaInput, Medico_Preescribe_MedicamentoUncheckedCreateWithoutCitaInput>
  }

  export type Medico_Preescribe_MedicamentoCreateManyCitaInputEnvelope = {
    data: Medico_Preescribe_MedicamentoCreateManyCitaInput | Medico_Preescribe_MedicamentoCreateManyCitaInput[]
    skipDuplicates?: boolean
  }

  export type PAdmin_Gestiona_CitaCreateWithoutCitaInput = {
    accion?: string
    FAccion?: Date | string
    pAdministrativo: PAdministrativoCreateNestedOneWithoutPAdmin_Gestiona_CitaInput
  }

  export type PAdmin_Gestiona_CitaUncheckedCreateWithoutCitaInput = {
    idPAdministrativo: number
    accion?: string
    FAccion?: Date | string
  }

  export type PAdmin_Gestiona_CitaCreateOrConnectWithoutCitaInput = {
    where: PAdmin_Gestiona_CitaWhereUniqueInput
    create: XOR<PAdmin_Gestiona_CitaCreateWithoutCitaInput, PAdmin_Gestiona_CitaUncheckedCreateWithoutCitaInput>
  }

  export type PAdmin_Gestiona_CitaCreateManyCitaInputEnvelope = {
    data: PAdmin_Gestiona_CitaCreateManyCitaInput | PAdmin_Gestiona_CitaCreateManyCitaInput[]
    skipDuplicates?: boolean
  }

  export type Medico_dictamina_diagnosticoCreateWithoutCitaInput = {
    diagnostico: DiagnosticoCreateNestedOneWithoutMedicoDictaminaDiagnosticoInput
    medico: MedicoCreateNestedOneWithoutMedico_dictamina_diagnosticoInput
  }

  export type Medico_dictamina_diagnosticoUncheckedCreateWithoutCitaInput = {
    idDiagnostico: number
    idMedico: number
  }

  export type Medico_dictamina_diagnosticoCreateOrConnectWithoutCitaInput = {
    where: Medico_dictamina_diagnosticoWhereUniqueInput
    create: XOR<Medico_dictamina_diagnosticoCreateWithoutCitaInput, Medico_dictamina_diagnosticoUncheckedCreateWithoutCitaInput>
  }

  export type Medico_dictamina_diagnosticoCreateManyCitaInputEnvelope = {
    data: Medico_dictamina_diagnosticoCreateManyCitaInput | Medico_dictamina_diagnosticoCreateManyCitaInput[]
    skipDuplicates?: boolean
  }

  export type MedicoUpsertWithoutCitaInput = {
    update: XOR<MedicoUpdateWithoutCitaInput, MedicoUncheckedUpdateWithoutCitaInput>
    create: XOR<MedicoCreateWithoutCitaInput, MedicoUncheckedCreateWithoutCitaInput>
    where?: MedicoWhereInput
  }

  export type MedicoUpdateToOneWithWhereWithoutCitaInput = {
    where?: MedicoWhereInput
    data: XOR<MedicoUpdateWithoutCitaInput, MedicoUncheckedUpdateWithoutCitaInput>
  }

  export type MedicoUpdateWithoutCitaInput = {
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    empleado?: EmpleadoUpdateOneRequiredWithoutMedicoNestedInput
    medicoEquipo?: Medico_EquipoUpdateManyWithoutMedicoNestedInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUpdateManyWithoutMedicoNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUpdateManyWithoutMedicoNestedInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUpdateManyWithoutMedicoNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutCitaInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idEmpleado?: IntFieldUpdateOperationsInput | number
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    medicoEquipo?: Medico_EquipoUncheckedUpdateManyWithoutMedicoNestedInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedUpdateManyWithoutMedicoNestedInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUncheckedUpdateManyWithoutMedicoNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type Actualizaciones_HistoriaClinicaUpsertWithWhereUniqueWithoutCitaInput = {
    where: Actualizaciones_HistoriaClinicaWhereUniqueInput
    update: XOR<Actualizaciones_HistoriaClinicaUpdateWithoutCitaInput, Actualizaciones_HistoriaClinicaUncheckedUpdateWithoutCitaInput>
    create: XOR<Actualizaciones_HistoriaClinicaCreateWithoutCitaInput, Actualizaciones_HistoriaClinicaUncheckedCreateWithoutCitaInput>
  }

  export type Actualizaciones_HistoriaClinicaUpdateWithWhereUniqueWithoutCitaInput = {
    where: Actualizaciones_HistoriaClinicaWhereUniqueInput
    data: XOR<Actualizaciones_HistoriaClinicaUpdateWithoutCitaInput, Actualizaciones_HistoriaClinicaUncheckedUpdateWithoutCitaInput>
  }

  export type Actualizaciones_HistoriaClinicaUpdateManyWithWhereWithoutCitaInput = {
    where: Actualizaciones_HistoriaClinicaScalarWhereInput
    data: XOR<Actualizaciones_HistoriaClinicaUpdateManyMutationInput, Actualizaciones_HistoriaClinicaUncheckedUpdateManyWithoutCitaInput>
  }

  export type Medico_Preescribe_MedicamentoUpsertWithWhereUniqueWithoutCitaInput = {
    where: Medico_Preescribe_MedicamentoWhereUniqueInput
    update: XOR<Medico_Preescribe_MedicamentoUpdateWithoutCitaInput, Medico_Preescribe_MedicamentoUncheckedUpdateWithoutCitaInput>
    create: XOR<Medico_Preescribe_MedicamentoCreateWithoutCitaInput, Medico_Preescribe_MedicamentoUncheckedCreateWithoutCitaInput>
  }

  export type Medico_Preescribe_MedicamentoUpdateWithWhereUniqueWithoutCitaInput = {
    where: Medico_Preescribe_MedicamentoWhereUniqueInput
    data: XOR<Medico_Preescribe_MedicamentoUpdateWithoutCitaInput, Medico_Preescribe_MedicamentoUncheckedUpdateWithoutCitaInput>
  }

  export type Medico_Preescribe_MedicamentoUpdateManyWithWhereWithoutCitaInput = {
    where: Medico_Preescribe_MedicamentoScalarWhereInput
    data: XOR<Medico_Preescribe_MedicamentoUpdateManyMutationInput, Medico_Preescribe_MedicamentoUncheckedUpdateManyWithoutCitaInput>
  }

  export type PAdmin_Gestiona_CitaUpsertWithWhereUniqueWithoutCitaInput = {
    where: PAdmin_Gestiona_CitaWhereUniqueInput
    update: XOR<PAdmin_Gestiona_CitaUpdateWithoutCitaInput, PAdmin_Gestiona_CitaUncheckedUpdateWithoutCitaInput>
    create: XOR<PAdmin_Gestiona_CitaCreateWithoutCitaInput, PAdmin_Gestiona_CitaUncheckedCreateWithoutCitaInput>
  }

  export type PAdmin_Gestiona_CitaUpdateWithWhereUniqueWithoutCitaInput = {
    where: PAdmin_Gestiona_CitaWhereUniqueInput
    data: XOR<PAdmin_Gestiona_CitaUpdateWithoutCitaInput, PAdmin_Gestiona_CitaUncheckedUpdateWithoutCitaInput>
  }

  export type PAdmin_Gestiona_CitaUpdateManyWithWhereWithoutCitaInput = {
    where: PAdmin_Gestiona_CitaScalarWhereInput
    data: XOR<PAdmin_Gestiona_CitaUpdateManyMutationInput, PAdmin_Gestiona_CitaUncheckedUpdateManyWithoutCitaInput>
  }

  export type Medico_dictamina_diagnosticoUpsertWithWhereUniqueWithoutCitaInput = {
    where: Medico_dictamina_diagnosticoWhereUniqueInput
    update: XOR<Medico_dictamina_diagnosticoUpdateWithoutCitaInput, Medico_dictamina_diagnosticoUncheckedUpdateWithoutCitaInput>
    create: XOR<Medico_dictamina_diagnosticoCreateWithoutCitaInput, Medico_dictamina_diagnosticoUncheckedCreateWithoutCitaInput>
  }

  export type Medico_dictamina_diagnosticoUpdateWithWhereUniqueWithoutCitaInput = {
    where: Medico_dictamina_diagnosticoWhereUniqueInput
    data: XOR<Medico_dictamina_diagnosticoUpdateWithoutCitaInput, Medico_dictamina_diagnosticoUncheckedUpdateWithoutCitaInput>
  }

  export type Medico_dictamina_diagnosticoUpdateManyWithWhereWithoutCitaInput = {
    where: Medico_dictamina_diagnosticoScalarWhereInput
    data: XOR<Medico_dictamina_diagnosticoUpdateManyMutationInput, Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutCitaInput>
  }

  export type PAdministrativoCreateWithoutPAdmin_Modifica_PacienteInput = {
    sueldo: bigint | number
    empleado: EmpleadoCreateNestedOneWithoutPAdministrativoInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaCreateNestedManyWithoutPAdministrativoInput
  }

  export type PAdministrativoUncheckedCreateWithoutPAdmin_Modifica_PacienteInput = {
    idPAdministrativo?: number
    idEmpleado: number
    sueldo: bigint | number
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUncheckedCreateNestedManyWithoutPAdministrativoInput
  }

  export type PAdministrativoCreateOrConnectWithoutPAdmin_Modifica_PacienteInput = {
    where: PAdministrativoWhereUniqueInput
    create: XOR<PAdministrativoCreateWithoutPAdmin_Modifica_PacienteInput, PAdministrativoUncheckedCreateWithoutPAdmin_Modifica_PacienteInput>
  }

  export type PAdministrativoUpsertWithoutPAdmin_Modifica_PacienteInput = {
    update: XOR<PAdministrativoUpdateWithoutPAdmin_Modifica_PacienteInput, PAdministrativoUncheckedUpdateWithoutPAdmin_Modifica_PacienteInput>
    create: XOR<PAdministrativoCreateWithoutPAdmin_Modifica_PacienteInput, PAdministrativoUncheckedCreateWithoutPAdmin_Modifica_PacienteInput>
    where?: PAdministrativoWhereInput
  }

  export type PAdministrativoUpdateToOneWithWhereWithoutPAdmin_Modifica_PacienteInput = {
    where?: PAdministrativoWhereInput
    data: XOR<PAdministrativoUpdateWithoutPAdmin_Modifica_PacienteInput, PAdministrativoUncheckedUpdateWithoutPAdmin_Modifica_PacienteInput>
  }

  export type PAdministrativoUpdateWithoutPAdmin_Modifica_PacienteInput = {
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    empleado?: EmpleadoUpdateOneRequiredWithoutPAdministrativoNestedInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUpdateManyWithoutPAdministrativoNestedInput
  }

  export type PAdministrativoUncheckedUpdateWithoutPAdmin_Modifica_PacienteInput = {
    idPAdministrativo?: IntFieldUpdateOperationsInput | number
    idEmpleado?: IntFieldUpdateOperationsInput | number
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUncheckedUpdateManyWithoutPAdministrativoNestedInput
  }

  export type MedicoCreateWithoutActualizaciones_HistoriaClinicaInput = {
    sueldo: bigint | number
    empleado: EmpleadoCreateNestedOneWithoutMedicoInput
    medicoEquipo?: Medico_EquipoCreateNestedManyWithoutMedicoInput
    Cita?: CitaCreateNestedManyWithoutMedicoInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoCreateNestedManyWithoutMedicoInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoCreateNestedManyWithoutMedicoInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutActualizaciones_HistoriaClinicaInput = {
    idMedico?: number
    idEmpleado: number
    sueldo: bigint | number
    medicoEquipo?: Medico_EquipoUncheckedCreateNestedManyWithoutMedicoInput
    Cita?: CitaUncheckedCreateNestedManyWithoutMedicoInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedCreateNestedManyWithoutMedicoInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUncheckedCreateNestedManyWithoutMedicoInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutActualizaciones_HistoriaClinicaInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutActualizaciones_HistoriaClinicaInput, MedicoUncheckedCreateWithoutActualizaciones_HistoriaClinicaInput>
  }

  export type CitaCreateWithoutActualizaciones_HistoriaClinicaInput = {
    idPaciente: number
    fechaYHora: Date | string
    estado?: string
    resumen: string
    medico: MedicoCreateNestedOneWithoutCitaInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoCreateNestedManyWithoutCitaInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaCreateNestedManyWithoutCitaInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoCreateNestedManyWithoutCitaInput
  }

  export type CitaUncheckedCreateWithoutActualizaciones_HistoriaClinicaInput = {
    idCita?: number
    idPaciente: number
    idMedico: number
    fechaYHora: Date | string
    estado?: string
    resumen: string
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedCreateNestedManyWithoutCitaInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUncheckedCreateNestedManyWithoutCitaInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedCreateNestedManyWithoutCitaInput
  }

  export type CitaCreateOrConnectWithoutActualizaciones_HistoriaClinicaInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutActualizaciones_HistoriaClinicaInput, CitaUncheckedCreateWithoutActualizaciones_HistoriaClinicaInput>
  }

  export type MedicoUpsertWithoutActualizaciones_HistoriaClinicaInput = {
    update: XOR<MedicoUpdateWithoutActualizaciones_HistoriaClinicaInput, MedicoUncheckedUpdateWithoutActualizaciones_HistoriaClinicaInput>
    create: XOR<MedicoCreateWithoutActualizaciones_HistoriaClinicaInput, MedicoUncheckedCreateWithoutActualizaciones_HistoriaClinicaInput>
    where?: MedicoWhereInput
  }

  export type MedicoUpdateToOneWithWhereWithoutActualizaciones_HistoriaClinicaInput = {
    where?: MedicoWhereInput
    data: XOR<MedicoUpdateWithoutActualizaciones_HistoriaClinicaInput, MedicoUncheckedUpdateWithoutActualizaciones_HistoriaClinicaInput>
  }

  export type MedicoUpdateWithoutActualizaciones_HistoriaClinicaInput = {
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    empleado?: EmpleadoUpdateOneRequiredWithoutMedicoNestedInput
    medicoEquipo?: Medico_EquipoUpdateManyWithoutMedicoNestedInput
    Cita?: CitaUpdateManyWithoutMedicoNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUpdateManyWithoutMedicoNestedInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUpdateManyWithoutMedicoNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutActualizaciones_HistoriaClinicaInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idEmpleado?: IntFieldUpdateOperationsInput | number
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    medicoEquipo?: Medico_EquipoUncheckedUpdateManyWithoutMedicoNestedInput
    Cita?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedUpdateManyWithoutMedicoNestedInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUncheckedUpdateManyWithoutMedicoNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type CitaUpsertWithoutActualizaciones_HistoriaClinicaInput = {
    update: XOR<CitaUpdateWithoutActualizaciones_HistoriaClinicaInput, CitaUncheckedUpdateWithoutActualizaciones_HistoriaClinicaInput>
    create: XOR<CitaCreateWithoutActualizaciones_HistoriaClinicaInput, CitaUncheckedCreateWithoutActualizaciones_HistoriaClinicaInput>
    where?: CitaWhereInput
  }

  export type CitaUpdateToOneWithWhereWithoutActualizaciones_HistoriaClinicaInput = {
    where?: CitaWhereInput
    data: XOR<CitaUpdateWithoutActualizaciones_HistoriaClinicaInput, CitaUncheckedUpdateWithoutActualizaciones_HistoriaClinicaInput>
  }

  export type CitaUpdateWithoutActualizaciones_HistoriaClinicaInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    fechaYHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneRequiredWithoutCitaNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUpdateManyWithoutCitaNestedInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUpdateManyWithoutCitaNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUpdateManyWithoutCitaNestedInput
  }

  export type CitaUncheckedUpdateWithoutActualizaciones_HistoriaClinicaInput = {
    idCita?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    idMedico?: IntFieldUpdateOperationsInput | number
    fechaYHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedUpdateManyWithoutCitaNestedInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUncheckedUpdateManyWithoutCitaNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutCitaNestedInput
  }

  export type MedicoCreateWithoutMedico_Preescribe_MedicamentoInput = {
    sueldo: bigint | number
    empleado: EmpleadoCreateNestedOneWithoutMedicoInput
    medicoEquipo?: Medico_EquipoCreateNestedManyWithoutMedicoInput
    Cita?: CitaCreateNestedManyWithoutMedicoInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaCreateNestedManyWithoutMedicoInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoCreateNestedManyWithoutMedicoInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutMedico_Preescribe_MedicamentoInput = {
    idMedico?: number
    idEmpleado: number
    sueldo: bigint | number
    medicoEquipo?: Medico_EquipoUncheckedCreateNestedManyWithoutMedicoInput
    Cita?: CitaUncheckedCreateNestedManyWithoutMedicoInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUncheckedCreateNestedManyWithoutMedicoInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutMedico_Preescribe_MedicamentoInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutMedico_Preescribe_MedicamentoInput, MedicoUncheckedCreateWithoutMedico_Preescribe_MedicamentoInput>
  }

  export type CitaCreateWithoutMedico_Preescribe_MedicamentoInput = {
    idPaciente: number
    fechaYHora: Date | string
    estado?: string
    resumen: string
    medico: MedicoCreateNestedOneWithoutCitaInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaCreateNestedManyWithoutCitaInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaCreateNestedManyWithoutCitaInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoCreateNestedManyWithoutCitaInput
  }

  export type CitaUncheckedCreateWithoutMedico_Preescribe_MedicamentoInput = {
    idCita?: number
    idPaciente: number
    idMedico: number
    fechaYHora: Date | string
    estado?: string
    resumen: string
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedCreateNestedManyWithoutCitaInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUncheckedCreateNestedManyWithoutCitaInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedCreateNestedManyWithoutCitaInput
  }

  export type CitaCreateOrConnectWithoutMedico_Preescribe_MedicamentoInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutMedico_Preescribe_MedicamentoInput, CitaUncheckedCreateWithoutMedico_Preescribe_MedicamentoInput>
  }

  export type MedicoUpsertWithoutMedico_Preescribe_MedicamentoInput = {
    update: XOR<MedicoUpdateWithoutMedico_Preescribe_MedicamentoInput, MedicoUncheckedUpdateWithoutMedico_Preescribe_MedicamentoInput>
    create: XOR<MedicoCreateWithoutMedico_Preescribe_MedicamentoInput, MedicoUncheckedCreateWithoutMedico_Preescribe_MedicamentoInput>
    where?: MedicoWhereInput
  }

  export type MedicoUpdateToOneWithWhereWithoutMedico_Preescribe_MedicamentoInput = {
    where?: MedicoWhereInput
    data: XOR<MedicoUpdateWithoutMedico_Preescribe_MedicamentoInput, MedicoUncheckedUpdateWithoutMedico_Preescribe_MedicamentoInput>
  }

  export type MedicoUpdateWithoutMedico_Preescribe_MedicamentoInput = {
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    empleado?: EmpleadoUpdateOneRequiredWithoutMedicoNestedInput
    medicoEquipo?: Medico_EquipoUpdateManyWithoutMedicoNestedInput
    Cita?: CitaUpdateManyWithoutMedicoNestedInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUpdateManyWithoutMedicoNestedInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUpdateManyWithoutMedicoNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutMedico_Preescribe_MedicamentoInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idEmpleado?: IntFieldUpdateOperationsInput | number
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    medicoEquipo?: Medico_EquipoUncheckedUpdateManyWithoutMedicoNestedInput
    Cita?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUncheckedUpdateManyWithoutMedicoNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type CitaUpsertWithoutMedico_Preescribe_MedicamentoInput = {
    update: XOR<CitaUpdateWithoutMedico_Preescribe_MedicamentoInput, CitaUncheckedUpdateWithoutMedico_Preescribe_MedicamentoInput>
    create: XOR<CitaCreateWithoutMedico_Preescribe_MedicamentoInput, CitaUncheckedCreateWithoutMedico_Preescribe_MedicamentoInput>
    where?: CitaWhereInput
  }

  export type CitaUpdateToOneWithWhereWithoutMedico_Preescribe_MedicamentoInput = {
    where?: CitaWhereInput
    data: XOR<CitaUpdateWithoutMedico_Preescribe_MedicamentoInput, CitaUncheckedUpdateWithoutMedico_Preescribe_MedicamentoInput>
  }

  export type CitaUpdateWithoutMedico_Preescribe_MedicamentoInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    fechaYHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneRequiredWithoutCitaNestedInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUpdateManyWithoutCitaNestedInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUpdateManyWithoutCitaNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUpdateManyWithoutCitaNestedInput
  }

  export type CitaUncheckedUpdateWithoutMedico_Preescribe_MedicamentoInput = {
    idCita?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    idMedico?: IntFieldUpdateOperationsInput | number
    fechaYHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedUpdateManyWithoutCitaNestedInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUncheckedUpdateManyWithoutCitaNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutCitaNestedInput
  }

  export type MedicoCreateWithoutRegistro_Consulta_MedicamentoInput = {
    sueldo: bigint | number
    empleado: EmpleadoCreateNestedOneWithoutMedicoInput
    medicoEquipo?: Medico_EquipoCreateNestedManyWithoutMedicoInput
    Cita?: CitaCreateNestedManyWithoutMedicoInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaCreateNestedManyWithoutMedicoInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoCreateNestedManyWithoutMedicoInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutRegistro_Consulta_MedicamentoInput = {
    idMedico?: number
    idEmpleado: number
    sueldo: bigint | number
    medicoEquipo?: Medico_EquipoUncheckedCreateNestedManyWithoutMedicoInput
    Cita?: CitaUncheckedCreateNestedManyWithoutMedicoInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedCreateNestedManyWithoutMedicoInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutRegistro_Consulta_MedicamentoInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutRegistro_Consulta_MedicamentoInput, MedicoUncheckedCreateWithoutRegistro_Consulta_MedicamentoInput>
  }

  export type MedicoUpsertWithoutRegistro_Consulta_MedicamentoInput = {
    update: XOR<MedicoUpdateWithoutRegistro_Consulta_MedicamentoInput, MedicoUncheckedUpdateWithoutRegistro_Consulta_MedicamentoInput>
    create: XOR<MedicoCreateWithoutRegistro_Consulta_MedicamentoInput, MedicoUncheckedCreateWithoutRegistro_Consulta_MedicamentoInput>
    where?: MedicoWhereInput
  }

  export type MedicoUpdateToOneWithWhereWithoutRegistro_Consulta_MedicamentoInput = {
    where?: MedicoWhereInput
    data: XOR<MedicoUpdateWithoutRegistro_Consulta_MedicamentoInput, MedicoUncheckedUpdateWithoutRegistro_Consulta_MedicamentoInput>
  }

  export type MedicoUpdateWithoutRegistro_Consulta_MedicamentoInput = {
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    empleado?: EmpleadoUpdateOneRequiredWithoutMedicoNestedInput
    medicoEquipo?: Medico_EquipoUpdateManyWithoutMedicoNestedInput
    Cita?: CitaUpdateManyWithoutMedicoNestedInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUpdateManyWithoutMedicoNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUpdateManyWithoutMedicoNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutRegistro_Consulta_MedicamentoInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idEmpleado?: IntFieldUpdateOperationsInput | number
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    medicoEquipo?: Medico_EquipoUncheckedUpdateManyWithoutMedicoNestedInput
    Cita?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedUpdateManyWithoutMedicoNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type PAdministrativoCreateWithoutPAdmin_Gestiona_CitaInput = {
    sueldo: bigint | number
    empleado: EmpleadoCreateNestedOneWithoutPAdministrativoInput
    PAdmin_Modifica_Paciente?: PAdmin_Modifica_PacienteCreateNestedManyWithoutPAdministrativoInput
  }

  export type PAdministrativoUncheckedCreateWithoutPAdmin_Gestiona_CitaInput = {
    idPAdministrativo?: number
    idEmpleado: number
    sueldo: bigint | number
    PAdmin_Modifica_Paciente?: PAdmin_Modifica_PacienteUncheckedCreateNestedManyWithoutPAdministrativoInput
  }

  export type PAdministrativoCreateOrConnectWithoutPAdmin_Gestiona_CitaInput = {
    where: PAdministrativoWhereUniqueInput
    create: XOR<PAdministrativoCreateWithoutPAdmin_Gestiona_CitaInput, PAdministrativoUncheckedCreateWithoutPAdmin_Gestiona_CitaInput>
  }

  export type CitaCreateWithoutPAdmin_Gestiona_CitaInput = {
    idPaciente: number
    fechaYHora: Date | string
    estado?: string
    resumen: string
    medico: MedicoCreateNestedOneWithoutCitaInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaCreateNestedManyWithoutCitaInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoCreateNestedManyWithoutCitaInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoCreateNestedManyWithoutCitaInput
  }

  export type CitaUncheckedCreateWithoutPAdmin_Gestiona_CitaInput = {
    idCita?: number
    idPaciente: number
    idMedico: number
    fechaYHora: Date | string
    estado?: string
    resumen: string
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedCreateNestedManyWithoutCitaInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedCreateNestedManyWithoutCitaInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedCreateNestedManyWithoutCitaInput
  }

  export type CitaCreateOrConnectWithoutPAdmin_Gestiona_CitaInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutPAdmin_Gestiona_CitaInput, CitaUncheckedCreateWithoutPAdmin_Gestiona_CitaInput>
  }

  export type PAdministrativoUpsertWithoutPAdmin_Gestiona_CitaInput = {
    update: XOR<PAdministrativoUpdateWithoutPAdmin_Gestiona_CitaInput, PAdministrativoUncheckedUpdateWithoutPAdmin_Gestiona_CitaInput>
    create: XOR<PAdministrativoCreateWithoutPAdmin_Gestiona_CitaInput, PAdministrativoUncheckedCreateWithoutPAdmin_Gestiona_CitaInput>
    where?: PAdministrativoWhereInput
  }

  export type PAdministrativoUpdateToOneWithWhereWithoutPAdmin_Gestiona_CitaInput = {
    where?: PAdministrativoWhereInput
    data: XOR<PAdministrativoUpdateWithoutPAdmin_Gestiona_CitaInput, PAdministrativoUncheckedUpdateWithoutPAdmin_Gestiona_CitaInput>
  }

  export type PAdministrativoUpdateWithoutPAdmin_Gestiona_CitaInput = {
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    empleado?: EmpleadoUpdateOneRequiredWithoutPAdministrativoNestedInput
    PAdmin_Modifica_Paciente?: PAdmin_Modifica_PacienteUpdateManyWithoutPAdministrativoNestedInput
  }

  export type PAdministrativoUncheckedUpdateWithoutPAdmin_Gestiona_CitaInput = {
    idPAdministrativo?: IntFieldUpdateOperationsInput | number
    idEmpleado?: IntFieldUpdateOperationsInput | number
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    PAdmin_Modifica_Paciente?: PAdmin_Modifica_PacienteUncheckedUpdateManyWithoutPAdministrativoNestedInput
  }

  export type CitaUpsertWithoutPAdmin_Gestiona_CitaInput = {
    update: XOR<CitaUpdateWithoutPAdmin_Gestiona_CitaInput, CitaUncheckedUpdateWithoutPAdmin_Gestiona_CitaInput>
    create: XOR<CitaCreateWithoutPAdmin_Gestiona_CitaInput, CitaUncheckedCreateWithoutPAdmin_Gestiona_CitaInput>
    where?: CitaWhereInput
  }

  export type CitaUpdateToOneWithWhereWithoutPAdmin_Gestiona_CitaInput = {
    where?: CitaWhereInput
    data: XOR<CitaUpdateWithoutPAdmin_Gestiona_CitaInput, CitaUncheckedUpdateWithoutPAdmin_Gestiona_CitaInput>
  }

  export type CitaUpdateWithoutPAdmin_Gestiona_CitaInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    fechaYHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneRequiredWithoutCitaNestedInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUpdateManyWithoutCitaNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUpdateManyWithoutCitaNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUpdateManyWithoutCitaNestedInput
  }

  export type CitaUncheckedUpdateWithoutPAdmin_Gestiona_CitaInput = {
    idCita?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    idMedico?: IntFieldUpdateOperationsInput | number
    fechaYHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedUpdateManyWithoutCitaNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedUpdateManyWithoutCitaNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutCitaNestedInput
  }

  export type Medico_dictamina_diagnosticoCreateWithoutDiagnosticoInput = {
    medico: MedicoCreateNestedOneWithoutMedico_dictamina_diagnosticoInput
    cita: CitaCreateNestedOneWithoutMedico_dictamina_diagnosticoInput
  }

  export type Medico_dictamina_diagnosticoUncheckedCreateWithoutDiagnosticoInput = {
    idMedico: number
    idCita: number
  }

  export type Medico_dictamina_diagnosticoCreateOrConnectWithoutDiagnosticoInput = {
    where: Medico_dictamina_diagnosticoWhereUniqueInput
    create: XOR<Medico_dictamina_diagnosticoCreateWithoutDiagnosticoInput, Medico_dictamina_diagnosticoUncheckedCreateWithoutDiagnosticoInput>
  }

  export type Medico_dictamina_diagnosticoCreateManyDiagnosticoInputEnvelope = {
    data: Medico_dictamina_diagnosticoCreateManyDiagnosticoInput | Medico_dictamina_diagnosticoCreateManyDiagnosticoInput[]
    skipDuplicates?: boolean
  }

  export type Medico_dictamina_diagnosticoUpsertWithWhereUniqueWithoutDiagnosticoInput = {
    where: Medico_dictamina_diagnosticoWhereUniqueInput
    update: XOR<Medico_dictamina_diagnosticoUpdateWithoutDiagnosticoInput, Medico_dictamina_diagnosticoUncheckedUpdateWithoutDiagnosticoInput>
    create: XOR<Medico_dictamina_diagnosticoCreateWithoutDiagnosticoInput, Medico_dictamina_diagnosticoUncheckedCreateWithoutDiagnosticoInput>
  }

  export type Medico_dictamina_diagnosticoUpdateWithWhereUniqueWithoutDiagnosticoInput = {
    where: Medico_dictamina_diagnosticoWhereUniqueInput
    data: XOR<Medico_dictamina_diagnosticoUpdateWithoutDiagnosticoInput, Medico_dictamina_diagnosticoUncheckedUpdateWithoutDiagnosticoInput>
  }

  export type Medico_dictamina_diagnosticoUpdateManyWithWhereWithoutDiagnosticoInput = {
    where: Medico_dictamina_diagnosticoScalarWhereInput
    data: XOR<Medico_dictamina_diagnosticoUpdateManyMutationInput, Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutDiagnosticoInput>
  }

  export type DiagnosticoCreateWithoutMedicoDictaminaDiagnosticoInput = {
    nombre: string
  }

  export type DiagnosticoUncheckedCreateWithoutMedicoDictaminaDiagnosticoInput = {
    idDiagnostico?: number
    nombre: string
  }

  export type DiagnosticoCreateOrConnectWithoutMedicoDictaminaDiagnosticoInput = {
    where: DiagnosticoWhereUniqueInput
    create: XOR<DiagnosticoCreateWithoutMedicoDictaminaDiagnosticoInput, DiagnosticoUncheckedCreateWithoutMedicoDictaminaDiagnosticoInput>
  }

  export type MedicoCreateWithoutMedico_dictamina_diagnosticoInput = {
    sueldo: bigint | number
    empleado: EmpleadoCreateNestedOneWithoutMedicoInput
    medicoEquipo?: Medico_EquipoCreateNestedManyWithoutMedicoInput
    Cita?: CitaCreateNestedManyWithoutMedicoInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaCreateNestedManyWithoutMedicoInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoCreateNestedManyWithoutMedicoInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoCreateNestedManyWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutMedico_dictamina_diagnosticoInput = {
    idMedico?: number
    idEmpleado: number
    sueldo: bigint | number
    medicoEquipo?: Medico_EquipoUncheckedCreateNestedManyWithoutMedicoInput
    Cita?: CitaUncheckedCreateNestedManyWithoutMedicoInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedCreateNestedManyWithoutMedicoInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedCreateNestedManyWithoutMedicoInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type MedicoCreateOrConnectWithoutMedico_dictamina_diagnosticoInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutMedico_dictamina_diagnosticoInput, MedicoUncheckedCreateWithoutMedico_dictamina_diagnosticoInput>
  }

  export type CitaCreateWithoutMedico_dictamina_diagnosticoInput = {
    idPaciente: number
    fechaYHora: Date | string
    estado?: string
    resumen: string
    medico: MedicoCreateNestedOneWithoutCitaInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaCreateNestedManyWithoutCitaInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoCreateNestedManyWithoutCitaInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaCreateNestedManyWithoutCitaInput
  }

  export type CitaUncheckedCreateWithoutMedico_dictamina_diagnosticoInput = {
    idCita?: number
    idPaciente: number
    idMedico: number
    fechaYHora: Date | string
    estado?: string
    resumen: string
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedCreateNestedManyWithoutCitaInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedCreateNestedManyWithoutCitaInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUncheckedCreateNestedManyWithoutCitaInput
  }

  export type CitaCreateOrConnectWithoutMedico_dictamina_diagnosticoInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutMedico_dictamina_diagnosticoInput, CitaUncheckedCreateWithoutMedico_dictamina_diagnosticoInput>
  }

  export type DiagnosticoUpsertWithoutMedicoDictaminaDiagnosticoInput = {
    update: XOR<DiagnosticoUpdateWithoutMedicoDictaminaDiagnosticoInput, DiagnosticoUncheckedUpdateWithoutMedicoDictaminaDiagnosticoInput>
    create: XOR<DiagnosticoCreateWithoutMedicoDictaminaDiagnosticoInput, DiagnosticoUncheckedCreateWithoutMedicoDictaminaDiagnosticoInput>
    where?: DiagnosticoWhereInput
  }

  export type DiagnosticoUpdateToOneWithWhereWithoutMedicoDictaminaDiagnosticoInput = {
    where?: DiagnosticoWhereInput
    data: XOR<DiagnosticoUpdateWithoutMedicoDictaminaDiagnosticoInput, DiagnosticoUncheckedUpdateWithoutMedicoDictaminaDiagnosticoInput>
  }

  export type DiagnosticoUpdateWithoutMedicoDictaminaDiagnosticoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticoUncheckedUpdateWithoutMedicoDictaminaDiagnosticoInput = {
    idDiagnostico?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MedicoUpsertWithoutMedico_dictamina_diagnosticoInput = {
    update: XOR<MedicoUpdateWithoutMedico_dictamina_diagnosticoInput, MedicoUncheckedUpdateWithoutMedico_dictamina_diagnosticoInput>
    create: XOR<MedicoCreateWithoutMedico_dictamina_diagnosticoInput, MedicoUncheckedCreateWithoutMedico_dictamina_diagnosticoInput>
    where?: MedicoWhereInput
  }

  export type MedicoUpdateToOneWithWhereWithoutMedico_dictamina_diagnosticoInput = {
    where?: MedicoWhereInput
    data: XOR<MedicoUpdateWithoutMedico_dictamina_diagnosticoInput, MedicoUncheckedUpdateWithoutMedico_dictamina_diagnosticoInput>
  }

  export type MedicoUpdateWithoutMedico_dictamina_diagnosticoInput = {
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    empleado?: EmpleadoUpdateOneRequiredWithoutMedicoNestedInput
    medicoEquipo?: Medico_EquipoUpdateManyWithoutMedicoNestedInput
    Cita?: CitaUpdateManyWithoutMedicoNestedInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUpdateManyWithoutMedicoNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUpdateManyWithoutMedicoNestedInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutMedico_dictamina_diagnosticoInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idEmpleado?: IntFieldUpdateOperationsInput | number
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    medicoEquipo?: Medico_EquipoUncheckedUpdateManyWithoutMedicoNestedInput
    Cita?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedUpdateManyWithoutMedicoNestedInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type CitaUpsertWithoutMedico_dictamina_diagnosticoInput = {
    update: XOR<CitaUpdateWithoutMedico_dictamina_diagnosticoInput, CitaUncheckedUpdateWithoutMedico_dictamina_diagnosticoInput>
    create: XOR<CitaCreateWithoutMedico_dictamina_diagnosticoInput, CitaUncheckedCreateWithoutMedico_dictamina_diagnosticoInput>
    where?: CitaWhereInput
  }

  export type CitaUpdateToOneWithWhereWithoutMedico_dictamina_diagnosticoInput = {
    where?: CitaWhereInput
    data: XOR<CitaUpdateWithoutMedico_dictamina_diagnosticoInput, CitaUncheckedUpdateWithoutMedico_dictamina_diagnosticoInput>
  }

  export type CitaUpdateWithoutMedico_dictamina_diagnosticoInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    fechaYHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneRequiredWithoutCitaNestedInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUpdateManyWithoutCitaNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUpdateManyWithoutCitaNestedInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUpdateManyWithoutCitaNestedInput
  }

  export type CitaUncheckedUpdateWithoutMedico_dictamina_diagnosticoInput = {
    idCita?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    idMedico?: IntFieldUpdateOperationsInput | number
    fechaYHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedUpdateManyWithoutCitaNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedUpdateManyWithoutCitaNestedInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUncheckedUpdateManyWithoutCitaNestedInput
  }

  export type Medico_EquipoCreateManyEquipamientoInput = {
    idMedico: number
    FPrestamo: Date | string
    FDevolucion: Date | string
  }

  export type Medico_EquipoUpdateWithoutEquipamientoInput = {
    FPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    FDevolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    medico?: MedicoUpdateOneRequiredWithoutMedicoEquipoNestedInput
  }

  export type Medico_EquipoUncheckedUpdateWithoutEquipamientoInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    FPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    FDevolucion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Medico_EquipoUncheckedUpdateManyWithoutEquipamientoInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    FPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    FDevolucion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PAdministrativoCreateManyEmpleadoInput = {
    idPAdministrativo?: number
    sueldo: bigint | number
  }

  export type MedicoCreateManyEmpleadoInput = {
    idMedico?: number
    sueldo: bigint | number
  }

  export type PAdministrativoUpdateWithoutEmpleadoInput = {
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    PAdmin_Modifica_Paciente?: PAdmin_Modifica_PacienteUpdateManyWithoutPAdministrativoNestedInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUpdateManyWithoutPAdministrativoNestedInput
  }

  export type PAdministrativoUncheckedUpdateWithoutEmpleadoInput = {
    idPAdministrativo?: IntFieldUpdateOperationsInput | number
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    PAdmin_Modifica_Paciente?: PAdmin_Modifica_PacienteUncheckedUpdateManyWithoutPAdministrativoNestedInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUncheckedUpdateManyWithoutPAdministrativoNestedInput
  }

  export type PAdministrativoUncheckedUpdateManyWithoutEmpleadoInput = {
    idPAdministrativo?: IntFieldUpdateOperationsInput | number
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MedicoUpdateWithoutEmpleadoInput = {
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    medicoEquipo?: Medico_EquipoUpdateManyWithoutMedicoNestedInput
    Cita?: CitaUpdateManyWithoutMedicoNestedInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUpdateManyWithoutMedicoNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUpdateManyWithoutMedicoNestedInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUpdateManyWithoutMedicoNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutEmpleadoInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
    medicoEquipo?: Medico_EquipoUncheckedUpdateManyWithoutMedicoNestedInput
    Cita?: CitaUncheckedUpdateManyWithoutMedicoNestedInput
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedUpdateManyWithoutMedicoNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedUpdateManyWithoutMedicoNestedInput
    Registro_Consulta_Medicamento?: Registro_Consulta_MedicamentoUncheckedUpdateManyWithoutMedicoNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateManyWithoutEmpleadoInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    sueldo?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PAdmin_Modifica_PacienteCreateManyPAdministrativoInput = {
    idPaciente: number
    FModificacion?: Date | string
    descripcion: string
  }

  export type PAdmin_Gestiona_CitaCreateManyPAdministrativoInput = {
    idCita: number
    accion?: string
    FAccion?: Date | string
  }

  export type PAdmin_Modifica_PacienteUpdateWithoutPAdministrativoInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    FModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type PAdmin_Modifica_PacienteUncheckedUpdateWithoutPAdministrativoInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    FModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type PAdmin_Modifica_PacienteUncheckedUpdateManyWithoutPAdministrativoInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    FModificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type PAdmin_Gestiona_CitaUpdateWithoutPAdministrativoInput = {
    accion?: StringFieldUpdateOperationsInput | string
    FAccion?: DateTimeFieldUpdateOperationsInput | Date | string
    cita?: CitaUpdateOneRequiredWithoutPAdmin_Gestiona_CitaNestedInput
  }

  export type PAdmin_Gestiona_CitaUncheckedUpdateWithoutPAdministrativoInput = {
    idCita?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    FAccion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PAdmin_Gestiona_CitaUncheckedUpdateManyWithoutPAdministrativoInput = {
    idCita?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    FAccion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Medico_EquipoCreateManyMedicoInput = {
    idEquipamiento: number
    FPrestamo: Date | string
    FDevolucion: Date | string
  }

  export type CitaCreateManyMedicoInput = {
    idCita?: number
    idPaciente: number
    fechaYHora: Date | string
    estado?: string
    resumen: string
  }

  export type Actualizaciones_HistoriaClinicaCreateManyMedicoInput = {
    idCita: number
    idHistoriaClinica: number
    FActualizacion?: Date | string
  }

  export type Medico_Preescribe_MedicamentoCreateManyMedicoInput = {
    idCita: number
    idMedicamento: number
    idPaciente: number
    posologia: string
    particular?: string
  }

  export type Registro_Consulta_MedicamentoCreateManyMedicoInput = {
    idMedicamento: number
    FConsulta?: Date | string
  }

  export type Medico_dictamina_diagnosticoCreateManyMedicoInput = {
    idDiagnostico: number
    idCita: number
  }

  export type Medico_EquipoUpdateWithoutMedicoInput = {
    FPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    FDevolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    equipamiento?: EquipamientoUpdateOneRequiredWithoutMedicoEquipoNestedInput
  }

  export type Medico_EquipoUncheckedUpdateWithoutMedicoInput = {
    idEquipamiento?: IntFieldUpdateOperationsInput | number
    FPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    FDevolucion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Medico_EquipoUncheckedUpdateManyWithoutMedicoInput = {
    idEquipamiento?: IntFieldUpdateOperationsInput | number
    FPrestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    FDevolucion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CitaUpdateWithoutMedicoInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    fechaYHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUpdateManyWithoutCitaNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUpdateManyWithoutCitaNestedInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUpdateManyWithoutCitaNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUpdateManyWithoutCitaNestedInput
  }

  export type CitaUncheckedUpdateWithoutMedicoInput = {
    idCita?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    fechaYHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
    Actualizaciones_HistoriaClinica?: Actualizaciones_HistoriaClinicaUncheckedUpdateManyWithoutCitaNestedInput
    Medico_Preescribe_Medicamento?: Medico_Preescribe_MedicamentoUncheckedUpdateManyWithoutCitaNestedInput
    PAdmin_Gestiona_Cita?: PAdmin_Gestiona_CitaUncheckedUpdateManyWithoutCitaNestedInput
    Medico_dictamina_diagnostico?: Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutCitaNestedInput
  }

  export type CitaUncheckedUpdateManyWithoutMedicoInput = {
    idCita?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    fechaYHora?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    resumen?: StringFieldUpdateOperationsInput | string
  }

  export type Actualizaciones_HistoriaClinicaUpdateWithoutMedicoInput = {
    idHistoriaClinica?: IntFieldUpdateOperationsInput | number
    FActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    cita?: CitaUpdateOneRequiredWithoutActualizaciones_HistoriaClinicaNestedInput
  }

  export type Actualizaciones_HistoriaClinicaUncheckedUpdateWithoutMedicoInput = {
    idCita?: IntFieldUpdateOperationsInput | number
    idHistoriaClinica?: IntFieldUpdateOperationsInput | number
    FActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Actualizaciones_HistoriaClinicaUncheckedUpdateManyWithoutMedicoInput = {
    idCita?: IntFieldUpdateOperationsInput | number
    idHistoriaClinica?: IntFieldUpdateOperationsInput | number
    FActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Medico_Preescribe_MedicamentoUpdateWithoutMedicoInput = {
    idMedicamento?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    posologia?: StringFieldUpdateOperationsInput | string
    particular?: StringFieldUpdateOperationsInput | string
    cita?: CitaUpdateOneRequiredWithoutMedico_Preescribe_MedicamentoNestedInput
  }

  export type Medico_Preescribe_MedicamentoUncheckedUpdateWithoutMedicoInput = {
    idCita?: IntFieldUpdateOperationsInput | number
    idMedicamento?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    posologia?: StringFieldUpdateOperationsInput | string
    particular?: StringFieldUpdateOperationsInput | string
  }

  export type Medico_Preescribe_MedicamentoUncheckedUpdateManyWithoutMedicoInput = {
    idCita?: IntFieldUpdateOperationsInput | number
    idMedicamento?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    posologia?: StringFieldUpdateOperationsInput | string
    particular?: StringFieldUpdateOperationsInput | string
  }

  export type Registro_Consulta_MedicamentoUpdateWithoutMedicoInput = {
    idMedicamento?: IntFieldUpdateOperationsInput | number
    FConsulta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Registro_Consulta_MedicamentoUncheckedUpdateWithoutMedicoInput = {
    idMedicamento?: IntFieldUpdateOperationsInput | number
    FConsulta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Registro_Consulta_MedicamentoUncheckedUpdateManyWithoutMedicoInput = {
    idMedicamento?: IntFieldUpdateOperationsInput | number
    FConsulta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Medico_dictamina_diagnosticoUpdateWithoutMedicoInput = {
    diagnostico?: DiagnosticoUpdateOneRequiredWithoutMedicoDictaminaDiagnosticoNestedInput
    cita?: CitaUpdateOneRequiredWithoutMedico_dictamina_diagnosticoNestedInput
  }

  export type Medico_dictamina_diagnosticoUncheckedUpdateWithoutMedicoInput = {
    idDiagnostico?: IntFieldUpdateOperationsInput | number
    idCita?: IntFieldUpdateOperationsInput | number
  }

  export type Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutMedicoInput = {
    idDiagnostico?: IntFieldUpdateOperationsInput | number
    idCita?: IntFieldUpdateOperationsInput | number
  }

  export type Actualizaciones_HistoriaClinicaCreateManyCitaInput = {
    idMedico: number
    idHistoriaClinica: number
    FActualizacion?: Date | string
  }

  export type Medico_Preescribe_MedicamentoCreateManyCitaInput = {
    idMedico: number
    idMedicamento: number
    idPaciente: number
    posologia: string
    particular?: string
  }

  export type PAdmin_Gestiona_CitaCreateManyCitaInput = {
    idPAdministrativo: number
    accion?: string
    FAccion?: Date | string
  }

  export type Medico_dictamina_diagnosticoCreateManyCitaInput = {
    idDiagnostico: number
    idMedico: number
  }

  export type Actualizaciones_HistoriaClinicaUpdateWithoutCitaInput = {
    idHistoriaClinica?: IntFieldUpdateOperationsInput | number
    FActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    medico?: MedicoUpdateOneRequiredWithoutActualizaciones_HistoriaClinicaNestedInput
  }

  export type Actualizaciones_HistoriaClinicaUncheckedUpdateWithoutCitaInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idHistoriaClinica?: IntFieldUpdateOperationsInput | number
    FActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Actualizaciones_HistoriaClinicaUncheckedUpdateManyWithoutCitaInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idHistoriaClinica?: IntFieldUpdateOperationsInput | number
    FActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Medico_Preescribe_MedicamentoUpdateWithoutCitaInput = {
    idMedicamento?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    posologia?: StringFieldUpdateOperationsInput | string
    particular?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneRequiredWithoutMedico_Preescribe_MedicamentoNestedInput
  }

  export type Medico_Preescribe_MedicamentoUncheckedUpdateWithoutCitaInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idMedicamento?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    posologia?: StringFieldUpdateOperationsInput | string
    particular?: StringFieldUpdateOperationsInput | string
  }

  export type Medico_Preescribe_MedicamentoUncheckedUpdateManyWithoutCitaInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idMedicamento?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    posologia?: StringFieldUpdateOperationsInput | string
    particular?: StringFieldUpdateOperationsInput | string
  }

  export type PAdmin_Gestiona_CitaUpdateWithoutCitaInput = {
    accion?: StringFieldUpdateOperationsInput | string
    FAccion?: DateTimeFieldUpdateOperationsInput | Date | string
    pAdministrativo?: PAdministrativoUpdateOneRequiredWithoutPAdmin_Gestiona_CitaNestedInput
  }

  export type PAdmin_Gestiona_CitaUncheckedUpdateWithoutCitaInput = {
    idPAdministrativo?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    FAccion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PAdmin_Gestiona_CitaUncheckedUpdateManyWithoutCitaInput = {
    idPAdministrativo?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    FAccion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Medico_dictamina_diagnosticoUpdateWithoutCitaInput = {
    diagnostico?: DiagnosticoUpdateOneRequiredWithoutMedicoDictaminaDiagnosticoNestedInput
    medico?: MedicoUpdateOneRequiredWithoutMedico_dictamina_diagnosticoNestedInput
  }

  export type Medico_dictamina_diagnosticoUncheckedUpdateWithoutCitaInput = {
    idDiagnostico?: IntFieldUpdateOperationsInput | number
    idMedico?: IntFieldUpdateOperationsInput | number
  }

  export type Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutCitaInput = {
    idDiagnostico?: IntFieldUpdateOperationsInput | number
    idMedico?: IntFieldUpdateOperationsInput | number
  }

  export type Medico_dictamina_diagnosticoCreateManyDiagnosticoInput = {
    idMedico: number
    idCita: number
  }

  export type Medico_dictamina_diagnosticoUpdateWithoutDiagnosticoInput = {
    medico?: MedicoUpdateOneRequiredWithoutMedico_dictamina_diagnosticoNestedInput
    cita?: CitaUpdateOneRequiredWithoutMedico_dictamina_diagnosticoNestedInput
  }

  export type Medico_dictamina_diagnosticoUncheckedUpdateWithoutDiagnosticoInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idCita?: IntFieldUpdateOperationsInput | number
  }

  export type Medico_dictamina_diagnosticoUncheckedUpdateManyWithoutDiagnosticoInput = {
    idMedico?: IntFieldUpdateOperationsInput | number
    idCita?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}