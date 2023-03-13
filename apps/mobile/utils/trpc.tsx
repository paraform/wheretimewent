import React from "react"

import { useAuth } from "@clerk/clerk-expo"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"
import { createTRPCReact } from "@trpc/react-query"
import Constants from "expo-constants"

import { type AppRouter } from "@wtw/api"
import { transformer } from "@wtw/api/transformer"

/**
 * A set of typesafe hooks for consuming your API.
 */
export const trpc = createTRPCReact<AppRouter>()
export { type RouterInputs, type RouterOutputs } from "@wtw/api"

/**
 * Extend this function when going to production by
 * setting the baseUrl to your production API URL.
 */
const getBaseUrl = () => {
  /**
   * Gets the IP address of your host-machine. If it cannot automatically find it,
   * you'll have to manually set it. NOTE: Port 3000 should work for most but confirm
   * you don't have anything else running on it, or you'd have to change it.
   */

  /**
   * If you're running in production, you'll need to set the productionApiUrl as an
   * extra field in your expo app.config.ts or app.json. This is because localhost
   * will not be available in production.
   */
  if (!__DEV__) {
    const productionApiUrl = Constants.manifest?.extra
      ?.productionApiUrl as string
    if (!productionApiUrl)
      throw new Error(
        "failed to get productionApiUrl, missing in extra section of app.config.ts"
      )
    return productionApiUrl
  }

  const localhost = Constants.manifest?.debuggerHost?.split(":")[0]
  if (!localhost)
    throw new Error("failed to get localhost, configure it manually")
  return `http://${localhost}:3000`
}

/**
 * A wrapper for your app that provides the TRPC context.
 * Use only in _app.tsx
 */
export const TRPCProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { getToken } = useAuth()
  const [queryClient] = React.useState(() => new QueryClient())
  const [trpcClient] = React.useState(() =>
    trpc.createClient({
      transformer,
      links: [
        httpBatchLink({
          async headers() {
            const authToken = await getToken()
            return {
              Authorization: authToken,
            }
          },
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    })
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
