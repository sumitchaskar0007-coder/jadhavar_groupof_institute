import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Users, Mail, Phone, Award, Calendar } from "lucide-react";

// Eminent Advocates Section Component
function EminentAdvocates() {
  const [selectedAdvocate, setSelectedAdvocate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const advocates = [
    {
      name: "Adv. Vipul Vijay Dushing",
      specialization: "Civil Law & Property",
      experience: "12+ years",
      rating: 4.9,
      cases: "450+",
      education: "LL.M. (Civil Law)",
      barCouncil: "Maharashtra & Goa Bar Council",
      languages: ["English", "Hindi", "Marathi"],
      bio: "Specialized in civil litigation with extensive experience in property disputes, contract law, and civil appeals. Known for meticulous case preparation and client communication.",
      contact: {
        email: "vipul.dushing@example.com",
        phone: "+91-9876543210"
      },
      achievements: [
        "Best Civil Lawyer Award 2022",
        "Senior Panel Advocate - District Court",
        "Guest Faculty at Law Colleges"
      ]
    },
    {
      name: "Adv. Jawhartal Barmeda",
      specialization: "Criminal Law",
      experience: "15+ years",
      rating: 4.8,
      cases: "600+",
      education: "LL.M. (Criminal Law)",
      barCouncil: "Supreme Court of India",
      languages: ["English", "Hindi", "Marathi", "Gujarati"],
      bio: "Renowned criminal defense attorney with successful track record in high-profile criminal cases. Expertise in bail applications, trials, and criminal appeals.",
      contact: {
        email: "jawhartal.barmeda@example.com",
        phone: "+91-9876543211"
      },
      achievements: [
        "Criminal Law Excellence Award 2021",
        "Panel Advocate for Legal Aid",
        "Criminal Law Reform Committee Member"
      ]
    },
    {
      name: "Adv. Harshad Nimbalkar",
      specialization: "Corporate Law",
      experience: "10+ years",
      rating: 4.7,
      cases: "300+",
      education: "LL.M. (Corporate Law)",
      barCouncil: "Maharashtra & Goa Bar Council",
      languages: ["English", "Hindi", "Marathi"],
      bio: "Corporate law specialist focusing on business contracts, mergers & acquisitions, and corporate compliance. Provides strategic legal advice to startups and established businesses.",
      contact: {
        email: "harshad.nimbalkar@example.com",
        phone: "+91-9876543212"
      },
      achievements: [
        "Corporate Law Advisor of the Year 2023",
        "Startup Legal Mentor",
        "Business Law Journal Contributor"
      ]
    },
    {
      name: "Adv. Akash Dalvi",
      specialization: "Family Law",
      experience: "8+ years",
      rating: 4.9,
      cases: "250+",
      education: "LL.M. (Family Law)",
      barCouncil: "Maharashtra & Goa Bar Council",
      languages: ["English", "Hindi", "Marathi"],
      bio: "Compassionate family law attorney specializing in divorce, child custody, and matrimonial disputes. Known for empathetic approach and effective dispute resolution.",
      contact: {
        email: "akash.dalvi@example.com",
        phone: "+91-9876543213"
      },
      achievements: [
        "Family Law Mediation Expert",
        "Child Rights Activist",
        "Family Court Panel Advocate"
      ]
    },
    {
      name: "Adv. Sachin Patil",
      specialization: "Constitutional Law",
      experience: "14+ years",
      rating: 4.8,
      cases: "400+",
      education: "LL.M. (Constitutional Law)",
      barCouncil: "Supreme Court of India",
      languages: ["English", "Hindi", "Marathi"],
      bio: "Constitutional law expert with extensive experience in public interest litigation and fundamental rights cases. Regular appearances in High Court and Supreme Court.",
      contact: {
        email: "sachin.patil@example.com",
        phone: "+91-9876543214"
      },
      achievements: [
        "Public Interest Litigation Award",
        "Constitutional Law Researcher",
        "Human Rights Commission Panel"
      ]
    },
    {
      name: "Adv. Nandkumar Patil",
      specialization: "Labor Law",
      experience: "11+ years",
      rating: 4.6,
      cases: "350+",
      education: "LL.M. (Labor Law)",
      barCouncil: "Maharashtra & Goa Bar Council",
      languages: ["English", "Hindi", "Marathi"],
      bio: "Labor law specialist representing both employees and employers in industrial disputes, wage claims, and labor compliance matters.",
      contact: {
        email: "nandkumar.patil@example.com",
        phone: "+91-9876543215"
      },
      achievements: [
        "Labor Law Reform Committee",
        "Industrial Tribunal Advocate",
        "Workers' Rights Activist"
      ]
    },
    {
      name: "Adv. Asim Sarode",
      specialization: "Human Rights",
      experience: "13+ years",
      rating: 4.9,
      cases: "500+",
      education: "LL.M. (Human Rights)",
      barCouncil: "Supreme Court of India",
      languages: ["English", "Hindi", "Marathi", "Urdu"],
      bio: "Dedicated human rights lawyer focusing on marginalized communities, prison reforms, and social justice litigation. Extensive work with NGOs and civil society organizations.",
      contact: {
        email: "asim.sarode@example.com",
        phone: "+91-9876543216"
      },
      achievements: [
        "Human Rights Defender Award",
        "UN Human Rights Fellow",
        "Social Justice Advocacy Leader"
      ]
    },
    {
      name: "Adv. Rajendra Umap",
      specialization: "Taxation Law",
      experience: "16+ years",
      rating: 4.7,
      cases: "550+",
      education: "LL.M. (Taxation Law)",
      barCouncil: "Maharashtra & Goa Bar Council",
      languages: ["English", "Hindi", "Marathi"],
      bio: "Taxation law expert with deep knowledge of direct and indirect taxes. Represents clients in tax appeals, assessments, and litigation before various tax authorities.",
      contact: {
        email: "rajendra.umap@example.com",
        phone: "+91-9876543217"
      },
      achievements: [
        "Tax Law Expert Certification",
        "ITAT Panel Advocate",
        "Tax Consultation Authority"
      ]
    },
    {
      name: "Adv. Abhinav Jadhavar",
      specialization: "Intellectual Property",
      experience: "9+ years",
      rating: 4.8,
      cases: "280+",
      education: "LL.M. (Intellectual Property)",
      barCouncil: "Maharashtra & Goa Bar Council",
      languages: ["English", "Hindi", "Marathi"],
      bio: "IP law specialist handling trademarks, copyrights, patents, and design registrations. Provides comprehensive IP protection strategies for businesses and creators.",
      contact: {
        email: "abhinav.jadhavar@example.com",
        phone: "+91-9876543218"
      },
      achievements: [
        "IP Law Innovation Award",
        "Patent Office Registered Agent",
        "Startup IP Advisor"
      ]
    },
    {
      name: "Adv. Tejas Dande",
      specialization: "Cyber Law",
      experience: "7+ years",
      rating: 4.6,
      cases: "200+",
      education: "LL.M. (Cyber Law)",
      barCouncil: "Maharashtra & Goa Bar Council",
      languages: ["English", "Hindi", "Marathi"],
      bio: "Cyber law pioneer focusing on digital rights, data protection, and technology-related legal issues. Represents clients in cybercrime cases and digital compliance matters.",
      contact: {
        email: "tejas.dande@example.com",
        phone: "+91-9876543219"
      },
      achievements: [
        "Cyber Law Excellence Award",
        "Data Protection Consultant",
        "Technology Law Committee Member"
      ]
    },
  ];

  const handleViewProfile = (advocate) => {
    setSelectedAdvocate(advocate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedAdvocate(null), 300);
  };

  return (
    <>
      {/* Eminent Advocates Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          offscreen: { y: 30, opacity: 0, scale: 0.95 },
          onscreen: { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            transition: { 
              type: "spring", 
              bounce: 0.4, 
              duration: 0.8 
            } 
          },
        }}
        className="max-w-7xl mx-auto mb-16 px-4"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-lg font-medium mb-4"
          >
            <Award className="h-5 w-5" />
            Our Legal Experts
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Panel of Eminent Advocates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Supported by distinguished advocates from District Courts and High Court who provide 
            guidance, representation and mentorship to students.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {advocates.map((advocate, index) => (
            <motion.div
              key={advocate.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 } 
              }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              onClick={() => handleViewProfile(advocate)}
            >
              <div className="text-center">
                {/* Advocate Avatar */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl group-hover:shadow-lg transition-all"
                >
                  {advocate.name.split(' ')[1][0]}
                </motion.div>
                
                {/* Name */}
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-primary transition-colors">
                  {advocate.name}
                </h3>
                
                {/* Specialization */}
                <p className="text-primary font-semibold text-sm mb-3 px-3 py-1 bg-primary/10 rounded-full inline-block">
                  {advocate.specialization}
                </p>
                
                {/* Experience */}
                <div className="flex items-center justify-center gap-2 text-gray-600 text-sm mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{advocate.experience} Experience</span>
                </div>
                
                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(advocate.rating) 
                          ? "text-yellow-400 fill-current" 
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">({advocate.rating})</span>
                </div>
                
                {/* Cases Handled */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="text-2xl font-bold text-primary">{advocate.cases}</div>
                  <div className="text-xs text-gray-600">Cases Handled</div>
                </div>
                
                {/* View Profile Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <Users className="h-4 w-4" />
                  View Profile
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isModalOpen && selectedAdvocate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-t-3xl">
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-3xl">
                    {selectedAdvocate.name.split(' ')[1][0]}
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-2">{selectedAdvocate.name}</h2>
                    <p className="text-xl text-blue-100 mb-3">{selectedAdvocate.specialization}</p>
                    
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                        <Calendar className="h-4 w-4" />
                        <span>{selectedAdvocate.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                        <Users className="h-4 w-4" />
                        <span>{selectedAdvocate.cases} Cases</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(selectedAdvocate.rating) 
                                ? "text-yellow-300 fill-current" 
                                : "text-white/60"
                            }`}
                          />
                        ))}
                        <span>({selectedAdvocate.rating})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Bio */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Bio</h3>
                      <p className="text-gray-700 leading-relaxed">{selectedAdvocate.bio}</p>
                    </div>

                    {/* Education & Bar Council */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Education</h4>
                        <p className="text-gray-700">{selectedAdvocate.education}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Bar Council</h4>
                        <p className="text-gray-700">{selectedAdvocate.barCouncil}</p>
                      </div>
                    </div>

                    {/* Languages */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedAdvocate.languages.map((language, index) => (
                          <span
                            key={index}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Contact Information */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-primary" />
                          <a 
                            href={`mailto:${selectedAdvocate.contact.email}`}
                            className="text-gray-700 hover:text-primary transition-colors"
                          >
                            {selectedAdvocate.contact.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-primary" />
                          <a 
                            href={`tel:${selectedAdvocate.contact.phone}`}
                            className="text-gray-700 hover:text-primary transition-colors"
                          >
                            {selectedAdvocate.contact.phone}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Notable Achievements</h3>
                      <ul className="space-y-2">
                        {selectedAdvocate.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-700">
                            <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-200">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-primary text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-3"
                  >
                    <Phone className="h-5 w-5" />
                    Schedule Consultation
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 border-2 border-primary text-primary py-4 px-6 rounded-xl font-semibold hover:bg-primary/5 transition-all flex items-center justify-center gap-3"
                  >
                    <Mail className="h-5 w-5" />
                    Send Message
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default EminentAdvocates;