import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import VideoCard from '../components/VideoCard'

const DemoSection = () => {
  const prefersReducedMotion = useReducedMotion()

  const demos = [
    {
      title: 'Gesture Recognition Demo',
      description: 'Watch how SL-Glove accurately recognizes and responds to various hand gestures in real-time, providing instant feedback for learning activities.',
      thumbnail: '/api/placeholder/600/400',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      externalLink: '#'
    },
    {
      title: 'Learning in Action',
      description: 'See how students use SL-Glove for interactive lessons, from language learning to mathematics, with haptic feedback enhancing comprehension.',
      thumbnail: '/api/placeholder/600/400',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      externalLink: '#'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
    <section id="demo" className="section-padding">
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
            See It In Action
          </motion.span>
          
          <h2 className="text-heading text-dark-900 dark:text-white mb-6 text-balance">
            Experience{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              SL-Glove
            </span>{' '}
            in Action
          </h2>
          
          <p className="text-body text-dark-600 dark:text-dark-300 max-w-3xl mx-auto text-balance">
            Watch our comprehensive demos to see how SL-Glove transforms learning through gesture recognition and haptic feedback technology.
          </p>
        </motion.div>

        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {demos.map((demo, index) => (
            <motion.div
              key={demo.title}
              variants={prefersReducedMotion ? {} : itemVariants}
            >
              <VideoCard
                title={demo.title}
                description={demo.description}
                thumbnail={demo.thumbnail}
                videoUrl={demo.videoUrl}
                externalLink={demo.externalLink}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 lg:mt-24"
        >
          <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Try It Yourself
              </h3>
              
              <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
                Ready to experience SL-Glove? Try our interactive demo or schedule a personalized demonstration with our team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('#', '_blank')}
                >
                  Interactive Demo
                </motion.button>
                
                <motion.button
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-full"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            <motion.div
              className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>

        {/* Features Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 lg:mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Real-time Response',
                description: 'Instant feedback with <50ms latency for seamless interaction'
              },
              {
                icon: '🎯',
                title: 'High Accuracy',
                description: '95%+ gesture recognition accuracy across all supported gestures'
              },
              {
                icon: '🔋',
                title: 'Long Battery Life',
                description: 'Up to 8 hours of continuous use on a single charge'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>
                <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-dark-600 dark:text-dark-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DemoSection
