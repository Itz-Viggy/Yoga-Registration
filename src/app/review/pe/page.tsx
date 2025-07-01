"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function FeedbackPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    likedBest: "",
    improvements: "",
    rating: "",
    suggestions: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/feedback/pe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submission failed");
      router.push("/pe");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    router.push("/pe");
  };

  return (
    <div className="min-h-screen w-screen flex flex-col bg-white">
      
      {/* Header */}
      <header
        className="w-full py-4 border-b relative"
        style={{ borderColor: "#a57d6b", backgroundColor: "white", color: "#a57d6b" }}
      >
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Image
            src="/Vethathri-Maharishi-1-removebg-preview.png"
            alt="Kayakalpa Logo"
            width={48}
            height={48}
          />
        </div>
        <h1 className="text-2xl font-bold text-center text-black">
          
          Physical Exercise <br />
          Feedback
        </h1>
      </header>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-[#f4ebe8] p-8 rounded-xl shadow-lg space-y-6 border relative"
          style={{ borderColor: "#a57d6b" }}
        >
          {/* Home Button */}
          <div className="absolute top-2 right-2">
            <button
              type="button"
              onClick={() => router.push("/pe")}
              className="p-2 rounded-full transition-colors"
              style={{ backgroundColor: "#b28d7b" }}
              aria-label="Return to home"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10m-1 5h-1" />
              </svg>
            </button>
          </div>

          <h2 className="text-2xl font-bold text-black text-center">
           
          </h2>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-black mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              pattern="^[A-Za-z\s\.]+$"
              title="Please enter letters, spaces or dots only"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded text-black bg-white"
              style={{ borderColor: "#a57d6b" }}
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-black mb-1">Group <span className="text-red-500">*</span></label>
            <div className="flex space-x-4">
              {[
                { label: "Women's Group", value: "female" },
                { label: "Men's Group", value: "male" },
              ].map((group) => (
                <label key={group.value} className="inline-flex items-center text-black">
                  <input
                    type="radio"
                    name="gender"
                    value={group.value}
                    checked={formData.gender === group.value}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  {group.label}
                </label>
              ))}
            </div>
          </div>

          {/* Liked Best */}
          <div>
            <label htmlFor="likedBest" className="block text-black mb-1">
              What did you like best about the session? <span className="text-red-500">*</span>
            </label>
            <textarea
              id="likedBest"
              name="likedBest"
              required
              rows={3}
              placeholder="Your feedback..."
              value={formData.likedBest}
              onChange={handleChange}
              className="w-full border p-2 rounded text-black bg-white"
              style={{ borderColor: "#a57d6b" }}
            />
          </div>

          {/* Health Improvements */}
          <div>
            <label htmlFor="improvements" className="block text-black mb-1">
              Do you like to share any specific health improvements after SKY practices?
            </label>
            <textarea
              id="improvements"
              name="improvements"
              rows={3}
              placeholder="Your feedback..."
              value={formData.improvements}
              onChange={handleChange}
              className="w-full border p-2 rounded text-black bg-white"
              style={{ borderColor: "#a57d6b" }}
            />
          </div>

          {/* Rating */}
          <div>
            <label htmlFor="rating" className="block text-black mb-1">
              How would you rate overall experience? <span className="text-red-500">*</span>
            </label>
            <select
              id="rating"
              name="rating"
              required
              value={formData.rating}
              onChange={handleChange}
              className="w-full border p-2 rounded text-black bg-white"
              style={{ borderColor: "#a57d6b" }}
            >
              <option value="" disabled>Select your rating</option>
              <option value="Well Organized">Excellent</option>
              <option value="Good">Very Good</option>
              <option value="Ok">Good</option>
              <option value="Needs Improvement">Needs Improvement</option>
            </select>
          </div>

          {/* Suggestions */}
          <div>
            <label htmlFor="suggestions" className="block text-black mb-1">
              Any other suggestions?
            </label>
            <textarea
              id="suggestions"
              name="suggestions"
              rows={3}
              placeholder="Your feedback..."
              value={formData.suggestions}
              onChange={handleChange}
              className="w-full border p-2 rounded text-black bg-white"
              style={{ borderColor: "#a57d6b" }}
            />
          </div>

          {error && (
            <p className="text-red-500 text-center">{error}</p>
          )}

          {/* Buttons */}
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
        </form>
      </div>
    </div>
  );
}
