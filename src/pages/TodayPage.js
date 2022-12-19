import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Date from "../components/Date";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BASE_URL } from "../constants/urls";
import { UserInfoContext } from "../context/UserInfoContext";
import { ThreeDots } from 'react-loader-spinner';
import { PercentageContext } from "../context/PercentageContext";

export default function TodayPage() {
    const [userInfo] = useContext(UserInfoContext);
    const [habits, setHabits] = useState(undefined);
    const [changed, setChanged] = useState([]);
    const [percentage, setPercentage] = useContext(PercentageContext);

    const config = {
        headers: {
            "Authorization": `Bearer ${userInfo.token}`
        }
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/habits/today`, config)
            .then(res => {
                console.log(res.data);
                setHabits(res.data);
                const completed = res.data.filter((habit) => habit.done == true);
                setPercentage(Math.round(completed.length / res.data.length * 100));
            })
            .catch(err => alert(err.response.data.message));
    }, [changed])

    function checkHabit(id, done) {
        const body = {};

        if (!done) {
            axios.post(`${BASE_URL}/habits/${id}/check`, body, config)
                .then(res => {
                    console.log(res.data);
                    setChanged([...changed, 1]);
                })
                .catch(err => console.log(err.response.data.message))
        } else {
            axios.post(`${BASE_URL}/habits/${id}/uncheck`, body, config)
                .then(res => {
                    console.log(res.data);
                    setChanged([...changed, -1]);
                })
                .catch(err => console.log(err.response.data.message))
        }
    }

    return (
        <ContainerToday>
            <Header />
            <Main>
                <Title>
                    <Date />
                    <p>
                        {percentage == 0 ?
                            'Nenhum hábito concluído ainda' :
                            <span>{percentage}% dos hábitos concluídos</span>
                        }
                    </p>

                </Title>
                {habits == undefined ? <ThreeDots color="#52b6ff" width="100" /> :
                    <>
                        {habits.map(h =>
                            <Habits data-test="today-habit-container" key={h.id} done={h.done}>
                                <h3 data-test="today-habit-name">{h.name}</h3>
                                <p>Sequência atual: <Current data-test="today-habit-sequence" done={h.done}>{h.currentSequence} {h.currentSequence !== 1 ? "dias" : "dia"} </Current></p>
                                <p>Seu recorde: <Record data-test="today-habit-record" id={h.id} done={h.done} current={h.currentSequence} highest={h.highestSequence}>{h.highestSequence} {h.highestSequence !== 1 ? "dias" : "dia"}</Record></p>
                                <ion-icon data-test="today-habit-check-btn" onClick={() => checkHabit(h.id, h.done)} name="checkbox"></ion-icon>
                            </Habits>
                        )}
                    </>}
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
display: flex;
flex-direction: column;
align-items: center;
    max-width: 360px;
    width: 330px;
    margin-top: 70px;
    margin-bottom: 100px;
`

const Title = styled.div`
    width: 330px;
    margin-bottom: 15px;
    h2{
        font-size: 23px;
        color: #126BA5;
        margin-top: 28px;
        margin-bottom: 8px;
    }
    p{
        font-size: 18px;
        color: #BABABA;
    }
    span{
        color: #8FC549;
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
        color: ${props => props.done ? '#8FC549' : '#EBEBEB'};
        cursor: pointer;
    }
`

const Current = styled.span`
    color: ${props => props.done ? '#8FC549' : '#666666'};
`

const Record = styled.span`
    color: ${props => props.current == props.highest && props.done ? '#8FC549' : '#666666'};
`