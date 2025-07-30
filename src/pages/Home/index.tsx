import { Container } from "../../components/Container";
import { MainTemplate } from '../../templates/MainTemplate';
import { CountDown } from "../../components/CountDown";
import { MainForm } from '../../components/MainForm';

export function Home() {

    return (
        <MainTemplate>
            <Container>
                <CountDown>
                </CountDown>
            </Container>
        
            <Container>
                <MainForm>
                </MainForm>
            </Container>
        </MainTemplate>
    )
}