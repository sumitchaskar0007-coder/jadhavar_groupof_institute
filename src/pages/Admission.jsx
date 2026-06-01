import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  Download,
  ChevronDown,
  ChevronUp,
  X,
  Loader2,
  CheckCircle
} from 'lucide-react'

const EnquiryModal = ({ isOpen, onClose, onSubmit, type }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    onSubmit(formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    })
  }

  const handleClose = () => {
    setIsSubmitted(false)
    onClose()
  }

  if (!isOpen) return null

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full mx-auto">
          <div className="p-8 text-center">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-6">
              Your enquiry has been received. Our team will get back to you within 24 hours.
            </p>
            <button
              onClick={handleClose}
              className="w-full bg-[#0a1e3c] text-white py-3 rounded-xl font-semibold hover:bg-[#1e3a5f] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full mx-auto my-8">
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h3 className="text-2xl font-bold text-[#0a1e3c]">
              Admission Enquiry
            </h3>
            <p className="text-gray-600 mt-1">
              Get detailed information about our programs
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                placeholder="+91 9876543210"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Program Interested In
              </label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                placeholder="e.g., B.A.LL.B, MBA, B.Sc"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                placeholder="Please describe your enquiry..."
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#0a1e3c] text-white py-4 rounded-xl font-semibold hover:bg-[#1e3a5f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Enquiry'
              )}
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function Admissions() {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false)
  const [openSection, setOpenSection] = useState('applicationProcess')

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  // Brochure data from user content - WITHOUT brochure column
  const brochureData = [
    { srNo: 1, institute: "Adv. Shardulrao Sudhakarrao Jadhavar College of Law", courses: "B.A.-LL.B. (5 Year)", contact: "9284246664" },
    { srNo: 2, institute: "Jadhavar College of Law", courses: "LL.B. (3 Year)", contact: "9284246664" },
    { srNo: 3, institute: "Dr. Sudhakar Jadhavar Arts, Commerce & Science College", courses: "BBA, BBA (CA), BCA, BCS, B.Sc. (Plain), B.Sc. (Data Science), B.Sc. (Fashion Designing), B.Sc. (Artificial Intelligence & Machine Learning), B.Sc. (Cyber & Digital Science), M.Sc. (Computer Application), M.Sc. (Computer Science), B.A., M.A. B.Com, M.Com", contact: "9168274116" },
    { srNo: 4, institute: "Aditya Institute of Management-AIMS", courses: "MBA/ PGDM", contact: "9356399629" },
    { srNo: 5, institute: "Dr Sudhakarrao Jadhavar Institute of Management & Technology", courses: "MCA", contact: "9168274116" },
    { srNo: 6, institute: "Institute of Nursing", courses: "ANM/ GNM", contact: "8459727432" },
    { srNo: 7, institute: "Dr. Sudhakarrao Jadhavar College of Paramedical", courses: "DMLT/ CMLT", contact: "8459727432" },
    { srNo: 8, institute: "Jai Ganesh College of Education", courses: "B.Ed.", contact: "8975054114" },
    { srNo: 9, institute: "Shardul Sudhakarrao Jadhavar Commerce & Science Jr College", courses: "11th & 12th (Commerce, Science)", contact: "9699707324" },
    { srNo: 10, institute: "Paradise Jr College", courses: "11th & 12th (Arts, Commerce, Science)", contact: "7888274117" },
    { srNo: 11, institute: "Jadhavar English Medium School & Jr College", courses: "11th & 12th (Arts, Commerce, Science)", contact: "8459775447" },
    { srNo: 12, institute: "Paradise English Medium School", courses: "Playgroup to 10th (SSC Board)", contact: "8459777988" },
    { srNo: 13, institute: "Jadhavar International School & Jr College", courses: "Playgroup to 8th (CBSE Board)", contact: "8459781648" },
    { srNo: 14, institute: "Jadhavar English Medium School", courses: "Playgroup to 10th (SSC Board)", contact: "8459775447" },
    { srNo: 15, institute: "Prin. Dr. Sudhakarrao Jadhavar Prathmik & Madhyamik Vidyalaya", courses: "Playgroup to 10th (SSC Board)", contact: "8459758847" },
    { srNo: 16, institute: "U.T. Jadhavar Arts Commerce College", courses: "B.A., M.A. B.Com, M.Com, DSM", contact: "8459763113" }
  ]

  return (
    <>
      <Helmet>
        <title>Admissions - Jadhavar Group of Institutions</title>
        <meta name="description" content="Admission Form and Brochure - Jadhavar Group of Institutions Pune" />
      </Helmet>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={showEnquiryModal}
        onClose={() => setShowEnquiryModal(false)}
        onSubmit={(data) => {
          setShowEnquiryModal(false)
        }}
      />

      {/* Header */}
      <div className="bg-[#0a1e3c] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Admission Form and Brochure</h1>
          <p className="text-gray-300 mt-2">Home {'>'} Admission Form and Brochure</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* BROCHURE TABLE SECTION - WITHOUT BROCHURE COLUMN */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div
              className="p-6 bg-gradient-to-r from-[#0a1e3c] to-[#1e3a5f] text-white flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('brochure')}
            >
              <div className="flex items-center gap-3">
                <Download className="h-6 w-6" />
                <h2 className="text-2xl font-bold">Form and Brochure</h2>
              </div>
              {openSection === 'brochure' ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </div>

            {openSection === 'brochure' && (
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-6 py-4 text-left font-semibold text-gray-700">Sr. No</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-700">Institute Name</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-700">Courses</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-700">Contact Number</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {brochureData.map((item) => (
                        <tr key={item.srNo} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium">{item.srNo}</td>
                          <td className="px-6 py-4">{item.institute}</td>
                          <td className="px-6 py-4 max-w-md text-sm text-gray-600">{item.courses}</td>
                          <td className="px-6 py-4">
                            <a href={`tel:${item.contact}`} className="text-[#0a1e3c] hover:underline font-medium">
                              {item.contact}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* APPLICATION PROCESS SECTION - Detailed from user content */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div
              className="p-6 bg-gradient-to-r from-[#0a1e3c] to-[#1e3a5f] text-white flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection('applicationProcess')}
            >
              <div className="flex items-center gap-3">
                <Download className="h-6 w-6" />
                <h2 className="text-2xl font-bold">Detail About How To Apply</h2>
              </div>
              {openSection === 'applicationProcess' ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </div>

            {openSection === 'applicationProcess' && (
              <div className="p-8">
                {/* Introduction text from user */}
                <div className="mb-8 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    If you would like to study in the Jadhavar Group of Institute in the heart of the city that focus on changing the world for a better tomorrow, you're choosing the right place. We do not use special formulas to select students. We look at every single applicant's application, academic and personal, to select students who suit our institute with a full range of backgrounds.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-[#0a1e3c] mb-6">The Application Process</h3>

                {/* Step 1 */}
                <div className="mb-8 bg-blue-50 rounded-xl p-6 border-l-4 border-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0a1e3c] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0a1e3c] mb-2">Meet Admission Officer</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Meeting a college admission officer is a valuable opportunity to learn more about the institution and make a strong impression. Whether in-person or virtual, it's essential to come prepared with thoughtful questions about the application process, academic programs, scholarships, and campus life. Dress professionally, bring necessary documents if required, and be ready to discuss your interests, achievements, and goals. This interaction allows you to clarify doubts, showcase your enthusiasm, and gain insights that can strengthen your application.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="mb-8 bg-blue-50 rounded-xl p-6 border-l-4 border-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0a1e3c] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0a1e3c] mb-2">Procure the Application Form</h4>
                      <p className="text-gray-700 leading-relaxed">
                        It is important to carefully read the instructions and deadlines before downloading or filling out the form. Ensure that all required documents, such as transcripts, recommendation letters, and personal statements, are ready before submission. If any clarification is needed, contacting the admissions office for guidance can help avoid errors and delays.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="mb-8 bg-blue-50 rounded-xl p-6 border-l-4 border-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0a1e3c] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0a1e3c] mb-2">Register with us</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Join our institute by registering with us today! By signing up, you gain access to important updates, admission guidelines, and exclusive resources to help you through the application process. Stay informed about deadlines, scholarship opportunities, and campus events. Our team is here to support you every step of the way. Register now and take the first step toward a bright future at our institution!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="mb-8 bg-blue-50 rounded-xl p-6 border-l-4 border-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0a1e3c] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0a1e3c] mb-2">Pay Fees</h4>
                      <p className="text-gray-700 leading-relaxed">
                        It is important to check the official website for the exact fee amount and deadline to avoid late penalties. Keep a copy of the payment receipt for future reference. If financial assistance is needed, explore scholarship opportunities or contact the admissions office for information on fee waivers and payment plans. Ensuring timely payment secures your place in the institution and allows for a smooth enrollment process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Enquiry Button */}
          <div className="text-center">
            <button
              onClick={() => setShowEnquiryModal(true)}
              className="bg-yellow-500 text-[#0a1e3c] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-400 transition-all inline-flex items-center gap-2"
            >
              Admission Enquiry
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}