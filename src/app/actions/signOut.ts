"use server";

import { signOut } from "@/auth";

export const signOutAction = async () => await signOut();
