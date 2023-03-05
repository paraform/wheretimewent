import { SignUp } from "@clerk/nextjs/app-beta"

export default function Page() {
  return (
    <div className="layout-center">
      <SignUp signInUrl="/sign-in" />
    </div>
  )
}
