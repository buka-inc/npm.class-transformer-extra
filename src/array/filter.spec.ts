import { expect, test } from '@jest/globals'
import { plainToClass } from 'class-transformer'
import { Filter } from './filter'


test('@Filter()', () => {
  class Test {
    @Filter((value: number) => value > 1)
    value!: string
  }

  expect(plainToClass(Test, { value: [0, 1, 2, 3, 4] }).value).toEqual([2, 3, 4])
  expect(plainToClass(Test, { value: undefined }).value).toBeUndefined()
})
