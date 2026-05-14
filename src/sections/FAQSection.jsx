import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import FAQItem from '../components/FAQItem'

const FAQSection = () => {
  const prefersReducedMotion = useReducedMotion()

  const faqs = [
    {
      question: 'What is AKKE?',
      answer:
        'AKKE, Smart Command and Control Glove, is a wearable hand-signal recognition system designed for silent and fast command communication. The system recognizes predefined hand gestures and sends the corresponding command to a receiver unit using ESP-NOW wireless communication.',
    },
    {
      question: 'How does gesture recognition work?',
      answer:
        'Flex sensors placed along the fingers and an MPU6050 IMU sensor collect finger-bending and hand-motion data. The ESP32 processes this sensor data, and the gesture recognition model maps the detected movement to a predefined command.',
    },
    {
      question: 'How are commands delivered to the team?',
      answer:
        'Commands are not transmitted as audio or FM radio signals. Instead, the glove sends a compact command ID to the receiver unit using ESP-NOW. The receiver ESP32 processes the incoming command ID, displays the command on an LCD screen, and plays the corresponding voice feedback through the DFPlayer Mini audio module.',
    },
    {
      question: 'What latency does AKKE achieve?',
      answer:
        'AKKE is designed for low-latency command transmission using ESP-NOW. Exact end-to-end latency values will be determined through system testing and reported after evaluation.',
    },
    {
      question: 'What is the operational range?',
      answer:
        'The operational range depends on ESP-NOW communication conditions, distance, obstacles, antenna placement, and the testing environment. The range will be evaluated through prototype testing instead of being claimed as a fixed value.',
    },
    {
      question: 'Is the communication secure?',
      answer:
        'The current prototype focuses on reliable ESP-NOW-based command transmission between the glove and the receiver unit. Additional security mechanisms, such as encryption or authentication, can be considered in future versions.',
    },
    {
      question: 'How many gestures are supported?',
      answer:
        'The current prototype focuses on at least five predefined commands: Stop, Hurry Up, Go Go, Come, and Stick Together. The gesture set can be expanded in future iterations by collecting more data and improving the recognition model.',
    },
    {
      question: 'Which environments is AKKE designed for?',
      answer:
        'AKKE is designed for situations where voice communication is difficult, risky, or impractical, such as tactical team coordination, search-and-rescue operations, and noisy industrial environments.',
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
