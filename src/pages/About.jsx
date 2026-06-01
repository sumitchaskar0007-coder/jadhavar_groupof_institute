import React from "react";
import { Helmet } from "react-helmet-async";
import { ChevronRight, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>About Us | Jadhavar Group of Institutes</title>
        <meta
          name="description"
          content="Know Us Better - About Jadhavar Group of Institutes Pune. Education from KG to PG with career-oriented courses and 100% placement assistance."
        />
      </Helmet>

      {/* ================= INNER PAGE HERO ================= */}
      <section className="bg-[#0F2F5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Know Us Better
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-200 space-x-2">
            <span>Home</span>
            <ChevronRight size={16} />
            <span className="text-yellow-400">About Us</span>
          </div>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-bold text-[#0F2F5F] mb-6">
            About Jadhavar Group of Institute's
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-justify">

            <p>
              With the motto of <strong>“Education for Strength, Intellect & Wisdom”</strong>,
              Jadhavar Group of Institutes has become one of the fastest growing educational
              institutions in Maharashtra. The institute is committed to providing career-oriented
              education with 100% placement assistance and ensuring holistic development in academic,
              social, economical, political, industrial, art, sports, cultural, science and research fields.
            </p>

            <p>
              The institute operates under the expert guidance of educationist 
              <strong> Principal Dr. Sudhakarrao Jadhavar</strong> and 
              <strong> Advocate Shardulrao Sudhakarrao Jadhavar</strong> (Vice President). 
              The institute offers a wide range of courses under one roof from 
              Pre-Primary to Post Graduation.
            </p>

            {/* Leadership Card */}
            <div className="bg-blue-50 border-l-4 border-[#0F2F5F] p-6 rounded my-6">
              <h3 className="text-xl font-bold text-[#0F2F5F] mb-4">Leadership</h3>
              <p className="text-gray-700 mb-4">
                Learn more about our leadership team and their vision for the institution's future.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate("/about/president")}
                  className="inline-flex items-center gap-2 text-[#0F2F5F] hover:text-blue-900 font-semibold"
                >
                  President Profile
                  <ExternalLink size={16} />
                </button>
                <button
                  onClick={() => navigate("/about/vicepresident")}
                  className="inline-flex items-center gap-2 text-[#0F2F5F] hover:text-blue-900 font-semibold"
                >
                  Vice President Profile
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>

            <p>
              Courses include B.A, B.Com, M.A, M.Com, M.Sc, BBA, BBA (CA), BCA,
              BCS, DSM, DMLT, D.Ed, B.Ed, B.Sc in Data Science, Fashion Designing,
              Artificial Intelligence & Machine Learning, Cyber Security & Digital Science,
              M.Sc Computer Application, M.Sc Computer Science, MBA, PGDM,
              B.A.LLB., LL.B., ANM, GNM and International School programs.
            </p>

            <p>
              Courses conducted externally by Yashwantrao Chavan Maharashtra Open University
              and Savitribai Phule Pune University are also available on campus.
            </p>

            <p>
              The institute has introduced skill-based programs such as acting, dance,
              singing, photography, yoga, meditation and personality development.
              Students of 9th, 10th & Junior College are guided free of cost for
              competitive exams like MHCET, JEE & NEET by expert faculty from IITs and IIMs.
            </p>

            <p>
              Today the group has 80+ schools & colleges, 25,000+ students and
              1500+ teaching and non-teaching staff. Recruitment of faculty is
              done through strict oral and written examinations to maintain quality standards.
            </p>

            <p>
              Digital classrooms, E-learning facilities, attendance tracking,
              modern infrastructure and practical learning ensure overall student development.
              By adopting American educational philosophy along with Indian cultural values,
              students receive quality education with moral grounding.
            </p>

            <p>
              Since 2016, the institute conducts <strong>‘Yuva Sansad’</strong> —
              a Youth Parliament initiative recognized by Union & State Governments
              of Maharashtra and Goa. Many dignitaries have been honored through this platform.
            </p>

            <p>
              Initiatives like Jadhavar Science Festival, State Level Competitions,
              Adarsh Shikshak Puraskar, Research Funding up to Rs.10 Lakh,
              Earn & Learn Scheme, 50% fee concession for Armed Forces and Police families,
              and scholarships for girls demonstrate our commitment to society.
            </p>

            <p>
              The institute maintains strong industry tie-ups with companies like
              Bajaj Allianz, HDFC Bank, Volkswagen, Force Motors, Cognizant,
              Jio, Vodafone, IBM, L&T Infotech, Tata Capital and many more,
              ensuring 100% placement assistance.
            </p>

            <p>
              The organization aims to establish a University over 1000 acres
              and continues expanding across Education, Real Estate, Construction,
              Hospitality, Tax Consultancy and Film Production.
            </p>

            <p>
              Jadhavar Group of Institutes stands as one of Pune’s fastest growing
              educational institutions and is steadily progressing towards becoming
              Maharashtra’s leading educational group.
            </p>

          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {/* Vision */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border">
            <h3 className="text-2xl font-bold text-[#0F2F5F] mb-4">
              Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              “Education for Strength, Intellect & Wisdom” — To educate students
              to the highest levels of academic achievement, enabling them to
              reach and expand their potential and become productive, responsible,
              ethical, creative and compassionate members of society.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border">
            <h3 className="text-2xl font-bold text-[#0F2F5F] mb-4">
              Mission
            </h3>
            <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-5">
              <li>
                To encourage students to draw inspiration from their ethos and culture
                and embrace a global outlook.
              </li>
              <li>
                To teach honesty, humility and humanity as core life values.
              </li>
              <li>
                To inspire students to dream big and achieve their highest potential.
              </li>
              <li>
                To integrate privileged and underprivileged students and contribute
                towards rural community development.
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}