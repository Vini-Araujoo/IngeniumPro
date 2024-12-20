import './style.css'
import api from '../../services/api'
import { useState } from 'react';

//essa é a rota /login


function comparar(email, senha){
    api
    .post('/login', {email, senha})
    .then(({ token }) => {
        alert('Login bem sucedido');
        window.location.href='http://localhost:5173/'
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



  

function Login(){

const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    comparar(email, senha);
};




    return(
    
    <div className='container' id='container-login'>
        <header>
        <h1>teste</h1>
        </header>

        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input 
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    value={email} 
                    name='email' 
                />

                <label htmlFor="password">senha</label>
                <input 
                    type="password"
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    value={senha}
                    name='senha'

                />

                <button id='botao-login'>enviar</button>
                
            </form>
        </div>
    </div>
    )
}

export default Login