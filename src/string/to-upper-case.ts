
import { Transform, TransformOptions } from 'class-transformer'


export function ToUpperCase(options?: TransformOptions): PropertyDecorator {
  return Transform(
    function ToUpperCaseTransform({ value }) {
      return (typeof value === 'string' ? value.toUpperCase() : value)
    },
    options,
  )
}
