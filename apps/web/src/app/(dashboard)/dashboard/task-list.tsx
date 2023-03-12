"use client"

import * as React from "react"

import { trpc } from "@/utils/trpc"

type TaskListProps = {
  userId: string
}

function TaskList({ userId }: TaskListProps) {
  const [name, setName] = React.useState("")
  const [isError, setIsError] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const taskQuery = trpc.task.byUser.useQuery(userId)
  const taskCreate = trpc.task.create.useMutation()
  const taskDelete = trpc.task.delete.useMutation()

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    inputRef.current?.blur()
    try {
      await taskCreate.mutateAsync({
        name: name,
        userId: userId,
      })
      // TODO: Add toast
      setIsError(false)
      setName("")
      inputRef.current?.blur()
    } catch (error) {
      setIsError(true)
      // TODO: Add toast
    }
  }

  return (
    <>
      {taskQuery.data?.map((task) => {
        return (
          <p key={task.id}>
            {task.name} -{" "}
            <button onClick={async () => await taskDelete.mutateAsync(task.id)}>
              X
            </button>
          </p>
        )
      })}
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          placeholder="name"
          ref={inputRef}
          onChange={(e) => setName(e.target.value)}
          onPointerDownCapture={(evt) => evt.stopPropagation()}
          onBlur={() => {
            setIsError(false)
          }}
        />
        {isError && <p>Error</p>}
      </form>
    </>
  )
}

export default TaskList
