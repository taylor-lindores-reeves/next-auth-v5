import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { config } from "./auth.config";

export const {
	auth,
	handlers,
	signIn,
	signOut,
	unstable_update: update,
} = NextAuth({
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: "database",
		maxAge: 30 * 24 * 60 * 60,
	},
	...config,
});
