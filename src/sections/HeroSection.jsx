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
              className="flex justify-center sm:justify-start gap-4 flex-wrap"
            >
              <motion.a
                href="https://github.com/ILTER-AKKE/AKKE-Smart-Command-Control-Glove.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Go to Repo
              </motion.a>
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
