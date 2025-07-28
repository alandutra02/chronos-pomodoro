import { Container } from "../../components/Container";
import { MainTemplate } from '../../templates/MainTemplate';
import { CountDown } from "../../components/CountDown";
import { MainForm } from '../../components/MainForm';
import type { TaskStateModel } from "../../models/TaskStateModel";

type propsHome = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

export function Home(props: propsHome) {
    const { state, setState } = props
    return (
        <MainTemplate>
            <Container>
                <CountDown></CountDown>
            </Container>
        
            <Container>
                <MainForm></MainForm>
            </Container>
        </MainTemplate>
    )
}