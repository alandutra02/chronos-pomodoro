import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react'
import styles from './styles.module.css'
import React, { useState, useEffect } from 'react'

type AvailableThemes = 'dark' | 'light'

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark'
    return storageTheme
  })

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  }
  
  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault()
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
      return nextTheme
    })
  }

    /* useEffect(() => {
    console.log('useEffect sem dependências', Date.now())
    }) // executado toda vez que o componente renderiza na tela 
    
       useEffect(() => {
      console.log('useEffect com array de dependências vazio', Date.now())
      },[]) // Executa apenas quando o React monta o componente na tela pela primeira vez */
      
      useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
      },[theme]) // Executa apenas quando o valor de theme muda

  return (
    <nav className={styles.menu}>
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
        {nextThemeIcon[theme]}
      </a>
    </nav>
  )
}
