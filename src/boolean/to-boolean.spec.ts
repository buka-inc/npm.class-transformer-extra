import { expect, test } from '@jest/globals'
import { ToBoolean } from './to-boolean'
import { plainToClass } from 'class-transformer'

class Test {
  @ToBoolean(['0'], { optional: true })
  value?: boolean
}

test('toBoolean', () => {
  expect(plainToClass(Test, { value: '1' }).value).toBe(true)
  expect(plainToClass(Test, { value: '2' }).value).toBe(true)
  expect(plainToClass(Test, { value: undefined }).value).toBeUndefined()
  expect(plainToClass(Test, { value: '0' }).value).toBe(false)
})
