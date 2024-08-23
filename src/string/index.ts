/**
 * Capitalize the first letter to uppercase, and the rest to lowercase.
 * @param str - string to be capitalized.
 * @example
 * ```ts
 * capitalize('hello') // 'Hello'
 * ```
 */
export function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

// https://github.com/ai/nanoid
const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
/**
 * Generate a random string
 * @category String
 */
export function randomStr(size = 16, dict = urlAlphabet) {
  let id = ''
  let i = size
  const len = dict.length
  while (i--)
    id += dict[(Math.random() * len) | 0]
  return id
}
