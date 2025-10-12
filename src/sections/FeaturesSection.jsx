import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import FeatureCard from '../components/FeatureCard'

const FeaturesSection = () => {
  const prefersReducedMotion = useReducedMotion()

  const features = [
    {
      icon: '👋',
      title: 'Gesture recognition',
      description: 'SL Glove interprets intricate hand movements instantly using advanced sensors and AI-powered pattern recognition.',
    },
    {
      icon: '🤖',
      title: 'AI-based translation',
      description: 'Accurately converts sign language gestures to spoken words or text, streaming to your mobile in real time.',
    },
    {
      icon: '📱',
      title: 'Mobile integration',
      description: 'Seamless connectivity with Android and iOS devices enables accessible communication anytime and anywhere.',
    },
    {
      icon: '⚡',
      title: 'Real-time processing',
      description: 'Low-latency gesture recognition and translation for natural, uninterrupted conversations.',
    },
    {
      icon: '🔊',
      title: 'Voice feedback',
      description: 'Natural text-to-speech conversion provides clear audio output for seamless communication.',
    },
    {
      icon: '🔋',
      title: 'Battery life',
      description: 'Extended battery performance ensures all-day usage without frequent recharging.',
    },
    {
      icon: '📡',
      title: 'Connectivity',
      description: 'Reliable Bluetooth connection maintains stable communication between glove and mobile device.',
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
