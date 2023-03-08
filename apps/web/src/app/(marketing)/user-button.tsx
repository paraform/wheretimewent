"use client"

import { UserButton as ClerkUserButton, SignedIn } from "@clerk/nextjs/app-beta"

type UserButtonProps = {}

function UserButton(props: UserButtonProps) {
  return (
    <div className="absolute top-4 right-4">
      <SignedIn>
        <ClerkUserButton />
      </SignedIn>
    </div>
  )
}

export { UserButton }
