import * as React from "react"

import { VariantProps } from "tailwind-variants"

import { cn } from "../utils"
import { button } from "./button"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, kind, size, ...props }, ref) => {
    return (
      <button
        className={cn(button({ kind, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
export { Button }
