"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FeedbackPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    gender: "", // Add gender field
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
      // Replace with your actual endpoint
      const res = await fetch("/api/feedback/pe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submission failed");
      router.push("/");
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
    <div className="min-h-screen flex items-center justify-center bg-stone-800 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-stone-700 p-8 rounded-xl shadow-lg space-y-6 relative"
      >
        <div className="absolute top-2 right-2">
          <button 
            onClick={() => router.push("/pe")} 
            className="p-2 bg-amber-700 hover:bg-amber-600 rounded-full transition-colors"
            aria-label="Return to home"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10m-1 5h-1" />
            </svg>
          </button>
        </div>
        <h2 className="text-2xl font-bold text-white text-center">
          Physical Exercise Feedback
        </h2>
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-amber-200 mb-1">
            Name
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
            className="w-full border border-amber-700 bg-stone-700 text-amber-200 p-2 rounded"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-amber-200 mb-1">Gender</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="mr-2 text-amber-700 border-amber-700 bg-stone-700"
              />
              <span className="text-amber-200">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="mr-2 text-amber-700 border-amber-700 bg-stone-700"
              />
              <span className="text-amber-200">Female</span>
            </label>
          </div>
        </div>

        {/* What did you like best */}
        <div>
          <label htmlFor="likedBest" className="block text-amber-200 mb-1">
            👉 What did you like best about the session? <span className="text-amber-400">*</span>
          </label>
          <textarea
            id="likedBest"
            name="likedBest"
            required
            rows={3}
            placeholder="Your feedback..."
            value={formData.likedBest}
            onChange={handleChange}
            className="w-full border border-amber-700 bg-stone-700 text-amber-200 p-2 rounded"
          />
        </div>

        {/* Health improvements */}
        <div>
          <label htmlFor="improvements" className="block text-amber-200 mb-1">
            👉 Do you like to share any specific health improvements after SKY practices?
          </label>
          <textarea
            id="improvements"
            name="improvements"
            rows={3}
            placeholder="Your feedback..."
            value={formData.improvements}
            onChange={handleChange}
            className="w-full border border-amber-700 bg-stone-700 text-amber-200 p-2 rounded"
          />
        </div>

        {/* Rating */}
        <div>
          <label htmlFor="rating" className="block text-amber-200 mb-1">
            👉 How would you rate overall experience? <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            id="rating"
            name="rating"
            required
            placeholder="e.g., Well Organized"
            value={formData.rating}
            onChange={handleChange}
            className="w-full border border-amber-700 bg-stone-700 text-amber-200 p-2 rounded"
          />
        </div>

        {/* Other suggestions */}
        <div>
          <label htmlFor="suggestions" className="block text-amber-200 mb-1">
            👉 Any other suggestions?
          </label>
          <textarea
            id="suggestions"
            name="suggestions"
            rows={3}
            placeholder="Your feedback..."
            value={formData.suggestions}
            onChange={handleChange}
            className="w-full border border-amber-700 bg-stone-700 text-amber-200 p-2 rounded"
          />
        </div>

        {error && (
          <p className="text-red-500 text-center">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors"
        >
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
        <button
    type="button"
    onClick={handleBack}
    className="w-full py-3 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors"
  >
    Back
  </button>
      </form>
    </div>
  );
}
