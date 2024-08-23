/**
 * Pick properties from object
 * @param obj Object to pick
 * @param keys Keys to pick
 * @returns Picked object
 *
 * @example
 * ```ts
 * const obj = { a: 1, b: 2, c: 3 }
 * pick(obj, ['a', 'c']) // { a: 1, c: 3 }
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>
  keys.forEach((key) => {
    if (key in obj)
      result[key] = obj[key]
  })
  return result
}

/**
 * Omit properties from object
 * @param obj Object to omit
 * @param keys Keys to omit
 * @returns Omited object
 *
 * @example
 * ```ts
 * const obj = { a: 1, b: 2, c: 3 }
 * omit(obj, ['a', 'c']) // { b: 2 }
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>
  (Object.keys(obj) as K[]).forEach((key) => {
    if (!keys.includes(key))
      result[key] = obj[key]
  })
  return result
}

/**
 * Clone deep
 * @param obj Object to clone
 * @returns Cloned object
 *
 * @example
 * ```ts
 * const obj = clone({ a: 1, b:() => {}}) // obj = { a: 1, b: () => {} }
 */
export function clone<T>(obj: T): T {
  if (typeof obj !== 'object')
    return obj

  const cloned = {} as T
  for (const key in obj)
    cloned[key] = clone(obj[key])
  return cloned
}
