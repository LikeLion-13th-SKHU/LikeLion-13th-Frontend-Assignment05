import { createGlobalStyle } from "styled-components"; // Styled-Component 조건 2
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin : 0;
    padding : 0;
    box-sizing: border-box;
}
`;

export const Title = styled.h1`
    font-size: 36px;
    text-align: center;
    margin-top: 30px;
`;