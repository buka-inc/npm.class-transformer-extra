import { Transform, TransformOptions } from 'class-transformer'


export function ToString(options?: TransformOptions): PropertyDecorator {
  return Transform(
    ({ value }) => String(value),
    options,
  )
}
