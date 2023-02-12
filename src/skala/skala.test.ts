import { test, expect, describe } from 'vitest'
import Skala from './skala'

describe('class structure', () => {
  test('should be a class', () => {
    expect(Skala).toBeInstanceOf(Function)
    expect(Skala).toHaveProperty('prototype')
    expect(Skala.prototype).toHaveProperty('up')
    expect(Skala.prototype.up).toBeInstanceOf(Function)
    expect(Skala.prototype).toHaveProperty('down')
    expect(Skala.prototype.down).toBeInstanceOf(Function)
  })
})

describe('up', () => {
  const skala = new Skala(10, 1.5, 2, 'px', 0)
  test('should return a object', () => {
    expect(skala.up(0)).toBeInstanceOf(Object)
  })
  test('should return a object with fs, lh, unit, printFontSize, printLineHeight', () => {
    expect(skala.up(0)).toHaveProperty('fs')
    expect(skala.up(0)).toHaveProperty('lh')
    expect(skala.up(0)).toHaveProperty('unit')
    expect(skala.up(0)).toHaveProperty('printFontSize')
    expect(skala.up(0)).toHaveProperty('printLineHeight')
  })
  test('should return a object with fs, lh, unit, printFontSize, printLineHeight with correct values', () => {
    expect(skala.up(0).fs).toBe(10)
    expect(skala.up(0).lh).toBe(20)
    expect(skala.up(0).unit).toBe('px')
    expect(skala.up(0).printFontSize).toBe('10px')
    expect(skala.up(0).printLineHeight).toBe('20px')
    expect(skala.up(1).fs).toBe(15)
    expect(skala.up(1).lh).toBe(30)
    expect(skala.up(1).unit).toBe('px')
    expect(skala.up(1).printFontSize).toBe('15px')
    expect(skala.up(1).printLineHeight).toBe('30px')
    expect(skala.up(2).fs).toBe(23)
    expect(skala.up(2).lh).toBe(45)
    expect(skala.up(2).unit).toBe('px')
    expect(skala.up(2).printFontSize).toBe('23px')
    expect(skala.up(2).printLineHeight).toBe('45px')
  })
})

describe('down', () => {
  const skala = new Skala(10, 1.5, 2, 'px', 0)
  test('should return a object', () => {
    expect(skala.down(0)).toBeInstanceOf(Object)
  })
  test('should return a object with fs, lh, unit, printFontSize, printLineHeight', () => {
    expect(skala.down(0)).toHaveProperty('fs')
    expect(skala.down(0)).toHaveProperty('lh')
    expect(skala.down(0)).toHaveProperty('unit')
    expect(skala.down(0)).toHaveProperty('printFontSize')
    expect(skala.down(0)).toHaveProperty('printLineHeight')
  })
  test('should return a object with fs, lh, unit, printFontSize, printLineHeight with correct values', () => {
    expect(skala.down(0).fs).toBe(10)
    expect(skala.down(0).lh).toBe(20)
    expect(skala.down(0).unit).toBe('px')
    expect(skala.down(1).fs).toBe(7)
    expect(skala.down(1).lh).toBe(13)
  })
})
