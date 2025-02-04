import logo from '../../assets/imagens/logo.svg'
import { Nav, NavBar, NavLinks, Main, Titulo, Container, Card, Cima, Baixo, Azul } from './material';
import Halliday from '../../assets/imagens/Halliday.png';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../services/api';







function Material() {
    const { id, tipo } = useParams()
    const [foto1, setFoto1] = useState('')
    const [foto2, setFoto2] = useState('')
    const [foto3, setFoto3] = useState('')
    const [nome1, setNome1] = useState('')
    const [nome2, setNome2] = useState('')
    const [nome3, setNome3] = useState('')
    const [conteudo1, setConteudo1] = useState('')
    const [conteudo2, setConteudo2] = useState('')
    const [conteudo3, setConteudo3] = useState('')

    function carregar() {

        
        api
            .post('/mostrarmaterial', {id, tipo})
            .then((response) => {

                //setando as fotos
                setFoto1(response.data[0].foto)
                setFoto2(response.data[1].foto)
                setFoto3(response.data[2].foto)
                
                //setando os nomes
                setNome1(response.data[0].nome)
                setNome2(response.data[1].nome)
                setNome3(response.data[2].nome)

                //setando conteudo
                setConteudo1(response.data[0].conteudo)
                setConteudo2(response.data[1].conteudo)
                setConteudo3(response.data[2].conteudo)

                

            })

    }

    useEffect(() => {

        carregar(); // Chamada quando o componente é montado

    }, []); // O array vazio [] garante que só será chamado uma vez


    return (
        <div>
            <header>
                <Nav>
                    <div className="logo">
                        <a href="http://localhost:5173/">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                    <div className="links">
                        <NavBar>
                            <li><NavLinks href="http://localhost:5173/">Home</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/sobre">Sobre</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/login">Entre</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/perfil">Perfil</NavLinks></li>
                        </NavBar>
                    </div>
                </Nav>
            </header>

            <Main>
                <Titulo>{tipo}</Titulo>
                <Container>
                    <Card target="black" href={conteudo1}>
                        <Cima>
                            <img src={foto1} alt="Imagem do livro Halliday" />
                        </Cima>
                        <Baixo>
                            <p>Material: <Azul>{nome1}</Azul></p>
                        </Baixo>
                    </Card>

                    <Card target="black" href={conteudo2}>
                        <Cima>
                            <img src={foto2} alt="Imagem do livro Halliday" />
                        </Cima>
                        <Baixo>
                            <p>Material: <Azul>{nome2}</Azul></p>
                        </Baixo>
                    </Card>

                    <Card target="black" href={conteudo3}>
                        <Cima>
                            <img src={foto3} alt="Imagem do livro Halliday" />
                        </Cima>
                        <Baixo>
                            <p>Material: <Azul>{nome3}</Azul></p>
                        </Baixo>
                    </Card>
                </Container>

            </Main>
        </div>
    )
}

export default Material;