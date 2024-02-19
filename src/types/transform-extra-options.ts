/* eslint-disable @typescript-eslint/no-explicit-any */
import { TransformOptions } from 'class-transformer'


export interface TransformExtraOptions extends TransformOptions {
  /**
   * if the value cannot be transformed, the default value will be used.
   */
  default?: number | string | boolean | undefined | ((value: unknown) => any)
}
