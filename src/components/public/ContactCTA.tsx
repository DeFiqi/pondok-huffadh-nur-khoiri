import Link from "next/link";

export default function ContactCTA() {
return ( <section className="py-20 bg-[#198754] text-white">

  <div className="max-w-5xl mx-auto text-center px-6">

    <h2 className="text-4xl font-bold">
      Mari Bergabung Bersama Kami
    </h2>

    <p className="mt-4 text-xl">
      Wujudkan generasi Qur'ani
      bersama Pondok Pesantren
      Huffadh Nur Khoiri.
    </p>

    <Link
      href="/contact"
      className="inline-block mt-8 bg-white text-[#198754] px-8 py-4 rounded-xl font-bold"
    >
      Hubungi Kami
    </Link>

  </div>

</section>


);
}
