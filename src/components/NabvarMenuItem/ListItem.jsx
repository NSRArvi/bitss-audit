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
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 ${
            pathname === href ? "bg-accent/40" : ""
          }`}>
          {children}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
export default ListItem;
