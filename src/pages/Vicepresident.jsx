import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ChevronRight,
  GraduationCap,
  Award,
  Users,
  Quote
} from "lucide-react";

export default function Secretary() {
  return (
    <>
      <Helmet>
        <title>Secretary | Adv. Shardul Sudhakarrao Jadhavar</title>
        <meta
          name="description"
          content="Profile of Adv. Shardul Sudhakarrao Jadhavar, Secretary of Jadhavar Group of Institutes."
        />
      </Helmet>

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-14 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">Secretary</h1>
          <p className="text-lg text-gray-200">
            Adv. Shardul Sudhakarrao Jadhavar
          </p>

          <div className="flex justify-center items-center gap-2 text-sm mt-4 text-gray-300">
            <span>Home</span>
            <ChevronRight size={14} />
            <span>About</span>
            <ChevronRight size={14} />
            <span className="text-yellow-400">Secretary</span>
          </div>
        </div>
      </motion.section>

      {/* CONTENT SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          {/* IMAGE + ABOUT */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
            <img
              src="/assets/images/about2.png"
              alt="Adv. Shardul Sudhakarrao Jadhavar"
              className="rounded-xl shadow-lg w-full"
            />

            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                About the Secretary
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Adv. Shardul Sudhakarrao Jadhavar plays a vital role
                in the strategic development and administration of
                Jadhavar Group of Institutes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Education today is rapidly transforming, making it challenging
                for students to choose the right path. Our aim is to develop
                not just knowledgeable individuals, but responsible,
                confident and compassionate citizens.
              </p>
            </div>
          </div>

          {/* QUALIFICATIONS */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            <div className="bg-white p-6 rounded-xl shadow">
              <GraduationCap className="text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Qualifications</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                M.B.A., P.G.D.H.R.M., M.Com., D.H.R.&L., D.C.L., D.CP.L.,
                APCL, CMED, D.LL&L.W., L.L.M.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <Award className="text-green-600 mb-3" />
              <h3 className="font-semibold mb-2">Student Support</h3>
              <p className="text-sm text-gray-600">
                Fee Concessions, Counseling, Workshops, Mental Health Awareness
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <Users className="text-purple-600 mb-3" />
              <h3 className="font-semibold mb-2">Development Focus</h3>
              <p className="text-sm text-gray-600">
                NSS Activities, Placements, Career Guidance & Professional Mentorship
              </p>
            </div>
          </div>

          {/* MESSAGE */}
          <div className="bg-white p-8 rounded-xl shadow border-l-4 border-blue-600">
            <div className="flex items-start gap-3">
              <Quote className="text-blue-500" />
              <p className="italic text-gray-700 leading-relaxed">
                At Jadhavar Institutes, we follow a student-centric approach
                with dedicated faculty guiding, mentoring and shaping students
                into capable professionals prepared to meet future challenges.
              </p>
            </div>
            <p className="mt-4 font-semibold text-gray-800">
              — Adv. Shardul Sudhakarrao Jadhavar
            </p>
          </div>

        </div>
      </section>
    </>
  );
}