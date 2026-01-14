// components/MemberDetailsModal.tsx
"use client";

import { TeamMember } from "@/app/types/team";
import React, { useEffect } from "react";

interface MemberDetailsModalProps {
  open: boolean;
  member: TeamMember | null;
  onClose: () => void;
}

const MemberDetailsModal: React.FC<MemberDetailsModalProps> = ({
  open,
  member,
  onClose,
}) => {
  useEffect(() => {
    if (!open) return;

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open || !member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md mx-4 bg-white shadow-xl pt-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 size-8 rounded-full bg-gray-100 hover:bg-gray-200"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Content */}
        <div className="p-6">
          <img
            src={member.image}
            alt={member.name}
            className="size-32 object-cover"
          />

          <h3 className="mt-4 text-xl font-bold text-gray-800">
            {member.name}
          </h3>

          <p className="text-sm text-gray-600">{member.role}</p>

          {/* Dummy content for now */}
          <p className="mt-4 text-sm text-gray-500">
            {member.bio ??
              "This is placeholder content. Member biography, responsibilities, achievements, and contact links will appear here."}
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full py-2 text-sm font-medium  bg-green-700 text-white hover:bg-green-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberDetailsModal;
