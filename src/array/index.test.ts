import { describe, expect, it } from 'vitest'
import { chunkArray } from '.'

describe('array', () => {
  it('chunkArray', () => {
    expect(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]])
  })
})
