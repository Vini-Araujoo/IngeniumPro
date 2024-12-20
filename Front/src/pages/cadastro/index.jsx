
import './style.css'
import api from '../../services/api'
import logo from '../../assets/imagens/logo.svg'
import enviar from '../../assets/imagens/enviar.svg'

import { useState } from 'react';

//essa é a rota /cadastro 

function login(email, nome, senha) {
  api
    .post('/enviar', { email, nome, senha })
    .then(({ data }) => {

      alert(data);
     
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
    <div className="container">
      <header>
        <img src={logo} alt="logo" />
      </header>

      <div className="corpo">
        <div className="esquerda">
          <div className="seja">
            <h1>Seja bem vindo ao IngeniumPro</h1>
          </div>

          <div className="texto">
            <p>Cadastre-se para obter acesso a todas</p>
            <p>as funcionalidades e fazer parte da </p>
            <p>nossa comunidade</p>
          </div>

          <div className="login">
            <p>Já possui uma conta?</p>
            <a href="http://localhost:5173/login">login</a>
          </div>
        </div>

        <div className="direita">
          <form onSubmit={handleSubmit}>
            <h1>Crie sua conta</h1>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Digite seu email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="usuario">Nome de Usuário</label>
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Digite um nome de usuário..."
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              name="senha"
              type="password"
              placeholder="Crie sua senha..."
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <button type="submit">
              <img src={enviar} alt="enviar formulário" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
