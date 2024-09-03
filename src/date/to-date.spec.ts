import { expect, test } from '@jest/globals'
import { plainToClass } from 'class-transformer'
import { ToDate } from './to-date'


test('@ToDate()', () => {
  class Test {
    @ToDate({ optional: true })
    value?: Date
  }

  expect(plainToClass(Test, { value: '2020-01-01' }).value).toEqual(new Date('2020-01-01'))
  expect(plainToClass(Test, { value: undefined }).value).toBeUndefined()
})
