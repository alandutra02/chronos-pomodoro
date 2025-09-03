//criação de um padrão de projeto chamado ADAPTER, que vai servir para receber uma biblioteca externa e centralizar a chamada dela aqui. Os componentes diversos que precisarem desta biblioteca vão chamar este adapter, assim se a biblioteca sofrer alguma alteração de seus desenvolvedores, nós precisaremos mudar apenas neste arquivo aqui ao invés de ter que mudar em todos os componentes que forem utilizar a biblioteca.

import { toast } from "react-toastify";

export const showMessage = {
    success: (msg: string) => toast.success(msg),
    error: (msg: string) => toast.error(msg),
    warn: (msg: string) => toast.warn(msg),
    warning: (msg: string) => toast.warning(msg),
    info: (msg: string) => toast.info(msg),
    dismiss: () => toast.dismiss(), // remove todas as mensagens repetidas da tela
}