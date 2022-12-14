import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/image/logo.png";

export default function LoginPage() {
    return (
        <ContainerLogin>
            <img src={logo} />
            <input
                placeholder="email"
            />
            <input
                placeholder="senha"
            />
            <Link to={'/habitos'}>
                <button>Entrar</button>
            </Link>
            <Link to={'/cadastro'}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </ContainerLogin>
    )
}

const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        margin-top: 70px;
        margin-bottom: 33px;
    }
    input{
        width: 303px;
        height: 45px;
        font-size: 20px;
        color: #D4D4D4;
        padding-left: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        &::placeholder{
            color: #DBDBDB;
        }
    }
    button{
        width: 303px;
        height: 45px;
        font-size: 21px;
        color: #FFFFFF;
        background-color: #52B6FF;
        border-radius: 5px;
        margin-bottom: 25px;
        cursor: pointer;
    }
    p{
        font-size: 14px;
        color: #52B6FF;
        text-decoration: underline;
        cursor: pointer;
    }
`