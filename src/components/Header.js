import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserInfoContext } from "../UserInfoContext";

export default function Header() {
    const [userInfo] = useContext(UserInfoContext);
    
    return (
        <ContainerHeader>
            <Link to={"/habitos"}>
                <button>TrackIt</button>
            </Link>
            <img src={userInfo.image} />
        </ContainerHeader>
    )
}

const ContainerHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 70px;
    padding-left: 18px;
    padding-right: 18px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;
    button{
        width: 120px;
        color: #FFFFFF;
        background-color: #126BA5;
        font-size: 39px;
        font-family: 'Playball', cursive;
        cursor: pointer;
    }
    img{
        width: 51px;
        height: 51px;
        border-radius: 50px;
    }
`