import { Container } from "../../components/Container";
import { MainTemplate } from '../../templates/MainTemplate';
import { CountDown } from "../../components/CountDown";
import { MainForm } from '../../components/MainForm';
import { useEffect } from "react";

export function Home() {
    useEffect(() => {
        document.title = 'Chronos Pomodoro'
    }, [])

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