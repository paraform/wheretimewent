import { currentUser } from "@clerk/nextjs/app-beta"

import UserButton from "@/components/user-button"
import TaskList from "./task-list"

export default async function Page() {
  const user = await currentUser()
  if (!user) return <p>Loading</p>
  console.log(user.id)

  return (
    <div className="layout-center flex flex-col bg-white text-slate-900">
      You are in {user?.firstName ?? user?.username}!!!
      <TaskList userId={user.id} />
      <div className="absolute top-4 right-4">
        <UserButton />
      </div>
    </div>
  )
}
