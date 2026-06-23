"use client";

export default function Header() {
  function logout() {
    localStorage.removeItem("admin");
    window.location.href = "/admin/login";
  }

  return (
    <header className="bg-white border-b px-6 py-4 flex items-center justify-between">

      <h1 className="font-bold text-2xl text-[#0F5132]">
        Dashboard Admin
      </h1>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>

    </header>
  );
}