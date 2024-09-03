import { expect, test } from '@jest/globals'
import { plainToClass } from 'class-transformer'
import { ToNumber } from './to-number'


test('@ToNumber()', () => {
  class Test {
    @ToNumber()
    value?: boolean
  }

  expect(plainToClass(Test, { value: '1.1' }).value).toBe(1.1)
  expect(plainToClass(Test, { value: '2' }).value).toBe(2)
  expect(plainToClass(Test, { value: undefined }).value).toBeNaN()
  expect(plainToClass(Test, { value: '0' }).value).toBe(0)
})

test('@ToNumber({ optional: true })', () => {
  class Test {
    @ToNumber({ optional: true })
    value?: boolean
  }

  expect(plainToClass(Test, { value: '1.1' }).value).toBe(1.1)
  expect(plainToClass(Test, { value: '2' }).value).toBe(2)
  expect(plainToClass(Test, { value: undefined }).value).toBeUndefined()
  expect(plainToClass(Test, { value: '0' }).value).toBe(0)
})
