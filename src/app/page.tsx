"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const benefits = [
  "It boosts our Immunity System.",
  "Our nerves get toned up.",
  "Bringing glow to our skin – Youthfulness can be maintained.",
  "It sharpens our memory – Enhances the concentration power.",
  "Keeps us away from Alzheimer’s or any brain disorder and helps the brain cells remain active.",
  "It increases our lifespan.",
  "It improves the reproductive system of females:",
  "  • Regulates menstruation cycles.",
  "  • Pelvic muscle (which supports the Bladder, Bowel and the Uterus) get strengthened.",
  "It reduces the ill‑effects of hereditary problems.",
  "Reduces insomnia (inability to sleep) – Enhances sleep quality 😴",
  "We feel rejuvenated as it increases blood circulation throughout the body.",
  "Helps keep the mind calm and soothes.",
  "Fosters positive thinking.",
  "Practicing Kayakalpa cures Asthma.",
  "Doing Ashwini Mudra cures piles.",
  "Reduces the level of sugar in the blood.",
  "Lowers blood pressure and cholesterol levels 🩸",
  "Reduces stress and anxiety 🙇‍♂️",
  "Improves flexibility, strength, and balance 💪",
  "Relieves chronic pain and inflammation 🦵",
];

export default function HomePage() {
  const router = useRouter();
  const handleJoinClick = () => router.push("/register");

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
          Kayakalpa Yoga
        </h1>
      </header>

      {/* Main Content */}
      <main className="w-screen flex flex-col overflow-hidden h-auto md:h-[calc(100vh-64px)]">
        {/* ------------ Top row ------------ */}
        <div className="flex flex-col md:flex-row flex-1">
          {/* ---------- Program Details ---------- */}
          <section className="w-full md:w-1/2 bg-stone-800 p-6 md:p-12 overflow-auto">
            <div className="mb-8 text-amber-200 space-y-1 text-base md:text-lg">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                Program Details
              </h2>

              <p>
                Where: <span className="font-semibold">Zoom</span>
              </p>
              <p>
                Time: <span className="font-semibold">Sat (8–9:30 am) EST</span>
              </p>
              <p>
                Course Fee: <span className="font-semibold">$35</span>
              </p>

              {/* bullet list with the same arrow style used in Benefits */}
              <ul className="space-y-1">
                {[
                  "Only for Women’s group",
                  "Two weekend interactive classes & 7 mins practices every day",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mr-2">👉</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-white mt-4">
                Daily Practice
              </h3>
              <p>3 minutes in the morning</p>
              <p>3 minutes in the evening</p>
              <p>1 minute at bedtime</p>

              <h3 className="text-2xl font-bold text-white mt-4">Contact</h3>
              <p>
                A/N Meenaa Puviarasu —{" "}
                <a
                  href="tel:+17044880552"
                  className="underline hover:text-white"
                >
                  (704) 488‑0552
                </a>
              </p>
              <p className="mt-1">
                🌐 Visit us:{" "}
                <a
                  href="https://www.skyna.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  www.skyna.org
                </a>
              </p>
            </div>
          </section>

          {/* ---------- Welcome Modal ---------- */}
          <section className="w-full md:w-1/2 bg-stone-800 p-6 flex items-center justify-center">
            <div className="w-full max-w-md bg-stone-700 p-8 rounded-2xl shadow-xl text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Welcome!
              </h3>
              <p className="text-amber-200 mb-6 text-sm md:text-base">
                Join us for an exclusive yoga experience.
              </p>
              <button
                onClick={handleJoinClick}
                className="w-full py-3 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors text-sm md:text-base"
              >
                Want to Enroll for Kayakalpa (KK)?
              </button>
            </div>
          </section>
        </div>

        {/* ------------ Bottom row: Benefits ------------ */}
        <section className="w-full bg-stone-800 p-6 md:p-12 overflow-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Benefits
          </h2>
          <ul className="space-y-2 text-amber-200 leading-snug text-base md:text-lg">
            {benefits.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-2">👉</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
