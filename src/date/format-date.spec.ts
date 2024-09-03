import { expect, test } from '@jest/globals'
import { plainToClass } from 'class-transformer'
import { FormatDate } from './format-date'


test('@FormatDate("YYYY-MM-DD")', () => {
  class Test {
    @FormatDate('YYYY-MM-DD', { optional: true })
    value?: string
  }

  expect(plainToClass(Test, { value: new Date('2020-01-01') }).value).toEqual('2020-01-01')
  expect(plainToClass(Test, { value: undefined }).value).toBeUndefined()
})
