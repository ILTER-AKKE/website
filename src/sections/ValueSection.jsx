import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

const ValueSection = () => {
  const prefersReducedMotion = useReducedMotion()

  const values = [
    {
      icon: '🎯',
      title: 'Precision Learning',
      description: 'Advanced gesture recognition with 95% accuracy ensures every interaction is captured and translated into meaningful learning experiences.',
      features: ['Real-time gesture tracking', 'Adaptive learning algorithms', 'Instant feedback system']
    },
    {
      icon: '🤝',
      title: 'Interactive Experience',
      description: 'Transform passive learning into active engagement through haptic feedback and immersive gesture-based interactions.',
      features: ['Haptic feedback technology', 'Multi-sensory learning', 'Gamified interactions']
    },
    {
      icon: '🚀',
      title: 'Future-Ready',
      description: 'Built with cutting-edge technology that adapts to evolving educational needs and supports next-generation learning methods.',
      features: ['Scalable architecture', 'Cross-platform compatibility', 'Continuous updates']
    }
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-heading text-dark-900 dark:text-white mb-8 text-balance">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">AKKE</span>
          </h2>
          
          <div className="space-y-6 text-body text-dark-600 dark:text-dark-300 leading-relaxed text-left">
            <p>
              AKKE (Smart Command and Control Glove) is a wearable hand‑signal recognition system for silent, secure, real‑time team communication in tactical, rescue, and noisy industrial environments.
            </p>
            <p>
              <strong>Hardware</strong>: ESP32 microcontrollers, 5 flex sensors, MPU6050 IMU sensor, ESP-NOW wireless communication, DFPlayer Mini audio module, LCD display, speaker/headphone output, 9V battery, voltage regulator, and power switch.
            </p>
            <p>
              <strong>Software</strong>: Sensor data acquisition using C++/Arduino IDE, gesture recognition with Edge Impulse/TinyML, command ID generation, ESP-NOW communication, receiver-side command processing, LCD display control, and DFPlayer Mini audio playback.
            </p>
            <p>
              <strong>Use cases</strong>: Tactical team coordination, search-and-rescue operations, noisy industrial environments, and situations where silent or hands-free communication is required.
            </p>
            <p>
              <strong>Targets</strong>: Current prototype target: recognition and transmission of at least 5 predefined hand commands, reliable ESP-NOW communication between glove and receiver unit, LCD-based visual feedback, and audio feedback through DFPlayer Mini.
            </p>
            <p>
              <strong>Project</strong>: Developed as a senior design project at TED University.
            </p>
            <p>
              <strong>Technical</strong>: ESP32-based transmitter and receiver units; ESP-NOW wireless communication; 5 flex sensor inputs; MPU6050 IMU data through I2C; DFPlayer Mini audio playback through UART; LCD display through I2C; 9V battery with voltage regulation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ValueSection
