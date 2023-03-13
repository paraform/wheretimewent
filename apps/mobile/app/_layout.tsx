import React from "react"

import { ClerkProvider } from "@clerk/clerk-expo"
import { SplashScreen, Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { tokenCache } from "../utils/cache"
import { TRPCProvider } from "../utils/trpc"

const frontendApi = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

export default function App() {
  const [isReady, setReady] = React.useState(false)

  React.useEffect(() => {
    // Perform some sort of async data or asset fetching.
    setTimeout(() => {
      setReady(true)
    }, 1000)
  }, [])

  if (typeof frontendApi === "undefined")
    throw new Error(
      "Clerk API key not found. Please add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file."
    )

  if (!isReady) {
    return <SplashScreen />
  }

  return (
    <ClerkProvider frontendApi={frontendApi} tokenCache={tokenCache}>
      <TRPCProvider>
        <SafeAreaProvider>
          {/*
          The Stack component displays the current page.
          It also allows you to configure your screens 
        */}
          <Stack />
          <StatusBar />
        </SafeAreaProvider>
      </TRPCProvider>
    </ClerkProvider>
  )
}
