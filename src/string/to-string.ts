import { Transform, TransformOptions } from 'class-transformer'


interface ToStringTransformOptions extends TransformOptions {
  optional?: boolean
}


export function ToString(options?: ToStringTransformOptions): PropertyDecorator {
  return Transform(
    ({ value }) => {
      if (options?.optional && value === undefined) return undefined
      return String(value)
    },
    options,
  )
}
