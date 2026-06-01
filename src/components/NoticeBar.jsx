import React from 'react'
import { Link } from 'react-router-dom'

export default function NoticeBar() {
	const [visible, setVisible] = React.useState(true)
	if (!visible) return null
	return (
		<div className="bg-primary text-white text-sm">
			<div className="container-responsive py-2 flex items-center gap-3">
				<span className="font-semibold">Admission Open — 2026:</span>
				<span>Registration closes on Jan 31, 2026. Entrance test: Feb 15, 2026.</span>
				<Link to="/admissions" className="underline underline-offset-2 decoration-white/60 hover:decoration-white">Details</Link>
				<button aria-label="Close notice" onClick={() => setVisible(false)} className="ml-auto rounded p-1 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 8.586l4.95-4.95 1.414 1.415L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10 3.636 5.05l1.414-1.415L10 8.586z" clipRule="evenodd"/></svg>
				</button>
			</div>
		</div>
	)
}


