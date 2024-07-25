import { Hono } from "hono";
import { signInRoute, signUpRoute } from "../controllers/controller.user";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET_KEY: string;
  };
}>();

userRouter.post("/signup", signUpRoute);

userRouter.post("/signin", signInRoute);
