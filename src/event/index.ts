/**
 * Sleep function
 * @param ms Milliseconds to sleep
 * @returns Promise
 *
 * @example
 * ```ts
 * await sleep(1000)
 * ```
 */
export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Debounce function
 * @param fn Function to debounce
 * @param delay Delay in milliseconds
 * @returns Debounced function
 *
 * @example
 * ```ts
 * const debouncedFn = debounce((str) => {
 *   console.log(str)
 * }, 1000)
 * debouncedFn('Hello')
 * ```
 */
export function debounce(fn: (...args: any[]) => void, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  return function (...args: any[]) {
    if (timeoutId)
      clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      fn(...args)
      timeoutId = null
    }, delay)
  }
}

/**
 * Throttle function
 * @param fn Function to throttle
 * @param delay Delay in milliseconds
 * @returns Throttled function
 *
 * @example
 * ```ts
 * const throttledFn = throttle((str) => {
 *   console.log(str)
 * }, 1000)
 * throttledFn('Hello')
 * ```
 */
export function throttle(fn: (...args: any[]) => void, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  return function (...args: any[]) {
    if (!timeoutId) {
      fn(...args)
      timeoutId = setTimeout(() => {
        timeoutId = null
      }, delay)
    }
  }
}
