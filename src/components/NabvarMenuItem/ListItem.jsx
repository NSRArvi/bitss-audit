"use client";
import Link from "next/link";
import { NavigationMenuLink } from "../ui/navigation-menu";
import { usePathname } from "next/navigation";

function ListItem({ children, href }) {
  const pathname = usePathname();
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} className={pathname === href ? "bg-transparent" : ""}>
          {children}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
export default ListItem;
