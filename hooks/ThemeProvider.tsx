"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext({ theme: "light" });
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("light");
  //   const toggleTheme = () => {
  //     setTheme(theme === "light" ? "dark" : "light");
  //   };
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
}
