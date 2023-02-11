import { test, it, expect, describe } from 'vitest'
import Skala from './skala'

describe('skala 10 | 2', () => {
  let skala = new Skala(10, 2)
  test('up 1', () => {
    expect(skala.up(1).fontSize).toEqual(20)
  })
  test('up 2', () => {
    expect(skala.up(2).fontSize).toEqual(40)
  })
  test('up 3', () => {
    expect(skala.up(3).fontSize).toEqual(80)
  })
})

describe('skala 10 | 1.5', () => {
  let skala = new Skala(10, 1.5)
  test('up 1', () => {
    expect(skala.up(1).fontSize).toEqual(15)
  })
  test('up 2', () => {
    expect(skala.up(2).fontSize).toEqual(22.5)
  })
  test('up 3', () => {
    expect(skala.up(3).fontSize).toEqual(33.75)
  })
  test('up 4', () => {
    expect(skala.up(4).fontSize).toEqual(50.625)
  })
  test('up 5', () => {
    expect(skala.up(5).fontSize).toEqual(75.9375)
  })
  test('up 6', () => {
    expect(skala.up(6).fontSize).toEqual(113.90625)
  })
})


