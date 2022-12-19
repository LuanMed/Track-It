import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { PercentageContext } from "../context/PercentageContext";

export default function Footer() {
    const [percentage] = useContext(PercentageContext);

    return (
        <ContainerFooter data-test="menu">
            <Link to={'/habitos'}>
                <button data-test="habit-link">Hábitos</button>
            </Link>

            <div>
                <Link to={'/hoje'}>
                    <CircularProgressbar data-test="today"
                        value={percentage}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })} />
                </Link>
            </div>

            <Link to={'/historico'}>
                <button data-test="history-link">Histórico</button>
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