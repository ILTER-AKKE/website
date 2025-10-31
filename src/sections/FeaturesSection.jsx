import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import FeatureCard from '../components/FeatureCard'

const FeaturesSection = () => {
  const prefersReducedMotion = useReducedMotion()

  const features = [
    {
      icon: '👋',
      title: 'Real-time gesture recognition',
      description: 'Detects predefined hand signals instantly using flex and IMU sensors with on-device ML.',
    },
    {
      icon: '🤖',
      title: 'AI-based classification',
      description: 'On-board model classifies gestures and triggers the corresponding command category.',
    },
    {
      icon: '📱',
      title: 'No line-of-sight',
      description: 'Teams communicate without visual contact thanks to RF/FM transmission.',
    },
    {
      icon: '⚡',
      title: 'Low latency',
      description: 'Command delivery under 100 ms for real-time operations.',
    },
    {
      icon: '🔊',
      title: 'Audio notifications',
      description: 'Plays pre-recorded voice prompts from microSD and sends them to radios.',
    },
    {
      icon: '📡',
      title: 'Secure communications',
      description: 'Encrypted wireless channel; FM transmitter for broadcast to standard radios.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section id="features" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-heading text-dark-900 dark:text-white mb-6 text-balance">
            Key{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Features
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={prefersReducedMotion ? {} : {}}
              custom={index}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
