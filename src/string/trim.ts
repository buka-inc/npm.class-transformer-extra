import { Transform } from 'class-transformer'


export function Trim(): PropertyDecorator {
  return Transform(
    function TrimTransform({ value }) {
      return (typeof value === 'string' ? value.trim() : value as unknown)
    },
  )
}
