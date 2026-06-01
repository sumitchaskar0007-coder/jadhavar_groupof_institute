import React from 'react'

export default function AnnouncementModal({ open, onClose, items = [] }) {
	const [index, setIndex] = React.useState(0)
	React.useEffect(() => { if (!open) setIndex(0) }, [open])
	if (!open || items.length === 0) return null
	const item = items[index]
	const isLast = index === items.length - 1
	return (
		<div aria-modal="true" role="dialog" className="fixed inset-0 z-50 flex items-center justify-center">
			<div className="absolute inset-0 bg-black/40" onClick={onClose} />
			<div className="relative bg-white rounded-2xl max-w-lg w-full p-6 mx-4 shadow-xl">
				<div className="flex items-center justify-between">
					<h3 className="text-2xl font-semibold">{item.title}</h3>
					<button aria-label="Close" onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/30">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 8.586l4.95-4.95 1.414 1.415L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10 3.636 5.05l1.414-1.415L10 8.586z" clipRule="evenodd"/></svg>
					</button>
				</div>
				<div className="mt-3 text-sm text-gray-700 space-y-2">
					{item.content}
				</div>
				<div className="flex justify-end gap-2 pt-4">
					{!isLast && <button onClick={() => setIndex(i => i + 1)} className="px-4 py-2 rounded-lg border">Next</button>}
					<button onClick={onClose} className="px-4 py-2 rounded-lg bg-primary text-white">{isLast ? 'Close' : 'Skip'}</button>
				</div>
			</div>
		</div>
	)
}


