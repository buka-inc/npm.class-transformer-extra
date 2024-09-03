import { expect, test } from '@jest/globals'
import { plainToClass } from 'class-transformer'
import { Split } from './split'


test('@Split(",")', () => {
  class Test {
    @Split(',')
    value?: string
  }

  expect(plainToClass(Test, { value: '1,2,3' }).value).toEqual(['1', '2', '3'])
  expect(plainToClass(Test, { value: 123 }).value).toBe(123)
  expect(plainToClass(Test, { value: undefined }).value).toBeUndefined()
})

test('@Split(",", { default: () => [] })', () => {
  class Test {
    @Split(',', { default: () => [] })
    value?: string
  }

  expect(plainToClass(Test, { value: '1,2,3' }).value).toEqual(['1', '2', '3'])
  expect(plainToClass(Test, { value: 123 }).value).toEqual([])
  expect(plainToClass(Test, { value: undefined }).value).toEqual([])
})

test('@Split(",", { default: 1 })', () => {
  class Test {
    @Split(',', { default: 1 })
    value?: string
  }

  expect(plainToClass(Test, { value: '1,2,3' }).value).toEqual(['1', '2', '3'])
  expect(plainToClass(Test, { value: 123 }).value).toEqual(1)
  expect(plainToClass(Test, { value: undefined }).value).toEqual(1)
})
