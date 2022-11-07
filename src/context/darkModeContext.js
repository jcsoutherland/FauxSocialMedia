import { createContext, useEffect, useState } from 'react'
import $ from 'jquery'

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false
  )

  const toggle = () => {
    $(document.body).toggleClass('dark')
    $(document.body).toggleClass('light')

    setDarkMode(!darkMode)
  }

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
    if (darkMode) {
      $(document.body).addClass('dark')
    } else {
      $(document.body).addClass('light')
    }
  }, [darkMode])

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  )
}
