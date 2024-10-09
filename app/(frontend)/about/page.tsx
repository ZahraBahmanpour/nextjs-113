"use client";
import { ThemeContext } from "@/hooks/ThemeProvider";
// import type { Metadata } from "next";
import { useContext } from "react";

// export const metadata: Metadata = {
//   title: {
//     template: "About",
//     default: "About",
//   },
// };
export default function AboutPage() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("slfkjslfkjsdlkfjsdlfkjds");
  const { theme } = useContext(ThemeContext);
  return <div>About Page {theme}</div>;
}
