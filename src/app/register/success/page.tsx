"use client";

import React from "react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-800 p-4">
      <div className="max-w-md w-full bg-stone-700 p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-white mb-6">
          You have been successfully registered
        </h2>
        <a
          href="https://whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-block py-3 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors"
        >
          Join this WhatsApp group
        </a>
      </div>
    </div>
  );
}
