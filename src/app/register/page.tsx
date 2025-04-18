"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StateDropdown from "@/components/statesdropdown"; // Ensure this component exists

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", state: "", code:"+1", phone: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to save data");
      }
      
      router.push("/register/step1");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-800">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-stone-700 p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Register
        </h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-amber-200 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder = "Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-amber-700 p-2 rounded text-amber-200"
          />
        </div>
        <div className="mb-4">
            <label htmlFor="state" className="block text-amber-200 mb-1">
                State
            </label>
            <StateDropdown
                name="state"
                value={formData.state}
                onChange={handleChange}
            />
        </div>
        <div className="mb-4">
  <label className="block text-amber-200 mb-1">Phone Number</label>
  <div className="flex space-x-2">
    <select
      name="code"
      value={formData.code}
      onChange={handleChange}
      className="border border-amber-700 p-2 rounded bg-stone-700 text-amber-200"
    >
      <option value="+1">+1 (US)</option>
      <option value="+91">+91 (IN)</option>
      
    </select>
    <input
      type="tel"
      name="phone"
      required
      pattern="\d{7,10}"
      value={formData.phone}
      onChange={handleChange}
      className="flex-1 border border-amber-700 p-2 rounded bg-stone-700 text-amber-200"
      placeholder="1234567890"
    />
  </div>
  <p className="text-xs text-amber-200 mt-1">
    Enter your 10 digit phone number.
  </p>
</div>
        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
