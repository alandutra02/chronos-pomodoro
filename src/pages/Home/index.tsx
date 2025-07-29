import { Container } from "../../components/Container";
import { MainTemplate } from '../../templates/MainTemplate';
import { CountDown } from "../../components/CountDown";
import { MainForm } from '../../components/MainForm';
import type { TaskStateModel } from "../../models/TaskStateModel";
import { Botao } from "../../components/Botao";

type propsHome = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

export function Home(props: propsHome) {
    const { state, setState } = props

function handleClick() {
    console.log('Botão clicado')
    setState(prevState => {
        return {
            ...prevState,
            currentCycle: 5
        }
    })
}

    return (
        <MainTemplate>
            <Container>
                <Botao onClick={handleClick}>
                    Clicar
                </Botao>
            </Container>
            <Container>
                <CountDown></CountDown>
            </Container>
        
            <Container>
                <MainForm></MainForm>
            </Container>
        </MainTemplate>
    )
}