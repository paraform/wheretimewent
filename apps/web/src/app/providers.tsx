"use client"

import * as React from "react"

import { ThemeProvider } from "next-themes"

export function Providers(props: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {props.children}
    </ThemeProvider>
  )
}
