import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Code,
  Laptop,
  Database,
  Briefcase,
  Shield,
  Users,
  AlertCircle,
  MessageSquare,
  Heart,
  UserCheck,
  Target,
  Trophy,
  Zap,
  Clock,
  TrendingUp,
  FileText,
  GraduationCap,
  CheckCircle,
  Lightbulb,
  Users2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function Cells() {
  const cells = [
    {
      title: "Software Development Cell",
      icon: <Code className="h-10 w-10" />,
      description:
        "Focuses on strengthening programming skills of MCA students through real-world software projects, hackathons, and coding workshops.",
      objectives: [
        "Enhance coding & problem-solving skills",
        "Hands-on software development exposure",
        "Encourage open-source contributions",
        "Prepare students for IT industry roles",
      ],
      activities: [
        "Web & mobile app development projects",
        "Hackathons & coding challenges",
        "Git & GitHub workshops",
        "Industry-based mini projects",
      ],
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Data Science & AI Cell",
      icon: <Database className="h-10 w-10" />,
      description:
        "Introduces MCA students to Data Analytics, Artificial Intelligence, and Machine Learning through practical learning.",
      objectives: [
        "Build strong data analysis foundations",
        "Hands-on AI & ML exposure",
        "Promote research in emerging tech",
        "Industry-aligned learning",
      ],
      activities: [
        "Python & ML workshops",
        "Data analytics projects",
        "AI seminars & webinars",
        "Research paper guidance",
      ],
      color: "from-purple-600 to-purple-800",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      title: "Internship & Placement Cell",
      icon: <Briefcase className="h-10 w-10" />,
      description:
        "Bridges the gap between academics and industry by providing internships, training, and placement support to MCA students.",
      objectives: [
        "Industry-ready skill development",
        "Internship & placement assistance",
        "Resume & interview preparation",
        "Industry collaborations",
      ],
      activities: [
        "Internship coordination",
        "Placement drives",
        "Mock interviews",
        "Career counseling sessions",
      ],
      color: "from-green-600 to-green-800",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      title: "Research & Innovation Cell",
      icon: <Lightbulb className="h-10 w-10" />,
      description:
        "Encourages MCA students to participate in research, innovation, and publication in emerging computing domains.",
      objectives: [
        "Promote research culture",
        "Encourage innovation & startups",
        "Support paper publications",
        "Enhance analytical thinking",
      ],
      activities: [
        "Research methodology workshops",
        "Paper publication guidance",
        "Innovation bootcamps",
        "Technical seminars",
      ],
      color: "from-indigo-600 to-indigo-800",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
    {
      title: "Internal Quality Assurance Cell (IQAC)",
      icon: <ShieldCheck className="h-10 w-10" />,
      description:
        "Ensures continuous academic and administrative quality improvement in the MCA program.",
      objectives: [
        "Maintain academic standards",
        "Continuous program evaluation",
        "Feedback-based improvements",
        "Accreditation support",
      ],
      activities: [
        "Academic audits",
        "Student feedback analysis",
        "Curriculum enhancement",
        "Quality documentation",
      ],
      color: "from-cyan-600 to-cyan-800",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
    {
      title: "Anti-Ragging Cell",
      icon: <Shield className="h-10 w-10" />,
      description:
        "Ensures a safe, respectful, and ragging-free environment for MCA students.",
      objectives: [
        "Prevent ragging incidents",
        "Create awareness",
        "Provide safe reporting channels",
        "Immediate grievance handling",
      ],
      activities: [
        "Awareness programs",
        "Orientation sessions",
        "Monitoring committees",
        "Student counseling",
      ],
      color: "from-red-600 to-red-800",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      title: "Grievance Redressal Cell",
      icon: <AlertCircle className="h-10 w-10" />,
      description:
        "Provides a transparent platform for MCA students to raise academic and administrative concerns.",
      objectives: [
        "Quick grievance resolution",
        "Transparency",
        "Student satisfaction",
        "Process improvement",
      ],
      activities: [
        "Online grievance submission",
        "Periodic meetings",
        "Student feedback sessions",
        "Issue resolution tracking",
      ],
      color: "from-orange-600 to-orange-800",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      title: "Women Development Cell",
      icon: <Heart className="h-10 w-10" />,
      description:
        "Empowers female MCA students through career guidance, safety initiatives, and leadership programs.",
      objectives: [
        "Women empowerment",
        "Career guidance",
        "Safe campus environment",
        "Skill development",
      ],
      activities: [
        "Leadership workshops",
        "Self-defense training",
        "Career mentoring",
        "Awareness programs",
      ],
      color: "from-rose-600 to-rose-800",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
    },
    {
      title: "Cultural & Sports Committee",
      icon: <Trophy className="h-10 w-10" />,
      description:
        "Promotes overall personality development of MCA students through cultural and sports activities.",
      objectives: [
        "Encourage extracurricular activities",
        "Develop teamwork",
        "Stress management",
        "Talent recognition",
      ],
      activities: [
        "Annual cultural fest",
        "Sports competitions",
        "Tech-cultural events",
        "Recreational activities",
      ],
      color: "from-violet-600 to-violet-800",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Cells & Committees | MCA | Dr. Sudhakarrao Jadhavar Institute of
          Management and Technology, Pune
        </title>
        <meta
          name="description"
          content="Explore various academic, technical, placement, and welfare cells of the MCA program at Dr. Sudhakarrao Jadhavar Institute of Management and Technology, Pune."
        />
      </Helmet>

      {/* HERO */}
      <section className="py-14 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            MCA Cells & Committees
          </h1>
          <p className="text-gray-300 text-lg">
            Empowering MCA students through academic excellence, industry
            exposure, innovation, and holistic development
          </p>
        </div>
      </section>

      {/* CELLS GRID */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cells.map((cell, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className={`bg-white rounded-xl p-6 border ${cell.borderColor} shadow hover:shadow-xl transition`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${cell.color} text-white mb-4`}
              >
                {cell.icon}
              </div>

              <h3 className="text-lg font-bold mb-2">{cell.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {cell.description}
              </p>

              <ul className="space-y-2 text-sm">
                {cell.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold mb-3">
            Shape Your IT Career with MCA
          </h2>
          <p className="text-blue-100 mb-6">
            Participate in our cells and gain industry-ready skills throughout
            your MCA journey
          </p>
          <button className="px-6 py-3 bg-white text-blue-700 rounded-full font-semibold hover:shadow-lg transition">
            Enquire Now
          </button>
        </div>
      </section>
    </>
  );
}
