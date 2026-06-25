"use client";

import Link from "next/link";
import { useState } from "react";

export default function PendaftaranPage() {
  const [form, setForm] = useState({
    nama: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "",
    ayah: "",
    ibu: "",
    whatsapp: "",
    alamat: "",
    panitia: "",
    setuju: false,
  });

  const [errors, setErrors] = useState<any>({});
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: any = {};

    if (form.nama.trim().length < 3)
      newErrors.nama = "Nama minimal 3 karakter";

    if (form.tempatLahir.trim().length < 3)
      newErrors.tempatLahir =
        "Tempat lahir minimal 3 karakter";

    if (!form.tanggalLahir)
      newErrors.tanggalLahir =
        "Tanggal lahir wajib diisi";

    if (!form.jenisKelamin)
      newErrors.jenisKelamin =
        "Pilih jenis kelamin";

    if (form.ayah.trim().length < 3)
      newErrors.ayah =
        "Nama ayah minimal 3 karakter";

    if (form.ibu.trim().length < 3)
      newErrors.ibu =
        "Nama ibu minimal 3 karakter";

    if (
      !/^[0-9]{10,15}$/.test(form.whatsapp)
    )
      newErrors.whatsapp =
        "Nomor WhatsApp tidak valid";

    if (form.alamat.trim().length < 10)
      newErrors.alamat =
        "Alamat minimal 10 karakter";

    if (!form.panitia)
      newErrors.panitia =
        "Pilih panitia tujuan";

    if (!form.setuju)
      newErrors.setuju =
        "Anda harus menyetujui syarat";

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  const clearForm = () => {
    setForm({
      nama: "",
      tempatLahir: "",
      tanggalLahir: "",
      jenisKelamin: "",
      ayah: "",
      ibu: "",
      whatsapp: "",
      alamat: "",
      panitia: "",
      setuju: false,
    });

    setErrors({});
  };

  const kirimWhatsApp = () => {
    const nomorPanitia: any = {
      khoiron: "6285655742874",
      mustofa: "6285655742874",
      munib: "6285655742874",
    };

    const pesan = `
*PENDAFTARAN SANTRI BARU*

📌 DATA CALON SANTRI

Nama Lengkap:
${form.nama}

Tempat Lahir:
${form.tempatLahir}

Tanggal Lahir:
${form.tanggalLahir}

Jenis Kelamin:
${form.jenisKelamin}

📌 DATA ORANG TUA / WALI

Nama Ayah:
${form.ayah}

Nama Ibu:
${form.ibu}

No WhatsApp:
${form.whatsapp}

Alamat:
${form.alamat}
`;

    window.open(
      `https://wa.me/${
        nomorPanitia[form.panitia]
      }?text=${encodeURIComponent(
        pesan
      )}`,
      "_blank"
    );
  };

  return (
    <>
      <div className="min-h-screen bg-slate-50 py-12 px-4">

        <div className="max-w-4xl mx-auto">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#0F5132] font-semibold mb-8"
          >
            ← Kembali ke Beranda
          </Link>

          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">

            <h1 className="text-4xl font-bold text-[#0F5132]">
              Pendaftaran Santri Baru
            </h1>

            <p className="text-gray-600 mt-3">
              Isi data diri calon santri dengan lengkap
            </p>

            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-6">
                Data Calon Santri
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label>Nama Lengkap *</label>
                  <input
                    name="nama"
                    value={form.nama}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3 mt-2"
                  />
                  {errors.nama && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.nama}
                    </p>
                  )}
                </div>

                <div>
                  <label>Tempat Lahir *</label>
                  <input
                    name="tempatLahir"
                    value={form.tempatLahir}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3 mt-2"
                  />
                  {errors.tempatLahir && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.tempatLahir}
                    </p>
                  )}
                </div>

                <div>
                  <label>Tanggal Lahir *</label>
                  <input
                    type="date"
                    name="tanggalLahir"
                    value={form.tanggalLahir}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3 mt-2"
                  />
                </div>

                <div>
                  <label>Jenis Kelamin *</label>

                  <select
                    name="jenisKelamin"
                    value={form.jenisKelamin}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3 mt-2"
                  >
                    <option value="">
                      Pilih
                    </option>
                    <option value="Laki-laki">
                      Laki-laki
                    </option>
                    <option value="Perempuan">
                      Perempuan
                    </option>
                  </select>
                </div>

              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6">
                Data Orang Tua / Wali
              </h2>

              <div>
                <label className="block font-medium mb-2">
                  Nama Ayah *
                </label>

                <input
                  name="ayah"
                  placeholder="Nama lengkap ayah"
                  value={form.ayah}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />

                {errors.ayah && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.ayah}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Nama Ibu *
                </label>

                <input
                  name="ibu"
                  placeholder="Nama lengkap ibu"
                  value={form.ibu}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />

                {errors.ibu && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.ibu}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block font-medium mb-2">
                  No. WhatsApp *
                </label>

                <input
                  name="whatsapp"
                  placeholder="08xxxxxxxxxx"
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />

                {errors.whatsapp && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.whatsapp}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block font-medium mb-2">
                  Panitia Tujuan *
                </label>

                <select
                  name="panitia"
                  value={form.panitia}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                >
                  <option value="">
                    Pilih Panitia Tujuan
                  </option>

                  <option value="khoiron">
                    Ust. Khoiron
                  </option>

                  <option value="mustofa">
                    Khoirul Mustofa
                  </option>

                  <option value="munib">
                    Abdul Munib
                  </option>
                </select>

                {errors.panitia && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.panitia}
                  </p>
                )}
              </div>

              <div className="mt-6">

                <label className="block font-medium mb-2">
                  Alamat Lengkap *
                </label>

                <textarea
                  name="alamat"
                  placeholder="Alamat rumah lengkap (RT/RW, Kelurahan, Kecamatan, Kota)"
                  value={form.alamat}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border rounded-xl p-3"
                />

                <p className="text-sm text-gray-500 mt-1">
                  Alamat minimal 10 karakter
                </p>

                {errors.alamat && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.alamat}
                  </p>
                )}

              </div>

              <div className="mt-8">
                <label className="flex items-start gap-3">

                  <input
                    type="checkbox"
                    checked={form.setuju}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        setuju:
                          e.target.checked,
                      })
                    }
                  />

                  <span>
                    Saya menyatakan bahwa
                    data yang diisi adalah
                    benar dan bersedia
                    mengikuti seluruh
                    peraturan Pondok
                    Pesantren Huffadh Nur
                    Khoiri.
                  </span>

                </label>

                {errors.setuju && (
                  <p className="text-red-500 mt-2">
                    {errors.setuju}
                  </p>
                )}
              </div>

              <div className="flex gap-4 mt-10">

                <button
                  onClick={clearForm}
                  className="px-6 py-3 rounded-xl bg-gray-200 font-semibold"
                >
                  Clear Form
                </button>

                <button
                  onClick={() => {
                    if (validate()) {
                      setShowConfirm(true);
                    }
                  }}
                  className="px-6 py-3 rounded-xl bg-[#0F5132] text-white font-semibold"
                >
                  Kirim Pendaftaran
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white p-8 rounded-2xl max-w-md w-full">

            <h3 className="text-xl font-bold">
              Konfirmasi Data
            </h3>

            <p className="mt-3 text-gray-600">
              Pastikan seluruh data sudah benar sebelum dikirim.
            </p>

            <div className="flex gap-3 mt-6">

              <button
                onClick={() =>
                  setShowConfirm(false)
                }
                className="flex-1 bg-gray-200 py-3 rounded-xl"
              >
                Batal
              </button>

              <button
                onClick={() => {
                  setShowConfirm(false);
                  kirimWhatsApp();
                }}
                className="flex-1 bg-[#0F5132] text-white py-3 rounded-xl"
              >
                Kirim
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}