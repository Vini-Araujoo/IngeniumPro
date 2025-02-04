import styled from "styled-components";

//-------------------Header--------------------
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const NavBar = styled.ul`
    list-style: none;
    display: flex;
    gap: 40px;
`;

export const NavLinks = styled.a`
    padding-left: 20px;
    color: #fff;
    text-decoration: none;
    position: relative;

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background-color:rgb(18, 154, 239);
        position: absolute;
        bottom: -5px;
        left: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;    
    }

    &:hover::after {
        transform: scaleX(1); 
    }
`;

export const Azul = styled.span`
    color: rgb(18, 154, 239);
`;


//--------------Main--------------
export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    gap: 50px;
`

export const Titulo = styled.h1`
    font-size: 40px;

    @media (max-width: 1000px) {
        font-size: 30px  ; /* Ajusta o tamanho em telas menores */
    }

    @media (max-width: 480px) {
        font-size: 25px;
    }
`

export const Card = styled.a`
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.04); /* Aumenta o tamanho da imagem ao passar o mouse */
        box-shadow: 0px 2px 15px rgba(0, 3, 4, 0.5); /* Adiciona um leve brilho */
    }
    text-decoration: none;
    color: #fff;
`
export const Container = styled.div`
    display: flex;
    gap: 100px;

        @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center; /* Centraliza os cards no centro da tela */
    }
`
export const Cima = styled.div`
    width: 200px;
    height: 300px;
    background-color: rgba(4, 11, 16, 1);
    border-radius: 1rem 1rem 0rem 0rem;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden; /* Evita que a imagem extrapole os limites da div */


    img {
        width: 100%;
        height: 100%;
    }

`
export const Baixo = styled.div`
    width: 200px;
    height: 70px;
    background-color: rgba(4, 11, 16, 1); 
    display: flex;   
    align-items: center;
    justify-content: center;
    padding: 20px;
`
