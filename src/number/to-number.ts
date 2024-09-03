import { Transform, TransformOptions } from 'class-transformer'


export interface ToNumberTransformOptions extends TransformOptions {
  optional?: boolean
}

export function ToNumber(options?: ToNumberTransformOptions): PropertyDecorator {
  return Transform(
    ({ value }) => {
      if (options?.optional && value === undefined) return undefined
      return Number(value)
    },
    options,
  )
}
