import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/image/logo.png";
import { BASE_URL } from "../constants/urls";
import { ThreeDots } from 'react-loader-spinner';
import axios from "axios";
import { UserInfoContext } from "../context/UserInfoContext";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useContext(UserInfoContext);

    function login(e) {
        e.preventDefault();
        setDisabled(true);

        const body = {
            email: email,
            password: password
        }

        axios.post(`${BASE_URL}/auth/login`, body)
            .then(res => {
                navigate('/hoje');
                setDisabled(false);
                setUserInfo(res.data);
            })
            .catch(err => {
                setDisabled(false);
                setPassword("");
                alert(err.response.data.message);
            })
    }

    return (
        <ContainerLogin>
            <img src={logo} />
            <Form onSubmit={login}>
                <label htmlFor="email"></label>
                <input
                    data-test="email-input"
                    id="email"
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    disabled={disabled}
                />
                <label htmlFor="password"></label>
                <input
                    data-test="password-input"
                    id="password"
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    disabled={disabled}
                />
                <button
                    data-test="login-btn"
                    type="submit"
                    disabled={disabled}>
                    {!disabled ? 'Entrar' : <ThreeDots color="#FFFFFF" width="70" />}
                </button>
            </Form>
            <Link to={'/cadastro'}>
                <p data-test="signup-link">N??o tem uma conta? Cadastre-se!</p>
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
        color: #A4A4A4;
        padding-left: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        outline: none;
        &::placeholder{
            color: #DBDBDB;
        }
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
`