import { Context, Next } from "hono";
import { jwt } from "hono/jwt";
import type { JwtVariables } from "hono/jwt";

const authentication = (c: Context, next: Next) => {
  const jwtMiddleware = jwt({
    secret: c.env.JWT_SECRET_KEY,
  });
  return jwtMiddleware(c, next);
};

export { authentication };
