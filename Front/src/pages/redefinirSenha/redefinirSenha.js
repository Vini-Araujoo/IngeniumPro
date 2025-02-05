import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
`
export const Header = styled.header`
    width: 2000px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5rem;
`
export const Fundo1 = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
`

export const FundoExtra = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    height: 750px;
    width: 1250px;
    border: 1px solid transparent;
    border-radius: 1rem;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1)) 1;
`

export const Fundo2 = styled.div`
    background-color: rgba(2, 16, 22, 1);
    height: 650px;
    width: 1150px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 1rem;
`

export const Form = styled.form`
    height: 500px;
    width: 900px;
    background-color: rgba(4, 11, 16, 1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    border-radius: 0rem 1rem 1rem 0rem;
    border: 1px solid transparent;
    border-radius: 1rem;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1)) 1;
    padding-top: 40px;
    color: #fff;
`

export const Inputs = styled.input`
    padding: 0.5rem;
    background-color: white;
    border: none;
    border-radius: 1rem;
    width: 16vw;
    padding-left: 20px;
`

export const Azul = styled.span`
    color: #00D0FF;
`
