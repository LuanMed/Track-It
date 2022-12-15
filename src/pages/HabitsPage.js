import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import { UserInfoContext } from "../UserInfoContext";
import { DAYS } from "../constants/days";
import { BASE_URL } from "../constants/urls";
import { ThreeDots } from 'react-loader-spinner';
import axios from "axios";

export default function HabitsPage() {
    const [displayAdd, setDisplayAdd] = useState('none');
    const [userInfo] = useContext(UserInfoContext)
    const [habitName, setHabitName] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [habits, setHabits] = useState([]);
    const [habitsCounter, setHabitsCounter] = useState([]);

    const config = {
        headers: {
            "Authorization": `Bearer ${userInfo.token}`
        }
    }

    function hideAddHabits() {
        setDisplayAdd('none');
        setHabitName("");
        setSelectedDays([]);
    }

    function selectDay(idx) {
        if (!selectedDays.includes(idx)) {
            setSelectedDays([...selectedDays, idx]);
        } else {
            setSelectedDays(selectedDays.filter(i => i !== idx));
        }
    }

    function createHabit() {
        setDisabled(true);

        const body = {
            name: habitName,
            days: selectedDays // segunda, quarta e sexta
        }
        if (habitName == "") {
            alert("Dê um nome para o seu novo hábito.");
            setDisabled(false);
            return;
        }
        if (selectedDays.length == 0) {
            alert("Escolha pelo menos um dia em que irá praticar o novo hábito.");
            setDisabled(false);
            return;
        }
        axios.post(`${BASE_URL}/habits`, body, config)
            .then(res => {
                hideAddHabits();
                setDisabled(false);
                setHabitsCounter([...habitsCounter, 1]);
                console.log(res.data);
            })
            .catch(err => {
                setDisabled(false);
                alert(err.response.data.message)
            })
    }

    function deleteHabit(id) {
        if (window.confirm("Você vai excluir o hábito.")) {
            axios.delete(`${BASE_URL}/habits/${id}`, config)
                .then(res => {
                    console.log(res.data);
                    setHabitsCounter([...habitsCounter, -1]);
                })
                .catch(err => {
                    alert(err.response.data.message)
                })
        }
    }

    useEffect(() => {

        axios.get(`${BASE_URL}/habits`, config)
            .then(res => {
                console.log(res.data);
                setHabits(res.data);

            })
            .catch(err => {
                alert(err.response.data.message)
            })
    }, [habitsCounter])

    return (
        <ContainerHabits>
            <Header />
            <Main>
                <MyHabits>
                    <p>Meus hábitos</p>
                    <button onClick={() => setDisplayAdd('flex')}>+</button>
                </MyHabits>
                <AddHabits displayAdd={displayAdd}>
                    <input
                        disabled={disabled}
                        value={habitName}
                        onChange={(e) => setHabitName(e.target.value)}
                        placeholder="nome do hábito"
                    />
                    <Days >
                        {DAYS.map((day, idx) => (
                            <Button
                                key={idx}
                                selectedDays={selectedDays}
                                idx={idx}
                                disabled={disabled}
                                onClick={() => selectDay(idx)}
                            >
                                {day}
                            </Button>
                        ))}
                    </Days>
                    <ConteinerButtons>
                        <CancelButton disabled={disabled} onClick={() => setDisplayAdd('none')}>Cancelar</CancelButton>
                        <SaveButton
                            disabled={disabled}
                            onClick={createHabit}>
                            {!disabled ? 'Salvar' : <ThreeDots color="#FFFFFF" width="50" />}
                        </SaveButton>
                    </ConteinerButtons>
                </AddHabits>
                {habits.length != 0 ?
                    <>
                        {habits.map(h =>
                            <Habits key={h.id}>
                                <p>{h.name}</p>
                                <ion-icon onClick={() => deleteHabit(h.id)} name="trash-outline"></ion-icon>
                                <div>
                                    {DAYS.map((day, idx) => (
                                        <ButtonHabits
                                            key={idx}
                                            days={h.days}
                                            idx={idx}
                                            disabled={disabled}
                                            onClick={() => selectDay(idx)}
                                        >
                                            {day}
                                        </ButtonHabits>
                                    ))}
                                </div>
                            </Habits>
                        )}
                    </>
                    :
                    <p>Você não tem nenhum hábito
                        cadastrado ainda. Adicione um hábito
                        para começar a trackear!
                    </p>}
            </Main>
            <Footer />
        </ContainerHabits>
    )
}

const ContainerHabits = styled.div`
    display: flex;
    justify-content: center;    
`

const Main = styled.main`
    max-width: 360px;
    margin-top: 70px;
    margin-bottom: 100px;
    padding-left: 17px;
    padding-right: 17px;
    p{
        font-size: 17px;
        color: #666666;
    }
`

const MyHabits = styled.div`
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 28px;
    margin-bottom: 28px;
    p{
        font-size: 23px;
        color: #126BA5;
    }
    button{
        width: 40px;
        height: 35px;
        font-size: 27px;
        color: #FFFFFF;
        background-color: #52b6ff;
        border-radius: 5px;
    }
`

const AddHabits = styled.div`
    display: ${props => props.displayAdd};
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 180px;
    background-color: #FFFFFF;
    padding: 18px;
    margin-bottom: 28px;
    border-radius: 5px;
    input{
        width: 100%;
        height: 45px;
        color: #666666;
        padding-left: 11px;
        margin-bottom: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        outline: none;
        &::placeholder{
            color: #DBDBDB;
        }
    }
`

const Days = styled.div`
    margin-bottom: 35px;
`

const Button = styled.button`
        width: 30px;
        height: 30px;
        color: ${props => props.selectedDays.includes(props.idx) ? '#FFFFFF' : '#DBDBDB'};
        background-color: ${props => props.selectedDays.includes(props.idx) ? '#CFCFCF' : '#FFFFFF'};
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        margin-right: 4px;
`

const ConteinerButtons = styled.div`
    display:flex;
`

const CancelButton = styled.button`
    color: #52B6FF;
    background-color: #FFFFFF;
    margin-left: 115px;
`

const SaveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 35px;
    color: #FFFFFF;
    background-color: #52B6FF;
    border-radius: 5px;
    margin-left: 20px;
`

const Habits = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 330px;
    height: 91px;
    background-color: #FFFFFF;
    padding: 18px;
    margin-bottom: 28px;
    border-radius: 5px;
    p{
        font-size: 20px;
        color: #666666;
        margin-bottom: 10px;
    }
    ion-icon{
        position: absolute;
        top: 10px;
        right: 10px;
        color: #666666;

    }
`

const ButtonHabits = styled.button`
    width: 30px;
    height: 30px;
    color: ${props => props.days.includes(props.idx) ? '#FFFFFF' : '#DBDBDB'};
    background-color: ${props => props.days.includes(props.idx) ? '#CFCFCF' : '#FFFFFF'};
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    margin-right: 4px;
`