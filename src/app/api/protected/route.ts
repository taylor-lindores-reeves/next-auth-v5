import { auth } from "@/auth";
import type { NextAuthRequest } from "next-auth/lib";

export const GET = auth((req: NextAuthRequest) => {
	if (req.auth) return Response.json({ data: "Protected data" });

	return Response.json({ message: "Not authenticated" }, { status: 401 });
});
