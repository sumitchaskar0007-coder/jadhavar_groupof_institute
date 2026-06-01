import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ChevronRight,
  GraduationCap,
  Award,
  Users,
  Quote,
  BookOpen,
  FileText
} from "lucide-react";

export default function President() {
  return (
    <>
      <Helmet>
        <title>President | Prin. Dr. Sudhakarrao Jadhavar</title>
        <meta
          name="description"
          content="Profile of Prin. Dr. Sudhakarrao Jadhavar, President of Jadhavar Group of Institutes."
        />
      </Helmet>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-14 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">President</h1>
          <p className="text-lg text-gray-200">
            Prin. Dr. Sudhakarrao Jadhavar
          </p>

          <div className="flex justify-center items-center gap-2 text-sm mt-4 text-gray-300">
            <span>Home</span>
            <ChevronRight size={14} />
            <span>About</span>
            <ChevronRight size={14} />
            <span className="text-yellow-400">President</span>
          </div>
        </div>
      </motion.section>

      {/* CONTENT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          {/* IMAGE + ABOUT */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
            <img
              src="/assets/images/about1.png"
              alt="Prin. Dr. Sudhakarrao Jadhavar"
              className="rounded-xl shadow-lg w-full"
            />

            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                About Prin. Dr. Sudhakarrao Jadhavar
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Prin. Dr. Sudhakarrao Jadhavar is the Founder and President
                of the Jadhavar Group of Institutes. He has dedicated his life
                to strengthening higher education, academic governance, and
                institutional excellence.
              </p>

              <p className="text-gray-700 leading-relaxed">
                “Education for strength, wisdom and intellect” — with this vision,
                he has established institutions that provide value-based education,
                nurturing disciplined, confident and capable young minds,
                especially in rural regions.
              </p>
            </div>
          </div>

          {/* QUALIFICATIONS */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            <div className="bg-white p-6 rounded-xl shadow">
              <GraduationCap className="text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Qualifications</h3>
              <p className="text-sm text-gray-600">
                M.Com, M.A., L.L.M., M.P.M., D.T.L., D.L.L.&L.W., 
                G.D.C.&A., Ph.D.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <Award className="text-green-600 mb-3" />
              <h3 className="font-semibold mb-2">University Positions</h3>
              <ul className="text-sm text-gray-600 list-disc pl-4 space-y-1">
                <li>Member – Management Council, SPPU</li>
                <li>Former Dean – Commerce Dept., SPPU</li>
                <li>General Secretary – Principals Forum, SPPU</li>
                <li>Member – Maharashtra Nursing Council</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <Users className="text-purple-600 mb-3" />
              <h3 className="font-semibold mb-2">Experience</h3>
              <p className="text-sm text-gray-600">
                25+ Years in Academic Leadership & Institutional Development
              </p>
            </div>
          </div>

          {/* MESSAGE */}
          <div className="bg-white p-8 rounded-xl shadow border-l-4 border-blue-600 mb-14">
            <div className="flex items-start gap-3">
              <Quote className="text-blue-500" />
              <p className="italic text-gray-700 leading-relaxed">
                Education must empower students with knowledge,
                strength, wisdom, and intellectual capability to
                become responsible citizens and nation builders.
              </p>
            </div>
            <p className="mt-4 font-semibold text-gray-800">
              — Prin. Dr. Sudhakarrao Jadhavar
            </p>
          </div>

          {/* AUTOBIOGRAPHY */}
          <div className="bg-white p-8 rounded-xl shadow mb-10">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-900">
                Autobiography
              </h3>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                मराठी
              </a>
              <a href="#" className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                हिंदी
              </a>
              <a href="#" className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                English
              </a>
            </div>
          </div>

          {/* BOOKS */}
          <div className="bg-white p-8 rounded-xl shadow">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-900">
                Published Book
              </h3>
            </div>

            <p className="text-gray-700 font-medium">
              यशाचे शिल्पकार : संघर्षातून शिखराकडे
            </p>
          </div>

        </div>
      </section>
    </>
  );
}