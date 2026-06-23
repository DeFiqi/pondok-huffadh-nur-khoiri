"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleLogin() {

    const res = await fetch(
      "/api/admin/login",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      }
    );

    const data = await res.json();

    if (data.success) {

      localStorage.setItem(
        "admin",
        JSON.stringify(data.user)
      );

      router.push("/admin");

    } else {

      alert(data.message);

    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F5132]">

      <div className="bg-white p-10 rounded-xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6">
          Login Admin
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-3 rounded mb-4"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleLogin}
          className="w-full bg-[#0F5132] text-white py-3 rounded"
        >
          Login
        </button>

      </div>

    </div>
  );
}