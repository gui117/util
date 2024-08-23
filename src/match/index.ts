/* eslint-disable regexp/prefer-question-quantifier */
/* eslint-disable regexp/no-useless-quantifier */
/* eslint-disable regexp/prefer-d */
/* eslint-disable regexp/no-useless-non-capturing-group */
/* eslint-disable regexp/use-ignore-case */

/**
 * Check if string is valid email
 * @param email
 * @returns If email is valid
 *
 * @example
 * ```ts
 * isEmail('a@b.c') // true
 * ```
 */
export function isEmail(email: string) {
  return /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/i.test(email)
}

/**
 * Check if string is valid phone
 * @param phone
 * @returns If phone is valid
 *
 * @example
 * ```ts
 * isPhone('123456789') // true
 * ```
 */
export function isPhone(phone: string) {
  return /^1[3-9]\d{9}$/.test(phone)
}

/**
 * Check if string is valid url
 * @param url
 * @returns If url is valid
 *
 * @example
 * ```ts
 * isUrl('https://www.baidu.com') // true
 * ```
 */
export function isUrl(url: string) {
  return /^https?:\/\/.+$/.test(url)
}

// Based on Node.js net module.
// https://github.com/Uzlopak/node/blob/d4675cf5801e22b258b792752f808bef6468a690/lib/internal/net.js
const v4Seg = '(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])'
const v4Str = `(?:${v4Seg}\\.){3}${v4Seg}`

const IPv4Reg = new RegExp(`^${v4Str}$`)

/**
 * Check if string is valid ipv4
 * @see https://github.com/nodejs/node/blob/067ab06f21e901dce5cd5ec36c4aae80abcb11bd/lib/internal/net.js#L33
 * @param ip  The ip to check
 * @returns If ip is valid
 *
 * @example
 * ```ts
 * isIp('127.0.0.1') // true
 * ```
 */
export function isIpv4(ip: string) {
  return IPv4Reg.test(ip)
}

// IPv6 Segment
// Based on Node.js net module.
// https://github.com/Uzlopak/node/blob/d4675cf5801e22b258b792752f808bef6468a690/lib/internal/net.js
const v6Seg = '(?:[0-9a-fA-F]{1,4})'
const IPv6Reg = new RegExp('^(?:'
  + `(?:${v6Seg}:){7}(?:${v6Seg}|:)|`
  + `(?:${v6Seg}:){6}(?:${v4Str}|:${v6Seg}|:)|`
  + `(?:${v6Seg}:){5}(?::${v4Str}|(?::${v6Seg}){1,2}|:)|`
  + `(?:${v6Seg}:){4}(?:(?::${v6Seg}){0,1}:${v4Str}|(?::${v6Seg}){1,3}|:)|`
  + `(?:${v6Seg}:){3}(?:(?::${v6Seg}){0,2}:${v4Str}|(?::${v6Seg}){1,4}|:)|`
  + `(?:${v6Seg}:){2}(?:(?::${v6Seg}){0,3}:${v4Str}|(?::${v6Seg}){1,5}|:)|`
  + `(?:${v6Seg}:){1}(?:(?::${v6Seg}){0,4}:${v4Str}|(?::${v6Seg}){1,6}|:)|`
  + `(?::(?:(?::${v6Seg}){0,5}:${v4Str}|(?::${v6Seg}){1,7}|:))`
  + ')(?:%[0-9a-zA-Z-.:]+)?$')

/**
 * Check if string is valid ipv6
 * @see https://github.com/nodejs/node/blob/067ab06f21e901dce5cd5ec36c4aae80abcb11bd/[0-9a-fA-F]lib/internal/net.js#L40
 * @param ip The ip to check
 * @returns If ip is valid
 *
 * @example
 * ```ts
 * isIp('::1') // true
 * ```
 */
export function isIpv6(ip: string) {
  return IPv6Reg.test(ip)
}

/**
 * Check if string is valid ip
 * @param ip The ip to check
 * @returns If ip is valid, return the version, else return 0
 *
 * @example
 * ```ts
 * isIp('127.0.0.1') // 4
 * isIp('::1') // 6
 * isIp('localhost') // 0
 * ```
 */
export function isIp(ip: string): number {
  let version = 0
  if (isIpv4(ip))
    version = 4

  else if (isIpv6(ip))
    version = 6

  return version
}
