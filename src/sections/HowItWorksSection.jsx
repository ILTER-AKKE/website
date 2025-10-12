import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import Stepper from '../components/Stepper'

const HowItWorksSection = () => {
  const prefersReducedMotion = useReducedMotion()
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: 'Open App & Connect',
      description: 'Put on your SL-Glove and open the mobile application. The glove connects via Bluetooth 5.0 to your iOS or Android device instantly.',
      details: 'The wearable glove is equipped with motion, flex, and pressure sensors paired with an embedded microcontroller for real-time data processing.',
    },
    {
      title: 'Initiate Call',
      description: 'Select the contact you want to call from your app. The system initiates a voice call seamlessly through your phone network.',
      details: 'No special equipment needed for the other party - they receive a regular phone call and can speak normally.',
    },
    {
      title: 'Sign Language to Speech',
      description: 'Use Turkish Sign Language gestures with your glove. The AI model recognizes your signs, converts them to text, and synthesizes natural speech in real-time.',
      details: 'Machine learning models trained on TİD datasets translate approximately 50 gestures with 75-80% accuracy, continuously improving through use.',
    },
    {
      title: 'Speech to Animation',
      description: 'When the other person speaks, the app processes their voice and displays corresponding Turkish Sign Language animations on your screen.',
      details: 'Real-time audio processing ensures a seamless, two-way conversation experience with minimal latency.',
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
            Simple Process
          </motion.span>
          
          <h2 className="text-heading text-dark-900 dark:text-white mb-6 text-balance">
            How SL-Glove{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Works
            </span>
          </h2>
          
          <p className="text-body text-dark-600 dark:text-dark-300 max-w-3xl mx-auto text-balance">
            SL-Glove enables real-time, two-way communication during phone calls. Here's how the system works from connection to conversation.
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
            <Stepper steps={steps} currentStep={currentStep} />
          </motion.div>

          {/* Visual Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sticky top-24"
          >
            <div className="relative">
              {/* Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Main Demo Area */}
              <motion.div
                className="relative z-10 bg-white dark:bg-dark-900 rounded-3xl shadow-2xl p-8 lg:p-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step Indicator */}
                <div className="flex justify-center mb-8">
                  <div className="flex space-x-2">
                    {steps.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          index <= currentStep
                            ? 'bg-primary-600'
                            : 'bg-dark-200 dark:bg-dark-700'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => setCurrentStep(index)}
                      />
                    ))}
                  </div>
                </div>

                {/* Demo Content */}
                <div className="aspect-square bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6">
                  <motion.div
                    className="text-center text-white"
                    key={currentStep}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Step-specific icons */}
                    {currentStep === 0 && (
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                        </svg>
                        <p className="text-lg font-semibold">Glove Connected</p>
                      </motion.div>
                    )}
                    
                    {currentStep === 1 && (
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <p className="text-lg font-semibold">Call Initiated</p>
                      </motion.div>
                    )}
                    
                    {currentStep === 2 && (
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <p className="text-lg font-semibold">Translating Signs</p>
                      </motion.div>
                    )}
                    
                    {currentStep === 3 && (
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <p className="text-lg font-semibold">Speech Processing</p>
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Status Indicators */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-dark-600 dark:text-dark-300">Connection</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs text-green-600 dark:text-green-400">Connected</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-dark-600 dark:text-dark-300">Call Status</span>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${currentStep >= 1 ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`} />
                      <span className={`text-xs ${currentStep >= 1 ? 'text-green-600 dark:text-green-400' : 'text-gray-500'}`}>
                        {currentStep >= 1 ? 'Active' : 'Pending'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-dark-600 dark:text-dark-300">AI Translation</span>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${currentStep >= 2 ? 'bg-blue-500 animate-pulse' : 'bg-gray-300'}`} />
                      <span className={`text-xs ${currentStep >= 2 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500'}`}>
                        {currentStep >= 2 ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Auto-advance demo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium transition-colors duration-200"
            onClick={() => {
              const interval = setInterval(() => {
                setCurrentStep(prev => {
                  if (prev >= steps.length - 1) {
                    clearInterval(interval)
                    return 0
                  }
                  return prev + 1
                })
              }, 2000)
            }}
            whileHover={{ scale: 1.05 }}
          >
            ▶️ Auto-demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection
