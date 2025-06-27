"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import StateDropdown from "@/components/statesdropdown";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    state: "",
    code: "+1",
    phone: "",
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
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to save data");
      router.push("/register/step1");
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
        style={{ borderColor: "#a57d6b", backgroundColor: "#a57d6b" }}
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
          Kayakalpa Registration
        </h1>
      </header>

      {/* Form Section */}
      <div className="flex-1 flex items-start justify-center pt-6 p-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full p-8 rounded-xl shadow-lg border space-y-4"
          style={{ backgroundColor: "#f4ebe8", borderColor: "#a57d6b" }}
        >
          <h2 className="text-2xl font-bold text-black text-center mb-2">
            Kayakalpa Registration
          </h2>

          {/* First Name */}
          <div>
            <label htmlFor="firstname" className="block text-black mb-1">
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
              className="w-full border p-2 rounded bg-white text-black"
              style={{ borderColor: "#a57d6b" }}
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastname" className="block text-black mb-1">
              Last Name <span className="text-black">(Optional)</span>
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
              className="w-full border p-2 rounded bg-white text-black"
              style={{ borderColor: "#a57d6b" }}
            />
          </div>

          {/* State */}
          <div>
            <label htmlFor="state" className="block text-black mb-1">
              State
            </label>
            <StateDropdown
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-black mb-1">Phone Number</label>
            <div className="flex space-x-2">
              <select
                name="code"
                value={formData.code}
                onChange={handleChange}
                className="border p-2 rounded bg-white text-black"
                style={{ borderColor: "#a57d6b" }}
              >
                <option value="+1">+1 (US)</option>
                <option value="+91">+91 (IN)</option>
              </select>
              <input
                type="tel"
                name="phone"
                required
                pattern="^\d{7,10}$"
                title="Phone number must be 10 digits"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 border p-2 rounded bg-white text-black"
                style={{ borderColor: "#a57d6b" }}
                placeholder="1234567890"
              />
            </div>
            <p className="text-xs text-black mt-1">
              Enter your 10 digit phone number.
            </p>
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
              {loading ? "Submitting..." : "Submit"}
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
