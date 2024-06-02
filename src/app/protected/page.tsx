
import { auth } from "@/auth";
import AccessDenied from "@/components/access-denied";

export default async function ProtectedPage() {
	const session = await auth();

	// If no session exists, display access denied message
	if (!session) return <AccessDenied />;

	// If session exists, display content
	return (
		<>
			<h1>Protected Page</h1>
			<p>
				<pre>{JSON.stringify(session, null, 2)}</pre>
			</p>
		</>
	);
}
