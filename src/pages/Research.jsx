import React from "react";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Microscope, Users, TrendingUp, BookOpen, Award, Lightbulb } from "lucide-react";

const researchAreas = [
  {
    title: "Science & Technology",
    description: "Advanced research in Computer Science, AI/ML, Data Science, Cybersecurity, and Digital Innovation",
    icon: <Microscope className="text-blue-600" size={32} />,
    focus: [
      "Artificial Intelligence & Machine Learning",
      "Data Science & Analytics",
      "Cybersecurity & Information Security",
      "IoT & Embedded Systems",
      "Cloud Computing"
    ]
  },
  {
    title: "Social Sciences & Law",
    description: "Research in law, governance, human rights, and social development initiatives",
    icon: <Users className="text-green-600" size={32} />,
    focus: [
      "Constitutional Law & Governance",
      "Criminal Justice System",
      "Human Rights & Social Justice",
      "Environmental Law",
      "Corporate Law & Corporate Governance"
    ]
  },
  {
    title: "Commerce & Management",
    description: "Research in business management, economics, finance, and entrepreneurship",
    icon: <TrendingUp className="text-purple-600" size={32} />,
    focus: [
      "Business Management & Strategy",
      "Financial Analysis & Investment",
      "Marketing & Consumer Behavior",
      "Entrepreneurship & StartUp Development",
      "Supply Chain Management"
    ]
  },
  {
    title: "Education & Pedagogy",
    description: "Innovative research in educational methodologies and learning outcome improvement",
    icon: <BookOpen className="text-orange-600" size={32} />,
    focus: [
      "Pedagogical Innovation",
      "E-Learning & Digital Education",
      "Skill Development Programs",
      "Teacher Training & Development",
      "Educational Technology"
    ]
  },
  {
    title: "Medical & Healthcare",
    description: "Research in nursing, paramedical sciences, and healthcare management",
    icon: <Award className="text-red-600" size={32} />,
    focus: [
      "Clinical Nursing Research",
      "Healthcare Administration",
      "Medical Technology",
      "Health & Wellness Programs",
      "Public Health"
    ]
  },
  {
    title: "Innovation & Entrepreneurship",
    description: "Research supporting startup ecosystems and innovation hubs",
    icon: <Lightbulb className="text-yellow-600" size={32} />,
    focus: [
      "Product Innovation",
      "Startup Incubation",
      "Industry Collaboration",
      "Patent & Intellectual Property",
      "Technology Transfer"
    ]
  }
];

export default function Research() {
  return (
    <>
      <Helmet>
        <title>Research | Jadhavar Group of Institutes</title>
        <meta
          name="description"
          content="Research at Jadhavar Group of Institutes - AI, Data Science, Law, Management, and Healthcare research with state-of-the-art facilities."
        />
      </Helmet>

      {/* ================= INNER PAGE HERO ================= */}
      <section className="bg-gradient-to-r from-[#0F2F5F] to-[#1a4a8a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Research & Innovation
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Advancing Knowledge, Driving Innovation, Creating Impact
          </p>

          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-300 space-x-2 mt-6">
            <span>Home</span>
            <ChevronRight size={16} />
            <span className="text-yellow-400">Research</span>
          </div>
        </div>
      </section>

      {/* ================= RESEARCH OVERVIEW ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2F5F] mb-4">
              Research Overview
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-2xl font-bold text-[#0F2F5F] mb-4">Our Research Mission</h3>
                <p>
                  Jadhavar Group of Institutes is committed to fostering a culture of research and innovation that addresses real-world challenges and contributes to societal development. We support faculty and students in conducting cutting-edge research across diverse domains to generate new knowledge and create sustainable solutions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0F2F5F] mb-4">Research Excellence</h3>
                <p>
                  Our research initiatives focus on solving complex problems and creating practical applications. With state-of-the-art facilities and dedicated teams, we aim to contribute meaningfully to academia, industry, and society. We maintain the highest standards of research ethics and academic integrity in all our projects.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#0F2F5F]">
                <h4 className="font-bold text-[#0F2F5F] mb-3">Research Achievements</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-yellow-500 font-bold">✓</span>
                    200+ Research Publications
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-500 font-bold">✓</span>
                    40+ Patents Filed
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-500 font-bold">✓</span>
                    1000+ Research Scholars
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-500 font-bold">✓</span>
                    500+ Active Research Projects
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Content - Infrastructure */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-l-4 border-[#0F2F5F]">
                <h3 className="text-2xl font-bold text-[#0F2F5F] mb-6">Research Infrastructure</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[#0F2F5F] mb-3">Research Labs & Centers</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex gap-2">
                        <span className="text-blue-600">→</span>
                        AI & Machine Learning Research Lab
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600">→</span>
                        Data Science & Analytics Center
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600">→</span>
                        Cybersecurity & Digital Forensics Lab
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600">→</span>
                        Biotechnology & Life Sciences Lab
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-blue-200 pt-4">
                    <h4 className="font-bold text-[#0F2F5F] mb-3">Available Resources</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        High-performance Computing Servers
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        Advanced Laboratory Equipment
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        100,000+ Digital Journal Access
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        Research Ethics Committee Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESEARCH AREAS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2F5F] mb-4">
              Research Areas
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive research across multiple disciplines to create innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F2F5F]">{area.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 text-sm">{area.description}</p>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-700">Research Focus:</p>
                  <ul className="space-y-2">
                    {area.focus.map((item, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-yellow-500 font-bold mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-16 bg-gradient-to-r from-[#0F2F5F] to-[#1a4a8a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Research Community
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            We welcome faculty collaborations, research proposals, and student research projects. Contact us to explore research opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-yellow-500 text-[#0F2F5F] font-bold rounded-lg hover:bg-yellow-400 transition"
            >
              Contact Research Office
            </a>
            <a
              href="/admissions"
              className="px-8 py-3 bg-white text-[#0F2F5F] font-bold rounded-lg hover:bg-gray-100 transition"
            >
              Apply for Research Programs
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
