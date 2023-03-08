import Link from "next/link"

import { currentUser } from "@clerk/nextjs/app-beta"

import { prisma } from "@wtw/database"
import { Button } from "@wtw/ui/src/button"

import { UserButton } from "./user-button"

export default async function Page() {
  const user = await currentUser()
  const data = await prisma.task.findMany({})

  return (
    <div className="layout-center bg-white text-slate-900">
      <UserButton />
      <div className="flex flex-col gap-2">
        <Button>Click Me</Button>
        {user && <p>User: {user?.username}</p>}
        <pre>All Tasks: {JSON.stringify(data)}</pre>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  )
}
