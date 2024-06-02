import Header from "@/components/header";
import { VercelToolbar } from "@vercel/toolbar/next";
import React, { type PropsWithChildren } from "react";
import "@/globals.css";
export default function RootLayout({ children }: PropsWithChildren) {
	const shouldInjectToolbar = process.env.NODE_ENV === 'development';

	return (
		<html lang="en">
			<body className="overscroll-none">
				<Header />
				<main className="max-w-5xl mx-auto">{children}</main>
				{/* {shouldInjectToolbar && <VercelToolbar />} */}
			</body>
		</html>
	);
}