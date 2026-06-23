"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {

  const [open, setOpen] =
    useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">

      {open && (

        <div className="bg-white rounded-2xl shadow-xl p-4 mb-3 w-72">

          <h3 className="font-bold mb-3">
            Hubungi Panitia PSB
          </h3>

          <div className="space-y-3">

            <a
              href="https://wa.me/6285723729618"
              target="_blank"
              className="block bg-green-500 text-white text-center py-3 rounded-lg"
            >
              Ust. Khoiron
            </a>

            <a
              href="https://wa.me/6285648504692"
              target="_blank"
              className="block bg-green-500 text-white text-center py-3 rounded-lg"
            >
              Khoirul Mustofa
            </a>

            <a
              href="https://wa.me/6285730645312"
              target="_blank"
              className="block bg-green-500 text-white text-center py-3 rounded-lg"
            >
              Abdul Munib
            </a>

          </div>

        </div>

      )}

      <button
    onClick={() => setOpen(!open)}
    className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center"
    >
    <FaWhatsapp size={34} />
    </button>

    </div>
  );
}