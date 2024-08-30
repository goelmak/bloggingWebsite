import { z } from "zod";

const userSchema = z.object({
  email: z.string().email(),
  name: z.optional(z.string()),
  password: z.string(),
  description: z.optional(z.string()),
});

const postSchema = z.object({
  title: z.string().min(5),
  content: z.string().min(200),
  tags: z.string().array(),
  createdAt: z.optional(z.string().datetime()),
  published: z.optional(z.boolean()),
});

type userType = z.infer<typeof userSchema>;

type postType = z.infer<typeof postSchema>;

export { userSchema, postSchema, userType, postType };
