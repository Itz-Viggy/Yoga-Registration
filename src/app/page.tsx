"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const handleKKClick = () => router.push("/kkhome");
  const handlePEClick = () => router.push("/pe");

  return (
    <>
      {/* Header */}
      <header className="w-full bg-emerald-50 py-4 border-b border-green-300 relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Image
            src="/Vethathri-Maharishi-1-removebg-preview.png"
            alt="Kayakalpa Logo"
            width={48}
            height={48}
          />
        </div>
        <h1 className="text-2xl font-bold text-green-900 text-center">
          Vethathiri Maharishi<br />
          SKY Yoga
        </h1>
      </header>

      {/* Welcome Modal */}
      <main className="w-screen min-h-[calc(100vh-64px)] bg-emerald-50 flex items-center justify-center py-8 md:py-16 px-4 md:px-8">
        <div className="flex flex-col items-center w-full max-w-md">
          <div className="w-full max-w-md bg-green-100 p-8 rounded-2xl shadow-xl text-center space-y-4 max-h-[90vh] overflow-auto border border-green-200">
            <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-2">
              Be Blessed!
            </h3>

            <p className="text-green-800 mb-4 text-sm md:text-base">
              Join us for an exclusive yoga experience.
            </p>
            <p className="mt-1 text-green-800 font-semibold">
              Click here for our{" "}
              <a
                href="https://docs.google.com/document/d/1d-BmCclOnpf-NKeReSs7jxSTij4LKNDAN9PiQGUNMaY/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-900"
              >
                Testimonials
              </a>
            </p>
            <p className="text-green-800 mb-4 text-sm md:text-base">
              Upcoming SKY Programs:
            </p>

            <div className="flex-1 p-3 bg-emerald-100 border border-green-200 rounded-lg text-left">
              <p className="text-green-800 mb-2 text-lg md:text-xl font-bold">
                Women's Physical Exercise
              </p>
              <p className="text-green-900">
                When: <span className="font-semibold">(July 15 - August 31) 2025</span>
              </p>
              <p className="text-green-900">
                Where: <span className="font-semibold">Zoom</span>
              </p>
              <p className="text-green-900">
                Time: <span className="font-semibold">Saturday (8 - 9:15 AM) EST</span>
              </p>
              <button
                onClick={handlePEClick}
                className="w-full mt-2 py-2 px-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors text-lg md:text-xl"
              >
                Physical Exercise
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              {/* Kayakalpa */}
              <div className="flex-1 p-3 bg-emerald-100 border border-green-200 rounded-lg text-left">
                <p className="text-green-800 mb-2 text-lg md:text-xl font-bold">
                  Women's Kayakalpa Practices
                </p>
                <p className="text-green-900">
                  When: <span className="font-semibold">November 2025</span>
                </p>
                <p className="text-green-900">
                  Where: <span className="font-semibold">Zoom</span>
                </p>
                <p className="text-green-900">
                  Time: <span className="font-semibold">Saturday (8–9:30 AM) EST</span>
                </p>
                <button
                  onClick={handleKKClick}
                  className="w-full mt-2 py-2 px-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors text-lg md:text-xl"
                >
                  Kayakalpa Practices
                </button>
              </div>

              {/* Men's PE */}
              <div className="flex-1 p-3 bg-emerald-100 border border-green-200 rounded-lg text-left">
                <p className="text-green-800 mb-2 text-lg md:text-xl font-bold">
                  Men's Physical Exercise
                </p>
                <p className="text-green-900">
                  When: <span className="font-semibold">TBD</span>
                </p>
                <p className="text-green-900">
                  Where: <span className="font-semibold">Zoom</span>
                </p>
                <p className="text-green-900">
                  Time: <span className="font-semibold">Saturday (9:30 - 10:30 AM) EST</span>
                </p>
                <button
                  onClick={handlePEClick}
                  className="w-full mt-2 py-2 px-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors text-lg md:text-xl"
                >
                  Physical Exercise
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
