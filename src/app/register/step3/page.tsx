"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Step3Page() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/register/step2");
  };

  const handleNext = () => {
    router.push("/register/success");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-800 p-4">
      <div className="max-w-md w-full bg-stone-700 p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-white mb-6">
          Step 3: Send Waiver Form and Payment Screenshot
        </h2>
        <p className="text-amber-200 mb-4">
          Please do the following steps and send them to Volunteer Shanthi:
        </p>
        <p className="text-amber-200 mb-2">
          👉 Fill out the waiver form
        </p>
        <p className="text-amber-200 mb-4">
          👉 Send the transaction screenshot.
        </p>
        <p className="text-amber-200 mb-6">
          Message to the coordinator:{" "}
          <span className="font-bold">Shanthi +1 (248) 870-7810</span>
        </p>
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
