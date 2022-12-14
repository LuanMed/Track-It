import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function TodayPage() {
    return (
        <ContainerToday>
            <Header />
            <Main>
                <h2>Segunda, 17/05</h2>
                <p>Nenhum hábito concluído ainda</p>
                <Habits>
                    <h3>Ler 1 capítulo do livro</h3>
                    <p>Sequência atual: 3 dias <br/>
                    Seu recorde: 5 dias</p>
                    <ion-icon name="checkbox"></ion-icon>
                </Habits>
                <Habits>
                    <h3>Ler 1 capítulo do livro</h3>
                    <p>Sequência atual: 3 dias <br/>
                    Seu recorde: 5 dias</p>
                    <ion-icon name="checkbox"></ion-icon>
                </Habits>
                <Habits>
                    <h3>Ler 1 capítulo do livro</h3>
                    <p>Sequência atual: 3 dias <br/>
                    Seu recorde: 5 dias</p>
                    <ion-icon name="checkbox"></ion-icon>
                </Habits>
            </Main>
            <Footer />
        </ContainerToday>
    )
}

const ContainerToday = styled.div`
    display: flex;
    justify-content: center;
`

const Main = styled.main`
    max-width: 360px;
    margin-top: 70px;
    margin-bottom: 100px;
    h2{
        font-size: 23px;
        color: #126BA5;
        margin-top: 28px;
        margin-bottom: 5px;
    }
    p{
        font-size: 18px;
        color: #BABABA;
    }
`

const Habits = styled.div`
    position: relative;
    width: 330px;
    min-height: 91px;
    background-color: #FFFFFF;
    padding: 15px;
    margin-top: 10px;
    border-radius: 5px;
    h3{
        width: 250px;
        font-size: 20px;
        color: #666666;
        margin-bottom: 10px;
    }
    p{
        font-size: 13px;
        color: #666666;
    }
    ion-icon{
        position: absolute;
        top: 11px;
        right: 10px;
        font-size: 69px;
        color: #EBEBEB;
        cursor: pointer;
    }
`