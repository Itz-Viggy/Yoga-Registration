"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StateDropdown from "@/components/statesdropdown";
import Image from "next/image";

export default function PhysicalExercisePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    participantType: "",
    firstname: "",
    lastname: "",
    state: "",
    gender: "",
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
          
          Physical Exercise <br /> Registration
        </h1>
      </header>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-[#f4ebe8] p-8 rounded-xl shadow-lg border"
          style={{ borderColor: "#a57d6b" }}
        >
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            
          </h2>

          {/* Participant Type */}
          <div className="mb-4">
            <label className="block text-black mb-2 text-base">Are you a new or returning participant?</label>
            <div className="flex space-x-4 mt-2">
              {["New", "Returning"].map((type) => (
                <label key={type} className="flex items-center text-black text-base">
                  <input
                    type="radio"
                    name="participantType"
                    value={type}
                    checked={formData.participantType === type}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-black mb-2 text-base">
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
              className="w-full border p-2 rounded bg-white text-black border-[#a57d6b] text-base"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="lastname" className="block text-black mb-2 text-base">
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
              className="w-full border p-2 rounded bg-white text-black border-[#a57d6b] text-base"
            />
          </div>

          {/* State */}
          <div className="mb-4">
            <label htmlFor="state" className="block text-black mb-2 text-base">
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
            <label htmlFor="gender" className="block text-black mb-2 text-base">
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              required
              value={formData.gender}
              onChange={handleChange}
              className="w-full border p-2 rounded bg-white text-black border-[#a57d6b] text-base"
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-black mb-2 text-base">Phone Number</label>
            <div className="flex space-x-2">
              <select
                name="code"
                value={formData.code}
                onChange={handleChange}
                className="border p-2 rounded bg-white text-black border-[#a57d6b] text-base"
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
                className="flex-1 border p-2 rounded bg-white text-black border-[#a57d6b] text-base"
                placeholder="1234567890"
              />
            </div>
            <p className="text-xs text-black mt-1 text-base">
              Enter your 10 digit phone number.
            </p>
          </div>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

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
