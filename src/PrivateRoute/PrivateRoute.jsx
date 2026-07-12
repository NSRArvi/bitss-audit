"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/hooks/useAuth";

export default function PrivateRoute({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const { user, mounted } = useAuth();

  useEffect(() => {
    if (mounted && !user) {
      router.replace(`/register?redirect=${encodeURIComponent(pathname)}`);
    } else {
      setIsLoading(false);
    }
  }, [router, user, pathname, mounted]);

  if (isLoading)
    return (
      <span className="min-h-screen w-full flex items-center justify-center">
        <Spinner />
      </span>
    );

  return children;
}
