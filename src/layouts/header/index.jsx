import React, { useEffect, useState } from 'react'
import "./index.scss"

const Header = () => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark');
    } else {
      setTheme('light')
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  return (
    <div className='header'>
        <div className="container">
        <h1>Where in the world?</h1>
        <button onClick={toggleTheme}> <i className="fa-regular fa-moon"></i> Dark Mode</button>
        </div>
    </div>
  )
}

export default Header