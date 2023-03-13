"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { useSignUp } from "@clerk/nextjs/app-beta/client"

type SignUpProps = {}

function SignUp(props: SignUpProps) {
  const { push } = useRouter()
  const [emailAddress, setEmailAddress] = React.useState("")
  const [password, setPassword] = React.useState("")

  const { isLoaded, signUp, setSession } = useSignUp()

  if (!setSession || !isLoaded) return null

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
        onClick={async (e) => {
          e.preventDefault()
          await signUp
            .create({
              emailAddress,
              password,
            })
            .then((result) => {
              if (result.status === "complete") {
                console.log(result)
              } else {
                console.log(result)
              }
            })
            .catch((err) => console.error("error", err.errors[0].longMessage))
          await signUp.prepareEmailAddressVerification()
          push("/sign-up/email-verification")
        }}
      >
        Sign up
      </button>
      <div className="flex gap-2">
        <p>Already have an account?</p>
        <Link href="/sign-in">
          <p>Sign in</p>
        </Link>
      </div>
    </>
  )
}

export default SignUp
