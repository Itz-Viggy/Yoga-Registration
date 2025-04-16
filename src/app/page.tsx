"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleJoinClick = () => {
    router.push("/register");
  };

  return (
    <main className="w-screen h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left: Flyer (fills left half on md+, full width on smaller) */}
      <div className="relative w-full md:w-1/2 h-64 md:h-full bg-stone-800 flex items-center justify-center">
        <Image
          src="/flyer.jpeg"
          alt="Flyer"
          fill
          className="object-contain md:object-scale-down p-2"
        />
      </div>

      {/* Right: Welcome Modal */}
      <div className="flex items-center justify-center w-full md:w-1/2 h-auto md:h-full bg-stone-800 p-4">
        <div className="max-w-md w-full bg-stone-700 p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-white text-center mb-6">
            Welcome!
          </h1>
          <p className="text-amber-200 text-center mb-8">
            Join us for an exclusive yoga experience.
          </p>
          <button
            onClick={handleJoinClick}
            className="w-full py-3 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors"
          >
            Want to Enroll for Kayakalpa(KK)?
          </button>
        </div>
      </div>
    </main>
  );
}
