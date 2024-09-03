import { Transform, TransformOptions } from 'class-transformer'


export interface ToBigIntTransformOptions extends TransformOptions {
  optional?: boolean
}

/**
 * @returns BigInt Or NaN
 */
export function ToBigInt(options?: ToBigIntTransformOptions): PropertyDecorator {
  return Transform(
    ({ value }) => {
      if (options?.optional && value === undefined) return undefined

      try {
        return BigInt(value)
      } catch {
        return NaN
      }
    },
    options,
  )
}
