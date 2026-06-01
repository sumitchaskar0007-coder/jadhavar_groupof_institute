import React from 'react'
import { motion } from 'framer-motion'

export default function VideoSection({ title = 'Learn About Our Practice', subtitle = 'A brief overview of our mission, expertise, and approach.', src = '' }) {
	return (
		<section className="container-responsive py-10">
			<div className="max-w-3xl">
				<h2 className="text-2xl font-display font-semibold">{title}</h2>
				<p className="text-gray-700 mt-2">{subtitle}</p>
			</div>
			<motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }} className="mt-6 rounded-2xl overflow-hidden shadow-lg bg-black aspect-video">
				{src
					? <iframe className="w-full h-full" src={src} title="Informational video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
					: <video className="w-full h-full" controls poster="/assets/video-poster.jpg">
							<source src="/assets/intro.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
				}
			</motion.div>
		</section>
	)
}


