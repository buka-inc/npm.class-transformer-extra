import { expect, test } from '@jest/globals'
import { plainToClass } from 'class-transformer'
import { Filter, Flatten, FormatDate, Replace, Split, ToBigInt, ToBoolean, ToDate, ToLowerCase, ToNumber, ToString, Trim, Uniq, UniqBy, ToUpperCase } from '../src/index.js'

class Test {
  // Number
  @ToNumber()
  tNumber!: number

  @ToBigInt()
  tBigInt!: bigint

  // Boolean

  @ToBoolean()
  tBoolean!: boolean

  // String
  @ToString()
  tString!: string

  @Trim()
  trim!: string

  @Replace(/a/g, 'b')
  replace!: string

  @ToLowerCase()
  tLowerCase!: string

  @ToUpperCase()
  tUpperCase!: string

  @Split(',')
  split!: string[]

  // Date
  @ToDate()
  tDate!: Date

  @FormatDate('YYYY-MM-DD')
  formatDate!: string

  // Array
  @Filter((value: number) => value > 1)
  filter!: number[]

  @Flatten()
  flatten!: number[]

  @Uniq()
  uniq!: number[]

  @UniqBy(Math.abs)
  uniqBy!: number[]
}

test('class-transformer-extra', () => {
  const data = plainToClass(Test, {
    tNumber: '1',
    tBigInt: '1',
    tBoolean: 1,
    tString: 1,
    trim: ' 1 ',
    replace: 'aca',
    tLowerCase: 'A',
    tUpperCase: 'a',
    split: '1,2,3',
    tDate: '2020-01-01',
    formatDate: '2020/01/01',
    filter: [1, 2, 3],
    flatten: [1, [2, 3, [4, 5]]],
    uniq: [1, 1, 2, 2, 3, 3],
    uniqBy: [-1, 1, 2, -2, 3, -3],
  })

  expect(data.tNumber).toBe(1)
  expect(data.tBigInt).toBe(1n)
  expect(data.tBoolean).toBe(true)
  expect(data.tString).toBe('1')
  expect(data.trim).toBe('1')
  expect(data.replace).toBe('bcb')
  expect(data.tLowerCase).toBe('a')
  expect(data.tUpperCase).toBe('A')
  expect(data.split).toEqual(['1', '2', '3'])
  expect(data.tDate).toEqual(new Date('2020-01-01'))
  expect(data.formatDate).toBe('2020-01-01')
  expect(data.filter).toEqual([2, 3])
  expect(data.flatten).toEqual([1, 2, 3, 4, 5])
  expect(data.uniq).toEqual([1, 2, 3])
  expect(data.uniqBy).toEqual([-1, 2, 3])
})
