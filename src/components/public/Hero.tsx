import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-20">

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

            <div className="max-w-4xl text-white">

              <span className="inline-block bg-[#D4AF37] text-black px-4 py-2 rounded-full text-sm font-semibold">
                Pondok Pesantren
              </span>

              <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
                PONDOK PESANTREN
                <br />
                HUFFADH NUR KHOIRI
              </h1>

              <p className="text-lg md:text-xl mt-6 text-gray-100 max-w-2xl">
                Membentuk Generasi Qur'ani,
                Berakhlakul Karimah,
                dan Berprestasi.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <Link
                  href="/psb"
                  className="bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition"
                >
                  Pendaftaran
                </Link>

                <Link
                  href="/contact"
                  className="border-2 border-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#0F5132] transition"
                >
                  Hubungi Kami
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}