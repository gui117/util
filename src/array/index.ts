/**
 * Split an array into chunks
 * @param arr Array to split
 * @param size Number of elements in each chunk
 * @returns Array of chunks
 *
 * @example
 * ```ts
 * chunkArray([1, 2, 3, 4, 5, 6, 7], 3) // [[1, 2, 3], [4, 5, 6], [7]]
 * ```
 */
export function chunkArray(arr: unknown[], size: number) {
  return Array.from(
    { length: Math.ceil(arr.length / size) },
    (v, i) => arr.slice(i * size, i * size + size),
  )
}
