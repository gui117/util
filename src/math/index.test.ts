import { describe, expect, it } from 'vitest'
import { add, baseAdd, baseMultiply, clamp, divide, lerp, multiply, precision, subtract, toFixed } from '.'

describe('math', () => {
  it('toFixed', () => {
    expect(toFixed(1.004, 2).toString()).toEqual('1')
  })

  it('presision', () => {
    expect(precision(0.142857)).toEqual(6)
    expect(precision(-1)).toEqual(0)
  })

  it('baseAdd', () => {
    expect(baseAdd(0.1, 0.2)).toEqual(0.3)
  })

  it('add', () => {
    expect(add(0.1, 0.2, 0.3)).toEqual(0.6)
  })

  it('substract', () => {
    expect(subtract(0.3, 0.1)).toEqual(0.2)
  })

  it('baseMultiply', () => {
    expect(baseMultiply(0.1, 0.2)).toEqual(0.02)
  })

  it('multiply', () => {
    expect(multiply(0.1, 0.2, 0.3)).toEqual(0.006)
  })

  it('divide', () => {
    expect(divide(0.3, 0.0001)).toEqual(3000)
    expect(divide(0.0003, 0.1)).toEqual(0.003)
  })

  it('clamp', () => {
    expect(clamp(2, 1, 3)).toEqual(2)
    expect(clamp(0, 1, 3)).toEqual(1)
    expect(clamp(4, 1, 3)).toEqual(3)
  })

  it('lerp', () => {
    expect(lerp(0, 2, 0.5)).toEqual(1)
  })
})
