import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function VerifyRequest() {
	const session = await auth();
	if (session) redirect("/");
	return (
		<>
			<h2 className="text-xl font-semibold">Check your email</h2>
			<p>A sign in link has been sent to your email address.</p>
		</>
	);
};