import { Transform, TransformOptions } from 'class-transformer'
import dayjs from 'dayjs'


export interface FormatDateTransformOptions extends TransformOptions {
  optional?: boolean
}

export function FormatDate(template, options?: FormatDateTransformOptions): PropertyDecorator {
  return Transform(
    function FormatDateTransform({ value }) {
      if (options?.optional && value === undefined) return undefined
      return dayjs(value).format(template)
    },
    options,
  )
}
