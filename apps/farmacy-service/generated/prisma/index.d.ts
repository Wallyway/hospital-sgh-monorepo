
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
 * Model Farmacia
 * 
 */
export type Farmacia = $Result.DefaultSelection<Prisma.$FarmaciaPayload>
/**
 * Model Medicamento
 * 
 */
export type Medicamento = $Result.DefaultSelection<Prisma.$MedicamentoPayload>
/**
 * Model FarmaciaPosee
 * 
 */
export type FarmaciaPosee = $Result.DefaultSelection<Prisma.$FarmaciaPoseePayload>
/**
 * Model FarmaciaEntrega
 * 
 */
export type FarmaciaEntrega = $Result.DefaultSelection<Prisma.$FarmaciaEntregaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Farmacias
 * const farmacias = await prisma.farmacia.findMany()
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
   * // Fetch zero or more Farmacias
   * const farmacias = await prisma.farmacia.findMany()
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
   * `prisma.farmacia`: Exposes CRUD operations for the **Farmacia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Farmacias
    * const farmacias = await prisma.farmacia.findMany()
    * ```
    */
  get farmacia(): Prisma.FarmaciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicamento`: Exposes CRUD operations for the **Medicamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicamentos
    * const medicamentos = await prisma.medicamento.findMany()
    * ```
    */
  get medicamento(): Prisma.MedicamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.farmaciaPosee`: Exposes CRUD operations for the **FarmaciaPosee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FarmaciaPosees
    * const farmaciaPosees = await prisma.farmaciaPosee.findMany()
    * ```
    */
  get farmaciaPosee(): Prisma.FarmaciaPoseeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.farmaciaEntrega`: Exposes CRUD operations for the **FarmaciaEntrega** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FarmaciaEntregas
    * const farmaciaEntregas = await prisma.farmaciaEntrega.findMany()
    * ```
    */
  get farmaciaEntrega(): Prisma.FarmaciaEntregaDelegate<ExtArgs, ClientOptions>;
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
    Farmacia: 'Farmacia',
    Medicamento: 'Medicamento',
    FarmaciaPosee: 'FarmaciaPosee',
    FarmaciaEntrega: 'FarmaciaEntrega'
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
      modelProps: "farmacia" | "medicamento" | "farmaciaPosee" | "farmaciaEntrega"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Farmacia: {
        payload: Prisma.$FarmaciaPayload<ExtArgs>
        fields: Prisma.FarmaciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FarmaciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FarmaciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload>
          }
          findFirst: {
            args: Prisma.FarmaciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FarmaciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload>
          }
          findMany: {
            args: Prisma.FarmaciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload>[]
          }
          create: {
            args: Prisma.FarmaciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload>
          }
          createMany: {
            args: Prisma.FarmaciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FarmaciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload>[]
          }
          delete: {
            args: Prisma.FarmaciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload>
          }
          update: {
            args: Prisma.FarmaciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload>
          }
          deleteMany: {
            args: Prisma.FarmaciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FarmaciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FarmaciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload>[]
          }
          upsert: {
            args: Prisma.FarmaciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPayload>
          }
          aggregate: {
            args: Prisma.FarmaciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarmacia>
          }
          groupBy: {
            args: Prisma.FarmaciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmaciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FarmaciaCountArgs<ExtArgs>
            result: $Utils.Optional<FarmaciaCountAggregateOutputType> | number
          }
        }
      }
      Medicamento: {
        payload: Prisma.$MedicamentoPayload<ExtArgs>
        fields: Prisma.MedicamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          findFirst: {
            args: Prisma.MedicamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          findMany: {
            args: Prisma.MedicamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>[]
          }
          create: {
            args: Prisma.MedicamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          createMany: {
            args: Prisma.MedicamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>[]
          }
          delete: {
            args: Prisma.MedicamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          update: {
            args: Prisma.MedicamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          deleteMany: {
            args: Prisma.MedicamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>[]
          }
          upsert: {
            args: Prisma.MedicamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentoPayload>
          }
          aggregate: {
            args: Prisma.MedicamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicamento>
          }
          groupBy: {
            args: Prisma.MedicamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicamentoCountArgs<ExtArgs>
            result: $Utils.Optional<MedicamentoCountAggregateOutputType> | number
          }
        }
      }
      FarmaciaPosee: {
        payload: Prisma.$FarmaciaPoseePayload<ExtArgs>
        fields: Prisma.FarmaciaPoseeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FarmaciaPoseeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPoseePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FarmaciaPoseeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPoseePayload>
          }
          findFirst: {
            args: Prisma.FarmaciaPoseeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPoseePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FarmaciaPoseeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPoseePayload>
          }
          findMany: {
            args: Prisma.FarmaciaPoseeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPoseePayload>[]
          }
          create: {
            args: Prisma.FarmaciaPoseeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPoseePayload>
          }
          createMany: {
            args: Prisma.FarmaciaPoseeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FarmaciaPoseeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPoseePayload>[]
          }
          delete: {
            args: Prisma.FarmaciaPoseeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPoseePayload>
          }
          update: {
            args: Prisma.FarmaciaPoseeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPoseePayload>
          }
          deleteMany: {
            args: Prisma.FarmaciaPoseeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FarmaciaPoseeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FarmaciaPoseeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPoseePayload>[]
          }
          upsert: {
            args: Prisma.FarmaciaPoseeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaPoseePayload>
          }
          aggregate: {
            args: Prisma.FarmaciaPoseeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarmaciaPosee>
          }
          groupBy: {
            args: Prisma.FarmaciaPoseeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmaciaPoseeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FarmaciaPoseeCountArgs<ExtArgs>
            result: $Utils.Optional<FarmaciaPoseeCountAggregateOutputType> | number
          }
        }
      }
      FarmaciaEntrega: {
        payload: Prisma.$FarmaciaEntregaPayload<ExtArgs>
        fields: Prisma.FarmaciaEntregaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FarmaciaEntregaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaEntregaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FarmaciaEntregaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaEntregaPayload>
          }
          findFirst: {
            args: Prisma.FarmaciaEntregaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaEntregaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FarmaciaEntregaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaEntregaPayload>
          }
          findMany: {
            args: Prisma.FarmaciaEntregaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaEntregaPayload>[]
          }
          create: {
            args: Prisma.FarmaciaEntregaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaEntregaPayload>
          }
          createMany: {
            args: Prisma.FarmaciaEntregaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FarmaciaEntregaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaEntregaPayload>[]
          }
          delete: {
            args: Prisma.FarmaciaEntregaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaEntregaPayload>
          }
          update: {
            args: Prisma.FarmaciaEntregaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaEntregaPayload>
          }
          deleteMany: {
            args: Prisma.FarmaciaEntregaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FarmaciaEntregaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FarmaciaEntregaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaEntregaPayload>[]
          }
          upsert: {
            args: Prisma.FarmaciaEntregaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmaciaEntregaPayload>
          }
          aggregate: {
            args: Prisma.FarmaciaEntregaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarmaciaEntrega>
          }
          groupBy: {
            args: Prisma.FarmaciaEntregaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmaciaEntregaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FarmaciaEntregaCountArgs<ExtArgs>
            result: $Utils.Optional<FarmaciaEntregaCountAggregateOutputType> | number
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
    farmacia?: FarmaciaOmit
    medicamento?: MedicamentoOmit
    farmaciaPosee?: FarmaciaPoseeOmit
    farmaciaEntrega?: FarmaciaEntregaOmit
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
   * Count Type FarmaciaCountOutputType
   */

  export type FarmaciaCountOutputType = {
    posee: number
    entregas: number
  }

  export type FarmaciaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posee?: boolean | FarmaciaCountOutputTypeCountPoseeArgs
    entregas?: boolean | FarmaciaCountOutputTypeCountEntregasArgs
  }

  // Custom InputTypes
  /**
   * FarmaciaCountOutputType without action
   */
  export type FarmaciaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaCountOutputType
     */
    select?: FarmaciaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FarmaciaCountOutputType without action
   */
  export type FarmaciaCountOutputTypeCountPoseeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmaciaPoseeWhereInput
  }

  /**
   * FarmaciaCountOutputType without action
   */
  export type FarmaciaCountOutputTypeCountEntregasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmaciaEntregaWhereInput
  }


  /**
   * Count Type MedicamentoCountOutputType
   */

  export type MedicamentoCountOutputType = {
    posee: number
    entregas: number
  }

  export type MedicamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posee?: boolean | MedicamentoCountOutputTypeCountPoseeArgs
    entregas?: boolean | MedicamentoCountOutputTypeCountEntregasArgs
  }

  // Custom InputTypes
  /**
   * MedicamentoCountOutputType without action
   */
  export type MedicamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicamentoCountOutputType
     */
    select?: MedicamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicamentoCountOutputType without action
   */
  export type MedicamentoCountOutputTypeCountPoseeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmaciaPoseeWhereInput
  }

  /**
   * MedicamentoCountOutputType without action
   */
  export type MedicamentoCountOutputTypeCountEntregasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmaciaEntregaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Farmacia
   */

  export type AggregateFarmacia = {
    _count: FarmaciaCountAggregateOutputType | null
    _avg: FarmaciaAvgAggregateOutputType | null
    _sum: FarmaciaSumAggregateOutputType | null
    _min: FarmaciaMinAggregateOutputType | null
    _max: FarmaciaMaxAggregateOutputType | null
  }

  export type FarmaciaAvgAggregateOutputType = {
    idFarmacia: number | null
  }

  export type FarmaciaSumAggregateOutputType = {
    idFarmacia: number | null
  }

  export type FarmaciaMinAggregateOutputType = {
    idFarmacia: number | null
    nombre: string | null
    direccion: string | null
  }

  export type FarmaciaMaxAggregateOutputType = {
    idFarmacia: number | null
    nombre: string | null
    direccion: string | null
  }

  export type FarmaciaCountAggregateOutputType = {
    idFarmacia: number
    nombre: number
    direccion: number
    _all: number
  }


  export type FarmaciaAvgAggregateInputType = {
    idFarmacia?: true
  }

  export type FarmaciaSumAggregateInputType = {
    idFarmacia?: true
  }

  export type FarmaciaMinAggregateInputType = {
    idFarmacia?: true
    nombre?: true
    direccion?: true
  }

  export type FarmaciaMaxAggregateInputType = {
    idFarmacia?: true
    nombre?: true
    direccion?: true
  }

  export type FarmaciaCountAggregateInputType = {
    idFarmacia?: true
    nombre?: true
    direccion?: true
    _all?: true
  }

  export type FarmaciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farmacia to aggregate.
     */
    where?: FarmaciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmacias to fetch.
     */
    orderBy?: FarmaciaOrderByWithRelationInput | FarmaciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmaciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmacias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmacias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Farmacias
    **/
    _count?: true | FarmaciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FarmaciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FarmaciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmaciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmaciaMaxAggregateInputType
  }

  export type GetFarmaciaAggregateType<T extends FarmaciaAggregateArgs> = {
        [P in keyof T & keyof AggregateFarmacia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarmacia[P]>
      : GetScalarType<T[P], AggregateFarmacia[P]>
  }




  export type FarmaciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmaciaWhereInput
    orderBy?: FarmaciaOrderByWithAggregationInput | FarmaciaOrderByWithAggregationInput[]
    by: FarmaciaScalarFieldEnum[] | FarmaciaScalarFieldEnum
    having?: FarmaciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmaciaCountAggregateInputType | true
    _avg?: FarmaciaAvgAggregateInputType
    _sum?: FarmaciaSumAggregateInputType
    _min?: FarmaciaMinAggregateInputType
    _max?: FarmaciaMaxAggregateInputType
  }

  export type FarmaciaGroupByOutputType = {
    idFarmacia: number
    nombre: string
    direccion: string
    _count: FarmaciaCountAggregateOutputType | null
    _avg: FarmaciaAvgAggregateOutputType | null
    _sum: FarmaciaSumAggregateOutputType | null
    _min: FarmaciaMinAggregateOutputType | null
    _max: FarmaciaMaxAggregateOutputType | null
  }

  type GetFarmaciaGroupByPayload<T extends FarmaciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmaciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmaciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmaciaGroupByOutputType[P]>
            : GetScalarType<T[P], FarmaciaGroupByOutputType[P]>
        }
      >
    >


  export type FarmaciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idFarmacia?: boolean
    nombre?: boolean
    direccion?: boolean
    posee?: boolean | Farmacia$poseeArgs<ExtArgs>
    entregas?: boolean | Farmacia$entregasArgs<ExtArgs>
    _count?: boolean | FarmaciaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmacia"]>

  export type FarmaciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idFarmacia?: boolean
    nombre?: boolean
    direccion?: boolean
  }, ExtArgs["result"]["farmacia"]>

  export type FarmaciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idFarmacia?: boolean
    nombre?: boolean
    direccion?: boolean
  }, ExtArgs["result"]["farmacia"]>

  export type FarmaciaSelectScalar = {
    idFarmacia?: boolean
    nombre?: boolean
    direccion?: boolean
  }

  export type FarmaciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idFarmacia" | "nombre" | "direccion", ExtArgs["result"]["farmacia"]>
  export type FarmaciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posee?: boolean | Farmacia$poseeArgs<ExtArgs>
    entregas?: boolean | Farmacia$entregasArgs<ExtArgs>
    _count?: boolean | FarmaciaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FarmaciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FarmaciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FarmaciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Farmacia"
    objects: {
      posee: Prisma.$FarmaciaPoseePayload<ExtArgs>[]
      entregas: Prisma.$FarmaciaEntregaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idFarmacia: number
      nombre: string
      direccion: string
    }, ExtArgs["result"]["farmacia"]>
    composites: {}
  }

  type FarmaciaGetPayload<S extends boolean | null | undefined | FarmaciaDefaultArgs> = $Result.GetResult<Prisma.$FarmaciaPayload, S>

  type FarmaciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FarmaciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FarmaciaCountAggregateInputType | true
    }

  export interface FarmaciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Farmacia'], meta: { name: 'Farmacia' } }
    /**
     * Find zero or one Farmacia that matches the filter.
     * @param {FarmaciaFindUniqueArgs} args - Arguments to find a Farmacia
     * @example
     * // Get one Farmacia
     * const farmacia = await prisma.farmacia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmaciaFindUniqueArgs>(args: SelectSubset<T, FarmaciaFindUniqueArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Farmacia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FarmaciaFindUniqueOrThrowArgs} args - Arguments to find a Farmacia
     * @example
     * // Get one Farmacia
     * const farmacia = await prisma.farmacia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmaciaFindUniqueOrThrowArgs>(args: SelectSubset<T, FarmaciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farmacia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaFindFirstArgs} args - Arguments to find a Farmacia
     * @example
     * // Get one Farmacia
     * const farmacia = await prisma.farmacia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmaciaFindFirstArgs>(args?: SelectSubset<T, FarmaciaFindFirstArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farmacia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaFindFirstOrThrowArgs} args - Arguments to find a Farmacia
     * @example
     * // Get one Farmacia
     * const farmacia = await prisma.farmacia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmaciaFindFirstOrThrowArgs>(args?: SelectSubset<T, FarmaciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Farmacias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farmacias
     * const farmacias = await prisma.farmacia.findMany()
     * 
     * // Get first 10 Farmacias
     * const farmacias = await prisma.farmacia.findMany({ take: 10 })
     * 
     * // Only select the `idFarmacia`
     * const farmaciaWithIdFarmaciaOnly = await prisma.farmacia.findMany({ select: { idFarmacia: true } })
     * 
     */
    findMany<T extends FarmaciaFindManyArgs>(args?: SelectSubset<T, FarmaciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Farmacia.
     * @param {FarmaciaCreateArgs} args - Arguments to create a Farmacia.
     * @example
     * // Create one Farmacia
     * const Farmacia = await prisma.farmacia.create({
     *   data: {
     *     // ... data to create a Farmacia
     *   }
     * })
     * 
     */
    create<T extends FarmaciaCreateArgs>(args: SelectSubset<T, FarmaciaCreateArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Farmacias.
     * @param {FarmaciaCreateManyArgs} args - Arguments to create many Farmacias.
     * @example
     * // Create many Farmacias
     * const farmacia = await prisma.farmacia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FarmaciaCreateManyArgs>(args?: SelectSubset<T, FarmaciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Farmacias and returns the data saved in the database.
     * @param {FarmaciaCreateManyAndReturnArgs} args - Arguments to create many Farmacias.
     * @example
     * // Create many Farmacias
     * const farmacia = await prisma.farmacia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Farmacias and only return the `idFarmacia`
     * const farmaciaWithIdFarmaciaOnly = await prisma.farmacia.createManyAndReturn({
     *   select: { idFarmacia: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FarmaciaCreateManyAndReturnArgs>(args?: SelectSubset<T, FarmaciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Farmacia.
     * @param {FarmaciaDeleteArgs} args - Arguments to delete one Farmacia.
     * @example
     * // Delete one Farmacia
     * const Farmacia = await prisma.farmacia.delete({
     *   where: {
     *     // ... filter to delete one Farmacia
     *   }
     * })
     * 
     */
    delete<T extends FarmaciaDeleteArgs>(args: SelectSubset<T, FarmaciaDeleteArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Farmacia.
     * @param {FarmaciaUpdateArgs} args - Arguments to update one Farmacia.
     * @example
     * // Update one Farmacia
     * const farmacia = await prisma.farmacia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FarmaciaUpdateArgs>(args: SelectSubset<T, FarmaciaUpdateArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Farmacias.
     * @param {FarmaciaDeleteManyArgs} args - Arguments to filter Farmacias to delete.
     * @example
     * // Delete a few Farmacias
     * const { count } = await prisma.farmacia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FarmaciaDeleteManyArgs>(args?: SelectSubset<T, FarmaciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farmacias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farmacias
     * const farmacia = await prisma.farmacia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FarmaciaUpdateManyArgs>(args: SelectSubset<T, FarmaciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farmacias and returns the data updated in the database.
     * @param {FarmaciaUpdateManyAndReturnArgs} args - Arguments to update many Farmacias.
     * @example
     * // Update many Farmacias
     * const farmacia = await prisma.farmacia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Farmacias and only return the `idFarmacia`
     * const farmaciaWithIdFarmaciaOnly = await prisma.farmacia.updateManyAndReturn({
     *   select: { idFarmacia: true },
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
    updateManyAndReturn<T extends FarmaciaUpdateManyAndReturnArgs>(args: SelectSubset<T, FarmaciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Farmacia.
     * @param {FarmaciaUpsertArgs} args - Arguments to update or create a Farmacia.
     * @example
     * // Update or create a Farmacia
     * const farmacia = await prisma.farmacia.upsert({
     *   create: {
     *     // ... data to create a Farmacia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farmacia we want to update
     *   }
     * })
     */
    upsert<T extends FarmaciaUpsertArgs>(args: SelectSubset<T, FarmaciaUpsertArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Farmacias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaCountArgs} args - Arguments to filter Farmacias to count.
     * @example
     * // Count the number of Farmacias
     * const count = await prisma.farmacia.count({
     *   where: {
     *     // ... the filter for the Farmacias we want to count
     *   }
     * })
    **/
    count<T extends FarmaciaCountArgs>(
      args?: Subset<T, FarmaciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmaciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Farmacia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FarmaciaAggregateArgs>(args: Subset<T, FarmaciaAggregateArgs>): Prisma.PrismaPromise<GetFarmaciaAggregateType<T>>

    /**
     * Group by Farmacia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaGroupByArgs} args - Group by arguments.
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
      T extends FarmaciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmaciaGroupByArgs['orderBy'] }
        : { orderBy?: FarmaciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FarmaciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmaciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Farmacia model
   */
  readonly fields: FarmaciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Farmacia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FarmaciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posee<T extends Farmacia$poseeArgs<ExtArgs> = {}>(args?: Subset<T, Farmacia$poseeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmaciaPoseePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    entregas<T extends Farmacia$entregasArgs<ExtArgs> = {}>(args?: Subset<T, Farmacia$entregasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmaciaEntregaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Farmacia model
   */
  interface FarmaciaFieldRefs {
    readonly idFarmacia: FieldRef<"Farmacia", 'Int'>
    readonly nombre: FieldRef<"Farmacia", 'String'>
    readonly direccion: FieldRef<"Farmacia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Farmacia findUnique
   */
  export type FarmaciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    /**
     * Filter, which Farmacia to fetch.
     */
    where: FarmaciaWhereUniqueInput
  }

  /**
   * Farmacia findUniqueOrThrow
   */
  export type FarmaciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    /**
     * Filter, which Farmacia to fetch.
     */
    where: FarmaciaWhereUniqueInput
  }

  /**
   * Farmacia findFirst
   */
  export type FarmaciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    /**
     * Filter, which Farmacia to fetch.
     */
    where?: FarmaciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmacias to fetch.
     */
    orderBy?: FarmaciaOrderByWithRelationInput | FarmaciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farmacias.
     */
    cursor?: FarmaciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmacias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmacias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farmacias.
     */
    distinct?: FarmaciaScalarFieldEnum | FarmaciaScalarFieldEnum[]
  }

  /**
   * Farmacia findFirstOrThrow
   */
  export type FarmaciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    /**
     * Filter, which Farmacia to fetch.
     */
    where?: FarmaciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmacias to fetch.
     */
    orderBy?: FarmaciaOrderByWithRelationInput | FarmaciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farmacias.
     */
    cursor?: FarmaciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmacias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmacias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farmacias.
     */
    distinct?: FarmaciaScalarFieldEnum | FarmaciaScalarFieldEnum[]
  }

  /**
   * Farmacia findMany
   */
  export type FarmaciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    /**
     * Filter, which Farmacias to fetch.
     */
    where?: FarmaciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farmacias to fetch.
     */
    orderBy?: FarmaciaOrderByWithRelationInput | FarmaciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Farmacias.
     */
    cursor?: FarmaciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farmacias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farmacias.
     */
    skip?: number
    distinct?: FarmaciaScalarFieldEnum | FarmaciaScalarFieldEnum[]
  }

  /**
   * Farmacia create
   */
  export type FarmaciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Farmacia.
     */
    data: XOR<FarmaciaCreateInput, FarmaciaUncheckedCreateInput>
  }

  /**
   * Farmacia createMany
   */
  export type FarmaciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Farmacias.
     */
    data: FarmaciaCreateManyInput | FarmaciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Farmacia createManyAndReturn
   */
  export type FarmaciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * The data used to create many Farmacias.
     */
    data: FarmaciaCreateManyInput | FarmaciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Farmacia update
   */
  export type FarmaciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Farmacia.
     */
    data: XOR<FarmaciaUpdateInput, FarmaciaUncheckedUpdateInput>
    /**
     * Choose, which Farmacia to update.
     */
    where: FarmaciaWhereUniqueInput
  }

  /**
   * Farmacia updateMany
   */
  export type FarmaciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Farmacias.
     */
    data: XOR<FarmaciaUpdateManyMutationInput, FarmaciaUncheckedUpdateManyInput>
    /**
     * Filter which Farmacias to update
     */
    where?: FarmaciaWhereInput
    /**
     * Limit how many Farmacias to update.
     */
    limit?: number
  }

  /**
   * Farmacia updateManyAndReturn
   */
  export type FarmaciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * The data used to update Farmacias.
     */
    data: XOR<FarmaciaUpdateManyMutationInput, FarmaciaUncheckedUpdateManyInput>
    /**
     * Filter which Farmacias to update
     */
    where?: FarmaciaWhereInput
    /**
     * Limit how many Farmacias to update.
     */
    limit?: number
  }

  /**
   * Farmacia upsert
   */
  export type FarmaciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Farmacia to update in case it exists.
     */
    where: FarmaciaWhereUniqueInput
    /**
     * In case the Farmacia found by the `where` argument doesn't exist, create a new Farmacia with this data.
     */
    create: XOR<FarmaciaCreateInput, FarmaciaUncheckedCreateInput>
    /**
     * In case the Farmacia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmaciaUpdateInput, FarmaciaUncheckedUpdateInput>
  }

  /**
   * Farmacia delete
   */
  export type FarmaciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
    /**
     * Filter which Farmacia to delete.
     */
    where: FarmaciaWhereUniqueInput
  }

  /**
   * Farmacia deleteMany
   */
  export type FarmaciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farmacias to delete
     */
    where?: FarmaciaWhereInput
    /**
     * Limit how many Farmacias to delete.
     */
    limit?: number
  }

  /**
   * Farmacia.posee
   */
  export type Farmacia$poseeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaPosee
     */
    select?: FarmaciaPoseeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaPosee
     */
    omit?: FarmaciaPoseeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaPoseeInclude<ExtArgs> | null
    where?: FarmaciaPoseeWhereInput
    orderBy?: FarmaciaPoseeOrderByWithRelationInput | FarmaciaPoseeOrderByWithRelationInput[]
    cursor?: FarmaciaPoseeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmaciaPoseeScalarFieldEnum | FarmaciaPoseeScalarFieldEnum[]
  }

  /**
   * Farmacia.entregas
   */
  export type Farmacia$entregasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaEntrega
     */
    select?: FarmaciaEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaEntrega
     */
    omit?: FarmaciaEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaEntregaInclude<ExtArgs> | null
    where?: FarmaciaEntregaWhereInput
    orderBy?: FarmaciaEntregaOrderByWithRelationInput | FarmaciaEntregaOrderByWithRelationInput[]
    cursor?: FarmaciaEntregaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmaciaEntregaScalarFieldEnum | FarmaciaEntregaScalarFieldEnum[]
  }

  /**
   * Farmacia without action
   */
  export type FarmaciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farmacia
     */
    select?: FarmaciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farmacia
     */
    omit?: FarmaciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaInclude<ExtArgs> | null
  }


  /**
   * Model Medicamento
   */

  export type AggregateMedicamento = {
    _count: MedicamentoCountAggregateOutputType | null
    _avg: MedicamentoAvgAggregateOutputType | null
    _sum: MedicamentoSumAggregateOutputType | null
    _min: MedicamentoMinAggregateOutputType | null
    _max: MedicamentoMaxAggregateOutputType | null
  }

  export type MedicamentoAvgAggregateOutputType = {
    idMedicamento: number | null
  }

  export type MedicamentoSumAggregateOutputType = {
    idMedicamento: number | null
  }

  export type MedicamentoMinAggregateOutputType = {
    idMedicamento: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type MedicamentoMaxAggregateOutputType = {
    idMedicamento: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type MedicamentoCountAggregateOutputType = {
    idMedicamento: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type MedicamentoAvgAggregateInputType = {
    idMedicamento?: true
  }

  export type MedicamentoSumAggregateInputType = {
    idMedicamento?: true
  }

  export type MedicamentoMinAggregateInputType = {
    idMedicamento?: true
    nombre?: true
    descripcion?: true
  }

  export type MedicamentoMaxAggregateInputType = {
    idMedicamento?: true
    nombre?: true
    descripcion?: true
  }

  export type MedicamentoCountAggregateInputType = {
    idMedicamento?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type MedicamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicamento to aggregate.
     */
    where?: MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicamentos to fetch.
     */
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicamentos
    **/
    _count?: true | MedicamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicamentoMaxAggregateInputType
  }

  export type GetMedicamentoAggregateType<T extends MedicamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicamento[P]>
      : GetScalarType<T[P], AggregateMedicamento[P]>
  }




  export type MedicamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicamentoWhereInput
    orderBy?: MedicamentoOrderByWithAggregationInput | MedicamentoOrderByWithAggregationInput[]
    by: MedicamentoScalarFieldEnum[] | MedicamentoScalarFieldEnum
    having?: MedicamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicamentoCountAggregateInputType | true
    _avg?: MedicamentoAvgAggregateInputType
    _sum?: MedicamentoSumAggregateInputType
    _min?: MedicamentoMinAggregateInputType
    _max?: MedicamentoMaxAggregateInputType
  }

  export type MedicamentoGroupByOutputType = {
    idMedicamento: number
    nombre: string
    descripcion: string
    _count: MedicamentoCountAggregateOutputType | null
    _avg: MedicamentoAvgAggregateOutputType | null
    _sum: MedicamentoSumAggregateOutputType | null
    _min: MedicamentoMinAggregateOutputType | null
    _max: MedicamentoMaxAggregateOutputType | null
  }

  type GetMedicamentoGroupByPayload<T extends MedicamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicamentoGroupByOutputType[P]>
            : GetScalarType<T[P], MedicamentoGroupByOutputType[P]>
        }
      >
    >


  export type MedicamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMedicamento?: boolean
    nombre?: boolean
    descripcion?: boolean
    posee?: boolean | Medicamento$poseeArgs<ExtArgs>
    entregas?: boolean | Medicamento$entregasArgs<ExtArgs>
    _count?: boolean | MedicamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicamento"]>

  export type MedicamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMedicamento?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["medicamento"]>

  export type MedicamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idMedicamento?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["medicamento"]>

  export type MedicamentoSelectScalar = {
    idMedicamento?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type MedicamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idMedicamento" | "nombre" | "descripcion", ExtArgs["result"]["medicamento"]>
  export type MedicamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posee?: boolean | Medicamento$poseeArgs<ExtArgs>
    entregas?: boolean | Medicamento$entregasArgs<ExtArgs>
    _count?: boolean | MedicamentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MedicamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MedicamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medicamento"
    objects: {
      posee: Prisma.$FarmaciaPoseePayload<ExtArgs>[]
      entregas: Prisma.$FarmaciaEntregaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idMedicamento: number
      nombre: string
      descripcion: string
    }, ExtArgs["result"]["medicamento"]>
    composites: {}
  }

  type MedicamentoGetPayload<S extends boolean | null | undefined | MedicamentoDefaultArgs> = $Result.GetResult<Prisma.$MedicamentoPayload, S>

  type MedicamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicamentoCountAggregateInputType | true
    }

  export interface MedicamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medicamento'], meta: { name: 'Medicamento' } }
    /**
     * Find zero or one Medicamento that matches the filter.
     * @param {MedicamentoFindUniqueArgs} args - Arguments to find a Medicamento
     * @example
     * // Get one Medicamento
     * const medicamento = await prisma.medicamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicamentoFindUniqueArgs>(args: SelectSubset<T, MedicamentoFindUniqueArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medicamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicamentoFindUniqueOrThrowArgs} args - Arguments to find a Medicamento
     * @example
     * // Get one Medicamento
     * const medicamento = await prisma.medicamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoFindFirstArgs} args - Arguments to find a Medicamento
     * @example
     * // Get one Medicamento
     * const medicamento = await prisma.medicamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicamentoFindFirstArgs>(args?: SelectSubset<T, MedicamentoFindFirstArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoFindFirstOrThrowArgs} args - Arguments to find a Medicamento
     * @example
     * // Get one Medicamento
     * const medicamento = await prisma.medicamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicamentos
     * const medicamentos = await prisma.medicamento.findMany()
     * 
     * // Get first 10 Medicamentos
     * const medicamentos = await prisma.medicamento.findMany({ take: 10 })
     * 
     * // Only select the `idMedicamento`
     * const medicamentoWithIdMedicamentoOnly = await prisma.medicamento.findMany({ select: { idMedicamento: true } })
     * 
     */
    findMany<T extends MedicamentoFindManyArgs>(args?: SelectSubset<T, MedicamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medicamento.
     * @param {MedicamentoCreateArgs} args - Arguments to create a Medicamento.
     * @example
     * // Create one Medicamento
     * const Medicamento = await prisma.medicamento.create({
     *   data: {
     *     // ... data to create a Medicamento
     *   }
     * })
     * 
     */
    create<T extends MedicamentoCreateArgs>(args: SelectSubset<T, MedicamentoCreateArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicamentos.
     * @param {MedicamentoCreateManyArgs} args - Arguments to create many Medicamentos.
     * @example
     * // Create many Medicamentos
     * const medicamento = await prisma.medicamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicamentoCreateManyArgs>(args?: SelectSubset<T, MedicamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicamentos and returns the data saved in the database.
     * @param {MedicamentoCreateManyAndReturnArgs} args - Arguments to create many Medicamentos.
     * @example
     * // Create many Medicamentos
     * const medicamento = await prisma.medicamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicamentos and only return the `idMedicamento`
     * const medicamentoWithIdMedicamentoOnly = await prisma.medicamento.createManyAndReturn({
     *   select: { idMedicamento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medicamento.
     * @param {MedicamentoDeleteArgs} args - Arguments to delete one Medicamento.
     * @example
     * // Delete one Medicamento
     * const Medicamento = await prisma.medicamento.delete({
     *   where: {
     *     // ... filter to delete one Medicamento
     *   }
     * })
     * 
     */
    delete<T extends MedicamentoDeleteArgs>(args: SelectSubset<T, MedicamentoDeleteArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medicamento.
     * @param {MedicamentoUpdateArgs} args - Arguments to update one Medicamento.
     * @example
     * // Update one Medicamento
     * const medicamento = await prisma.medicamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicamentoUpdateArgs>(args: SelectSubset<T, MedicamentoUpdateArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicamentos.
     * @param {MedicamentoDeleteManyArgs} args - Arguments to filter Medicamentos to delete.
     * @example
     * // Delete a few Medicamentos
     * const { count } = await prisma.medicamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicamentoDeleteManyArgs>(args?: SelectSubset<T, MedicamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicamentos
     * const medicamento = await prisma.medicamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicamentoUpdateManyArgs>(args: SelectSubset<T, MedicamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicamentos and returns the data updated in the database.
     * @param {MedicamentoUpdateManyAndReturnArgs} args - Arguments to update many Medicamentos.
     * @example
     * // Update many Medicamentos
     * const medicamento = await prisma.medicamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicamentos and only return the `idMedicamento`
     * const medicamentoWithIdMedicamentoOnly = await prisma.medicamento.updateManyAndReturn({
     *   select: { idMedicamento: true },
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
    updateManyAndReturn<T extends MedicamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medicamento.
     * @param {MedicamentoUpsertArgs} args - Arguments to update or create a Medicamento.
     * @example
     * // Update or create a Medicamento
     * const medicamento = await prisma.medicamento.upsert({
     *   create: {
     *     // ... data to create a Medicamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicamento we want to update
     *   }
     * })
     */
    upsert<T extends MedicamentoUpsertArgs>(args: SelectSubset<T, MedicamentoUpsertArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoCountArgs} args - Arguments to filter Medicamentos to count.
     * @example
     * // Count the number of Medicamentos
     * const count = await prisma.medicamento.count({
     *   where: {
     *     // ... the filter for the Medicamentos we want to count
     *   }
     * })
    **/
    count<T extends MedicamentoCountArgs>(
      args?: Subset<T, MedicamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicamentoAggregateArgs>(args: Subset<T, MedicamentoAggregateArgs>): Prisma.PrismaPromise<GetMedicamentoAggregateType<T>>

    /**
     * Group by Medicamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentoGroupByArgs} args - Group by arguments.
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
      T extends MedicamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicamentoGroupByArgs['orderBy'] }
        : { orderBy?: MedicamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medicamento model
   */
  readonly fields: MedicamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posee<T extends Medicamento$poseeArgs<ExtArgs> = {}>(args?: Subset<T, Medicamento$poseeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmaciaPoseePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    entregas<T extends Medicamento$entregasArgs<ExtArgs> = {}>(args?: Subset<T, Medicamento$entregasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmaciaEntregaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Medicamento model
   */
  interface MedicamentoFieldRefs {
    readonly idMedicamento: FieldRef<"Medicamento", 'Int'>
    readonly nombre: FieldRef<"Medicamento", 'String'>
    readonly descripcion: FieldRef<"Medicamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Medicamento findUnique
   */
  export type MedicamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamento to fetch.
     */
    where: MedicamentoWhereUniqueInput
  }

  /**
   * Medicamento findUniqueOrThrow
   */
  export type MedicamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamento to fetch.
     */
    where: MedicamentoWhereUniqueInput
  }

  /**
   * Medicamento findFirst
   */
  export type MedicamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamento to fetch.
     */
    where?: MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicamentos to fetch.
     */
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicamentos.
     */
    cursor?: MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicamentos.
     */
    distinct?: MedicamentoScalarFieldEnum | MedicamentoScalarFieldEnum[]
  }

  /**
   * Medicamento findFirstOrThrow
   */
  export type MedicamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamento to fetch.
     */
    where?: MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicamentos to fetch.
     */
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicamentos.
     */
    cursor?: MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicamentos.
     */
    distinct?: MedicamentoScalarFieldEnum | MedicamentoScalarFieldEnum[]
  }

  /**
   * Medicamento findMany
   */
  export type MedicamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter, which Medicamentos to fetch.
     */
    where?: MedicamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicamentos to fetch.
     */
    orderBy?: MedicamentoOrderByWithRelationInput | MedicamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicamentos.
     */
    cursor?: MedicamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicamentos.
     */
    skip?: number
    distinct?: MedicamentoScalarFieldEnum | MedicamentoScalarFieldEnum[]
  }

  /**
   * Medicamento create
   */
  export type MedicamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Medicamento.
     */
    data: XOR<MedicamentoCreateInput, MedicamentoUncheckedCreateInput>
  }

  /**
   * Medicamento createMany
   */
  export type MedicamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicamentos.
     */
    data: MedicamentoCreateManyInput | MedicamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicamento createManyAndReturn
   */
  export type MedicamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Medicamentos.
     */
    data: MedicamentoCreateManyInput | MedicamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicamento update
   */
  export type MedicamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Medicamento.
     */
    data: XOR<MedicamentoUpdateInput, MedicamentoUncheckedUpdateInput>
    /**
     * Choose, which Medicamento to update.
     */
    where: MedicamentoWhereUniqueInput
  }

  /**
   * Medicamento updateMany
   */
  export type MedicamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicamentos.
     */
    data: XOR<MedicamentoUpdateManyMutationInput, MedicamentoUncheckedUpdateManyInput>
    /**
     * Filter which Medicamentos to update
     */
    where?: MedicamentoWhereInput
    /**
     * Limit how many Medicamentos to update.
     */
    limit?: number
  }

  /**
   * Medicamento updateManyAndReturn
   */
  export type MedicamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * The data used to update Medicamentos.
     */
    data: XOR<MedicamentoUpdateManyMutationInput, MedicamentoUncheckedUpdateManyInput>
    /**
     * Filter which Medicamentos to update
     */
    where?: MedicamentoWhereInput
    /**
     * Limit how many Medicamentos to update.
     */
    limit?: number
  }

  /**
   * Medicamento upsert
   */
  export type MedicamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Medicamento to update in case it exists.
     */
    where: MedicamentoWhereUniqueInput
    /**
     * In case the Medicamento found by the `where` argument doesn't exist, create a new Medicamento with this data.
     */
    create: XOR<MedicamentoCreateInput, MedicamentoUncheckedCreateInput>
    /**
     * In case the Medicamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicamentoUpdateInput, MedicamentoUncheckedUpdateInput>
  }

  /**
   * Medicamento delete
   */
  export type MedicamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
    /**
     * Filter which Medicamento to delete.
     */
    where: MedicamentoWhereUniqueInput
  }

  /**
   * Medicamento deleteMany
   */
  export type MedicamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicamentos to delete
     */
    where?: MedicamentoWhereInput
    /**
     * Limit how many Medicamentos to delete.
     */
    limit?: number
  }

  /**
   * Medicamento.posee
   */
  export type Medicamento$poseeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaPosee
     */
    select?: FarmaciaPoseeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaPosee
     */
    omit?: FarmaciaPoseeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaPoseeInclude<ExtArgs> | null
    where?: FarmaciaPoseeWhereInput
    orderBy?: FarmaciaPoseeOrderByWithRelationInput | FarmaciaPoseeOrderByWithRelationInput[]
    cursor?: FarmaciaPoseeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmaciaPoseeScalarFieldEnum | FarmaciaPoseeScalarFieldEnum[]
  }

  /**
   * Medicamento.entregas
   */
  export type Medicamento$entregasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaEntrega
     */
    select?: FarmaciaEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaEntrega
     */
    omit?: FarmaciaEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaEntregaInclude<ExtArgs> | null
    where?: FarmaciaEntregaWhereInput
    orderBy?: FarmaciaEntregaOrderByWithRelationInput | FarmaciaEntregaOrderByWithRelationInput[]
    cursor?: FarmaciaEntregaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmaciaEntregaScalarFieldEnum | FarmaciaEntregaScalarFieldEnum[]
  }

  /**
   * Medicamento without action
   */
  export type MedicamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicamento
     */
    select?: MedicamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicamento
     */
    omit?: MedicamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentoInclude<ExtArgs> | null
  }


  /**
   * Model FarmaciaPosee
   */

  export type AggregateFarmaciaPosee = {
    _count: FarmaciaPoseeCountAggregateOutputType | null
    _avg: FarmaciaPoseeAvgAggregateOutputType | null
    _sum: FarmaciaPoseeSumAggregateOutputType | null
    _min: FarmaciaPoseeMinAggregateOutputType | null
    _max: FarmaciaPoseeMaxAggregateOutputType | null
  }

  export type FarmaciaPoseeAvgAggregateOutputType = {
    idFarmacia: number | null
    idMedicamento: number | null
    cantidad: number | null
  }

  export type FarmaciaPoseeSumAggregateOutputType = {
    idFarmacia: number | null
    idMedicamento: number | null
    cantidad: number | null
  }

  export type FarmaciaPoseeMinAggregateOutputType = {
    idFarmacia: number | null
    idMedicamento: number | null
    cantidad: number | null
  }

  export type FarmaciaPoseeMaxAggregateOutputType = {
    idFarmacia: number | null
    idMedicamento: number | null
    cantidad: number | null
  }

  export type FarmaciaPoseeCountAggregateOutputType = {
    idFarmacia: number
    idMedicamento: number
    cantidad: number
    _all: number
  }


  export type FarmaciaPoseeAvgAggregateInputType = {
    idFarmacia?: true
    idMedicamento?: true
    cantidad?: true
  }

  export type FarmaciaPoseeSumAggregateInputType = {
    idFarmacia?: true
    idMedicamento?: true
    cantidad?: true
  }

  export type FarmaciaPoseeMinAggregateInputType = {
    idFarmacia?: true
    idMedicamento?: true
    cantidad?: true
  }

  export type FarmaciaPoseeMaxAggregateInputType = {
    idFarmacia?: true
    idMedicamento?: true
    cantidad?: true
  }

  export type FarmaciaPoseeCountAggregateInputType = {
    idFarmacia?: true
    idMedicamento?: true
    cantidad?: true
    _all?: true
  }

  export type FarmaciaPoseeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FarmaciaPosee to aggregate.
     */
    where?: FarmaciaPoseeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmaciaPosees to fetch.
     */
    orderBy?: FarmaciaPoseeOrderByWithRelationInput | FarmaciaPoseeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmaciaPoseeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmaciaPosees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmaciaPosees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FarmaciaPosees
    **/
    _count?: true | FarmaciaPoseeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FarmaciaPoseeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FarmaciaPoseeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmaciaPoseeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmaciaPoseeMaxAggregateInputType
  }

  export type GetFarmaciaPoseeAggregateType<T extends FarmaciaPoseeAggregateArgs> = {
        [P in keyof T & keyof AggregateFarmaciaPosee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarmaciaPosee[P]>
      : GetScalarType<T[P], AggregateFarmaciaPosee[P]>
  }




  export type FarmaciaPoseeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmaciaPoseeWhereInput
    orderBy?: FarmaciaPoseeOrderByWithAggregationInput | FarmaciaPoseeOrderByWithAggregationInput[]
    by: FarmaciaPoseeScalarFieldEnum[] | FarmaciaPoseeScalarFieldEnum
    having?: FarmaciaPoseeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmaciaPoseeCountAggregateInputType | true
    _avg?: FarmaciaPoseeAvgAggregateInputType
    _sum?: FarmaciaPoseeSumAggregateInputType
    _min?: FarmaciaPoseeMinAggregateInputType
    _max?: FarmaciaPoseeMaxAggregateInputType
  }

  export type FarmaciaPoseeGroupByOutputType = {
    idFarmacia: number
    idMedicamento: number
    cantidad: number
    _count: FarmaciaPoseeCountAggregateOutputType | null
    _avg: FarmaciaPoseeAvgAggregateOutputType | null
    _sum: FarmaciaPoseeSumAggregateOutputType | null
    _min: FarmaciaPoseeMinAggregateOutputType | null
    _max: FarmaciaPoseeMaxAggregateOutputType | null
  }

  type GetFarmaciaPoseeGroupByPayload<T extends FarmaciaPoseeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmaciaPoseeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmaciaPoseeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmaciaPoseeGroupByOutputType[P]>
            : GetScalarType<T[P], FarmaciaPoseeGroupByOutputType[P]>
        }
      >
    >


  export type FarmaciaPoseeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idFarmacia?: boolean
    idMedicamento?: boolean
    cantidad?: boolean
    farmacia?: boolean | FarmaciaDefaultArgs<ExtArgs>
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmaciaPosee"]>

  export type FarmaciaPoseeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idFarmacia?: boolean
    idMedicamento?: boolean
    cantidad?: boolean
    farmacia?: boolean | FarmaciaDefaultArgs<ExtArgs>
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmaciaPosee"]>

  export type FarmaciaPoseeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idFarmacia?: boolean
    idMedicamento?: boolean
    cantidad?: boolean
    farmacia?: boolean | FarmaciaDefaultArgs<ExtArgs>
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmaciaPosee"]>

  export type FarmaciaPoseeSelectScalar = {
    idFarmacia?: boolean
    idMedicamento?: boolean
    cantidad?: boolean
  }

  export type FarmaciaPoseeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idFarmacia" | "idMedicamento" | "cantidad", ExtArgs["result"]["farmaciaPosee"]>
  export type FarmaciaPoseeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmacia?: boolean | FarmaciaDefaultArgs<ExtArgs>
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
  }
  export type FarmaciaPoseeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmacia?: boolean | FarmaciaDefaultArgs<ExtArgs>
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
  }
  export type FarmaciaPoseeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmacia?: boolean | FarmaciaDefaultArgs<ExtArgs>
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
  }

  export type $FarmaciaPoseePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FarmaciaPosee"
    objects: {
      farmacia: Prisma.$FarmaciaPayload<ExtArgs>
      medicamento: Prisma.$MedicamentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idFarmacia: number
      idMedicamento: number
      cantidad: number
    }, ExtArgs["result"]["farmaciaPosee"]>
    composites: {}
  }

  type FarmaciaPoseeGetPayload<S extends boolean | null | undefined | FarmaciaPoseeDefaultArgs> = $Result.GetResult<Prisma.$FarmaciaPoseePayload, S>

  type FarmaciaPoseeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FarmaciaPoseeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FarmaciaPoseeCountAggregateInputType | true
    }

  export interface FarmaciaPoseeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FarmaciaPosee'], meta: { name: 'FarmaciaPosee' } }
    /**
     * Find zero or one FarmaciaPosee that matches the filter.
     * @param {FarmaciaPoseeFindUniqueArgs} args - Arguments to find a FarmaciaPosee
     * @example
     * // Get one FarmaciaPosee
     * const farmaciaPosee = await prisma.farmaciaPosee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmaciaPoseeFindUniqueArgs>(args: SelectSubset<T, FarmaciaPoseeFindUniqueArgs<ExtArgs>>): Prisma__FarmaciaPoseeClient<$Result.GetResult<Prisma.$FarmaciaPoseePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FarmaciaPosee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FarmaciaPoseeFindUniqueOrThrowArgs} args - Arguments to find a FarmaciaPosee
     * @example
     * // Get one FarmaciaPosee
     * const farmaciaPosee = await prisma.farmaciaPosee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmaciaPoseeFindUniqueOrThrowArgs>(args: SelectSubset<T, FarmaciaPoseeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FarmaciaPoseeClient<$Result.GetResult<Prisma.$FarmaciaPoseePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FarmaciaPosee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaPoseeFindFirstArgs} args - Arguments to find a FarmaciaPosee
     * @example
     * // Get one FarmaciaPosee
     * const farmaciaPosee = await prisma.farmaciaPosee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmaciaPoseeFindFirstArgs>(args?: SelectSubset<T, FarmaciaPoseeFindFirstArgs<ExtArgs>>): Prisma__FarmaciaPoseeClient<$Result.GetResult<Prisma.$FarmaciaPoseePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FarmaciaPosee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaPoseeFindFirstOrThrowArgs} args - Arguments to find a FarmaciaPosee
     * @example
     * // Get one FarmaciaPosee
     * const farmaciaPosee = await prisma.farmaciaPosee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmaciaPoseeFindFirstOrThrowArgs>(args?: SelectSubset<T, FarmaciaPoseeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FarmaciaPoseeClient<$Result.GetResult<Prisma.$FarmaciaPoseePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FarmaciaPosees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaPoseeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FarmaciaPosees
     * const farmaciaPosees = await prisma.farmaciaPosee.findMany()
     * 
     * // Get first 10 FarmaciaPosees
     * const farmaciaPosees = await prisma.farmaciaPosee.findMany({ take: 10 })
     * 
     * // Only select the `idFarmacia`
     * const farmaciaPoseeWithIdFarmaciaOnly = await prisma.farmaciaPosee.findMany({ select: { idFarmacia: true } })
     * 
     */
    findMany<T extends FarmaciaPoseeFindManyArgs>(args?: SelectSubset<T, FarmaciaPoseeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmaciaPoseePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FarmaciaPosee.
     * @param {FarmaciaPoseeCreateArgs} args - Arguments to create a FarmaciaPosee.
     * @example
     * // Create one FarmaciaPosee
     * const FarmaciaPosee = await prisma.farmaciaPosee.create({
     *   data: {
     *     // ... data to create a FarmaciaPosee
     *   }
     * })
     * 
     */
    create<T extends FarmaciaPoseeCreateArgs>(args: SelectSubset<T, FarmaciaPoseeCreateArgs<ExtArgs>>): Prisma__FarmaciaPoseeClient<$Result.GetResult<Prisma.$FarmaciaPoseePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FarmaciaPosees.
     * @param {FarmaciaPoseeCreateManyArgs} args - Arguments to create many FarmaciaPosees.
     * @example
     * // Create many FarmaciaPosees
     * const farmaciaPosee = await prisma.farmaciaPosee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FarmaciaPoseeCreateManyArgs>(args?: SelectSubset<T, FarmaciaPoseeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FarmaciaPosees and returns the data saved in the database.
     * @param {FarmaciaPoseeCreateManyAndReturnArgs} args - Arguments to create many FarmaciaPosees.
     * @example
     * // Create many FarmaciaPosees
     * const farmaciaPosee = await prisma.farmaciaPosee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FarmaciaPosees and only return the `idFarmacia`
     * const farmaciaPoseeWithIdFarmaciaOnly = await prisma.farmaciaPosee.createManyAndReturn({
     *   select: { idFarmacia: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FarmaciaPoseeCreateManyAndReturnArgs>(args?: SelectSubset<T, FarmaciaPoseeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmaciaPoseePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FarmaciaPosee.
     * @param {FarmaciaPoseeDeleteArgs} args - Arguments to delete one FarmaciaPosee.
     * @example
     * // Delete one FarmaciaPosee
     * const FarmaciaPosee = await prisma.farmaciaPosee.delete({
     *   where: {
     *     // ... filter to delete one FarmaciaPosee
     *   }
     * })
     * 
     */
    delete<T extends FarmaciaPoseeDeleteArgs>(args: SelectSubset<T, FarmaciaPoseeDeleteArgs<ExtArgs>>): Prisma__FarmaciaPoseeClient<$Result.GetResult<Prisma.$FarmaciaPoseePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FarmaciaPosee.
     * @param {FarmaciaPoseeUpdateArgs} args - Arguments to update one FarmaciaPosee.
     * @example
     * // Update one FarmaciaPosee
     * const farmaciaPosee = await prisma.farmaciaPosee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FarmaciaPoseeUpdateArgs>(args: SelectSubset<T, FarmaciaPoseeUpdateArgs<ExtArgs>>): Prisma__FarmaciaPoseeClient<$Result.GetResult<Prisma.$FarmaciaPoseePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FarmaciaPosees.
     * @param {FarmaciaPoseeDeleteManyArgs} args - Arguments to filter FarmaciaPosees to delete.
     * @example
     * // Delete a few FarmaciaPosees
     * const { count } = await prisma.farmaciaPosee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FarmaciaPoseeDeleteManyArgs>(args?: SelectSubset<T, FarmaciaPoseeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FarmaciaPosees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaPoseeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FarmaciaPosees
     * const farmaciaPosee = await prisma.farmaciaPosee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FarmaciaPoseeUpdateManyArgs>(args: SelectSubset<T, FarmaciaPoseeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FarmaciaPosees and returns the data updated in the database.
     * @param {FarmaciaPoseeUpdateManyAndReturnArgs} args - Arguments to update many FarmaciaPosees.
     * @example
     * // Update many FarmaciaPosees
     * const farmaciaPosee = await prisma.farmaciaPosee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FarmaciaPosees and only return the `idFarmacia`
     * const farmaciaPoseeWithIdFarmaciaOnly = await prisma.farmaciaPosee.updateManyAndReturn({
     *   select: { idFarmacia: true },
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
    updateManyAndReturn<T extends FarmaciaPoseeUpdateManyAndReturnArgs>(args: SelectSubset<T, FarmaciaPoseeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmaciaPoseePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FarmaciaPosee.
     * @param {FarmaciaPoseeUpsertArgs} args - Arguments to update or create a FarmaciaPosee.
     * @example
     * // Update or create a FarmaciaPosee
     * const farmaciaPosee = await prisma.farmaciaPosee.upsert({
     *   create: {
     *     // ... data to create a FarmaciaPosee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FarmaciaPosee we want to update
     *   }
     * })
     */
    upsert<T extends FarmaciaPoseeUpsertArgs>(args: SelectSubset<T, FarmaciaPoseeUpsertArgs<ExtArgs>>): Prisma__FarmaciaPoseeClient<$Result.GetResult<Prisma.$FarmaciaPoseePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FarmaciaPosees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaPoseeCountArgs} args - Arguments to filter FarmaciaPosees to count.
     * @example
     * // Count the number of FarmaciaPosees
     * const count = await prisma.farmaciaPosee.count({
     *   where: {
     *     // ... the filter for the FarmaciaPosees we want to count
     *   }
     * })
    **/
    count<T extends FarmaciaPoseeCountArgs>(
      args?: Subset<T, FarmaciaPoseeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmaciaPoseeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FarmaciaPosee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaPoseeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FarmaciaPoseeAggregateArgs>(args: Subset<T, FarmaciaPoseeAggregateArgs>): Prisma.PrismaPromise<GetFarmaciaPoseeAggregateType<T>>

    /**
     * Group by FarmaciaPosee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaPoseeGroupByArgs} args - Group by arguments.
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
      T extends FarmaciaPoseeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmaciaPoseeGroupByArgs['orderBy'] }
        : { orderBy?: FarmaciaPoseeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FarmaciaPoseeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmaciaPoseeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FarmaciaPosee model
   */
  readonly fields: FarmaciaPoseeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FarmaciaPosee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FarmaciaPoseeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farmacia<T extends FarmaciaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FarmaciaDefaultArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicamento<T extends MedicamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicamentoDefaultArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FarmaciaPosee model
   */
  interface FarmaciaPoseeFieldRefs {
    readonly idFarmacia: FieldRef<"FarmaciaPosee", 'Int'>
    readonly idMedicamento: FieldRef<"FarmaciaPosee", 'Int'>
    readonly cantidad: FieldRef<"FarmaciaPosee", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FarmaciaPosee findUnique
   */
  export type FarmaciaPoseeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaPosee
     */
    select?: FarmaciaPoseeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaPosee
     */
    omit?: FarmaciaPoseeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaPoseeInclude<ExtArgs> | null
    /**
     * Filter, which FarmaciaPosee to fetch.
     */
    where: FarmaciaPoseeWhereUniqueInput
  }

  /**
   * FarmaciaPosee findUniqueOrThrow
   */
  export type FarmaciaPoseeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaPosee
     */
    select?: FarmaciaPoseeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaPosee
     */
    omit?: FarmaciaPoseeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaPoseeInclude<ExtArgs> | null
    /**
     * Filter, which FarmaciaPosee to fetch.
     */
    where: FarmaciaPoseeWhereUniqueInput
  }

  /**
   * FarmaciaPosee findFirst
   */
  export type FarmaciaPoseeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaPosee
     */
    select?: FarmaciaPoseeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaPosee
     */
    omit?: FarmaciaPoseeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaPoseeInclude<ExtArgs> | null
    /**
     * Filter, which FarmaciaPosee to fetch.
     */
    where?: FarmaciaPoseeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmaciaPosees to fetch.
     */
    orderBy?: FarmaciaPoseeOrderByWithRelationInput | FarmaciaPoseeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FarmaciaPosees.
     */
    cursor?: FarmaciaPoseeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmaciaPosees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmaciaPosees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FarmaciaPosees.
     */
    distinct?: FarmaciaPoseeScalarFieldEnum | FarmaciaPoseeScalarFieldEnum[]
  }

  /**
   * FarmaciaPosee findFirstOrThrow
   */
  export type FarmaciaPoseeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaPosee
     */
    select?: FarmaciaPoseeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaPosee
     */
    omit?: FarmaciaPoseeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaPoseeInclude<ExtArgs> | null
    /**
     * Filter, which FarmaciaPosee to fetch.
     */
    where?: FarmaciaPoseeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmaciaPosees to fetch.
     */
    orderBy?: FarmaciaPoseeOrderByWithRelationInput | FarmaciaPoseeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FarmaciaPosees.
     */
    cursor?: FarmaciaPoseeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmaciaPosees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmaciaPosees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FarmaciaPosees.
     */
    distinct?: FarmaciaPoseeScalarFieldEnum | FarmaciaPoseeScalarFieldEnum[]
  }

  /**
   * FarmaciaPosee findMany
   */
  export type FarmaciaPoseeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaPosee
     */
    select?: FarmaciaPoseeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaPosee
     */
    omit?: FarmaciaPoseeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaPoseeInclude<ExtArgs> | null
    /**
     * Filter, which FarmaciaPosees to fetch.
     */
    where?: FarmaciaPoseeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmaciaPosees to fetch.
     */
    orderBy?: FarmaciaPoseeOrderByWithRelationInput | FarmaciaPoseeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FarmaciaPosees.
     */
    cursor?: FarmaciaPoseeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmaciaPosees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmaciaPosees.
     */
    skip?: number
    distinct?: FarmaciaPoseeScalarFieldEnum | FarmaciaPoseeScalarFieldEnum[]
  }

  /**
   * FarmaciaPosee create
   */
  export type FarmaciaPoseeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaPosee
     */
    select?: FarmaciaPoseeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaPosee
     */
    omit?: FarmaciaPoseeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaPoseeInclude<ExtArgs> | null
    /**
     * The data needed to create a FarmaciaPosee.
     */
    data: XOR<FarmaciaPoseeCreateInput, FarmaciaPoseeUncheckedCreateInput>
  }

  /**
   * FarmaciaPosee createMany
   */
  export type FarmaciaPoseeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FarmaciaPosees.
     */
    data: FarmaciaPoseeCreateManyInput | FarmaciaPoseeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FarmaciaPosee createManyAndReturn
   */
  export type FarmaciaPoseeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaPosee
     */
    select?: FarmaciaPoseeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaPosee
     */
    omit?: FarmaciaPoseeOmit<ExtArgs> | null
    /**
     * The data used to create many FarmaciaPosees.
     */
    data: FarmaciaPoseeCreateManyInput | FarmaciaPoseeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaPoseeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FarmaciaPosee update
   */
  export type FarmaciaPoseeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaPosee
     */
    select?: FarmaciaPoseeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaPosee
     */
    omit?: FarmaciaPoseeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaPoseeInclude<ExtArgs> | null
    /**
     * The data needed to update a FarmaciaPosee.
     */
    data: XOR<FarmaciaPoseeUpdateInput, FarmaciaPoseeUncheckedUpdateInput>
    /**
     * Choose, which FarmaciaPosee to update.
     */
    where: FarmaciaPoseeWhereUniqueInput
  }

  /**
   * FarmaciaPosee updateMany
   */
  export type FarmaciaPoseeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FarmaciaPosees.
     */
    data: XOR<FarmaciaPoseeUpdateManyMutationInput, FarmaciaPoseeUncheckedUpdateManyInput>
    /**
     * Filter which FarmaciaPosees to update
     */
    where?: FarmaciaPoseeWhereInput
    /**
     * Limit how many FarmaciaPosees to update.
     */
    limit?: number
  }

  /**
   * FarmaciaPosee updateManyAndReturn
   */
  export type FarmaciaPoseeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaPosee
     */
    select?: FarmaciaPoseeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaPosee
     */
    omit?: FarmaciaPoseeOmit<ExtArgs> | null
    /**
     * The data used to update FarmaciaPosees.
     */
    data: XOR<FarmaciaPoseeUpdateManyMutationInput, FarmaciaPoseeUncheckedUpdateManyInput>
    /**
     * Filter which FarmaciaPosees to update
     */
    where?: FarmaciaPoseeWhereInput
    /**
     * Limit how many FarmaciaPosees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaPoseeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FarmaciaPosee upsert
   */
  export type FarmaciaPoseeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaPosee
     */
    select?: FarmaciaPoseeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaPosee
     */
    omit?: FarmaciaPoseeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaPoseeInclude<ExtArgs> | null
    /**
     * The filter to search for the FarmaciaPosee to update in case it exists.
     */
    where: FarmaciaPoseeWhereUniqueInput
    /**
     * In case the FarmaciaPosee found by the `where` argument doesn't exist, create a new FarmaciaPosee with this data.
     */
    create: XOR<FarmaciaPoseeCreateInput, FarmaciaPoseeUncheckedCreateInput>
    /**
     * In case the FarmaciaPosee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmaciaPoseeUpdateInput, FarmaciaPoseeUncheckedUpdateInput>
  }

  /**
   * FarmaciaPosee delete
   */
  export type FarmaciaPoseeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaPosee
     */
    select?: FarmaciaPoseeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaPosee
     */
    omit?: FarmaciaPoseeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaPoseeInclude<ExtArgs> | null
    /**
     * Filter which FarmaciaPosee to delete.
     */
    where: FarmaciaPoseeWhereUniqueInput
  }

  /**
   * FarmaciaPosee deleteMany
   */
  export type FarmaciaPoseeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FarmaciaPosees to delete
     */
    where?: FarmaciaPoseeWhereInput
    /**
     * Limit how many FarmaciaPosees to delete.
     */
    limit?: number
  }

  /**
   * FarmaciaPosee without action
   */
  export type FarmaciaPoseeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaPosee
     */
    select?: FarmaciaPoseeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaPosee
     */
    omit?: FarmaciaPoseeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaPoseeInclude<ExtArgs> | null
  }


  /**
   * Model FarmaciaEntrega
   */

  export type AggregateFarmaciaEntrega = {
    _count: FarmaciaEntregaCountAggregateOutputType | null
    _avg: FarmaciaEntregaAvgAggregateOutputType | null
    _sum: FarmaciaEntregaSumAggregateOutputType | null
    _min: FarmaciaEntregaMinAggregateOutputType | null
    _max: FarmaciaEntregaMaxAggregateOutputType | null
  }

  export type FarmaciaEntregaAvgAggregateOutputType = {
    idPaciente: number | null
    idFarmacia: number | null
    idMedicamento: number | null
    Cantidad: number | null
  }

  export type FarmaciaEntregaSumAggregateOutputType = {
    idPaciente: number | null
    idFarmacia: number | null
    idMedicamento: number | null
    Cantidad: number | null
  }

  export type FarmaciaEntregaMinAggregateOutputType = {
    idPaciente: number | null
    idFarmacia: number | null
    idMedicamento: number | null
    FEntrega: Date | null
    Cantidad: number | null
  }

  export type FarmaciaEntregaMaxAggregateOutputType = {
    idPaciente: number | null
    idFarmacia: number | null
    idMedicamento: number | null
    FEntrega: Date | null
    Cantidad: number | null
  }

  export type FarmaciaEntregaCountAggregateOutputType = {
    idPaciente: number
    idFarmacia: number
    idMedicamento: number
    FEntrega: number
    Cantidad: number
    _all: number
  }


  export type FarmaciaEntregaAvgAggregateInputType = {
    idPaciente?: true
    idFarmacia?: true
    idMedicamento?: true
    Cantidad?: true
  }

  export type FarmaciaEntregaSumAggregateInputType = {
    idPaciente?: true
    idFarmacia?: true
    idMedicamento?: true
    Cantidad?: true
  }

  export type FarmaciaEntregaMinAggregateInputType = {
    idPaciente?: true
    idFarmacia?: true
    idMedicamento?: true
    FEntrega?: true
    Cantidad?: true
  }

  export type FarmaciaEntregaMaxAggregateInputType = {
    idPaciente?: true
    idFarmacia?: true
    idMedicamento?: true
    FEntrega?: true
    Cantidad?: true
  }

  export type FarmaciaEntregaCountAggregateInputType = {
    idPaciente?: true
    idFarmacia?: true
    idMedicamento?: true
    FEntrega?: true
    Cantidad?: true
    _all?: true
  }

  export type FarmaciaEntregaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FarmaciaEntrega to aggregate.
     */
    where?: FarmaciaEntregaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmaciaEntregas to fetch.
     */
    orderBy?: FarmaciaEntregaOrderByWithRelationInput | FarmaciaEntregaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmaciaEntregaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmaciaEntregas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmaciaEntregas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FarmaciaEntregas
    **/
    _count?: true | FarmaciaEntregaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FarmaciaEntregaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FarmaciaEntregaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmaciaEntregaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmaciaEntregaMaxAggregateInputType
  }

  export type GetFarmaciaEntregaAggregateType<T extends FarmaciaEntregaAggregateArgs> = {
        [P in keyof T & keyof AggregateFarmaciaEntrega]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarmaciaEntrega[P]>
      : GetScalarType<T[P], AggregateFarmaciaEntrega[P]>
  }




  export type FarmaciaEntregaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmaciaEntregaWhereInput
    orderBy?: FarmaciaEntregaOrderByWithAggregationInput | FarmaciaEntregaOrderByWithAggregationInput[]
    by: FarmaciaEntregaScalarFieldEnum[] | FarmaciaEntregaScalarFieldEnum
    having?: FarmaciaEntregaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmaciaEntregaCountAggregateInputType | true
    _avg?: FarmaciaEntregaAvgAggregateInputType
    _sum?: FarmaciaEntregaSumAggregateInputType
    _min?: FarmaciaEntregaMinAggregateInputType
    _max?: FarmaciaEntregaMaxAggregateInputType
  }

  export type FarmaciaEntregaGroupByOutputType = {
    idPaciente: number
    idFarmacia: number
    idMedicamento: number
    FEntrega: Date
    Cantidad: number
    _count: FarmaciaEntregaCountAggregateOutputType | null
    _avg: FarmaciaEntregaAvgAggregateOutputType | null
    _sum: FarmaciaEntregaSumAggregateOutputType | null
    _min: FarmaciaEntregaMinAggregateOutputType | null
    _max: FarmaciaEntregaMaxAggregateOutputType | null
  }

  type GetFarmaciaEntregaGroupByPayload<T extends FarmaciaEntregaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmaciaEntregaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmaciaEntregaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmaciaEntregaGroupByOutputType[P]>
            : GetScalarType<T[P], FarmaciaEntregaGroupByOutputType[P]>
        }
      >
    >


  export type FarmaciaEntregaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPaciente?: boolean
    idFarmacia?: boolean
    idMedicamento?: boolean
    FEntrega?: boolean
    Cantidad?: boolean
    farmacia?: boolean | FarmaciaDefaultArgs<ExtArgs>
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmaciaEntrega"]>

  export type FarmaciaEntregaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPaciente?: boolean
    idFarmacia?: boolean
    idMedicamento?: boolean
    FEntrega?: boolean
    Cantidad?: boolean
    farmacia?: boolean | FarmaciaDefaultArgs<ExtArgs>
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmaciaEntrega"]>

  export type FarmaciaEntregaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPaciente?: boolean
    idFarmacia?: boolean
    idMedicamento?: boolean
    FEntrega?: boolean
    Cantidad?: boolean
    farmacia?: boolean | FarmaciaDefaultArgs<ExtArgs>
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmaciaEntrega"]>

  export type FarmaciaEntregaSelectScalar = {
    idPaciente?: boolean
    idFarmacia?: boolean
    idMedicamento?: boolean
    FEntrega?: boolean
    Cantidad?: boolean
  }

  export type FarmaciaEntregaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPaciente" | "idFarmacia" | "idMedicamento" | "FEntrega" | "Cantidad", ExtArgs["result"]["farmaciaEntrega"]>
  export type FarmaciaEntregaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmacia?: boolean | FarmaciaDefaultArgs<ExtArgs>
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
  }
  export type FarmaciaEntregaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmacia?: boolean | FarmaciaDefaultArgs<ExtArgs>
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
  }
  export type FarmaciaEntregaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmacia?: boolean | FarmaciaDefaultArgs<ExtArgs>
    medicamento?: boolean | MedicamentoDefaultArgs<ExtArgs>
  }

  export type $FarmaciaEntregaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FarmaciaEntrega"
    objects: {
      farmacia: Prisma.$FarmaciaPayload<ExtArgs>
      medicamento: Prisma.$MedicamentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idPaciente: number
      idFarmacia: number
      idMedicamento: number
      FEntrega: Date
      Cantidad: number
    }, ExtArgs["result"]["farmaciaEntrega"]>
    composites: {}
  }

  type FarmaciaEntregaGetPayload<S extends boolean | null | undefined | FarmaciaEntregaDefaultArgs> = $Result.GetResult<Prisma.$FarmaciaEntregaPayload, S>

  type FarmaciaEntregaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FarmaciaEntregaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FarmaciaEntregaCountAggregateInputType | true
    }

  export interface FarmaciaEntregaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FarmaciaEntrega'], meta: { name: 'FarmaciaEntrega' } }
    /**
     * Find zero or one FarmaciaEntrega that matches the filter.
     * @param {FarmaciaEntregaFindUniqueArgs} args - Arguments to find a FarmaciaEntrega
     * @example
     * // Get one FarmaciaEntrega
     * const farmaciaEntrega = await prisma.farmaciaEntrega.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmaciaEntregaFindUniqueArgs>(args: SelectSubset<T, FarmaciaEntregaFindUniqueArgs<ExtArgs>>): Prisma__FarmaciaEntregaClient<$Result.GetResult<Prisma.$FarmaciaEntregaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FarmaciaEntrega that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FarmaciaEntregaFindUniqueOrThrowArgs} args - Arguments to find a FarmaciaEntrega
     * @example
     * // Get one FarmaciaEntrega
     * const farmaciaEntrega = await prisma.farmaciaEntrega.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmaciaEntregaFindUniqueOrThrowArgs>(args: SelectSubset<T, FarmaciaEntregaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FarmaciaEntregaClient<$Result.GetResult<Prisma.$FarmaciaEntregaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FarmaciaEntrega that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaEntregaFindFirstArgs} args - Arguments to find a FarmaciaEntrega
     * @example
     * // Get one FarmaciaEntrega
     * const farmaciaEntrega = await prisma.farmaciaEntrega.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmaciaEntregaFindFirstArgs>(args?: SelectSubset<T, FarmaciaEntregaFindFirstArgs<ExtArgs>>): Prisma__FarmaciaEntregaClient<$Result.GetResult<Prisma.$FarmaciaEntregaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FarmaciaEntrega that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaEntregaFindFirstOrThrowArgs} args - Arguments to find a FarmaciaEntrega
     * @example
     * // Get one FarmaciaEntrega
     * const farmaciaEntrega = await prisma.farmaciaEntrega.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmaciaEntregaFindFirstOrThrowArgs>(args?: SelectSubset<T, FarmaciaEntregaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FarmaciaEntregaClient<$Result.GetResult<Prisma.$FarmaciaEntregaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FarmaciaEntregas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaEntregaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FarmaciaEntregas
     * const farmaciaEntregas = await prisma.farmaciaEntrega.findMany()
     * 
     * // Get first 10 FarmaciaEntregas
     * const farmaciaEntregas = await prisma.farmaciaEntrega.findMany({ take: 10 })
     * 
     * // Only select the `idPaciente`
     * const farmaciaEntregaWithIdPacienteOnly = await prisma.farmaciaEntrega.findMany({ select: { idPaciente: true } })
     * 
     */
    findMany<T extends FarmaciaEntregaFindManyArgs>(args?: SelectSubset<T, FarmaciaEntregaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmaciaEntregaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FarmaciaEntrega.
     * @param {FarmaciaEntregaCreateArgs} args - Arguments to create a FarmaciaEntrega.
     * @example
     * // Create one FarmaciaEntrega
     * const FarmaciaEntrega = await prisma.farmaciaEntrega.create({
     *   data: {
     *     // ... data to create a FarmaciaEntrega
     *   }
     * })
     * 
     */
    create<T extends FarmaciaEntregaCreateArgs>(args: SelectSubset<T, FarmaciaEntregaCreateArgs<ExtArgs>>): Prisma__FarmaciaEntregaClient<$Result.GetResult<Prisma.$FarmaciaEntregaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FarmaciaEntregas.
     * @param {FarmaciaEntregaCreateManyArgs} args - Arguments to create many FarmaciaEntregas.
     * @example
     * // Create many FarmaciaEntregas
     * const farmaciaEntrega = await prisma.farmaciaEntrega.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FarmaciaEntregaCreateManyArgs>(args?: SelectSubset<T, FarmaciaEntregaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FarmaciaEntregas and returns the data saved in the database.
     * @param {FarmaciaEntregaCreateManyAndReturnArgs} args - Arguments to create many FarmaciaEntregas.
     * @example
     * // Create many FarmaciaEntregas
     * const farmaciaEntrega = await prisma.farmaciaEntrega.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FarmaciaEntregas and only return the `idPaciente`
     * const farmaciaEntregaWithIdPacienteOnly = await prisma.farmaciaEntrega.createManyAndReturn({
     *   select: { idPaciente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FarmaciaEntregaCreateManyAndReturnArgs>(args?: SelectSubset<T, FarmaciaEntregaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmaciaEntregaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FarmaciaEntrega.
     * @param {FarmaciaEntregaDeleteArgs} args - Arguments to delete one FarmaciaEntrega.
     * @example
     * // Delete one FarmaciaEntrega
     * const FarmaciaEntrega = await prisma.farmaciaEntrega.delete({
     *   where: {
     *     // ... filter to delete one FarmaciaEntrega
     *   }
     * })
     * 
     */
    delete<T extends FarmaciaEntregaDeleteArgs>(args: SelectSubset<T, FarmaciaEntregaDeleteArgs<ExtArgs>>): Prisma__FarmaciaEntregaClient<$Result.GetResult<Prisma.$FarmaciaEntregaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FarmaciaEntrega.
     * @param {FarmaciaEntregaUpdateArgs} args - Arguments to update one FarmaciaEntrega.
     * @example
     * // Update one FarmaciaEntrega
     * const farmaciaEntrega = await prisma.farmaciaEntrega.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FarmaciaEntregaUpdateArgs>(args: SelectSubset<T, FarmaciaEntregaUpdateArgs<ExtArgs>>): Prisma__FarmaciaEntregaClient<$Result.GetResult<Prisma.$FarmaciaEntregaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FarmaciaEntregas.
     * @param {FarmaciaEntregaDeleteManyArgs} args - Arguments to filter FarmaciaEntregas to delete.
     * @example
     * // Delete a few FarmaciaEntregas
     * const { count } = await prisma.farmaciaEntrega.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FarmaciaEntregaDeleteManyArgs>(args?: SelectSubset<T, FarmaciaEntregaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FarmaciaEntregas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaEntregaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FarmaciaEntregas
     * const farmaciaEntrega = await prisma.farmaciaEntrega.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FarmaciaEntregaUpdateManyArgs>(args: SelectSubset<T, FarmaciaEntregaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FarmaciaEntregas and returns the data updated in the database.
     * @param {FarmaciaEntregaUpdateManyAndReturnArgs} args - Arguments to update many FarmaciaEntregas.
     * @example
     * // Update many FarmaciaEntregas
     * const farmaciaEntrega = await prisma.farmaciaEntrega.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FarmaciaEntregas and only return the `idPaciente`
     * const farmaciaEntregaWithIdPacienteOnly = await prisma.farmaciaEntrega.updateManyAndReturn({
     *   select: { idPaciente: true },
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
    updateManyAndReturn<T extends FarmaciaEntregaUpdateManyAndReturnArgs>(args: SelectSubset<T, FarmaciaEntregaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmaciaEntregaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FarmaciaEntrega.
     * @param {FarmaciaEntregaUpsertArgs} args - Arguments to update or create a FarmaciaEntrega.
     * @example
     * // Update or create a FarmaciaEntrega
     * const farmaciaEntrega = await prisma.farmaciaEntrega.upsert({
     *   create: {
     *     // ... data to create a FarmaciaEntrega
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FarmaciaEntrega we want to update
     *   }
     * })
     */
    upsert<T extends FarmaciaEntregaUpsertArgs>(args: SelectSubset<T, FarmaciaEntregaUpsertArgs<ExtArgs>>): Prisma__FarmaciaEntregaClient<$Result.GetResult<Prisma.$FarmaciaEntregaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FarmaciaEntregas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaEntregaCountArgs} args - Arguments to filter FarmaciaEntregas to count.
     * @example
     * // Count the number of FarmaciaEntregas
     * const count = await prisma.farmaciaEntrega.count({
     *   where: {
     *     // ... the filter for the FarmaciaEntregas we want to count
     *   }
     * })
    **/
    count<T extends FarmaciaEntregaCountArgs>(
      args?: Subset<T, FarmaciaEntregaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmaciaEntregaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FarmaciaEntrega.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaEntregaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FarmaciaEntregaAggregateArgs>(args: Subset<T, FarmaciaEntregaAggregateArgs>): Prisma.PrismaPromise<GetFarmaciaEntregaAggregateType<T>>

    /**
     * Group by FarmaciaEntrega.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmaciaEntregaGroupByArgs} args - Group by arguments.
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
      T extends FarmaciaEntregaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmaciaEntregaGroupByArgs['orderBy'] }
        : { orderBy?: FarmaciaEntregaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FarmaciaEntregaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmaciaEntregaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FarmaciaEntrega model
   */
  readonly fields: FarmaciaEntregaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FarmaciaEntrega.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FarmaciaEntregaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farmacia<T extends FarmaciaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FarmaciaDefaultArgs<ExtArgs>>): Prisma__FarmaciaClient<$Result.GetResult<Prisma.$FarmaciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicamento<T extends MedicamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicamentoDefaultArgs<ExtArgs>>): Prisma__MedicamentoClient<$Result.GetResult<Prisma.$MedicamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FarmaciaEntrega model
   */
  interface FarmaciaEntregaFieldRefs {
    readonly idPaciente: FieldRef<"FarmaciaEntrega", 'Int'>
    readonly idFarmacia: FieldRef<"FarmaciaEntrega", 'Int'>
    readonly idMedicamento: FieldRef<"FarmaciaEntrega", 'Int'>
    readonly FEntrega: FieldRef<"FarmaciaEntrega", 'DateTime'>
    readonly Cantidad: FieldRef<"FarmaciaEntrega", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FarmaciaEntrega findUnique
   */
  export type FarmaciaEntregaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaEntrega
     */
    select?: FarmaciaEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaEntrega
     */
    omit?: FarmaciaEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaEntregaInclude<ExtArgs> | null
    /**
     * Filter, which FarmaciaEntrega to fetch.
     */
    where: FarmaciaEntregaWhereUniqueInput
  }

  /**
   * FarmaciaEntrega findUniqueOrThrow
   */
  export type FarmaciaEntregaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaEntrega
     */
    select?: FarmaciaEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaEntrega
     */
    omit?: FarmaciaEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaEntregaInclude<ExtArgs> | null
    /**
     * Filter, which FarmaciaEntrega to fetch.
     */
    where: FarmaciaEntregaWhereUniqueInput
  }

  /**
   * FarmaciaEntrega findFirst
   */
  export type FarmaciaEntregaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaEntrega
     */
    select?: FarmaciaEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaEntrega
     */
    omit?: FarmaciaEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaEntregaInclude<ExtArgs> | null
    /**
     * Filter, which FarmaciaEntrega to fetch.
     */
    where?: FarmaciaEntregaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmaciaEntregas to fetch.
     */
    orderBy?: FarmaciaEntregaOrderByWithRelationInput | FarmaciaEntregaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FarmaciaEntregas.
     */
    cursor?: FarmaciaEntregaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmaciaEntregas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmaciaEntregas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FarmaciaEntregas.
     */
    distinct?: FarmaciaEntregaScalarFieldEnum | FarmaciaEntregaScalarFieldEnum[]
  }

  /**
   * FarmaciaEntrega findFirstOrThrow
   */
  export type FarmaciaEntregaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaEntrega
     */
    select?: FarmaciaEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaEntrega
     */
    omit?: FarmaciaEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaEntregaInclude<ExtArgs> | null
    /**
     * Filter, which FarmaciaEntrega to fetch.
     */
    where?: FarmaciaEntregaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmaciaEntregas to fetch.
     */
    orderBy?: FarmaciaEntregaOrderByWithRelationInput | FarmaciaEntregaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FarmaciaEntregas.
     */
    cursor?: FarmaciaEntregaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmaciaEntregas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmaciaEntregas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FarmaciaEntregas.
     */
    distinct?: FarmaciaEntregaScalarFieldEnum | FarmaciaEntregaScalarFieldEnum[]
  }

  /**
   * FarmaciaEntrega findMany
   */
  export type FarmaciaEntregaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaEntrega
     */
    select?: FarmaciaEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaEntrega
     */
    omit?: FarmaciaEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaEntregaInclude<ExtArgs> | null
    /**
     * Filter, which FarmaciaEntregas to fetch.
     */
    where?: FarmaciaEntregaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmaciaEntregas to fetch.
     */
    orderBy?: FarmaciaEntregaOrderByWithRelationInput | FarmaciaEntregaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FarmaciaEntregas.
     */
    cursor?: FarmaciaEntregaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmaciaEntregas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmaciaEntregas.
     */
    skip?: number
    distinct?: FarmaciaEntregaScalarFieldEnum | FarmaciaEntregaScalarFieldEnum[]
  }

  /**
   * FarmaciaEntrega create
   */
  export type FarmaciaEntregaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaEntrega
     */
    select?: FarmaciaEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaEntrega
     */
    omit?: FarmaciaEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaEntregaInclude<ExtArgs> | null
    /**
     * The data needed to create a FarmaciaEntrega.
     */
    data: XOR<FarmaciaEntregaCreateInput, FarmaciaEntregaUncheckedCreateInput>
  }

  /**
   * FarmaciaEntrega createMany
   */
  export type FarmaciaEntregaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FarmaciaEntregas.
     */
    data: FarmaciaEntregaCreateManyInput | FarmaciaEntregaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FarmaciaEntrega createManyAndReturn
   */
  export type FarmaciaEntregaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaEntrega
     */
    select?: FarmaciaEntregaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaEntrega
     */
    omit?: FarmaciaEntregaOmit<ExtArgs> | null
    /**
     * The data used to create many FarmaciaEntregas.
     */
    data: FarmaciaEntregaCreateManyInput | FarmaciaEntregaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaEntregaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FarmaciaEntrega update
   */
  export type FarmaciaEntregaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaEntrega
     */
    select?: FarmaciaEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaEntrega
     */
    omit?: FarmaciaEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaEntregaInclude<ExtArgs> | null
    /**
     * The data needed to update a FarmaciaEntrega.
     */
    data: XOR<FarmaciaEntregaUpdateInput, FarmaciaEntregaUncheckedUpdateInput>
    /**
     * Choose, which FarmaciaEntrega to update.
     */
    where: FarmaciaEntregaWhereUniqueInput
  }

  /**
   * FarmaciaEntrega updateMany
   */
  export type FarmaciaEntregaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FarmaciaEntregas.
     */
    data: XOR<FarmaciaEntregaUpdateManyMutationInput, FarmaciaEntregaUncheckedUpdateManyInput>
    /**
     * Filter which FarmaciaEntregas to update
     */
    where?: FarmaciaEntregaWhereInput
    /**
     * Limit how many FarmaciaEntregas to update.
     */
    limit?: number
  }

  /**
   * FarmaciaEntrega updateManyAndReturn
   */
  export type FarmaciaEntregaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaEntrega
     */
    select?: FarmaciaEntregaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaEntrega
     */
    omit?: FarmaciaEntregaOmit<ExtArgs> | null
    /**
     * The data used to update FarmaciaEntregas.
     */
    data: XOR<FarmaciaEntregaUpdateManyMutationInput, FarmaciaEntregaUncheckedUpdateManyInput>
    /**
     * Filter which FarmaciaEntregas to update
     */
    where?: FarmaciaEntregaWhereInput
    /**
     * Limit how many FarmaciaEntregas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaEntregaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FarmaciaEntrega upsert
   */
  export type FarmaciaEntregaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaEntrega
     */
    select?: FarmaciaEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaEntrega
     */
    omit?: FarmaciaEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaEntregaInclude<ExtArgs> | null
    /**
     * The filter to search for the FarmaciaEntrega to update in case it exists.
     */
    where: FarmaciaEntregaWhereUniqueInput
    /**
     * In case the FarmaciaEntrega found by the `where` argument doesn't exist, create a new FarmaciaEntrega with this data.
     */
    create: XOR<FarmaciaEntregaCreateInput, FarmaciaEntregaUncheckedCreateInput>
    /**
     * In case the FarmaciaEntrega was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmaciaEntregaUpdateInput, FarmaciaEntregaUncheckedUpdateInput>
  }

  /**
   * FarmaciaEntrega delete
   */
  export type FarmaciaEntregaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaEntrega
     */
    select?: FarmaciaEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaEntrega
     */
    omit?: FarmaciaEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaEntregaInclude<ExtArgs> | null
    /**
     * Filter which FarmaciaEntrega to delete.
     */
    where: FarmaciaEntregaWhereUniqueInput
  }

  /**
   * FarmaciaEntrega deleteMany
   */
  export type FarmaciaEntregaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FarmaciaEntregas to delete
     */
    where?: FarmaciaEntregaWhereInput
    /**
     * Limit how many FarmaciaEntregas to delete.
     */
    limit?: number
  }

  /**
   * FarmaciaEntrega without action
   */
  export type FarmaciaEntregaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmaciaEntrega
     */
    select?: FarmaciaEntregaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FarmaciaEntrega
     */
    omit?: FarmaciaEntregaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmaciaEntregaInclude<ExtArgs> | null
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


  export const FarmaciaScalarFieldEnum: {
    idFarmacia: 'idFarmacia',
    nombre: 'nombre',
    direccion: 'direccion'
  };

  export type FarmaciaScalarFieldEnum = (typeof FarmaciaScalarFieldEnum)[keyof typeof FarmaciaScalarFieldEnum]


  export const MedicamentoScalarFieldEnum: {
    idMedicamento: 'idMedicamento',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type MedicamentoScalarFieldEnum = (typeof MedicamentoScalarFieldEnum)[keyof typeof MedicamentoScalarFieldEnum]


  export const FarmaciaPoseeScalarFieldEnum: {
    idFarmacia: 'idFarmacia',
    idMedicamento: 'idMedicamento',
    cantidad: 'cantidad'
  };

  export type FarmaciaPoseeScalarFieldEnum = (typeof FarmaciaPoseeScalarFieldEnum)[keyof typeof FarmaciaPoseeScalarFieldEnum]


  export const FarmaciaEntregaScalarFieldEnum: {
    idPaciente: 'idPaciente',
    idFarmacia: 'idFarmacia',
    idMedicamento: 'idMedicamento',
    FEntrega: 'FEntrega',
    Cantidad: 'Cantidad'
  };

  export type FarmaciaEntregaScalarFieldEnum = (typeof FarmaciaEntregaScalarFieldEnum)[keyof typeof FarmaciaEntregaScalarFieldEnum]


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


  export type FarmaciaWhereInput = {
    AND?: FarmaciaWhereInput | FarmaciaWhereInput[]
    OR?: FarmaciaWhereInput[]
    NOT?: FarmaciaWhereInput | FarmaciaWhereInput[]
    idFarmacia?: IntFilter<"Farmacia"> | number
    nombre?: StringFilter<"Farmacia"> | string
    direccion?: StringFilter<"Farmacia"> | string
    posee?: FarmaciaPoseeListRelationFilter
    entregas?: FarmaciaEntregaListRelationFilter
  }

  export type FarmaciaOrderByWithRelationInput = {
    idFarmacia?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    posee?: FarmaciaPoseeOrderByRelationAggregateInput
    entregas?: FarmaciaEntregaOrderByRelationAggregateInput
  }

  export type FarmaciaWhereUniqueInput = Prisma.AtLeast<{
    idFarmacia?: number
    nombre?: string
    direccion?: string
    AND?: FarmaciaWhereInput | FarmaciaWhereInput[]
    OR?: FarmaciaWhereInput[]
    NOT?: FarmaciaWhereInput | FarmaciaWhereInput[]
    posee?: FarmaciaPoseeListRelationFilter
    entregas?: FarmaciaEntregaListRelationFilter
  }, "idFarmacia" | "nombre" | "direccion">

  export type FarmaciaOrderByWithAggregationInput = {
    idFarmacia?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    _count?: FarmaciaCountOrderByAggregateInput
    _avg?: FarmaciaAvgOrderByAggregateInput
    _max?: FarmaciaMaxOrderByAggregateInput
    _min?: FarmaciaMinOrderByAggregateInput
    _sum?: FarmaciaSumOrderByAggregateInput
  }

  export type FarmaciaScalarWhereWithAggregatesInput = {
    AND?: FarmaciaScalarWhereWithAggregatesInput | FarmaciaScalarWhereWithAggregatesInput[]
    OR?: FarmaciaScalarWhereWithAggregatesInput[]
    NOT?: FarmaciaScalarWhereWithAggregatesInput | FarmaciaScalarWhereWithAggregatesInput[]
    idFarmacia?: IntWithAggregatesFilter<"Farmacia"> | number
    nombre?: StringWithAggregatesFilter<"Farmacia"> | string
    direccion?: StringWithAggregatesFilter<"Farmacia"> | string
  }

  export type MedicamentoWhereInput = {
    AND?: MedicamentoWhereInput | MedicamentoWhereInput[]
    OR?: MedicamentoWhereInput[]
    NOT?: MedicamentoWhereInput | MedicamentoWhereInput[]
    idMedicamento?: IntFilter<"Medicamento"> | number
    nombre?: StringFilter<"Medicamento"> | string
    descripcion?: StringFilter<"Medicamento"> | string
    posee?: FarmaciaPoseeListRelationFilter
    entregas?: FarmaciaEntregaListRelationFilter
  }

  export type MedicamentoOrderByWithRelationInput = {
    idMedicamento?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    posee?: FarmaciaPoseeOrderByRelationAggregateInput
    entregas?: FarmaciaEntregaOrderByRelationAggregateInput
  }

  export type MedicamentoWhereUniqueInput = Prisma.AtLeast<{
    idMedicamento?: number
    nombre?: string
    AND?: MedicamentoWhereInput | MedicamentoWhereInput[]
    OR?: MedicamentoWhereInput[]
    NOT?: MedicamentoWhereInput | MedicamentoWhereInput[]
    descripcion?: StringFilter<"Medicamento"> | string
    posee?: FarmaciaPoseeListRelationFilter
    entregas?: FarmaciaEntregaListRelationFilter
  }, "idMedicamento" | "nombre">

  export type MedicamentoOrderByWithAggregationInput = {
    idMedicamento?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    _count?: MedicamentoCountOrderByAggregateInput
    _avg?: MedicamentoAvgOrderByAggregateInput
    _max?: MedicamentoMaxOrderByAggregateInput
    _min?: MedicamentoMinOrderByAggregateInput
    _sum?: MedicamentoSumOrderByAggregateInput
  }

  export type MedicamentoScalarWhereWithAggregatesInput = {
    AND?: MedicamentoScalarWhereWithAggregatesInput | MedicamentoScalarWhereWithAggregatesInput[]
    OR?: MedicamentoScalarWhereWithAggregatesInput[]
    NOT?: MedicamentoScalarWhereWithAggregatesInput | MedicamentoScalarWhereWithAggregatesInput[]
    idMedicamento?: IntWithAggregatesFilter<"Medicamento"> | number
    nombre?: StringWithAggregatesFilter<"Medicamento"> | string
    descripcion?: StringWithAggregatesFilter<"Medicamento"> | string
  }

  export type FarmaciaPoseeWhereInput = {
    AND?: FarmaciaPoseeWhereInput | FarmaciaPoseeWhereInput[]
    OR?: FarmaciaPoseeWhereInput[]
    NOT?: FarmaciaPoseeWhereInput | FarmaciaPoseeWhereInput[]
    idFarmacia?: IntFilter<"FarmaciaPosee"> | number
    idMedicamento?: IntFilter<"FarmaciaPosee"> | number
    cantidad?: IntFilter<"FarmaciaPosee"> | number
    farmacia?: XOR<FarmaciaScalarRelationFilter, FarmaciaWhereInput>
    medicamento?: XOR<MedicamentoScalarRelationFilter, MedicamentoWhereInput>
  }

  export type FarmaciaPoseeOrderByWithRelationInput = {
    idFarmacia?: SortOrder
    idMedicamento?: SortOrder
    cantidad?: SortOrder
    farmacia?: FarmaciaOrderByWithRelationInput
    medicamento?: MedicamentoOrderByWithRelationInput
  }

  export type FarmaciaPoseeWhereUniqueInput = Prisma.AtLeast<{
    idFarmacia_idMedicamento?: FarmaciaPoseeIdFarmaciaIdMedicamentoCompoundUniqueInput
    AND?: FarmaciaPoseeWhereInput | FarmaciaPoseeWhereInput[]
    OR?: FarmaciaPoseeWhereInput[]
    NOT?: FarmaciaPoseeWhereInput | FarmaciaPoseeWhereInput[]
    idFarmacia?: IntFilter<"FarmaciaPosee"> | number
    idMedicamento?: IntFilter<"FarmaciaPosee"> | number
    cantidad?: IntFilter<"FarmaciaPosee"> | number
    farmacia?: XOR<FarmaciaScalarRelationFilter, FarmaciaWhereInput>
    medicamento?: XOR<MedicamentoScalarRelationFilter, MedicamentoWhereInput>
  }, "idFarmacia_idMedicamento">

  export type FarmaciaPoseeOrderByWithAggregationInput = {
    idFarmacia?: SortOrder
    idMedicamento?: SortOrder
    cantidad?: SortOrder
    _count?: FarmaciaPoseeCountOrderByAggregateInput
    _avg?: FarmaciaPoseeAvgOrderByAggregateInput
    _max?: FarmaciaPoseeMaxOrderByAggregateInput
    _min?: FarmaciaPoseeMinOrderByAggregateInput
    _sum?: FarmaciaPoseeSumOrderByAggregateInput
  }

  export type FarmaciaPoseeScalarWhereWithAggregatesInput = {
    AND?: FarmaciaPoseeScalarWhereWithAggregatesInput | FarmaciaPoseeScalarWhereWithAggregatesInput[]
    OR?: FarmaciaPoseeScalarWhereWithAggregatesInput[]
    NOT?: FarmaciaPoseeScalarWhereWithAggregatesInput | FarmaciaPoseeScalarWhereWithAggregatesInput[]
    idFarmacia?: IntWithAggregatesFilter<"FarmaciaPosee"> | number
    idMedicamento?: IntWithAggregatesFilter<"FarmaciaPosee"> | number
    cantidad?: IntWithAggregatesFilter<"FarmaciaPosee"> | number
  }

  export type FarmaciaEntregaWhereInput = {
    AND?: FarmaciaEntregaWhereInput | FarmaciaEntregaWhereInput[]
    OR?: FarmaciaEntregaWhereInput[]
    NOT?: FarmaciaEntregaWhereInput | FarmaciaEntregaWhereInput[]
    idPaciente?: IntFilter<"FarmaciaEntrega"> | number
    idFarmacia?: IntFilter<"FarmaciaEntrega"> | number
    idMedicamento?: IntFilter<"FarmaciaEntrega"> | number
    FEntrega?: DateTimeFilter<"FarmaciaEntrega"> | Date | string
    Cantidad?: IntFilter<"FarmaciaEntrega"> | number
    farmacia?: XOR<FarmaciaScalarRelationFilter, FarmaciaWhereInput>
    medicamento?: XOR<MedicamentoScalarRelationFilter, MedicamentoWhereInput>
  }

  export type FarmaciaEntregaOrderByWithRelationInput = {
    idPaciente?: SortOrder
    idFarmacia?: SortOrder
    idMedicamento?: SortOrder
    FEntrega?: SortOrder
    Cantidad?: SortOrder
    farmacia?: FarmaciaOrderByWithRelationInput
    medicamento?: MedicamentoOrderByWithRelationInput
  }

  export type FarmaciaEntregaWhereUniqueInput = Prisma.AtLeast<{
    idPaciente_idFarmacia_idMedicamento_FEntrega?: FarmaciaEntregaIdPacienteIdFarmaciaIdMedicamentoFEntregaCompoundUniqueInput
    AND?: FarmaciaEntregaWhereInput | FarmaciaEntregaWhereInput[]
    OR?: FarmaciaEntregaWhereInput[]
    NOT?: FarmaciaEntregaWhereInput | FarmaciaEntregaWhereInput[]
    idPaciente?: IntFilter<"FarmaciaEntrega"> | number
    idFarmacia?: IntFilter<"FarmaciaEntrega"> | number
    idMedicamento?: IntFilter<"FarmaciaEntrega"> | number
    FEntrega?: DateTimeFilter<"FarmaciaEntrega"> | Date | string
    Cantidad?: IntFilter<"FarmaciaEntrega"> | number
    farmacia?: XOR<FarmaciaScalarRelationFilter, FarmaciaWhereInput>
    medicamento?: XOR<MedicamentoScalarRelationFilter, MedicamentoWhereInput>
  }, "idPaciente_idFarmacia_idMedicamento_FEntrega">

  export type FarmaciaEntregaOrderByWithAggregationInput = {
    idPaciente?: SortOrder
    idFarmacia?: SortOrder
    idMedicamento?: SortOrder
    FEntrega?: SortOrder
    Cantidad?: SortOrder
    _count?: FarmaciaEntregaCountOrderByAggregateInput
    _avg?: FarmaciaEntregaAvgOrderByAggregateInput
    _max?: FarmaciaEntregaMaxOrderByAggregateInput
    _min?: FarmaciaEntregaMinOrderByAggregateInput
    _sum?: FarmaciaEntregaSumOrderByAggregateInput
  }

  export type FarmaciaEntregaScalarWhereWithAggregatesInput = {
    AND?: FarmaciaEntregaScalarWhereWithAggregatesInput | FarmaciaEntregaScalarWhereWithAggregatesInput[]
    OR?: FarmaciaEntregaScalarWhereWithAggregatesInput[]
    NOT?: FarmaciaEntregaScalarWhereWithAggregatesInput | FarmaciaEntregaScalarWhereWithAggregatesInput[]
    idPaciente?: IntWithAggregatesFilter<"FarmaciaEntrega"> | number
    idFarmacia?: IntWithAggregatesFilter<"FarmaciaEntrega"> | number
    idMedicamento?: IntWithAggregatesFilter<"FarmaciaEntrega"> | number
    FEntrega?: DateTimeWithAggregatesFilter<"FarmaciaEntrega"> | Date | string
    Cantidad?: IntWithAggregatesFilter<"FarmaciaEntrega"> | number
  }

  export type FarmaciaCreateInput = {
    nombre: string
    direccion: string
    posee?: FarmaciaPoseeCreateNestedManyWithoutFarmaciaInput
    entregas?: FarmaciaEntregaCreateNestedManyWithoutFarmaciaInput
  }

  export type FarmaciaUncheckedCreateInput = {
    idFarmacia?: number
    nombre: string
    direccion: string
    posee?: FarmaciaPoseeUncheckedCreateNestedManyWithoutFarmaciaInput
    entregas?: FarmaciaEntregaUncheckedCreateNestedManyWithoutFarmaciaInput
  }

  export type FarmaciaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    posee?: FarmaciaPoseeUpdateManyWithoutFarmaciaNestedInput
    entregas?: FarmaciaEntregaUpdateManyWithoutFarmaciaNestedInput
  }

  export type FarmaciaUncheckedUpdateInput = {
    idFarmacia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    posee?: FarmaciaPoseeUncheckedUpdateManyWithoutFarmaciaNestedInput
    entregas?: FarmaciaEntregaUncheckedUpdateManyWithoutFarmaciaNestedInput
  }

  export type FarmaciaCreateManyInput = {
    idFarmacia?: number
    nombre: string
    direccion: string
  }

  export type FarmaciaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
  }

  export type FarmaciaUncheckedUpdateManyInput = {
    idFarmacia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
  }

  export type MedicamentoCreateInput = {
    nombre: string
    descripcion: string
    posee?: FarmaciaPoseeCreateNestedManyWithoutMedicamentoInput
    entregas?: FarmaciaEntregaCreateNestedManyWithoutMedicamentoInput
  }

  export type MedicamentoUncheckedCreateInput = {
    idMedicamento?: number
    nombre: string
    descripcion: string
    posee?: FarmaciaPoseeUncheckedCreateNestedManyWithoutMedicamentoInput
    entregas?: FarmaciaEntregaUncheckedCreateNestedManyWithoutMedicamentoInput
  }

  export type MedicamentoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    posee?: FarmaciaPoseeUpdateManyWithoutMedicamentoNestedInput
    entregas?: FarmaciaEntregaUpdateManyWithoutMedicamentoNestedInput
  }

  export type MedicamentoUncheckedUpdateInput = {
    idMedicamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    posee?: FarmaciaPoseeUncheckedUpdateManyWithoutMedicamentoNestedInput
    entregas?: FarmaciaEntregaUncheckedUpdateManyWithoutMedicamentoNestedInput
  }

  export type MedicamentoCreateManyInput = {
    idMedicamento?: number
    nombre: string
    descripcion: string
  }

  export type MedicamentoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type MedicamentoUncheckedUpdateManyInput = {
    idMedicamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type FarmaciaPoseeCreateInput = {
    cantidad?: number
    farmacia: FarmaciaCreateNestedOneWithoutPoseeInput
    medicamento: MedicamentoCreateNestedOneWithoutPoseeInput
  }

  export type FarmaciaPoseeUncheckedCreateInput = {
    idFarmacia: number
    idMedicamento: number
    cantidad?: number
  }

  export type FarmaciaPoseeUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    farmacia?: FarmaciaUpdateOneRequiredWithoutPoseeNestedInput
    medicamento?: MedicamentoUpdateOneRequiredWithoutPoseeNestedInput
  }

  export type FarmaciaPoseeUncheckedUpdateInput = {
    idFarmacia?: IntFieldUpdateOperationsInput | number
    idMedicamento?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type FarmaciaPoseeCreateManyInput = {
    idFarmacia: number
    idMedicamento: number
    cantidad?: number
  }

  export type FarmaciaPoseeUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type FarmaciaPoseeUncheckedUpdateManyInput = {
    idFarmacia?: IntFieldUpdateOperationsInput | number
    idMedicamento?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type FarmaciaEntregaCreateInput = {
    idPaciente: number
    FEntrega?: Date | string
    Cantidad: number
    farmacia: FarmaciaCreateNestedOneWithoutEntregasInput
    medicamento: MedicamentoCreateNestedOneWithoutEntregasInput
  }

  export type FarmaciaEntregaUncheckedCreateInput = {
    idPaciente: number
    idFarmacia: number
    idMedicamento: number
    FEntrega?: Date | string
    Cantidad: number
  }

  export type FarmaciaEntregaUpdateInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    FEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    Cantidad?: IntFieldUpdateOperationsInput | number
    farmacia?: FarmaciaUpdateOneRequiredWithoutEntregasNestedInput
    medicamento?: MedicamentoUpdateOneRequiredWithoutEntregasNestedInput
  }

  export type FarmaciaEntregaUncheckedUpdateInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    idFarmacia?: IntFieldUpdateOperationsInput | number
    idMedicamento?: IntFieldUpdateOperationsInput | number
    FEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    Cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type FarmaciaEntregaCreateManyInput = {
    idPaciente: number
    idFarmacia: number
    idMedicamento: number
    FEntrega?: Date | string
    Cantidad: number
  }

  export type FarmaciaEntregaUpdateManyMutationInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    FEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    Cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type FarmaciaEntregaUncheckedUpdateManyInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    idFarmacia?: IntFieldUpdateOperationsInput | number
    idMedicamento?: IntFieldUpdateOperationsInput | number
    FEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    Cantidad?: IntFieldUpdateOperationsInput | number
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

  export type FarmaciaPoseeListRelationFilter = {
    every?: FarmaciaPoseeWhereInput
    some?: FarmaciaPoseeWhereInput
    none?: FarmaciaPoseeWhereInput
  }

  export type FarmaciaEntregaListRelationFilter = {
    every?: FarmaciaEntregaWhereInput
    some?: FarmaciaEntregaWhereInput
    none?: FarmaciaEntregaWhereInput
  }

  export type FarmaciaPoseeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FarmaciaEntregaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FarmaciaCountOrderByAggregateInput = {
    idFarmacia?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
  }

  export type FarmaciaAvgOrderByAggregateInput = {
    idFarmacia?: SortOrder
  }

  export type FarmaciaMaxOrderByAggregateInput = {
    idFarmacia?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
  }

  export type FarmaciaMinOrderByAggregateInput = {
    idFarmacia?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
  }

  export type FarmaciaSumOrderByAggregateInput = {
    idFarmacia?: SortOrder
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

  export type MedicamentoCountOrderByAggregateInput = {
    idMedicamento?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type MedicamentoAvgOrderByAggregateInput = {
    idMedicamento?: SortOrder
  }

  export type MedicamentoMaxOrderByAggregateInput = {
    idMedicamento?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type MedicamentoMinOrderByAggregateInput = {
    idMedicamento?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type MedicamentoSumOrderByAggregateInput = {
    idMedicamento?: SortOrder
  }

  export type FarmaciaScalarRelationFilter = {
    is?: FarmaciaWhereInput
    isNot?: FarmaciaWhereInput
  }

  export type MedicamentoScalarRelationFilter = {
    is?: MedicamentoWhereInput
    isNot?: MedicamentoWhereInput
  }

  export type FarmaciaPoseeIdFarmaciaIdMedicamentoCompoundUniqueInput = {
    idFarmacia: number
    idMedicamento: number
  }

  export type FarmaciaPoseeCountOrderByAggregateInput = {
    idFarmacia?: SortOrder
    idMedicamento?: SortOrder
    cantidad?: SortOrder
  }

  export type FarmaciaPoseeAvgOrderByAggregateInput = {
    idFarmacia?: SortOrder
    idMedicamento?: SortOrder
    cantidad?: SortOrder
  }

  export type FarmaciaPoseeMaxOrderByAggregateInput = {
    idFarmacia?: SortOrder
    idMedicamento?: SortOrder
    cantidad?: SortOrder
  }

  export type FarmaciaPoseeMinOrderByAggregateInput = {
    idFarmacia?: SortOrder
    idMedicamento?: SortOrder
    cantidad?: SortOrder
  }

  export type FarmaciaPoseeSumOrderByAggregateInput = {
    idFarmacia?: SortOrder
    idMedicamento?: SortOrder
    cantidad?: SortOrder
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

  export type FarmaciaEntregaIdPacienteIdFarmaciaIdMedicamentoFEntregaCompoundUniqueInput = {
    idPaciente: number
    idFarmacia: number
    idMedicamento: number
    FEntrega: Date | string
  }

  export type FarmaciaEntregaCountOrderByAggregateInput = {
    idPaciente?: SortOrder
    idFarmacia?: SortOrder
    idMedicamento?: SortOrder
    FEntrega?: SortOrder
    Cantidad?: SortOrder
  }

  export type FarmaciaEntregaAvgOrderByAggregateInput = {
    idPaciente?: SortOrder
    idFarmacia?: SortOrder
    idMedicamento?: SortOrder
    Cantidad?: SortOrder
  }

  export type FarmaciaEntregaMaxOrderByAggregateInput = {
    idPaciente?: SortOrder
    idFarmacia?: SortOrder
    idMedicamento?: SortOrder
    FEntrega?: SortOrder
    Cantidad?: SortOrder
  }

  export type FarmaciaEntregaMinOrderByAggregateInput = {
    idPaciente?: SortOrder
    idFarmacia?: SortOrder
    idMedicamento?: SortOrder
    FEntrega?: SortOrder
    Cantidad?: SortOrder
  }

  export type FarmaciaEntregaSumOrderByAggregateInput = {
    idPaciente?: SortOrder
    idFarmacia?: SortOrder
    idMedicamento?: SortOrder
    Cantidad?: SortOrder
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

  export type FarmaciaPoseeCreateNestedManyWithoutFarmaciaInput = {
    create?: XOR<FarmaciaPoseeCreateWithoutFarmaciaInput, FarmaciaPoseeUncheckedCreateWithoutFarmaciaInput> | FarmaciaPoseeCreateWithoutFarmaciaInput[] | FarmaciaPoseeUncheckedCreateWithoutFarmaciaInput[]
    connectOrCreate?: FarmaciaPoseeCreateOrConnectWithoutFarmaciaInput | FarmaciaPoseeCreateOrConnectWithoutFarmaciaInput[]
    createMany?: FarmaciaPoseeCreateManyFarmaciaInputEnvelope
    connect?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
  }

  export type FarmaciaEntregaCreateNestedManyWithoutFarmaciaInput = {
    create?: XOR<FarmaciaEntregaCreateWithoutFarmaciaInput, FarmaciaEntregaUncheckedCreateWithoutFarmaciaInput> | FarmaciaEntregaCreateWithoutFarmaciaInput[] | FarmaciaEntregaUncheckedCreateWithoutFarmaciaInput[]
    connectOrCreate?: FarmaciaEntregaCreateOrConnectWithoutFarmaciaInput | FarmaciaEntregaCreateOrConnectWithoutFarmaciaInput[]
    createMany?: FarmaciaEntregaCreateManyFarmaciaInputEnvelope
    connect?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
  }

  export type FarmaciaPoseeUncheckedCreateNestedManyWithoutFarmaciaInput = {
    create?: XOR<FarmaciaPoseeCreateWithoutFarmaciaInput, FarmaciaPoseeUncheckedCreateWithoutFarmaciaInput> | FarmaciaPoseeCreateWithoutFarmaciaInput[] | FarmaciaPoseeUncheckedCreateWithoutFarmaciaInput[]
    connectOrCreate?: FarmaciaPoseeCreateOrConnectWithoutFarmaciaInput | FarmaciaPoseeCreateOrConnectWithoutFarmaciaInput[]
    createMany?: FarmaciaPoseeCreateManyFarmaciaInputEnvelope
    connect?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
  }

  export type FarmaciaEntregaUncheckedCreateNestedManyWithoutFarmaciaInput = {
    create?: XOR<FarmaciaEntregaCreateWithoutFarmaciaInput, FarmaciaEntregaUncheckedCreateWithoutFarmaciaInput> | FarmaciaEntregaCreateWithoutFarmaciaInput[] | FarmaciaEntregaUncheckedCreateWithoutFarmaciaInput[]
    connectOrCreate?: FarmaciaEntregaCreateOrConnectWithoutFarmaciaInput | FarmaciaEntregaCreateOrConnectWithoutFarmaciaInput[]
    createMany?: FarmaciaEntregaCreateManyFarmaciaInputEnvelope
    connect?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FarmaciaPoseeUpdateManyWithoutFarmaciaNestedInput = {
    create?: XOR<FarmaciaPoseeCreateWithoutFarmaciaInput, FarmaciaPoseeUncheckedCreateWithoutFarmaciaInput> | FarmaciaPoseeCreateWithoutFarmaciaInput[] | FarmaciaPoseeUncheckedCreateWithoutFarmaciaInput[]
    connectOrCreate?: FarmaciaPoseeCreateOrConnectWithoutFarmaciaInput | FarmaciaPoseeCreateOrConnectWithoutFarmaciaInput[]
    upsert?: FarmaciaPoseeUpsertWithWhereUniqueWithoutFarmaciaInput | FarmaciaPoseeUpsertWithWhereUniqueWithoutFarmaciaInput[]
    createMany?: FarmaciaPoseeCreateManyFarmaciaInputEnvelope
    set?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
    disconnect?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
    delete?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
    connect?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
    update?: FarmaciaPoseeUpdateWithWhereUniqueWithoutFarmaciaInput | FarmaciaPoseeUpdateWithWhereUniqueWithoutFarmaciaInput[]
    updateMany?: FarmaciaPoseeUpdateManyWithWhereWithoutFarmaciaInput | FarmaciaPoseeUpdateManyWithWhereWithoutFarmaciaInput[]
    deleteMany?: FarmaciaPoseeScalarWhereInput | FarmaciaPoseeScalarWhereInput[]
  }

  export type FarmaciaEntregaUpdateManyWithoutFarmaciaNestedInput = {
    create?: XOR<FarmaciaEntregaCreateWithoutFarmaciaInput, FarmaciaEntregaUncheckedCreateWithoutFarmaciaInput> | FarmaciaEntregaCreateWithoutFarmaciaInput[] | FarmaciaEntregaUncheckedCreateWithoutFarmaciaInput[]
    connectOrCreate?: FarmaciaEntregaCreateOrConnectWithoutFarmaciaInput | FarmaciaEntregaCreateOrConnectWithoutFarmaciaInput[]
    upsert?: FarmaciaEntregaUpsertWithWhereUniqueWithoutFarmaciaInput | FarmaciaEntregaUpsertWithWhereUniqueWithoutFarmaciaInput[]
    createMany?: FarmaciaEntregaCreateManyFarmaciaInputEnvelope
    set?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
    disconnect?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
    delete?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
    connect?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
    update?: FarmaciaEntregaUpdateWithWhereUniqueWithoutFarmaciaInput | FarmaciaEntregaUpdateWithWhereUniqueWithoutFarmaciaInput[]
    updateMany?: FarmaciaEntregaUpdateManyWithWhereWithoutFarmaciaInput | FarmaciaEntregaUpdateManyWithWhereWithoutFarmaciaInput[]
    deleteMany?: FarmaciaEntregaScalarWhereInput | FarmaciaEntregaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FarmaciaPoseeUncheckedUpdateManyWithoutFarmaciaNestedInput = {
    create?: XOR<FarmaciaPoseeCreateWithoutFarmaciaInput, FarmaciaPoseeUncheckedCreateWithoutFarmaciaInput> | FarmaciaPoseeCreateWithoutFarmaciaInput[] | FarmaciaPoseeUncheckedCreateWithoutFarmaciaInput[]
    connectOrCreate?: FarmaciaPoseeCreateOrConnectWithoutFarmaciaInput | FarmaciaPoseeCreateOrConnectWithoutFarmaciaInput[]
    upsert?: FarmaciaPoseeUpsertWithWhereUniqueWithoutFarmaciaInput | FarmaciaPoseeUpsertWithWhereUniqueWithoutFarmaciaInput[]
    createMany?: FarmaciaPoseeCreateManyFarmaciaInputEnvelope
    set?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
    disconnect?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
    delete?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
    connect?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
    update?: FarmaciaPoseeUpdateWithWhereUniqueWithoutFarmaciaInput | FarmaciaPoseeUpdateWithWhereUniqueWithoutFarmaciaInput[]
    updateMany?: FarmaciaPoseeUpdateManyWithWhereWithoutFarmaciaInput | FarmaciaPoseeUpdateManyWithWhereWithoutFarmaciaInput[]
    deleteMany?: FarmaciaPoseeScalarWhereInput | FarmaciaPoseeScalarWhereInput[]
  }

  export type FarmaciaEntregaUncheckedUpdateManyWithoutFarmaciaNestedInput = {
    create?: XOR<FarmaciaEntregaCreateWithoutFarmaciaInput, FarmaciaEntregaUncheckedCreateWithoutFarmaciaInput> | FarmaciaEntregaCreateWithoutFarmaciaInput[] | FarmaciaEntregaUncheckedCreateWithoutFarmaciaInput[]
    connectOrCreate?: FarmaciaEntregaCreateOrConnectWithoutFarmaciaInput | FarmaciaEntregaCreateOrConnectWithoutFarmaciaInput[]
    upsert?: FarmaciaEntregaUpsertWithWhereUniqueWithoutFarmaciaInput | FarmaciaEntregaUpsertWithWhereUniqueWithoutFarmaciaInput[]
    createMany?: FarmaciaEntregaCreateManyFarmaciaInputEnvelope
    set?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
    disconnect?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
    delete?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
    connect?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
    update?: FarmaciaEntregaUpdateWithWhereUniqueWithoutFarmaciaInput | FarmaciaEntregaUpdateWithWhereUniqueWithoutFarmaciaInput[]
    updateMany?: FarmaciaEntregaUpdateManyWithWhereWithoutFarmaciaInput | FarmaciaEntregaUpdateManyWithWhereWithoutFarmaciaInput[]
    deleteMany?: FarmaciaEntregaScalarWhereInput | FarmaciaEntregaScalarWhereInput[]
  }

  export type FarmaciaPoseeCreateNestedManyWithoutMedicamentoInput = {
    create?: XOR<FarmaciaPoseeCreateWithoutMedicamentoInput, FarmaciaPoseeUncheckedCreateWithoutMedicamentoInput> | FarmaciaPoseeCreateWithoutMedicamentoInput[] | FarmaciaPoseeUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: FarmaciaPoseeCreateOrConnectWithoutMedicamentoInput | FarmaciaPoseeCreateOrConnectWithoutMedicamentoInput[]
    createMany?: FarmaciaPoseeCreateManyMedicamentoInputEnvelope
    connect?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
  }

  export type FarmaciaEntregaCreateNestedManyWithoutMedicamentoInput = {
    create?: XOR<FarmaciaEntregaCreateWithoutMedicamentoInput, FarmaciaEntregaUncheckedCreateWithoutMedicamentoInput> | FarmaciaEntregaCreateWithoutMedicamentoInput[] | FarmaciaEntregaUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: FarmaciaEntregaCreateOrConnectWithoutMedicamentoInput | FarmaciaEntregaCreateOrConnectWithoutMedicamentoInput[]
    createMany?: FarmaciaEntregaCreateManyMedicamentoInputEnvelope
    connect?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
  }

  export type FarmaciaPoseeUncheckedCreateNestedManyWithoutMedicamentoInput = {
    create?: XOR<FarmaciaPoseeCreateWithoutMedicamentoInput, FarmaciaPoseeUncheckedCreateWithoutMedicamentoInput> | FarmaciaPoseeCreateWithoutMedicamentoInput[] | FarmaciaPoseeUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: FarmaciaPoseeCreateOrConnectWithoutMedicamentoInput | FarmaciaPoseeCreateOrConnectWithoutMedicamentoInput[]
    createMany?: FarmaciaPoseeCreateManyMedicamentoInputEnvelope
    connect?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
  }

  export type FarmaciaEntregaUncheckedCreateNestedManyWithoutMedicamentoInput = {
    create?: XOR<FarmaciaEntregaCreateWithoutMedicamentoInput, FarmaciaEntregaUncheckedCreateWithoutMedicamentoInput> | FarmaciaEntregaCreateWithoutMedicamentoInput[] | FarmaciaEntregaUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: FarmaciaEntregaCreateOrConnectWithoutMedicamentoInput | FarmaciaEntregaCreateOrConnectWithoutMedicamentoInput[]
    createMany?: FarmaciaEntregaCreateManyMedicamentoInputEnvelope
    connect?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
  }

  export type FarmaciaPoseeUpdateManyWithoutMedicamentoNestedInput = {
    create?: XOR<FarmaciaPoseeCreateWithoutMedicamentoInput, FarmaciaPoseeUncheckedCreateWithoutMedicamentoInput> | FarmaciaPoseeCreateWithoutMedicamentoInput[] | FarmaciaPoseeUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: FarmaciaPoseeCreateOrConnectWithoutMedicamentoInput | FarmaciaPoseeCreateOrConnectWithoutMedicamentoInput[]
    upsert?: FarmaciaPoseeUpsertWithWhereUniqueWithoutMedicamentoInput | FarmaciaPoseeUpsertWithWhereUniqueWithoutMedicamentoInput[]
    createMany?: FarmaciaPoseeCreateManyMedicamentoInputEnvelope
    set?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
    disconnect?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
    delete?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
    connect?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
    update?: FarmaciaPoseeUpdateWithWhereUniqueWithoutMedicamentoInput | FarmaciaPoseeUpdateWithWhereUniqueWithoutMedicamentoInput[]
    updateMany?: FarmaciaPoseeUpdateManyWithWhereWithoutMedicamentoInput | FarmaciaPoseeUpdateManyWithWhereWithoutMedicamentoInput[]
    deleteMany?: FarmaciaPoseeScalarWhereInput | FarmaciaPoseeScalarWhereInput[]
  }

  export type FarmaciaEntregaUpdateManyWithoutMedicamentoNestedInput = {
    create?: XOR<FarmaciaEntregaCreateWithoutMedicamentoInput, FarmaciaEntregaUncheckedCreateWithoutMedicamentoInput> | FarmaciaEntregaCreateWithoutMedicamentoInput[] | FarmaciaEntregaUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: FarmaciaEntregaCreateOrConnectWithoutMedicamentoInput | FarmaciaEntregaCreateOrConnectWithoutMedicamentoInput[]
    upsert?: FarmaciaEntregaUpsertWithWhereUniqueWithoutMedicamentoInput | FarmaciaEntregaUpsertWithWhereUniqueWithoutMedicamentoInput[]
    createMany?: FarmaciaEntregaCreateManyMedicamentoInputEnvelope
    set?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
    disconnect?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
    delete?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
    connect?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
    update?: FarmaciaEntregaUpdateWithWhereUniqueWithoutMedicamentoInput | FarmaciaEntregaUpdateWithWhereUniqueWithoutMedicamentoInput[]
    updateMany?: FarmaciaEntregaUpdateManyWithWhereWithoutMedicamentoInput | FarmaciaEntregaUpdateManyWithWhereWithoutMedicamentoInput[]
    deleteMany?: FarmaciaEntregaScalarWhereInput | FarmaciaEntregaScalarWhereInput[]
  }

  export type FarmaciaPoseeUncheckedUpdateManyWithoutMedicamentoNestedInput = {
    create?: XOR<FarmaciaPoseeCreateWithoutMedicamentoInput, FarmaciaPoseeUncheckedCreateWithoutMedicamentoInput> | FarmaciaPoseeCreateWithoutMedicamentoInput[] | FarmaciaPoseeUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: FarmaciaPoseeCreateOrConnectWithoutMedicamentoInput | FarmaciaPoseeCreateOrConnectWithoutMedicamentoInput[]
    upsert?: FarmaciaPoseeUpsertWithWhereUniqueWithoutMedicamentoInput | FarmaciaPoseeUpsertWithWhereUniqueWithoutMedicamentoInput[]
    createMany?: FarmaciaPoseeCreateManyMedicamentoInputEnvelope
    set?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
    disconnect?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
    delete?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
    connect?: FarmaciaPoseeWhereUniqueInput | FarmaciaPoseeWhereUniqueInput[]
    update?: FarmaciaPoseeUpdateWithWhereUniqueWithoutMedicamentoInput | FarmaciaPoseeUpdateWithWhereUniqueWithoutMedicamentoInput[]
    updateMany?: FarmaciaPoseeUpdateManyWithWhereWithoutMedicamentoInput | FarmaciaPoseeUpdateManyWithWhereWithoutMedicamentoInput[]
    deleteMany?: FarmaciaPoseeScalarWhereInput | FarmaciaPoseeScalarWhereInput[]
  }

  export type FarmaciaEntregaUncheckedUpdateManyWithoutMedicamentoNestedInput = {
    create?: XOR<FarmaciaEntregaCreateWithoutMedicamentoInput, FarmaciaEntregaUncheckedCreateWithoutMedicamentoInput> | FarmaciaEntregaCreateWithoutMedicamentoInput[] | FarmaciaEntregaUncheckedCreateWithoutMedicamentoInput[]
    connectOrCreate?: FarmaciaEntregaCreateOrConnectWithoutMedicamentoInput | FarmaciaEntregaCreateOrConnectWithoutMedicamentoInput[]
    upsert?: FarmaciaEntregaUpsertWithWhereUniqueWithoutMedicamentoInput | FarmaciaEntregaUpsertWithWhereUniqueWithoutMedicamentoInput[]
    createMany?: FarmaciaEntregaCreateManyMedicamentoInputEnvelope
    set?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
    disconnect?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
    delete?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
    connect?: FarmaciaEntregaWhereUniqueInput | FarmaciaEntregaWhereUniqueInput[]
    update?: FarmaciaEntregaUpdateWithWhereUniqueWithoutMedicamentoInput | FarmaciaEntregaUpdateWithWhereUniqueWithoutMedicamentoInput[]
    updateMany?: FarmaciaEntregaUpdateManyWithWhereWithoutMedicamentoInput | FarmaciaEntregaUpdateManyWithWhereWithoutMedicamentoInput[]
    deleteMany?: FarmaciaEntregaScalarWhereInput | FarmaciaEntregaScalarWhereInput[]
  }

  export type FarmaciaCreateNestedOneWithoutPoseeInput = {
    create?: XOR<FarmaciaCreateWithoutPoseeInput, FarmaciaUncheckedCreateWithoutPoseeInput>
    connectOrCreate?: FarmaciaCreateOrConnectWithoutPoseeInput
    connect?: FarmaciaWhereUniqueInput
  }

  export type MedicamentoCreateNestedOneWithoutPoseeInput = {
    create?: XOR<MedicamentoCreateWithoutPoseeInput, MedicamentoUncheckedCreateWithoutPoseeInput>
    connectOrCreate?: MedicamentoCreateOrConnectWithoutPoseeInput
    connect?: MedicamentoWhereUniqueInput
  }

  export type FarmaciaUpdateOneRequiredWithoutPoseeNestedInput = {
    create?: XOR<FarmaciaCreateWithoutPoseeInput, FarmaciaUncheckedCreateWithoutPoseeInput>
    connectOrCreate?: FarmaciaCreateOrConnectWithoutPoseeInput
    upsert?: FarmaciaUpsertWithoutPoseeInput
    connect?: FarmaciaWhereUniqueInput
    update?: XOR<XOR<FarmaciaUpdateToOneWithWhereWithoutPoseeInput, FarmaciaUpdateWithoutPoseeInput>, FarmaciaUncheckedUpdateWithoutPoseeInput>
  }

  export type MedicamentoUpdateOneRequiredWithoutPoseeNestedInput = {
    create?: XOR<MedicamentoCreateWithoutPoseeInput, MedicamentoUncheckedCreateWithoutPoseeInput>
    connectOrCreate?: MedicamentoCreateOrConnectWithoutPoseeInput
    upsert?: MedicamentoUpsertWithoutPoseeInput
    connect?: MedicamentoWhereUniqueInput
    update?: XOR<XOR<MedicamentoUpdateToOneWithWhereWithoutPoseeInput, MedicamentoUpdateWithoutPoseeInput>, MedicamentoUncheckedUpdateWithoutPoseeInput>
  }

  export type FarmaciaCreateNestedOneWithoutEntregasInput = {
    create?: XOR<FarmaciaCreateWithoutEntregasInput, FarmaciaUncheckedCreateWithoutEntregasInput>
    connectOrCreate?: FarmaciaCreateOrConnectWithoutEntregasInput
    connect?: FarmaciaWhereUniqueInput
  }

  export type MedicamentoCreateNestedOneWithoutEntregasInput = {
    create?: XOR<MedicamentoCreateWithoutEntregasInput, MedicamentoUncheckedCreateWithoutEntregasInput>
    connectOrCreate?: MedicamentoCreateOrConnectWithoutEntregasInput
    connect?: MedicamentoWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FarmaciaUpdateOneRequiredWithoutEntregasNestedInput = {
    create?: XOR<FarmaciaCreateWithoutEntregasInput, FarmaciaUncheckedCreateWithoutEntregasInput>
    connectOrCreate?: FarmaciaCreateOrConnectWithoutEntregasInput
    upsert?: FarmaciaUpsertWithoutEntregasInput
    connect?: FarmaciaWhereUniqueInput
    update?: XOR<XOR<FarmaciaUpdateToOneWithWhereWithoutEntregasInput, FarmaciaUpdateWithoutEntregasInput>, FarmaciaUncheckedUpdateWithoutEntregasInput>
  }

  export type MedicamentoUpdateOneRequiredWithoutEntregasNestedInput = {
    create?: XOR<MedicamentoCreateWithoutEntregasInput, MedicamentoUncheckedCreateWithoutEntregasInput>
    connectOrCreate?: MedicamentoCreateOrConnectWithoutEntregasInput
    upsert?: MedicamentoUpsertWithoutEntregasInput
    connect?: MedicamentoWhereUniqueInput
    update?: XOR<XOR<MedicamentoUpdateToOneWithWhereWithoutEntregasInput, MedicamentoUpdateWithoutEntregasInput>, MedicamentoUncheckedUpdateWithoutEntregasInput>
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

  export type FarmaciaPoseeCreateWithoutFarmaciaInput = {
    cantidad?: number
    medicamento: MedicamentoCreateNestedOneWithoutPoseeInput
  }

  export type FarmaciaPoseeUncheckedCreateWithoutFarmaciaInput = {
    idMedicamento: number
    cantidad?: number
  }

  export type FarmaciaPoseeCreateOrConnectWithoutFarmaciaInput = {
    where: FarmaciaPoseeWhereUniqueInput
    create: XOR<FarmaciaPoseeCreateWithoutFarmaciaInput, FarmaciaPoseeUncheckedCreateWithoutFarmaciaInput>
  }

  export type FarmaciaPoseeCreateManyFarmaciaInputEnvelope = {
    data: FarmaciaPoseeCreateManyFarmaciaInput | FarmaciaPoseeCreateManyFarmaciaInput[]
    skipDuplicates?: boolean
  }

  export type FarmaciaEntregaCreateWithoutFarmaciaInput = {
    idPaciente: number
    FEntrega?: Date | string
    Cantidad: number
    medicamento: MedicamentoCreateNestedOneWithoutEntregasInput
  }

  export type FarmaciaEntregaUncheckedCreateWithoutFarmaciaInput = {
    idPaciente: number
    idMedicamento: number
    FEntrega?: Date | string
    Cantidad: number
  }

  export type FarmaciaEntregaCreateOrConnectWithoutFarmaciaInput = {
    where: FarmaciaEntregaWhereUniqueInput
    create: XOR<FarmaciaEntregaCreateWithoutFarmaciaInput, FarmaciaEntregaUncheckedCreateWithoutFarmaciaInput>
  }

  export type FarmaciaEntregaCreateManyFarmaciaInputEnvelope = {
    data: FarmaciaEntregaCreateManyFarmaciaInput | FarmaciaEntregaCreateManyFarmaciaInput[]
    skipDuplicates?: boolean
  }

  export type FarmaciaPoseeUpsertWithWhereUniqueWithoutFarmaciaInput = {
    where: FarmaciaPoseeWhereUniqueInput
    update: XOR<FarmaciaPoseeUpdateWithoutFarmaciaInput, FarmaciaPoseeUncheckedUpdateWithoutFarmaciaInput>
    create: XOR<FarmaciaPoseeCreateWithoutFarmaciaInput, FarmaciaPoseeUncheckedCreateWithoutFarmaciaInput>
  }

  export type FarmaciaPoseeUpdateWithWhereUniqueWithoutFarmaciaInput = {
    where: FarmaciaPoseeWhereUniqueInput
    data: XOR<FarmaciaPoseeUpdateWithoutFarmaciaInput, FarmaciaPoseeUncheckedUpdateWithoutFarmaciaInput>
  }

  export type FarmaciaPoseeUpdateManyWithWhereWithoutFarmaciaInput = {
    where: FarmaciaPoseeScalarWhereInput
    data: XOR<FarmaciaPoseeUpdateManyMutationInput, FarmaciaPoseeUncheckedUpdateManyWithoutFarmaciaInput>
  }

  export type FarmaciaPoseeScalarWhereInput = {
    AND?: FarmaciaPoseeScalarWhereInput | FarmaciaPoseeScalarWhereInput[]
    OR?: FarmaciaPoseeScalarWhereInput[]
    NOT?: FarmaciaPoseeScalarWhereInput | FarmaciaPoseeScalarWhereInput[]
    idFarmacia?: IntFilter<"FarmaciaPosee"> | number
    idMedicamento?: IntFilter<"FarmaciaPosee"> | number
    cantidad?: IntFilter<"FarmaciaPosee"> | number
  }

  export type FarmaciaEntregaUpsertWithWhereUniqueWithoutFarmaciaInput = {
    where: FarmaciaEntregaWhereUniqueInput
    update: XOR<FarmaciaEntregaUpdateWithoutFarmaciaInput, FarmaciaEntregaUncheckedUpdateWithoutFarmaciaInput>
    create: XOR<FarmaciaEntregaCreateWithoutFarmaciaInput, FarmaciaEntregaUncheckedCreateWithoutFarmaciaInput>
  }

  export type FarmaciaEntregaUpdateWithWhereUniqueWithoutFarmaciaInput = {
    where: FarmaciaEntregaWhereUniqueInput
    data: XOR<FarmaciaEntregaUpdateWithoutFarmaciaInput, FarmaciaEntregaUncheckedUpdateWithoutFarmaciaInput>
  }

  export type FarmaciaEntregaUpdateManyWithWhereWithoutFarmaciaInput = {
    where: FarmaciaEntregaScalarWhereInput
    data: XOR<FarmaciaEntregaUpdateManyMutationInput, FarmaciaEntregaUncheckedUpdateManyWithoutFarmaciaInput>
  }

  export type FarmaciaEntregaScalarWhereInput = {
    AND?: FarmaciaEntregaScalarWhereInput | FarmaciaEntregaScalarWhereInput[]
    OR?: FarmaciaEntregaScalarWhereInput[]
    NOT?: FarmaciaEntregaScalarWhereInput | FarmaciaEntregaScalarWhereInput[]
    idPaciente?: IntFilter<"FarmaciaEntrega"> | number
    idFarmacia?: IntFilter<"FarmaciaEntrega"> | number
    idMedicamento?: IntFilter<"FarmaciaEntrega"> | number
    FEntrega?: DateTimeFilter<"FarmaciaEntrega"> | Date | string
    Cantidad?: IntFilter<"FarmaciaEntrega"> | number
  }

  export type FarmaciaPoseeCreateWithoutMedicamentoInput = {
    cantidad?: number
    farmacia: FarmaciaCreateNestedOneWithoutPoseeInput
  }

  export type FarmaciaPoseeUncheckedCreateWithoutMedicamentoInput = {
    idFarmacia: number
    cantidad?: number
  }

  export type FarmaciaPoseeCreateOrConnectWithoutMedicamentoInput = {
    where: FarmaciaPoseeWhereUniqueInput
    create: XOR<FarmaciaPoseeCreateWithoutMedicamentoInput, FarmaciaPoseeUncheckedCreateWithoutMedicamentoInput>
  }

  export type FarmaciaPoseeCreateManyMedicamentoInputEnvelope = {
    data: FarmaciaPoseeCreateManyMedicamentoInput | FarmaciaPoseeCreateManyMedicamentoInput[]
    skipDuplicates?: boolean
  }

  export type FarmaciaEntregaCreateWithoutMedicamentoInput = {
    idPaciente: number
    FEntrega?: Date | string
    Cantidad: number
    farmacia: FarmaciaCreateNestedOneWithoutEntregasInput
  }

  export type FarmaciaEntregaUncheckedCreateWithoutMedicamentoInput = {
    idPaciente: number
    idFarmacia: number
    FEntrega?: Date | string
    Cantidad: number
  }

  export type FarmaciaEntregaCreateOrConnectWithoutMedicamentoInput = {
    where: FarmaciaEntregaWhereUniqueInput
    create: XOR<FarmaciaEntregaCreateWithoutMedicamentoInput, FarmaciaEntregaUncheckedCreateWithoutMedicamentoInput>
  }

  export type FarmaciaEntregaCreateManyMedicamentoInputEnvelope = {
    data: FarmaciaEntregaCreateManyMedicamentoInput | FarmaciaEntregaCreateManyMedicamentoInput[]
    skipDuplicates?: boolean
  }

  export type FarmaciaPoseeUpsertWithWhereUniqueWithoutMedicamentoInput = {
    where: FarmaciaPoseeWhereUniqueInput
    update: XOR<FarmaciaPoseeUpdateWithoutMedicamentoInput, FarmaciaPoseeUncheckedUpdateWithoutMedicamentoInput>
    create: XOR<FarmaciaPoseeCreateWithoutMedicamentoInput, FarmaciaPoseeUncheckedCreateWithoutMedicamentoInput>
  }

  export type FarmaciaPoseeUpdateWithWhereUniqueWithoutMedicamentoInput = {
    where: FarmaciaPoseeWhereUniqueInput
    data: XOR<FarmaciaPoseeUpdateWithoutMedicamentoInput, FarmaciaPoseeUncheckedUpdateWithoutMedicamentoInput>
  }

  export type FarmaciaPoseeUpdateManyWithWhereWithoutMedicamentoInput = {
    where: FarmaciaPoseeScalarWhereInput
    data: XOR<FarmaciaPoseeUpdateManyMutationInput, FarmaciaPoseeUncheckedUpdateManyWithoutMedicamentoInput>
  }

  export type FarmaciaEntregaUpsertWithWhereUniqueWithoutMedicamentoInput = {
    where: FarmaciaEntregaWhereUniqueInput
    update: XOR<FarmaciaEntregaUpdateWithoutMedicamentoInput, FarmaciaEntregaUncheckedUpdateWithoutMedicamentoInput>
    create: XOR<FarmaciaEntregaCreateWithoutMedicamentoInput, FarmaciaEntregaUncheckedCreateWithoutMedicamentoInput>
  }

  export type FarmaciaEntregaUpdateWithWhereUniqueWithoutMedicamentoInput = {
    where: FarmaciaEntregaWhereUniqueInput
    data: XOR<FarmaciaEntregaUpdateWithoutMedicamentoInput, FarmaciaEntregaUncheckedUpdateWithoutMedicamentoInput>
  }

  export type FarmaciaEntregaUpdateManyWithWhereWithoutMedicamentoInput = {
    where: FarmaciaEntregaScalarWhereInput
    data: XOR<FarmaciaEntregaUpdateManyMutationInput, FarmaciaEntregaUncheckedUpdateManyWithoutMedicamentoInput>
  }

  export type FarmaciaCreateWithoutPoseeInput = {
    nombre: string
    direccion: string
    entregas?: FarmaciaEntregaCreateNestedManyWithoutFarmaciaInput
  }

  export type FarmaciaUncheckedCreateWithoutPoseeInput = {
    idFarmacia?: number
    nombre: string
    direccion: string
    entregas?: FarmaciaEntregaUncheckedCreateNestedManyWithoutFarmaciaInput
  }

  export type FarmaciaCreateOrConnectWithoutPoseeInput = {
    where: FarmaciaWhereUniqueInput
    create: XOR<FarmaciaCreateWithoutPoseeInput, FarmaciaUncheckedCreateWithoutPoseeInput>
  }

  export type MedicamentoCreateWithoutPoseeInput = {
    nombre: string
    descripcion: string
    entregas?: FarmaciaEntregaCreateNestedManyWithoutMedicamentoInput
  }

  export type MedicamentoUncheckedCreateWithoutPoseeInput = {
    idMedicamento?: number
    nombre: string
    descripcion: string
    entregas?: FarmaciaEntregaUncheckedCreateNestedManyWithoutMedicamentoInput
  }

  export type MedicamentoCreateOrConnectWithoutPoseeInput = {
    where: MedicamentoWhereUniqueInput
    create: XOR<MedicamentoCreateWithoutPoseeInput, MedicamentoUncheckedCreateWithoutPoseeInput>
  }

  export type FarmaciaUpsertWithoutPoseeInput = {
    update: XOR<FarmaciaUpdateWithoutPoseeInput, FarmaciaUncheckedUpdateWithoutPoseeInput>
    create: XOR<FarmaciaCreateWithoutPoseeInput, FarmaciaUncheckedCreateWithoutPoseeInput>
    where?: FarmaciaWhereInput
  }

  export type FarmaciaUpdateToOneWithWhereWithoutPoseeInput = {
    where?: FarmaciaWhereInput
    data: XOR<FarmaciaUpdateWithoutPoseeInput, FarmaciaUncheckedUpdateWithoutPoseeInput>
  }

  export type FarmaciaUpdateWithoutPoseeInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    entregas?: FarmaciaEntregaUpdateManyWithoutFarmaciaNestedInput
  }

  export type FarmaciaUncheckedUpdateWithoutPoseeInput = {
    idFarmacia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    entregas?: FarmaciaEntregaUncheckedUpdateManyWithoutFarmaciaNestedInput
  }

  export type MedicamentoUpsertWithoutPoseeInput = {
    update: XOR<MedicamentoUpdateWithoutPoseeInput, MedicamentoUncheckedUpdateWithoutPoseeInput>
    create: XOR<MedicamentoCreateWithoutPoseeInput, MedicamentoUncheckedCreateWithoutPoseeInput>
    where?: MedicamentoWhereInput
  }

  export type MedicamentoUpdateToOneWithWhereWithoutPoseeInput = {
    where?: MedicamentoWhereInput
    data: XOR<MedicamentoUpdateWithoutPoseeInput, MedicamentoUncheckedUpdateWithoutPoseeInput>
  }

  export type MedicamentoUpdateWithoutPoseeInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    entregas?: FarmaciaEntregaUpdateManyWithoutMedicamentoNestedInput
  }

  export type MedicamentoUncheckedUpdateWithoutPoseeInput = {
    idMedicamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    entregas?: FarmaciaEntregaUncheckedUpdateManyWithoutMedicamentoNestedInput
  }

  export type FarmaciaCreateWithoutEntregasInput = {
    nombre: string
    direccion: string
    posee?: FarmaciaPoseeCreateNestedManyWithoutFarmaciaInput
  }

  export type FarmaciaUncheckedCreateWithoutEntregasInput = {
    idFarmacia?: number
    nombre: string
    direccion: string
    posee?: FarmaciaPoseeUncheckedCreateNestedManyWithoutFarmaciaInput
  }

  export type FarmaciaCreateOrConnectWithoutEntregasInput = {
    where: FarmaciaWhereUniqueInput
    create: XOR<FarmaciaCreateWithoutEntregasInput, FarmaciaUncheckedCreateWithoutEntregasInput>
  }

  export type MedicamentoCreateWithoutEntregasInput = {
    nombre: string
    descripcion: string
    posee?: FarmaciaPoseeCreateNestedManyWithoutMedicamentoInput
  }

  export type MedicamentoUncheckedCreateWithoutEntregasInput = {
    idMedicamento?: number
    nombre: string
    descripcion: string
    posee?: FarmaciaPoseeUncheckedCreateNestedManyWithoutMedicamentoInput
  }

  export type MedicamentoCreateOrConnectWithoutEntregasInput = {
    where: MedicamentoWhereUniqueInput
    create: XOR<MedicamentoCreateWithoutEntregasInput, MedicamentoUncheckedCreateWithoutEntregasInput>
  }

  export type FarmaciaUpsertWithoutEntregasInput = {
    update: XOR<FarmaciaUpdateWithoutEntregasInput, FarmaciaUncheckedUpdateWithoutEntregasInput>
    create: XOR<FarmaciaCreateWithoutEntregasInput, FarmaciaUncheckedCreateWithoutEntregasInput>
    where?: FarmaciaWhereInput
  }

  export type FarmaciaUpdateToOneWithWhereWithoutEntregasInput = {
    where?: FarmaciaWhereInput
    data: XOR<FarmaciaUpdateWithoutEntregasInput, FarmaciaUncheckedUpdateWithoutEntregasInput>
  }

  export type FarmaciaUpdateWithoutEntregasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    posee?: FarmaciaPoseeUpdateManyWithoutFarmaciaNestedInput
  }

  export type FarmaciaUncheckedUpdateWithoutEntregasInput = {
    idFarmacia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    posee?: FarmaciaPoseeUncheckedUpdateManyWithoutFarmaciaNestedInput
  }

  export type MedicamentoUpsertWithoutEntregasInput = {
    update: XOR<MedicamentoUpdateWithoutEntregasInput, MedicamentoUncheckedUpdateWithoutEntregasInput>
    create: XOR<MedicamentoCreateWithoutEntregasInput, MedicamentoUncheckedCreateWithoutEntregasInput>
    where?: MedicamentoWhereInput
  }

  export type MedicamentoUpdateToOneWithWhereWithoutEntregasInput = {
    where?: MedicamentoWhereInput
    data: XOR<MedicamentoUpdateWithoutEntregasInput, MedicamentoUncheckedUpdateWithoutEntregasInput>
  }

  export type MedicamentoUpdateWithoutEntregasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    posee?: FarmaciaPoseeUpdateManyWithoutMedicamentoNestedInput
  }

  export type MedicamentoUncheckedUpdateWithoutEntregasInput = {
    idMedicamento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    posee?: FarmaciaPoseeUncheckedUpdateManyWithoutMedicamentoNestedInput
  }

  export type FarmaciaPoseeCreateManyFarmaciaInput = {
    idMedicamento: number
    cantidad?: number
  }

  export type FarmaciaEntregaCreateManyFarmaciaInput = {
    idPaciente: number
    idMedicamento: number
    FEntrega?: Date | string
    Cantidad: number
  }

  export type FarmaciaPoseeUpdateWithoutFarmaciaInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    medicamento?: MedicamentoUpdateOneRequiredWithoutPoseeNestedInput
  }

  export type FarmaciaPoseeUncheckedUpdateWithoutFarmaciaInput = {
    idMedicamento?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type FarmaciaPoseeUncheckedUpdateManyWithoutFarmaciaInput = {
    idMedicamento?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type FarmaciaEntregaUpdateWithoutFarmaciaInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    FEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    Cantidad?: IntFieldUpdateOperationsInput | number
    medicamento?: MedicamentoUpdateOneRequiredWithoutEntregasNestedInput
  }

  export type FarmaciaEntregaUncheckedUpdateWithoutFarmaciaInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    idMedicamento?: IntFieldUpdateOperationsInput | number
    FEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    Cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type FarmaciaEntregaUncheckedUpdateManyWithoutFarmaciaInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    idMedicamento?: IntFieldUpdateOperationsInput | number
    FEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    Cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type FarmaciaPoseeCreateManyMedicamentoInput = {
    idFarmacia: number
    cantidad?: number
  }

  export type FarmaciaEntregaCreateManyMedicamentoInput = {
    idPaciente: number
    idFarmacia: number
    FEntrega?: Date | string
    Cantidad: number
  }

  export type FarmaciaPoseeUpdateWithoutMedicamentoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    farmacia?: FarmaciaUpdateOneRequiredWithoutPoseeNestedInput
  }

  export type FarmaciaPoseeUncheckedUpdateWithoutMedicamentoInput = {
    idFarmacia?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type FarmaciaPoseeUncheckedUpdateManyWithoutMedicamentoInput = {
    idFarmacia?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type FarmaciaEntregaUpdateWithoutMedicamentoInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    FEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    Cantidad?: IntFieldUpdateOperationsInput | number
    farmacia?: FarmaciaUpdateOneRequiredWithoutEntregasNestedInput
  }

  export type FarmaciaEntregaUncheckedUpdateWithoutMedicamentoInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    idFarmacia?: IntFieldUpdateOperationsInput | number
    FEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    Cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type FarmaciaEntregaUncheckedUpdateManyWithoutMedicamentoInput = {
    idPaciente?: IntFieldUpdateOperationsInput | number
    idFarmacia?: IntFieldUpdateOperationsInput | number
    FEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    Cantidad?: IntFieldUpdateOperationsInput | number
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