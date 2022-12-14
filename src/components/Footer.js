import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
    return (
        <ContainerFooter>
            <Link to={'/habitos'}>
                <button>Hábitos</button>
            </Link>

            <div>
                <Link to={'/hoje'}>
                    <button>Hoje</button>
                </Link>
            </div>

            <Link to={'/historico'}>
                <button>Histórico</button>
            </Link>
        </ContainerFooter>
    )
}

const ContainerFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 70px;
    background-color: #FFFFFF;
    button{
        color: #52B6FF;
        background-color: #FFFFFF;
        font-size: 18px;
        text-decoration-line: none;
        cursor: pointer;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        
        background-color: #52B6FF;
        width: 91px;
        height: 91px;
        border-radius: 50px;
        margin-bottom: 35px;
        button{
            font-size: 18px;
            color: #FFFFFF;
            background-color: #52B6FF; 
        }
    }
`