import React, { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.MODE === 'production'
  ? 'https://law-5yers.onrender.com/api'
  : 'https://law-5yeas.onrender.com/api';

export default function AdmissionEnquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "MCA – Academic Year 2025-26",
    state: "",
    city: "",
    message: "",
  });


  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await axios.post(`${API_URL}/enquiry`, formData);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "MCA (Master of Computer Applications)",
        state: "",
        city: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="w-full bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-8 lg:ml-10 xl:ml-16">

          <div>
            <p className="text-sm font-semibold text-blue-700 mb-1">
              MCA Admissions 2025–27
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Admissions Open <br /> Master of Computer Applications (MCA)
            </h2>

            <p className="text-gray-600 max-w-xl leading-relaxed">
              Dr. Sudhakarrao Jadhavar Institute of Management and Technology, Pune
              offers a 2-Year full-time MCA program approved by AICTE and affiliated
              to Savitribai Phule Pune University (SPPU), with a strong focus on
              software development, programming, data science, and industry-ready IT skills.
            </p>

            <a
              href="/assets/pdf/mca-prospectus.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 border border-gray-300 px-6 py-2.5 rounded-md font-medium hover:bg-gray-100 transition"
            >
              ⬇ Download MCA Prospectus
            </a>
          </div>

          {/* ================= FORM ================= */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border rounded-xl p-6 shadow-sm max-w-md"
          >
            <h4 className="font-semibold text-lg mb-4">
              MCA Admission Enquiry
            </h4>

            <div className="space-y-3">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-4 py-2.5"
                placeholder="Full Name *"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-4 py-2.5"
                placeholder="Email ID *"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-4 py-2.5"
                placeholder="WhatsApp Number *"
              />

              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2.5"
              >
                <option>MCA (Master of Computer Applications)</option>
              </select>

              <input
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2.5"
                placeholder="State"
              />

              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2.5"
                placeholder="City"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full border rounded-md px-4 py-2.5"
                placeholder="Your Message"
              />

              {status === "success" && (
                <p className="text-green-600 text-sm">
                  ✔ Enquiry submitted successfully
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm">
                  ❌ Failed to submit enquiry
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-md font-semibold hover:bg-blue-950 transition"
              >
                {status === "loading" ? "Submitting..." : "Submit Enquiry"}
              </button>
            </div>
          </form>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="space-y-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border rounded-lg p-5">
              <h5 className="font-semibold mb-1">Program</h5>
              <p className="text-sm text-gray-600">
                MCA – 2 Years (Post Graduation)
              </p>
            </div>

            <div className="bg-white border rounded-lg p-5">
              <h5 className="font-semibold mb-1">Eligibility</h5>
              <p className="text-sm text-gray-600">
                Any Graduate with Mathematics (Min. 50%)
              </p>
            </div>

            <div className="bg-white border rounded-lg p-5 sm:col-span-2">
              <h5 className="font-semibold mb-1">Approval</h5>
              <p className="text-sm text-gray-600">
                AICTE Approved | Affiliated to SPPU
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">
              Important Dates
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Admissions Open: Ongoing</li>
              <li>• Last Date to Apply: As per seat availability</li>
              <li>• Academic Session Begins: July 2025</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">
              Why Choose MCA at Jadhavar Institute?
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Industry-oriented MCA curriculum</li>
              <li>• Strong focus on software & application development</li>
              <li>• Internship, project & placement assistance</li>
              <li>• Experienced faculty & modern computer labs</li>
            </ul>
          </div>
        </div>

      </div>
    </section>

  );
}
