import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

import { cn } from "../utils"

const trigger = (inset?: boolean) =>
  cn(
    "flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-700 dark:data-[state=open]:bg-slate-700",
    inset && "pl-8"
  )

const content = cn(
  "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white p-1 text-slate-700 shadow-md animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400"
)

const item = cn(
  "relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700"
)

const label = (inset?: boolean) =>
  cn(
    "px-2 py-1.5 text-sm font-semibold text-slate-900 dark:text-slate-300",
    inset && "pl-8"
  )

const shortcut = cn("ml-auto text-xs tracking-widest text-slate-500")

const separator = cn("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-700")
export { DropdownMenu, trigger, content, item, label, separator, shortcut }
