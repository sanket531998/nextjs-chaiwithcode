import { z } from "zod";

export const messsageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Content must be minimum 10 characters" })
    .max(300, { message: "Content can be at max 300 characters" }),
});
