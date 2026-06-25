"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] =
  useState("beranda");

  const isActive = (href: string) => {
    if (href === "/news")
      return pathname.startsWith("/news");

    if (href === "/gallery")
      return pathname.startsWith("/gallery");

    if (href === "/psb")
      return pathname.startsWith("/psb");

    if (href === "/contact")
      return pathname.startsWith("/contact");

    return false;
  };
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] =
    useState(false);

    useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }

      return () => {
        document.body.style.overflow = "auto";
      };
    }, [open]);
  
    useEffect(() => {
    const onScroll = () => {
      setScrolled(
        window.scrollY > 50
      );
    };

    window.addEventListener(
      "scroll",
      onScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );
  }, []);

    useEffect(() => {
      if (!isHome) return;

      const sections = [
        "hero",
        "tentang",
        "program",
      ];

      const observer =
        new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(
                  entry.target.id
                );
              }
            });
          },
          {
            threshold: 0.4,
          }
        );

      sections.forEach((id) => {
        const el =
          document.getElementById(id);

        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    }, [isHome]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isHome
            ? scrolled
              ? "bg-[#0F5132]/95 backdrop-blur-xl border-b border-green-800 shadow-lg"
              : "bg-transparent"
            : "bg-[#0F5132]/95 backdrop-blur-xl border-b border-green-800 shadow-lg"
        }`}
      >
        <div className="w-full px-6 lg:px-10">
          <div
          className={`relative flex items-center transition-all duration-300 ${
            isHome
              ? scrolled
                ? "h-16"
                : "h-24"
              : scrolled
                ? "h-16"
                : "h-20"
          }`}
        >

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 z-10"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={scrolled ? 40 : 50}
                height={scrolled ? 40 : 50}
                priority
                className="transition-all duration-300"
              />

              <h1 className="text-white font-bold text-sm md:text-lg">
                PPH NUR KHOIRI
              </h1>
            </Link>

              {/* Menu Tengah */}
              <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 font-medium">

                <Link
                  href="/"
                  className={`relative pb-2 transition-all duration-300 hover:text-[#D4AF37] ${
                    activeSection === "hero" ? "text-[#D4AF37]" : "text-white"
                  }`}
                >
                  Beranda

                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] rounded-full bg-[#D4AF37] transition-all duration-300 ${
                      activeSection === "hero"
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </Link>

                <Link
                  href="/#tentang"
                  className={`relative pb-2 transition-all duration-300 hover:text-[#D4AF37] ${
                    activeSection === "tentang" ? "text-[#D4AF37]" : "text-white"
                  }`}
                >
                  Tentang

                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] rounded-full bg-[#D4AF37] transition-all duration-300 ${
                      activeSection === "tentang"
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </Link>

                <Link
                  href="/#program"
                  className={`relative pb-2 transition-all duration-300 hover:text-[#D4AF37] ${
                    activeSection === "program" ? "text-[#D4AF37]" : "text-white"
                  }`}
                >
                  Program

                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] rounded-full bg-[#D4AF37] transition-all duration-300 ${
                      activeSection === "program"
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </Link>

                <Link
                  href="/news"
                  className={`relative pb-2 transition-all duration-300 hover:text-[#D4AF37] ${
                    isActive("/news") ? "text-[#D4AF37]" : "text-white"
                  }`}
                >
                  Berita

                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] rounded-full bg-[#D4AF37] transition-all duration-300 ${
                      isActive("/news")
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </Link>

                <Link
                  href="/gallery"
                  className={`relative pb-2 transition-all duration-300 hover:text-[#D4AF37] ${
                    isActive("/gallery") ? "text-[#D4AF37]" : "text-white"
                  }`}
                >
                  Galeri

                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] rounded-full bg-[#D4AF37] transition-all duration-300 ${
                      isActive("/gallery")
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </Link>

                <Link
                  href="/psb"
                  className={`relative pb-2 transition-all duration-300 hover:text-[#D4AF37] ${
                    isActive("/psb") ? "text-[#D4AF37]" : "text-white"
                  }`}
                >
                  PSB

                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] rounded-full bg-[#D4AF37] transition-all duration-300 ${
                      isActive("/psb")
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </Link>

                <Link
                  href="/contact"
                  className={`relative pb-2 transition-all duration-300 hover:text-[#D4AF37] ${
                    isActive("/contact") ? "text-[#D4AF37]" : "text-white"
                  }`}
                >
                  Kontak

                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] rounded-full bg-[#D4AF37] transition-all duration-300 ${
                      isActive("/contact")
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </Link>

              </nav>

            {/* Kanan */}
            <div className="ml-auto flex items-center gap-4">

              <Link
                href="/pendaftaran"
                className="hidden md:inline-flex bg-[#D4AF37] hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold transition"
              >
                Daftar Sekarang
              </Link>

              <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-white text-3xl z-[1000]"
              >
                {open ? "✕" : "☰"}
              </button>

            </div>

          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[9999] md:hidden">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Fullscreen Menu */}
          <div className="relative h-screen overflow-y-auto overscroll-contain bg-[#0F5132] text-white flex flex-col">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-7 right-6 text-4xl z-50"
            >
              ✕
            </button>
            {/* Header */}
            <div className="relative flex items-center justify-center py-8">


              <div className="flex flex-col items-center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={70}
                  height={70}
                />

                <h2 className="mt-3 text-lg font-bold">
                  PPH NUR KHOIRI
                </h2>
              </div>

            </div>

            {/* Menu */}
            <nav className="flex flex-col px-8 mt-8 gap-6 text-2xl font-semibold">

              <Link href="/" onClick={() => setOpen(false)}>
                Beranda
              </Link>

              <Link href="/news" onClick={() => setOpen(false)}>
                Berita
              </Link>

              <Link href="/gallery" onClick={() => setOpen(false)}>
                Galeri
              </Link>

              <Link href="/psb" onClick={() => setOpen(false)}>
                PSB
              </Link>

              <Link href="/contact" onClick={() => setOpen(false)}>
                Kontak
              </Link>

            </nav>

            {/* Footer Info */}
            <div className="mt-auto p-8 border-t border-green-700">

              <h3 className="font-bold text-lg mb-3">
                Pondok Pesantren Huffadh Nur Khoiri
              </h3>

              <p className="text-sm text-gray-300">
                Membentuk Generasi Qur'ani,
                Berakhlakul Karimah,
                dan Berprestasi.
              </p>

              <div className="mt-4 text-sm text-gray-300 space-y-1">
                <p>WhatsApp: 08xxxxxxxxxx</p>
                <p>Email: info@pphnurkhoiri.sch.id</p>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}