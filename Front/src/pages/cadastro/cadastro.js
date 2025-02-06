import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px


`;

export const Header = styled.header`
    width: 10vw;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-left: 5rem;
`;

export const LoginLink = styled.a`
    text-decoration: none;
    color:#00D0FF;
`;

export const Corpo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 70vw;
    height: 75vh;
    background-color: rgba(4, 11, 16, 1);
    border: 1px solid transparent;
    border-radius: 1rem;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1)) 1;

    @media (max-width: 768px) {
        width: 90vw;
        padding: 20px;
        gap: 20px;
        max-height: 80vh;
    }

    @media (max-height: 768px) {
        padding: 30px;
        height: 110vh;
    }
`

export const Esquerda = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    gap: 90px;
    background-color: #040B10;
    width: 30vw;
    height: 65vh;
    flex-direction: column;
    color: #fff;

    @media (max-width: 768px) {
        width: 30vw;
        padding: 25px;
        gap: 20px;
        max-height: 80vh;
    }

    @media (max-height: 768px) {
        padding: 30px;
        gap: 140px;
        height: 80vh;
    }
`

export const Direita = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #021016;
    width: 30vw;
    height: 65vh;
    border-radius: 1rem;

        @media (max-width: 768px) {
        width: 30vw;
        padding: 25px;
        gap: 20px;
        max-height: 80vh;
    }

    @media (max-height: 768px) {
        padding: 30px;
        height: 95vh;
    }
`

export const Form = styled.form`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 26vw;
    height: 60vh;
    border: 1px solid transparent;
    border-radius: 0.1em;
    border-image: linear-gradient(to top, rgba(4, 11, 16, 1), rgba(2, 188, 255, 1)) 1;
    gap: 12px;
    padding-top: 3rem;
    background-color: #040B10;
    color: #fff;

    @media (max-width: 768px) {
        width: 30vw;
        padding: 25px;
        gap: 20px;
        max-height: 80vh;
    }

    @media (max-height: 768px) {
        padding: 30px;
        height: 80vh;
    }
`

export const Inputs = styled.input`
    padding: 0.5rem;
    background-color: white;
    border: none;
    border-radius: 1rem;
    width: 16vw;
    padding-left: 20px;
`

export const Texto = styled.div`
    width: 400px;
    position: relative;
    bottom: 100px;
`

export const LoginEsquerda = styled.div`
    position: relative;
    bottom: 200px;
    right: 100px;
    display: flex;
    gap: 8px;
`

export const Seja = styled.div`
    width: 400px;
`

export const Azul = styled.span`
    color: #00D0FF;
`

export const Genero = styled.select`
    border-radius: 1rem;
    padding: 0.25rem;
`