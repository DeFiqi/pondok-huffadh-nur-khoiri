"use client";

import { useEffect, useState } from "react";

export default function ContactAdmin() {
const [messages, setMessages] =
useState<any[]>([]);

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
if (
!confirm(
"Hapus pesan ini?"
)
)
return;


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

return ( <div>


  <h1 className="text-3xl font-bold mb-6">
    Inbox Pesan
  </h1>

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
                onClick={() =>
                  deleteMessage(
                    msg._id
                  )
                }
                className="bg-red-500 text-white px-4 py-2 rounded"
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


);
}
