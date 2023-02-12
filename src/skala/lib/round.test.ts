import { describe, it, expect } from 'vitest'

import round from './round'

describe('round', () => {
  it('rounds a number to a given precision', () => {
    expect(round(1.23456789, 2)).toBe(1.23)
    expect(round(1.23456789, 3)).toBe(1.235)
    expect(round(1.23456789, 4)).toBe(1.2346)
    expect(round(1.23456789, 5)).toBe(1.23457)
    expect(round(1.23456789, 6)).toBe(1.234568)
    expect(round(1.23456789, 7)).toBe(1.2345679)
    expect(round(1.23456789, 8)).toBe(1.23456789)
    expect(round(1.23456789, 9)).toBe(1.23456789)
  })

  it('rounds a number to 2 decimal places by default', () => {
    expect(round(1.23456789)).toBe(1.23)
  })
})
