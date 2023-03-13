import { router } from "../trpc"
import { authRouter } from "./auth"
import { taskRouter } from "./task"
import { userRouter } from "./user"

export const appRouter = router({
  task: taskRouter,
  auth: authRouter,
  user: userRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
