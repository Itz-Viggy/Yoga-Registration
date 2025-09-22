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
        <h1 className="text-2xl font-bold text-center text-black">
          Vethathiri Maharishi<br />
          SKY Yoga
        </h1>
      </header>

      {/* Welcome Modal */}
      <main className="w-screen min-h-[calc(100vh-64px)] bg-white flex items-center justify-center py-8 md:py-16 px-4 md:px-8">
        <div className="flex flex-col items-center w-full max-w-md">
          <div className="w-full max-w-md p-8 rounded-2xl shadow-xl text-center space-y-4 max-h-[90vh] overflow-auto border" style={{ backgroundColor: "#f4ebe8", borderColor: "#a57d6b" }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-black">
              Be Blessed!
            </h3>

            <p className="mb-4 text-sm md:text-base text-black">
              Join us for an exclusive yoga experience.
            </p>
            <p className="mt-1 font-semibold text-blue-600">
              Checkout our{" "}
              <a
                href="https://docs.google.com/document/d/1d-BmCclOnpf-NKeReSs7jxSTij4LKNDAN9PiQGUNMaY/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600"
              >
                Testimonials
              </a>
            </p>

            <p className="mb-4 text-sm md:text-base text-black">
              Upcoming SKY Programs:
            </p>

            <div className="flex-1 p-3 rounded-lg text-left border" style={{ backgroundColor: "#f4ebe8", borderColor: "#a57d6b" }}>
              <p className="mb-2 text-lg md:text-xl font-bold text-black">
                Women's Physical Exercise (PE):
              </p>
              <p className="text-black">
                When: <span className="font-semibold">(Oct 5 - Oct 31) 2025</span>
              </p>
              <p className="text-black">
                Where: <span className="font-semibold">Zoom</span>
              </p>
              <p className="text-black">
                Time: <span className="font-semibold">Wednesday (6:30 - 7:30 PM) EST (or)
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saturday (8 - 9:15 AM) EST</span>
              </p>
              <p className="text-black mt-2">
              <span className="font-semibold">No Course Fees</span>
                <span className="font-semibold">**Run by SKY Masters and Volunteers**</span>
              </p>
              <p className="mt-2">
                <a
                  href="https://chat.whatsapp.com/J5OIjjgjVES7DWqoYvaqBf?mode=ac_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold underline hover:opacity-80"
                >
                  Please join Women's WhatsApp Group
                </a>
              </p>
              <button
                onClick={handlePEClick}
                className="w-full mt-2 py-2 px-4 text-black font-bold rounded-full hover:opacity-90 transition-colors text-lg md:text-xl"
                style={{ backgroundColor: "#c49d8b" }}
              >
               Proceed to more PE Details
              </button>
            </div>
            {/* Men's PE */}
            <div className="flex-1 p-3 rounded-lg text-left border" style={{ backgroundColor: "#f4ebe8", borderColor: "#a57d6b" }}>
                <p className="mb-2 text-lg md:text-xl font-bold text-black">
                  Men's Physical Exercise (PE):
                </p>
                <p className="text-black">
                  When: <span className="font-semibold">(Sep 15 - Oct 31) 2025</span>
                </p>
                <p className="text-black">
                  Where: <span className="font-semibold">Zoom</span>
                </p>
               <p className="text-black">
                  Time: <span className="font-semibold">Saturday (9:30 - 10:30 AM) EST</span>
                </p>

                

                <p className="text-black mt-2">
                  <span className="font-semibold">No Course Fees</span> 
                  <span className="font-semibold">**Run by SKY Masters and Volunteers** </span>
                </p>

                <p className="mt-2">
                <a
                  href="https://chat.whatsapp.com/IIiAtsct22FCOm7tJomBku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold underline hover:opacity-80"
                >
                  Please join Men's WhatsApp Group
                </a>
                </p>
                <button
                  onClick={handlePEClick}
                  className="w-full mt-2 py-2 px-4 text-black font-bold rounded-full hover:opacity-90 transition-colors text-lg md:text-xl"
                  style={{ backgroundColor: "#c49d8b" }}
                >
                  Proceed to more PE Details
                </button>
              </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              {/* Kayakalpa */}
              <div className="flex-1 p-3 rounded-lg text-left border" style={{ backgroundColor: "#f4ebe8", borderColor: "#a57d6b" }}>
                <p className="mb-2 text-lg md:text-xl font-bold text-black">
                  Women's Kayakalpa Practices (KK):
                </p>
                <p className="text-black">
                  When: <span className="font-semibold">November 2025</span>
                </p>
                <p className="text-black">
                  Where: <span className="font-semibold">Zoom</span>
                </p>
                <p className="text-black">
                  Time: <span className="font-semibold">Saturday (8–9:30 AM) EST</span>
                </p>
                 <p className="text-black">
                Course Fee: <span className="font-semibold">$35</span>
              </p>
                <p className="mt-2">
                  <a
                    href="https://chat.whatsapp.com/GJqpUBFwNjOJCZEGpPDf4U?mode=r_t"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-bold underline hover:opacity-80"
                  >
                    Please join KK WhatsApp Group
                  </a>
                </p>
                <button
                  onClick={handleKKClick}
                  className="w-full mt-2 py-2 px-4 text-black font-bold rounded-full hover:opacity-90 transition-colors text-lg md:text-xl"
                  style={{ backgroundColor: "#c49d8b" }}
                >
                  Proceed to more KK Details
                </button>
              </div>

              
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
