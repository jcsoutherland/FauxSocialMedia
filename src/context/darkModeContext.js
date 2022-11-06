import { createContext, useEffect, useState } from 'react'

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false
  )

  const toggle = () => {
    if (!darkMode) {
      document.body.className = ''
      document.body.className += 'dark'
    } else {
      document.body.className = ''
      document.body.className += 'light'
    }
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  )
}
