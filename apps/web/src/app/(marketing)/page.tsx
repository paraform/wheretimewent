import Link from "next/link"

import { SignedIn, UserButton, currentUser } from "@clerk/nextjs/app-beta"

import { prisma } from "@wtw/database"
import { Button } from "@wtw/ui"

export default async function Page() {
  const user = await currentUser()
  const data = await prisma.task.findMany({})

  return (
    <div className="layout-center bg-white text-slate-900">
      <div className="absolute top-4 right-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className="flex flex-col gap-2">
        <Button>Click Me</Button>
        {user && <p>User: {user?.username}</p>}
        <pre>All Tasks: {JSON.stringify(data)}</pre>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  )
}
