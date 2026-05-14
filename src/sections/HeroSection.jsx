import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 lg:pt-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={prefersReducedMotion ? {} : containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={prefersReducedMotion ? {} : itemVariants} className="space-y-4">
              <h1 className="text-display text-dark-900 dark:text-white text-balance">
                AKKE —{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                  Smart Command and Control Glove
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={prefersReducedMotion ? {} : itemVariants}
              className="text-xl sm:text-2xl text-dark-600 dark:text-dark-300 leading-relaxed text-balance max-w-2xl"
            >
              Silent, secure, real-time team communication for tactical operations.
            </motion.p>

            <motion.p
              variants={prefersReducedMotion ? {} : itemVariants}
              className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed text-balance max-w-2xl"
            >
              AKKE recognizes predefined hand gestures and transmits command IDs to a receiver unit using ESP-NOW wireless communication, enabling fast and silent team communication without requiring voice commands.
            </motion.p>

            <motion.div
              variants={prefersReducedMotion ? {} : itemVariants}
              className="flex justify-center"
            >
              <motion.button
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Device Mockup - Simplified */}
          <motion.div
            variants={prefersReducedMotion ? {} : imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end"
          >
            {/* Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Main Logo Image */}
            <motion.div
              className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="AKKE Logo Large"
                className="w-full h-full object-contain drop-shadow-2xl"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
