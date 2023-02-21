import styled, {keyframes} from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
`;

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const CardInfo = styled.div`

    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    height: fit-content;
    background-color:#FFFFFF;
    border-radius: 25px;
    padding: 10px 15px 10px 15px;
    width: min(500px, 80vw);

    animation: ${appear} 1s;

    h1 {
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        font-size: 18px;
        color: #000;
        font-weight: 700;
    }

    h2 {
        text-align: center;
        text-transform: uppercase;
        font-size: 18px;
        color: #000;
        font-weight: 700;
    }
`;

export const TextHighlight = styled.span`
    color: #7A31A7;
`

export const InfoItem = styled.div`
    min-width: 200px;
    padding: 10px ;
    font-size: 18px;
`;

export const Loading = styled.div`
    margin-top: 50px;

    width: 100px;
    height: 100px;
    background-color: transparent;
    border: double 6px transparent;
    border-radius: 50%;
    background-image: linear-gradient(#060D15, #060D15), radial-gradient(circle at left, #060D15, #06f3af);
    background-origin: border-box;
    background-clip: content-box, border-box;
    filter: drop-shadow(0 0 10px #06f3af);

    animation: ${rotate} .4s infinite linear;
`;