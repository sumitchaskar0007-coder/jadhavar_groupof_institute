import React from 'react'

export default function FacultyCard({ name, role, image, area }) {
	return (
		<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
			<div className="aspect-square w-full rounded-xl overflow-hidden bg-gray-100">
				<img src={image || '/assets/faculty-placeholder.jpg'} alt={`${name} - ${role}`} className="w-full h-full object-cover" loading="lazy" />
			</div>
			<h3 className="font-semibold text-gray-900 mt-3">{name}</h3>
			<p className="text-sm text-gray-600">{role}</p>
			{area && <p className="text-xs text-gray-500 mt-1">Area: {area}</p>}
		</div>
	)
}


