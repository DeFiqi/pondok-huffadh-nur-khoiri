import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="bg-[#0F5132] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-6">
            Profil Pesantren
          </h1>

          <p className="max-w-3xl text-lg">
            Pondok Pesantren Huffadh Nur Khoiri merupakan
            lembaga pendidikan Islam yang berfokus pada
            pembinaan akhlak, pengajaran ilmu agama,
            dan tahfidz Al-Qur'an.
          </p>

        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0F5132] mb-8">
            Sejarah Singkat
          </h2>

          <p className="leading-8 text-gray-700">
            Tuliskan sejarah berdirinya Pondok Pesantren
            Huffadh Nur Khoiri di sini. Nantinya bagian ini
            akan diambil dari MongoDB agar bisa diedit
            melalui admin panel.
          </p>

        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <h2 className="text-3xl font-bold text-[#0F5132] mb-4">
                Visi
              </h2>

              <p>
                Menjadi lembaga pendidikan Islam unggulan
                dalam mencetak generasi Qur'ani yang
                berakhlakul karimah.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#0F5132] mb-4">
                Misi
              </h2>

              <ul className="space-y-3">
                <li>• Menanamkan nilai Islam sejak dini.</li>
                <li>• Membina hafalan Al-Qur'an.</li>
                <li>• Membentuk karakter santri.</li>
                <li>• Mengembangkan potensi akademik.</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}