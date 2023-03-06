import { SignIn } from "@clerk/nextjs/app-beta"

export default function Page() {
  return (
    <div className="layout-center">
      <SignIn
        redirectUrl="/dashboard"
        signUpUrl="/"
        appearance={{
          elements: {
            footer: "hidden",
          },
        }}
      />
    </div>
  )
}
