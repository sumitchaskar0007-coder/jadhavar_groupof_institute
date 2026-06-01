import React from 'react'
import { Link } from 'react-router-dom'

export default function AllNavDropdown() {
	const [open, setOpen] = React.useState(false)
	const menuRef = React.useRef(null)
	React.useEffect(() => {
		function onDoc(e) {
			if (!menuRef.current?.contains(e.target)) setOpen(false)
		}
		if (open) document.addEventListener('mousedown', onDoc)
		return () => document.removeEventListener('mousedown', onDoc)
	}, [open])

	const links = [
		{ to: '/', label: 'Home' },
		{ to: '/about', label: 'About' },
		{ to: '/programmes', label: 'Programmes' },
		{ to: '/admissions', label: 'Admissions' },
		{ to: '/faculty', label: 'Faculty' },
		{ to: '/events', label: 'Events' },
		{ to: '/news', label: 'News' },
		{ to: '/gallery', label: 'Gallery' },
		{ to: '/contact', label: 'Contact' },
		{ to: '/privacy', label: 'Privacy' },
		{ to: '/terms', label: 'Terms' },
	]

	return (
		<div className="relative" ref={menuRef}>
			<button onClick={() => setOpen(!open)} className="px-3 py-2 rounded-lg hover:bg-primary/10 focus:bg-primary/10 focus:outline-none transition-colors">
				All
			</button>
			{open && (
				<div className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-lg p-2 grid">
					{links.map((l) => (
						<Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-gray-50">
							{l.label}
						</Link>
					))}
				</div>
			)}
		</div>
	)
}


