"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleLogin() {
    setLoading(true);

    const res = await fetch(
      "/api/admin/login",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );

    const data = await res.json();

    if (data.success) {
      document.cookie =
        "admin_token=loggedin; path=/; max-age=604800";

      router.push("/admin");
      router.refresh();
    } else {
      alert(data.message);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F5132]">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login Admin
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(
              e.target.value
            )
          }
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-[#0F5132] text-white py-3 rounded-lg font-semibold"
        >
          {loading
            ? "Loading..."
            : "Login"}
        </button>

      </div>
    </div>
  );
}