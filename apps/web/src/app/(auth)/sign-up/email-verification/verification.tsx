"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { useSignUp } from "@clerk/nextjs"

import { trpc } from "@/utils/trpc"

type VerificationProps = {}

function Verification(props: VerificationProps) {
  const { push } = useRouter()
  const [verificationCode, setVerificationCode] = React.useState("")
  const createUserMutation = trpc.user.create.useMutation()

  const { signUp, setSession } = useSignUp()
  if (!signUp) return null

  const handleEmailVerificationOnPress = async () => {
    /* verify the email */
    await signUp.attemptEmailAddressVerification({ code: verificationCode })

    if (signUp.status === "complete") {
      const { createdSessionId } = signUp
      if (createdSessionId) {
        await setSession(createdSessionId)
      }
      /* add user id and email into our database */
      createUserMutation.mutate({
        id: signUp.createdUserId!,
        email: signUp.emailAddress!,
      })
      push("/dashboard")
    } else alert("Invalid verification code")
  }

  return (
    <>
      <input
        placeholder="Verification code"
        onChange={(e) => setVerificationCode(e.target.value)}
      />
      <button
        onClick={() => {
          handleEmailVerificationOnPress()
        }}
      >
        Submit
      </button>
    </>
  )
}

export default Verification
