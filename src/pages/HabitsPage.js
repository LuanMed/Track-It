import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import { UserInfoContext } from "../UserInfoContext";

export default function HabitsPage() {
    const [displayAdd, setDisplayAdd] = useState('none');
    const [userInfo] = useContext(UserInfoContext)
    //console.log(userInfo);

    return (
        <ContainerHabits>
            <Header/>
            <Main>
                <MyHabits>
                    <p>Meus hábitos</p>
                    <button onClick={() => setDisplayAdd('flex')}>+</button>
                </MyHabits>
                <AddHabits displayAdd={displayAdd}>
                    <input
                        placeholder="nome do hábito"
                    />
                    <Days>
                    <button>D</button>
                    <button>S</button>
                    <button>T</button>
                    <button>Q</button>
                    <button>Q</button>
                    <button>S</button>
                    <button>S</button>
                    </Days>
                    <div>
                        <CancelButton onClick={() => setDisplayAdd('none')}>Cancelar</CancelButton>
                        <SaveButton>Salvar</SaveButton>
                    </div>
                </AddHabits>
                {/* <AddHabits>
                    <input
                        placeholder="nome do hábito"
                    />
                    <Days>
                    <button>D</button>
                    <button>S</button>
                    <button>T</button>
                    <button>Q</button>
                    <button>Q</button>
                    <button>S</button>
                    <button>S</button>
                    </Days>
                    <div>
                        <CancelButton>Cancelar</CancelButton>
                        <SaveButton>Salvar</SaveButton>
                    </div>
                </AddHabits> */}
                <Habits>
                    <p>Ler 1 capítulo do livro</p>
                    <ion-icon name="trash-outline"></ion-icon>
                    <div>
                    <button>D</button>
                    <button>S</button>
                    <button>T</button>
                    <button>Q</button>
                    <button>Q</button>
                    <button>S</button>
                    <button>S</button>
                    </div>

                </Habits>
                <p>Você não tem nenhum hábito
                    cadastrado ainda. Adicione um hábito
                    para começar a trackear!</p>
            </Main>
            <Footer/>
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
    button{
        width: 30px;
        height: 30px;
        color: #DBDBDB;
        background-color: #FFFFFF;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        margin-right: 4px;
    }
`

const CancelButton = styled.button`
    color: #52B6FF;
    background-color: #FFFFFF;
    margin-left: 115px;
`

const SaveButton = styled.button`
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
        color: #666666;
        margin-bottom: 10px;
    }
    button{
        width: 30px;
        height: 30px;
        color: #DBDBDB;
        background-color: #FFFFFF;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        margin-right: 4px;
        cursor: pointer;
    }
    ion-icon{
        position: absolute;
        top: 10px;
        right: 10px;
        color: #666666;

    }
`