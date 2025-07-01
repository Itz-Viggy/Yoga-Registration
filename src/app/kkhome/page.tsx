"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const benefits = [
  "It boosts the Immunity System.",
  "The nerves get toned up.",
  "Bringing glow to the skin – Youthfulness can be maintained.",
  "It sharpens the memory – Enhances the concentration power.",
  "Keeps away from Alzheimer’s or any brain disorder and helps the brain cells remain active.",
  "It increases lifespan.",
  "It improves the reproductive system of females",
  "Regulates menstruation cycles.",
  "Pelvic muscle (which supports the Bladder, Bowel and the Uterus) get strengthened.",
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
      <header
        className="w-full py-4 border-b relative"
        style={{ borderColor: "#a57d6b", backgroundColor: "white" }}
      >
        <div
          className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/Vethathri-Maharishi-1-removebg-preview.png"
            alt="Kayakalpa Logo"
            width={48}
            height={48}
          />
        </div>
        <h1 className="text-2xl font-bold text-center text-black">
          Kayakalpa Registration <br /> 
          (KK)
        </h1>
      </header>

      {/* Main Content */}
      <main className="w-screen flex flex-col overflow-hidden h-auto md:h-[calc(100vh-64px)] bg-white">
        {/* Top row */}
        <div className="flex flex-col md:flex-row flex-1">
          {/* Program Details */}
          <section className="w-full md:w-1/2 p-6 md:p-12 overflow-auto">
            <div
              className="space-y-3 text-black text-base md:text-lg border rounded-xl p-4"
              style={{ borderColor: "#a57d6b", backgroundColor: "#f4ebe8" }}
            >
              <h4 className="text-2xl md:text-4xl font-bold mb-2 text-black">
                Program Details
              </h4>

              <p>
                Course Fee: <span className="font-semibold">$35</span>
              </p>

              <ul className="space-y-1 text-lg md:text-xl">
                {[
                  "Only for Women's group",
                  "Two weekend interactive classes",
                  "7 mins practices every day",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mr-2 text-2xl text-black">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-black mt-4">
                Daily Practice
              </h3>
              <p>3 minutes in the morning</p>
              <p>3 minutes in the evening</p>
              <p>1 minute at bedtime</p>

              <h3 className="text-2xl font-bold text-black mt-4">
                KK Process
              </h3>
              <p>
                1) Register for the course <br />
                2) Complete the payment <br />
                3) Complete the waiver form
              </p>
            </div>
          </section>

          {/* Welcome Modal */}
          <section className="w-full md:w-1/2 p-4 flex items-center justify-center">
            <div
              className="w-full max-w-md p-6 rounded-2xl shadow-xl text-center space-y-3 border relative"
              style={{ backgroundColor: "#f4ebe8", borderColor: "#a57d6b" }}
            >
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => router.push("/")}
                  className="p-2 rounded-full transition-colors"
                  style={{ backgroundColor: "#b28d7b" }}
                  aria-label="Return to home"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10m-1 5h-1"
                    />
                  </svg>
                </button>
              </div>

              <button
                onClick={handleJoinClick}
                className="w-full py-3 mt-4 px-4 text-black font-bold rounded-full hover:opacity-90 transition-colors text-lg md:text-xl"
                style={{ backgroundColor: "#c49d8b" }}
              >
                KK Registration
              </button>

              <div className="flex space-x-4">
                <button
                  onClick={() => router.push("/register/step1")}
                  className="flex-1 py-3 px-4 text-black font-bold rounded-full hover:opacity-90 transition-colors text-lg md:text-xl"
                  style={{ backgroundColor: "#c49d8b" }}
                >
                  Payment Steps
                </button>
                <button
                  onClick={() => window.open("/Waiver.pdf", "_blank")}
                  className="flex-1 py-3 px-4 text-black font-bold rounded-full hover:opacity-90 transition-colors text-lg md:text-xl"
                  style={{ backgroundColor: "#c49d8b" }}
                >
                  Waiver Form
                </button>
              </div>

              <button
                onClick={() => router.push("/review")}
                className="w-full py-3 px-4 text-black font-bold rounded-full hover:opacity-90 transition-colors text-lg md:text-xl"
                style={{ backgroundColor: "#c49d8b" }}
              >
                KK Feedback
              </button>
            </div>
          </section>
        </div>

        {/* Bottom row: Benefits */}
        <section className="w-full p-6 md:p-12 overflow-auto">
          <div
            className="border rounded-xl p-4"
            style={{ backgroundColor: "#f4ebe8", borderColor: "#a57d6b" }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
              KK Benefits
            </h2>
            <ul className="space-y-2 text-black text-lg md:text-xl">
              {benefits.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-2xl">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
