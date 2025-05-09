'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
	return (
		<section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-primary-100 to-neutral-50">
			{/* Animated background shapes */}
			<div className="absolute inset-0 -z-10">
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 0.3, scale: 1 }}
					transition={{ duration: 1.5, ease: "easeOut" }}
					className="absolute top-20 right-20 w-72 h-72 bg-primary-200 rounded-full blur-3xl"
				/>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 0.4, scale: 1 }}
					transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
					className="absolute bottom-20 left-20 w-96 h-96 bg-secondary-200 rounded-full blur-3xl"
				/>
			</div>

			<div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="text-center lg:text-left space-y-4 sm:space-y-6 mt-8 sm:mt-0"
					>
						<div className="space-y-2 sm:space-y-3">
							<h2 className="text-sm sm:text-base md:text-lg font-medium text-primary-600 tracking-wide uppercase">
								Welcome to Waheguru
							</h2>
							<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 leading-tight sm:leading-tight md:leading-tight">
								Empowering Communities Through{' '}
								<span className="text-primary-600">Seva</span>
							</h1>
						</div>
						
						<p className="text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
							Join us in making a difference. Your contribution helps us create
							lasting positive change in communities around the world.
						</p>

						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
							<Link
								href="/donate"
								className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 
								text-sm sm:text-base md:text-lg font-semibold text-white bg-secondary-500 rounded-lg sm:rounded-xl 
								hover:bg-secondary-600 transform hover:scale-105 transition-all duration-300 shadow-lg
								hover:shadow-secondary-300/50 whitespace-nowrap"
							>
								Donate Now
								<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							</Link>
							<Link
								href="/naam-japo"
								className="rounded-xl bg-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all duration-300"
							>
								Learn More
							</Link>
						</div>
					</motion.div>

					{/* Image Section */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
						className="hidden lg:block relative"
					>
						<div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
							<img
								src="/images/667c8ef5919336892cfe67e2_Main.jpg"
								alt="Sikh Community Service"
								className="w-full h-full object-cover"
							/>
							{/* Glass overlay */}
							<div className="absolute inset-0 bg-gradient-to-tr from-primary-600/30 via-transparent to-secondary-500/20" />
						</div>
						{/* Decorative elements */}
						<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-200 rounded-full blur-lg" />
						<div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary-200 rounded-full blur-lg" />
					</motion.div>
				</div>
			</div>
		</section>
	)
} 