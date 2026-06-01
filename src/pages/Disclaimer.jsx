import React from 'react'
import { Helmet } from 'react-helmet-async'

const sections = [
	{
		title: 'General Information',
		body: [
			'The information on this website is provided for general educational, institutional, and informational purposes only. It is intended to help visitors learn about Jadhavar Group of Institutions, its associated institutes, programmes, facilities, activities, notices, and contact channels.',
			'While we aim to keep the information accurate and current, we do not guarantee that all information is complete, error-free, uninterrupted, or updated at all times.',
		],
	},
	{
		title: 'Admissions, Courses, and Fees',
		body: [
			'Course availability, eligibility criteria, admission process, fees, scholarships, intake capacity, academic calendar, examination rules, documents required, affiliations, approvals, and other academic or administrative details may change as per institutional decisions, university rules, regulatory directions, or applicable law.',
			'Visitors should confirm all admission, academic, fee, and regulatory information directly with the institution before acting on it.',
		],
	},
	{
		title: 'No Professional Advice',
		body: [
			'Website content should not be treated as legal, financial, career, academic, medical, or professional advice. Users should seek appropriate advice from qualified professionals or authorized institutional representatives before making decisions.',
		],
	},
	{
		title: 'Results, Placements, and Outcomes',
		body: [
			'Any references to student achievements, placements, events, rankings, results, internships, alumni outcomes, or institutional accomplishments are provided for information and may vary by year, programme, student performance, market conditions, and other factors.',
			'No statement on this website should be interpreted as a guarantee of admission, marks, results, placement, internship, employment, scholarship, or any specific outcome.',
		],
	},
	{
		title: 'External Websites',
		body: [
			'This website may include links to external websites, social media pages, portals, maps, videos, payment platforms, or third-party resources. These links are provided for convenience only.',
			'Jadhavar Group of Institutions does not endorse, control, or accept responsibility for external content, services, accuracy, availability, privacy practices, or security.',
		],
	},
	{
		title: 'Images and Media',
		body: [
			'Photographs, videos, graphics, and media displayed on the website are used to represent institutional activities, infrastructure, events, and academic life. Some media may be illustrative, archival, edited for presentation, or subject to change.',
		],
	},
	{
		title: 'Limitation of Responsibility',
		body: [
			'Jadhavar Group of Institutions will not be responsible for any loss, damage, inconvenience, or misunderstanding arising from use of this website, reliance on website information, technical issues, third-party links, or temporary unavailability of website content.',
		],
	},
	{
		title: 'Contact for Verification',
		body: [
			'For confirmation of any information displayed on this website, please contact Jadhavar Group of Institutions at Narhe, Pune, Maharashtra, India - 411041, email lutjfoundationa@gmail.com, or phone +91 9823872816 / +91 9822018921.',
		],
	},
]

export default function Disclaimer() {
	return (
		<div className="container-responsive py-12">
			<Helmet>
				<title>Disclaimer | Jadhavar Group of Institutions, Pune</title>
				<link rel="canonical" href="https://www.jadhavar-law.edu.in/disclaimer" />
				<meta
					name="description"
					content="Disclaimer for the Jadhavar Group of Institutions website, covering informational content, admissions details, external links, outcomes, and liability."
				/>
			</Helmet>
			<article className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-10">
				<p className="text-sm font-semibold uppercase tracking-wide text-yellow-600">Last updated: 16 May 2026</p>
				<h1 className="mt-3 text-3xl font-bold text-[#0a1e3c] sm:text-4xl">Disclaimer</h1>
				<p className="mt-5 text-gray-700 leading-7">
					This Disclaimer applies to the Jadhavar Group of Institutions website and related digital content.
					By using this website, you acknowledge and agree to the points below.
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
					We may update this Disclaimer at any time. The revised version will be effective when posted on this
					page.
				</p>
			</article>
		</div>
	)
}
