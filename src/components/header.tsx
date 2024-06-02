import { signOutAction } from "@/actions/signOut";
import { auth } from "@/auth";
import Link from "next/link";

export default async function Header() {
	const session = await auth();

	return (
		<header className="max-w-5xl mx-auto flex flex-col items-center">
			<div className="w-full h-16 px-4 flex items-center justify-between bg-gray-200 rounded-b-lg">
				<div className="text-left text-md font-semibold">
					{!session ? "Not signed in" : 'Authenticated'}
				</div>
				{!session ? (
					<Link
						href='/auth/signin'
						className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50"
					>
						Sign in
					</Link>
				) : (
					<form
						action={signOutAction}
					>
						<button
							type='submit'
							className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50"
						>
							Sign out
						</button>
					</form>
				)}
			</div>
			<nav className="w-full h-12 flex gap-x-4 items-center">
				<Link className="text-md font-bold text-zinc-900" href="/">
					Home
				</Link>
				<Link className="text-md font-bold text-zinc-900" href="/me">
					Me
				</Link>
				<Link className="text-md font-bold text-zinc-900" href="/protected">
					Protected
				</Link>
			</nav>
		</header>
	);
}
