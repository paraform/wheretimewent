import { z } from "zod"

import { Prisma } from "@wtw/database/src/client"

import { protectedProcedure, router } from "../trpc"

/**
 * Default selector for Task.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */
const defaultTaskSelect = Prisma.validator<Prisma.TaskSelect>()({
  id: true,
  name: true,
  userId: true,
})

export const taskRouter = router({
  all: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.task.findMany({
      select: defaultTaskSelect,
    })
  }),
  byId: protectedProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.task.findFirst({
      where: { id: input },
      select: defaultTaskSelect,
    })
  }),
  byUser: protectedProcedure.input(z.string()).query(({ ctx }) => {
    return ctx.prisma.task.findMany({
      where: { userId: ctx?.auth?.user?.id },
      select: defaultTaskSelect,
    })
  }),
  create: protectedProcedure
    .input(z.object({ userId: z.string(), name: z.string().min(1) }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.task.create({ data: input })
    }),
  delete: protectedProcedure
    .input(z.string().cuid())
    .mutation(({ ctx, input }) => {
      return ctx.prisma.task.delete({ where: { id: input } })
    }),
})
