import type React from 'react'
import styles from './Heading.module.css'

type HeadgingProps = {
  children: React.ReactNode,
  attr: string
}

export function Heading({ children }:HeadgingProps) {
  return <h1 className={styles.heading}>{children}</h1>
  //return <h1 className={attr}>{children}</h1>
}
