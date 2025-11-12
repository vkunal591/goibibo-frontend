import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const accessToken: any = useAppSelector((s) => s.auth.user);
  const router = useRouter();

  useEffect(() => {
    console.log(accessToken);
    if (!accessToken) router.push("/sign-in");
  }, [accessToken, router]);

  return { isAuthenticated: !!accessToken };
};
