import { PrismaClient } from "prisma/prisma-client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";
import { sign } from "hono/jwt";

const signInRoute = async (c: Context) => {
  console.log("mai yha bhi na aya");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });
    if (!user || user.password !== body.password) {
      throw new Error(`Username ${body.email} is not present`);
    }
    c.status(200);
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET_KEY);
    return c.json({ token: jwt });
  } catch (err) {
    console.log("err", err);
    c.status(500);
    return c.json({ msg: (err as Error).message });
  }
};

const signUpRoute = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const body = await c.req.json();
    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });
    c.status(200);
    const jwt = await sign({ id: newUser.id }, c.env.JWT_SECRET_KEY);
    return c.json({ token: jwt });
  } catch (err) {
    console.log("err", err);
    c.status(500);
    return c.json({ msg: (err as Error).message });
  }
};

export { signInRoute, signUpRoute };
