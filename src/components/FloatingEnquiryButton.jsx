import React from 'react'

export default function FloatingEnquiryButton({ onClick }) {
	return (
		<button
			onClick={onClick}
			aria-label="Open Enquiry Form"
			className="fixed z-50 bottom-5 right-5 md:bottom-8 md:right-8 px-5 py-3 rounded-full bg-primary text-white shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/40"
		>
			Enquiry
		</button>
	)
}


