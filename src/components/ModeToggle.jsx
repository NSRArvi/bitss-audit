"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <SwitchPrimitive.Root
      checked={isDark}
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      className={cn(
        "cursor-pointer relative inline-flex h-6 w-10 items-center rounded-full transition-colors",
        isDark ? "bg-zinc-800" : "bg-zinc-300",
      )}>
      <SwitchPrimitive.Thumb
        className={cn(
          "flex items-center justify-center h-4 w-4 rounded-full bg-white shadow-md transition-transform",
          isDark ? "translate-x-7" : "translate-x-1",
        )}>
        {isDark ? (
          <Moon className="h-4 w-4 text-zinc-700" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
};

export default ModeToggle;
