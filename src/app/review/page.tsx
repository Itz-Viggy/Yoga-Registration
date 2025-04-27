"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
      // Replace with your actual endpoint
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submission failed");
      router.push("/thank-you");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-800 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-stone-700 p-8 rounded-xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-white text-center">
          Session Feedback
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
      </form>
    </div>
  );
}
