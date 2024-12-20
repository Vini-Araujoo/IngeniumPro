// Importações de módulos
import cors from 'cors';
import express from 'express';
import bcrypt from 'bcrypt';
import Sequelize, { where } from 'sequelize';
import path from 'path';
import bodyParser from 'body-parser';
import { type } from 'os';
import jwt from 'jsonwebtoken';


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Para processar JSON




// Configuração do banco de dados com Sequelize
const sequelize = new Sequelize('teste', 'teste', '@Teste2025@', {
    host: '186.226.60.39',
    dialect: 'mysql',
});
// Verificar a conexão com o banco
sequelize
    .authenticate()
    .then(() => console.log('Conectado ao banco de dados com sucesso!'))
    .catch((erro) => console.log('Falha ao se conectar: ' + erro));

// Definição do modelo (tabela) "Cadastros"
const Cadastros = sequelize.define('cadastro', {
    email: {
        type: Sequelize.STRING,
        allowNull: false, // Impede valores nulos
        unique: true, // Garante emails únicos
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    usuario: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

// Sincronizar o modelo com o banco de dados (criação da tabela, apenas uma vez)
//Cadastros.sync({ force: true });

// Resolver diretório raiz


// Rota GET para retornar todos os cadastros
app.get('/cadastro', async (req, res) => {
    try {
        const users = await Cadastros.findAll(); // Busca todos os registros no banco
        res.json(users);
        
    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao buscar cadastros');
    }


});

// Rota POST para cadastrar um usuário
app.post('/enviar', async (req, res) => {
    const { email, senha, nome } = req.body;

    try {
        // Verificar se o email já existe no banco
        const userExists = await Cadastros.findOne({ where: { email } });
        if (userExists) {
            return res.status(201).send('Email já cadastrado');
        }

        // Hash da senha usando bcrypt
        const hashedSenha = await bcrypt.hash(senha, 10);

        // Criar usuário no banco de dados
        const novoUsuario = await Cadastros.create({
            email: email,
            senha: hashedSenha,
            usuario: nome,
        });

        res.status(201).send(`Usuário cadastrado com sucesso! ID: ${novoUsuario.id}`);
        window.location.href='localhost:5173/login'
        
    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao cadastrar usuário');
    }
});





//rota para realizar login

app.post('/login', async(req, res) =>{

  
    //pegando os dados do login
    const {email, senha} = req.body;
    const user = await Cadastros.findOne({where: {email}});

    //comparando o email e a senha do usuario
    if(!user || !(await bcrypt.compare(senha, user.senha))){
        return res.status(401).json({ error: 'Email ou senha inválidos' });
        
    }

   
    //criando o token 
    const SECRET_KEY = 'supersecretkey'
    const token = jwt.sign({id: user.id}, SECRET_KEY, {expiresIn:'1h'});

    res.json({token});


}





)







// Inicialização do servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
