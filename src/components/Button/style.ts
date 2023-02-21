import styled from "styled-components";

export const Btn = styled.button`
    background-color: #060D15;
    border: 2px solid #06f3af;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    color: #FFF;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 5px;

    transition: all 0.3s;

    &:hover{
        background-color: #06f3af;
        letter-spacing: 2px;
        cursor: pointer;
        transform: translate(5px,-2px);
        box-shadow: -3px 3px 10px 0px #000;
        color: #000;
    }
`;