"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardCards from "@/components/admin/DashboardCards";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const admin = localStorage.getItem("admin");

    if (!admin) {
      router.push("/admin/login");
    }
  }, [router]);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#0F5132]">
          Dashboard Admin
        </h1>

        <p className="text-gray-500 mt-2">
          Selamat datang di Admin Panel Pondok Pesantren
          Huffadh Nur Khoiri
        </p>
      </div>

      <DashboardCards />
    </div>
  );
}