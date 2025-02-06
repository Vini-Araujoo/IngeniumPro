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

//------------Main--------------

export const Main = styled.main`
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
`
export const ImagensP1 = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 120px;
    margin-top: 100px;

`
export const ImagensP2 = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 120px;

`
//--------Equipe---------
export const Imagem = styled.div`
    width: 10vw;
    height: 21vh;
    border: 3px solid transparent;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1))10;
    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden; /* Evita que a imagem extrapole os limites da div */
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.1); /* Aumenta o tamanho da imagem ao passar o mouse */
        box-shadow: 0px 4px 15px rgba(2, 188, 255, 0.5); /* Adiciona um leve brilho */
    }

    img {
        width: 100%;
        max-height: 100%;
    }
`

export const LinhaCentro = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20vh;
    gap: 160px;

`

export const L1 = styled.div`
    width: 5vw;
    height: 0.2vh;
    border-radius: 1 rem;
    background-color:  rgba(2, 188, 255, 1);
`
export const L2 = styled.div`
    width: 5vw;
    height: 0.2vh;
    border-radius: 1 rem;
    background-image: linear-gradient(to left, rgba(9, 51, 61, 1), rgba(2, 188, 255, 1));
`
export const L3 = styled.div`
    width: 5vw;
    height: 0.2vh;
    border-radius: 1 rem;
    background-image: linear-gradient(to left, rgba(9, 51, 61, 1), rgba(2, 188, 255, 1));
`

//----------Caixa de texto-------------

export const Caixa = styled.div`
    width: 27vw;
    height: 23vh;
    border-radius: 1rem;
    margin-top: 100px;
    background-image: linear-gradient(to top, rgba(2, 16, 22, 1), rgba(2, 16, 22, 1));
    border: 1px solid transparent;
    border-image: linear-gradient(to left, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1))1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;


    @media (max-height: 768px) {
        padding: 30px;
        height: 45vh;
        width: 50vw;
    }
`

export const Nome = styled.p`
    margin-top: 10px;
    text-align: center;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
`;
