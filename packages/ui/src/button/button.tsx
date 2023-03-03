import * as React from "react"

interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 py-2 px-4 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-100 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800"
    >
      {children}
    </button>
  )
}

export default Button
