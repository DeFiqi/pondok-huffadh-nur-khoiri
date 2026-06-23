"use client";

import {
  useEffect,
  useState,
} from "react";

export default function SettingsPage() {
  const [form, setForm] =
    useState<any>({
      siteName: "",
      description: "",
      logo: "",
      whatsapp: "",
      email: "",
      address: "",
      mapsEmbed: "",
      facebook: "",
      instagram: "",
      youtube: "",
    });

  async function load() {
    const res = await fetch(
      "/api/settings"
    );

    const data =
      await res.json();

    setForm(data);
  }

  async function save() {
    await fetch(
      "/api/settings",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(
          form
        ),
      }
    );

    alert(
      "Pengaturan berhasil disimpan"
    );
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Pengaturan Website
      </h1>

      <div className="bg-white rounded-xl shadow p-6">

        {Object.keys(form).map(
          (key) => (
            <input
              key={key}
              className="border p-3 rounded w-full mb-3"
              placeholder={key}
              value={form[key] || ""}
              onChange={(e) =>
                setForm({
                  ...form,
                  [key]:
                    e.target.value,
                })
              }
            />
          )
        )}

        <button
          onClick={save}
          className="bg-[#0F5132] text-white px-6 py-3 rounded"
        >
          Simpan
        </button>

      </div>

    </div>
  );
}