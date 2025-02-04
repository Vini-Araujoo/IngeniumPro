import logo from '../../assets/imagens/logo.svg'
import {
    NavBar, NavLinks, Nav, CaixaEsquerda, CaixaDirCima, CaixaDirBaixo,
    Main, Caixas, Topo, Img, Nomes, Meio, Final, Engenharia, Azul, Progresso
} from './outroPerfil';
import energia from '../../assets/imagens/Energia.svg'
import breve from '../../assets/imagens/Breve.svg'
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';







function OutroPerfil() {

    const [nomeUsuario, setNomeUsuario] = useState(''); // Estado para armazenar o nome do usuário
    const [emailUsuario, setEmailUsuario] = useState(''); // Estado para armazenar o nome do usuário
    const [desdeUsuario, setDesdeUsuario] = useState('')
    const [preview, setPreview] = useState('')
    const { usuario } = useParams()
    const [progresso, setProgresso] = useState('')




    function enviar() {



        api
            .post('/mostrarUser', { usuario }
            )
            //capturando os dados do usuario que vem do backend
            .then((response) => {
                const usuario = response.data.user
                setNomeUsuario(usuario.usuario)
                setEmailUsuario(usuario.email)
                setDesdeUsuario(new Date(usuario.createdAt).toLocaleDateString('pt-BR'))
                setPreview(usuario.foto); // Mostra a nova imagem após o upload
                setProgresso(response.data.completos / 5 * 100)

            })

    }

    useEffect(() => {

        enviar(); // Chamada quando o componente é montado

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
                            <li><NavLinks href="http://localhost:5173/">Sobre</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/login">Entre</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/perfil">Perfil</NavLinks></li>
                        </NavBar>
                    </div>
                </Nav>
            </header>

            <Main>
                <CaixaEsquerda>
                    <Topo>
                        <Img>



                            <img
                                src={preview}
                                alt="Preview"
                                style={{ width: '100px', height: '100px' }}
                            />



                        </Img>
                        <Nomes>
                            <p>{nomeUsuario || 'Carregando...'}</p>
                        </Nomes>
                    </Topo>

                    <Meio>
                        <p><Azul>E</Azul>mail: {emailUsuario || 'Carregando...'}</p>
                        <p><Azul>D</Azul>esde: {desdeUsuario || 'Carregando...'} </p>
                        <p><Azul>V</Azul>ersão: Beta <Azul>1.0v</Azul></p>
                    </Meio>

                    <Final>
                        <p>Área em aprendizado:</p>
                        <Engenharia>
                            <img src={energia} alt="Foto engenharia de energia" />
                        </Engenharia>
                    </Final>

                </CaixaEsquerda>

                <Caixas>
                    <CaixaDirCima>
                        <h2>Progressos</h2>

                        <Progresso>

                            <p>Detritos Espaciais</p>

                            <ProgressBar now={progresso} style={{ width: '27vw', background: 'black', border: 'solid , rgba(2, 188, 255, 1), 1px', height: '3.0vh', borderRadius: '2rem', fontSize: '1rem' }} />
                            {`${progresso}%`} Completo
                        </Progresso>



                    </CaixaDirCima>

                    <CaixaDirBaixo>
                        <img src={breve} alt="Imagem de manutenção" />
                    </CaixaDirBaixo>
                </Caixas>

            </Main>
        </div>
    )
}

export default OutroPerfil;