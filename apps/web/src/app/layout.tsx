import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs/app-beta"
import { DM_Sans as FontSans } from "@next/font/google"

import { Providers } from "./providers"

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en" className={fontSans.className} suppressHydrationWarning>
        <head />
        <body className="h-screen w-full">
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
