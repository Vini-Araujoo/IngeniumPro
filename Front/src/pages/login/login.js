import styled from 'styled-components';

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
export const CaixaExterna = styled.div`
    height: 100%; 
    margin: 0; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
`
export const CaixaInterna = styled.div`
    height: 750px;
    width: 1150px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    border-radius: 1rem;
    background-color: rgba(4, 11, 16, 1);
    border: 1px solid transparent;
    border-radius: 1rem;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1)) 1;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
    color: #fff;
    background-color: rgba(2, 16, 22, 1);
    width: 1080px;
    height: 650px;
    border-radius: 1rem;
    padding: 30px;
`

export const Azul = styled.span`
    color: #00D0FF;
`

export const Links = styled.a`
    text-decoration: none;
    color: #00D0FF;    
`

export const Inputs = styled.input`
    padding: 0.5rem;
    background-color: white;
    border: none;
    border-radius: 1rem;
    width: 16vw;
    padding-left: 20px;
`