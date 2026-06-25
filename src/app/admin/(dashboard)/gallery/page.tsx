"use client";

import { useEffect, useState } from "react";

export default function GalleryPage() {
  const [items, setItems] =
    useState<any[]>([]);

  const [title, setTitle] =
    useState("");

  const [image, setImage] =
    useState("");

  const [category, setCategory] =
    useState("Kegiatan");

  const [featured, setFeatured] =
    useState(false);

  async function loadGallery() {
    const res = await fetch(
      "/api/gallery"
    );

    const data =
      await res.json();

    setItems(data);
  }

  async function uploadImage(
    file: File
  ) {
    const formData =
      new FormData();

    formData.append(
      "file",
      file
    );

    const res = await fetch(
      "/api/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data =
      await res.json();

    if (data.success) {
      setImage(data.url);
    }
  }

  async function saveGallery() {
    await fetch("/api/gallery", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        title,
        image,
        category,
        featured,
      }),
    });

    setTitle("");
    setImage("");
    setCategory("Kegiatan");
    setFeatured(false);

    loadGallery();
  }

  async function deleteItem(
    id: string
  ) {
    if (
      !confirm(
        "Hapus foto?"
      )
    )
      return;

    await fetch(
      `/api/gallery/${id}`,
      {
        method: "DELETE",
      }
    );

    loadGallery();
  }

  useEffect(() => {
    loadGallery();
  }, []);

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Manajemen Galeri
      </h1>

      <div className="bg-white p-6 rounded-xl shadow mb-8">

        <input
          className="border p-3 rounded w-full mb-3"
          placeholder="Judul Foto"
          value={title}
          onChange={(e) =>
            setTitle(
              e.target.value
            )
          }
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file =
              e.target
                .files?.[0];

            if (file) {
              uploadImage(
                file
              );
            }
          }}
        />

        {image && (
          <img
            src={image}
            className="w-52 h-40 object-cover rounded-lg mt-4"
          />
        )}

        <select
          className="border p-3 rounded w-full mt-4"
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
        >
          <option>
            Kegiatan
          </option>
          <option>
            Tahfidz
          </option>
          <option>
            Santri
          </option>
          <option>
            Acara
          </option>
        </select>

        <label className="flex items-center gap-2 mt-4">

          <input
            type="checkbox"
            checked={featured}
            onChange={(e) =>
              setFeatured(
                e.target.checked
              )
            }
          />

          Featured Gallery

        </label>

        <button
          onClick={saveGallery}
          className="mt-4 bg-[#0F5132] text-white px-6 py-3 rounded"
        >
          Simpan
        </button>

      </div>

      <div className="grid md:grid-cols-4 gap-6">

        {items.map(
          (item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow overflow-hidden"
            >

              <img
                src={
                  item.image
                }
                className="w-full h-48 object-cover"
              />

              <div className="p-4">

                <h3 className="font-bold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {
                    item.category
                  }
                </p>

                <button
                  onClick={() =>
                    deleteItem(
                      item._id
                    )
                  }
                  className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
                >
                  Hapus
                </button>

              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
}