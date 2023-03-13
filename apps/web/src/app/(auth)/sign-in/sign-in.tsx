"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { useSignIn } from "@clerk/nextjs"

type SignInProps = {}

function SignIn(props: SignInProps) {
  const { push } = useRouter()
  const [emailAddress, setEmailAddress] = React.useState("")
  const [password, setPassword] = React.useState("")

  const { isLoaded, signIn, setSession } = useSignIn()
  if (!setSession) return null
  if (!isLoaded) return null

  const redirectIfSignedIn = async () => {
    if (signIn.status == "complete") {
      push("/dashboard")
    }
  }

  const handleEmailSignInWithPress = async (
    emailAddress: string,
    password: string
  ) => {
    try {
      await signIn.create({
        identifier: emailAddress,
        password,
      })
      await redirectIfSignedIn()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <input
        placeholder="Email"
        onChange={(e) => setEmailAddress(e.target.value)}
        type="email"
      />
      <input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />

      {/* sign up button */}
      <button
        onClick={() => {
          handleEmailSignInWithPress(emailAddress, password)
        }}
      >
        Sign in
      </button>
      <div className="flex gap-2">
        <p>Don’t have an account?</p>
        <Link href="/sign-up">
          <p>Sign up</p>
        </Link>
      </div>
    </>
  )
}

export default SignIn
