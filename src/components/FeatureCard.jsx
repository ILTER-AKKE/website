import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="card p-6 lg:p-8 h-full"
    >
      <motion.div
        className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6"
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-primary-600 dark:text-primary-400 text-2xl">
          {icon}
        </div>
      </motion.div>
      
      <h3 className="text-heading text-dark-900 dark:text-white mb-4">
        {title}
      </h3>
      
      <p className="text-body text-dark-600 dark:text-dark-300">
        {description}
      </p>
    </motion.div>
  )
}

export default FeatureCard
