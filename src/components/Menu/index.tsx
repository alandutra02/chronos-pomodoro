import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import React, { useState } from 'react'

type AvailableThemes = 'dark' | 'light'

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark')
  
  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault()
    console.log('Clicado', Date.now())
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
      return nextTheme
    })
    document.documentElement.setAttribute('data-theme', theme)
  }

  
  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a 
        className={styles.menuLink} 
        href="#"
        aria-label={theme}
        title='Ir para Home'
        >
        <HouseIcon/>
      </a>
      <a 
        className={styles.menuLink} 
        href="#"
        aria-label='Ver Histórico'
        title='Ver Histórico'
        >
        <HistoryIcon/>
      </a>
      <a 
        className={styles.menuLink} href="#"
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon/>
      </a>
      <a 
        className={styles.menuLink} 
        href="#"
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={(event) => handleThemeChange(event)}
        >
        <SunIcon/>
      </a>
    </nav>
  )
}
