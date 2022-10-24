import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const teamRouter = router({
  create: publicProcedure
  .input(z.object({teamName: z.string()}))
  .mutation(async ({ input, ctx }) => {
    return await ctx.prisma.teams.create({
      data: {
        ...input
      }
    });
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.teams.findMany();
  }),
});