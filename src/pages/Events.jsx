import React from 'react'
import { Helmet } from 'react-helmet-async'
import EventCard from '../components/cards/EventCard.jsx'

export default function Events() {
	return (
		<div className="container-responsive py-10">
			<Helmet>
				<title>Events — Jadhavar College of Law, Pune</title>
				<meta name="description" content="Events, seminars and conferences at Jadhavar College of Law, Pune." />
				<link rel="canonical" href="https://www.jadhavar-law.edu.in/events" />
			</Helmet>
			<h1 className="text-3xl font-bold">Events</h1>
			<div className="grid gap-4 md:grid-cols-3 mt-6">
				<EventCard title="National Moot Court" date="Mar 10, 2026" location="Campus" />
				<EventCard title="Seminar: Human Rights" date="Feb 28, 2026" location="Auditorium" />
				<EventCard title="Workshop: Mediation" date="Feb 12, 2026" location="Hall B" />
			</div>
		</div>
	)
}


