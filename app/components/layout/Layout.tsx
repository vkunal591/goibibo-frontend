"use client";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../common/Navbar";
import Footer from "../common/Footer";
import Loader from "../common/Loader";
import { useAppSelector } from "@/store/hooks";
import Navbar from "../common/Navbar";

interface Props {
  children: ReactNode;
  protected?: boolean;
  heroSection?: boolean;
}

export default function Layout({
  children,
  protected: isProtected,
  heroSection = false,
}: Props) {
  const { user } = useAppSelector((s) => s.auth);
  const router = useRouter();

  useEffect(() => {
    if (isProtected && !user) router.replace("/login");
  }, [isProtected, user, router]);

  if (isProtected && !user) return <Loader />;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar heroSection={heroSection} />
      <div className="flex flex-1">
        <main className="flex-1 p-4 bg-gray-50">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
