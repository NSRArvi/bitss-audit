"use client";

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BASE_URL } from "@/lib/base_url";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [mounted, setMounted] = useState(false);
  const route = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("crypto_audit_token");
    if (data) setUser(JSON.parse(data));
    setMounted(true);
  }, []);

  const login = (tokenValue) => {
    localStorage.setItem("crypto_audit_token", JSON.stringify(tokenValue));
    setUser(tokenValue);
  };

  const logout = async () => {
    try {
      const res = await fetch(`${BASE_URL}/logout`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      const data = await res.json();
      if (data.success) {
        localStorage.removeItem("crypto_audit_token");
        setUser(null);
        toast.success(data.message);
        route.refresh();
      }
    } catch (error) {
      localStorage.removeItem("crypto_audit_token");
      setUser(null);
      toast.error(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        mounted,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
