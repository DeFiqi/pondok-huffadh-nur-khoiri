"use client";

import { useState } from "react";

export default function ContactPage() {
const [name, setName] =
useState("");

const [phone, setPhone] =
useState("");

const [message, setMessage] =
useState("");

const [showModal, setShowModal] =
useState(false);

const [modalTitle, setModalTitle] =
useState("");

const [modalMessage, setModalMessage] =
useState("");

const [modalSuccess, setModalSuccess] =
useState(true);

async function submitForm() {
if (
name.trim().length < 3
) {
setModalSuccess(false);
setModalTitle("Validasi Gagal");
setModalMessage("Nama minimal 3 karakter.");
setShowModal(true);
return;
}

 
if (
  !/^[0-9]{10,15}$/.test(
    phone
  )
) {
    setModalSuccess(false);
    setModalTitle("Validasi Gagal");
    setModalMessage("Nomor WhatsApp tidak valid.");
    setShowModal(true);
    return;
}

if (
  message.trim().length < 10
) {
  setModalSuccess(false);
  setModalTitle("Validasi Gagal");
  setModalMessage("Pesan minimal 10 karakter.");
  setShowModal(true);
  return;
}

const res = await fetch(
  "/api/contact",
  {
    method: "POST",
    headers: {
      "Content-Type":
        "application/json",
    },
    body: JSON.stringify({
      name,
      phone,
      message,

      email: "-",
      subject: "Pesan Website",
    }),
  }
);

if (res.ok) {
  setModalSuccess(true);
  setModalTitle("Pesan Berhasil");
  setModalMessage(
    "Terima kasih telah menghubungi Pondok Pesantren Huffadh Nur Khoiri. Kami akan segera merespons pesan Anda."
  );
  setShowModal(true);

  setName("");
  setPhone("");
  setMessage("");
}
 

}

return ( <div className="min-h-screen bg-[#FAF9F5] pt-20">

  {/* HERO */}
  <section className="relative h-[340px] overflow-hidden">

    <img
      src="/contact-banner.jpg"
      alt="Hubungi Kami"
      className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-[#0F5132]/70" />

    <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

      <div>

        <span className="uppercase tracking-[6px] text-[#D4AF37] font-semibold">
          Hubungi Kami
        </span>

        <h1 className="text-5xl lg:text-7xl font-bold text-white mt-5">
          Kami Siap Membantu Anda
        </h1>

        <p className="text-white/90 mt-6 max-w-3xl mx-auto text-lg">
          Hubungi kami untuk informasi
          pendaftaran, program pendidikan,
          maupun kegiatan Pondok Pesantren
          Huffadh Nur Khoiri.
        </p>

      </div>

    </div>

  </section>

  <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

  <div className="grid lg:grid-cols-2 gap-10">

    {/* FORM */}

    <div>

      <div className="bg-white rounded-3xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-[#0F5132] mb-2">
          Kirim Pesan
        </h2>

        <p className="text-gray-500 mb-6">
          Silakan kirim pertanyaan
          atau informasi yang ingin
          disampaikan kepada kami.
        </p>

        <div className="space-y-4">

          <input
            className="border p-4 rounded-xl w-full"
            placeholder="Nama"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
          />

          <input
            className="border p-4 rounded-xl w-full"
            placeholder="08xxxxxxxxxx"
            value={phone}
            onChange={(e) =>
              setPhone(
                e.target.value
              )
            }
          />

          <textarea
            rows={6}
            className="border p-4 rounded-xl w-full"
            placeholder="Tulis pesan Anda..."
            value={message}
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
          />

          <button
            onClick={submitForm}
            className="
              w-full
              bg-[#198754]
              hover:bg-[#146c43]
              text-white
              font-semibold
              py-4
              rounded-xl
              transition
            "
          >
            Kirim Pesan
          </button>

        </div>

      </div>

    </div>

    {/* KONTAK */}

    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

      <div className="p-8">

        <h2 className="text-4xl font-bold text-[#0F5132] mb-8">
          Hubungi Kami
        </h2>

        <div className="space-y-8">

          <div className="flex gap-4">

            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-xl">
              📞
            </div>

            <div>

              <p className="text-gray-500 text-sm">
                Telepon / WhatsApp
              </p>

              <p className="font-semibold text-lg">
                0857-2372-9618
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-xl">
              📍
            </div>

            <div>

              <p className="text-gray-500 text-sm">
                Alamat
              </p>

              <p className="font-semibold">
                Janti, Mojoagung,
                Jombang 61482,
                Jawa Timur
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-xl">
              🕒
            </div>

            <div>

              <p className="text-gray-500 text-sm">
                Jam Operasional
              </p>

              <p className="font-semibold">
                Senin - Ahad,
                08.00 - 16.00 WIB
              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="overflow-hidden rounded-b-3xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d364.76159530445614!2d112.32638863903725!3d-7.5815001855135495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1782363117685!5m2!1sid!2sid"
          className="w-full h-[320px]"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

    </div>

  </div>

    </div>

    {showModal && (
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-6"
        onClick={() =>
          setShowModal(false)
        }
      >
        <div
          onClick={(e) =>
            e.stopPropagation()
          }
          className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 text-center animate-[fadeIn_.25s_ease]"
        >
          <div
            className={`mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-full text-4xl ${
              modalSuccess
                ? "bg-green-100"
                : "bg-red-100"
            }`}
          >
            {modalSuccess ? "✓" : "✕"}
          </div>

          <h2 className="text-3xl font-bold text-[#0F5132]">
            {modalTitle}
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {modalMessage}
          </p>

          <button
            onClick={() =>
              setShowModal(false)
            }
            className={`mt-8 w-full py-4 rounded-xl font-semibold transition ${
              modalSuccess
                ? "bg-[#198754] hover:bg-[#146c43] text-white"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
          >
            Baik
          </button>
        </div>
      </div>
    )}

  </div>

);
}
