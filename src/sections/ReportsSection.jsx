import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

const ReportsSection = () => {
  const prefersReducedMotion = useReducedMotion()

  const reports = [
    {
      id: 1,
      title: 'Project Proposal',
      description: 'Initial project proposal document outlining the AKKE system architecture, objectives, and implementation plan.',
      fileName: 'CMPE491_AKKE_Project_Proposal.pdf',
      date: '2025',
      type: 'Proposal'
    },
    {
      id: 2,
      title: 'Project Specification',
      description: 'Detailed project specification report covering system requirements, design specifications, and technical implementation details.',
      fileName: 'CMPE491_AKKE_Project_Specification_Report.pdf',
      date: '2025',
      type: 'Specification'
    },
    {
      id: 3,
      title: 'Analysis Report',
      description: 'Comprehensive analysis report including system analysis, performance evaluation, and detailed technical assessments of the AKKE project.',
      fileName: 'CMPE491_AKKE_Analysis_Report.pdf',
      date: '2025',
      type: 'Analysis'
    },
    {
      id: 4,
      title: 'High Level Design Report',
      description: 'High-level design document covering system architecture, component design, interface specifications, and overall system structure of the AKKE project.',
      fileName: 'CMPE491_AKKE_High_Level_Design_Report.pdf',
      date: '2025',
      type: 'Design'
    }
  ]

  const handleView = (fileName) => {
    // Use Vite's base URL for both dev and production
    const baseUrl = import.meta.env.BASE_URL || '/website/'
    const fileUrl = `${baseUrl}${fileName}`
    window.open(fileUrl, '_blank')
  }

  return (
    <section id="reports" className="section-padding bg-white dark:bg-dark-900">
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
            Documentation
          </motion.span>
          
          <h2 className="text-heading text-dark-900 dark:text-white mb-6 text-balance">
            Project{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Reports
            </span>
          </h2>
          
          <p className="text-body text-dark-600 dark:text-dark-300 max-w-3xl mx-auto text-balance">
            Access project documentation, proposals, and technical reports related to the AKKE system.
          </p>
        </motion.div>

        <motion.div
          variants={prefersReducedMotion ? {} : {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {reports.map((report, index) => (
            <motion.div
              key={report.id}
              variants={prefersReducedMotion ? {} : {
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: 'easeOut',
                  },
                },
              }}
              className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-700 flex flex-col"
            >
              {/* PDF Icon */}
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Report Info */}
              <div className="flex-1 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs font-medium">
                    {report.type}
                  </span>
                  <span className="text-xs text-dark-500 dark:text-dark-400">
                    {report.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
                  {report.title}
                </h3>
                <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed">
                  {report.description}
                </p>
              </div>

              {/* View Button */}
              <motion.button
                onClick={() => handleView(report.fileName)}
                className="w-full px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View PDF
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ReportsSection

