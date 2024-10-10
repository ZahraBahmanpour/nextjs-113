"use server";

import { signIn, signOut } from "@/auth";

export async function credentialLogin(formData: FormData) {
  try {
    const res = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });
    return res;
  } catch (e) {
    throw e;
  }
}

export async function gitHubLogin() {
  await signIn("github", { callbackUrl: "/" });
}

export async function logOut() {
  await signOut({ redirectTo: "/" });
}
