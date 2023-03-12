import Link from "next/link"

import { Button } from "@wtw/ui/src/button"

import { UserButton } from "./user-button"

export default function Page() {
  return (
    <div className="layout-center bg-white text-slate-900">
      <UserButton />
      <div className="flex flex-col gap-2">
        <Button>Click Me</Button>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  )
}
