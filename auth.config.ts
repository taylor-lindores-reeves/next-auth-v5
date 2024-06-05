import type { NextAuthConfig } from "next-auth";
import ResendProvider from "next-auth/providers/resend";

export const config = {
	providers: [
		ResendProvider({
			from: "no-reply@example.com", // Change this to your domain!
			normalizeIdentifier(identifier: string): string {
				// Get the first two elements only,
				// separated by `@` from user input.
				let [local, domain] = identifier.toLowerCase().trim().split("@");
				// The part before "@" can contain a ","
				// but we remove it on the domain part
				domain = domain?.split(",")[0];
				return `${local}@${domain}`;

				// You can also throw an error, which will redirect the user
				// to the sign-in page with error=EmailSignin in the URL
				// if (identifier.split("@").length > 2) {
				//   throw new Error("Only one email allowed")
				// }
			},
		}),
	],
	trustHost: true,
	pages: {
		signIn: "/auth/signin",
		signOut: "/auth/signout",
		error: "/auth/error",
		verifyRequest: "/auth/verify-request", // Custom verify request page
		newUser: "/auth/new-user",
	},
	callbacks: {
		async session({ session, user }) {
			session.user = user;
			return session;
		},
	},
	events: {
		async signIn(message) {
			console.log("Signed in!", { message });
		},
		async signOut(message) {
			console.log("Signed out!", { message });
		},
		async createUser(message) {
			console.log("User created!", { message });
		},
	},
} satisfies NextAuthConfig;
