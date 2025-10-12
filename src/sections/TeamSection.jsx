import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import TeamCard from '../components/TeamCard'
import { teamMembers } from '../data/team'

const TeamSection = () => {
  const prefersReducedMotion = useReducedMotion()

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
    <section id="team" className="section-padding bg-gray-50 dark:bg-dark-800">
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
            Meet Our Team
          </motion.span>
          
          <h2 className="text-heading text-dark-900 dark:text-white mb-6 text-balance">
            The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Experts
            </span>{' '}
            Behind SL-Glove
          </h2>
          
          <p className="text-body text-dark-600 dark:text-dark-300 max-w-3xl mx-auto text-balance">
            Our diverse team of researchers, engineers, and designers is dedicated to revolutionizing education through innovative technology.
          </p>
        </motion.div>

        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={prefersReducedMotion ? {} : {}}
            >
              <TeamCard
                name={member.name}
                role={member.role}
                bio={member.bio}
                avatar={member.avatar}
                socialLinks={member.socialLinks}
                delay={index * 0.1}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
