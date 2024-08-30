import { z } from "zod";
declare const userSchema: z.ZodObject<{
    email: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    password: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
    description?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
    description?: string | undefined;
}>;
declare const postSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
    createdAt: z.ZodOptional<z.ZodString>;
    published: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    tags: string[];
    createdAt?: string | undefined;
    published?: boolean | undefined;
}, {
    title: string;
    content: string;
    tags: string[];
    createdAt?: string | undefined;
    published?: boolean | undefined;
}>;
type userType = z.infer<typeof userSchema>;
type postType = z.infer<typeof postSchema>;
export { userSchema, postSchema, userType, postType };
