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
        SKY Yoga <br />
        Physical Exercise (PE)
        </h1>
      </header>

      {/* Main Content */}
      <main className="w-screen flex flex-col overflow-hidden h-auto md:h-[calc(100vh-64px)]">
        {/* ------------ Top row ------------ */}
        <div className="flex flex-col md:flex-row flex-1">
          {/* ---------- Program Details ---------- */}
          <section className="w-full md:w-1/2 bg-stone-800 p-6 md:p-12 overflow-auto">
            <div className="text-amber-200 space-y-1 text-base md:text-lg">
            
              <h4 className="text-2xl md:text-4xl font-bold text-white mb-2">
                Program Details
              </h4>

              <ul className="space-y-1">
                {[
                  "We don't charge any fees for physical exercises run by this online group for 8 weeks",
                  "We completed 10 Batches, around 500 students learned physical exercises with our online group",
                  "We have 4 masters and 10 volunteers to run this group",
                  "You can see all of them as Admin in contacts",
                  "Each Batch runs for 8 weeks - 1 day a week",
                  "The group count is usually around 20-25 students in each class",
                  "We teach same practices in both the classes, so you can attend either one class depending on your availability",
                  "You can very well interact with Masters and Volunteers at the end of the class to ask questions",
                  "SKY experienced Masters and Volunteers are running the class",
                  "Please do your practices on the Mat",
                  "Please turn on the video during online classes, Masters will correct your practices",
                  "We will send Zoom class reminders one day before the class"
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mr-2">👉</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
            </div>
          </section>

          {/* ---------- Welcome Modal ---------- */}
          <section className="w-full md:w-1/2 bg-stone-800 p-4 flex items-center justify-center">
            <div className="w-full max-w-md bg-stone-700 p-6 rounded-2xl shadow-xl text-center space-y-3 relative">
              {/* Home icon in top left corner */}
              <div className="absolute top-2 right-2">
                <button 
                  onClick={() => router.push("/")} 
                  className="p-2 bg-amber-700 hover:bg-amber-600 rounded-full transition-colors"
                  aria-label="Return to home"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10m-1 5h-1" />
                  </svg>
                </button>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                
              </h3>
              
              <button
                onClick={() => window.open("https://docs.google.com/document/d/1BDFD8BxX1OE347HK4KXAno3U8I_pJs44vHswShTd10Q/edit?usp=sharing", "_blank")}
                className="w-full py-3 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors text-sm md:text-base mt-6"
              >
                New Joiners Handbook
              </button>
              <button
                onClick={handleJoinClick}
                className="w-full py-3 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors text-sm md:text-base"
              >
                PE Registration
              </button>
              

              <button
                onClick={() => router.push("/review/pe")}
                className="w-full py-3 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors text-sm md:text-base"
              >
                PE Feedback
              </button>
              
            </div>
          </section>
        </div>

        {/* ------------ Bottom row: Daily Practice and Benefits ------------ */}
        <section className="w-full bg-stone-800 p-6 md:p-12 overflow-auto">
          {/* Daily Practice */}
          <div className="mb-8">
            <h4 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
              Daily Practice
            </h4>
            <p className="text-amber-200 mb-2">The 9 steps practices will take 45 mins of time:</p>
            <ul className="list-none space-y-2 text-amber-200 leading-snug text-base md:text-lg">
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Hand exercises</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Leg exercises</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Breathing exercises (Strengthen lungs)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Eye exercises</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Kapalabathi (to rejuvenate Brain cells)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Makarasana (strengthen back)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Body Massage</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>14 point acupressure (Focus on inner glands)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Relaxation (total body relaxation)</span>
              </li>
            </ul>
          </div>
          
          {/* PE Benefits */}
          <div>
            <h4 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
              PE Benefits
            </h4>
            <ul className="space-y-2 text-amber-200 leading-snug text-base md:text-lg">
              {benefits.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2">👉</span>
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
