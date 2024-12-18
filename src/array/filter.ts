import { Transform, TransformOptions } from 'class-transformer'


export function Filter<T>(predicate: (value: T, index: number, array: T[]) => boolean, options?: TransformOptions): PropertyDecorator {
  return Transform(
    function FilterTransform({ value }) {
      return (Array.isArray(value) ? value.filter(predicate) : value as unknown)
    },
    options,
  )
}
