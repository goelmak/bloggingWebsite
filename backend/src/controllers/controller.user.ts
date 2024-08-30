import { PrismaClient } from "prisma/prisma-client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { userSchema } from "@goelmak/common";
import { Context } from "hono";
import { sign } from "hono/jwt";

const signInRoute = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    const signInSchema = userSchema.partial({ email: true, password: true });
    const parsedData = signInSchema.parse(body);
    const user = await prisma.user.findFirst({
      where: {
        email: parsedData.email,
      },
    });
    if (!user || user.password !== parsedData.password) {
      throw new Error(`Username ${parsedData.email} is not present`);
    }
    c.status(200);
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET_KEY);
    return c.json({ token: jwt, user: user.name });
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
    const parsedData = userSchema.parse({
      name: body.name,
      email: body.email,
      password: body.password,
      description: body.description,
    });
    const newUser = await prisma.user.create({
      data: parsedData,
    });
    c.status(200);
    const jwt = await sign({ id: newUser.id }, c.env.JWT_SECRET_KEY);
    return c.json({ token: jwt, user: newUser.name });
  } catch (err) {
    console.log("err", err);
    c.status(500);
    return c.json({ msg: (err as Error).message });
  }
};

const authenticateRoute = async (c: Context) => {
  try {
    const { id } = c.get("jwtPayload");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const User = await prisma.user.findFirst({ where: { id } });
    c.status(200);
    return c.json({ user: User?.name ?? "Anonymous" });
  } catch (err) {
    console.log("err", err);
    c.status(500);
    return c.json({ msg: (err as Error).message });
  }
};
export { signInRoute, signUpRoute, authenticateRoute };
