export default function ProgramSection() {
  const programs = [
    "Tahfidz Al-Qur'an",
    "Ziyadah & Murojaah",
    "Madrasah Diniyah",
    "Fashohah",
    "Bin Nadzri",
    "Pembinaan Akhlak",
  ];

  return (
    <section
    id="program"
    className="min-h-screen flex items-center bg-[#FAF9F5]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

        <div className="text-center">

          <span className="uppercase tracking-widest text-[#D4AF37] font-semibold">
            Program Pendidikan
          </span>

          <h2 className="text-4xl lg:text-6xl font-bold text-[#0F5132] mt-4">
            Program Unggulan
            <br />
            Pondok Pesantren Huffadh Nur Khoiri
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed text-lg">
            Program pendidikan yang dirancang untuk
            membentuk generasi Qur'ani yang
            berakhlakul karimah, berilmu, dan siap
            mengamalkan ajaran Islam dalam kehidupan
            sehari-hari.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">

          {programs.map((program) => (
            <div
              key={program}
              className="
                bg-white
                rounded-3xl
                p-6
                shadow-sm
                border
                border-gray-100
                hover:shadow-lg
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-[#198754]/10 flex items-center justify-center text-[#198754] text-xl font-bold">
                  ✓
                </div>

                <h3 className="text-xl font-semibold text-[#0F5132]">
                  {program}
                </h3>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}