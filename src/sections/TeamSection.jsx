import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import TeamCard from '../components/TeamCard'
import { teamMembers, supervisor, juries } from '../data/team'

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

       {/* Supervisor & Juries */}
       <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8, delay: 0.3 }}
         className="mt-16 lg:mt-20"
       >
         <h3 className="text-2xl lg:text-3xl font-bold text-dark-900 dark:text-white text-center mb-12">
           Supervisor & Juries
         </h3>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
           {/* First Jury */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
           >
             <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
               </svg>
             </div>
             <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-1">
               {juries[0].name}
             </h4>
             <p className="text-sm text-primary-600 dark:text-primary-400">
               {juries[0].role}
             </p>
           </motion.div>

           {/* Supervisor (Center) */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-2 border-primary-600"
           >
             <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
               </svg>
             </div>
             <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-1">
               {supervisor.name}
             </h4>
             <p className="text-sm text-primary-600 dark:text-primary-400">
               {supervisor.role}
             </p>
           </motion.div>

           {/* Second Jury */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
           >
             <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
               </svg>
             </div>
             <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-1">
               {juries[1].name}
             </h4>
             <p className="text-sm text-primary-600 dark:text-primary-400">
               {juries[1].role}
             </p>
           </motion.div>
         </div>
       </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
