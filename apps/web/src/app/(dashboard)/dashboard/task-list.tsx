"use client"

import { Task } from "@wtw/database/src/client"

import { trpc } from "@/utils/trpc"

type TaskListProps = {}

function TaskList(props: TaskListProps) {
  const taskQuery = trpc.task.all.useQuery()

  return (
    <>
      {taskQuery.data?.map((task: Task) => {
        return <p key={task.id}>{task.name}</p>
      })}
    </>
  )
}

export default TaskList
