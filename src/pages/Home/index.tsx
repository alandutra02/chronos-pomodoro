import { Container } from "../../components/Container";
import { MainTemplate } from "../../templates/MainTemplate";
import { CountDown } from "../../components/CountDown"

export function Home() {
    return (
        <MainTemplate>
            <Container>
                <CountDown></CountDown>
            </Container>
        </MainTemplate>
    )
}