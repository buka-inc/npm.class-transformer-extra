import { expect, test } from '@jest/globals'
import { ToBoolean } from './to-boolean'
import { plainToClass } from 'class-transformer'

test('@ToBoolean(1)', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expect(() => ToBoolean(1 as any)).toThrowError()
})


test('@ToBoolean(["0", v => v === "false"], { optional: true })', () => {
  class Test {
    @ToBoolean(['0', (v) => v === 'false'], { optional: true })
    value?: boolean
  }

  expect(plainToClass(Test, { value: '1' }).value).toBe(true)
  expect(plainToClass(Test, { value: '2' }).value).toBe(true)
  expect(plainToClass(Test, { value: undefined }).value).toBeUndefined()
  expect(plainToClass(Test, { value: '0' }).value).toBe(false)
  expect(plainToClass(Test, { value: 'false' }).value).toBe(false)
})

test('@ToBoolean((v: any) => !["false", "0", 0, false, "", undefined].includes(v), { optional: true })', () => {
  class Test {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @ToBoolean((v: any) => !['false', '0', 0, false, '', undefined].includes(v), { optional: true })
    value?: boolean
  }

  expect(plainToClass(Test, { value: undefined }).value).toBeUndefined()
  expect(plainToClass(Test, { value: '0' }).value).toBe(false)
  expect(plainToClass(Test, { value: 0 }).value).toBe(false)
  expect(plainToClass(Test, { value: 'false' }).value).toBe(false)
  expect(plainToClass(Test, { value: '' }).value).toBe(false)
  expect(plainToClass(Test, { value: '1' }).value).toBe(true)
  expect(plainToClass(Test, { value: 'true' }).value).toBe(true)
})
