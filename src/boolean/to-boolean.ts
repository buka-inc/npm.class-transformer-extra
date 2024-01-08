import { Transform, TransformOptions } from 'class-transformer'


export function ToBoolean(options?: TransformOptions): PropertyDecorator {
  return Transform(({ value }) => Boolean(value), options)
}
