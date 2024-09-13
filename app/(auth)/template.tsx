"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input, setInput] = useState("");
  return (
    <div>
      <Link href={"/login"}>Login</Link>
      <Link href={"/register"}>Register</Link>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {children}
    </div>
  );
}
