import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Search,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { udanBooks } from "../data/udanBooks";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);

  // ========== JADHAVAR GROUP DOMAINS FROM PDF ==========
  const jadhavarDomains = [
    {
      category: "Nursing & Paramedical",
      colleges: [
        {
          name: "Late Uddhavrao Tulshiram Jadhavar Foundation's Institute of Nursing Pune",
          url: "https://www.jadhavarfoundations.org",
        },
        {
          name: "Late Uddhavrao Tulshiram Jadhavar Foundation's College of Paramedical Pune",
          url: "https://www.jadhavarparamedicalcollege.com",
        },
      ],
    },
    {
      category: "Law Colleges",
      colleges: [
        {
          name: "Jadhavar College of Law Pune",
          url: "https://www.jadhavarcollegeoflaw.com/",
        },
        {
          name: "Adv Shardulrao Sudhakarrao Jadhavar College of Law Pune",
          url: "https://www.shardulraojadhavarcollegeoflaw.com",
        },
      ],
    },
    {
      category: "Arts, Commerce & Science",
      colleges: [
        {
          name: "Dr. Sudhakarrao Jadhavar Arts, Commerce and Science College Pune",
          url: "https://www.jadhavarjrcollege.com/",
        },
      ],
    },
    {
      category: "Management & Technology",
      colleges: [
        {
          name: "Dr. Sudhakarrao Jadhavar Institute of Management and Technology Pune",
          url: "https://www.sjimt.in",
        },
        {
          name: "Aditya Institute of Management Pune",
          url: "https://www.adityainstitutemanagement.com",
        },
        {
          name: "Aditya Management Institute - PGDM",
          url: "https://www.adityainstitutepgdm.com",
        },
      ],
    },
    {
      category: "Schools & Junior Colleges",
      colleges: [
        {
          name: "Jadhavar English Medium School and Junior College Pune",
          url: "https://www.jadhavarenglishschool.com",
        },
        {
          name: "Jadhavar International School and Junior College Pune",
          url: "https://jadhavarinternationalschool.com/",
        },
        {
          name: "Paradise English Medium School and Junior College Pune",
          url: "https://www.jadhavarjrcollege.com",
        },
        {
          name: "Dr. Sudhakarrao Jadhavar Primary and Secondary School Pune",
          url: "https://www.jadhavarsemienglish.in",
        },
        {
          name: "Sanskruti Techno School",
          url: "https://www.sanskrutitechnoschool.com",
        },
        {
          name: "Paradise English Medium school Pune",
          url: "https://www.paradiseems.co.in",
        },
      ],
    },
    {
      category: "Other Institutions",
      colleges: [
        {
          name: "Jai Ganesh B.Ed College Pune",
          url: "https://www.jgefs.org",
        },
        {
          name: "Jadhavar Yuva Sansad",
          url: "https://www.jadhavaryuvasansad.com",
        },
        {
          name: "Jadhavar Group of Institutes",
          url: "https://www.jadhavargroupofinstitute.in",
        },
      ],
    },
  ];

  // ✅ ACADEMICS Mega Menu Data - JADHAVAR COLLEGE DOMAINS
  const academicsMegaMenu = jadhavarDomains.map((domain) => ({
    title: domain.category,
    links: domain.colleges.map((college) => college.name),
    urls: domain.colleges.map((college) => college.url),
  }));

  // ✅ ABOUT US Dropdown Menu Data
  const aboutUsDropdown = [
    {
      title: "About Jadhavar Group",
      path: "/about",
      description: "Our history, mission, and vision",
    },
    {
      title: "President",
      path: "/about/president",
      description: "Prin. Dr. Sudhakarrao Jadhavar",
    },
    {
      title: "Vice President",
      path: "/about/vicepresident",
      description: "Adv. Shardulrao Sudhakarrao Jadhavar",
    },
  ];

  // ✅ UDAN Mega Menu Data
  const udanItems = Object.keys(udanBooks).map((id) => ({
    label: `UDAN ${id}`,
    path: `/udan/${id}`,
  }));

  // EXACT main navigation - ADMISSIONS now has NO dropdown
  // UPDATED MAIN NAVIGATION
  const mainMenu = [
    { name: "HOME", path: "/", hasDropdown: false },
    { name: "ABOUT US", path: "/about", hasDropdown: true },
    { name: "ACADEMICS", path: "/academics", hasDropdown: true },
    { name: "PROGRAMS", path: "/programs", hasDropdown: false },
    { name: "ADMISSIONS", path: "/admissions", hasDropdown: false },
    { name: "RESEARCH", path: "/research", hasDropdown: false },
    { name: "BLOG", path: "/blog", hasDropdown: false },
    { name: "CAREER", path: "/careers", hasDropdown: false },
    { name: "NOTICE", path: "/notice", hasDropdown: false },
    { name: "GALLERY", path: "/gallery", hasDropdown: false },
  ];

  // ✅ Action Buttons - Professional Blue Theme
  const actionButtons = [
    { label: "UDAN", path: "/udan", hasDropdown: true },
    { label: "Life @ Campus", path: "/life-campus" },
    { label: "Contact Us", path: "/contact" },
  ];

  // Mobile accordion state
  const [mobileAccordion, setMobileAccordion] = useState({
    about: false,
    academics: false,
    udan: false
  });

  const toggleMobileAccordion = (section) => {
    setMobileAccordion(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <header className="w-full sticky top-0 z-50 font-sans">
      {/* ================== TOP DARK BLUE HEADER - PROFESSIONAL NAVY ================== */}
      <div className="bg-[#0a1e3c] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 py-3 sm:py-4">
          {/* Main Header Row */}
          <div className="flex flex-row justify-between items-center gap-2 sm:gap-4">
            {/* Logo + University Name - JADHAVAR GROUP */}
            <Link
              to="/"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setActiveMegaMenu(null);
              }}
              className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-1 lg:flex-none group"
            >
              {/* Logo Box */}
              <div className="flex items-center gap-2 sm:gap-3 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white border border-gray-200 rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                  <img
                    src="/assets/images/logo/logo.png"
                    alt="Jadhavar Group Logo"
                    className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="leading-tight pr-8 lg:pr-0">
                <h1 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl font-extrabold tracking-tight text-white group-hover:text-yellow-500 transition line-clamp-2">
                  JADHAVAR GROUP OF INSTITUTIONS
                </h1>
                <p className="text-[10px] xs:text-xs text-gray-300 font-medium mt-0.5 tracking-wide hidden xs:block">
                  A Leap Towards World Class Education
                </p>
              </div>
            </Link>

            {/* Desktop Right Section - Hidden on mobile */}
            <div className="hidden lg:flex flex-col items-end gap-3">
              {/* Action Buttons - Professional Blue Theme */}
              <div className="flex items-center gap-3">
                {actionButtons.map((btn) => {
                  // UDAN button with dropdown
                  if (btn.hasDropdown) {
                    return (
                      <div
                        key={btn.label}
                        className="relative"
                        onMouseEnter={() => {
                          setActiveMegaMenu("UDAN");
                        }}
                        onMouseLeave={() => setActiveMegaMenu(null)}
                      >
                        <Link
                          to={btn.path}
                          className="px-4 py-1.5 bg-[#1e3a5f] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#2a4a6e] transition rounded-sm flex items-center gap-1"
                        >
                          {btn.label}
                          <ChevronDown
                            size={14}
                            className={`transition ${activeMegaMenu === "UDAN" ? "rotate-180" : ""
                              }`}
                          />
                        </Link>

                        {/* PROFESSIONAL BLUE MEGA MENU FOR UDAN */}
                        {activeMegaMenu === "UDAN" && (
                          <div className="absolute right-0 top-full w-[300px] bg-[#1e3a5f] text-white shadow-2xl p-6 z-50 rounded-b-lg border-t-4 border-yellow-500">
                            <div className="grid grid-cols-1 gap-2">
                              <h3 className="text-yellow-500 font-semibold mb-2 border-b border-dashed border-white/30 pb-2 text-sm uppercase tracking-wider">
                                UDAN Book Series
                              </h3>
                              <ul className="space-y-2">
                                {udanItems.map((udan) => (
                                  <li key={udan.label}>
                                    <Link
                                      to={udan.path}
                                      className="text-sm text-white/90 hover:text-yellow-500 transition block py-1 hover:underline"
                                      onClick={() => setActiveMegaMenu(null)}
                                    >
                                      • {udan.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }
                  // Regular buttons without dropdown
                  return (
                    <Link
                      key={btn.label}
                      to={btn.path}
                      className="px-4 py-1.5 bg-[#1e3a5f] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#2a4a6e] transition rounded-sm"
                    >
                      {btn.label}
                    </Link>
                  );
                })}
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-1 text-gray-400">
                <a
                  href="https://www.facebook.com/jadhavargroupofinstitute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://www.instagram.com/jadhavar_group_of_institute/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/company/jadhavar-group-of-institutes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://x.com/JadhavarGroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@jadhavargroupofinstitutespune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition"
                >
                  <Youtube size={16} />
                </a>
                <span className="text-gray-600 mx-1">|</span>
                <Link to="/search" className="hover:text-yellow-500 transition">
                  <Search size={16} />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setActiveMegaMenu(null);
              }}
              className="lg:hidden text-white p-1.5 sm:p-2 hover:bg-[#1e3a5f] rounded-lg transition z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} sm:size={24} /> : <Menu size={20} sm:size={24} />}
            </button>
          </div>
        </div>

        {/* ================== DESKTOP MAIN NAVIGATION - PROFESSIONAL BLUE ================== */}
        <div className="border-t border-[#1e3a5f] bg-[#0a1e3c] hidden lg:block">
          <div className="max-w-[1400px] mx-auto px-6 relative">
            <nav className="flex items-center justify-start lg:justify-center">
              {mainMenu.map((item) => {
                // ABOUT US Dropdown Menu
                if (item.name === "ABOUT US" && item.hasDropdown) {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => {
                        setActiveMegaMenu("ABOUT_US");
                      }}
                      onMouseLeave={() => setActiveMegaMenu(null)}
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `px-5 lg:px-7 py-3.5 text-xs lg:text-sm font-semibold text-white border-r border-[#1e3a5f] hover:bg-[#1e3a5f] transition tracking-wide flex items-center gap-1 ${isActive ? "bg-[#1e3a5f]" : ""
                          }`
                        }
                      >
                        {item.name}
                        <ChevronDown
                          size={14}
                          className={`transition ${activeMegaMenu === "ABOUT_US" ? "rotate-180" : ""
                            }`}
                        />
                      </NavLink>

                      {/* PROFESSIONAL BLUE DROPDOWN FOR ABOUT US */}
                      {activeMegaMenu === "ABOUT_US" && (
                        <div className="absolute left-0 top-full w-[350px] bg-[#1e3a5f] text-white shadow-2xl p-6 z-50 rounded-b-lg border-t-4 border-yellow-500">
                          <div className="space-y-4">
                            {aboutUsDropdown.map((item, idx) => (
                              <Link
                                key={idx}
                                to={item.path}
                                className="block group/link"
                                onClick={() => setActiveMegaMenu(null)}
                              >
                                <div className="p-3 hover:bg-[#2a4a6e] rounded-md transition">
                                  <h3 className="text-yellow-500 font-semibold text-sm uppercase tracking-wider group-hover/link:text-yellow-400">
                                    {item.title}
                                  </h3>
                                  {item.description && (
                                    <p className="text-xs text-gray-300 mt-1 group-hover/link:text-gray-200">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                // ACADEMICS Mega Menu
                if (item.name === "ACADEMICS" && item.hasDropdown) {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => {
                        setActiveMegaMenu("ACADEMICS");
                      }}
                      onMouseLeave={() => setActiveMegaMenu(null)}
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `px-5 lg:px-7 py-3.5 text-xs lg:text-sm font-semibold text-white border-r border-[#1e3a5f] hover:bg-[#1e3a5f] transition tracking-wide flex items-center gap-1 ${isActive ? "bg-[#1e3a5f]" : ""
                          }`
                        }
                      >
                        {item.name}
                        <ChevronDown
                          size={14}
                          className={`transition ${activeMegaMenu === "ACADEMICS" ? "rotate-180" : ""
                            }`}
                        />
                      </NavLink>

                      {/* PROFESSIONAL BLUE MEGA MENU FOR ACADEMICS */}
                      {activeMegaMenu === "ACADEMICS" && (
                        <div className="absolute left-0 top-full w-[900px] bg-[#1e3a5f] text-white shadow-2xl p-8 z-50 rounded-b-lg border-t-4 border-yellow-500">
                          <div className="grid grid-cols-3 gap-6">
                            {academicsMegaMenu.map((category, idx) => (
                              <div key={idx} className="space-y-2">
                                <h3 className="text-yellow-500 font-semibold mb-3 border-b border-dashed border-white/30 pb-2 text-sm uppercase tracking-wider">
                                  {category.title}
                                </h3>
                                <ul className="space-y-2">
                                  {category.links.map((collegeName, i) => {
                                    const url = category.urls?.[i] || "#";
                                    return (
                                      <li key={i}>
                                        <a
                                          href={url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-sm text-white/90 hover:text-yellow-500 transition block py-1 hover:underline"
                                          onClick={() => setActiveMegaMenu(null)}
                                        >
                                          • {collegeName}
                                        </a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                // ADMISSIONS - NO DROPDOWN (just a simple link)
                if (item.name === "ADMISSIONS") {
                  return (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className={({ isActive }) =>
                        `px-5 lg:px-7 py-3.5 text-xs lg:text-sm font-semibold text-white border-r border-[#1e3a5f] hover:bg-[#1e3a5f] transition tracking-wide ${isActive ? "bg-[#1e3a5f]" : ""
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  );
                }

                // HOME, PROGRAMS, RESEARCH - NO DROPDOWNS
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-5 lg:px-7 py-3.5 text-xs lg:text-sm font-semibold text-white border-r border-[#1e3a5f] hover:bg-[#1e3a5f] transition tracking-wide ${isActive ? "bg-[#1e3a5f]" : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* ================== MOBILE MENU OVERLAY - PROFESSIONAL BLUE ================== */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] sm:top-[88px] bg-[#0a1e3c] border-t border-[#1e3a5f] shadow-xl overflow-y-auto max-h-[calc(100vh-72px)] sm:max-h-[calc(100vh-88px)] z-50">
          <div className="px-3 sm:px-4 py-4 sm:py-6 space-y-4 sm:space-y-6">
            {/* Action Buttons - Mobile */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {actionButtons.map((btn) => (
                <Link
                  key={btn.label}
                  to={btn.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-2 py-2 sm:py-2.5 bg-[#1e3a5f] text-white text-[10px] sm:text-xs font-medium uppercase tracking-wider hover:bg-[#2a4a6e] transition rounded-sm text-center"
                >
                  {btn.label}
                </Link>
              ))}
            </div>

            {/* UDAN Books Section - Mobile Accordion */}
            <div className="space-y-2 bg-[#1e3a5f] rounded-lg overflow-hidden">
              <button
                onClick={() => toggleMobileAccordion('udan')}
                className="w-full px-3 sm:px-4 py-3 flex items-center justify-between text-white hover:bg-[#2a4a6e] transition"
              >
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">UDAN Book Series</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${mobileAccordion.udan ? 'rotate-180' : ''}`}
                />
              </button>

              {mobileAccordion.udan && (
                <div className="px-3 sm:px-4 pb-4">
                  <div className="grid grid-cols-2 gap-2">
                    {udanItems.map((udan) => (
                      <Link
                        key={udan.label}
                        to={udan.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-[10px] sm:text-xs text-white/90 bg-[#2a4a6e] px-2 py-2 rounded-md hover:bg-[#3a5a7e] text-center font-medium transition"
                      >
                        {udan.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Main Navigation - Mobile Accordion Style */}
            <div className="space-y-2">
              <p className="text-gray-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-2">
                Main Menu
              </p>

              {mainMenu.map((item) => (
                <div key={item.name} className="bg-[#1e3a5f] rounded-lg overflow-hidden">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileAccordion(item.name === "ABOUT US" ? 'about' : 'academics')}
                        className="w-full px-3 sm:px-4 py-3 flex items-center justify-between text-white hover:bg-[#2a4a6e] transition"
                      >
                        <span className="text-xs sm:text-sm font-bold">{item.name}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${mobileAccordion[item.name === "ABOUT US" ? 'about' : 'academics'] ? 'rotate-180' : ''
                            }`}
                        />
                      </button>

                      {/* Mobile Dropdown Content - ABOUT US */}
                      {item.name === "ABOUT US" && mobileAccordion.about && (
                        <div className="px-3 sm:px-4 pb-4 space-y-3">
                          {aboutUsDropdown.map((aboutItem, idx) => (
                            <Link
                              key={idx}
                              to={aboutItem.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block p-2 hover:bg-[#2a4a6e] rounded-md transition"
                            >
                              <h4 className="text-[10px] sm:text-xs font-semibold text-yellow-500 uppercase tracking-wider">
                                {aboutItem.title}
                              </h4>
                              {aboutItem.description && (
                                <p className="text-[10px] sm:text-xs text-gray-300 mt-0.5">
                                  {aboutItem.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* Mobile Mega Menu Content - ACADEMICS */}
                      {item.name === "ACADEMICS" && mobileAccordion.academics && (
                        <div className="px-3 sm:px-4 pb-4 max-h-[60vh] overflow-y-auto">
                          {academicsMegaMenu.map((category, idx) => (
                            <div key={idx} className="mb-4 last:mb-0">
                              <h4 className="text-[10px] sm:text-xs font-semibold text-yellow-500 uppercase tracking-wider mb-2">
                                {category.title}
                              </h4>
                              <ul className="space-y-1.5">
                                {category.links.map((collegeName, i) => {
                                  const url = category.urls?.[i] || "#";
                                  return (
                                    <li key={i}>
                                      <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-[10px] sm:text-xs text-gray-300 hover:text-yellow-500 block py-1 hover:underline"
                                      >
                                        • {collegeName.length > 40 ? collegeName.substring(0, 40) + '...' : collegeName}
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-3 sm:px-4 py-3 text-xs sm:text-sm font-bold text-white hover:bg-[#2a4a6e] transition ${isActive ? "bg-[#2a4a6e] border-l-4 border-yellow-500" : ""
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>

            {/* Social Icons - Mobile */}
            <div className="flex items-center gap-3 sm:gap-4 pt-2 text-gray-400 border-t border-[#1e3a5f]">
              <a
                href="https://www.facebook.com/jadhavargroupofinstitute"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                <Facebook size={16} sm:size={18} />
              </a>
              <a
                href="https://www.instagram.com/jadhavar_group_of_institute/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                <Instagram size={16} sm:size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/jadhavar-group-of-institutes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                <Linkedin size={16} sm:size={18} />
              </a>
              <a
                href="https://x.com/JadhavarGroup"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                <Twitter size={16} sm:size={18} />
              </a>
              <a
                href="https://www.youtube.com/@jadhavargroupofinstitutespune"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                <Youtube size={16} sm:size={18} />
              </a>
              <span className="text-gray-600">|</span>
              <Link to="/search" className="hover:text-yellow-500 transition">
                <Search size={16} sm:size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
