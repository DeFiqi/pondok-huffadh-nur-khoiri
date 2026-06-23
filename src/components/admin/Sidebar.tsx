"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    name: "Dashboard",
    href: "/admin",
  },
  {
    name: "Berita",
    href: "/admin/news",
  },
  {
    name: "Galeri",
    href: "/admin/gallery",
  },
  {
    name: "Guru",
    href: "/admin/teachers",
  },
  {
    name: "PPDB",
    href: "/admin/admissions",
  },
  {
    name: "Pengaturan",
    href: "/admin/settings",
  },

  {
    name: "Pesan Masuk",
    href: "/admin/contact",
    },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#0F5132] text-white min-h-screen">

      <div className="p-6 border-b border-green-700">
        <h2 className="font-bold text-xl">
          Admin Panel
        </h2>

        <p className="text-sm text-green-200 mt-1">
          Huffadh Nur Khoiri
        </p>
      </div>

      <nav className="p-4">

        {menus.map((menu) => (
          <Link
            key={menu.href}
            href={menu.href}
            className={`block px-4 py-3 rounded-lg mb-2 transition ${
              pathname === menu.href
                ? "bg-[#D4AF37] text-[#0F5132] font-semibold"
                : "hover:bg-green-800"
            }`}
          >
            {menu.name}
          </Link>
        ))}

      </nav>
    </aside>
  );
}