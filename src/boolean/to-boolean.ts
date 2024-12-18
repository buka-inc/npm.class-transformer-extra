import { Transform, TransformOptions } from 'class-transformer'


type ToBooleanFn = (value: unknown) => boolean
type ToBooleanBasicType = number | string | boolean | undefined | ToBooleanFn
type ToBooleanParams = ToBooleanBasicType[] | ToBooleanFn

export interface ToBooleanTransformOptions extends TransformOptions {
  optional?: boolean
}

function matchBasicType(basicType: ToBooleanBasicType, value: unknown): boolean {
  if (typeof basicType === 'function') return basicType(value)
  return basicType === value
}

function matchBasicTypes(basicTypes: ToBooleanBasicType[], value: unknown): boolean {
  return basicTypes.some((basicType) => matchBasicType(basicType, value))
}

function buildMapping(falseValuesOrTransformer: ToBooleanParams, options?: ToBooleanTransformOptions): ((value) => boolean | undefined) {
  if (typeof falseValuesOrTransformer === 'function') {
    return (value) => {
      if (options?.optional && value === undefined) return undefined
      return falseValuesOrTransformer(value)
    }
  }

  const falseValues = falseValuesOrTransformer

  return (value): boolean | undefined => {
    if (options?.optional && value === undefined) return undefined

    return !matchBasicTypes(falseValues, value)
  }
}

export function ToBoolean(falseValuesOrTransformer: ToBooleanParams = Boolean, options?: ToBooleanTransformOptions): PropertyDecorator {
  if (typeof falseValuesOrTransformer !== 'function' && !Array.isArray(falseValuesOrTransformer)) {
    throw new TypeError('Invalid Parameter')
  }

  const to = buildMapping(falseValuesOrTransformer, options)

  return Transform(
    function ToBooleanTransform({ value }) {
      return to(value)
    },
    options,
  )
}
