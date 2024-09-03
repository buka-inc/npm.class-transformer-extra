import { expect, test } from '@jest/globals'
import { plainToClass } from 'class-transformer'
import { Uniq } from './uniq'


test('@UniqBy(Math.abs)', () => {
  class Test {
    @Uniq()
    value?: number[]
  }

  expect(plainToClass(Test, { value: [1, 1, 2, 3] }).value).toEqual([1, 2, 3])
  expect(plainToClass(Test, { value: undefined }).value).toBeUndefined()
})
