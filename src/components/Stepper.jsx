import React from 'react'
import { motion } from 'framer-motion'

const Stepper = ({ steps, currentStep = 0 }) => {
  return (
    <div className="relative">
      {/* Progress Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dark-200 dark:bg-dark-700">
        <motion.div
          className="absolute top-0 left-0 w-full bg-primary-600 dark:bg-primary-400"
          initial={{ height: 0 }}
          animate={{ height: `${(currentStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      </div>

      {/* Steps */}
      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex items-start space-x-6"
          >
            {/* Step Circle */}
            <div className="relative z-10 flex-shrink-0">
              <motion.div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                  index <= currentStep
                    ? 'bg-primary-600 dark:bg-primary-400'
                    : 'bg-dark-200 dark:bg-dark-700'
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {index + 1}
              </motion.div>
              
              {/* Checkmark for completed steps */}
              {index < currentStep && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              )}
            </div>

            {/* Step Content */}
            <div className="flex-1 min-w-0">
              <motion.h3
                className="text-xl font-semibold text-dark-900 dark:text-white mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.1 }}
              >
                {step.title}
              </motion.h3>
              
              <motion.p
                className="text-dark-600 dark:text-dark-300 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
              >
                {step.description}
              </motion.p>
              
              {step.details && (
                <motion.div
                  className="mt-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                >
                  <p className="text-sm text-primary-700 dark:text-primary-300">
                    {step.details}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Stepper
