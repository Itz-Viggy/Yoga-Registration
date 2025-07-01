"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Step2Page() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/register/success");
  };

  const handleBack = () => {
    router.push("/register/step1");
  };

  return (
    <div className="min-h-screen w-screen flex flex-col bg-white">
      
      {/* Header */}
      <header
        className="w-full py-4 border-b relative"
        style={{ borderColor: "#a57d6b", backgroundColor: "white" }}
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
          className="w-full max-w-md p-8 rounded-xl shadow-lg border text-center space-y-6"
          style={{ backgroundColor: "#f4ebe8", borderColor: "#a57d6b" }}
        >
          <h2 className="text-2xl font-bold text-black">
            Step 2: Download the Waiver Form
          </h2>

          <p className="text-black">
            Please print out the waiver form by clicking the button below.
          </p>
          <p className="text-black font-bold mb-4">
            Note: Please download the waiver form, fill it out, and send it to the volunteer
          </p>
          <a
            href="/Waiver.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full py-3 px-4 text-black font-bold rounded-full hover:opacity-90 transition-colors text-lg text-center"
            style={{ backgroundColor: "#c49d8b" }}
          >
            Download Waiver Form
          </a>

          <div className="flex justify-between space-x-4">
            <button
              onClick={handleBack}
              className="flex-1 py-3 px-4 text-black font-bold rounded-full hover:opacity-90 transition-colors text-lg"
              style={{ backgroundColor: "#c49d8b" }}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="flex-1 py-3 px-4 text-black font-bold rounded-full hover:opacity-90 transition-colors text-lg"
              style={{ backgroundColor: "#c49d8b" }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
