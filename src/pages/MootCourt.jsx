import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { 
  Award, 
  Trophy, 
  Users, 
  Microscope, 
  Target, 
  Calendar,
  Star,
  FileText,
  Speaker,
  Search,
  GraduationCap
} from "lucide-react";

const MootCourt = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        bounce: 0.4, 
        duration: 0.8 
      } 
    }
  };

  const objectives = [
    {
      icon: <Microscope className="h-6 w-6" />,
      title: "Legal Reasoning",
      description: "Enhance analytical and legal reasoning abilities through practical case analysis"
    },
    {
      icon: <Speaker className="h-6 w-6" />,
      title: "Argumentation Skills",
      description: "Improve public speaking and persuasive argumentation techniques"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Court Experience",
      description: "Provide real-time simulated court environment experience"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Teamwork & Leadership",
      description: "Encourage collaboration, teamwork and leadership qualities"
    }
  ];

  const awards = [
    {
      prize: "₹35,000 + Trophy",
      title: "Winning Team",
      icon: <Trophy className="h-8 w-8" />,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      prize: "₹20,000 + Trophy",
      title: "Runners-Up",
      icon: <Award className="h-8 w-8" />,
      gradient: "from-gray-500 to-blue-500"
    },
    {
      prize: "₹15,000 + Trophy",
      title: "Best Memorial",
      icon: <FileText className="h-8 w-8" />,
      gradient: "from-green-500 to-teal-500"
    },
    {
      prize: "₹10,000 + Trophy",
      title: "Best Speaker",
      icon: <Speaker className="h-8 w-8" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      prize: "₹5,000 + Trophy",
      title: "Best Researcher",
      icon: <Search className="h-8 w-8" />,
      gradient: "from-red-500 to-orange-500"
    },
    {
      prize: "₹5,000 + Trophy",
      title: "Best Speaker (Prelims)",
      icon: <Star className="h-8 w-8" />,
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  const features = [
    {
      number: "1st",
      title: "National Level Competition",
      description: "Premier moot court event in the region"
    },
    {
      number: "50+",
      title: "Participating Teams",
      description: "From top law colleges across India"
    },
    {
      number: "₹90,000+",
      title: "Total Prize Money",
      description: "Substantial rewards for excellence"
    },
    {
      number: "2024",
      title: "Inaugural Edition",
      description: "Beginning of an annual tradition"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Moot Court Society | Jadhavar College of Law | National Competitions</title>
        <meta
          name="description"
          content="Join the Moot Court Society at Jadhavar College of Law. Develop advocacy skills, participate in national competitions, and excel in legal practice. Annual National Jadhavar Moot Court Competition."
        />
        <meta 
          name="keywords" 
          content="moot court, law competition, legal advocacy, Jadhavar Law College, national moot court, legal education, law students" 
        />
        <meta name="author" content="Jadhavar College of Law" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Moot Court Society - Jadhavar College of Law" />
        <meta property="og:description" content="Premier moot court competitions and legal advocacy training at Jadhavar College of Law." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jadhavarlawcollege.edu.in/moot-court" />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Jadhavar College of Law Moot Court Society",
            "description": "Moot Court Society providing legal advocacy training and national level competitions",
            "url": "https://jadhavarlawcollege.edu.in/moot-court",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "event": {
              "@type": "Event",
              "name": "National Jadhavar Moot Court Competition",
              "startDate": "2024-03-15",
              "endDate": "2024-03-17",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "Jadhavar College of Law",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Pune",
                  "addressRegion": "Maharashtra",
                  "addressCountry": "IN"
                }
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock"
              }
            }
          })}
        </script>
      </Helmet>

      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-lg font-medium mb-6"
              >
                <GraduationCap className="h-5 w-5" />
                Excellence in Legal Advocacy
              </motion.div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Moot <span className="text-primary">Court</span> Society
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Developing the next generation of legal advocates through simulated court 
                experiences, national competitions, and practical skill-building.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                    {feature.number}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto">
            {/* Objectives Section */}
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="mb-16"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-blue-600 px-8 py-6">
                  <h2 className="text-3xl font-bold text-white">Our Objectives</h2>
                  <p className="text-blue-100 mt-2">Building comprehensive legal professionals</p>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {objectives.map((objective, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-primary/5 transition-all duration-300"
                      >
                        <div className="bg-primary/10 text-primary p-3 rounded-xl">
                          {objective.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg mb-2">
                            {objective.title}
                          </h3>
                          <p className="text-gray-700">
                            {objective.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* National Competition Section */}
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="mb-16"
            >
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl shadow-2xl overflow-hidden">
                <div className="px-8 py-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Trophy className="h-6 w-6 text-yellow-400" />
                    <h2 className="text-3xl font-bold text-white">National Jadhavar Moot Court Competition</h2>
                  </div>
                  <p className="text-blue-200">First Edition - Inaugural National Level Event</p>
                </div>

                <div className="bg-white p-8">
                  {/* Marathi Section */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <div className="bg-blue-50 border-l-4 border-primary rounded-r-lg p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        जाधवर मूट कोर्ट स्पर्धा - राष्ट्रीय पातळीवर
                      </h3>
                      <div className="space-y-4 text-gray-800 text-lg leading-relaxed">
                        <p>
                          जाधवर ग्रुप आॅफ इन्स्टिटयूटसच्या जाधवर विधी महाविद्यालयाचे उद्घाटन संपन्न.
                          जाधवर विधी महाविद्यालयाच्या वतीने पहिली राष्ट्रीय जाधवर मूट कोर्ट स्पर्धा :
                          अ‍ॅड. डाॅ. राजेंद्र अनभुले आणि अ‍ॅड. विपुल दुशिंग यांचा विशेष सन्मान.
                        </p>
                        <p>
                          पुणे : जाधवर ग्रुप आॅफ इन्स्टिटयूटस्च्या जाधवर विधी महाविद्यालय आणि 
                          अ‍ॅड. शार्दुलराव सुधाकरराव जाधवर विधी महाविद्यालयाचे उद्घाटन संस्थेच्या नऱ्हे 
                          शैक्षणिक संकुलात करण्यात आले होते. यावेळी अ‍ॅड. डाॅ. राजेंद्र अनभुले आणि 
                          अ‍ॅड. विपुल दुशिंग यांचा विशेष सन्मान करण्यात आला.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Awards Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                      Awards & Prizes
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {awards.map((award, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ 
                            scale: 1.05,
                            rotateY: 5
                          }}
                          className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                        >
                          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${award.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            {award.icon}
                          </div>
                          <div className="text-2xl font-bold text-gray-900 mb-2">
                            {award.prize}
                          </div>
                          <div className="font-semibold text-gray-700">
                            {award.title}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Closing Remarks */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-12 bg-gradient-to-r from-primary/5 to-blue-100 rounded-xl p-8 border border-primary/10"
                  >
                    <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                      <p>
                        प्रा.डाॅ. सुधाकर जाधवर यांनी आभार मानले. अ‍ॅड. शार्दुल जाधवर म्हणाले, 
                        "चांगल्या दर्जाचे शिक्षण देणारे विधी महाविद्यालय जाधवर ग्रुप आॅफ इन्स्टिटयूटस्च्या 
                        वतीने स्थापन करण्यात आले आहे. समाजातील सर्व स्तरातील विद्यार्थांना चांगल्या दर्जाचे 
                        विधी शिक्षण मिळावे यासाठी महाविद्यालयाच्या माध्यमातून आम्ही प्रयत्नशील आहोत."
                      </p>
                      <p>
                        त्यांनी पुढे सांगितले की, "इंग्रजी सोबतच मराठी माध्यमातील मूट कोर्ट स्पर्धा 
                        पुढील वर्षापासून घेणार आहोत. या स्पर्धेचे रोख पारितोषिक देखील इंग्रजीपेक्षा 
                        अधिक असेल, जेणेकरून ग्रामीण भागातील विद्यार्थी मोठ्या संख्येने सहभागी होतील."
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-12 text-white shadow-2xl">
                <h2 className="text-3xl font-bold mb-4">Ready to Participate?</h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Join our Moot Court Society and develop the skills that will define your legal career.
                </p>
                
                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Calendar className="h-5 w-5" />
                    Register for Competition
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Users className="h-5 w-5" />
                    Join Moot Court Society
                  </motion.button>
                </div> */}
                
                <p className="text-blue-200 text-sm mt-6">
                  Next competition: March 2026 • Open to all law colleges
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MootCourt;