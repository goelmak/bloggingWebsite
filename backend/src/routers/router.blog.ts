import { Hono } from "hono";
import { authentication } from "../middleware/middleware.blog";
import type { JwtVariables } from "hono/jwt";
import {
  addBlog,
  getAllPost,
  getPost,
  totalPages,
  updateBlog,
} from "../controllers/controller.blog";

const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET_KEY: string;
  };
  Variables: JwtVariables;
}>();

blogRouter.use("/*", authentication);
blogRouter.post("/", addBlog);
blogRouter.put("/", updateBlog);
blogRouter.get("/bulk", getAllPost);
blogRouter.get("/totalPages", totalPages);
blogRouter.get("/:id", getPost);

export { blogRouter };
