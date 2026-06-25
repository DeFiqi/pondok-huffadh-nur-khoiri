import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative"
    >

      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('/hero-pesantren.JPG')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F5132]/95 via-[#0F5132]/80 to-[#198754]/70" />

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center">

          <div className="max-w-7xl mx-auto px-6 w-full">

            <div className="max-w-5xl text-white">

              <div className="inline-flex items-center gap-3 bg-[#D4AF37] text-black px-5 py-2 rounded-full text-sm font-semibold">

                <span className="pulse-dot w-3 h-3 bg-green-700 rounded-full"></span>

                <span>
                  Pendaftaran Santri Baru Dibuka
                </span>

              </div>

              <h1 className="text-5xl md:text-8xl font-bold mt-6 leading-[1.1]">
                PONDOK PESANTREN
                <br />
                HUFFADH NUR KHOIRI
              </h1>

              <p className="text-lg md:text-2xl mt-8 text-gray-100 max-w-2xl leading-relaxed">
                Membentuk Generasi Qur'ani,
                Berakhlakul Karimah,
                dan Berprestasi.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/pendaftaran"
                  className="bg-[#D4AF37] hover:bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold transition"
                >
                  Daftar Sekarang →
                </Link>

                <Link
                  href="/psb"
                  className="border border-white text-white hover:bg-white hover:text-[#0F5132] px-8 py-4 rounded-xl transition"
                >
                  Baca Lebih Lanjut
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}