export type DotNestedKeys<T> = (
    T extends object
        ? {
              [K in keyof T]-?:
                  | `${K & string}`
                  | `${K & string}.${DotNestedKeys<T[K]>}`;
          }[keyof T]
        : ''
) extends infer D
    ? Extract<D, string>
    : never;
