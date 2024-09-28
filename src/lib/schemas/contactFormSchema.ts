import { z } from "zod";

export const formSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z.string(),
	subject: z.string(),
	message: z.string()
});

export type FormSchema = typeof formSchema;
