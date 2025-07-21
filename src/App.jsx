import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { DefaultInput } from './components/DefaultInput'
import { Cycles } from './components/Cycles'
import { Botao } from './components/Botao'
import { CirclePlayIcon } from 'lucide-react'

import './styles/theme.css'
import './styles/global.css'

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown/>
      </Container>

      <Container>
        <form className='form' action="">
          <div className="formRow">
            <DefaultInput
              id='meuInput'
              type='text'
              placeholder='Digite a tarefa aqui'>
                task
              </DefaultInput>
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles></Cycles>
          </div>

          <div className="formRow">
            <Botao>{<CirclePlayIcon></CirclePlayIcon>}</Botao>
          </div>

        </form>
      </Container>

    </>
  )    
}
