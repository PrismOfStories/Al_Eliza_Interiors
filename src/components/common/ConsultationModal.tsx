"use client";

import { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
};

export default function ConsultationModal({ open, onClose, title }: Props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const loadingToast = toast.loading("Sending message...");
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      toast.dismiss(loadingToast);

      if (result.success) {
        toast.success("Message sent successfully! 🎉");
        form.reset();
        onClose();
      } else {
        toast.error("Failed to send message.");
      }
    } catch {
      toast.dismiss(loadingToast);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
    >
      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 text-left sm:p-10">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl text-gray-500 hover:text-black "
        >
          ✕
        </button>

        <h2 className="mb-6 text-center text-2xl font-semibold">
          {title || "Get Free Consultation"}
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input label="NAME" name="name" />
          <Input label="EMAIL" name="email" type="email" />
          <Input label="PHONE" name="phone" type="tel" />
          <Input label="MESSAGE" name="message" />

          <button
            type="submit"
            disabled={loading}
            className="bg-gold hover:bg-gold-dark w-full rounded-lg py-3 font-medium text-white transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </div>
  );
}

/* 🔥 Small reusable input */
function Input({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div className="border-b pb-2">
      <label className="text-sm text-gray-600">{label}</label>
      <input
        type={type}
        name={name}
        required
        className="w-full bg-transparent focus:outline-none"
      />
    </div>
  );
}
