/* eslint-disable @typescript-eslint/no-explicit-any */
import { Transform, TransformOptions } from 'class-transformer'
import * as R from 'ramda'


export interface SplitTransformOptions extends TransformOptions {
  /**
   * if the value cannot be transformed, the default value will be used.
   */
  default?: number | string | boolean | undefined | ((value: unknown) => any)
}


export function Split(separator: string, options?: SplitTransformOptions): PropertyDecorator {
  return Transform(
    ({ value }) => {
      if (typeof value === 'string') {
        return value.split(separator)
      }

      if (options && 'default' in options) {
        if (typeof options.default === 'function') {
          return options.default(value) as unknown
        }

        return options.default as unknown
      }

      return value as unknown
    },
    options ? R.omit(['default'], options) : undefined,
  )
}
