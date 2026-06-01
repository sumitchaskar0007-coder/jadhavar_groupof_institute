import React from 'react'

export default function GalleryGrid({ items = [] }) {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
			{items.map((src, i) => (
				<div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
					<img src={src} alt={`Gallery item ${i+1}`} className="w-full h-full object-cover" loading="lazy" />
				</div>
			))}
		</div>
	)
}


