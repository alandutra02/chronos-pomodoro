import { type ToastContentProps } from 'react-toastify';
import { Botao } from '../Botao';
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';

import styles from './styles.module.css';

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>

        <div className={styles.buttonsContainer}>
          <Botao
            onClick={() => closeToast(true)}
            aria-label='Confirmar ação e fechar'
            title='Confirmar ação e fechar'
            >
            {<ThumbsUpIcon />}
            </Botao>
          <Botao
            onClick={() => closeToast(false)}
            color='red'
            aria-label='Cancelar ação e fechar'
            title='Cancelar ação e fechar'
            >
            {<ThumbsDownIcon />}
            </Botao>
        </div>
      </div>
    </>
  );
}
