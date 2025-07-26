import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { Botao } from '../Botao';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
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
        <p>Lorem ipsum dolor sit amet.</p>
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