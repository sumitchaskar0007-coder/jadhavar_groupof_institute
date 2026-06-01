import React from "react";
import { ExternalLink } from "lucide-react";

const institutesData = [
  {
    title: "PRIMARY SCHOOLS",
    items: [
      {
        name: "Jadhavar International School (Play Group to 8th – CBSE Board)",
        url: "https://jadhavarinternationalschool.com/",
      },
      {
        name: "Prin. Dr. Sudhakarrao Jadhavar Primary & Secondary High School (Semi English 1st to 10th)",
        url: "https://www.jadhavarsemienglish.in",
      },
      {
        name: "Jai Ganesh English Medium School (Play Group to 7th)",
        url: "https://www.jgefs.org",
      },
      {
        name: "Prin. Dr. Sudhakar Jadhavar Purva Prathmik Vidyalaya",
        url: "#",
      },
    ],
  },
  {
    title: "SECONDARY SCHOOLS",
    items: [
      {
        name: "Paradise English Medium School",
        url: "https://www.paradiseems.co.in",
      },
      {
        name: "Jadhavar English Medium School",
        url: "https://www.jadhavarenglishschool.com",
      },
      {
        name: "Prin. Dr. Sudhakarrao Jadhavar Prathmik & Madhyamik Vidhyalay School",
        url: "#",
      },
      {
        name: "Adv Shardul Sudhakarrao Madhyamik Vidhyalay School",
        url: "#",
      },
    ],
  },
  {
    title: "JUNIOR COLLEGES",
    items: [
      {
        name: "Paradise English Medium School & Junior College",
        url: "https://www.jadhavarjrcollege.com",
      },
      {
        name: "Jadhavar English Medium School & Junior College",
        url: "https://www.jadhavarenglishschool.com",
      },
      {
        name: "Adv Shardul Sudhakarrao Jadhavar Commerce & Science Junior College",
        url: "#",
      },
    ],
  },
  {
    title: "UNDERGRADUATE PROGRAMS",
    items: [
      {
        name: "Institute of Nursing (A.N.M./G.N.M.), Narhe, Pune",
        url: "https://www.jadhavarfoundations.org",
      },
      {
        name: "Dr. Sudhakarrao Jadhavar College of Paramedical (CMLT, DMLT, BSc, MSc)",
        url: "https://www.jadhavarparamedicalcollege.com",
      },
      {
        name: "Jai Ganesh Shikshanshastra Mahavidyalaya (B.Ed – Eng. & Marathi Med.)",
        url: "https://www.jgefs.org",
      },
      {
        name: "Jai Ganesh Adhyapak Vidyalaya (D.El.Ed.)",
        url: "https://www.jgefs.org",
      },
      {
        name: "Prin. Dr. Sudhakarrao Jadhavar Arts, Comm. & Science College (B.A, B.Com, BBA, BCA, B.Sc – AI/ML, Data Science etc.)",
        url: "https://www.jadhavarjrcollege.com/",
      },
      {
        name: "Yeshwantrao Chavan Maharashtra Open University Center",
        url: "#",
      },
      {
        name: "UTJF's Montessori Teacher Training Course",
        url: "#",
      },
      {
        name: "Jadhavar College of Law, Narhe, Pune",
        url: "https://www.jadhavarcollegeoflaw.com/",
      },
      {
        name: "Adv. Shardulrao Sudhakarrao Jadhavar College of Law, Narhe, Pune",
        url: "https://www.shardulraojadhavarcollegeoflaw5.com",
      },
    ],
  },
  {
    title: "POST GRADUATE PROGRAMS",
    items: [
      {
        name: "Dr. Sudhakarrao Jadhavar Institute of Management and Technology (MCA)",
        url: "https://www.sjimt.in",
      },
      {
        name: "Aditya Institute of Management (MBA)",
        url: "https://www.adityainstitutemanagement.com",
      },
      {
        name: "Prin. Dr. Sudhakarrao Jadhavar Arts, Comm. & Science College (M.A, M.Com, M.Sc – Computer Application, Computer Science)",
        url: "https://www.jadhavarjrcollege.com/",
      },
      {
        name: "Yeshwantrao Chavan Maharashtra Open University Center",
        url: "#",
      },
    ],
  },
];

export default function JadhavarInstitutesSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F2F5F] mb-6">
            Our Institutes
          </h2>

          <div className="w-24 h-1 bg-[#0F2F5F] mx-auto mb-6 rounded-full"></div>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Comprehensive education from primary to post-graduate level,
            fostering academic excellence, innovation, and leadership across disciplines.
          </p>
        </div>

        {/* Institutes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {institutesData.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-8 border border-gray-100 hover:-translate-y-2"
            >
              {/* Category Title */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#0F2F5F]">
                  {section.title}
                </h3>
                <div className="w-12 h-[3px] bg-[#0F2F5F] mt-3 rounded-full"></div>
              </div>

              {/* Institutes List */}
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between text-gray-700 hover:text-[#0F2F5F] transition"
                    >
                      <span className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 bg-[#0F2F5F] rounded-full flex-shrink-0 group-hover:scale-125 transition"></span>
                        <span className="leading-relaxed">
                          {item.name}
                        </span>
                      </span>

                      <ExternalLink
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition mt-1"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
