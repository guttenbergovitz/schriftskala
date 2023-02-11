import { test, it, expect, describe } from 'vitest'
import Skala from './skala'

describe('skala', () => {
  const skala = new Skala(16, 1.5, 'px')
  it('should have a base font size', () => {
    expect(skala.baseFontSize).toBeDefined()
  })
  it('should have a base line height', () => {
    expect(skala.baseLineHeight).toBeDefined()
  })
})

