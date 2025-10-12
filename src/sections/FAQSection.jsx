import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import FAQItem from '../components/FAQItem'

const FAQSection = () => {
  const prefersReducedMotion = useReducedMotion()

  const faqs = [
    {
      question: 'What is SL-Glove?',
      answer: 'SL-Glove is a wearable smart glove and mobile application system designed to enable real-time, two-way communication between hearing-impaired and non-hearing individuals. It translates Turkish Sign Language (TID) gestures into text and natural voice during phone calls, and converts incoming speech into animated TID visuals on the user\'s screen.'
    },
    {
      question: 'How does SL-Glove recognize gestures?',
      answer: 'SL-Glove uses integrated motion, flex, and pressure sensors embedded within the glove to capture hand and finger movements. The data is processed by embedded microcontrollers and AI models trained on Turkish Sign Language datasets, achieving accurate real-time gesture recognition.'
    },
    {
      question: 'How does SL-Glove assist during phone calls?',
      answer: 'When a hearing-impaired user initiates a call through the app, SL-Glove translates their sign gestures into spoken words for the listener. When the other person speaks, SL-Glove processes the audio and displays the corresponding Turkish Sign Language animation on the user\'s screen, ensuring a seamless two-way conversation.'
    },
    {
      question: 'Is SL-Glove available in multiple languages?',
      answer: 'The first version focuses exclusively on Turkish Sign Language (TID). Future releases aim to support additional languages and international sign standards depending on user demand and available datasets.'
    },
    {
      question: 'How is user privacy protected?',
      answer: 'All user data, including gesture patterns and call translations, are encrypted and processed securely. SL-Glove adheres to GDPR-compliant data handling practices, ensuring no sensitive information is shared without explicit user consent.'
    },
    {
      question: 'Who can use SL-Glove?',
      answer: 'SL-Glove is designed for hearing-impaired or speech-impaired individuals, as well as educational institutions and healthcare professionals who work with sign language users. Its adjustable fit and modular design make it suitable for various age groups and hand sizes.'
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
            Find answers to the most common questions about SL-Glove. Can't find what you're looking for? Contact our support team.
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
