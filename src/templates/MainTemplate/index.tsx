import { Container } from '../../components/Container'
import { Logo } from '../../components/Logo'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'


  interface propsMainTemplate {
    children: React.ReactNode   
    }
export function MainTemplate({children} : propsMainTemplate) {

  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
        {children}
      <Container>
        <Footer></Footer>
      </Container>
    </>
  )    
}
