import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import FAQItem from '../components/FAQItem'

const FAQSection = () => {
  const prefersReducedMotion = useReducedMotion()

  const faqs = [
    {
      question: 'How does SL-Glove recognize gestures?',
      answer: 'SL-Glove uses advanced computer vision algorithms and machine learning to analyze hand movements captured by integrated sensors. The system is trained on thousands of gesture patterns and continuously improves accuracy through user interaction.'
    },
    {
      question: 'What devices are compatible with SL-Glove?',
      answer: 'SL-Glove is compatible with Windows, macOS, iOS, and Android devices. It connects via Bluetooth 5.0 or USB-C for seamless integration with your existing setup. Minimum system requirements include Bluetooth 4.0+ or USB 3.0+.'
    },
    {
      question: 'How long does the battery last?',
      answer: 'SL-Glove provides up to 8 hours of continuous use on a single charge. The device includes fast-charging capabilities, reaching 80% charge in just 30 minutes. Battery life may vary based on usage intensity and gesture complexity.'
    },
    {
      question: 'Is SL-Glove suitable for all ages?',
      answer: 'Yes! SL-Glove is designed for learners of all ages, from children as young as 6 to adult learners. The system includes adjustable sensitivity settings and age-appropriate content libraries to ensure optimal learning experiences for different user groups.'
    },
    {
      question: 'What learning subjects are supported?',
      answer: 'SL-Glove supports a wide range of subjects including mathematics, science, language learning, history, geography, and art. The platform includes pre-built lesson libraries and allows educators to create custom content tailored to their curriculum needs.'
    },
    {
      question: 'How accurate is the gesture recognition?',
      answer: 'SL-Glove achieves 95%+ accuracy in gesture recognition under normal usage conditions. The system uses advanced AI algorithms that adapt to individual users, improving accuracy over time as it learns each person\'s unique hand movements and patterns.'
    },
    {
      question: 'Can multiple users use the same glove?',
      answer: 'Yes, SL-Glove supports multiple user profiles. Each user can have their own personalized settings, learning progress, and gesture calibrations. The system automatically switches between users based on hand size and movement patterns.'
    },
    {
      question: 'What kind of haptic feedback does it provide?',
      answer: 'SL-Glove features precise haptic feedback through advanced vibration motors and pressure sensors. Users receive tactile responses for correct gestures, gentle corrections for mistakes, and directional guidance for complex movements.'
    },
    {
      question: 'Is there technical support available?',
      answer: 'Yes, we provide comprehensive technical support through multiple channels including email, live chat, and video calls. Our support team is available Monday-Friday 9 AM-6 PM EST, with extended hours during peak usage periods.'
    },
    {
      question: 'What is the warranty and return policy?',
      answer: 'SL-Glove comes with a 2-year manufacturer warranty covering hardware defects and malfunctions. We offer a 30-day money-back guarantee if you\'re not satisfied with your purchase. Returns are free and easy through our online portal.'
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

        {/* Contact Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 lg:p-12">
            <motion.div
              className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </motion.div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Still Have Questions?
            </h3>
            
            <p className="text-body text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto">
              Our support team is here to help! Get in touch with us for personalized assistance with SL-Glove.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Support
              </motion.button>
              
              <motion.button
                className="btn-secondary text-lg px-8 py-4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('#', '_blank')}
              >
                Documentation
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Setup Guide',
                description: 'Step-by-step instructions to get started',
                icon: '📖',
                link: '#'
              },
              {
                title: 'User Manual',
                description: 'Comprehensive guide to all features',
                icon: '📋',
                link: '#'
              },
              {
                title: 'Video Tutorials',
                description: 'Watch our video learning series',
                icon: '🎥',
                link: '#'
              }
            ].map((resource, index) => (
              <motion.a
                key={resource.title}
                href={resource.link}
                className="block p-6 bg-white dark:bg-dark-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>
                <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
                  {resource.title}
                </h4>
                <p className="text-dark-600 dark:text-dark-300 text-sm">
                  {resource.description}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
