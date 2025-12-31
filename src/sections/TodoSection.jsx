import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { todos, getUniqueSprints, getTodosByStatus } from '../data/todos'

const TodoSection = () => {
  const prefersReducedMotion = useReducedMotion()
  const [selectedSprint, setSelectedSprint] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const sprints = ['All', ...getUniqueSprints()]
  const statuses = ['All', 'Completed', 'Pending']

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
      case 'Medium':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
      case 'Low':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
      case 'Pending':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
    }
  }

  const filteredTodos = todos.filter(todo => {
    const sprintMatch = selectedSprint === 'All' || todo.sprint === selectedSprint
    const statusMatch = selectedStatus === 'All' || todo.status === selectedStatus
    return sprintMatch && statusMatch
  })

  const stats = {
    total: todos.length,
    completed: getTodosByStatus('Completed').length,
    pending: getTodosByStatus('Pending').length
  }

  return (
    <section id="todos" className="section-padding bg-gray-50 dark:bg-dark-800">
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
            Project Management
          </motion.span>
          
          <h2 className="text-heading text-dark-900 dark:text-white mb-6 text-balance">
            Project{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Tasks
            </span>
          </h2>
          
          <p className="text-body text-dark-600 dark:text-dark-300 max-w-3xl mx-auto text-balance mb-8">
            Track project progress. View tasks by sprint and filter by status.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-900 rounded-lg px-6 py-4 shadow-md"
            >
              <div className="text-2xl font-bold text-dark-900 dark:text-white">{stats.total}</div>
              <div className="text-sm text-dark-600 dark:text-dark-400">Total Tasks</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-dark-900 rounded-lg px-6 py-4 shadow-md"
            >
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.completed}</div>
              <div className="text-sm text-dark-600 dark:text-dark-400">Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-dark-900 rounded-lg px-6 py-4 shadow-md"
            >
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{stats.pending}</div>
              <div className="text-sm text-dark-600 dark:text-dark-400">Pending</div>
            </motion.div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-dark-700 dark:text-dark-300">Sprint:</label>
              <select
                value={selectedSprint}
                onChange={(e) => setSelectedSprint(e.target.value)}
                className="px-4 py-2 bg-white dark:bg-dark-900 border border-gray-300 dark:border-dark-700 rounded-lg text-sm text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {sprints.map(sprint => (
                  <option key={sprint} value={sprint}>{sprint}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-dark-700 dark:text-dark-300">Status:</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 bg-white dark:bg-dark-900 border border-gray-300 dark:border-dark-700 rounded-lg text-sm text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Todo Cards */}
        <motion.div
          variants={prefersReducedMotion ? {} : {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {filteredTodos.map((todo, index) => (
            <motion.div
              key={todo.id}
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
              className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-700 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                      {todo.sprint}
                    </span>
                    <span className="text-xs text-dark-500 dark:text-dark-400">
                      {todo.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
                    {todo.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-dark-600 dark:text-dark-300 mb-4 flex-1 leading-relaxed">
                {todo.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(todo.priority)}`}>
                  {todo.priority}
                </span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(todo.status)}`}>
                  {todo.status}
                </span>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-gray-200 dark:border-dark-700">
                <div className="flex items-center justify-between text-xs text-dark-500 dark:text-dark-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {todo.responsible}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {todo.dueDate}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredTodos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-dark-600 dark:text-dark-400">
              No tasks found matching the selected filters.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default TodoSection

