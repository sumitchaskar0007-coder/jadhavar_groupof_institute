import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
	return (
		<div className="container-responsive py-20 text-center">
			<h1 className="text-4xl font-bold">404</h1>
			<p className="mt-2 text-gray-600">Page not found.</p>
			<Link to="/" className="inline-block mt-4 px-4 py-2 rounded-lg bg-primary text-white">Go Home</Link>
		</div>
	)
}


