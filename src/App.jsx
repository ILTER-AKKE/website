import React from 'react'
import { motion } from 'framer-motion'

// Components
import Nav from './components/Nav'
import HeroSection from './sections/HeroSection'
import ValueSection from './sections/ValueSection'
import FeaturesSection from './sections/FeaturesSection'
import HowItWorksSection from './sections/HowItWorksSection'
import TeamSection from './sections/TeamSection'
import FAQSection from './sections/FAQSection'
import ReportsSection from './sections/ReportsSection'
import TodoSection from './sections/TodoSection'
import Footer from './components/Footer'

// Hooks
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()


  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <Nav theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <HeroSection />
        <ValueSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TeamSection />
        <FAQSection />
        <ReportsSection />
        <TodoSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
