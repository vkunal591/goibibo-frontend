"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Loader from "../common/Loader";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProfile } from "@/features/auth/authSlice";

interface Props {
  children: ReactNode;
  protected?: boolean;
  heroSection?: boolean;
}

export default function Layout({
  children,
  protected: isProtected = false,
  heroSection = false,
}: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user, loading } = useAppSelector((s) => s.auth);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await dispatch(fetchProfile());
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };
    loadProfile();
  }, [dispatch]);

  // 🌀 Show loader when fetching profile
  if (loading) {
    return <Loader show={true} />;
  }

  // 🚫 If protected route and no user after loading — redirect
  if (isProtected && !user) {
    router.replace("/sign-in");
    return <Loader show={true} />;
  }

  // ✅ Normal layout
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar heroSection={heroSection} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
