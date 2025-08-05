import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { Botao } from '../Botao';
import { DefaultInput } from '../DefaultInput';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';

export function MainForm() {
  const {state, setState} = useTaskContext()

  const taskNameInput = useRef<HTMLInputElement>(null) // aqui está o conteúdo do input chamdado Task

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    if(taskNameInput.current === null) return // o .current é o valor de texto do input. Se não tiver conteúdo ele retorna sem fazer nada

    const taskName = taskNameInput.current.value // o trim tira os espaços antes de depois da palavra
    
    if (!taskName) {
      alert('Digite o nome da tarefa')
      return // sai do componente
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: 'workTime'
    }

    const secondsRemaining = newTask.duration * 60

    setState(prevState => {
      return {
        ...prevState,
        config: {...prevState.config},
        activeTask: newTask,
        currentCycle: 1, // conferir,
        secondsRemaining, // não precisa por o valor porque esta é uma variável que já teve valor atribuído anteriormente 
        formattedSecondsRemaining: '00:00', // conferir
        tasks: [...prevState.tasks, newTask] // o valor de newTask é inserido dentro do array que foi copidado que é o prevState.tasks
      }
    })
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          ref={taskNameInput}>
            task
        </DefaultInput>
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de {state.config.workTime}min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <Botao>{<PlayCircleIcon />}</Botao>
      </div>
    </form>
  );
}