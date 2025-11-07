import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store/hooks";

export const useAuth = () => {
    const { accessToken }: any = useAppSelector((s) => s.auth);
    const router = useRouter();

    useEffect(() => {
        if (!accessToken) router.push("/login");
    }, [accessToken, router]);

    return { isAuthenticated: !!accessToken };
};
