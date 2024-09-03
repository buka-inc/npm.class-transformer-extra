import { Transform, TransformOptions } from 'class-transformer'


export function Filter<T>(predicate: (value: T, index: number, array: T[]) => boolean, options?: TransformOptions): PropertyDecorator {
  return Transform(
    ({ value }) => (Array.isArray(value) ? value.filter(predicate) : value as unknown),
    options,
  )
}
