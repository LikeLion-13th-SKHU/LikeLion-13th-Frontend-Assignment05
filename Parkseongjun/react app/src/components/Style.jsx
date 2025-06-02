import styled, {css} from "styled-components";

const Container = css`
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: fit-content;
    max-height: fit-content;
    width: 100vw;
    height: 100vh;
    padding: 10vw;
    border: 1px solid #fff;
    border-radius: 8px;
    box-shadow: 5px 5px 5px rgb(0,0,0,0.3);
`;

export const Box = styled.div`
    ${Container}
    background-color: lavender;
`;

export const Title = styled.h1`
    font-size: 3rem;
`;

const FormElement = css`
    margin: 10px 0;
    border: 1px solid black;
    border-radius: 4px;
    flex-grow: 1;
    border: none;
    padding: 10px;
    font-size: 1rem;
    border-radius: 4px;
    width: 50%;
    text-align: center;
`;
    
export const Input = styled.input`
    ${FormElement}
`;

export const Textarea = styled.textarea`
    ${FormElement}
    width: 500px;
    height: 100vh;
`

export const Button = styled.button`
	background: linear-gradient(90deg, lavender, lightcyan, #fff);
    @keyframes gradient-move {
	0% {
	background-position: 200% 0;
	}
	100% {
	background-position: -200% 0;
	}
}
    background-size: 200% 200%;
	animation: gradient-move 5s linear infinite;
`