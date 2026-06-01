import React from 'react'
import { Helmet } from 'react-helmet-async'

const sections = [
	{
		title: 'Information We Collect',
		body: [
			'We may collect personal information such as name, phone number, email address, course interest, address, academic details, enquiry messages, and any documents or information voluntarily submitted through admission, enquiry, contact, feedback, grievance, newsletter, or other forms on this website.',
			'We may also collect limited technical information such as browser type, device information, IP address, pages visited, date and time of access, and referral source to help us maintain website security and improve the user experience.',
		],
	},
	{
		title: 'How We Use Information',
		body: [
			'Information submitted through this website may be used to respond to enquiries, process admission-related requests, provide information about courses and institutional activities, communicate notices or updates, manage feedback and grievances, improve our services, maintain records, and comply with applicable legal or regulatory requirements.',
			'We do not sell personal information. We use the information only for legitimate educational, administrative, communication, security, and compliance purposes connected with Jadhavar Group of Institutions and its associated institutes.',
		],
	},
	{
		title: 'Sharing of Information',
		body: [
			'We may share information internally with authorized departments, admission teams, administrative staff, or affiliated institutes where required to respond to your request or provide services.',
			'Information may also be shared with trusted service providers who help operate the website, manage communications, store data, or provide technical support. Such sharing is limited to what is necessary for the relevant purpose.',
			'We may disclose information when required by law, court order, government authority, university, regulator, accreditation body, or to protect the rights, safety, and security of the institution, students, staff, visitors, or the public.',
		],
	},
	{
		title: 'Cookies and Analytics',
		body: [
			'This website may use cookies or similar technologies to remember preferences, understand site usage, improve performance, and support security. Users can control or disable cookies through their browser settings, though some website features may not function properly if cookies are disabled.',
		],
	},
	{
		title: 'Data Security',
		body: [
			'We take reasonable administrative, technical, and organizational measures to protect personal information from unauthorized access, loss, misuse, alteration, or disclosure. However, no internet-based system can be guaranteed to be completely secure.',
		],
	},
	{
		title: 'Data Retention',
		body: [
			'We retain personal information only for as long as necessary for the purpose for which it was collected, for institutional record keeping, admission or academic administration, legal compliance, dispute resolution, and legitimate operational needs.',
		],
	},
	{
		title: 'Your Choices',
		body: [
			'You may request correction, update, or deletion of personal information submitted through this website, subject to verification and applicable record-retention obligations. You may also opt out of non-essential communications by contacting us.',
		],
	},
	{
		title: 'Third-Party Links',
		body: [
			'This website may contain links to external websites, social media platforms, payment gateways, university portals, or other third-party resources. We are not responsible for the privacy practices, content, accuracy, or security of external websites.',
		],
	},
	{
		title: 'Children and Student Information',
		body: [
			'Where information relates to minors or students, such information should be submitted by a parent, guardian, or authorized person where required. We use student-related information only for educational, admission, administrative, welfare, and compliance purposes.',
		],
	},
	{
		title: 'Contact',
		body: [
			'For privacy-related questions or requests, please contact Jadhavar Group of Institutions at Narhe, Pune, Maharashtra, India - 411041, email lutjfoundationa@gmail.com, or phone +91 9823872816 / +91 9822018921.',
		],
	},
]

export default function Privacy() {
	return (
		<div className="container-responsive py-12">
			<Helmet>
				<title>Privacy Policy | Jadhavar Group of Institutions, Pune</title>
				<link rel="canonical" href="https://www.jadhavar-law.edu.in/privacy" />
				<meta
					name="description"
					content="Privacy Policy for Jadhavar Group of Institutions, Pune, explaining how website information is collected, used, protected, and shared."
				/>
			</Helmet>
			<article className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-10">
				<p className="text-sm font-semibold uppercase tracking-wide text-yellow-600">Last updated: 16 May 2026</p>
				<h1 className="mt-3 text-3xl font-bold text-[#0a1e3c] sm:text-4xl">Privacy Policy</h1>
				<p className="mt-5 text-gray-700 leading-7">
					Jadhavar Group of Institutions respects the privacy of students, parents, guardians, alumni, faculty,
					staff, applicants, visitors, and other users of this website. This Privacy Policy explains how we
					collect, use, disclose, retain, and protect information submitted through our website and related
					digital channels.
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
					This policy may be updated from time to time. Any changes will be posted on this page with a revised
					last updated date.
				</p>
			</article>
		</div>
	)
}
