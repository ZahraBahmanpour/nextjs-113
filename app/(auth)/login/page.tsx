"use client";
import { credentialLogin, gitHubLogin } from "@/actions/authAction";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await credentialLogin(formData);
      if (response.error) {
      } else {
        router.push("/");
      }
    } catch (e) {
      console.log(e);
      setError("Authentication Failed");
    }
  }

  return (
    <div>
      <span style={{ color: "red" }}>{error}</span>
      <form onSubmit={onSubmit}>
        <label>
          Username
          <input type="text" id="username" name="username" />
        </label>
        <br />
        <label>
          Password
          <input type="password" id="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <form action={gitHubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  );
}
