import logo from '../../assets/imagens/logo.svg'
import { Nav, NavBar, NavLinks, Caixa, Main, Topo, Azul, Titulo, Linha, Baixo, Click, Bolinha, Link, CantoDir } from './teste';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function ModuloDinamico() {


    const { id } = useParams()

    const [titulo, SetTitulo] = useState('')
    const [descricao, SetDescricao] = useState('')
    const [clicked, setClicked] = useState(false);

    const token = sessionStorage.getItem("authToken")
    const decodede = JSON.parse(token);
    const link_livros = `http://localhost:5173/material/${id}` + '/livros'
    const link_videos = `http://localhost:5173/material/${id}` + '/videos'
    const link_artigos = `http://localhost:5173/material/${id}` + '/artigos'



    console.log('token recebido' + decodede)

    //mudar o estado do botao
    const handleClick = () => {
        if (clicked == false) {
            setClicked(true);
        }

        else
            setClicked(false)
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        marcar(id)
    }

    //rota para identificar qual é o modulo
    function requisitar(id) {
        api
            .post('/requisitar', { id }, {
                headers: {

                    'Authorization': decodede.data
                },
            }
            )

            .then((modulo) => {

                SetTitulo(modulo.data.title)
                SetDescricao(modulo.data.content)

            })

            .catch(err => {
                // Exibindo a mensagem de erro retornada pela API, caso ocorra um erro (vem pelo campo error do json)
                if (err.response.data.error) {
                    alert(err.response.data.error); // Exibe a mensagem de erro
                } else {
                    alert('Erro inesperado! Tente novamente mais tarde.'); // Erro genérico
                }
            });
    }

    useEffect(() => {

        requisitar(id); // Chamada quando o componente é montado

    }, []); // O array vazio [] garante que só será chamado uma vez


    //função para marcar como concluido

    function marcar(id) {
        api
            .post('/marcar', { id }, {
                headers: {

                    'Authorization': decodede.data
                },
            })

            .then((response) => {
                alert(response.data)
            })

            .catch(err => {
                // Exibindo a mensagem de erro retornada pela API, caso ocorra um erro (vem pelo campo error do json)
                if (err.response.data.error) {
                    alert(err.response.data.error); // Exibe a mensagem de erro
                } else {
                    alert('Erro inesperado! Tente novamente mais tarde.'); // Erro genérico
                }
            });

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
                            <li><NavLinks href="http://localhost:5173/">Home</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/sobre">Sobre</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/login">Entre</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/perfil">Perfil</NavLinks></li>
                        </NavBar>
                    </div>
                </Nav>
            </header>

            <Main>
                <Caixa>
                    <Topo>
                        <Titulo>
                            {titulo} <br /><Azul>Descrição</Azul>
                        </Titulo>

                        <Linha></Linha>
                    </Topo>
                    <p>
                        {descricao}
                    </p>

                    <Baixo>
                        <Link href={link_livros}>
                            <Click>
                                <Bolinha><p>1</p></Bolinha>
                                <p>Livros</p>
                            </Click>
                        </Link>

                        <Link href={link_videos}>
                            <Click>
                                <Bolinha><p>2</p></Bolinha>
                                <p>Vídeos</p>
                            </Click>
                        </Link>

                        <Link href={link_artigos}>
                            <Click>
                                <Bolinha><p>3</p></Bolinha>
                                <p>Artigos</p>
                            </Click>
                        </Link>

                        <form onSubmit={handleSubmit}>
                            <button type="submit" onClick={handleClick} >{clicked ? "Marcar como concluido" : "Desmarcar"}</button>
                        </form>
                    </Baixo>
                    <CantoDir>
                        <Link href="http://localhost:5173/trilha" ><Azul>Voltar para trilha</Azul></Link>
                    </CantoDir>
                </Caixa>
            </Main>
        </div>
    )
}

export default ModuloDinamico;