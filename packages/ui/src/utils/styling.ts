import { ClassValue, VariantProps, cx, tv } from "tailwind-variants"

export { type VariantProps, tv }

export function cn(...inputs: ClassValue[]) {
  return cx(inputs)({ twMerge: true })
}
