import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { id: 'About', icon: '📚' },
  { id: 'Rules', icon: '📋' },
  { id: 'Services and Facilities', icon: '⚙️' },
  { id: 'Resources', icon: '📰' },
  { id: 'Links and Contact', icon: '🔗' }
];

const libraryContent = {
  About: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">About Our Library</h2>
        <p className="text-gray-600 leading-relaxed">The College has a well-equipped, automated and spacious library with a wide collection of Reference books, Text books, National and International Periodicals. We provide open access to collection of books and resources including Book bank and internet facilities.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-blue-500">🕒</span> Working Hours
          </h3>
          <div className="space-y-2 text-gray-600">
            <p className="flex justify-between">
              <span>Timing:</span>
              <span className="font-medium">9:30 AM - 1:00 PM & 1:30 PM - 5:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span>Days:</span>
              <span className="font-medium">Monday to Saturday</span>
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-green-500">👥</span> Library Committee
          </h3>
          <p className="text-gray-600">Our Library Advisory Committee oversees library affairs and addresses day-to-day operational matters.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
            <h3 className="text-lg font-semibold text-white">Library Committee</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold text-gray-700">Position</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Designation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 text-gray-600">Librarian</td>
                  <td className="p-3 text-gray-500">-</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 text-gray-600">Member</td>
                  <td className="p-3 text-gray-500">-</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 text-gray-600">Member</td>
                  <td className="p-3 text-gray-500">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
            <h3 className="text-lg font-semibold text-white">Book Collection</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold text-gray-700">Category</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 text-gray-600">LL.B.</td>
                  <td className="p-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">349</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 text-gray-600">Donated Books</td>
                  <td className="p-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">624</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ),
  Rules: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border-l-4 border-red-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Library Rules & Regulations</h2>
        <p className="text-gray-600">To maintain a conducive learning environment, please adhere to the following rules:</p>
      </div>

      <div className="grid gap-4">
        {[
          "A Student shall be issued one book at a time for seven days which can be extended to another week provided a request for renewal is made before the expiry date.",
          "Second book will be issued on 1-card for one day only. Otherwise, a fine Rs.25/- per day will be charged up to 3 days, thereafter for 15 days the library issue facility will be stopped.",
          "Reference Books or Periodicals shall not be issued to the students but be made available to them in the library.",
          "Students who keep the books after the expiry date will be fined Rs.10/- per week.",
          "If a Student loses or damages any library book, the student shall have to pay double the MRP or replace the book (New Edition), within 15 days otherwise fine Rs. 10/- per day will be levied.",
          "Always maintain silence in the library. Whispering and loitering are not allowed.",
          "Mobile phones need to be switched off or kept in silent mode before entry.",
          "Library cards are not transferable; duplicate cards can be issued once within 15 days for Rs.100.",
          "Keep personal belongings in the baggage counter. The library is not responsible for loss of valuables.",
          "Students are requested to pay fines in time and show receipts to library staff."
        ].map((rule, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mt-1">
              {index + 1}
            </span>
            <p className="text-gray-700 leading-relaxed">{rule}</p>
          </motion.div>
        ))}
      </div>
    </div>
  ),
  'Services and Facilities': (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Services & Facilities</h2>
        <p className="text-gray-600">Our library offers comprehensive services to support your academic journey:</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          { icon: "💻", title: "Computer & Internet", desc: "Available for staff and students" },
          { icon: "📱", title: "Digital Library", desc: "Access to digital resources and e-books" },
          { icon: "📖", title: "Open Shelf System", desc: "Free access to books and resources" },
          { icon: "💿", title: "Educational CDs", desc: "Curricular and extracurricular content" },
          { icon: "🎯", title: "Competitive Exam Books", desc: "Latest editions for various exams" },
          { icon: "🖨️", title: "Photocopy & Print", desc: "Available on payment basis" },
          { icon: "💧", title: "Drinking Water", desc: "Clean drinking water facility" }
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  ),
  Resources: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border-l-4 border-amber-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Newspapers & Periodicals</h2>
        <p className="text-gray-600">Stay updated with our diverse collection of newspapers:</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          "Sakal", "Sakal Times", "Indian Express", "Loksatta", 
          "Times of India", "Maharashtra Times", "Pudhari", "Lokmat"
        ].map((paper, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-amber-200 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                <span className="text-amber-600">📰</span>
              </div>
              <span className="font-medium text-gray-700">{paper}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  ),
  'Links and Contact': (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border-l-4 border-emerald-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Important Links & Contact</h2>
        <p className="text-gray-600">Connect with other valuable resources:</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Partner Libraries</h3>
          {["Jaykar Library", "British Library", "Gokhale Institute Library"].map((lib, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all group"
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <span className="text-emerald-600">🏛️</span>
              </div>
              <span className="font-medium text-gray-700 group-hover:text-emerald-600 transition-colors">
                {lib}
              </span>
            </motion.a>
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-blue-500">📞</span>
              <span className="text-gray-600">Phone: [Library Phone]</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-green-500">✉️</span>
              <span className="text-gray-600">Email: [Library Email]</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-purple-500">📍</span>
              <span className="text-gray-600">Location: [Library Location]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default function Library() {
  const [active, setActive] = useState('About');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Library | Jadhavar College of Law</title>
      </Helmet>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-2">College Library</h1>
        <p className="text-gray-600 text-lg">Your gateway to knowledge and resources</p>
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/4"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="text-2xl">📚</span> Library Menu
              </h2>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => setActive(item.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                        active === item.id
                          ? 'bg-blue-50 text-blue-700 shadow-md border border-blue-200'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800 hover:shadow-sm'
                      }`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.id}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="lg:w-3/4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                {libraryContent[active]}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}