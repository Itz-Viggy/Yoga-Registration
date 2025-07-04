"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StateDropdown from "@/components/statesdropdown";

export default function PhysicalExercisePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    state: "",
    gender: "",
    code: "+1",
    phone: ""
  });
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
      const res = await fetch("/api/pe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to save data");
      router.push("/register/success");
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
    <div className="min-h-screen flex items-center justify-center bg-stone-800">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-stone-700 p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Physical Exercise Registration
        </h2>

        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstname" className="block text-amber-200 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Enter your first name"
            required
            pattern="^[A-Za-z]+$"
            title="First name should contain letters only"
            value={formData.firstname}
            onChange={handleChange}
            className="w-full border border-amber-700 p-2 rounded bg-stone-700 text-amber-200"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastname" className="block text-amber-200 mb-1">
            Last Name <span className="text-amber-200">(Optional)</span>
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Enter your last name"
            pattern="^[A-Za-z]*$"
            title="Last name should contain letters only"
            value={formData.lastname}
            onChange={handleChange}
            className="w-full border border-amber-700 p-2 rounded bg-stone-700 text-amber-200"
          />
        </div>

        {/* State Dropdown */}
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

        {/* Gender */}
        <div className="mb-4">
          <label htmlFor="gender" className="block text-amber-200 mb-1">
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            required
            value={formData.gender}
            onChange={handleChange}
            className="w-full border border-amber-700 p-2 rounded bg-stone-700 text-amber-200"
          >
            <option value="">Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Phone with Country Code */}
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
              pattern="^\d{7,10}$"
              title="Phone number must be 7 to 10 digits"
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

        <div className="space-y-3">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          <button
            type="button"
            onClick={handleBack}
            className="w-full py-3 px-4 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
