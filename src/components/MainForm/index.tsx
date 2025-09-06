import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { Botao } from '../Botao';
import { DefaultInput } from '../DefaultInput';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips';
import { showMessage } from '../../adapters/showMessage';
import styles from './styles.module.css'

export function MainForm() {
  const {state, dispatch} = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null) // aqui está o conteúdo do input chamdado Task
  const lastTaskName = state.tasks[state.tasks.length -1]?.name || ''

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)



  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    showMessage.dismiss() // não permite mensagem repetida. Tem que estar logo apos o event.preventDefault()
    
    if(taskNameInput.current === null) return // o .current é o valor de texto do input. Se não tiver conteúdo ele retorna sem fazer nada

    const taskName = taskNameInput.current.value // o trim tira os espaços antes de depois da palavra
    
    if (!taskName) {
      showMessage.warn('Digite o nome da tarefa')
      return // sai do componente
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType
    }

    dispatch({type: TaskActionTypes.START_TASK, payload: newTask})

    showMessage.success('Tarefa iniciada')
    
  }

  function handleInterruptTask() {
    showMessage.dismiss()
    showMessage.info('Tarefa interrompida')
   dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form} action=''>
      <div className={styles.formRow}>
        <DefaultInput
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          ref={taskNameInput}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}>  
            task
        </DefaultInput>
      </div>

      <div className={styles.formRow}>
        <Tips />

        {/* <p>Próximo intervalo é de {state.config[nextCycleType]}min</p> */}
      </div>

      {state.currentCycle > 0 && (
      <div className={styles.formRow}>
        <Cycles />
      </div>
      )}

      <div className={styles.formRow}>
        {!state.activeTask && (
          <Botao 
          aria-label='Iniciar nova tarefa'
          title='Iniciar nova tarefa'
          type='submit'
          key='botao_submit'>
            {<PlayCircleIcon />}
          </Botao>
        )}
        {state.activeTask && (
          <Botao 
          aria-label='Interromper tarefa atual'
          title='Interromper tarefa atual'
          type='button' // se for submmit ele vai enviar o formulário novamente, o que não deve acontecer
          color='red'
          onClick={handleInterruptTask}
          key='botao_button'>
            {<StopCircleIcon />}
          </Botao>
        )}
      </div>
    </form>
  );
}