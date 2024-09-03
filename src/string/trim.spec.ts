import { expect, test } from '@jest/globals'
import { plainToClass } from 'class-transformer'
import { Trim } from './trim'


test('@ToString()', () => {
  class Test {
    @Trim()
    value!: string
  }

  expect(plainToClass(Test, { value: '  abc  ' }).value).toBe('abc')
  expect(plainToClass(Test, { value: undefined }).value).toBeUndefined()
})
