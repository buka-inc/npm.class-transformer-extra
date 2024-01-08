import { Transform, TransformOptions } from 'class-transformer'
import { flatten } from 'ramda'


export function Flatten(options?: TransformOptions): PropertyDecorator {
  return Transform(
    ({ value }) => (Array.isArray(value) ? flatten(value) as unknown : value as unknown),
    options,
  )
}


