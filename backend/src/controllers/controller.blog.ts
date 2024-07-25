import { Context } from "hono";
import { PrismaClient } from "prisma/prisma-client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const addBlog = async (c: Context) => {
  try {
    const { id } = c.get("jwtPayload");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const { title, content, published } = await c.req.json();
    const blog = await prisma.post.create({
      data: {
        title,
        content,
        published,
        authorId: id,
      },
    });
    c.status(200);
    return c.json({ msg: `blog is successfully created with id ${blog.id}` });
  } catch (err) {
    console.log("err", err);
    c.status(500);
    return c.json({ msg: (err as Error).message });
  }
};

const updateBlog = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();

    const res = await prisma.post.update({
      where: { id: body.id },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    c.status(200);
    return c.json({ msg: "blog updated", updatedBlog: res });
  } catch (err) {
    console.log("err", err);
    c.status(500);
    return c.json({ msg: (err as Error).message });
  }
};

const getPost = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const id = c.req.param("id");
    const post = await prisma.post.findFirst({ where: { id } });
    c.status(200);
    return c.json({ post });
  } catch (err) {
    console.log("err", err);
    c.status(500);
    return c.json({ msg: (err as Error).message });
  }
};
//Todo : Add pagination
const getAllPost = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const posts = await prisma.post.findMany();
    c.status(200);
    return c.json({ posts });
  } catch (err) {
    console.log("err", err);
    c.status(500);
    return c.json({ msg: (err as Error).message });
  }
};

export { addBlog, updateBlog, getPost, getAllPost };
