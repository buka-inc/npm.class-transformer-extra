import { Transform, TransformOptions } from 'class-transformer'
import { uniqBy } from 'ramda'


export function UniqBy(fn: (a: any) => any, options?: TransformOptions): PropertyDecorator {
  return Transform(
    ({ value }) => (Array.isArray(value) ? uniqBy(fn, value) as unknown : value as unknown),
    options,
  )
}

