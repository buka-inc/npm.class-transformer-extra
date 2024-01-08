/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Transform, TransformOptions } from 'class-transformer'


export function toUpperCase(options?: TransformOptions): PropertyDecorator {
  return Transform(
    ({ value }) => (typeof value === 'string' ? value.toUpperCase() : value),
    options
  )
}
