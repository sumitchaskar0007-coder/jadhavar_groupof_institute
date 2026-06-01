import React from 'react'

export default function AdmissionsCard({ title, date, cta, onClick }) {
	return (
		<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
			<h3 className="font-semibold text-gray-900">{title}</h3>
			<p className="text-sm text-gray-600 mt-1">{date}</p>
			<div className="mt-3">
				<button onClick={onClick} className="px-4 py-2 rounded-lg bg-primary text-white">{cta || 'Apply'}</button>
			</div>
		</div>
	)
}


