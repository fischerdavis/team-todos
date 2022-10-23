import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const userRouter = router({
  create: publicProcedure
  .input(z.object({name: z.string(), userId: z.string()}))
  .mutation(async ({ input, ctx }) => {
    const x = await ctx.prisma.account.create({
      data: {
        userId: input.userId,
        name: input.name,
        numberOfTodos: 0
      }
    });

    return x;
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.account.findMany();
  }),
});