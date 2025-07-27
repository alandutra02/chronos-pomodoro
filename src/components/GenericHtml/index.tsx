import styles from './styles.module.css'

interface propsGenericHtml {
    children: React.ReactNode
}

export function GenericHtml({children} : propsGenericHtml) {
    return <div className={styles.genericHtml}>
        {children}
    </div>
}