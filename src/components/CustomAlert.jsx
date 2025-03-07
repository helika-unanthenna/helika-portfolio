import React from "react";

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      {/* Backdrop with blur effect */}
      <div className="bg-white p-6 rounded-lg border-2 border-gray-200 max-w-sm w-full text-center">
        <p className="text-gray-600 mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;