import React, { useState } from 'react'
import { motion } from 'framer-motion'

const VideoCard = ({ title, description, thumbnail, videoUrl, externalLink }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="card p-6 lg:p-8"
    >
      <div className="aspect-video rounded-xl overflow-hidden bg-dark-100 dark:bg-dark-800 relative mb-6">
        {!isPlaying ? (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700"
            whileHover={{ scale: 1.02 }}
          >
            <motion.button
              onClick={handlePlay}
              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.button>
          </motion.div>
        ) : (
          <iframe
            src={videoUrl}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        
        {/* Video Thumbnail Overlay */}
        {thumbnail && !isPlaying && (
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${thumbnail})` }}>
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="text-heading text-dark-900 dark:text-white">
          {title}
        </h3>
        
        <p className="text-body text-dark-600 dark:text-dark-300">
          {description}
        </p>

        {externalLink && (
          <motion.a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
            whileHover={{ x: 4 }}
          >
            View Full Demo
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}

export default VideoCard
