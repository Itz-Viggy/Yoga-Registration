"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const handleKKClick = () => router.push("/kkhome");
  const handlePEClick = () => router.push("/register/pe");

  return (
    <>
      {/* Header */}
      <header className="w-full bg-stone-900 py-4 relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Image
            src="/Vethathri-Maharishi-1-removebg-preview.png"
            alt="Kayakalpa Logo"
            width={48}
            height={48}
          />
        </div>
        <h1 className="text-2xl font-bold text-white text-center">
          SKY Kayakalpa Yoga
        </h1>
      </header>

      {/* Welcome Modal */}
      <main className="w-screen min-h-[calc(100vh-64px)] bg-stone-800 flex items-center justify-center py-8 md:py-16 px-4 md:px-8">
        <div className="w-full max-w-md bg-stone-700 p-8 rounded-2xl shadow-xl text-center space-y-4 max-h-[90vh] overflow-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Welcome!
          </h3>
          <p className="text-amber-200 mb-4 text-sm md:text-base">
            Upcoming Porgrams:
          </p>
          <p className="text-amber-200 mb-4 text-sm md:text-base">
            <span className="font-bold">SKY Kayakalpa Yoga</span>
          </p>
          <p>
                When: <span className="font-semibold">10th & 17th May</span>
              </p>
              <p>
                Where: <span className="font-semibold">Zoom</span>
              </p>
              <p>
                Time: <span className="font-semibold">Sat (8–9:30 am) EST</span>
              </p>


          <button
            onClick={handleKKClick}
            className="w-full py-3 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors text-sm md:text-base"
          >
            Kayakalpa
          </button>

          <p className="text-amber-200 mb-4 text-sm md:text-base">
            <span className="font-bold">Physical Exercise</span>
          </p>
        <p>
                When: <span className="font-semibold"></span>
              </p>
              <p>
                Where: <span className="font-semibold">Zoom</span>
              </p>
              <p>
                Time: <span className="font-semibold"></span>
              </p>

          <button
            onClick={handlePEClick}
            className="w-full py-3 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors text-sm md:text-base"
          >
            Physical Exercise
          </button>
        </div>
      </main>
    </>
  );
}
