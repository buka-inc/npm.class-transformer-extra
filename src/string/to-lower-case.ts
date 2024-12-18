import { Transform, TransformOptions } from 'class-transformer'


export function ToLowerCase(options?: TransformOptions): PropertyDecorator {
  return Transform(
    function ToLowerCaseTransform({ value }) {
      return (typeof value === 'string' ? value.toLowerCase() : value as unknown)
    },
    options,
  )
}
