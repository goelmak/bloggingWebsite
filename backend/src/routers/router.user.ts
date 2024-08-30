import { Hono } from "hono";
import {
  authenticateRoute,
  signInRoute,
  signUpRoute,
} from "../controllers/controller.user";
import { authentication } from "../middleware/middleware.blog";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET_KEY: string;
  };
}>();

userRouter.post("/signup", signUpRoute);

userRouter.post("/signin", signInRoute);

userRouter.use("/", authentication);

userRouter.get("/", authenticateRoute);
