"use client";

import { usePathname } from "next/navigation";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { navLinks } from "@/constants/LinksRoutes";
import { LiaShoppingBagSolid } from "react-icons/lia";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className=" bg-primary text-gray-100 p-3 flex  items-center">
      <h1 className="mr-auto text-2xl font-bold">CourseBay</h1>
      <div className={`flex gap-1 px-1 py-1 nav-bar ${styles.navbar}`}>
        {navLinks.map((link) => (
          <div
            key={link.url}
            className={` px-4 py-2  text text-sm font-medium  hover:bg-primary transition ${
              pathname === link.url ? "bg-primary" : ""
            } ${styles.navItems} `}
          >
            <Link href={`${link.url}`}>{link.text}</Link>
          </div>
        ))}
        <div
          className={`py-2 px-2  text text-sm font-medium  hover:bg-primary transition ${
            pathname === "/cart" ? "bg-primary" : ""
          } ${styles.navItems} `}
        >
          <Link href={`/cart`}>
            {" "}
            <LiaShoppingBagSolid size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}
