"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { z } from "zod";

const emailSignInSchema = z
	.string()
	.email({ message: "Please enter a valid email." })
	.trim()
	.toLowerCase();

export const signInAction = async (formData: FormData) => {
	try {
		const validatedFields = emailSignInSchema.safeParse(formData.get("email"));

		if (!validatedFields.success) {
			console.error(validatedFields.error.flatten().fieldErrors);
			return;
		}

		await signIn("resend", {
			email: validatedFields.data,
			redirect: false,
		});

		redirect("/auth/verify-request");
	} catch (error) {
		if (isRedirectError(error)) {
			throw error;
		}

		if (error instanceof AuthError) {
			return { success: false, message: error.message };
		}
		if (error instanceof Error) {
			return { success: false, message: error.message };
		}
		return { success: false, message: "Something went wrong" };
	}
};
