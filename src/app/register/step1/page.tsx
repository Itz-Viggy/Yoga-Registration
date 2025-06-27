"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Step1Page() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/register/step2");
  };
  const handleBack = () => {
    router.push("/kkhome");
  };

  return (
    <div className="min-h-screen w-screen flex flex-col bg-white">
      
      {/* Header */}
      <header
        className="w-full py-4 border-b relative"
        style={{ borderColor: "#a57d6b", backgroundColor: "#a57d6b" }}
      >
        <div
          className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => router.push("/kkhome")}
        >
          <Image
            src="/Vethathri-Maharishi-1-removebg-preview.png"
            alt="Kayakalpa Logo"
            width={48}
            height={48}
          />
        </div>
        <h1 className="text-2xl font-bold text-center text-black">
          Kayakalpa Registration
        </h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div
          className="w-full max-w-md p-8 rounded-xl shadow-lg border text-center space-y-4"
          style={{ backgroundColor: "#f4ebe8", borderColor: "#a57d6b" }}
        >
          <h2 className="text-2xl font-bold text-black mb-4">
            Step 1: Pay Course Fee to SKY Center
          </h2>

          <p className="text-black mb-2">
            Course Fee: <span className="font-bold">$35</span>
          </p>
          <p className="text-black mb-2">
            Zelle ID: <span className="font-bold">Skyusa@skyusa.org</span>
          </p>
          <p className="text-black mb-2">
            SKY MEDITATION CENTER BAY AREA
          </p>
          <p className="text-black mb-2 font-bold">
            Please remember to add a message:
          </p>
          <p className="text-black font-bold mb-4">
            "Name - Women’s KK Batch"
          </p>

          <div className="flex flex-col space-y-3">
            <button
              onClick={handleNext}
              className="w-full py-3 px-4 text-black font-bold rounded-full hover:opacity-90 transition-colors text-lg"
              style={{ backgroundColor: "#c49d8b" }}
            >
              Next
            </button>
            <button
              onClick={handleBack}
              className="w-full py-3 px-4 text-black font-bold rounded-full hover:opacity-90 transition-colors text-lg"
              style={{ backgroundColor: "#c49d8b" }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
