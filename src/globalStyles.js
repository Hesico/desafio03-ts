import styled,{ createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Sans-Serif;

    box-sizing: border-box;
    background-color: #060D15;
  }
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    padding: 25px;
`;