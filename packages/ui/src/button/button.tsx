import { tv } from "tailwind-variants"

const button = tv({
  base: "box-border select-none border border-solid border-transparent inline-flex text-center align-middle items-center justify-center gap-2 before:box-border after:box-border",
  variants: {
    kind: {
      solid: "bg-hicontrast text-locontrast border-hicontrast",
      outline: "bg-locontrast text-hicontrast border-hicontrast",
      // subtle: "",
      // ghost: "",
      // link: "",
    },
    size: {
      sm: "h-6 text-sm px-2",
      md: "h-8 text-base px-3",
      lg: "h-10 text-lg px-4",
    },
    rounded: {
      true: "rounded-full",
      false: "rounded-sm",
    },
  },
  compoundVariants: [
    // {
    //   size: ["sm", "md", "lg"],
    //   kind: "link",
    //   className: "w-fit h-fit p-0",
    // },
    // {
    //   rounded: true,
    //   kind: "link",
    //   className: "rounded-sm",
    // },
  ],
  defaultVariants: {
    kind: "solid",
    size: "md",
    rounded: false,
  },
})

export { button }
