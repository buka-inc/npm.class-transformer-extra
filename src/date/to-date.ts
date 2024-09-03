import { Transform, TransformOptions } from 'class-transformer'


interface ToDateTransformOptions extends TransformOptions {
  optional?: boolean
}

export function ToDate(options?: ToDateTransformOptions): PropertyDecorator {
  return Transform(
    ({ value }) => {
      if (options?.optional && value === undefined) return undefined
      return new Date(value)
    },

    options,
  )
}
