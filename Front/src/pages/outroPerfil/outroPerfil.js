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
    height: 10%;
    gap: 30px;
`
export const Img = styled.div`
    width: 5vw;
    height: 8vh;
    display: flex;
    border: 1px solid transparent;
    border-radius: 3rem;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1))1; 
   
`

export const Nomes = styled.div`
    color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

export const Progresso = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    gap: 1rem;
    
    width: 50vw;
   
`

/*--------------------Elementos Caixa Direita Cima-------------------------------*/


