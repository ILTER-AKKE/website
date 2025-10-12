import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

const ContactSection = () => {
  const prefersReducedMotion = useReducedMotion()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      
      // Create mailto link for demo purposes
      const subject = `SL-Glove Inquiry from ${formData.name}`
      const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Interest: ${formData.interest}
Message: ${formData.message}`
      
      const mailtoLink = `mailto:contact@sl-glove.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.open(mailtoLink)
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        interest: 'general'
      })
      
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 2000)
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Get in touch via email for general inquiries',
      contact: 'contact@sl-glove.com',
      action: 'mailto:contact@sl-glove.com'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available 9 AM - 6 PM EST',
      action: '#'
    },
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Speak directly with our team',
      contact: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
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
    <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-800">
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
            Get In Touch
          </motion.span>
          
          <h2 className="text-heading text-dark-900 dark:text-white mb-6 text-balance">
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Get Started?
            </span>
          </h2>
          
          <p className="text-body text-dark-600 dark:text-dark-300 max-w-3xl mx-auto text-balance">
            Have questions about SL-Glove? Want to schedule a demo? We'd love to hear from you and help you revolutionize your learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            variants={prefersReducedMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div
              variants={prefersReducedMotion ? {} : itemVariants}
              className="bg-white dark:bg-dark-900 rounded-2xl shadow-lg p-8 lg:p-10"
            >
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-600 rounded-lg text-dark-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-600 rounded-lg text-dark-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-600 rounded-lg text-dark-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your company or school"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-600 rounded-lg text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="general">General Information</option>
                    <option value="demo">Schedule a Demo</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="support">Technical Support</option>
                    <option value="media">Media Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-600 rounded-lg text-dark-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us about your needs and how we can help..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg"
                  >
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      ✅ Thank you! Your message has been sent. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={prefersReducedMotion ? {} : containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                variants={prefersReducedMotion ? {} : itemVariants}
                whileHover={{ x: 8 }}
                className="flex items-start space-x-4 p-6 bg-white dark:bg-dark-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="text-3xl flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {method.icon}
                </motion.div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
                    {method.title}
                  </h4>
                  <p className="text-dark-600 dark:text-dark-300 text-sm mb-2">
                    {method.description}
                  </p>
                  <a
                    href={method.action}
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors duration-200"
                  >
                    {method.contact}
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Office Information */}
            <motion.div
              variants={prefersReducedMotion ? {} : itemVariants}
              className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white"
            >
              <h4 className="text-xl font-bold mb-4">Visit Our Office</h4>
              <div className="space-y-2 text-primary-100">
                <p>123 Innovation Drive</p>
                <p>Tech Valley, CA 94043</p>
                <p>United States</p>
              </div>
              <motion.button
                className="mt-4 text-sm bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://maps.google.com', '_blank')}
              >
                Get Directions
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
