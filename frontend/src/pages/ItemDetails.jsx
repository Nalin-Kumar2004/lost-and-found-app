import React from "react";

const ItemDetails = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-2xl p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Item Details</h2>
        <p className="text-gray-700 text-center">Full details, images, claim button, QR code, and match suggestions will appear here.</p>
      </div>
    </div>
  );
};

export default ItemDetails;
