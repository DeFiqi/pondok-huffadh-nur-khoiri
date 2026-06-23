export default function DashboardCards() {
  return (
    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">
          Total Berita
        </h3>

        <p className="text-4xl font-bold mt-2 text-[#0F5132]">
          0
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">
          Total Galeri
        </h3>

        <p className="text-4xl font-bold mt-2 text-[#0F5132]">
          0
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">
          Total Program
        </h3>

        <p className="text-4xl font-bold mt-2 text-[#0F5132]">
          0
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">
          Total PPDB
        </h3>

        <p className="text-4xl font-bold mt-2 text-[#0F5132]">
          0
        </p>
      </div>

    </div>
  );
}