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
      <header className="w-full bg-white py-4 border-b relative" style={{ borderColor: "#a57d6b" }}>
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Image
            src="/Vethathri-Maharishi-1-removebg-preview.png"
            alt="Kayakalpa Logo"
            width={48}
            height={48}
          />
        </div>
        <h1 className="text-2xl font-bold text-center" style={{ color: "#a57d6b" }}>
          Vethathiri Maharishi<br />
          SKY Yoga
        </h1>
      </header>

      {/* Welcome Modal */}
      <main className="w-screen min-h-[calc(100vh-64px)] bg-white flex items-center justify-center py-8 md:py-16 px-4 md:px-8">
        <div className="flex flex-col items-center w-full max-w-md">
          <div className="w-full max-w-md p-8 rounded-2xl shadow-xl text-center space-y-4 max-h-[90vh] overflow-auto border" style={{ backgroundColor: "#f4ebe8", borderColor: "#a57d6b" }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#a57d6b" }}>
              Be Blessed!
            </h3>

            <p className="mb-4 text-sm md:text-base" style={{ color: "#a57d6b" }}>
              Join us for an exclusive yoga experience.
            </p>
            <p className="mt-1 font-semibold" style={{ color: "#a57d6b" }}>
              Click here for our{" "}
              <a
                href="https://docs.google.com/document/d/1d-BmCclOnpf-NKeReSs7jxSTij4LKNDAN9PiQGUNMaY/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "#a57d6b" }}
              >
                Testimonials
              </a>
            </p>
            <p className="mb-4 text-sm md:text-base" style={{ color: "#a57d6b" }}>
              Upcoming SKY Programs:
            </p>

            <div className="flex-1 p-3 rounded-lg text-left border" style={{ backgroundColor: "#f4ebe8", borderColor: "#a57d6b" }}>
              <p className="mb-2 text-lg md:text-xl font-bold" style={{ color: "#a57d6b" }}>
                Women's Physical Exercise
              </p>
              <p style={{ color: "#a57d6b" }}>
                When: <span className="font-semibold">(July 15 - August 31) 2025</span>
              </p>
              <p style={{ color: "#a57d6b" }}>
                Where: <span className="font-semibold">Zoom</span>
              </p>
              <p style={{ color: "#a57d6b" }}>
                Time: <span className="font-semibold">Saturday (8 - 9:15 AM) EST</span>
              </p>
              <button
                onClick={handlePEClick}
                className="w-full mt-2 py-2 px-4 text-white rounded-full hover:opacity-90 transition-colors text-lg md:text-xl"
                style={{ backgroundColor: "#a57d6b" }}
              >
                Physical Exercise
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              {/* Kayakalpa */}
              <div className="flex-1 p-3 rounded-lg text-left border" style={{ backgroundColor: "#f4ebe8", borderColor: "#a57d6b" }}>
                <p className="mb-2 text-lg md:text-xl font-bold" style={{ color: "#a57d6b" }}>
                  Women's Kayakalpa Practices
                </p>
                <p style={{ color: "#a57d6b" }}>
                  When: <span className="font-semibold">November 2025</span>
                </p>
                <p style={{ color: "#a57d6b" }}>
                  Where: <span className="font-semibold">Zoom</span>
                </p>
                <p style={{ color: "#a57d6b" }}>
                  Time: <span className="font-semibold">Saturday (8–9:30 AM) EST</span>
                </p>
                <button
                  onClick={handleKKClick}
                  className="w-full mt-2 py-2 px-4 text-white rounded-full hover:opacity-90 transition-colors text-lg md:text-xl"
                  style={{ backgroundColor: "#a57d6b" }}
                >
                  Kayakalpa Practices
                </button>
              </div>

              {/* Men's PE */}
              <div className="flex-1 p-3 rounded-lg text-left border" style={{ backgroundColor: "#f4ebe8", borderColor: "#a57d6b" }}>
                <p className="mb-2 text-lg md:text-xl font-bold" style={{ color: "#a57d6b" }}>
                  Men's Physical Exercise
                </p>
                <p style={{ color: "#a57d6b" }}>
                  When: <span className="font-semibold">TBD</span>
                </p>
                <p style={{ color: "#a57d6b" }}>
                  Where: <span className="font-semibold">Zoom</span>
                </p>
                <p style={{ color: "#a57d6b" }}>
                  Time: <span className="font-semibold">Saturday (9:30 - 10:30 AM) EST</span>
                </p>
                <button
                  onClick={handlePEClick}
                  className="w-full mt-2 py-2 px-4 text-white rounded-full hover:opacity-90 transition-colors text-lg md:text-xl"
                  style={{ backgroundColor: "#a57d6b" }}
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
