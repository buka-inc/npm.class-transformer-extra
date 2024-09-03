import { expect, test } from '@jest/globals'
import { plainToClass } from 'class-transformer'
import { ToLowerCase } from './to-lower-case'


test('@ToLowerCase()', () => {
  class Test {
    @ToLowerCase()
    value?: string
  }

  expect(plainToClass(Test, { value: 'ABC' }).value).toBe('abc')
  expect(plainToClass(Test, { value: undefined }).value).toBeUndefined()
})
