import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQItem = ({ question, answer, delay = 0 }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="border-b border-dark-200 dark:border-dark-700 last:border-b-0"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-800 rounded-lg px-2 -mx-2"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-dark-900 dark:text-white pr-4">
          {question}
        </h3>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <svg
            className="w-6 h-6 text-dark-500 dark:text-dark-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="pb-6 px-2 -mx-2"
            >
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                {answer}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default FAQItem
