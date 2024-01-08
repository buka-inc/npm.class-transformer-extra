import { Transform, TransformOptions } from 'class-transformer'


export function Split(separator: string, options?: TransformOptions): PropertyDecorator {
  return Transform(
    ({ value }) => ((typeof value === 'string') ? value.split(separator) : value as unknown),
    options,
  )
}
