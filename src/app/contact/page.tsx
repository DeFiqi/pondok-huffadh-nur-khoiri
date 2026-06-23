"use client";

import { useState } from "react";

export default function ContactPage() {
const [name, setName] =
useState("");

const [email, setEmail] =
useState("");

const [phone, setPhone] =
useState("");

const [subject, setSubject] =
useState("");

const [message, setMessage] =
useState("");

async function submitForm() {
if (!name || !message) {
alert(
"Nama dan pesan wajib diisi"
);
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
      email,
      phone,
      subject,
      message,
    }),
  }
);

if (res.ok) {
  alert(
    "Pesan berhasil dikirim"
  );

  setName("");
  setEmail("");
  setPhone("");
  setSubject("");
  setMessage("");
}


}

return ( <div className="max-w-7xl mx-auto py-16 px-6">


  <h1 className="text-5xl font-bold text-[#0F5132] mb-10">
    Hubungi Kami
  </h1>

  <div className="grid lg:grid-cols-2 gap-10">

    <div>

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-6">
          Kirim Pesan
        </h2>

        <input
          className="border p-3 rounded w-full mb-3"
          placeholder="Nama"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          className="border p-3 rounded w-full mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          className="border p-3 rounded w-full mb-3"
          placeholder="WhatsApp"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        <input
          className="border p-3 rounded w-full mb-3"
          placeholder="Subjek"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
        />

        <textarea
          rows={6}
          className="border p-3 rounded w-full mb-4"
          placeholder="Pesan"
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <button
          onClick={submitForm}
          className="bg-[#0F5132] text-white px-6 py-3 rounded-lg"
        >
          Kirim Pesan
        </button>

      </div>

    </div>

    <div>

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-6">
          Informasi Kontak
        </h2>

        <div className="space-y-4">

          <p>
            📍 Janti, Mojoagung,
            Jombang 61482,
            Jawa Timur
          </p>

          <p>
            📞 +62xxxxxxxxxx
          </p>

          <p>
            ✉ info@huffadhnurkhoiri.sch.id
          </p>

          <p>
            🕒 Senin - Sabtu
            08.00 - 16.00 WIB
          </p>

        </div>

      </div>

      <div className="bg-white rounded-xl shadow p-3 mt-6">

        <iframe
          src="https://maps.google.com/maps?q=mojoagung%20jombang&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[350px] rounded-lg"
        />

      </div>

    </div>

  </div>

</div>

);
}
