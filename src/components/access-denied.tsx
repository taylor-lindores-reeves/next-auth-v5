import Link from "next/link";

export default function AccessDenied() {
	return (
		<>
			<h2 className="text-xl font-semibold">Access denied</h2>
			<p>
				<Link href="/auth/signin">
					You must be signed in to view this page
				</Link>
			</p>
		</>
	);
}
