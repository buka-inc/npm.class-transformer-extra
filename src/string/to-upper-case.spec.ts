import { expect, test } from '@jest/globals'
import { plainToClass } from 'class-transformer'
import { ToUpperCase } from './to-upper-case'


test('@ToUpperCase()', () => {
  class Test {
    @ToUpperCase()
    value?: string
  }

  expect(plainToClass(Test, { value: 'aBC' }).value).toBe('ABC')
  expect(plainToClass(Test, { value: undefined }).value).toBeUndefined()
})
