import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { DefaultInput } from "../../components/DefaultInput";
import { MainTemplate } from '../../templates/MainTemplate';
import { Botao } from "../../components/Botao";
import { SaveIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";


export function Settings() {
    useEffect(() => {
        document.title = 'Configurações - Chronos Pomodoro'
    }, [])
    const { state, dispatch } = useTaskContext()
    const workTimeInput = useRef<HTMLInputElement>(null)
    const shortBreakTimeInput = useRef<HTMLInputElement>(null)
    const longBreakTimeInput = useRef<HTMLInputElement>(null)

    function handleSaveSettigs(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        showMessage.dismiss()
        const formErrors = []
        
        const workTime = Number(workTimeInput.current?.value);
        const shortBreakTime = Number(shortBreakTimeInput.current?.value);
        const longBreakTime = Number(longBreakTimeInput.current?.value);

        if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
            formErrors.push('Digite apenas números para TODOS os campos')
        }
        
        if (workTime < 1 || workTime > 99) {
            formErrors.push('Digite valores entre 1 e 99 para foco')
        }

        if (shortBreakTime < 1 || shortBreakTime > 30) {
            formErrors.push('Digite valores entre 1 e 30 para descanso curto')
        }

        if (longBreakTime < 1 || longBreakTime > 60) {
            formErrors.push('Digite valores entre 1 e 60 para descanso curto')
        }
        
        if (formErrors.length > 0) {
            formErrors.map((error) => {
                showMessage.error(error)
            })
            return
        }

        dispatch({type: TaskActionTypes.CHANGE_SETTINGS, 
            payload: {
                workTime,
                shortBreakTime,
                longBreakTime
            },
        })
        showMessage.success('Configurações salvas')      
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <p style={{textAlign: 'center'}}>
                    Modifique as configurações para tempo de foco, descanso curto e
                     descanso longo
                </p>
            </Container>

            <Container>
                <form onSubmit={handleSaveSettigs} action="" className="form">
                    <div className="formRow">
                        <DefaultInput id='workTime' 
                        ref={workTimeInput}
                        defaultValue={state.config.workTime}
                        type="number"
                        >Foco
                        </DefaultInput>
                    </div>
                    <div className="formRow">
                        <DefaultInput 
                        id='shortBreakTime' 
                        ref={shortBreakTimeInput}
                        defaultValue={state.config.shortBreakTime}
                        type="number"
                        >Descanso curto
                        </DefaultInput>
                    </div>
                    <div className="formRow">
                        <DefaultInput id='longBreakTime' 
                        ref={longBreakTimeInput}
                        defaultValue={state.config.longBreakTime}
                        type="number"
                        >Descanso longo
                        </DefaultInput>
                    </div>
                    <div className="formRow">
                        <Botao
                            aria-label="Salvar configurações"
                            title="Salvar configurações">
                            {<SaveIcon/>}
                        </Botao>
                    </div>
                </form>
            </Container>

        </MainTemplate>
    )
}