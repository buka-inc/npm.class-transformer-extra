import { Transform, TransformOptions } from 'class-transformer'


export function Replace(searchValue: string | RegExp, replaceValue: string, options?: TransformOptions): PropertyDecorator {
  return Transform(
    ({ value }) => (typeof value === 'string' ? value.replace(searchValue, replaceValue) : value as unknown),
    options
  )
}

