// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { authRouter } from "./auth";
import { todosRouter } from "./todos";
import { userRouter } from "./user";
import { teamRouter } from "./team";

export const appRouter = router({
  todos: todosRouter,
  user: userRouter,
  auth: authRouter,
  team: teamRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
