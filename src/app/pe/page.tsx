"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const benefits = [
  "Help in curing diseases",
  "Prevent certain diseases",
  "Increase the strength of the body and helps in long life",
  "Enhance physical appearance",
  "Remove laziness and keep oneself active",
  "Strengthen heart, lungs, digestive system, brain and nervous system",
  "Strengthen eyes and vision becomes good",
  "Increase the oxygen level in the blood",
  "Help to reduce excessive sugar in urine and blood",
  "Improve functioning of the endocrine system",
  "Help in correcting Uterine and menstrual disorders",
  "Give good sleep",
  "Regulate blood pressure",
  "Help in curing heart ailments",
];

export default function HomePage() {
  const router = useRouter();
  const handleJoinClick = () => router.push("/register/pe");

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
          SKY Yoga <br />
          Physical Exercise (PE)
        </h1>
      </header>

      {/* Main Content */}
      <main className="w-screen flex flex-col overflow-hidden h-auto md:h-[calc(100vh-64px)] bg-white">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row flex-1">
          {/* Program Details */}
          <section className="w-full md:w-1/2 p-6 md:p-12 overflow-auto">
            <div className="space-y-3 text-black text-base md:text-lg border rounded-xl p-4" style={{ borderColor: "#a57d6b" }}>
              <h4 className="text-2xl md:text-4xl font-bold mb-2 text-black">
                Program Details:
              </h4>

              <ul className="space-y-2 md:text-xl">
                {[
                  "We don't charge any fees for physical exercises run by this online group for 8 weeks",
                  "We completed 10 Batches, around 500 students learned physical exercises with our online group",
                  "We have 4 masters and 10 volunteers to run this online group class",
                  "Each Batch runs for 8 weeks - 1 day a week",
                  "The group count is usually around 20-25 students in each class",
                  "In Women's batch we teach same exercises on both Wednesday and Saturday, you can choose any one day",
                  "You can interact with Masters and Volunteers at the end of the class to ask questions",
                  "SKY experienced Masters and Volunteers are running the class",
                  "Please do your practices on the Mat",
                  "Please turn on the video during online classes, Masters will correct your practices",
                  "We will send Zoom class reminders one day before the class"
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mr-2 text-2xl">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Welcome Modal */}
          <section className="w-full md:w-1/2 p-4 flex items-center justify-center">
            <div className="w-full max-w-md p-6 rounded-2xl shadow-xl text-center space-y-4 relative border" style={{ backgroundColor: "#f4ebe8", borderColor: "#a57d6b" }}>
              
              {/* Home Icon */}
              <div className="absolute top-2 right-2">
                <button 
                  onClick={() => router.push("/")} 
                  className="p-2 rounded-full transition-colors" 
                  style={{ backgroundColor: "#b28d7b" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10m-1 5h-1" />
                  </svg>
                </button>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
                Join Our Program
              </h3>

              
              <button
                onClick={handleJoinClick}
                className="w-full py-3 px-4 text-black font-bold rounded-full hover:opacity-90 transition-colors text-lg md:text-xl"
                style={{ backgroundColor: "#c49d8b" }}
              >
                PE Registration
              </button>

              <button
                onClick={() => router.push("/review/pe")}
                className="w-full py-3 px-4 text-black font-bold rounded-full hover:opacity-90 transition-colors text-lg md:text-xl"
                style={{ backgroundColor: "#c49d8b" }}
              >
                PE Feedback
              </button>

              <button
                onClick={() => window.open("https://docs.google.com/document/d/1BDFD8BxX1OE347HK4KXAno3U8I_pJs44vHswShTd10Q/edit?usp=sharing", "_blank")}
                className="w-full py-3 px-4 text-black font-bold rounded-full hover:opacity-90 transition-colors text-lg md:text-xl"
                style={{ backgroundColor: "#c49d8b" }}
              >
                New Joiners Handbook
              </button>

            </div>
          </section>
        </div>

        {/* Bottom Row: Daily Practice and Benefits */}
        <section className="w-full p-6 md:p-12 overflow-auto">
          
          <div className="mb-8 border rounded-xl p-4" style={{ borderColor: "#a57d6b" }}>
            <h4 className="text-2xl md:text-4xl font-extrabold text-black mb-3">
              Daily Practice:
            </h4>
            <p className="text-black mb-2">The 9 step practices take approximately 45 minutes:</p>
            <ul className="space-y-2 text-black text-base md:text-lg">
              {[
                "Hand exercises",
                "Leg exercises",
                "Breathing exercises (Strengthen lungs)",
                "Eye exercises",
                "Kapalabathi (to rejuvenate Brain cells)",
                "Makarasana (strengthen back)",
                "Body Massage",
                "14 point acupressure (Focus on inner glands)",
                "Relaxation (total body relaxation)"
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border rounded-xl p-4" style={{ borderColor: "#a57d6b" }}>
            <h4 className="text-2xl md:text-4xl font-extrabold text-black mb-3">
              PE Benefits:
            </h4>
            <ul className="space-y-2 text-black text-base md:text-lg">
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
