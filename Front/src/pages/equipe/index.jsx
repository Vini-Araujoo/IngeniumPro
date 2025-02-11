import logo from '../../assets/imagens/logo.svg'
import { Nav, NavBar, NavLinks, Azul, Main, ImagensP1, ImagensP2, Imagem, LinhaCentro, L1, L2, L3, Caixa, Nome} from './equipe';
import vini from '../../assets/imagens/fotoVini.jpg'
import nicole from '../../assets/imagens/fotoNicole.png'
import guilherme from '../../assets/imagens/fotoGuilherme.png'
import bruno from '../../assets/imagens/fotoBruno.png'
import arthur from '../../assets/imagens/fotoArthur.jpg'
import igor from '../../assets/imagens/fotoIgor.png'

function Equipe() {
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
                            <li><NavLinks href="http://localhost:5173/sobre"><Azul>Sobre</Azul></NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/login">Entre</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/perfil">Perfil</NavLinks></li>
                        </NavBar>
                    </div>
                </Nav>
            </header>

            <Main>
                <h1>Equipe de colaboradores</h1>
                <ImagensP1>
                    <div>
                        <a href="#vini"><Imagem><img src={vini} alt="Foto Vini" /></Imagem></a>
                        <Nome>Vini</Nome>
                    </div>
                    <div>
                        <a href="#nicole"><Imagem><img src={nicole} alt="Foto Nicole" /></Imagem></a>
                        <Nome>Nicole</Nome>
                    </div>
                    <div>
                        <a href="#guilherme"><Imagem><img src={guilherme} alt="Foto Guilherme" /></Imagem></a>
                        <Nome>Guilherme</Nome>
                    </div>
                </ImagensP1>


                <LinhaCentro>
                    <L1></L1>
                    <L2></L2>
                    <L3></L3>
                </LinhaCentro>

                <ImagensP2>
                    <div>
                        <a href="#bruno"><Imagem><img src={bruno} alt="Foto Bruno" /></Imagem></a>
                        <Nome>Bruno</Nome>
                    </div>
                    <div>
                        <a href="#arthur"><Imagem><img src={arthur} alt="Foto Arthur" /></Imagem></a>
                        <Nome>Arthur</Nome>
                    </div>
                    <div>
                        <a href="#igor"><Imagem><img src={igor} alt="Foto Igor" /></Imagem></a>
                        <Nome>Igor</Nome>
                    </div>
                </ImagensP2>

                <Caixa id="vini">
                    <h2><Azul>Vini</Azul></h2>
                    <p>
                        Estudante do 2° semestre de Engenharia de Software da Universidade de Brasília.
                        Gerenciou a equipe, desenvolveu o front-end da plataforma e participou ativamente na prototipação do site.
                    </p>
                </Caixa>

                <Caixa id="nicole">
                    <h2><Azul>Nicole</Azul></h2>
                    <p>
                        Estudante cursando o 2° semestre de Engenharia de Software da Universidade de Brasília e o 3° semestre de
                        Direito no UniCEUB. Participou ativamente da realização da pesquisa, desenvolveu o embasamento teórico 
                        e selecionou o material de apoio referente ao desafio até então selecionado.
                    </p>
                </Caixa>

                <Caixa id="guilherme">
                    <h2><Azul>Guilherme</Azul></h2>
                    <p>Lorem ipsum dolor sit amet. Aut commodi voluptatem ut asperiores repellendus est perspiciatis.</p>
                </Caixa>

                <Caixa id="bruno">
                    <h2><Azul>Bruno</Azul></h2>
                    <p>Lorem ipsum dolor sit amet. Aut commodi voluptatem ut asperiores repellendus est perspiciatis.</p>
                </Caixa>


                <Caixa id="arthur">
                    <h2><Azul>Arthur</Azul></h2>
                    <p>Lorem ipsum dolor sit amet. Aut commodi voluptatem ut asperiores repellendus est perspiciatis.</p>
                </Caixa>


                <Caixa id="igor">
                    <h2><Azul>Igor</Azul></h2>
                    <p>
                        Atuou como orientador da equipe, auxiliando Vinícius na definição das sprints e seus prazos. 
                        Além disso, forneceu suporte técnico na área de programação.
                    </p>
                </Caixa>
            </Main>
        </div>
    );
}

export default Equipe;
