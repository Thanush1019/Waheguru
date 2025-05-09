'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DonateSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-primary-50 via-neutral-50 to-secondary-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Thank You for Your Donation!
        </h1>
        
        <p className="text-gray-600 mb-8">
          Your generous contribution will help us continue our mission of serving the community.
          We appreciate your support!
        </p>
        
        <Link
          href="/"
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  )
} 