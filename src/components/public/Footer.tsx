import Link from "next/link";

export default function Footer() {
return ( <footer className="bg-[#0F5132] text-white">

  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid md:grid-cols-4 gap-10">

      <div>

        <h3 className="font-bold text-2xl">
          Huffadh Nur Khoiri
        </h3>

        <p className="mt-4 text-gray-300">
          Janti, Mojoagung,
          Jombang 61482,
          Jawa Timur
        </p>

      </div>

      <div>

        <h4 className="font-bold mb-4">
          Menu
        </h4>

        <div className="space-y-2">

          <Link href="/">
            Beranda
          </Link>

          <br />

          <Link href="/about">
            Profil
          </Link>

          <br />

          <Link href="/news">
            Berita
          </Link>

          <br />

          <Link href="/gallery">
            Galeri
          </Link>

        </div>

      </div>

      <div>

        <h4 className="font-bold mb-4">
          Kontak
        </h4>

        <p>
          info@huffadh.id
        </p>

        <p>
          +62xxxxxxxxxx
        </p>

      </div>

      <div>

        <h4 className="font-bold mb-4">
          Developer
        </h4>

        <p>
          FawwaDev
        </p>

      </div>

    </div>

    <div className="border-t border-green-800 mt-10 pt-6 text-center">

      © {new Date().getFullYear()}
      {" "}
      Pondok Pesantren
      Huffadh Nur Khoiri

    </div>

  </div>

</footer>


);
}
