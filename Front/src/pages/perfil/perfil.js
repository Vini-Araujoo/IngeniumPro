import styled from 'styled-components'
//--------------------Header------------------------

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

export const Input = styled.input`
    padding: 0.5rem;
    background-color: white;
    border: none;
    border-radius: 1rem;
    width: 12vw;
`;
//------------------------Corpo----------------------------
export const Main = styled.main`
    display: flex; /* Define o layout como flexbox */
 /* Alinha os itens verticalmente ao centro */
    justify-content: center; /* Espaço entre os itens */
    gap: 100px; /* Espaço entre as caixas (opcional) */
    padding: 20px; /* Adiciona espaçamento interno (opcional) */
`
export const CaixaEsquerda = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20vw;
    height: 80vh;
    border: 1px solid transparent;
    border-radius: 1rem;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1)) 1;   
    background-color: rgba(4, 11, 16, 1); 
    box-shadow: 2px 2px;
    padding: 20px;



    @media (max-height: 768px) {
        padding: 30px;
        height: 130vh;
        width: 25vw;
    }
`
export const Caixas = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;

`
export const CaixaDirCima = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-direction: column;
    padding-top: 60px;
    color: #fff;
    width: 50vw;
    height: 35vh;
    border: 1px solid transparent;
    border-radius: 1rem;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1)) 1;  
    background-color: rgba(4, 11, 16, 1);     
    box-shadow: 2px 2px rgb(0, 0, 0);

    
        @media (max-width: 768px) {
        width: 30vw;
        padding: 25px;
        gap: 20px;
        max-height: 80vh;
    }

    @media (max-height: 768px) {
        padding: 30px;
        height: 45vh;
    }
`

export const CaixaDirBaixo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 80px;
    width: 50vw;
    height: 35vh;
    border: 1px solid transparent;
    border-radius: 1rem;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1)) 1;  
    background-color: rgba(4, 11, 16, 1); 
    box-shadow: 2px 2px;        
`
/*--------------------Elementos Caixa Esquerda-------------------------------*/
export const Azul = styled.span`
    color: rgba(2, 188, 255, 1);
`
export const Topo = styled.div`
    display: flex;
    width: 100%;
    height: 14.5%;
    gap: 30px;
    margin-bottom: 20px;
`
export const Img = styled.div`
    width: 106px;
    height: 102px;
    display: flex;
    border: 3px solid transparent;
    border-radius: 3rem;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1))1; 

`

export const Nomes = styled.div`
    color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;

`

export const Meio = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    gap: 30px;
`

export const Final = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    gap: 20px;
    width: 100%;
    height: 45%;
`
export const Engenharia = styled.div`
    position: relative;
    margin-left: 20px;
`

export const SalvarImg = styled.button`
    background-color: rgba(2, 188, 255, 0);
    color: white;
    width: 5vw;
    height: 4vh;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1))1;
    transition: all 0.3s ease; /* Transição suave para o hover */

    &:hover {
        background-color: rgba(42, 131, 163, 0.2); /* Cor de fundo ao passar o mouse */
        border-color: rgba(2, 188, 255, 1); /* Alterar a cor da borda */
        transform: scale(1.05); /* Aumenta ligeiramente o tamanho do botão */
    }

`


export const Botao = styled.button`
    background-color: rgba(2, 188, 255, 0);
    color: white;
    width: 5vw;
    height: 3vh;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1))1;
    transition: all 0.3s ease; /* Transição suave para o hover */

    &:hover {
        background-color: rgba(42, 131, 163, 0.2); /* Cor de fundo ao passar o mouse */
        border-color: rgba(2, 188, 255, 1); /* Alterar a cor da borda */
        transform: scale(1.05); /* Aumenta ligeiramente o tamanho do botão */
    }

    @media (max-height: 768px) {
        height: 5.5vh;
        width: 6vw;
    }
`;

export const Botao2 = styled.button`
    background-color: rgba(2, 188, 255, 0);
    color: white;
    width: 5vw;
    height: 4vh;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1))1;
    transition: all 0.3s ease; /* Transição suave para o hover */

    &:hover {
        background-color: rgba(42, 131, 163, 0.2); /* Cor de fundo ao passar o mouse */
        border-color: rgba(2, 188, 255, 1); /* Alterar a cor da borda */
        transform: scale(1.05); /* Aumenta ligeiramente o tamanho do botão */
    }

    

`;

export const FormPesquisa = styled.form`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const Progresso = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    gap: 1rem;
    
    width: 50vw;
   
`