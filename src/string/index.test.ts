import { describe, expect, it } from 'vitest'
import { capitalize, randomStr } from '.'

describe('string', () => {
  it(`capitalize`, () => {
    expect(capitalize('hello')).toEqual('Hello')
  })

  it('randomStr', () => {
    expect(randomStr(10)).toHaveLength(10)
    expect(typeof randomStr(10)).toEqual('string')
  })
})
