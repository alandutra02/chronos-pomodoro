import './styles/theme.css'
import './styles/global.css'
import {TimerIcon} from 'lucide-react'

import { Heading } from './components/Heading'

export function App() {
  return (
    <>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nisi? Reprehenderit vero esse accusantium officia accusamus porro atque quasi eaque rem quaerat? Quaerat enim vel, nesciunt aliquid consequuntur explicabo veritatis!</p>
    </>
  )    
}
