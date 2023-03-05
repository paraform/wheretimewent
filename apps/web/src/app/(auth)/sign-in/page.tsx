import { SignIn } from "@clerk/nextjs/app-beta"

export default function Page() {
  return (
    <div className="layout-center">
      <SignIn
        redirectUrl="/dashboard"
        signUpUrl="/sign-up"
        // We can customise the design system here
        // appearance={{
        //   elements: {
        //     card: "bg-red-500",
        //     formFieldInput: "unset-all",
        //     formButtonPrimary:
        //       "unset-all bg-slate-500 hover:bg-slate-400 text-sm normal-case",
        //   },
        // }}
      />
    </div>
  )
}
