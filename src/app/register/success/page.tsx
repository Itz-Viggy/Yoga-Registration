"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push("/kkhome");
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [router]);

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

      {/* Success Message */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div
          className="w-full max-w-md p-8 rounded-xl shadow-lg border text-center space-y-4"
          style={{ backgroundColor: "#f4ebe8", borderColor: "#a57d6b" }}
        >
          <h2 className="text-2xl font-bold text-black">
            You have been successfully registered!
          </h2>
          <p className="text-black">Redirecting to home page...</p>
        </div>
      </div>
    </div>
  );
}
