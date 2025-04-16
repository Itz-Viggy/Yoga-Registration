"use client";

import { useRouter } from "next/navigation";

export default function Step1Page() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/register/step2");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-800 p-4">
      <div className="max-w-md w-full bg-stone-700 p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Step 1: Paying Amount Directly to SKY Center
        </h2>
        <p className="text-amber-200 mb-2">
          Course fee: <span className="font-bold">$35</span>
        </p>
        <p className="text-amber-200 mb-2">
          Zelle ID: <span className="font-bold">Skyusa@skyusa.org</span>
        </p>
        <p className="text-amber-200 mb-2">
          SKY MEDITATION CENTER BAY AREA
        </p>
        <p className="text-amber-200 mb-2">
          <span className="font-bold">Please remember to add a message</span>
        </p>
        <p className="text-amber-200  font-bold mb-4">
          "Name-Women’s KK Batch2" during the Zelle transfer.
        </p>
        <p className="text-amber-200 mb-6">
          Once done, proceed to next step.
        </p>
        <button
          onClick={handleNext}
          className="w-full py-3 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
