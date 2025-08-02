"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function SuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
    const sourceParam = searchParams.get('from');
    setSource(sourceParam);
    
    const timeoutId = setTimeout(() => {
      router.push("/");
    }, 5000); // Increased to 5 seconds to give time to read the links

    return () => clearTimeout(timeoutId);
  }, [router, searchParams]);

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
          <h2 className="text-2xl font-bold text-black mb-4">
            You have been successfully registered!
          </h2>
          
          {source === 'pe' && (
            <div className="space-y-4">
              <p className="text-black font-semibold">Please join the appropriate WhatsApp group for updates:</p>
              <div className="space-y-2">
                <a
                  href="https://chat.whatsapp.com/J5OIjjgjVES7DWqoYvaqBf?mode=ac_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 font-bold underline hover:opacity-80"
                >
                  Women's WhatsApp Group
                </a>
                <a
                  href="https://chat.whatsapp.com/IIiAtsct22FCOm7tJomBku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 font-bold underline hover:opacity-80"
                >
                  Men's WhatsApp Group
                </a>
              </div>
            </div>
          )}
          
          {source === 'kk' && (
            <div className="space-y-4">
              <p className="text-black font-semibold">Please join the WhatsApp group for updates:</p>
              <a
                href="https://chat.whatsapp.com/GJqpUBFwNjOJCZEGpPDf4U?mode=r_t"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 font-bold underline hover:opacity-80"
              >
                KK WhatsApp Group
              </a>
            </div>
          )}
          
          {!source && (
            <p className="text-black">Please join the WhatsApp group for updates.</p>
          )}
          <p className="text-black">Redirecting to home page...</p>
        </div>
      </div>
    </div>
  );
}
