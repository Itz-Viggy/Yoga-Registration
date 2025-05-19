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
           Vethathiri Maharishi<br />
           SKY Yoga
        </h1>
      </header>


      {/* Welcome Modal */}
      <main className="w-screen min-h-[calc(100vh-64px)] bg-stone-800 flex items-center justify-center py-8 md:py-16 px-4 md:px-8">
        <div className="flex flex-col items-center w-full max-w-md">
          {/* <h2 className="text-2xl font-bold text-amber-200 mb-6">Be Blessed</h2> */}
          <div className="w-full max-w-md bg-stone-700 p-8 rounded-2xl shadow-xl text-center space-y-4 max-h-[90vh] overflow-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Be Blessed!
            </h3>

            <p className="text-amber-200 mb-4 text-sm md:text-base">
                Join us for an exclusive yoga experience.
              </p>

            <p className="text-amber-200 mb-4 text-sm md:text-base">
              Upcoming SKY Programs:
            </p>
            
            {/* Two-column layout for program information */}
            <div className="flex-1 p-3 bg-stone-800 rounded-lg text-left">
                <p className="text-amber-200 mb-2 text-sm md:text-base">
                  <span className="font-bold">Women's Physical Exercise</span>
                </p>
                <p>
                  When: <span className="font-semibold">(July 15 - August 31) 2025</span>
                </p>
                <p>
                  Where: <span className="font-semibold">Zoom</span>
                </p>
                <p>
                  Time: <span className="font-semibold">Sat (8 - 9:15 AM) EST</span>
                </p>
                <button
                  onClick={handlePEClick}
                  className="w-full mt-2 py-2 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors text-sm md:text-base"
                >
                  Physical Exercise
                </button>
              </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              {/* Left column - Kayakalpa */}
              <div className="flex-1 p-3 bg-stone-800 rounded-lg text-left">
                <p className="text-amber-200 mb-2 text-sm md:text-base">
                  <span className="font-bold">Women's Kayakalpa Practices</span>
                </p>
                <p>
                  When: <span className="font-semibold">November 2025</span>
                </p>
                <p>
                  Where: <span className="font-semibold">Zoom</span>
                </p>
                <p>
                  Time: <span className="font-semibold">Sat (8–9:30 AM) EST</span>
                </p>
                <button
                  onClick={handleKKClick}
                  className="w-full mt-2 py-2 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors text-sm md:text-base"
                >
                  Kayakalpa Practices
                </button>
              </div>
              
              {/* Right column - Physical Exercise */}
              

              <div className="flex-1 p-3 bg-stone-800 rounded-lg text-left">
                <p className="text-amber-200 mb-2 text-sm md:text-base">
                  <span className="font-bold">Men's Physical Exercise</span>
                </p>
                <p>
                  When: <span className="font-semibold">TBD</span>
                </p>
                <p>
                  Where: <span className="font-semibold">Zoom</span>
                </p>
                <p>
                  Time: <span className="font-semibold">Sat (9:30 - 10:30 AM) EST</span>
                </p>
                <button
                  onClick={handlePEClick}
                  className="w-full mt-2 py-2 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors text-sm md:text-base"
                >
                  Physical Exercise
                </button>
              </div>
            </div>
            {/*<p className="mt-1">
                🌐 Visit us:{' '}
                <a
                  href="https://www.skyna.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  www.skyna.org
                </a>
              </p>*/}
              <p className="mt-1">
                Click here for our {" "}
                <a
                  href="https://docs.google.com/document/d/1d-BmCclOnpf-NKeReSs7jxSTij4LKNDAN9PiQGUNMaY/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                   Testimonials
                </a>
              </p>
          </div>
        </div>
      </main>
    </>
  );
}
