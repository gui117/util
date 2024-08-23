import { describe, expect, it, vi } from 'vitest'
import { debounce, sleep, throttle } from '.'

describe('event', () => {
  it('sleep', async () => {
    const fn = vi.fn()
    fn()
    sleep(100).then(fn)
    expect(fn).toBeCalledTimes(1)
    setTimeout(() => {
      expect(fn).toBeCalledTimes(2)
    }, 200)
  })

  it('throttle', () => {
    const fn = vi.fn()
    const throttledFn = throttle(fn, 1000)
    throttledFn(1)
    throttledFn(2)
    expect(fn).toBeCalledTimes(1)
  })

  it('debounce', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 1000)
    debouncedFn(1)
    debouncedFn(2)
    debouncedFn(3)
    expect(fn).toBeCalledTimes(0)
  })
})
