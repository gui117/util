/**
 * Number to fixed remove trailing zeros.
 *
 * @param num - number to be fixed.
 * @param len - number of digits to be fixed.
 *
 * @example
 * ```
 * toFixed(1.004, 2) // 1
 * ```
 */
export function toFixed(num: number, len: number): number {
  return Number.parseFloat(num.toFixed(len))
}

/**
 * The number precision.
 * @param num - The number to get the precision.
 *
 * @example
 * ```ts
 * precision(1.004) // 3
 * ```
 */
export function precision(num: number): number {
  return num.toString().split('.')[1]?.length || 0
}

/**
 * Accurately add two numbers without floating point errors.
 * @param num1 - The first number to add.
 * @param num2 - The second number to add.
 *
 * @example
 * ```ts
 * add(0.1, 0.2) // 0.3
 * ```
 */
export function baseAdd(num1: number, num2: number) {
  const p = Math.max(precision(num1), precision(num2))
  const multiple = 10 ** (p + 1)
  return toFixed((num1 * multiple + num2 * multiple) / multiple, multiple)
}

/**
 * Accurately add without floating point errors.
 * @param args - The numbers to add.
 * ```ts
 * add(0.1, 0.2, 0.3) // 0.6
 * ```
 */
export function add(...args: number[]) {
  return args.reduce((acc, num) => baseAdd(acc, num), 0)
}

/**
 * Accurately subtract without floating point errors.
 * @param num1 - The number to subtract from.
 * @param num2 - The number to subtract.
 *
 * @example
 * ```ts
 * subtract(0.3, 0.1) // 0.2
 * ```
 */
export function subtract(num1: number, num2: number) {
  return baseAdd(num1, -num2)
}

/**
 * Accurately multiply two numbers without floating point errors.
 * @param num1 - The number to multiply.
 * @param num2 - The number to multiply.
 *
 * @example
 * ```ts
 * multiply(0.1, 0.2) // 0.02
 * ```
 */
export function baseMultiply(num1: number, num2: number) {
  const multiple = precision(num1) + precision(num2)
  const newNum1 = Number(num1.toString().replace('.', ''))
  const newNum2 = Number(num2.toString().replace('.', ''))
  return (newNum1 * newNum2) / 10 ** multiple
}

/**
 * Accurately multiply without floating point errors.
 * @param args - The numbers to multiply.
 *
 * @example
 * ```ts
 * multiply(0.1, 0.2, 0.3) // 0.006
 * ```
 */
export function multiply(...args: number[]) {
  return args.reduce((acc, num) => baseMultiply(acc, num), 1)
}

/**
 * Accurately divide two numbers without floating point errors.
 * @param num1 - The number to divide.
 * @param num2 - The number to divide by.
 *
 * @example
 * ```ts
 * divide(0.3, 0.0001) // 3000
 * ```1
 */
export function divide(num1: number, num2: number) {
  const multiple = precision(num2) - precision(num1)
  const newNum1 = Number(num1.toString().replace('.', ''))
  const newNum2 = Number(num2.toString().replace('.', ''))
  return (newNum1 / newNum2) * 10 ** multiple
}

/**
 * Clamp the number between min and max.
 * @param n - number to clamp
 * @param min - min value
 * @param max - max value
 *
 * @example
 * ```ts
 * clamp(2, 1, 3) // 2
 * clamp(0, 1, 2) // 1
 * clamp(4, 1, 3) // 3
 * ```
 */
export function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

/**
 * Linearly interpolates between `min` and `max` based on `t`
 *
 * @category Math
 * @param min The minimum value
 * @param max The maximum value
 * @param t The interpolation value clamped between 0 and 1
 *
 * @example
 * ```
 * const value = lerp(0, 2, 0.5) // value will be 1
 * ```
 */
export function lerp(min: number, max: number, t: number) {
  const interpolation = clamp(t, 0.0, 1.0)
  return min + (max - min) * interpolation
}
