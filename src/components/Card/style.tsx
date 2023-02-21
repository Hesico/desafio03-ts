import styled, { keyframes } from "styled-components";

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const BoxContainer = styled.div`
    height: fit-content;
    background-color:#FFFFFF;
    border-radius: 25px;
    padding: 10px 15px 10px 15px;

    animation: ${appear} 1s;

    h1 {
        text-align: center;
        text-transform: uppercase;
        font-size: 18px;
        color: #7A31A7;
        font-weight: 700;
    }
`;

export const Input = styled.input`
    display: block;
    height: 30px;
    padding: 5px 10px 5px 10px;
    border:none;
    border-bottom: 2px solid #7A31A7;
    margin: 10px 0 10px 0;
    width: min(500px, 80vw);
    font-size: 18px;
    
    transition: all 0.2s;

    &:focus {
        outline: 0;
        color: #7A31A7;
        transform: translateX(5px);
        box-shadow: -3px 3px 10px 0px #7A31A7;
    }
`;