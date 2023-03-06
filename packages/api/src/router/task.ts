import { z } from "zod"

import { protectedProcedure, publicProcedure, router } from "../trpc"

export const taskRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.task.findMany()
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.task.findFirst({ where: { id: input } })
  }),
  create: protectedProcedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.task.create({ data: input })
    }),
})
