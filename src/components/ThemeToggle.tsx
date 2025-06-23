import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check if we're in browser environment
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        setDarkMode(true)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement
      
      if (darkMode) {
        root.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        root.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }
  }, [darkMode])

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-gray-800 dark:text-white"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span className="text-lg">
          {darkMode ? '☀️' : '🌙'}
        </span>
        <span className="text-sm font-medium">
          {darkMode ? 'Light' : 'Dark'}
        </span>
      </button>
    </div>
  )
}