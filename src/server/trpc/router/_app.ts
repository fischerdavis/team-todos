// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { authRouter } from "./auth";
import { todosRouter } from "./todos";

export const appRouter = router({
  todos: todosRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
