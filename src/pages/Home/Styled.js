import styled from 'styled-components';

export const HomeContainer = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const Input = styled.input `
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    boder-radius: .5rem 0 0 .5rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button `
    height: 1.6rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
    cursor: pointer;

    &:focus,
    &:active {
        border: none;
        outline: none;
        box-shadow: none;
        background-color: chartreuse;
        color: black;
    }
`

export const ErrorMsg = styled.span `
    display: block;
    font-size: .65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`