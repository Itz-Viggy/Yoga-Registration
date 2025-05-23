"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Step2Page() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/register/step3");
  };

  const handleBack = () => {
    router.push("/register/step1");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-800 p-4">
      <div className="max-w-md w-full bg-stone-700 p-8  rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-white mb-6">
          Step 2: Download the Waiver Form
        </h2>
        <p className="text-amber-200 mb-6">
          Please print out the waiver form by clicking the button below.
          
        </p>
        <a
          href="/Waiver.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full py-3 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors mb-6"
        >
          Download Waiver Form
        </a>
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            className="w-1/2 mr-2 py-3 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="w-1/2 ml-2 py-3 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
