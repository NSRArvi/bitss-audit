"use client";
import Link from "next/link";
import { NavigationMenuLink } from "../ui/navigation-menu";
import { usePathname } from "next/navigation";

function ListItem({ children, href }) {
  const pathname = usePathname();
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={`block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:text-primary hover:bg-transparent ${
            pathname === href ? "text-primary" : ""
          }`}>
          {children}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
export default ListItem;
