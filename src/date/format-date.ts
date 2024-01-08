import { Transform, TransformOptions } from 'class-transformer'
import dayjs from 'dayjs'


export function FormatDate(template, options?: TransformOptions): PropertyDecorator {
  return Transform(({ value }) => dayjs(value).format(template), options)
}
