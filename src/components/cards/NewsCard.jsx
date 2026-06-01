import React from 'react'

export default function NewsCard({ title, date, href }) {
	return (
		<a href={href || '#'} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow block">
			<h3 className="font-semibold text-gray-900">{title}</h3>
			<p className="text-sm text-gray-600">{date}</p>
		</a>
	)
}


