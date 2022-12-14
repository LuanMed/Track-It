import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
    return (
        <ContainerHeader>
            <Link to={"/habitos"}>
                <button>TrackIt</button>
            </Link>
            <img src="https://yt3.ggpht.com/ytc/AMLnZu9tYPIG3bxki2LZz-NRrvHtLHRL0-wW95Cjgcr2=s900-c-k-c0x00ffffff-no-rj" />
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