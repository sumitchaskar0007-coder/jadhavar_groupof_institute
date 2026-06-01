import React from 'react'
import { Helmet } from 'react-helmet-async'
import NewsCard from '../components/cards/NewsCard.jsx'

export default function News() {
	return (
		<div className="container-responsive py-10">
			<Helmet>
				<title>News & Notices — Jadhavar College of Law, Pune</title>
				<meta name="description" content="Latest announcements and notices from Jadhavar College of Law, Pune." />
				<link rel="canonical" href="https://www.jadhavar-law.edu.in/news" />
			</Helmet>
			<h1 className="text-3xl font-bold">News & Notices</h1>
			<div className="grid gap-4 md:grid-cols-3 mt-6">
				<NewsCard title="Admission Open — 2026" date="Nov 20, 2025" />
				<NewsCard title="Exam Schedule Released" date="Nov 10, 2025" />
				<NewsCard title="Holiday Notice" date="Oct 30, 2025" />
			</div>
		</div>
	)
}


