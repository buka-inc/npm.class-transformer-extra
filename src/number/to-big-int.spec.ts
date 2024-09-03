import { expect, test } from '@jest/globals'
import { plainToClass } from 'class-transformer'
import { ToBigInt } from './to-big-int'


test('@ToBigInt()', () => {
  class Test {
    @ToBigInt()
    value?: boolean
  }

  expect(plainToClass(Test, { value: '214748364710' }).value).toBe(214748364710n)
  expect(plainToClass(Test, { value: undefined }).value).toBeNaN()
})

test('@ToBigInt({ optional: true })', () => {
  class Test {
    @ToBigInt({ optional: true })
    value?: boolean
  }

  expect(plainToClass(Test, { value: '214748364710' }).value).toBe(214748364710n)
  expect(plainToClass(Test, { value: undefined }).value).toBeUndefined()
})
