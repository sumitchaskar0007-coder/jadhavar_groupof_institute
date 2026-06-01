import React from 'react'

export default function EventCard({ title, date, location }) {
	return (
		<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
			<h3 className="font-semibold text-gray-900">{title}</h3>
			<p className="text-sm text-gray-600">{date}</p>
			<p className="text-sm text-gray-600">{location}</p>
		</div>
	)
}


