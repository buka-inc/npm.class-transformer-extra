import { Transform, TransformOptions } from 'class-transformer'


export function ToNumber(options?: TransformOptions): PropertyDecorator {
  return Transform(
    ({ value }) => Number(value),
    options
  )
}
