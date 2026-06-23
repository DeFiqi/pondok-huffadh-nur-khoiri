"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F5132]/95 backdrop-blur border-b border-green-800">

        <div className="max-w-7xl mx-auto px-4">

          <div className="h-20 flex items-center justify-between">

            <Link
              href="/"
              className="flex items-center gap-3"
            >

              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                priority
              />

              <div>

                <h1 className="text-white font-bold text-sm md:text-lg leading-tight">
                  PPH NUR KHOIRI
                </h1>


              </div>

            </Link>

            {/* Desktop */}
            <nav className="hidden md:flex items-center gap-8 text-white">

              <Link href="/">Beranda</Link>
              <Link href="/news">Berita</Link>
              <Link href="/gallery">Galeri</Link>
              <Link href="/psb">PSB</Link>
              <Link href="/contact">Kontak</Link>

            </nav>

            <Link
              href="/psb"
              className="hidden md:block bg-[#D4AF37] text-black px-5 py-3 rounded-xl font-semibold"
            >
              Daftar
            </Link>

            {/* Mobile Menu */}
            <button
              onClick={() =>
                setOpen(!open)
              }
              className="md:hidden text-white text-3xl"
            >
              ☰
            </button>

          </div>

        </div>

      </header>

      {/* Mobile Drawer */}

      {open && (

        <div className="fixed inset-0 z-40 bg-black/50 md:hidden">

          <div className="absolute top-0 right-0 w-72 h-full bg-white shadow-xl p-6">

            <button
              onClick={() =>
                setOpen(false)
              }
              className="text-2xl mb-6"
            >
              ✕
            </button>

            <div className="flex flex-col gap-5 text-lg">

              <Link href="/">
                Beranda
              </Link>

              <Link href="/news">
                Berita
              </Link>

              <Link href="/gallery">
                Galeri
              </Link>

              <Link href="/psb">
                PSB
              </Link>

              <Link href="/contact">
                Kontak
              </Link>

            </div>

          </div>

        </div>

      )}
    </>
  );
}