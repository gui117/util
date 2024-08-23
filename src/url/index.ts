/**
 * Convert query string to object
 * @param search Query string
 * @returns Object
 *
 * @example
 * ```ts
 * searchToQuery('?a=1&b=2') // { a: '1', b: '2' }
 * searchToQuery('a=1&b=2') // { a: '1', b: '2' }
 * ```
 */
export function searchToQuery(search: string) {
  const query: Record<string, string> = {}
  const searchStr = search.startsWith('?') ? search.slice(1) : search
  searchStr
    .split('&')
    .forEach((item) => {
      const [key, value] = item.split('=')
      query[key] = value
    })
  return query
}

/**
 * Convert object to query string
 * @param query Object
 * @returns Query string
 *
 * @example
 * ```ts
 * queryToSearch({ a: '1', b: '2' }) // 'a=1&b=2'
 * ```
 */
export function queryToSearch(query: Record<string, string>) {
  return Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
}
