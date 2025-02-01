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
`

//--------------Main--------------------

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    gap: 50px;
`

export const Apresentacao = styled.div`
    width: 55vw;
    height: 45vh;
    border: 2px solid transparent;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1))10;
    display: flex;
    padding: 30px;
    gap: 50px;
    background-color: rgba(4, 11, 16, 1);
    box-shadow: 1.5px 2px 3px black;

    @media (max-width: 1400px) { /* Telas menores que 768px */

        height: auto; /* Altura ajusta conforme o conteúdo */
        width: 90vw; /* Aumenta a largura para ajustar ao conteúdo */
        gap: 20px;
    }
`

export const P1 = styled.p`

`

export const P2 = styled.p`

`

export const PEspecial = styled.p`
    color: rgba(2, 188, 255, 1);
    font-size: 20px;
`
export const H2 = styled.h2`
    font-size: 30px;
`

export const Dir = styled.div`

`

export const Esq = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
//---------Caixa-----------------

export const Caixa = styled.div`
    width: 55vw;
    height: 40vh;
    border: 1px solid transparent;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1))10;
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 50px;
    background-color: rgba(4, 11, 16, 1);
    box-shadow: 1.5px 2px 3px black;

    @media (max-width: 1390px) { /* Telas menores que 768px */

        height: auto; /* Altura ajusta conforme o conteúdo */
        width: 90vw; /* Aumenta a largura para ajustar ao conteúdo */
        gap: 20px;
    }    
`

export const H3 = styled.h3`

    @media (max-width: 768px) {
        font-size: 4px; /* Ajusta o tamanho em telas menores */
    }

    @media (max-width: 480px) {
        font-size: 18px;
    }
`

export const Mod = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    flex-wrap: wrap;
    gap: 20px;
`
export const Modulos = styled.div`
    width: 10vw;
    height: 5vh;
    background-image: linear-gradient(to left, rgb(3, 18, 31, 1), rgb(1, 14, 21));
    border-radius: 1rem;


    display: flex;  
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    padding: 25px;

    &:hover {
        transform: scale(1.1); /* Aumenta o tamanho da imagem ao passar o mouse */
        box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5); /* Adiciona um leve brilho */
    }   

    @media (max-width: 1390px) { /* Telas menores que 768px */

    height: auto; /* Altura ajusta conforme o conteúdo */
    width: 14vw; /* Aumenta a largura para ajustar ao conteúdo */
    gap: 20px;
    }  
`

export const TextoInterno = styled.p`
    font-size: 16px;
    text-align: center; /* Centraliza o texto horizontalmente */
    margin: 0; /* Remove margens que podem desalinhá-lo */

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`

export const Titulo = styled.div`

`

export const Link = styled.a`
    text-decoration: none;
    color: #fff;
`
