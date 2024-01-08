import { Transform } from 'class-transformer'


export function Trim(): PropertyDecorator {
  return Transform(({ value }) => (typeof value === 'string' ? value.trim() : value as unknown))
}
