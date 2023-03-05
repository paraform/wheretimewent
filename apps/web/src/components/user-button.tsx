"use client"

import { UserButton as ClerkUserButton, SignInButton } from "@clerk/nextjs"
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta/client"

type UserButtonProps = {}

function UserButton(props: UserButtonProps) {
  return (
    <>
      <SignedIn>
        <ClerkUserButton afterSignOutUrl="/sign-in" />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  )
}

export default UserButton
