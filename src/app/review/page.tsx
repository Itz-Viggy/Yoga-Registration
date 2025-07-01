"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function FeedbackPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    likedBest: "",
    improvements: "",
    rating: "",
    suggestions: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submission failed");
      router.push("/kkhome");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    router.push("/kkhome");
  };

  return (
    <div className="min-h-screen w-screen flex flex-col bg-white">
      
      {/* Header */}
      <header
        className="w-full py-4 border-b relative"
        style={{ borderColor: "#a57d6b", backgroundColor: "white" }}
      >
        <div
          className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => router.push("/kkhome")}
        >
          <Image
            src="/Vethathri-Maharishi-1-removebg-preview.png"
            alt="Kayakalpa Logo"
            width={48}
            height={48}
          />
        </div>
        <h1 className="text-2xl font-bold text-center text-black">
          Kayakalpa Feedback
        </h1>
      </header>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-8 rounded-xl shadow-lg border space-y-6"
          style={{ backgroundColor: "#f4ebe8", borderColor: "#a57d6b" }}
        >
          <h2 className="text-2xl font-bold text-black text-center">
         
          </h2>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-black mb-1 font-bold">
              Name
            </label> 
            <input
              type="text"
              id="name"
              name="name"
              required
              pattern="^[A-Za-z\s\.]+$"
              title="Please enter letters, spaces or dots only"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded bg-white text-black"
              style={{ borderColor: "#a57d6b" }}
            />
          </div>

          {/* Liked Best */}
          <div>
            <label htmlFor="likedBest" className="block text-black mb-1 font-bold">
              What did you like best? <span className="text-red-500">*</span>
            </label>
            <textarea
              id="likedBest"
              name="likedBest"
              required
              rows={3}
              placeholder="Your thoughts..."
              value={formData.likedBest}
              onChange={handleChange}
              className="w-full border p-2 rounded bg-white text-black"
              style={{ borderColor: "#a57d6b" }}
            />
          </div>

          {/* Improvements */}
          <div>
            <label htmlFor="improvements" className="block text-black mb-1 font-bold">
              Any health improvements to share?
            </label>
            <textarea
              id="improvements"
              name="improvements"
              rows={3}
              placeholder="Your feedback..."
              value={formData.improvements}
              onChange={handleChange}
              className="w-full border p-2 rounded bg-white text-black"
              style={{ borderColor: "#a57d6b" }}
            />
          </div>

          {/* Rating */}
          <div>
            <label htmlFor="rating" className="block text-black mb-1 font-bold">
              How would you rate the session? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="rating"
              name="rating"
              required
              placeholder="e.g., Excellent, Good, Needs Improvement"
              value={formData.rating}
              onChange={handleChange}
              className="w-full border p-2 rounded bg-white text-black"
              style={{ borderColor: "#a57d6b" }}
            />
          </div>

          {/* Suggestions */}
          <div>
            <label htmlFor="suggestions" className="block text-black mb-1 font-bold">
              Any other suggestions?
            </label>
            <textarea
              id="suggestions"
              name="suggestions"
              rows={3}
              placeholder="More ideas..."
              value={formData.suggestions}
              onChange={handleChange}
              className="w-full border p-2 rounded bg-white text-black"
              style={{ borderColor: "#a57d6b" }}
            />
          </div>

          {error && (
            <p className="text-red-500 text-center">{error}</p>
          )}

          {/* Buttons */}
          <div className="space-y-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 text-black font-bold rounded-full hover:opacity-90 transition-colors text-lg"
              style={{ backgroundColor: "#c49d8b" }}
            >
              {loading ? "Submitting..." : "Submit Feedback"}
            </button>
            <button
              type="button"
              onClick={handleBack}
              className="w-full py-3 px-4 text-black font-bold rounded-full hover:opacity-90 transition-colors text-lg"
              style={{ backgroundColor: "#c49d8b" }}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
