import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/image/logo.png";
import { BASE_URL } from "../constants/urls";
import { ThreeDots } from  'react-loader-spinner';

export default function RegistrationPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function register(e) {
        e.preventDefault();
        setDisabled(true);

        const body = {
            email: email,
            name: name,
            image: (image ? image : 'https://www.lacazmartins.com.br/wp-content/uploads/2017/05/sem-foto-oficial.png'),
            password: password
        }

        axios.post(`${BASE_URL}/auth/sign-up`, body)
            .then(res => {
                navigate('/');
                setDisabled(false);
    
            })
            .catch(err => {
                setDisabled(false);
                alert(err.response.data.message);
            })

    }
    return (
        <ContainerLogin>
            <img src={logo} />
            <Form onSubmit={register}>
                <label htmlFor="email"></label>
                <input
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
                    id="password"
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    disabled={disabled}
                />
                <label htmlFor="name"></label>
                <input
                    id="name"
                    type="text"
                    placeholder="nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    disabled={disabled}
                />
                <label htmlFor="image"></label>
                <input
                    id="image"
                    type="url"
                    placeholder="foto"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    disabled={disabled}
                />
                <button type="submit" disabled={disabled}>{!disabled ? 'Cadastrar' : <ThreeDots color="#FFFFFF" width="70"/>}</button>
            </Form>
            <Link to={'/'}>
                <p>Já tem uma conta? Faça login!</p>
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
    justify-content: center;
    align-items: center;
    input{
        width: 303px;
        height: 45px;
        font-size: 20px;
        color: #D4D4D4;
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
`