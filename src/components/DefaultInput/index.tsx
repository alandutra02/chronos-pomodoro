import styles from './styles.module.css'

type propsDefaultInput = {
    id: string;
    children?: React.ReactNode;
} & React.ComponentProps<'input'>; // neste caso estamos usando as propriedades padrão do componente type juntamente com o que criamos do tipo text, number e search. Isso é possível com o React.ComponentProps<>. O React.ComponentProps<> não é possível ser usado com interface. 

export function DefaultInput({ children, type, id, ...rest }: propsDefaultInput) {
    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input className={styles.input} id={id} type={type} {...rest}/>
        </>
    )
}
