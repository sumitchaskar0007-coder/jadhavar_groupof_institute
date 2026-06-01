import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is Jadhavar Group of Institutes?",
      a: "Jadhavar Group of Institutes, Pune, is a reputed educational group established in 2002, offering programs in management, technology, law, nursing, paramedical sciences, arts, commerce, and school education."
    },
    {
      q: "Are the institutes approved and affiliated?",
      a: "Yes. All institutes under the group are approved by respective regulatory bodies such as AICTE and affiliated with Savitribai Phule Pune University or other competent authorities as applicable."
    },
    {
      q: "What courses are offered under the Jadhavar Group?",
      a: "The group offers undergraduate, postgraduate, and professional courses including MCA, Law, Nursing, Paramedical, Arts, Commerce, Science, and School Education."
    },
    {
      q: "How can I apply for admission?",
      a: "Admissions are conducted as per government and university norms. Students can apply through the official website or visit the campus for counseling and guidance."
    },
    {
      q: "Does the group provide placement assistance?",
      a: "Yes. The Central Placement Cell provides career guidance, soft skills training, internships, and placement opportunities with reputed national and international organizations."
    },
    {
      q: "Are scholarships available?",
      a: "Yes. Government scholarships, minority scholarships, and institutional assistance are available for eligible students as per rules and regulations."
    },
    {
      q: "Does the institute provide hostel and campus facilities?",
      a: "The group provides modern infrastructure including smart classrooms, computer labs, library access, Wi-Fi campus, seminar halls, and student support facilities."
    },
    {
      q: "Where is the campus located?",
      a: "The Jadhavar Group of Institutes is located in Pune, Maharashtra, with well-connected campus facilities and accessible transport routes."
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common queries about admissions, programs,
            facilities, placements, and academic excellence at
            <strong> Jadhavar Group of Institutes, Pune.</strong>
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-blue-50 transition"
                >
                  <span className="font-semibold text-gray-800">
                    {faq.q}
                  </span>

                  {isOpen ? (
                    <Minus className="w-5 h-5 text-blue-700" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-700" />
                  )}
                </button>

                {/* Answer Animation */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-gray-600 text-sm leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
