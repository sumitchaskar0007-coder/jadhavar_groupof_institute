import React from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import {
  Building,
  BookOpen,
  Monitor,
  Wifi,
  Server,
  Home,
  Dumbbell,
  Coffee,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Award,
  Shield,
  Zap,
  Globe,
  Users2,
  Target
} from "lucide-react"

export default function Facilities() {
  const facilities = [
    {
      title: "Modern IT Infrastructure",
      icon: <Building className="h-10 w-10" />,
      description:
        "State-of-the-art infrastructure designed specifically for MCA students with modern classrooms, labs, and digital learning spaces.",
      features: [
        "Purpose-built IT campus",
        "Smart classrooms",
        "24/7 security",
        "Green & eco-friendly environment"
      ],
      stats: "Advanced Campus",
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Computer Labs",
      icon: <Monitor className="h-10 w-10" />,
      description:
        "Fully equipped computer laboratories with high-performance systems and latest software tools aligned with MCA curriculum.",
      features: [
        "High-end systems",
        "Latest IDEs & tools",
        "Cloud & AI software",
        "Project-based learning"
      ],
      stats: "Advanced Labs",
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Central Library",
      icon: <BookOpen className="h-10 w-10" />,
      description:
        "Extensive library with textbooks, reference books, journals, e-resources, and research materials for MCA students.",
      features: [
        "Technical books & journals",
        "Digital library access",
        "Quiet study zones",
        "Research support"
      ],
      stats: "Knowledge Hub",
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      title: "Server & Networking Lab",
      icon: <Server className="h-10 w-10" />,
      description:
        "Dedicated networking and server lab for hands-on training in cloud computing, cybersecurity, and system administration.",
      features: [
        "Live server environment",
        "Networking equipment",
        "Cyber security tools",
        "Cloud practice setups"
      ],
      stats: "Industry Ready",
      color: "from-amber-600 to-orange-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-200"
    },
    {
      title: "Wi-Fi Enabled Campus",
      icon: <Wifi className="h-10 w-10" />,
      description:
        "High-speed Wi-Fi connectivity across the entire campus supporting online learning, research, and project work.",
      features: [
        "High bandwidth internet",
        "Secure access",
        "24/7 availability",
        "Digital learning support"
      ],
      stats: "High Speed",
      color: "from-indigo-600 to-violet-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-violet-50",
      borderColor: "border-indigo-200"
    },
    {
      title: "Hostel Facilities",
      icon: <Home className="h-10 w-10" />,
      description:
        "Separate hostel facilities for boys and girls ensuring safety, comfort, and a focused academic environment.",
      features: [
        "AC & Non-AC rooms",
        "24/7 security",
        "Mess facility",
        "Study-friendly environment"
      ],
      stats: "Safe Stay",
      color: "from-teal-600 to-green-600",
      bgColor: "bg-gradient-to-br from-teal-50 to-green-50",
      borderColor: "border-teal-200"
    },
    {
      title: "Sports & Fitness",
      icon: <Dumbbell className="h-10 w-10" />,
      description:
        "Sports and fitness facilities to ensure physical well-being and stress-free academic life for MCA students.",
      features: [
        "Gymnasium",
        "Indoor & outdoor games",
        "Yoga & meditation",
        "Sports activities"
      ],
      stats: "Healthy Life",
      color: "from-orange-600 to-amber-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      borderColor: "border-orange-200"
    },
    {
      title: "Canteen",
      icon: <Coffee className="h-10 w-10" />,
      description:
        "Hygienic canteen offering nutritious meals, snacks, and refreshments at affordable prices.",
      features: [
        "Hygienic food",
        "Affordable pricing",
        "Variety of meals",
        "Student friendly"
      ],
      stats: "Healthy Food",
      color: "from-pink-600 to-rose-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      borderColor: "border-pink-200"
    }
  ]

  return (
    <>
      <Helmet>
        <title>MCA Facilities & Infrastructure | Jadhavar Institute of Management & Technology</title>
        <meta
          name="description"
          content="Explore modern MCA facilities including computer labs, server labs, library, hostel, Wi-Fi campus, and sports facilities at Jadhavar Institute of Management & Technology."
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            MCA Facilities & Infrastructure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-200 leading-relaxed"
          >
            A technology-driven learning environment designed to shape future IT professionals
          </motion.p>
        </div>
      </section>

      {/* FACILITIES GRID */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl text-base md:text-lg">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`rounded-xl p-6 shadow-lg border ${facility.borderColor} ${facility.bgColor} hover:shadow-2xl transition`}
              >
                <div className={`w-16 h-16 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br ${facility.color} text-white`}>
                  {facility.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {facility.title}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  {facility.description}
                </p>

                <ul className="space-y-2">
                  {facility.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm md:text-base">
                      <ChevronRight className="h-4 w-4 text-blue-600 mt-1 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL FEATURES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Digital Learning",
                desc: "Access to online learning platforms, MOOCs, and digital resources."
              },
              {
                icon: <Users2 className="h-8 w-8" />,
                title: "Collaborative Spaces",
                desc: "Group discussion rooms and project collaboration areas."
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Career Support",
                desc: "Placement training, internships, and career guidance for MCA students."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 shadow-md"
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
