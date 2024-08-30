import { Context } from "hono";
import { PrismaClient } from "prisma/prisma-client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { postSchema } from "@goelmak/common";

const addBlog = async (c: Context) => {
  try {
    const { id } = c.get("jwtPayload");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const blogData = await c.req.json();
    const parsedData = postSchema.parse(blogData);
    const { title, content, tags, published } = parsedData;
    const blog = await prisma.post.create({
      data: {
        title,
        content,
        published,
        authorId: id,
        tags,
      },
    });
    c.status(200);
    return c.json({ msg: `blog is successfully created `, id: blog.id });
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

    const partialSchema = postSchema.partial();
    const body = await c.req.json();
    const parsedData = partialSchema.parse({
      title: body.title,
      content: body.content,
    });
    const post = await prisma.post.update({
      where: { id: body.id },
      data: parsedData,
    });
    c.status(200);
    return c.json({ msg: "blog updated", post });
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
    const post = await prisma.post.findFirst({
      where: { id },
      include: { author: { select: { name: true, description: true } } },
    });
    c.status(200);
    return c.json({ post });
  } catch (err) {
    console.log("err", err);
    c.status(500);
    return c.json({ msg: (err as Error).message });
  }
};

const getAllPost = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const limit = 4;
    const page = Number(c.req.query("page") || "1");
    const skip = (page - 1) * limit;
    const posts = await prisma.post.findMany({
      skip,
      take: limit,
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    c.status(200);
    return c.json({ usersPosts: posts });
  } catch (err) {
    console.log("err", err);
    c.status(500);
    return c.json({ msg: (err as Error).message });
  }
};

const totalPages = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const limit = 4;
    const totalCount = await prisma.post.count();
    c.status(200);
    return c.json({ totalPages: Math.ceil(totalCount / limit) });
  } catch (err) {
    console.log("err", err);
    c.status(500);
    return c.json({ msg: (err as Error).message });
  }
};

export { addBlog, updateBlog, getPost, getAllPost, totalPages };
