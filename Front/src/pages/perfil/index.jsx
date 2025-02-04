import logo from '../../assets/imagens/logo.svg'
import {
    NavBar, NavLinks, Nav, CaixaEsquerda, CaixaDirCima, CaixaDirBaixo,
    Main, Caixas, Topo, Img, Nomes, Meio, Final, Engenharia, Azul, Input,
    Botao, Botao2, FormPesquisa, Progresso
} from './perfil';

import aero from '../../assets/imagens/Aeroespacial.svg'


import breve from '../../assets/imagens/Breve.svg'
import { useEffect, useState } from 'react';
import api from '../../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from 'react-bootstrap';




function Perfil() {

    const [nomeUsuario, setNomeUsuario] = useState(''); // Estado para armazenar o nome do usuário
    const [emailUsuario, setEmailUsuario] = useState(''); // Estado para armazenar o nome do usuário
    const [desdeUsuario, setDesdeUsuario] = useState('')
    const [image, setImage] = useState('');
    const [preview, setPreview] = useState('');
    const [pesquisar, setPesquisar] = useState('')
    const [progresso, setProgresso] = useState('')

    // Lidar com a pré-visualização da imagem
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file)); // Pré-visualizar a imagem
    }

    // Enviar a imagem para o servidor
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('profileImage', image);
        const token = sessionStorage.getItem("authToken")
        const decodede = JSON.parse(token);

        try {
            await api.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': decodede.data
                },
            });
            alert('Upload feito com sucesso!');
            console.log('Imagem salva');
        } catch (error) {
            console.error('Erro ao fazer upload:', error);
        }
    };

    function enviar() {

        const token = sessionStorage.getItem("authToken")
        const decodede = JSON.parse(token);



        api
            .get('/usuario', {
                headers: {
                    'Authorization': decodede.data
                }
            }
            )
            //capiturando os dados do usuario que vem do backend
            .then((response) => {
                const usuario = response.data.user
                setNomeUsuario(usuario.usuario)
                setEmailUsuario(usuario.email)
                setDesdeUsuario(new Date(usuario.createdAt).toLocaleDateString('pt-BR'))
                setPreview(usuario.foto); // Mostra a nova imagem após o upload
                setProgresso((response.data.completos/30 *100).toFixed(2))
                console.log(progresso)

            })

    }

    useEffect(() => {
        enviar(); // Chamada quando o componente é montado

    }, []); // O array vazio [] garante que só será chamado uma vez


    const handlesubmit = (e) => {
        e.preventDefault();
        procurar(pesquisar);
    };
    function procurar(pesquisar) {
        api
            .post('/pesquisar', { pesquisar })


            .then((user) => {
                if (user.data.usuario == undefined) {
                    return alert('usuario nao encontrado')
                }
                else {
                    console.log(user.data.usuario)
                    window.location.href = 'http://localhost:5173/outroPerfil/' + user.data.usuario
                }

            })

    }



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

                            <FormPesquisa onSubmit={handlesubmit}>
                                <Input
                                    type="text"
                                    placeholder='digite um usuario'
                                    value={pesquisar}
                                    onChange={(e) => setPesquisar(e.target.value)}
                                />


                                <Botao2 type='submit'>pesquisar</Botao2>
                            </FormPesquisa>
                            <li><NavLinks href="http://localhost:5173/">Home</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/">Sobre</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/login">Entre</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/">Perfil</NavLinks></li>

                        </NavBar>
                    </div>
                </Nav>

            </header>

            <Main>

                <CaixaEsquerda>

                    <Topo>

                        <Img>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="imageUpload">

                                        <img
                                            src={preview}
                                            alt="Preview"
                                            style={{ width: '100px', height: '100px', cursor: 'pointer' }}
                                        />

                                    </label>
                                    <input
                                        id="imageUpload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        style={{ display: 'none' }}
                                    />
                                </div>

                                <Botao type="submit" style={{ marginTop: '10px' }}>Salvar Foto</Botao>
                            </form>
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
                            <img src={aero} alt="Foto Engenharia Aeroespacial" />
                        </Engenharia>
                    </Final>

                </CaixaEsquerda>

                <Caixas>
                    <CaixaDirCima>
                        <h2 >Progressos</h2>

                     
                        <Progresso>

                            <p>Detritos Espaciais</p>
                            
                            <ProgressBar now={progresso}  style={{width:'27vw', background:'black', border: 'solid , rgba(2, 188, 255, 1), 1px', height:'3.0vh', borderRadius:'2rem', fontSize:'1rem'}} />
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

export default Perfil;