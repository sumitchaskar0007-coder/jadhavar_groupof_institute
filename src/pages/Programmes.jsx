import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  Users,
  Cpu,
  Gavel,
  ChevronRight,
  ExternalLink,
  Clock,
  ArrowRight
} from 'lucide-react'

export default function Programmes() {
  const programs = [
    {
      category: 'Law Programs',
      icon: <Gavel className="h-6 w-6" />,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      items: [
        {
          name: 'B.A. LL.B (5 Years)',
          duration: '5 Years',
          intake: 240,
          colleges: 'Jadhavar College of Law',
          url: 'https://www.jadhavarcollegeoflaw.com/'
        },
        {
          name: 'LL.B (3 Years)',
          duration: '3 Years',
          intake: 200,
          colleges: 'Adv. Shardulrao Law College',
          url: 'https://www.shardulraojadhavarcollegeoflaw5.com'
        },
        {
          name: 'LL.M (1-2 Years)',
          duration: '1-2 Years',
          intake: 80,
          colleges: 'Jadhavar College of Law',
          url: 'https://www.jadhavarcollegeoflaw.com/'
        }
      ]
    },
    {
      category: 'Management & Technology',
      icon: <Cpu className="h-6 w-6" />,
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50',
      items: [
        {
          name: 'MBA (2 Years)',
          duration: '2 Years',
          intake: 120,
          colleges: 'SJIMT',
          url: 'https://www.sjimt.in'
        },
        {
          name: 'MCA (3 Years)',
          duration: '3 Years',
          intake: 180,
          colleges: 'SJIMT',
          url: 'https://www.sjimt.in'
        },
        {
          name: 'BCA (3 Years)',
          duration: '3 Years',
          intake: 150,
          colleges: 'SJIMT',
          url: 'https://www.sjimt.in'
        }
      ]
    }
  ]

  return (
    <>
      <Helmet>
        <title>Academic Programs | Jadhavar Group of Institutes Pune</title>
        <meta name="description" content="Law, Management and Technology programs at Jadhavar Group of Institutes Pune." />
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-16 md:py-20 bg-gradient-to-br from-[#0a1e3c] via-[#0F2F5F] to-[#1E4C8F]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-white/20"
            >
              <BookOpen className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-semibold text-white">Academic Programs</span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Our <span className="text-yellow-400">Programs</span>
            </motion.h1>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300"
            >
              Quality education across Law, Management, and Technology
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* ================= PROGRAMS SECTION ================= */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {programs.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                >
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${category.color} px-6 py-4`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.category}</h3>
                    </div>
                  </div>

                  {/* Programs Grid */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {category.items.map((prog, i) => (
                        <div key={i} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                          <h4 className="font-semibold text-gray-900 mb-2">{prog.name}</h4>
                          <div className="space-y-1 text-sm text-gray-600 mb-3">
                            <p className="flex items-center gap-2">
                              <Clock size={14} /> {prog.duration}
                            </p>
                            <p className="flex items-center gap-2">
                              <Users size={14} /> Intake: {prog.intake}
                            </p>
                          </div>
                          <p className="text-xs text-gray-500 mb-3">{prog.colleges}</p>
                          <a
                            href={prog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold hover:underline"
                          >
                            Learn More <ExternalLink size={14} />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#0a1e3c] to-[#1E4C8F] rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Ready to Apply?</h2>
            <p className="text-gray-300 mb-6">Explore our programs and take the next step in your career.</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-2.5 rounded font-semibold hover:bg-yellow-500 transition"
            >
              Apply Now <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
