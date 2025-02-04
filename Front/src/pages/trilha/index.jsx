import logo from '../../assets/imagens/logo.svg'
import { Nav, NavBar, NavLinks, Azul, Main, Apresentacao, H2 , P1, P2, PEspecial, Dir, Esq,
        Caixa, Mod, H3, Titulo, Modulos, Link, TextoInterno} from './trilha';


function Trilha(){
    return(
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
                <Apresentacao>
                    <Esq>
                    <H2>Gerenciamento de <br /><Azul>detritos espaciais</Azul></H2>
                    <P1>
                        <PEspecial>Bem-vindo</PEspecial> Detritos espaciais são objetos criados pelos humanos e que se encontram em órbita ao redor da Terra, 
                        mas que não desempenham mais nenhuma função útil, como por exemplo as diversas partes e dejetos de naves espaciais 
                        deixados para trás quando do seu lançamento. Tanto podem ser peças pequenas, 
                        como ferramentas e luvas — a exemplo de uma perdida por Neil Armstrong na missão Gemini VIII em 1966
                    </P1>
                    </Esq>

                    <Dir>
                    <P2>Gerenciamento dos Detritos Espaciais. Um desafio significativo na engenharia espacial é o 
                        gerenciamento de detritos espaciais, também conhecido como "lixo espacial". Esses detritos 
                        são formados por satélites desativados, pedaços de foguetes e outros objetos artificiais que 
                        orbitam a Terra. 
                    </P2>
                    </Dir>
                </Apresentacao>

                <h1>Trilha do conhecimento</h1>

                <Caixa>
                    <Titulo>
                        <H3>Módulo <Azul>0</Azul></H3>
                    </Titulo>
                    <Mod>
                        <Link href="http://localhost:5173/modulo0">
                            <Modulos>
                                <TextoInterno>Introdução</TextoInterno>
                            </Modulos>                            
                        </Link>
                    </Mod>
                </Caixa>


                <Caixa>
                    <Titulo>
                        <H3>Módulo <Azul>1</Azul></H3>
                    </Titulo>
                    <Mod>
                        <Link href="http://localhost:5173/modulo/1">
                            <Modulos>
                                <TextoInterno>Introdução</TextoInterno>
                            </Modulos>                            
                        </Link>

                        <Link href="http://localhost:5173/modulo/2">
                            <Modulos>
                                <TextoInterno>Cálculo 1</TextoInterno>
                            </Modulos>                            
                        </Link>

                        <Link href="http://localhost:5173/modulo/3">
                            <Modulos>
                                <TextoInterno>Introdução à álgebra Linear</TextoInterno>
                            </Modulos>                            
                        </Link>

                        <Link href="http://localhost:5173/modulo/4">
                            <Modulos>
                                <TextoInterno>Física Clássica e Moderna</TextoInterno>
                            </Modulos>                            
                        </Link>

                        <Link href="http://localhost:5173/modulo/5">
                            <Modulos>
                                <TextoInterno>Física Clássica e Moderna</TextoInterno>
                            </Modulos>                            
                        </Link>

                        <Link href="http://localhost:5173/modulo/6">
                            <Modulos>
                                <TextoInterno>Programação e Algoritimos</TextoInterno>
                            </Modulos>                            
                        </Link>
                    </Mod>
                </Caixa>


                <Caixa>
                    <Titulo>
                        <H3>Módulo <Azul>2</Azul></H3>
                    </Titulo>
                    <Mod>
                        <Link href="http://localhost:5173/modulo/7">
                            <Modulos>
                                <TextoInterno>Aprendendo a Aprender</TextoInterno>
                            </Modulos>                            
                        </Link>
                    </Mod>
                </Caixa>


                <Caixa>
                    <Titulo>
                        <H3>Módulo <Azul>3</Azul></H3>
                    </Titulo>
                    <Mod>
                        <Link href="http://localhost:5173/modulo/8">
                            <Modulos>
                                <TextoInterno>Aprendendo a Aprender</TextoInterno>
                            </Modulos>                            
                        </Link>
                    </Mod>
                </Caixa>


                <Caixa>
                    <Titulo>
                        <H3>Módulo <Azul>4</Azul></H3>
                    </Titulo>
                    <Mod>
                        <Link href="http://localhost:5173/modulo/9">
                            <Modulos>
                                <TextoInterno>Aprendendo a Aprender</TextoInterno>
                            </Modulos>                            
                        </Link>
                    </Mod>
                </Caixa>


                <Caixa>
                    <Titulo>
                        <H3>Módulo <Azul>5</Azul></H3>
                    </Titulo>
                    <Mod>
                        <Link href="http://localhost:5173/modulo/10">
                            <Modulos>
                                <TextoInterno>Aprendendo a Aprender</TextoInterno>
                            </Modulos>                            
                        </Link>
                    </Mod>
                </Caixa>

            </Main>
        </div>
    )
}

export default Trilha;