
import { Transform, TransformOptions } from 'class-transformer'


export function toUpperCase(options?: TransformOptions): PropertyDecorator {
  return Transform(
    function ToUpperCaseTransform({ value }) {
      return (typeof value === 'string' ? value.toUpperCase() : value)
    },
    options,
  )
}
