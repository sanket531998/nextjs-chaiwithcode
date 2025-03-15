import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username must be minimum 2 characters")
  .max(20, "username must be maximum 20 characters")
  .regex(/^[a-zA-Z0-9]+$/, "username cannot have special characters");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters" }),
});
