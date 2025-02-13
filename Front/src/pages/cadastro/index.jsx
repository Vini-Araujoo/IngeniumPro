import api from '../../services/api'
import logo from '../../assets/imagens/logo.svg'
import { Container, Header, LoginLink, Corpo, Esquerda, Form, Direita, Inputs, 
        Texto, LoginEsquerda, Seja, Azul} from './cadastro'
import { useState } from 'react';
import { Botao } from '../../components/botao/styles'

//essa é a rota /cadastro 

function login(email, nome, senha) {
  api
    .post('/enviar', { email, nome, senha })
    .then(({ data }) => {

      alert(data);
      window.location.href = 'http://localhost:5173/login'
    })
    .catch(err => {
      console.log(err);
    });
  
}

function Cadastro() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, nome, senha);
  };

  return (
    <Container>
      <Header>
        <a href="http://localhost:5173/">
          <img src={logo} alt="logo" />
        </a>

      </Header>

      <Corpo>
        <Esquerda>
          <Seja>
            <h1>Seja bem vindo ao Ingenium<Azul>Pro</Azul></h1> 
            
          </Seja>

          <Texto>
            <p>Cadastre-se para obter acesso a todas</p>
            <p>as funcionalidades e fazer parte da </p>
            <p>nossa comunidade</p>
          </Texto>

         <LoginEsquerda>
            <p>Já possui uma conta?</p>
            <LoginLink href="http://localhost:5173/login">login</LoginLink>
          </LoginEsquerda>
        </Esquerda>

        <Direita>
          <Form onSubmit={handleSubmit}>
            <h1>Crie sua conta</h1>
            <label htmlFor="email">E-mail</label>
            <Inputs
              name="email"
              id="email"
              type="email"
              placeholder="Digite seu email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="usuario">Nome de Usuário</label>
            <Inputs
              id="nome"
              name="nome"
              type="text"
              placeholder="Digite um nome de usuário..."
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <label htmlFor="senha">Senha</label>
            <Inputs
              id="senha"
              name="senha"
              type="password"
              placeholder="Crie sua senha..."
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
              <br />
              <Botao type="submit">
                  Enviar
              </Botao>
              
          </Form>
        </Direita>
      </Corpo>
    </Container>
  );
}

export default Cadastro;