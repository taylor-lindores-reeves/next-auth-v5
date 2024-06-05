import Header from "@/components/header";
import React, { type PropsWithChildren } from "react";
import "@/globals.css";
export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<body className="overscroll-none">
				<Header />
				<main className="max-w-5xl mx-auto">{children}</main>
			</body>
		</html>
	);
}