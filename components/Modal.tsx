"use client";

import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const pawfiles = ["Theo", "Spike", "Mylo", "Grizz"];

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [selectedPawfile, setSelectedPawfile] = useState<string | null>(null);
  const [pawPic, setPawPic] = useState<File | null>(null);
  const [fullBodyPic, setFullBodyPic] = useState<File | null>(null);

  if (!isOpen) return null;

  // Handle file uploads
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<File | null>>) => {
    if (event.target.files && event.target.files.length > 0) {
      setter(event.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-slate-700 rounded-lg p-6 w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Post</h2>
          <button className="text-black border border-1 py-1 px-2 rounded" onClick={onClose}>✕</button>
        </div>

        <div className="divider my-4" />

        {/* Pick your pawfile - Dropdown */}
        <div className="form-control mb-4">
          <label className="label font-medium">Pick your pawfile</label>
          <select
            className="select select-bordered w-full text-black"
            value={selectedPawfile || ""}
            onChange={(e) => setSelectedPawfile(e.target.value)}
          >
            <option value="">Select a pawfile</option>
            {pawfiles.map((pawfile, index) => (
              <option key={index} value={pawfile}>{pawfile}</option>
            ))}
          </select>
        </div>

        {/* Pick your paw pic - DaisyUI File Input */}
        <div className="form-control mb-4">
          <label className="label font-medium">Pick your paw pic</label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xsm text-black"
            onChange={(e) => handleFileChange(e, setPawPic)}
          />
        </div>

        {/* Pick your full body pic - DaisyUI File Input */}
        <div className="form-control mb-4 text-black">
          <label className="label font-medium text-white">Pick your full body pic</label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            onChange={(e) => handleFileChange(e, setFullBodyPic)}
          />
        </div>

        {/* Added Action buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button className="btn btn-secondary  bg-orange-500  hover:bg-orange-500 border-none text white">Post</button>

          <button className="btn btn-secondary  bg-orange-500  hover:bg-orange-500 border-none text white" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;