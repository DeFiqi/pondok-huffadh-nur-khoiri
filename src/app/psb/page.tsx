import Link from "next/link";

export default function PSBPage() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0F5132] to-[#198754] text-white">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <span className="bg-[#D4AF37] text-black px-4 py-2 rounded-full font-semibold">
                Tahun Ajaran 2027 / 2028
              </span>

              <h1 className="text-5xl md:text-7xl font-bold mt-6">
                SISTEM
                <br />
                PENERIMAAN
                <br />
                SANTRI BARU
              </h1>

              <p className="text-xl mt-6">
                Mewujudkan generasi Qur'ani
                yang cerdas, berakhlakul karimah,
                berilmu dan beramal shalih.
              </p>

              <div className="mt-8">

                <div className="inline-flex items-center gap-3 bg-white text-[#0F5132] px-6 py-4 rounded-xl">

                  <span className="text-3xl">
                    ✓
                  </span>

                  <div>

                    <h3 className="font-bold text-2xl">
                      GRATIS
                    </h3>

                    <p>
                      Tanpa Biaya Pendaftaran
                    </p>

                  </div>

                </div>

              </div>

              <a
                href="LINK_GOOGLE_FORM"
                target="_blank"
                className="inline-block mt-8 bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-bold"
              >
                Isi Formulir Pendaftaran
              </a>

            </div>

            <div>

              <img
                src="/psb-banner.png"
                alt="PSB"
                className="rounded-3xl shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* PROGRAM */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow p-10">

            <h2 className="text-4xl font-bold text-center text-[#0F5132] mb-10">
              Program Unggulan
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              <div>

                <ul className="space-y-4 text-lg">

                  <li>✓ Gratis Mondok</li>
                  <li>✓ Tahfidz Al-Qur'an</li>
                  <li>✓ Ziyadah & Murojaah</li>
                  <li>✓ Madrasah Diniyah</li>

                </ul>

              </div>

              <div>

                <ul className="space-y-4 text-lg">

                  <li>✓ Fashohah</li>
                  <li>✓ Bin Nadzri</li>
                  <li>✓ Pembinaan Akhlak</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SYARAT */}
      <section className="bg-[#0F5132] py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="bg-white rounded-3xl p-8">

              <h2 className="text-3xl font-bold text-[#0F5132] mb-8">
                Syarat Pendaftaran
              </h2>

              <ul className="space-y-4 text-lg">

                <li>✓ Mengisi Formulir</li>
                <li>✓ Fotokopi KK</li>
                <li>✓ Fotokopi KTP Orang Tua</li>
                <li>✓ Fotokopi Akta Kelahiran</li>

              </ul>

            </div>

            <div className="bg-white rounded-3xl p-8">

              <h2 className="text-3xl font-bold text-[#0F5132] mb-8">
                Informasi & Pendaftaran
              </h2>

              <div className="space-y-4">

                <a
                  href="https://wa.me/6285723729618"
                  target="_blank"
                  className="flex justify-between items-center bg-green-50 p-4 rounded-xl"
                >
                  <div>
                    <h3 className="font-bold">
                      Ust. Khoiron
                    </h3>
                    <p>
                      0857-2372-9618
                    </p>
                  </div>

                  <span className="bg-green-500 text-white px-4 py-2 rounded-lg">
                    WhatsApp
                  </span>

                </a>

                <a
                  href="https://wa.me/6285648504692"
                  target="_blank"
                  className="flex justify-between items-center bg-green-50 p-4 rounded-xl"
                >
                  <div>
                    <h3 className="font-bold">
                      Khoirul Mustofa
                    </h3>
                    <p>
                      0856-4850-4692
                    </p>
                  </div>

                  <span className="bg-green-500 text-white px-4 py-2 rounded-lg">
                    WhatsApp
                  </span>

                </a>

                <a
                  href="https://wa.me/6285730645312"
                  target="_blank"
                  className="flex justify-between items-center bg-green-50 p-4 rounded-xl"
                >
                  <div>
                    <h3 className="font-bold">
                      Abdul Munib
                    </h3>
                    <p>
                      0857-3064-5312
                    </p>
                  </div>

                  <span className="bg-green-500 text-white px-4 py-2 rounded-lg">
                    WhatsApp
                  </span>

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}