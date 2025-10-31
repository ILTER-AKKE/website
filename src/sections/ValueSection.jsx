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
              <strong>Hardware</strong>: ESP32‑S3 microcontroller; PCM5102 I2S DAC; FM transmitter (KT0803L/QN8066); flex and IMU sensors; microSD storage; 3.7 V Li‑ion power.
            </p>
            <p>
              <strong>Software</strong>: On‑device ML gesture classifier; I2S digital audio pipeline (44.1 kHz, 16‑bit); encrypted wireless link; FM modulation for broadcast to standard radios.
            </p>
            <p>
              <strong>Use cases</strong>: Military operations, search‑and‑rescue, covert tasks, and loud industrial sites.
            </p>
            <p>
              <strong>Targets</strong>: 50+ gestures at 75–80% accuracy; 25 beta gloves; mobile app v1.0; under 100 ms end‑to‑end latency.
            </p>
            <p>
              <strong>Supporters</strong>: HAVELSAN SUIT Program, SAYZEK Projects, TED University.
            </p>
            <p>
              <strong>Technical</strong>: FM 88–108 MHz; 44.1 kHz sample rate; 16‑bit PCM WAV; I2S/I2C/SPI; 50+ m range with antenna optimization.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ValueSection
