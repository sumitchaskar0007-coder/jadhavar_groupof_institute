import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a1e3c] text-gray-300 mt-16">
      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">

        {/* ---------- COL 1: JADHAVAR GROUP INFO ---------- */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-2">
            {/* LOGO */}
            <div className="bg-white p-2 rounded-lg shadow-md">
              <img
                src="/assets/images/logo/logo.png"
                alt="Jadhavar Group of Institutions"
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <h3 className="font-bold text-white text-lg leading-tight">
            Jadhavar Group of Institutions
          </h3>
          
          <p className="text-sm text-gray-400 leading-relaxed">
            A Leap Towards World Class Education. Excellence in Education, Research, and Innovation since 1990.
          </p>

          <div className="space-y-2 pt-2">
            <p className="text-sm flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-yellow-500 flex-shrink-0" />
              <span>Narhe, Pune – Maharashtra, India - 411041</span>
            </p>

            <p className="text-sm flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-500 flex-shrink-0" />
              <span>+91 9823872816 | +91 9822018921</span>
            </p>

            <p className="text-sm flex items-center gap-3">
              <FaEnvelope className="text-yellow-500 flex-shrink-0" />
              <span>lutjfoundationa@gmail.com</span>
            </p>

            {/* <p className="text-sm flex items-center gap-3">
              <FaGlobe className="text-yellow-500 flex-shrink-0" />
              <span>www.jadhavargroup.edu.in</span>
            </p> */}
          </div>
        </div>

        {/* ---------- COL 2: QUICK LINKS ---------- */}
        <div>
          <h4 className="text-white font-bold mb-4 text-lg border-b border-yellow-500/30 pb-2 inline-block">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-yellow-500 transition flex items-center gap-2">
                <span className="text-yellow-500">›</span> About Us
              </Link>
            </li>
            <li>
              <Link to="/academics" className="hover:text-yellow-500 transition flex items-center gap-2">
                <span className="text-yellow-500">›</span> Academics
              </Link>
            </li>
            <li>
              <Link to="/admissions" className="hover:text-yellow-500 transition flex items-center gap-2">
                <span className="text-yellow-500">›</span> Admissions
              </Link>
            </li>
            <li>
              <Link to="/programs" className="hover:text-yellow-500 transition flex items-center gap-2">
                <span className="text-yellow-500">›</span> Programs
              </Link>
            </li>
            <li>
              <Link to="/research" className="hover:text-yellow-500 transition flex items-center gap-2">
                <span className="text-yellow-500">›</span> Research
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-500 transition flex items-center gap-2">
                <span className="text-yellow-500">›</span> Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* ---------- COL 3: OUR INSTITUTES ---------- */}
        <div>
          <h4 className="text-white font-bold mb-4 text-lg border-b border-yellow-500/30 pb-2 inline-block">
            Our Institutes
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a 
                href="https://www.sjimt.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition flex items-center gap-2"
              >
                <span className="text-yellow-500">•</span> Dr. Sudhakarrao Jadhavar Institute of Management & Technology
              </a>
            </li>
            <li>
              <a 
                href="https://www.jadhavarcollegeoflaw.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition flex items-center gap-2"
              >
                <span className="text-yellow-500">•</span> Jadhavar College of Law
              </a>
            </li>
            <li>
              <a 
                href="https://www.jadhavarfoundations.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition flex items-center gap-2"
              >
                <span className="text-yellow-500">•</span> Institute of Nursing
              </a>
            </li>
            <li>
              <a 
                href="https://jadhavarinternationalschool.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition flex items-center gap-2"
              >
                <span className="text-yellow-500">•</span> Jadhavar International School
              </a>
            </li>
            <li>
              <a 
                href="https://www.jadhavarjrcollege.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition flex items-center gap-2"
              >
                <span className="text-yellow-500">•</span> Arts, Commerce & Science College
              </a>
            </li>
            <li>
              <Link to="/institutes" className="hover:text-yellow-500 transition flex items-center gap-2 text-yellow-500 font-medium">
                View All Institutes →
              </Link>
            </li>
          </ul>
        </div>

        {/* ---------- COL 4: CONNECT WITH US ---------- */}
        <div>
          <h4 className="text-white font-bold mb-4 text-lg border-b border-yellow-500/30 pb-2 inline-block">
            Connect With Us
          </h4>

          {/* Social Icons */}
          <div className="flex gap-3 mb-6 flex-wrap">
            <a
              href="https://www.facebook.com/jadhavargroupofinstitute"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-[#1e3a5f] hover:bg-yellow-500 flex items-center justify-center transition transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-white" />
            </a>

            <a
              href="https://www.instagram.com/jadhavar_group_of_institute/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-[#1e3a5f] hover:bg-yellow-500 flex items-center justify-center transition transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram className="text-white" />
            </a>

            <a
              href="https://www.linkedin.com/company/jadhavar-group-of-institutes"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-[#1e3a5f] hover:bg-yellow-500 flex items-center justify-center transition transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-white" />
            </a>

            <a
              href="https://x.com/JadhavarGroup"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-[#1e3a5f] hover:bg-yellow-500 flex items-center justify-center transition transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter className="text-white" />
            </a>

            <a
              href="https://www.youtube.com/@jadhavargroupofinstitutespune"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-[#1e3a5f] hover:bg-yellow-500 flex items-center justify-center transition transform hover:scale-110"
              aria-label="YouTube"
            >
              <FaYoutube className="text-white" />
            </a>
          </div>

          {/* Subscribe Form */}
          <div className="mt-4">
            <h5 className="text-white font-semibold mb-3 text-sm">Subscribe to Newsletter</h5>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full rounded-lg px-4 py-3 text-sm text-gray-900 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="w-full bg-yellow-500 text-[#0a1e3c] font-bold py-3 rounded-lg hover:bg-yellow-400 transition transform hover:scale-105">
                Subscribe Now
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-3">
              Get latest updates about events, admissions & research
            </p>
          </div>
        </div>
      </div>

      {/* ================= MIDDLE FOOTER - ACCREDITATIONS ================= */}
      <div className="border-t border-[#1e3a5f] bg-[#0a1e3c]/80">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-gray-400">
            <span className="text-white font-medium">Accreditations:</span>
            <span>★ NAAC Accredited</span>
            <span>★ AICTE Approved</span>
            <span>★ Affiliated to SPPU, Pune</span>
            <span>★ ISO 9001:2015 Certified</span>
            <span>★ NIRF Ranked</span>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="border-t border-[#1e3a5f] bg-[#0a1e3c]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <p>
            © {new Date().getFullYear()} Jadhavar Group of Institutions. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-yellow-500 transition">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-yellow-500 transition">
              Terms of Use
            </Link>
            <span>|</span>
            <Link to="/disclaimer" className="hover:text-yellow-500 transition">
              Disclaimer
            </Link>
          </div>

          <p className="text-gray-500">
            Designed & Developed by{" "}
            <a 
              href="https://www.trijja.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-500 hover:underline"
            >
              Trijja Media & Works, Pune
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
