import { Transform, TransformOptions } from 'class-transformer'


export function ToDate(options?: TransformOptions): PropertyDecorator {
  return Transform(({ value }) => new Date(value), options)
}
