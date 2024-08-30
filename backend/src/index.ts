import { Hono } from "hono";
import { userRouter } from "./routers/router.user";
import { blogRouter } from "./routers/router.blog";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET_KEY: string;
  };
}>();

app.use("/api/v1/*", cors());

app.route("/api/v1/user", userRouter);

app.route("/api/v1/blog", blogRouter);

export default app;
