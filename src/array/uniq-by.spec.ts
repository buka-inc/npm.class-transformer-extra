import { expect, test } from '@jest/globals'
import { plainToClass } from 'class-transformer'
import { UniqBy } from './uniq-by'


test('@UniqBy(Math.abs)', () => {
  class Test {
    @UniqBy(Math.abs)
    value?: number[]
  }

  expect(plainToClass(Test, { value: [-1, 0, 1] }).value).toEqual([-1, 0])
  expect(plainToClass(Test, { value: undefined }).value).toBeUndefined()
})
