"use client";

import { useEffect, useState } from "react";

export default function NewsPage() {
const [news, setNews] = useState<any[]>([]);

const [title, setTitle] = useState("");
const [excerpt, setExcerpt] = useState("");
const [content, setContent] = useState("");
const [cover, setCover] = useState("");

const [featured, setFeatured] =
useState(false);

const [published, setPublished] =
useState(true);

const [editingId, setEditingId] =
useState<string | null>(null);

const [uploading, setUploading] =
  useState(false);

async function loadNews() {
try {
const res = await fetch("/api/news");

 
  const data = await res.json();

  setNews(data);
} catch (error) {
  console.error(error);
}
 

}

function resetForm() {
setEditingId(null);

 
setTitle("");
setExcerpt("");
setContent("");
setCover("");

setFeatured(false);
setPublished(true);
 

}

async function createNews() {
if (
!title ||
!excerpt ||
!content
) {
alert("Semua field wajib diisi");
return;
}

 
try {
  const res = await fetch("/api/news", {
    method: "POST",
    headers: {
      "Content-Type":
        "application/json",
    },
    body: JSON.stringify({
      title,
      excerpt,
      content,
      cover,
      featured,
      published,
    }),
  });

  if (res.ok) {
    resetForm();

    loadNews();

    alert(
      "Berita berhasil ditambahkan"
    );
  }
} catch (error) {
  console.error(error);
}
 

}

async function updateNews() {
if (!editingId) return;

 
try {
  const res = await fetch(
    `/api/news/${editingId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        title,
        excerpt,
        content,
        cover,
        featured,
        published,
      }),
    }
  );

  if (res.ok) {
    resetForm();

    loadNews();

    alert(
      "Berita berhasil diupdate"
    );
  }
} catch (error) {
  console.error(error);
}
 

}

function editNews(item: any) {
setEditingId(item._id);

 
setTitle(item.title || "");
setExcerpt(item.excerpt || "");
setContent(item.content || "");
setCover(item.cover || "");

setFeatured(
  item.featured || false
);

setPublished(
  item.published ?? true
);

window.scrollTo({
  top: 0,
  behavior: "smooth",
});
 

}

async function uploadImage(
  file: File
) {
  try {

    setUploading(true);

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
      setCover(data.url);
    }

  } catch (error) {

    console.error(error);

  } finally {

    setUploading(false);

  }
}

{cover && (
  <img
    src={cover}
    alt="cover"
    className="w-64 h-40 object-cover rounded-lg border mb-4"
  />
)}

{uploading && (
  <p className="text-blue-600 mb-4">
    Uploading gambar...
  </p>
)}

async function deleteNews(
id: string
) {
const ok = confirm(
"Yakin ingin menghapus berita ini?"
);

 
if (!ok) return;

try {
  await fetch(`/api/news/${id}`, {
    method: "DELETE",
  });

  loadNews();
} catch (error) {
  console.error(error);
}
 

}

useEffect(() => {
loadNews();
}, []);

return ( <div>

 
  <div className="flex items-center justify-between mb-6">

    <h1 className="text-3xl font-bold text-[#0F5132]">
      Manajemen Berita
    </h1>

  </div>

  <div className="bg-white p-6 rounded-xl shadow mb-8">

    <h2 className="font-bold text-xl mb-4">

      {editingId
        ? "Edit Berita"
        : "Tambah Berita"}

    </h2>

    <input
      className="border p-3 rounded w-full mb-3"
      placeholder="Judul Berita"
      value={title}
      onChange={(e) =>
        setTitle(e.target.value)
      }
    />

    <textarea
      className="border p-3 rounded w-full mb-3"
      rows={3}
      placeholder="Ringkasan Berita"
      value={excerpt}
      onChange={(e) =>
        setExcerpt(e.target.value)
      }
    />

    <div className="mb-4">

    <label className="block mb-2 font-medium">
        Cover Berita
    </label>

    <input
        type="file"
        accept="image/*"
        onChange={(e) => {
        const file =
            e.target.files?.[0];

        if (file) {
            uploadImage(file);
        }
        }}
    />

    </div>

    <textarea
      className="border p-3 rounded w-full mb-4"
      rows={8}
      placeholder="Isi Berita"
      value={content}
      onChange={(e) =>
        setContent(e.target.value)
      }
    />

    <div className="flex flex-wrap gap-4 mb-4">

      <label className="flex items-center gap-2">

        <input
          type="checkbox"
          checked={featured}
          onChange={(e) =>
            setFeatured(
              e.target.checked
            )
          }
        />

        Berita Unggulan

      </label>

      <label className="flex items-center gap-2">

        <input
          type="checkbox"
          checked={published}
          onChange={(e) =>
            setPublished(
              e.target.checked
            )
          }
        />

        Publish

      </label>

    </div>

    <button
      onClick={
        editingId
          ? updateNews
          : createNews
      }
      className="bg-[#0F5132] hover:bg-[#198754] text-white px-6 py-3 rounded-lg"
    >

      {editingId
        ? "Update Berita"
        : "Simpan Berita"}

    </button>

    {editingId && (
      <button
        onClick={resetForm}
        className="ml-3 bg-gray-500 text-white px-6 py-3 rounded-lg"
      >
        Batal
      </button>
    )}

  </div>

  <div className="bg-white rounded-xl shadow overflow-hidden">

    <table className="w-full">

      <thead>

        <tr className="border-b bg-gray-50">

          <th className="p-4 text-left">
            Judul
          </th>

          <th className="p-4 text-left">
            Status
          </th>

          <th className="p-4 text-left">
            Tanggal
          </th>

          <th className="p-4 text-center">
            Aksi
          </th>

        </tr>

      </thead>

      <tbody>

        {news.length === 0 ? (
          <tr>
            <td
              colSpan={4}
              className="p-8 text-center text-gray-500"
            >
              Belum ada berita
            </td>
          </tr>
        ) : (
          news.map((item) => (
            <tr
              key={item._id}
              className="border-b"
            >

              <td className="p-4">
                {item.title}
              </td>

              <td className="p-4">

                {item.published ? (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Published
                  </span>
                ) : (
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    Draft
                  </span>
                )}

              </td>

              <td className="p-4">

                {new Date(
                  item.createdAt
                ).toLocaleDateString(
                  "id-ID"
                )}

              </td>

              <td className="p-4 text-center space-x-2">

                <button
                  onClick={() =>
                    editNews(item)
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteNews(item._id)
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Hapus
                </button>

              </td>

            </tr>
          ))
        )}

      </tbody>

    </table>

  </div>

</div>


);
}
