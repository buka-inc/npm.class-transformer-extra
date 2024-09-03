import { expect, test } from '@jest/globals'
import { plainToClass } from 'class-transformer'
import { Flatten } from './flatten'


test('@Flatten()', () => {
  class Test {
    @Flatten()
    value!: string
  }

  expect(plainToClass(Test, { value: [0, [1, [2, 3], 4]] }).value).toEqual([0, 1, 2, 3, 4])
  expect(plainToClass(Test, { value: undefined }).value).toBeUndefined()
})
