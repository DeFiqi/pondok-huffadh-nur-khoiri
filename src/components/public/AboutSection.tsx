export default function AboutSection() {
  return (
    <section
    id="tentang"
    className="min-h-screen flex items-center bg-white"
    >
      <div className="container mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Kiri */}
          <div className="relative">

            <img
              src="/hero-pesantren.jpg"
              alt="Santri"
              className="rounded-3xl w-full h-[500px] object-cover"
            />

            <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-2xl px-8 py-5 border">

              <h3 className="text-4xl font-bold text-[#0F5132]">
                100+
              </h3>

              <p className="text-gray-600">
                Santri Aktif
              </p>

            </div>

          </div>

          {/* Kanan */}
          <div>

            <span className="uppercase tracking-widest text-[#D4AF37] font-semibold">
              Tentang Kami
            </span>

            <h2 className="text-4xl lg:text-6xl font-bold text-[#0F5132] mt-4 leading-tight">
              Pondok Pesantren
              <br />
              Huffadh Nur Khoiri
            </h2>

            <p className="text-gray-600 mt-6 leading-relaxed text-lg">
              Pondok Pesantren Huffadh Nur Khoiri merupakan
              lembaga pendidikan Islam yang berfokus pada
              pembinaan tahfidzul Qur'an, pembentukan
              akhlakul karimah, serta pengembangan potensi
              santri agar menjadi generasi Qur'ani yang
              bermanfaat bagi agama, bangsa, dan masyarakat.
            </p>

            {/* VISI */}
            <div className="mt-8 p-6 rounded-2xl border bg-green-50">

              <h3 className="font-bold text-[#0F5132] text-xl">
                Visi
              </h3>

              <p className="mt-3 text-gray-700">
                Membentuk generasi Qur'ani,
                berakhlakul karimah,
                dan berprestasi.
              </p>

            </div>

            {/* MISI */}
            <div className="mt-6">

              <h3 className="font-bold text-[#0F5132] text-xl mb-4">
                Misi
              </h3>

              <ul className="space-y-3 text-gray-700">

                <li>
                  ✓ Membina hafalan Al-Qur'an secara
                  terstruktur dan berkelanjutan.
                </li>

                <li>
                  ✓ Menanamkan akhlakul karimah dalam
                  kehidupan sehari-hari.
                </li>

                <li>
                  ✓ Mengembangkan ilmu pengetahuan dan
                  keterampilan santri.
                </li>

                <li>
                  ✓ Mencetak generasi yang mandiri dan
                  bermanfaat bagi masyarakat.
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}