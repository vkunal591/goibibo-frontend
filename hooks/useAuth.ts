"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAppSelector } from "@/store/hooks";

export const useAuth = () => {
  const { accessToken }: any = useAppSelector((s) => s.auth);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!accessToken && pathname !== "/login") {
      router.push("/");
    }
    
  }, [accessToken, pathname, router]);

  return { isAuthenticated: !!accessToken };
};
