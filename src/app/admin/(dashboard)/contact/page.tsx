"use client";

import { useEffect, useState } from "react";

export default function ContactAdmin() {
const [messages, setMessages] =
useState<any[]>([]);

const [selectedId, setSelectedId] =
useState<string | null>(null);

const [showDeleteModal, setShowDeleteModal] =
useState(false);

async function load() {
const res = await fetch(
"/api/contact"
);

 
const data =
  await res.json();

setMessages(data);
 

}

async function deleteMessage(
id: string
) {
await fetch(
`/api/contact/${id}`,
{
method: "DELETE",
}
);

 
load();
 

}

useEffect(() => {
load();
}, []);

return (
<> <div> <h1 className="text-3xl font-bold mb-6">
Inbox Pesan </h1>

 
    {messages.length === 0 ? (
      <div className="bg-white rounded-xl p-8 shadow">
        Belum ada pesan masuk
      </div>
    ) : (
      <div className="space-y-4">

        {messages.map(
          (msg) => (
            <div
              key={msg._id}
              className="bg-white rounded-xl shadow p-6"
            >
              <div className="flex justify-between items-start">

                <div>
                  <h3 className="font-bold text-lg">
                    {msg.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {msg.email}
                  </p>

                  <p className="text-sm text-gray-500">
                    {msg.phone}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedId(
                      msg._id
                    );
                    setShowDeleteModal(
                      true
                    );
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Hapus
                </button>

              </div>

              <div className="mt-4">

                <h4 className="font-semibold">
                  {msg.subject}
                </h4>

                <p className="mt-2 whitespace-pre-wrap">
                  {msg.message}
                </p>

              </div>

              <div className="mt-4 text-xs text-gray-400">
                {new Date(
                  msg.createdAt
                ).toLocaleString(
                  "id-ID"
                )}
              </div>

            </div>
          )
        )}

      </div>
    )}
  </div>

  {showDeleteModal && (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-in fade-in zoom-in duration-200">

        <div className="flex items-center gap-4 mb-4">

          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-3xl">
            🗑️
          </div>

          <div>

            <h3 className="text-xl font-bold text-gray-900">
              Hapus Pesan
            </h3>

            <p className="text-sm text-gray-500">
              Konfirmasi penghapusan
            </p>

          </div>

        </div>

        <p className="text-gray-700 leading-relaxed">
          Pesan ini akan dihapus
          secara permanen dan
          tidak dapat dikembalikan
          lagi.
        </p>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={() =>
              setShowDeleteModal(
                false
              )
            }
            className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            Batal
          </button>

          <button
            onClick={async () => {
              if (
                !selectedId
              )
                return;

              await deleteMessage(
                selectedId
              );

              setShowDeleteModal(
                false
              );

              setSelectedId(
                null
              );
            }}
            className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition"
          >
            Ya, Hapus
          </button>

        </div>

      </div>

    </div>
  )}
</>
 

);
}
