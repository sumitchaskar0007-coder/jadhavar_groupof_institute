import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Announcement from "../components/Announcement.jsx";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Home() {
  // ========== PROGRAMS DATA ==========
  const programsData = [
    {
      category: "ENGINEERING",
      programs: ["B.Tech.", "M.Tech.", "M.Sc.", "Integrated M.Tech.", "PhD Programme"],
      hasEligibility: true,
      hasApply: true
    },
    {
      category: "DESIGN",
      programs: ["Bachelor of Design", "Master of Design", "PG Diploma In Innovation", "PhD in Design", "Automotive Clay & Digital Sculpting"],
      hasEligibility: true,
      hasApply: true
    },
    {
      category: "MANAGEMENT",
      programs: ["BBA", "BCom", "BCA", "MBA", "MCA", "MTech", "PhD Programs"],
      hasEligibility: true,
      hasApply: true
    },
    {
      category: "ARCHITECTURE",
      programs: ["B.Arch.", "M.Arch – TIAKS", "M.Plan", "PhD Programs", "Certification Courses"],
      hasEligibility: true,
      hasApply: true
    },
    {
      category: "VEDIC SCIENCE / PSYCHOLOGY",
      programs: ["BSc Hons. Psychology", "BSc (Clinical Psychology)", "MSc (Clinical Psychology)", "PhD Program"],
      hasEligibility: true,
      hasApply: true
    },
    {
      category: "BIO-ENGINEERING",
      programs: ["B.Tech.", "Integrated M.Tech", "MSc. (Industrial Biotechnology)", "PhD", "M.Tech.(Environmental Bioengineering)"],
      hasEligibility: true,
      hasApply: true
    }
  ];

  // ========== NEWS & EVENTS DATA ==========
  const newsEventsData = [
    {
      title: "Heritage Yatra 2026 concludes on a high note in Pune",
      description: "Heritage Yatra 2026 concludes on a high note in Pune with record participation from across the nation.",
      category: "LATEST NEWS",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Team Speedtall Racing of Jadhavar Group Clinches Top Honours at Pune",
      description: "Team Speedtall Racing of Jadhavar Group Clinches Top Honours at Pune. - The New Age",
      category: "LATEST NEWS",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Preserving Indian culture is need of time",
      description: "Preserving Indian culture is need of time - Vice Chancellor addresses international conference.",
      category: "LATEST NEWS",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // ========== HERO SLIDER DATA - 3 SLIDES ==========
  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "JADHAVAR GROUP",
      subtitle: "",
      buttonText: "VIEW MORE",
      gradient: "from-pink-600 via-purple-600 to-transparent"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "JADHAVAR GROUP HAS MORE THAN",
      subtitle: "20+ Institute",
      buttonText: "EXPLORE",
      gradient: "from-purple-600 via-pink-600 to-transparent"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Shape your future",
      subtitle: "At Jadhavar Group",
      buttonText: "LEARN MORE",
      gradient: "from-pink-600 via-purple-600 to-transparent"
    }
  ];

  return (
    <>
      {/* ========== CUSTOM FONTS - INTER & POPPINS ========== */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');
          
          * {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          }
          
          .font-heading {
            font-family: 'Inter', sans-serif;
            font-weight: 700;
            letter-spacing: -0.02em;
          }
          
          .font-heading-bold {
            font-family: 'Inter', sans-serif;
            font-weight: 800;
            letter-spacing: -0.03em;
          }
          
          .font-heading-black {
            font-family: 'Inter', sans-serif;
            font-weight: 900;
            letter-spacing: -0.04em;
          }
          
          .font-body {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            line-height: 1.6;
          }
          
          .font-body-medium {
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
          }
          
          .font-body-semibold {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
          }
          
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: white;
            opacity: 0.5;
            transition: all 0.3s ease;
          }
          
          .swiper-pagination-bullet-active {
            background: #ec4899;
            opacity: 1;
            width: 24px;
            border-radius: 20px;
            box-shadow: 0 0 15px rgba(236, 72, 153, 0.6);
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #9333ea 0%, #db2777 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          
          .hover-lift {
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          
          .hover-lift:hover {
            transform: translateY(-8px);
          }

          @media (max-width: 640px) {
            .swiper-pagination-bullet {
              width: 6px;
              height: 6px;
            }
            .swiper-pagination-bullet-active {
              width: 18px;
            }
          }
        `}
      </style>

      {/* ========== HERO SECTION - 3 SLIDER CAROUSEL ========== */}
      <section className="relative bg-gradient-to-b from-[#f3f3f7] to-white py-6 sm:py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ 
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 5
            }}
            loop={true}
            speed={1200}
            className="rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl"
          >
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[700px] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={slide.image}
                      alt={slide.subtitle || slide.title}
                      className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-10000"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-90`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex items-center justify-center md:justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-white">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="max-w-xl lg:max-w-2xl text-center md:text-left"
                    >
                      <span className="font-body-medium text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.25em] text-pink-200 mb-2 sm:mb-4 block">
                        The Best Institute Group Of The City
                      </span>
                      <h2 className="font-heading-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                        {slide.title} <br />
                        {slide.subtitle && (
                          <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black block mt-1 sm:mt-2">
                            {slide.subtitle}
                          </span>
                        )}
                      </h2>
                      
                      <motion.button 
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-6 sm:mt-8 md:mt-10 bg-gradient-to-r from-purple-900 to-purple-800 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-white font-body-semibold text-xs sm:text-sm tracking-wider hover:from-purple-800 hover:to-purple-700 transition-all duration-300 shadow-xl sm:shadow-2xl"
                      >
                        {slide.buttonText} <span className="ml-1 sm:ml-2">→</span>
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ========== PROGRAMS OFFERED ========== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0F2F5F] via-[#123E7A] to-[#0A1F3D] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <span className="text-blue-200 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold">
              Academic Excellence
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 sm:mt-4 mb-4 sm:mb-6 font-bold px-4">
              Programs Offered
            </h2>

            <div className="w-16 sm:w-20 lg:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {programsData.slice(0, 6).map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white text-[#0F2F5F] p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="w-12 sm:w-14 lg:w-16 h-1 bg-gradient-to-r from-[#0F2F5F] to-blue-500 mb-4 sm:mb-6 rounded-full"></div>

                <h3 className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 font-bold text-[#0F2F5F]">
                  {program.category}
                </h3>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {program.programs.slice(0, 5).map((p, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-gray-700">
                      <span className="text-blue-600 font-bold text-sm sm:text-base">✔</span>
                      <span className="text-xs sm:text-sm lg:text-base">{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
                  <button className="flex-1 bg-[#0F2F5F] text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:bg-[#123E7A] transition-all duration-300">
                    Check Eligibility
                  </button>

                  <Link
                    to="/contact"
                    className="flex-1 bg-yellow-500 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:bg-yellow-600 transition-all duration-300 text-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ANNOUNCEMENTS SECTION ========== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Announcement />
        </div>
      </section>

      {/* ========== PLACEMENTS SECTION ========== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0F2F5F] via-[#123E7A] to-[#0A1F3D] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/pattern.png')] bg-cover bg-center"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-14 lg:mb-16"
          >
            <span className="text-yellow-400 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold">
              Career Excellence
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 sm:mt-4 mb-4 sm:mb-6 font-bold px-4">
              Placement Highlights
            </h2>

            <div className="w-16 sm:w-20 lg:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-4 sm:mb-6"></div>

            <p className="text-blue-100 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg px-4">
              Our dedicated Training & Placement Cell ensures strong industry connections,
              internships, and outstanding career opportunities for students.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { value: "1200+", label: "Job Offers" },
              { value: "61+ LPA", label: "Highest Package" },
              { value: "600+", label: "Internship Offers" },
              { value: "500+", label: "Top Recruiters" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white text-[#0F2F5F] p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 text-center border-t-4 border-yellow-500"
              >
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
                  {stat.value}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12 lg:mt-16">
            <button className="bg-yellow-500 text-[#0F2F5F] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-yellow-400 transition duration-300 shadow-lg">
              View Recruiters
            </button>
          </div>
        </div>
      </section>

      {/* ========== NEWS & EVENTS SECTION ========== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F4F7FB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-1 lg:pr-6 text-center lg:text-left">
              <span className="text-[#0F2F5F] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold">
                Jadhavar Campus Updates
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0F2F5F] mt-3 sm:mt-4 mb-4 sm:mb-6 font-bold leading-tight">
  News & Announcements
</h3>

              <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-[#0F2F5F] to-yellow-500 rounded-full mb-6 sm:mb-8 mx-auto lg:mx-0"></div>

              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed px-4 lg:px-0">
                Welcome to the official news and announcement section of 
                <span className="font-semibold text-[#0F2F5F]"> Jadhavar Group of Institute</span>. 
                Stay informed about admissions, academic updates, seminars, conferences, 
                placement drives, examination schedules, cultural programs, and student achievements 
                happening at our educational campus in Pune.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  category: "Admission Notice",
                  title: "Admissions Open for Academic Year 2025-26",
                  description: "Applications are now open for UG and PG programs including Arts, Commerce, Science, Nursing, B.Ed., D.Ed., and MBA at Jadhavar Group of Institute."
                },
                {
                  category: "Academic Event",
                  title: "National Level Conference on NEP 2020",
                  description: "The institute successfully organized a national conference focusing on Indian Knowledge System and holistic development in teacher education."
                },
                {
                  category: "Placement Drive",
                  title: "Campus Placement 2025",
                  description: "Leading organizations participated in the placement drive, providing excellent career opportunities to our graduating students."
                },
                {
                  category: "Student Achievement",
                  title: "University Rank Holders",
                  description: "Students of Jadhavar Group of Institute secured top university ranks, reflecting our commitment to academic excellence and quality education."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-5 sm:p-6 lg:p-8 border border-gray-100 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 h-full"
                >
                  <span className="inline-block text-xs bg-[#0F2F5F] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F2F5F] mt-3 sm:mt-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-2 sm:mt-3">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY JADHAVAR GROUP ========== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0F2F5F] to-[#123E7A] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12 px-4">
            Why Choose Jadhavar Group of Institutes?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Academic Excellence",
              "State-of-the-Art Facilities",
              "Personalized Support",
              "Vibrant Campus Life"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white text-[#0F2F5F] p-5 sm:p-6 rounded-xl shadow-lg font-semibold text-sm sm:text-base"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== RESEARCH, INNOVATION & ENTREPRENEURSHIP ========== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0F2F5F] via-[#123B7A] to-[#1B4F9C] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <span className="text-yellow-400 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold">
                Academic Excellence
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-3 sm:mt-4 mb-4 sm:mb-6 font-bold leading-tight px-4 lg:px-0">
                QUALITY EDUCATION & HOLISTIC DEVELOPMENT
              </h2>

              <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-6 sm:mb-8 mx-auto lg:mx-0"></div>

              <p className="text-gray-200 leading-relaxed text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 px-4 lg:px-0">
                Jadhavar Group of Institute, Pune is committed to providing quality education 
                with strong moral values and professional excellence. Our institute focuses on 
                academic growth, skill development, industry interaction, research orientation, 
                and overall personality development to prepare students for successful careers 
                and responsible citizenship.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 px-4 lg:px-0">
                {[
                  { value: "25,000+", label: "Students Enrolled" },
                  { value: "700+", label: "Faculty & Staff" },
                  { value: "30+", label: "Programs Offered" },
                  { value: "1995", label: "Established" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-lg p-3 sm:p-4 lg:p-6 text-center rounded-xl sm:rounded-2xl shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <p className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-gray-200">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-md lg:max-w-none">
                <div className="text-center text-white">
                  <span className="text-4xl sm:text-5xl lg:text-7xl mb-4 sm:mb-6 block">🎓</span>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">
                    Why Choose Jadhavar?
                  </h3>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-white/20 p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl backdrop-blur-sm hover:bg-white/30 transition">
                      <p className="text-sm sm:text-base lg:text-lg font-semibold">
                        Experienced Faculty & Academic Mentorship
                      </p>
                    </div>

                    <div className="bg-white/20 p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl backdrop-blur-sm hover:bg-white/30 transition">
                      <p className="text-sm sm:text-base lg:text-lg font-semibold">
                        Modern Infrastructure & Learning Facilities
                      </p>
                    </div>

                    <div className="bg-white/20 p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl backdrop-blur-sm hover:bg-white/30 transition">
                      <p className="text-sm sm:text-base lg:text-lg font-semibold">
                        Strong Placement Support & Industry Interaction
                      </p>
                    </div>

                    <div className="bg-white/20 p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl backdrop-blur-sm hover:bg-white/30 transition">
                      <p className="text-sm sm:text-base lg:text-lg font-semibold">
                        Focus on Value-Based Education & Discipline
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== CAMPUS LIFE ========== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <span className="font-body-medium text-purple-600 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                Student Life
              </span>
              <h2 className="font-heading-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6">
                CAMPUS LIFE
              </h2>
              <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mb-6 sm:mb-8 mx-auto lg:mx-0"></div>
              
              <div className="space-y-4 sm:space-y-6 font-body text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg px-4 lg:px-0">
                <p>
                  We at Jadhavar Group understand that the time students spend at the campus is one of the most crucial periods of their life. Together with our faculty members and architectural team we have successfully created a thriving campus where students have a life beyond their books.
                </p>
                <p>
                  At our campus students get to learn important life values like discipline and punctuality owing to our one-of-a-kind <span className="font-body-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700">'Gurukul System'</span>.
                </p>
                <p>
                  Our campus is a bustling place where we have various clubs and committees to facilitate the creativity of young minds. Various clubs like literature club, corporate relations club, painting club, etc help students to showcase their individualistic creative flair.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-gray-100">
                <h3 className="font-heading-bold text-xl sm:text-2xl text-gray-900 mb-6 sm:mb-8 text-center">Amenities & Activities</h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { name: "AMENITIES", icon: "🏛️" },
                    { name: "CLUBS AND COMMITTEE", icon: "🎭" },
                    { name: "VISHWANATH SPORTS MEET", icon: "🏆" },
                    { name: "PERSONA FEST", icon: "🎪" },
                    { name: "CONVOCATION", icon: "🎓" }
                  ].map((amenity, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="group bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 cursor-pointer border-l-4 sm:border-l-8 border-gradient-to-r from-orange-500 to-pink-500"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">{amenity.icon}</span>
                        <span className="font-heading-bold text-gray-800 text-sm sm:text-base lg:text-lg">{amenity.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
