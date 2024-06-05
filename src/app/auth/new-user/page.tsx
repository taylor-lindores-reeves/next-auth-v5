import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function SignInPage() {
  const session = await auth();
  if (!session) redirect("/");
  return <p>Thanks for signing up {session?.user?.email}!</p>;
}
