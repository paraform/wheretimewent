/* eslint-disable turbo/no-undeclared-env-vars */
"use client"

import * as React from "react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink, loggerLink } from "@trpc/client"
import { ThemeProvider } from "next-themes"

import { transformer } from "@wtw/api/transformer"

import { trpc } from "@/utils/trpc"

const getBaseUrl = () => {
  if (typeof window !== "undefined") return "" // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}` // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}

export function Providers(props: { children: React.ReactNode }) {
  return (
    <TrpcProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {props.children}
      </ThemeProvider>
    </TrpcProvider>
  )
}

function TrpcProvider(props: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient())
  const [trpcClient] = React.useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: () => true,
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      transformer,
    })
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </trpc.Provider>
  )
}
