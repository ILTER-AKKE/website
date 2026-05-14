import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import Stepper from '../components/Stepper'

const HowItWorksSection = () => {
  const prefersReducedMotion = useReducedMotion()

  const steps = [
    {
      title: 'Sense hand gestures',
      description:
        'Flex sensors and the MPU6050 IMU collect finger bending and hand motion data from the glove.',
    },
    {
      title: 'Classify the gesture',
      description:
        'The ESP32 processes sensor data and the Edge Impulse/TinyML model recognizes the performed gesture.',
    },
    {
      title: 'Generate command ID',
      description:
        'The recognized gesture is mapped to a compact command ID such as Stop, Come, Go Go, Hurry Up, or Stick Together.',
    },
    {
      title: 'Send via ESP-NOW',
      description:
        'The command ID is transmitted wirelessly from the glove ESP32 to the receiver ESP32 using ESP-NOW.',
    },
    {
      title: 'Process on receiver unit',
      description:
        'The receiver ESP32 reads the incoming command ID and determines the corresponding visual and audio feedback.',
    },
    {
      title: 'Display and play feedback',
      description:
        'The command is shown on the LCD screen and the related voice command is played through DFPlayer Mini using a speaker or headphone output.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <section id="how" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Glove → receiver pipeline
          </motion.span>
          
          <h2 className="text-heading text-dark-900 dark:text-white mb-6 text-balance">
            How AKKE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Works
            </span>
          </h2>
          
          <p className="text-body text-dark-600 dark:text-dark-300 max-w-3xl mx-auto text-balance">
            Sensor data on the glove becomes a compact command ID, sent over ESP-NOW to the receiver unit, which
            then drives the LCD and DFPlayer Mini audio output.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Steps */}
          <motion.div
            variants={prefersReducedMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <Stepper steps={steps} staticTimeline />
          </motion.div>

          {/* System status (hardware-oriented summary) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sticky top-24"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/15 to-primary-600/15 rounded-3xl blur-2xl" />

              <div className="relative z-10 bg-white dark:bg-dark-900 rounded-3xl shadow-xl border border-gray-200/80 dark:border-dark-700 p-8 lg:p-10">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-6">System Status</h3>
                <dl className="space-y-4 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 pb-4 border-b border-gray-100 dark:border-dark-700">
                    <dt className="text-sm font-medium text-dark-600 dark:text-dark-300">Glove Unit</dt>
                    <dd className="text-sm font-medium text-primary-600 dark:text-primary-400">Active</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 pb-4 border-b border-gray-100 dark:border-dark-700">
                    <dt className="text-sm font-medium text-dark-600 dark:text-dark-300">Receiver Unit</dt>
                    <dd className="text-sm font-medium text-dark-700 dark:text-dark-200">Waiting for Command</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 pb-4 border-b border-gray-100 dark:border-dark-700">
                    <dt className="text-sm font-medium text-dark-600 dark:text-dark-300">Communication</dt>
                    <dd className="text-sm font-medium text-dark-700 dark:text-dark-200">ESP-NOW</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                    <dt className="text-sm font-medium text-dark-600 dark:text-dark-300">Output</dt>
                    <dd className="text-sm font-medium text-dark-700 dark:text-dark-200">LCD + Audio Feedback</dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
