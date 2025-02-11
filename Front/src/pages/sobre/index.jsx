import api from '../../services/api'
import logo from '../../assets/imagens/logo.svg'
import { Nav, NavBar, NavLinks, Azul, Main, Criacao, Criadores, Titulo, Botao, CentraBotao} from './sobre';
import { useNavigate } from 'react-router-dom';
import linha from '../../assets/imagens/DesignLinha.svg';


function Sobre(){
    const navigate = useNavigate(); // Inicializa o hook useNavigate

    // Função para redirecionar para a rota "/login"
    const handleStartClick = () => {
      navigate('/equipe'); // Redireciona para a rota desejada
    };

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
                            <li><NavLinks href="http://localhost:5173/sobre"><Azul>Sobre</Azul></NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/login">Entre</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/perfil">Perfil</NavLinks></li>
                        </NavBar>
                    </div>
                </Nav>
            </header>

            <Main>
                <Titulo>
                    <h1><Azul>Sobre</Azul> Nós</h1>
                </Titulo>

                <Criacao>
                    <h2>Da <Azul>Criação</Azul></h2>
                    <div>
                        <p>
                            Sob a luz desse pensamento, e visando tornar palpável o sonho de se chegar a uma 
                            conclusão nunca antes pensada, desenvolvemos um website guia para a obtenção da 
                            bagagem de conhecimentos necessários para a viagem ao desconhecido. Baseado na ideia
                            de trilhas de conhecimento, o IngeniumPro trás de forma organizada e
                            intuitiva materiais de estudo e prática, na forma de requisitos 
                            para se chegar a um patamar de esclarecimento, tornando os estudantes 
                            capazes de resolver os problemas estagnados.
                        </p>
                    </div>
                </Criacao>

                <Criadores>
                    <h2>Dos <Azul>Criadores</Azul></h2>
                    <p>
                        Seis amigos da faculdade, cursando a disciplina de Desenvolvimento de 
                        Software na Universidade de Brasília - Unb, ministrada pelo Professor 
                        Doutor Sérgio Antônio Andrade de Freitas, buscávamos uma ideia inovadora e
                        impactante para o objetivo do site. Movidos pela sede do conhecimento, 
                        indagamo-nos sobre os desafios de concretizar projetos com ideias revolucionárias
                        para resolver questões ainda não solucionadas no mundo da engenharia. 
                    </p>
                </Criadores>

                <CentraBotao>
                    <Botao onClick={handleStartClick}>Equipe</Botao>
                </CentraBotao>

            </Main>
        </div>
    )
}

export default Sobre;