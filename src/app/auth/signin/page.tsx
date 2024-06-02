import { auth } from "@/auth";
import { SignIn } from "@/components/signin";
import { redirect } from "next/navigation";
import React from "react";

export default async function SignInPage() {
	const session = await auth();
	if (session) redirect("/");
	return <SignIn />;
}
