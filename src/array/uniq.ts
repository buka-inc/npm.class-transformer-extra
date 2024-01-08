import { Transform, TransformOptions } from 'class-transformer'
import { uniq } from 'ramda'


export function Uniq(options?: TransformOptions): PropertyDecorator {
  return Transform(
    ({ value }) => (Array.isArray(value) ? uniq(value) as unknown : value as unknown),
    options,
  )
}

