import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import FAQItem from '../components/FAQItem'

const FAQSection = () => {
  const prefersReducedMotion = useReducedMotion()

  const faqs = [
    {
      question: 'What is AKKE?',
      answer: 'AKKE (Smart Command and Control Glove) is a wearable hand‑signal recognition system enabling silent, secure, real‑time team communication for tactical, rescue, and industrial operations.'
    },
    {
      question: 'How does gesture recognition work?',
      answer: 'Flex and IMU sensors capture finger bends and motion. An on‑device ML model on ESP32‑S3 classifies gestures and maps them to predefined commands.'
    },
    {
      question: 'How are commands delivered to the team?',
      answer: 'The system plays a corresponding audio prompt from microSD, outputs I2S digital audio to a PCM5102 DAC, and feeds an FM transmitter for RF broadcast to standard radios.'
    },
    {
      question: 'What latency does AKKE achieve?',
      answer: 'End‑to‑end latency is targeted under 100 ms from gesture to audio broadcast.'
    },
    {
      question: 'What is the operational range?',
      answer: 'With antenna optimization, range exceeds 50 meters in typical environments.'
    },
    {
      question: 'Is the communication secure?',
      answer: 'AKKE uses an encrypted wireless channel for device communications and FM broadcast for team radios. Sensitive data remains on‑device.'
    },
    {
      question: 'How many gestures are supported?',
      answer: 'The target is 50+ gestures at 75–80% accuracy, expandable over time with new data.'
    },
    {
      question: 'Which environments is AKKE designed for?',
      answer: 'Military operations, search‑and‑rescue, covert missions, and loud industrial sites where speech is impractical or risky.'
    }
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
    <section id="faq" className="section-padding">
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
            Frequently Asked Questions
          </motion.span>
          
          <h2 className="text-heading text-dark-900 dark:text-white mb-6 text-balance">
            Got{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Questions?
            </span>{' '}
            We Have Answers
          </h2>
          
          <p className="text-body text-dark-600 dark:text-dark-300 max-w-3xl mx-auto text-balance">
            Find answers to the most common questions about AKKE. Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={prefersReducedMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="bg-white dark:bg-dark-900 rounded-2xl shadow-lg overflow-hidden"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                variants={prefersReducedMotion ? {} : {}}
              >
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default FAQSection
