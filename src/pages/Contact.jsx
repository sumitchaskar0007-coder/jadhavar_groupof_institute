import React, { useState } from "react"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm()

  const [success, setSuccess] = useState(false)

  async function onSubmit(data) {
    await new Promise((r) => setTimeout(r, 800))
    setSuccess(true)
    reset()
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Contact | Dr. Sudhakarrao Jadhavar Institute of Management and Technology</title>
        <meta
          name="description"
          content="Contact Dr. Sudhakarrao Jadhavar Institute of Management and Technology, Pune. Enquire about MCA admissions, eligibility, fees, and counselling."
        />
        <meta
          name="keywords"
          content="MCA College Pune, Jadhavar MCA Contact, MCA Admission Enquiry Pune"
        />
        <link
          rel="canonical"
          href="https://www.jadhavarimt.edu.in/contact"
        />
      </Helmet>

      {/* ================= PAGE HEADING ================= */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-12"
      >
        Contact Us
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* ================= CONTACT INFO ================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border rounded-2xl shadow-lg p-8 space-y-5"
        >
          <h2 className="text-2xl font-semibold text-gray-900">
            Dr. Sudhakarrao Jadhavar Institute of Management and Technology
          </h2>

          <p className="text-lg text-gray-700">
            <strong>Location:</strong><br />
            Narhe, Pune, Maharashtra, India
          </p>

          <p className="text-lg text-gray-700">
            <strong>Email:</strong><br />
            lutjfoundationa@gmail.com
          </p>

          <p className="text-lg text-gray-700">
            <strong>Call:</strong><br />
            Mobile: +91 9823872816 / +91 9822018921
          </p>

          <p className="text-lg text-gray-700">
            <strong>Open Hours:</strong><br />
            Monday – Saturday: 9:00 AM to 5:00 PM
          </p>

          <p className="text-lg text-gray-700">
            <strong>Weekly Off:</strong> Sunday
          </p>

          <iframe
            title="College Location"
            src="https://www.google.com/maps?q=Narhe,Pune&output=embed"
            width="100%"
            height="280"
            style={{ border: 0 }}
            loading="lazy"
            className="rounded-xl mt-4"
          />
        </motion.div>

        {/* ================= CONTACT FORM ================= */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border rounded-2xl shadow-lg p-8 space-y-5"
        >
          <h2 className="text-2xl font-semibold text-gray-900">
            Admission / General Enquiry
          </h2>

          {/* Your Name */}
          <input
            {...register("name", { required: "Your name is required" })}
            placeholder="Your Name"
            className="w-full rounded-lg border px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}

          {/* Your Contact */}
          <input
            {...register("contact", {
              required: "Contact number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter valid 10-digit mobile number"
              }
            })}
            placeholder="Your Contact"
            className="w-full rounded-lg border px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.contact && <p className="text-red-600 text-sm">{errors.contact.message}</p>}

          {/* Your Email */}
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter valid email address"
              }
            })}
            placeholder="Your Email"
            className="w-full rounded-lg border px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}

          {/* Subject */}
          <input
            {...register("subject", { required: "Subject is required" })}
            placeholder="Subject"
            className="w-full rounded-lg border px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.subject && <p className="text-red-600 text-sm">{errors.subject.message}</p>}

          {/* Message */}
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Message"
            rows="4"
            className="w-full rounded-lg border px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-600 text-center font-medium text-lg">
              ✅ Your message has been sent successfully. We will contact you soon.
            </p>
          )}
        </motion.form>
      </div>
    </div>
  )
}
