import styles from './styles.module.css'

interface propsBotao extends React.ComponentProps<'button'> {
    //children: React.ReactNode;
    children: React.ReactNode
    color?: 'green' | 'red'
}

export function Botao({children, color='green', ...rest}: propsBotao) {
    return (
        <button className={`${styles.botao} ${styles[color]}`} {...rest}>
            {children}
        </button>
    )
}