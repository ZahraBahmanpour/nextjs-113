"use client";
import { logOut } from "@/actions/authAction";
import useCartService from "@/hooks/useCartStore";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const { totalCount } = useCartService();
  const pathname = usePathname();
  return (
    <header>
      <nav>
        <menu className="flex gap-2 p-5">
          <li>
            <Link
              href={"/"}
              className={`${pathname === "/" ? "text-red-500" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/products"}
              className={`${pathname === "/products" ? "text-red-500" : ""}`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
          <li>
            <Link href={"/register"}>Register</Link>
          </li>
          <li>
            <Link href={"/cart"}>Cart</Link>
          </li>
        </menu>
      </nav>
      {totalCount}
      <form action={logOut}>
        <button type="submit">LogOut</button>
      </form>
    </header>
  );
}
