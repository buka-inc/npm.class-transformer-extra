import { Transform } from 'class-transformer'
import { TransformExtraOptions } from '~/types/transform-extra-options.js'
import * as R from 'ramda'


export function Split(separator: string, options?: TransformExtraOptions): PropertyDecorator {
  return Transform(
    ({ value }) => {
      if (typeof value === 'string') {
        return value.split(separator)
      }

      if (options && 'default' in options) {
        if (typeof options.default === 'function') {
          return options.default(value) as unknown
        }

        return options.default
      }

      return value as unknown
    },
    options ? R.omit(['default'], options) : undefined,
  )
}
