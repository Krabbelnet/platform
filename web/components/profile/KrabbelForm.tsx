"use client";

import { useState, useTransition } from "react";
import { createKrabbel } from "../../actions/createKrabbel";

type KrabbelFormProps = {
  profileId: string;
};

export function KrabbelForm({ profileId }: KrabbelFormProps) {
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function addKrabbel() {
    if (!message.trim()) return;

    startTransition(async () => {
      const result = await createKrabbel({
        profileId,
        authorName: "Jij",
        message: message.trim(),
      });

      if (!result.error) {
        setMessage("");
      }
    });
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-black">💬 Krabbels</h2>

      <div className="mt-6 rounded-2xl bg-orange-50 p-5">
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Laat een krabbel achter..."
          className="min-h-28 w-full resize-none rounded-2xl border border-orange-100 bg-white p-4 outline-none focus:border-orange-400"
        />

        <button
          onClick={addKrabbel}
          disabled={isPending}
          className="mt-4 rounded-full bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600 disabled:opacity-60"
        >
          {isPending ? "Plaatsen..." : "Plaats krabbel"}
        </button>
      </div>
    </section>
  );
}