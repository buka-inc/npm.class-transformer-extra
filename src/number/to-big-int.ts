import { Transform, TransformOptions } from 'class-transformer'


export function ToBigInt(options?: TransformOptions): PropertyDecorator {
  return Transform(
    ({ value }) => {
      try {
        return BigInt(value)
      } catch {
        return value as unknown
      }
    },
    options
  )
}
