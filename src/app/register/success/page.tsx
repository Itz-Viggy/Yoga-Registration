"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push("/kkhome");
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-800 p-4">
      <div className="max-w-md w-full bg-stone-700 p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-white mb-6">
          You have been successfully registered
        </h2>
        <p className="text-amber-200">
          Redirecting to home page...
        </p>
      </div>
    </div>
  );
}
