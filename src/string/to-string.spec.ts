import { expect, test } from '@jest/globals'
import { plainToClass } from 'class-transformer'
import { ToString } from './to-string'


test('@ToString()', () => {
  class Test {
    @ToString({ optional: true })
    value?: string
  }

  expect(plainToClass(Test, { value: 123 }).value).toBe('123')
  expect(plainToClass(Test, { value: undefined }).value).toBeUndefined()
})
