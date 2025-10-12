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
                Turning Silence Into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                  Sound
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={prefersReducedMotion ? {} : itemVariants}
              className="text-xl sm:text-2xl text-dark-600 dark:text-dark-300 leading-relaxed text-balance max-w-2xl"
            >
              Real-Time Communication Through Sign Language.
            </motion.p>

            <motion.p
              variants={prefersReducedMotion ? {} : itemVariants}
              className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed text-balance max-w-2xl"
            >
              SL Glove is an AI-powered wearable and mobile system that makes phone conversations accessible for hearing- and speech-impaired individuals.
            </motion.p>

            <motion.div
              variants={prefersReducedMotion ? {} : itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </motion.button>
              
              <motion.button
                className="btn-secondary text-lg px-8 py-4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Device Mockup */}
          <motion.div
            variants={prefersReducedMotion ? {} : imageVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Background Elements */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-3xl blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Main Device */}
            <motion.div
              className="relative z-10 bg-gradient-to-br from-white to-gray-50 dark:from-dark-800 dark:to-dark-900 rounded-3xl shadow-2xl p-8"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glove Display */}
              <div className="aspect-square bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6">
                <motion.div
                  className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </motion.div>
              </div>
              
              {/* Status Indicators */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-dark-600 dark:text-dark-300">Gesture Recognition</span>
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-dark-600 dark:text-dark-300">Haptic Feedback</span>
                  <motion.div
                    className="w-3 h-3 bg-blue-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-dark-600 dark:text-dark-300">Learning Mode</span>
                  <motion.div
                    className="w-3 h-3 bg-purple-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
