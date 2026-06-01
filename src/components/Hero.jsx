import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Hero({ onProspectus, onEnquiry }) {
	return (
		<section className="relative overflow-hidden">
			<Helmet>
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "CollegeOrUniversity",
						"name": "Dr. Sudhakarrao Jadhavar Institute of Management and Technology",
						"address": {
							"@type": "PostalAddress",
							"addressLocality": "Pune",
							"addressRegion": "MH",
							"addressCountry": "IN"
						},
						"url": "https://www.jadhavarmca.edu.in"
					})}
				</script>
			</Helmet>

			<div className="container-responsive py-12 md:py-20 grid gap-8 md:grid-cols-2 items-center">
				{/* LEFT CONTENT */}
				<div>
					<p className="text-sm font-semibold text-primary mb-2">
						Building Future IT Professionals
					</p>

					<h1 className="font-display text-3xl md:text-5xl font-bold leading-tight">
						Master of Computer Applications (MCA) <br />
						Admissions Open for 2026
					</h1>

					<p className="mt-4 text-gray-700 max-w-2xl">
						AICTE approved MCA program affiliated to Savitribai Phule Pune
						University, focused on software development, programming, data
						science, cloud computing, and industry-ready IT skills.
					</p>

					<div className="mt-6 flex flex-wrap gap-3">
						<Link
							to="/contact"
							className="px-5 py-3 rounded-xl bg-primary text-white hover:opacity-90"
						>
							Apply Now
						</Link>

						<button
							onClick={onProspectus}
							className="px-5 py-3 rounded-xl border border-gray-300 hover:border-primary"
						>
							Download Prospectus
						</button>

						<button
							onClick={onEnquiry}
							className="px-5 py-3 rounded-xl bg-accent text-gray-900"
						>
							Enquiry
						</button>
					</div>
				</div>

				{/* RIGHT IMAGE */}
				<div className="relative">
					<div className="aspect-[4/3] w-full rounded-2xl bg-gray-200 overflow-hidden shadow-lg">
						<img
							src="/assets/mca-hero.jpg"
							alt="MCA Department - Jadhavar Institute"
							className="w-full h-full object-cover"
							loading="eager"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
