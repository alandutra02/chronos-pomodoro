import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { Botao } from '../Botao';
import { DefaultInput } from '../DefaultInput';
import { useTaskContext } from '../../contexts/TaskContext';

export function MainForm() {
  const {state} = useTaskContext()
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          type='text'
          placeholder='Digite algo'>
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