import styles from './styles.module.css'

type HeadgingProps = {
  children: React.ReactNode,
  //attr: string
}

export function Heading({ children }:HeadgingProps) {
  return <h1 className={styles.heading}>{children}</h1>
  //return <h1 className={attr}>{children}</h1>
}
