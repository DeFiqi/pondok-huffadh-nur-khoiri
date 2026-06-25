export default function WelcomeSection() {
  return (
    <section className="min-h-screen flex items-center bg-[#FAF9F5]">
      <div className="container mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Kiri */}
          <div className="flex justify-center">

            <div className="relative w-[320px] h-[320px] flex items-center justify-center">

              {/* Lingkaran luar */}
              <div className="absolute inset-0 rounded-full border-[14px] border-green-100"></div>

              {/* Lingkaran tengah */}
              <div className="absolute inset-6 rounded-full border-4 border-[#D4AF37]/50"></div>

              {/* Logo */}
              <div className="w-44 h-44 bg-white rounded-full shadow-lg flex items-center justify-center">

                <img
                  src="/logo.png"
                  alt="Logo Pondok"
                  className="w-24 h-24 object-contain"
                />

              </div>

              {/* Ornamen */}
              <div className="absolute top-2 right-0 w-16 h-16 rounded-full border-4 border-[#D4AF37]/40"></div>

              <div className="absolute bottom-6 left-0 w-12 h-12 rounded-full bg-[#D4AF37]/20"></div>

            </div>

          </div>

          {/* Kanan */}
          <div>

            <span className="uppercase tracking-widest text-[#D4AF37] font-semibold">
              Sambutan Pengasuh
            </span>

            <div className="w-12 h-1 bg-[#D4AF37] mt-3 mb-6"></div>

            <h2 className="text-4xl lg:text-6xl font-bold text-[#0F5132] leading-tight">
              Pondok Pesantren
              <br />
              Huffadh Nur Khoiri
            </h2>

            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Pondok Pesantren Huffadh Nur Khoiri hadir
              sebagai lembaga pendidikan Islam yang
              berkomitmen mencetak generasi Qur'ani,
              berakhlakul karimah, dan berprestasi.
            </p>

            <p className="mt-5 text-lg text-gray-700 leading-relaxed">
              Dengan bimbingan para ustadz dan lingkungan
              yang kondusif, santri dibina untuk mencintai
              Al-Qur'an, memahami ilmu agama, serta siap
              menghadapi tantangan zaman.
            </p>

            {/* Quote */}
            <div className="mt-8 p-6 rounded-2xl border bg-white shadow-sm">

              <p className="italic text-gray-700 text-lg">
                "Al-Qur'an bukan hanya untuk dihafal,
                tetapi juga untuk diamalkan dalam
                kehidupan sehari-hari."
              </p>

              <p className="mt-4 text-sm text-gray-500">
                — Pengasuh Pondok Pesantren Huffadh Nur Khoiri
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}