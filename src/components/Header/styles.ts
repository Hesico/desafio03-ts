import styled, {keyframes} from "styled-components";

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10vw);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const HeaderContainer = styled.div`
    background-color: #17A65A;
    height: 7vh;
`;

export const HeaderSec = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 30px;
        text-transform: uppercase;
        color: #FFF;
        letter-spacing: 2px;
        font-weight: bold;

        animation: ${appear} 1s ;
    }
`;

