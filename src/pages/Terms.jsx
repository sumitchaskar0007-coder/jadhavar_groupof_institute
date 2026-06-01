import React from 'react'
import { Helmet } from 'react-helmet-async'

const sections = [
	{
		title: 'Use of the Website',
		body: [
			'You may use this website only for lawful, personal, educational, admission-related, informational, and institutional purposes. You must not use the website in any manner that damages, disables, overburdens, or interferes with its operation or with any other user.',
			'You agree not to attempt unauthorized access to any part of the website, server, database, admin area, or connected system.',
		],
	},
	{
		title: 'Accuracy of Information',
		body: [
			'We make reasonable efforts to keep website information accurate and updated. However, course details, admission criteria, fees, schedules, facilities, approvals, events, notices, policies, and other information may change without prior notice.',
			'Users should verify important information directly with the institution before making academic, admission, financial, or other decisions.',
		],
	},
	{
		title: 'Admissions and Enquiries',
		body: [
			'Submitting an enquiry, application, feedback, grievance, or contact form through the website does not guarantee admission, eligibility, seat availability, scholarship, placement, response within a specific time, or acceptance of any request.',
			'Admission and academic decisions are governed by applicable institutional rules, university norms, regulatory requirements, eligibility criteria, document verification, merit, seat availability, and other applicable procedures.',
		],
	},
	{
		title: 'Intellectual Property',
		body: [
			'All text, images, logos, graphics, videos, design elements, documents, and other materials on this website are owned by or licensed to Jadhavar Group of Institutions, unless otherwise stated.',
			'You may view or download website content for personal, non-commercial, educational reference only. Reproduction, modification, distribution, republication, commercial use, or misuse of website content without written permission is prohibited.',
		],
	},
	{
		title: 'User Submissions',
		body: [
			'When you submit information through forms on this website, you confirm that the information is true, accurate, lawful, and submitted with proper authority. You must not submit false, misleading, offensive, unlawful, confidential third-party, or infringing material.',
			'We may contact you using the details submitted and may maintain records as required for educational, administrative, compliance, and operational purposes.',
		],
	},
	{
		title: 'External Links',
		body: [
			'Links to external websites are provided for convenience. We do not control and are not responsible for the content, services, availability, security, policies, or practices of third-party websites.',
		],
	},
	{
		title: 'Limitation of Liability',
		body: [
			'To the fullest extent permitted by applicable law, Jadhavar Group of Institutions will not be liable for any direct, indirect, incidental, consequential, or other loss arising from use of the website, inability to use the website, reliance on website information, or use of third-party links.',
		],
	},
	{
		title: 'Website Availability',
		body: [
			'We may update, suspend, restrict, or discontinue any part of the website at any time for maintenance, security, operational, legal, or institutional reasons without prior notice.',
		],
	},
	{
		title: 'Governing Law',
		body: [
			'These Terms are governed by the laws of India. Subject to applicable law, disputes relating to this website shall be subject to the jurisdiction of competent courts in Pune, Maharashtra.',
		],
	},
	{
		title: 'Contact',
		body: [
			'For questions about these Terms of Use, please contact Jadhavar Group of Institutions at Narhe, Pune, Maharashtra, India - 411041, email lutjfoundationa@gmail.com, or phone +91 9823872816 / +91 9822018921.',
		],
	},
]

export default function Terms() {
	return (
		<div className="container-responsive py-12">
			<Helmet>
				<title>Terms of Use | Jadhavar Group of Institutions, Pune</title>
				<link rel="canonical" href="https://www.jadhavar-law.edu.in/terms" />
				<meta
					name="description"
					content="Terms of Use for the Jadhavar Group of Institutions website, covering website usage, content, admissions information, user submissions, and liability."
				/>
			</Helmet>
			<article className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-10">
				<p className="text-sm font-semibold uppercase tracking-wide text-yellow-600">Last updated: 16 May 2026</p>
				<h1 className="mt-3 text-3xl font-bold text-[#0a1e3c] sm:text-4xl">Terms of Use</h1>
				<p className="mt-5 text-gray-700 leading-7">
					Welcome to the website of Jadhavar Group of Institutions. By accessing or using this website, you
					agree to these Terms of Use. If you do not agree with these Terms, please do not use the website.
				</p>

				<div className="mt-8 space-y-8">
					{sections.map((section) => (
						<section key={section.title}>
							<h2 className="text-xl font-semibold text-[#0a1e3c]">{section.title}</h2>
							<div className="mt-3 space-y-3">
								{section.body.map((paragraph) => (
									<p key={paragraph} className="text-gray-700 leading-7">
										{paragraph}
									</p>
								))}
							</div>
						</section>
					))}
				</div>

				<p className="mt-8 rounded-md bg-gray-50 p-4 text-sm leading-6 text-gray-600">
					We may revise these Terms from time to time. Continued use of the website after updates are posted
					means you accept the revised Terms.
				</p>
			</article>
		</div>
	)
}
