import styles from './styles.module.css'

interface propsContainer {
    children: React.ReactNode
}

export function Container(props: propsContainer) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <search>
                    {props.children}
                </search>
            </div>
        </div>
    )
}