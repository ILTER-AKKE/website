import React from 'react'
import { motion } from 'framer-motion'

const TeamCard = ({ name, role, bio, avatar, socialLinks, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="card p-6 lg:p-8 text-center"
    >
      {/* Avatar */}
      <motion.div
        className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-primary-600"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
      </motion.div>

      {/* Name & Role */}
      <motion.h3
        className="text-xl font-semibold text-dark-900 dark:text-white mb-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.1 }}
      >
        {name}
      </motion.h3>
      
      <motion.p
        className="text-primary-600 dark:text-primary-400 font-medium mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.2 }}
      >
        {role}
      </motion.p>

      {/* Social Links */}
      {socialLinks && socialLinks.length > 0 && (
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay + 0.4 }}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-dark-100 dark:bg-dark-700 hover:bg-primary-600 dark:hover:bg-primary-500 rounded-lg flex items-center justify-center text-dark-600 dark:text-dark-300 hover:text-white transition-all duration-200"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.name}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
              </svg>
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

export default TeamCard
