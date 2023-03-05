import { prisma } from "@wtw/database"
import { Button } from "@wtw/ui"

export default async function Page() {
  const data = await prisma.task.findMany({})

  return (
    <div className="layout-center bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
      <div className="flex flex-col gap-2">
        <Button>Click Me</Button>
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </div>
  )
}
