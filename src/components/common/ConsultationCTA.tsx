"use client";

import { useState } from "react";
import ConsultationModal from "@/components/common/ConsultationModal";

type Props = {
  buttonText?: string;
  modalTitle?: string;
  className?: string;
};

export default function ConsultationCTA({
  buttonText = "Get Free Design Consultation",
  modalTitle = "Get Free Consultation",
  className = "",
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`bg-gold hover:bg-gold-dark rounded-lg px-6 py-3 text-lg font-medium text-white transition ${className}`}
      >
        {buttonText}
      </button>

      <ConsultationModal
        open={open}
        onClose={() => setOpen(false)}
        title={modalTitle}
      />
    </>
  );
}
