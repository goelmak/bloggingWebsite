"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
const userSchema = zod_1.z.object({
  email: zod_1.z.string().email(),
  name: zod_1.z.optional(zod_1.z.string()),
  password: zod_1.z.string(),
  description: zod_1.z.optional(zod_1.z.string()),
});
exports.userSchema = userSchema;
const postSchema = zod_1.z.object({
  title: zod_1.z.string().min(5),
  content: zod_1.z.string().min(200),
  tags: zod_1.z.string().array(),
  createdAt: zod_1.z.optional(zod_1.z.string().datetime()),
  published: zod_1.z.optional(zod_1.z.boolean()),
});
exports.postSchema = postSchema;
