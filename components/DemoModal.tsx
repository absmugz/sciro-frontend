import React from "react";

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
  videoUrl: string;
}

const DemoModal: React.FC<DemoModalProps> = ({ open, onClose, videoUrl }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl aspect-video flex flex-col">
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-black text-2xl font-bold z-10"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-full object-contain bg-black"
          style={{ borderRadius: "0 0 0.5rem 0.5rem" }}
        />
      </div>
    </div>
  );
};

export default DemoModal;
