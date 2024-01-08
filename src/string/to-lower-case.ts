import { Transform, TransformOptions } from 'class-transformer'


export function ToLowerCase(options?: TransformOptions): PropertyDecorator {
  return Transform(
    ({ value }) => (typeof value === 'string' ? value.toLowerCase() : value as unknown),
    options
  )
}
