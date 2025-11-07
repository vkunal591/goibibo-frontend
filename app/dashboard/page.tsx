"use client";

import { useAppSelector } from "@/store/hooks";

export default function DashboardPage() {
  const { user } = useAppSelector((s) => s.auth);
  return (
    <div>
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <p>Welcome, {user?.name || "User"}!</p>
    </div>
  );
}
