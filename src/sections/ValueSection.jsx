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
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              SL Glove
            </span>
          </h2>
          
          <div className="space-y-6 text-body text-dark-600 dark:text-dark-300 leading-relaxed text-left">
            <p>
              This project aims to develop SL Glove, an AI-powered wearable system designed to enable real-time communication between hearing and speech-impaired individuals and others.
            </p>
            
            <p>
              Combining sensor-based gesture recognition with machine-learning-driven translation, SL Glove converts Turkish Sign Language (TİD) into text and natural speech through a mobile application, while also translating voice input back into visual animations for the user.
            </p>
            
            <p>
              The goal is to create an accessible, low-latency, and cost-effective communication solution that bridges the gap between sign language and spoken language.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ValueSection
