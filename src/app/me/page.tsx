import { auth } from "@/auth";

export default async function MePage() {
	const session = await auth();
	return <p>{session?.user ? `Signed in as ${session.user?.email}.` : "You are not signed in."}</p>;
}
