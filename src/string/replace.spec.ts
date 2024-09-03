import { expect, test } from '@jest/globals'
import { plainToClass } from 'class-transformer'
import { Replace } from './replace'


test('@Replace(/a/g, "b")', () => {
  class Test {
    @Replace(/a/g, 'b')
    value!: string
  }

  expect(plainToClass(Test, { value: 'abc' }).value).toBe('bbc')
  expect(plainToClass(Test, { value: undefined }).value).toBeUndefined()
  expect(plainToClass(Test, { value: 123 }).value).toBe(123)
})
