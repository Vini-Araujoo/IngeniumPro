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
    color: #fff;
`
//---------------Caixa---------------
export const Caixa = styled.div`
    width: 70vw;
    height: 90vh;
    border: 1px solid transparent;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1))10;
    display: flex;
    flex-direction: column;
    padding: 70px;
    gap: 50px;
    background-color: rgba(4, 11, 16, 1);
    box-shadow: 1.5px 2px 3px black;

`

export const Topo = styled.div`
    display: flex;
    align-items: center;
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

export const Linha = styled.div`
    width: 100%;
    height: 1px;
    background-color: #fff;
`

export const Baixo = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 50px;
`
export const Click = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
        transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
        transform: scale(1.05); /* Aumenta levemente o tamanho */
        color: rgba(2, 188, 255, 1); /* Altera a cor do texto */
    }

`

export const Bolinha = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(7, 19, 22, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(2, 188, 255, 1);

    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: rgba(2, 188, 255, 1); /* Muda a cor do fundo */
        color: #000; /* Muda a cor do texto dentro da bolinha */
        transform: scale(1.1); /* Aumenta levemente a bolinha */
    }
`

export const Link = styled.a`
    text-decoration: none;
    color: #fff;

    transition: color 0.3s ease;

    &:hover {
        color: rgba(2, 188, 255, 1); /* Muda a cor do link no hover */
    }
`

export const CantoDir = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-end;
`