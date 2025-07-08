
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
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model HistoriaClinica
 * 
 */
export type HistoriaClinica = $Result.DefaultSelection<Prisma.$HistoriaClinicaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pacientes
 * const pacientes = await prisma.paciente.findMany()
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
   * // Fetch zero or more Pacientes
   * const pacientes = await prisma.paciente.findMany()
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
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historiaClinica`: Exposes CRUD operations for the **HistoriaClinica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoriaClinicas
    * const historiaClinicas = await prisma.historiaClinica.findMany()
    * ```
    */
  get historiaClinica(): Prisma.HistoriaClinicaDelegate<ExtArgs, ClientOptions>;
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
    Paciente: 'Paciente',
    HistoriaClinica: 'HistoriaClinica'
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
      modelProps: "paciente" | "historiaClinica"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          createMany: {
            args: Prisma.PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      HistoriaClinica: {
        payload: Prisma.$HistoriaClinicaPayload<ExtArgs>
        fields: Prisma.HistoriaClinicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoriaClinicaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoriaClinicaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>
          }
          findFirst: {
            args: Prisma.HistoriaClinicaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoriaClinicaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>
          }
          findMany: {
            args: Prisma.HistoriaClinicaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>[]
          }
          create: {
            args: Prisma.HistoriaClinicaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>
          }
          createMany: {
            args: Prisma.HistoriaClinicaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoriaClinicaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>[]
          }
          delete: {
            args: Prisma.HistoriaClinicaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>
          }
          update: {
            args: Prisma.HistoriaClinicaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>
          }
          deleteMany: {
            args: Prisma.HistoriaClinicaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoriaClinicaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoriaClinicaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>[]
          }
          upsert: {
            args: Prisma.HistoriaClinicaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriaClinicaPayload>
          }
          aggregate: {
            args: Prisma.HistoriaClinicaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoriaClinica>
          }
          groupBy: {
            args: Prisma.HistoriaClinicaGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoriaClinicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoriaClinicaCountArgs<ExtArgs>
            result: $Utils.Optional<HistoriaClinicaCountAggregateOutputType> | number
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
    paciente?: PacienteOmit
    historiaClinica?: HistoriaClinicaOmit
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
   * Models
   */

  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteAvgAggregateOutputType = {
    idUsuario: number | null
    idPAdministrativo: number | null
    idPaciente: number | null
    idHistoriaClinica: number | null
  }

  export type PacienteSumAggregateOutputType = {
    idUsuario: bigint | null
    idPAdministrativo: number | null
    idPaciente: number | null
    idHistoriaClinica: number | null
  }

  export type PacienteMinAggregateOutputType = {
    idUsuario: bigint | null
    idPAdministrativo: number | null
    baseDepartamento: string | null
    idPaciente: number | null
    idHistoriaClinica: number | null
    FAfiliacion: Date | null
    Estado: string | null
  }

  export type PacienteMaxAggregateOutputType = {
    idUsuario: bigint | null
    idPAdministrativo: number | null
    baseDepartamento: string | null
    idPaciente: number | null
    idHistoriaClinica: number | null
    FAfiliacion: Date | null
    Estado: string | null
  }

  export type PacienteCountAggregateOutputType = {
    idUsuario: number
    idPAdministrativo: number
    baseDepartamento: number
    idPaciente: number
    idHistoriaClinica: number
    FAfiliacion: number
    Estado: number
    _all: number
  }


  export type PacienteAvgAggregateInputType = {
    idUsuario?: true
    idPAdministrativo?: true
    idPaciente?: true
    idHistoriaClinica?: true
  }

  export type PacienteSumAggregateInputType = {
    idUsuario?: true
    idPAdministrativo?: true
    idPaciente?: true
    idHistoriaClinica?: true
  }

  export type PacienteMinAggregateInputType = {
    idUsuario?: true
    idPAdministrativo?: true
    baseDepartamento?: true
    idPaciente?: true
    idHistoriaClinica?: true
    FAfiliacion?: true
    Estado?: true
  }

  export type PacienteMaxAggregateInputType = {
    idUsuario?: true
    idPAdministrativo?: true
    baseDepartamento?: true
    idPaciente?: true
    idHistoriaClinica?: true
    FAfiliacion?: true
    Estado?: true
  }

  export type PacienteCountAggregateInputType = {
    idUsuario?: true
    idPAdministrativo?: true
    baseDepartamento?: true
    idPaciente?: true
    idHistoriaClinica?: true
    FAfiliacion?: true
    Estado?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _avg?: PacienteAvgAggregateInputType
    _sum?: PacienteSumAggregateInputType
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    idUsuario: bigint
    idPAdministrativo: number
    baseDepartamento: string
    idPaciente: number
    idHistoriaClinica: number | null
    FAfiliacion: Date
    Estado: string
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUsuario?: boolean
    idPAdministrativo?: boolean
    baseDepartamento?: boolean
    idPaciente?: boolean
    idHistoriaClinica?: boolean
    FAfiliacion?: boolean
    Estado?: boolean
    HistoriaClinica?: boolean | Paciente$HistoriaClinicaArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUsuario?: boolean
    idPAdministrativo?: boolean
    baseDepartamento?: boolean
    idPaciente?: boolean
    idHistoriaClinica?: boolean
    FAfiliacion?: boolean
    Estado?: boolean
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUsuario?: boolean
    idPAdministrativo?: boolean
    baseDepartamento?: boolean
    idPaciente?: boolean
    idHistoriaClinica?: boolean
    FAfiliacion?: boolean
    Estado?: boolean
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectScalar = {
    idUsuario?: boolean
    idPAdministrativo?: boolean
    baseDepartamento?: boolean
    idPaciente?: boolean
    idHistoriaClinica?: boolean
    FAfiliacion?: boolean
    Estado?: boolean
  }

  export type PacienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idUsuario" | "idPAdministrativo" | "baseDepartamento" | "idPaciente" | "idHistoriaClinica" | "FAfiliacion" | "Estado", ExtArgs["result"]["paciente"]>
  export type PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    HistoriaClinica?: boolean | Paciente$HistoriaClinicaArgs<ExtArgs>
  }
  export type PacienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PacienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      HistoriaClinica: Prisma.$HistoriaClinicaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      idUsuario: bigint
      idPAdministrativo: number
      baseDepartamento: string
      idPaciente: number
      idHistoriaClinica: number | null
      FAfiliacion: Date
      Estado: string
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }

  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteFindUniqueArgs>(args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paciente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteFindFirstArgs>(args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `idUsuario`
     * const pacienteWithIdUsuarioOnly = await prisma.paciente.findMany({ select: { idUsuario: true } })
     * 
     */
    findMany<T extends PacienteFindManyArgs>(args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
     */
    create<T extends PacienteCreateArgs>(args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {PacienteCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteCreateManyArgs>(args?: SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {PacienteCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `idUsuario`
     * const pacienteWithIdUsuarioOnly = await prisma.paciente.createManyAndReturn({
     *   select: { idUsuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacienteCreateManyAndReturnArgs>(args?: SelectSubset<T, PacienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
     */
    delete<T extends PacienteDeleteArgs>(args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteUpdateArgs>(args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteDeleteManyArgs>(args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteUpdateManyArgs>(args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes and returns the data updated in the database.
     * @param {PacienteUpdateManyAndReturnArgs} args - Arguments to update many Pacientes.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacientes and only return the `idUsuario`
     * const pacienteWithIdUsuarioOnly = await prisma.paciente.updateManyAndReturn({
     *   select: { idUsuario: true },
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
    updateManyAndReturn<T extends PacienteUpdateManyAndReturnArgs>(args: SelectSubset<T, PacienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteUpsertArgs>(args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
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
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    HistoriaClinica<T extends Paciente$HistoriaClinicaArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$HistoriaClinicaArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Paciente model
   */
  interface PacienteFieldRefs {
    readonly idUsuario: FieldRef<"Paciente", 'BigInt'>
    readonly idPAdministrativo: FieldRef<"Paciente", 'Int'>
    readonly baseDepartamento: FieldRef<"Paciente", 'String'>
    readonly idPaciente: FieldRef<"Paciente", 'Int'>
    readonly idHistoriaClinica: FieldRef<"Paciente", 'Int'>
    readonly FAfiliacion: FieldRef<"Paciente", 'DateTime'>
    readonly Estado: FieldRef<"Paciente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }

  /**
   * Paciente createMany
   */
  export type PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente createManyAndReturn
   */
  export type PacienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente updateManyAndReturn
   */
  export type PacienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }

  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to delete.
     */
    limit?: number
  }

  /**
   * Paciente.HistoriaClinica
   */
  export type Paciente$HistoriaClinicaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    where?: HistoriaClinicaWhereInput
  }

  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
  }


  /**
   * Model HistoriaClinica
   */

  export type AggregateHistoriaClinica = {
    _count: HistoriaClinicaCountAggregateOutputType | null
    _avg: HistoriaClinicaAvgAggregateOutputType | null
    _sum: HistoriaClinicaSumAggregateOutputType | null
    _min: HistoriaClinicaMinAggregateOutputType | null
    _max: HistoriaClinicaMaxAggregateOutputType | null
  }

  export type HistoriaClinicaAvgAggregateOutputType = {
    idHistoriaClinica: number | null
    idPaciente: number | null
  }

  export type HistoriaClinicaSumAggregateOutputType = {
    idHistoriaClinica: number | null
    idPaciente: number | null
  }

  export type HistoriaClinicaMinAggregateOutputType = {
    idHistoriaClinica: number | null
    idPaciente: number | null
    FInicio: Date | null
  }

  export type HistoriaClinicaMaxAggregateOutputType = {
    idHistoriaClinica: number | null
    idPaciente: number | null
    FInicio: Date | null
  }

  export type HistoriaClinicaCountAggregateOutputType = {
    idHistoriaClinica: number
    idPaciente: number
    FInicio: number
    _all: number
  }


  export type HistoriaClinicaAvgAggregateInputType = {
    idHistoriaClinica?: true
    idPaciente?: true
  }

  export type HistoriaClinicaSumAggregateInputType = {
    idHistoriaClinica?: true
    idPaciente?: true
  }

  export type HistoriaClinicaMinAggregateInputType = {
    idHistoriaClinica?: true
    idPaciente?: true
    FInicio?: true
  }

  export type HistoriaClinicaMaxAggregateInputType = {
    idHistoriaClinica?: true
    idPaciente?: true
    FInicio?: true
  }

  export type HistoriaClinicaCountAggregateInputType = {
    idHistoriaClinica?: true
    idPaciente?: true
    FInicio?: true
    _all?: true
  }

  export type HistoriaClinicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoriaClinica to aggregate.
     */
    where?: HistoriaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriaClinicas to fetch.
     */
    orderBy?: HistoriaClinicaOrderByWithRelationInput | HistoriaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoriaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriaClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoriaClinicas
    **/
    _count?: true | HistoriaClinicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoriaClinicaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoriaClinicaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoriaClinicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoriaClinicaMaxAggregateInputType
  }

  export type GetHistoriaClinicaAggregateType<T extends HistoriaClinicaAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoriaClinica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoriaClinica[P]>
      : GetScalarType<T[P], AggregateHistoriaClinica[P]>
  }




  export type HistoriaClinicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoriaClinicaWhereInput
    orderBy?: HistoriaClinicaOrderByWithAggregationInput | HistoriaClinicaOrderByWithAggregationInput[]
    by: HistoriaClinicaScalarFieldEnum[] | HistoriaClinicaScalarFieldEnum
    having?: HistoriaClinicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoriaClinicaCountAggregateInputType | true
    _avg?: HistoriaClinicaAvgAggregateInputType
    _sum?: HistoriaClinicaSumAggregateInputType
    _min?: HistoriaClinicaMinAggregateInputType
    _max?: HistoriaClinicaMaxAggregateInputType
  }

  export type HistoriaClinicaGroupByOutputType = {
    idHistoriaClinica: number
    idPaciente: number
    FInicio: Date
    _count: HistoriaClinicaCountAggregateOutputType | null
    _avg: HistoriaClinicaAvgAggregateOutputType | null
    _sum: HistoriaClinicaSumAggregateOutputType | null
    _min: HistoriaClinicaMinAggregateOutputType | null
    _max: HistoriaClinicaMaxAggregateOutputType | null
  }

  type GetHistoriaClinicaGroupByPayload<T extends HistoriaClinicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoriaClinicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoriaClinicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoriaClinicaGroupByOutputType[P]>
            : GetScalarType<T[P], HistoriaClinicaGroupByOutputType[P]>
        }
      >
    >


  export type HistoriaClinicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idHistoriaClinica?: boolean
    idPaciente?: boolean
    FInicio?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historiaClinica"]>

  export type HistoriaClinicaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idHistoriaClinica?: boolean
    idPaciente?: boolean
    FInicio?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historiaClinica"]>

  export type HistoriaClinicaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idHistoriaClinica?: boolean
    idPaciente?: boolean
    FInicio?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historiaClinica"]>

  export type HistoriaClinicaSelectScalar = {
    idHistoriaClinica?: boolean
    idPaciente?: boolean
    FInicio?: boolean
  }

  export type HistoriaClinicaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idHistoriaClinica" | "idPaciente" | "FInicio", ExtArgs["result"]["historiaClinica"]>
  export type HistoriaClinicaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }
  export type HistoriaClinicaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }
  export type HistoriaClinicaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }

  export type $HistoriaClinicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoriaClinica"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idHistoriaClinica: number
      idPaciente: number
      FInicio: Date
    }, ExtArgs["result"]["historiaClinica"]>
    composites: {}
  }

  type HistoriaClinicaGetPayload<S extends boolean | null | undefined | HistoriaClinicaDefaultArgs> = $Result.GetResult<Prisma.$HistoriaClinicaPayload, S>

  type HistoriaClinicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoriaClinicaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoriaClinicaCountAggregateInputType | true
    }

  export interface HistoriaClinicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoriaClinica'], meta: { name: 'HistoriaClinica' } }
    /**
     * Find zero or one HistoriaClinica that matches the filter.
     * @param {HistoriaClinicaFindUniqueArgs} args - Arguments to find a HistoriaClinica
     * @example
     * // Get one HistoriaClinica
     * const historiaClinica = await prisma.historiaClinica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoriaClinicaFindUniqueArgs>(args: SelectSubset<T, HistoriaClinicaFindUniqueArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoriaClinica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoriaClinicaFindUniqueOrThrowArgs} args - Arguments to find a HistoriaClinica
     * @example
     * // Get one HistoriaClinica
     * const historiaClinica = await prisma.historiaClinica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoriaClinicaFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoriaClinicaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoriaClinica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaFindFirstArgs} args - Arguments to find a HistoriaClinica
     * @example
     * // Get one HistoriaClinica
     * const historiaClinica = await prisma.historiaClinica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoriaClinicaFindFirstArgs>(args?: SelectSubset<T, HistoriaClinicaFindFirstArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoriaClinica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaFindFirstOrThrowArgs} args - Arguments to find a HistoriaClinica
     * @example
     * // Get one HistoriaClinica
     * const historiaClinica = await prisma.historiaClinica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoriaClinicaFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoriaClinicaFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoriaClinicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoriaClinicas
     * const historiaClinicas = await prisma.historiaClinica.findMany()
     * 
     * // Get first 10 HistoriaClinicas
     * const historiaClinicas = await prisma.historiaClinica.findMany({ take: 10 })
     * 
     * // Only select the `idHistoriaClinica`
     * const historiaClinicaWithIdHistoriaClinicaOnly = await prisma.historiaClinica.findMany({ select: { idHistoriaClinica: true } })
     * 
     */
    findMany<T extends HistoriaClinicaFindManyArgs>(args?: SelectSubset<T, HistoriaClinicaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoriaClinica.
     * @param {HistoriaClinicaCreateArgs} args - Arguments to create a HistoriaClinica.
     * @example
     * // Create one HistoriaClinica
     * const HistoriaClinica = await prisma.historiaClinica.create({
     *   data: {
     *     // ... data to create a HistoriaClinica
     *   }
     * })
     * 
     */
    create<T extends HistoriaClinicaCreateArgs>(args: SelectSubset<T, HistoriaClinicaCreateArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoriaClinicas.
     * @param {HistoriaClinicaCreateManyArgs} args - Arguments to create many HistoriaClinicas.
     * @example
     * // Create many HistoriaClinicas
     * const historiaClinica = await prisma.historiaClinica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoriaClinicaCreateManyArgs>(args?: SelectSubset<T, HistoriaClinicaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoriaClinicas and returns the data saved in the database.
     * @param {HistoriaClinicaCreateManyAndReturnArgs} args - Arguments to create many HistoriaClinicas.
     * @example
     * // Create many HistoriaClinicas
     * const historiaClinica = await prisma.historiaClinica.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoriaClinicas and only return the `idHistoriaClinica`
     * const historiaClinicaWithIdHistoriaClinicaOnly = await prisma.historiaClinica.createManyAndReturn({
     *   select: { idHistoriaClinica: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoriaClinicaCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoriaClinicaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistoriaClinica.
     * @param {HistoriaClinicaDeleteArgs} args - Arguments to delete one HistoriaClinica.
     * @example
     * // Delete one HistoriaClinica
     * const HistoriaClinica = await prisma.historiaClinica.delete({
     *   where: {
     *     // ... filter to delete one HistoriaClinica
     *   }
     * })
     * 
     */
    delete<T extends HistoriaClinicaDeleteArgs>(args: SelectSubset<T, HistoriaClinicaDeleteArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoriaClinica.
     * @param {HistoriaClinicaUpdateArgs} args - Arguments to update one HistoriaClinica.
     * @example
     * // Update one HistoriaClinica
     * const historiaClinica = await prisma.historiaClinica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoriaClinicaUpdateArgs>(args: SelectSubset<T, HistoriaClinicaUpdateArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoriaClinicas.
     * @param {HistoriaClinicaDeleteManyArgs} args - Arguments to filter HistoriaClinicas to delete.
     * @example
     * // Delete a few HistoriaClinicas
     * const { count } = await prisma.historiaClinica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoriaClinicaDeleteManyArgs>(args?: SelectSubset<T, HistoriaClinicaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoriaClinicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoriaClinicas
     * const historiaClinica = await prisma.historiaClinica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoriaClinicaUpdateManyArgs>(args: SelectSubset<T, HistoriaClinicaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoriaClinicas and returns the data updated in the database.
     * @param {HistoriaClinicaUpdateManyAndReturnArgs} args - Arguments to update many HistoriaClinicas.
     * @example
     * // Update many HistoriaClinicas
     * const historiaClinica = await prisma.historiaClinica.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistoriaClinicas and only return the `idHistoriaClinica`
     * const historiaClinicaWithIdHistoriaClinicaOnly = await prisma.historiaClinica.updateManyAndReturn({
     *   select: { idHistoriaClinica: true },
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
    updateManyAndReturn<T extends HistoriaClinicaUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoriaClinicaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistoriaClinica.
     * @param {HistoriaClinicaUpsertArgs} args - Arguments to update or create a HistoriaClinica.
     * @example
     * // Update or create a HistoriaClinica
     * const historiaClinica = await prisma.historiaClinica.upsert({
     *   create: {
     *     // ... data to create a HistoriaClinica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoriaClinica we want to update
     *   }
     * })
     */
    upsert<T extends HistoriaClinicaUpsertArgs>(args: SelectSubset<T, HistoriaClinicaUpsertArgs<ExtArgs>>): Prisma__HistoriaClinicaClient<$Result.GetResult<Prisma.$HistoriaClinicaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoriaClinicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaCountArgs} args - Arguments to filter HistoriaClinicas to count.
     * @example
     * // Count the number of HistoriaClinicas
     * const count = await prisma.historiaClinica.count({
     *   where: {
     *     // ... the filter for the HistoriaClinicas we want to count
     *   }
     * })
    **/
    count<T extends HistoriaClinicaCountArgs>(
      args?: Subset<T, HistoriaClinicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoriaClinicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoriaClinica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoriaClinicaAggregateArgs>(args: Subset<T, HistoriaClinicaAggregateArgs>): Prisma.PrismaPromise<GetHistoriaClinicaAggregateType<T>>

    /**
     * Group by HistoriaClinica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaClinicaGroupByArgs} args - Group by arguments.
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
      T extends HistoriaClinicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoriaClinicaGroupByArgs['orderBy'] }
        : { orderBy?: HistoriaClinicaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoriaClinicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoriaClinicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoriaClinica model
   */
  readonly fields: HistoriaClinicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoriaClinica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoriaClinicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HistoriaClinica model
   */
  interface HistoriaClinicaFieldRefs {
    readonly idHistoriaClinica: FieldRef<"HistoriaClinica", 'Int'>
    readonly idPaciente: FieldRef<"HistoriaClinica", 'Int'>
    readonly FInicio: FieldRef<"HistoriaClinica", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HistoriaClinica findUnique
   */
  export type HistoriaClinicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which HistoriaClinica to fetch.
     */
    where: HistoriaClinicaWhereUniqueInput
  }

  /**
   * HistoriaClinica findUniqueOrThrow
   */
  export type HistoriaClinicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which HistoriaClinica to fetch.
     */
    where: HistoriaClinicaWhereUniqueInput
  }

  /**
   * HistoriaClinica findFirst
   */
  export type HistoriaClinicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which HistoriaClinica to fetch.
     */
    where?: HistoriaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriaClinicas to fetch.
     */
    orderBy?: HistoriaClinicaOrderByWithRelationInput | HistoriaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoriaClinicas.
     */
    cursor?: HistoriaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriaClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoriaClinicas.
     */
    distinct?: HistoriaClinicaScalarFieldEnum | HistoriaClinicaScalarFieldEnum[]
  }

  /**
   * HistoriaClinica findFirstOrThrow
   */
  export type HistoriaClinicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which HistoriaClinica to fetch.
     */
    where?: HistoriaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriaClinicas to fetch.
     */
    orderBy?: HistoriaClinicaOrderByWithRelationInput | HistoriaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoriaClinicas.
     */
    cursor?: HistoriaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriaClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoriaClinicas.
     */
    distinct?: HistoriaClinicaScalarFieldEnum | HistoriaClinicaScalarFieldEnum[]
  }

  /**
   * HistoriaClinica findMany
   */
  export type HistoriaClinicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which HistoriaClinicas to fetch.
     */
    where?: HistoriaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriaClinicas to fetch.
     */
    orderBy?: HistoriaClinicaOrderByWithRelationInput | HistoriaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoriaClinicas.
     */
    cursor?: HistoriaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriaClinicas.
     */
    skip?: number
    distinct?: HistoriaClinicaScalarFieldEnum | HistoriaClinicaScalarFieldEnum[]
  }

  /**
   * HistoriaClinica create
   */
  export type HistoriaClinicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoriaClinica.
     */
    data: XOR<HistoriaClinicaCreateInput, HistoriaClinicaUncheckedCreateInput>
  }

  /**
   * HistoriaClinica createMany
   */
  export type HistoriaClinicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoriaClinicas.
     */
    data: HistoriaClinicaCreateManyInput | HistoriaClinicaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoriaClinica createManyAndReturn
   */
  export type HistoriaClinicaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * The data used to create many HistoriaClinicas.
     */
    data: HistoriaClinicaCreateManyInput | HistoriaClinicaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoriaClinica update
   */
  export type HistoriaClinicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoriaClinica.
     */
    data: XOR<HistoriaClinicaUpdateInput, HistoriaClinicaUncheckedUpdateInput>
    /**
     * Choose, which HistoriaClinica to update.
     */
    where: HistoriaClinicaWhereUniqueInput
  }

  /**
   * HistoriaClinica updateMany
   */
  export type HistoriaClinicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoriaClinicas.
     */
    data: XOR<HistoriaClinicaUpdateManyMutationInput, HistoriaClinicaUncheckedUpdateManyInput>
    /**
     * Filter which HistoriaClinicas to update
     */
    where?: HistoriaClinicaWhereInput
    /**
     * Limit how many HistoriaClinicas to update.
     */
    limit?: number
  }

  /**
   * HistoriaClinica updateManyAndReturn
   */
  export type HistoriaClinicaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * The data used to update HistoriaClinicas.
     */
    data: XOR<HistoriaClinicaUpdateManyMutationInput, HistoriaClinicaUncheckedUpdateManyInput>
    /**
     * Filter which HistoriaClinicas to update
     */
    where?: HistoriaClinicaWhereInput
    /**
     * Limit how many HistoriaClinicas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoriaClinica upsert
   */
  export type HistoriaClinicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoriaClinica to update in case it exists.
     */
    where: HistoriaClinicaWhereUniqueInput
    /**
     * In case the HistoriaClinica found by the `where` argument doesn't exist, create a new HistoriaClinica with this data.
     */
    create: XOR<HistoriaClinicaCreateInput, HistoriaClinicaUncheckedCreateInput>
    /**
     * In case the HistoriaClinica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoriaClinicaUpdateInput, HistoriaClinicaUncheckedUpdateInput>
  }

  /**
   * HistoriaClinica delete
   */
  export type HistoriaClinicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
    /**
     * Filter which HistoriaClinica to delete.
     */
    where: HistoriaClinicaWhereUniqueInput
  }

  /**
   * HistoriaClinica deleteMany
   */
  export type HistoriaClinicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoriaClinicas to delete
     */
    where?: HistoriaClinicaWhereInput
    /**
     * Limit how many HistoriaClinicas to delete.
     */
    limit?: number
  }

  /**
   * HistoriaClinica without action
   */
  export type HistoriaClinicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriaClinica
     */
    select?: HistoriaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriaClinica
     */
    omit?: HistoriaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriaClinicaInclude<ExtArgs> | null
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


  export const PacienteScalarFieldEnum: {
    idUsuario: 'idUsuario',
    idPAdministrativo: 'idPAdministrativo',
    baseDepartamento: 'baseDepartamento',
    idPaciente: 'idPaciente',
    idHistoriaClinica: 'idHistoriaClinica',
    FAfiliacion: 'FAfiliacion',
    Estado: 'Estado'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const HistoriaClinicaScalarFieldEnum: {
    idHistoriaClinica: 'idHistoriaClinica',
    idPaciente: 'idPaciente',
    FInicio: 'FInicio'
  };

  export type HistoriaClinicaScalarFieldEnum = (typeof HistoriaClinicaScalarFieldEnum)[keyof typeof HistoriaClinicaScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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


  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    idUsuario?: BigIntFilter<"Paciente"> | bigint | number
    idPAdministrativo?: IntFilter<"Paciente"> | number
    baseDepartamento?: StringFilter<"Paciente"> | string
    idPaciente?: IntFilter<"Paciente"> | number
    idHistoriaClinica?: IntNullableFilter<"Paciente"> | number | null
    FAfiliacion?: DateTimeFilter<"Paciente"> | Date | string
    Estado?: StringFilter<"Paciente"> | string
    HistoriaClinica?: XOR<HistoriaClinicaNullableScalarRelationFilter, HistoriaClinicaWhereInput> | null
  }

  export type PacienteOrderByWithRelationInput = {
    idUsuario?: SortOrder
    idPAdministrativo?: SortOrder
    baseDepartamento?: SortOrder
    idPaciente?: SortOrder
    idHistoriaClinica?: SortOrderInput | SortOrder
    FAfiliacion?: SortOrder
    Estado?: SortOrder
    HistoriaClinica?: HistoriaClinicaOrderByWithRelationInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    idPaciente?: number
    idHistoriaClinica?: number
    idUsuario_idPaciente?: PacienteIdUsuarioIdPacienteCompoundUniqueInput
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    idUsuario?: BigIntFilter<"Paciente"> | bigint | number
    idPAdministrativo?: IntFilter<"Paciente"> | number
    baseDepartamento?: StringFilter<"Paciente"> | string
    FAfiliacion?: DateTimeFilter<"Paciente"> | Date | string
    Estado?: StringFilter<"Paciente"> | string
    HistoriaClinica?: XOR<HistoriaClinicaNullableScalarRelationFilter, HistoriaClinicaWhereInput> | null
  }, "idPaciente" | "idHistoriaClinica" | "idUsuario_idPaciente">

  export type PacienteOrderByWithAggregationInput = {
    idUsuario?: SortOrder
    idPAdministrativo?: SortOrder
    baseDepartamento?: SortOrder
    idPaciente?: SortOrder
    idHistoriaClinica?: SortOrderInput | SortOrder
    FAfiliacion?: SortOrder
    Estado?: SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _avg?: PacienteAvgOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
    _sum?: PacienteSumOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    idUsuario?: BigIntWithAggregatesFilter<"Paciente"> | bigint | number
    idPAdministrativo?: IntWithAggregatesFilter<"Paciente"> | number
    baseDepartamento?: StringWithAggregatesFilter<"Paciente"> | string
    idPaciente?: IntWithAggregatesFilter<"Paciente"> | number
    idHistoriaClinica?: IntNullableWithAggregatesFilter<"Paciente"> | number | null
    FAfiliacion?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    Estado?: StringWithAggregatesFilter<"Paciente"> | string
  }

  export type HistoriaClinicaWhereInput = {
    AND?: HistoriaClinicaWhereInput | HistoriaClinicaWhereInput[]
    OR?: HistoriaClinicaWhereInput[]
    NOT?: HistoriaClinicaWhereInput | HistoriaClinicaWhereInput[]
    idHistoriaClinica?: IntFilter<"HistoriaClinica"> | number
    idPaciente?: IntFilter<"HistoriaClinica"> | number
    FInicio?: DateTimeFilter<"HistoriaClinica"> | Date | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
  }

  export type HistoriaClinicaOrderByWithRelationInput = {
    idHistoriaClinica?: SortOrder
    idPaciente?: SortOrder
    FInicio?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
  }

  export type HistoriaClinicaWhereUniqueInput = Prisma.AtLeast<{
    idHistoriaClinica?: number
    idPaciente?: number
    AND?: HistoriaClinicaWhereInput | HistoriaClinicaWhereInput[]
    OR?: HistoriaClinicaWhereInput[]
    NOT?: HistoriaClinicaWhereInput | HistoriaClinicaWhereInput[]
    FInicio?: DateTimeFilter<"HistoriaClinica"> | Date | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
  }, "idHistoriaClinica" | "idPaciente">

  export type HistoriaClinicaOrderByWithAggregationInput = {
    idHistoriaClinica?: SortOrder
    idPaciente?: SortOrder
    FInicio?: SortOrder
    _count?: HistoriaClinicaCountOrderByAggregateInput
    _avg?: HistoriaClinicaAvgOrderByAggregateInput
    _max?: HistoriaClinicaMaxOrderByAggregateInput
    _min?: HistoriaClinicaMinOrderByAggregateInput
    _sum?: HistoriaClinicaSumOrderByAggregateInput
  }

  export type HistoriaClinicaScalarWhereWithAggregatesInput = {
    AND?: HistoriaClinicaScalarWhereWithAggregatesInput | HistoriaClinicaScalarWhereWithAggregatesInput[]
    OR?: HistoriaClinicaScalarWhereWithAggregatesInput[]
    NOT?: HistoriaClinicaScalarWhereWithAggregatesInput | HistoriaClinicaScalarWhereWithAggregatesInput[]
    idHistoriaClinica?: IntWithAggregatesFilter<"HistoriaClinica"> | number
    idPaciente?: IntWithAggregatesFilter<"HistoriaClinica"> | number
    FInicio?: DateTimeWithAggregatesFilter<"HistoriaClinica"> | Date | string
  }

  export type PacienteCreateInput = {
    idUsuario: bigint | number
    idPAdministrativo: number
    baseDepartamento: string
    idHistoriaClinica?: number | null
    FAfiliacion?: Date | string
    Estado?: string
    HistoriaClinica?: HistoriaClinicaCreateNestedOneWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    idUsuario: bigint | number
    idPAdministrativo: number
    baseDepartamento: string
    idPaciente?: number
    idHistoriaClinica?: number | null
    FAfiliacion?: Date | string
    Estado?: string
    HistoriaClinica?: HistoriaClinicaUncheckedCreateNestedOneWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    idUsuario?: BigIntFieldUpdateOperationsInput | bigint | number
    idPAdministrativo?: IntFieldUpdateOperationsInput | number
    baseDepartamento?: StringFieldUpdateOperationsInput | string
    idHistoriaClinica?: NullableIntFieldUpdateOperationsInput | number | null
    FAfiliacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado?: StringFieldUpdateOperationsInput | string
    HistoriaClinica?: HistoriaClinicaUpdateOneWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    idUsuario?: BigIntFieldUpdateOperationsInput | bigint | number
    idPAdministrativo?: IntFieldUpdateOperationsInput | number
    baseDepartamento?: StringFieldUpdateOperationsInput | string
    idPaciente?: IntFieldUpdateOperationsInput | number
    idHistoriaClinica?: NullableIntFieldUpdateOperationsInput | number | null
    FAfiliacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado?: StringFieldUpdateOperationsInput | string
    HistoriaClinica?: HistoriaClinicaUncheckedUpdateOneWithoutPacienteNestedInput
  }

  export type PacienteCreateManyInput = {
    idUsuario: bigint | number
    idPAdministrativo: number
    baseDepartamento: string
    idPaciente?: number
    idHistoriaClinica?: number | null
    FAfiliacion?: Date | string
    Estado?: string
  }

  export type PacienteUpdateManyMutationInput = {
    idUsuario?: BigIntFieldUpdateOperationsInput | bigint | number
    idPAdministrativo?: IntFieldUpdateOperationsInput | number
    baseDepartamento?: StringFieldUpdateOperationsInput | string
    idHistoriaClinica?: NullableIntFieldUpdateOperationsInput | number | null
    FAfiliacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteUncheckedUpdateManyInput = {
    idUsuario?: BigIntFieldUpdateOperationsInput | bigint | number
    idPAdministrativo?: IntFieldUpdateOperationsInput | number
    baseDepartamento?: StringFieldUpdateOperationsInput | string
    idPaciente?: IntFieldUpdateOperationsInput | number
    idHistoriaClinica?: NullableIntFieldUpdateOperationsInput | number | null
    FAfiliacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado?: StringFieldUpdateOperationsInput | string
  }

  export type HistoriaClinicaCreateInput = {
    FInicio?: Date | string
    paciente: PacienteCreateNestedOneWithoutHistoriaClinicaInput
  }

  export type HistoriaClinicaUncheckedCreateInput = {
    idHistoriaClinica?: number
    idPaciente: number
    FInicio?: Date | string
  }

  export type HistoriaClinicaUpdateInput = {
    FInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneRequiredWithoutHistoriaClinicaNestedInput
  }

  export type HistoriaClinicaUncheckedUpdateInput = {
    idHistoriaClinica?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    FInicio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriaClinicaCreateManyInput = {
    idHistoriaClinica?: number
    idPaciente: number
    FInicio?: Date | string
  }

  export type HistoriaClinicaUpdateManyMutationInput = {
    FInicio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriaClinicaUncheckedUpdateManyInput = {
    idHistoriaClinica?: IntFieldUpdateOperationsInput | number
    idPaciente?: IntFieldUpdateOperationsInput | number
    FInicio?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type HistoriaClinicaNullableScalarRelationFilter = {
    is?: HistoriaClinicaWhereInput | null
    isNot?: HistoriaClinicaWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PacienteIdUsuarioIdPacienteCompoundUniqueInput = {
    idUsuario: bigint | number
    idPaciente: number
  }

  export type PacienteCountOrderByAggregateInput = {
    idUsuario?: SortOrder
    idPAdministrativo?: SortOrder
    baseDepartamento?: SortOrder
    idPaciente?: SortOrder
    idHistoriaClinica?: SortOrder
    FAfiliacion?: SortOrder
    Estado?: SortOrder
  }

  export type PacienteAvgOrderByAggregateInput = {
    idUsuario?: SortOrder
    idPAdministrativo?: SortOrder
    idPaciente?: SortOrder
    idHistoriaClinica?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    idUsuario?: SortOrder
    idPAdministrativo?: SortOrder
    baseDepartamento?: SortOrder
    idPaciente?: SortOrder
    idHistoriaClinica?: SortOrder
    FAfiliacion?: SortOrder
    Estado?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    idUsuario?: SortOrder
    idPAdministrativo?: SortOrder
    baseDepartamento?: SortOrder
    idPaciente?: SortOrder
    idHistoriaClinica?: SortOrder
    FAfiliacion?: SortOrder
    Estado?: SortOrder
  }

  export type PacienteSumOrderByAggregateInput = {
    idUsuario?: SortOrder
    idPAdministrativo?: SortOrder
    idPaciente?: SortOrder
    idHistoriaClinica?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type PacienteScalarRelationFilter = {
    is?: PacienteWhereInput
    isNot?: PacienteWhereInput
  }

  export type HistoriaClinicaCountOrderByAggregateInput = {
    idHistoriaClinica?: SortOrder
    idPaciente?: SortOrder
    FInicio?: SortOrder
  }

  export type HistoriaClinicaAvgOrderByAggregateInput = {
    idHistoriaClinica?: SortOrder
    idPaciente?: SortOrder
  }

  export type HistoriaClinicaMaxOrderByAggregateInput = {
    idHistoriaClinica?: SortOrder
    idPaciente?: SortOrder
    FInicio?: SortOrder
  }

  export type HistoriaClinicaMinOrderByAggregateInput = {
    idHistoriaClinica?: SortOrder
    idPaciente?: SortOrder
    FInicio?: SortOrder
  }

  export type HistoriaClinicaSumOrderByAggregateInput = {
    idHistoriaClinica?: SortOrder
    idPaciente?: SortOrder
  }

  export type HistoriaClinicaCreateNestedOneWithoutPacienteInput = {
    create?: XOR<HistoriaClinicaCreateWithoutPacienteInput, HistoriaClinicaUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutPacienteInput
    connect?: HistoriaClinicaWhereUniqueInput
  }

  export type HistoriaClinicaUncheckedCreateNestedOneWithoutPacienteInput = {
    create?: XOR<HistoriaClinicaCreateWithoutPacienteInput, HistoriaClinicaUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutPacienteInput
    connect?: HistoriaClinicaWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type HistoriaClinicaUpdateOneWithoutPacienteNestedInput = {
    create?: XOR<HistoriaClinicaCreateWithoutPacienteInput, HistoriaClinicaUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutPacienteInput
    upsert?: HistoriaClinicaUpsertWithoutPacienteInput
    disconnect?: HistoriaClinicaWhereInput | boolean
    delete?: HistoriaClinicaWhereInput | boolean
    connect?: HistoriaClinicaWhereUniqueInput
    update?: XOR<XOR<HistoriaClinicaUpdateToOneWithWhereWithoutPacienteInput, HistoriaClinicaUpdateWithoutPacienteInput>, HistoriaClinicaUncheckedUpdateWithoutPacienteInput>
  }

  export type HistoriaClinicaUncheckedUpdateOneWithoutPacienteNestedInput = {
    create?: XOR<HistoriaClinicaCreateWithoutPacienteInput, HistoriaClinicaUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: HistoriaClinicaCreateOrConnectWithoutPacienteInput
    upsert?: HistoriaClinicaUpsertWithoutPacienteInput
    disconnect?: HistoriaClinicaWhereInput | boolean
    delete?: HistoriaClinicaWhereInput | boolean
    connect?: HistoriaClinicaWhereUniqueInput
    update?: XOR<XOR<HistoriaClinicaUpdateToOneWithWhereWithoutPacienteInput, HistoriaClinicaUpdateWithoutPacienteInput>, HistoriaClinicaUncheckedUpdateWithoutPacienteInput>
  }

  export type PacienteCreateNestedOneWithoutHistoriaClinicaInput = {
    create?: XOR<PacienteCreateWithoutHistoriaClinicaInput, PacienteUncheckedCreateWithoutHistoriaClinicaInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutHistoriaClinicaInput
    connect?: PacienteWhereUniqueInput
  }

  export type PacienteUpdateOneRequiredWithoutHistoriaClinicaNestedInput = {
    create?: XOR<PacienteCreateWithoutHistoriaClinicaInput, PacienteUncheckedCreateWithoutHistoriaClinicaInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutHistoriaClinicaInput
    upsert?: PacienteUpsertWithoutHistoriaClinicaInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutHistoriaClinicaInput, PacienteUpdateWithoutHistoriaClinicaInput>, PacienteUncheckedUpdateWithoutHistoriaClinicaInput>
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type HistoriaClinicaCreateWithoutPacienteInput = {
    FInicio?: Date | string
  }

  export type HistoriaClinicaUncheckedCreateWithoutPacienteInput = {
    idHistoriaClinica?: number
    FInicio?: Date | string
  }

  export type HistoriaClinicaCreateOrConnectWithoutPacienteInput = {
    where: HistoriaClinicaWhereUniqueInput
    create: XOR<HistoriaClinicaCreateWithoutPacienteInput, HistoriaClinicaUncheckedCreateWithoutPacienteInput>
  }

  export type HistoriaClinicaUpsertWithoutPacienteInput = {
    update: XOR<HistoriaClinicaUpdateWithoutPacienteInput, HistoriaClinicaUncheckedUpdateWithoutPacienteInput>
    create: XOR<HistoriaClinicaCreateWithoutPacienteInput, HistoriaClinicaUncheckedCreateWithoutPacienteInput>
    where?: HistoriaClinicaWhereInput
  }

  export type HistoriaClinicaUpdateToOneWithWhereWithoutPacienteInput = {
    where?: HistoriaClinicaWhereInput
    data: XOR<HistoriaClinicaUpdateWithoutPacienteInput, HistoriaClinicaUncheckedUpdateWithoutPacienteInput>
  }

  export type HistoriaClinicaUpdateWithoutPacienteInput = {
    FInicio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriaClinicaUncheckedUpdateWithoutPacienteInput = {
    idHistoriaClinica?: IntFieldUpdateOperationsInput | number
    FInicio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteCreateWithoutHistoriaClinicaInput = {
    idUsuario: bigint | number
    idPAdministrativo: number
    baseDepartamento: string
    idHistoriaClinica?: number | null
    FAfiliacion?: Date | string
    Estado?: string
  }

  export type PacienteUncheckedCreateWithoutHistoriaClinicaInput = {
    idUsuario: bigint | number
    idPAdministrativo: number
    baseDepartamento: string
    idPaciente?: number
    idHistoriaClinica?: number | null
    FAfiliacion?: Date | string
    Estado?: string
  }

  export type PacienteCreateOrConnectWithoutHistoriaClinicaInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutHistoriaClinicaInput, PacienteUncheckedCreateWithoutHistoriaClinicaInput>
  }

  export type PacienteUpsertWithoutHistoriaClinicaInput = {
    update: XOR<PacienteUpdateWithoutHistoriaClinicaInput, PacienteUncheckedUpdateWithoutHistoriaClinicaInput>
    create: XOR<PacienteCreateWithoutHistoriaClinicaInput, PacienteUncheckedCreateWithoutHistoriaClinicaInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutHistoriaClinicaInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutHistoriaClinicaInput, PacienteUncheckedUpdateWithoutHistoriaClinicaInput>
  }

  export type PacienteUpdateWithoutHistoriaClinicaInput = {
    idUsuario?: BigIntFieldUpdateOperationsInput | bigint | number
    idPAdministrativo?: IntFieldUpdateOperationsInput | number
    baseDepartamento?: StringFieldUpdateOperationsInput | string
    idHistoriaClinica?: NullableIntFieldUpdateOperationsInput | number | null
    FAfiliacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteUncheckedUpdateWithoutHistoriaClinicaInput = {
    idUsuario?: BigIntFieldUpdateOperationsInput | bigint | number
    idPAdministrativo?: IntFieldUpdateOperationsInput | number
    baseDepartamento?: StringFieldUpdateOperationsInput | string
    idPaciente?: IntFieldUpdateOperationsInput | number
    idHistoriaClinica?: NullableIntFieldUpdateOperationsInput | number | null
    FAfiliacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado?: StringFieldUpdateOperationsInput | string
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