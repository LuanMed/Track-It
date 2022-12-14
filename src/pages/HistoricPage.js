import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HistoricPage() {
    return(
        <ContainerHistoric>
        <Header/>
        <Main>
            <h2>Histórico</h2>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Main>
        <Footer/>
        </ContainerHistoric>
    )
}

const ContainerHistoric = styled.div`
    display: flex;
    justify-content: center;
`

const Main = styled.main`
    max-width: 360px;
    margin-top: 70px;
    margin-bottom: 100px;
    padding-left: 15px;
    h2{
        font-size: 23px;
        color: #126BA5;
        margin-top: 28px;
        margin-bottom: 15px;
    }
    p{
        font-size: 18px;
        color: #666666;
    }
`