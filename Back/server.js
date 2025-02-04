// Importações de módulos
import cors from 'cors';
import express from 'express';
import bcrypt from 'bcrypt';
import Sequelize, { ForeignKeyConstraintError, where } from 'sequelize';
import path from 'path';
import bodyParser from 'body-parser';
import { type } from 'os';
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import { URL } from 'url';
import { DataTypes } from 'sequelize';
import multer from 'multer';

const SECRET_KEY = 'supersecretkey'
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Para processar JSON
app.use('/uploads', express.static('uploads'));

//----------------------------------------------------------------------------------


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
const Cadastro = sequelize.define('cadastro', {
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
    },

    foto: {
        type: Sequelize.STRING
    },

    resetToken: {
        type: Sequelize.STRING
    },
    resetTokenExpiry: {
        type: Sequelize.STRING
    }




});




const Modulo = sequelize.define('Modulo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    
    

});




const Progresso = sequelize.define('Progresso', {
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

const Material = sequelize.define('Material',{

    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    conteudo:{
        type: Sequelize.STRING,
        allowNull: false,
    
    },
    tipo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    foto:{
        type: Sequelize.STRING
    }


})

Cadastro.belongsToMany(Modulo, { through: 'Progresso' });
Modulo.belongsToMany(Cadastro, { through: 'Progresso' });
Material.belongsTo(Modulo, {foreignKey: 'modulosId'})


// Sincronizar o modelo com o banco de dados (criação da tabela, apenas uma vez)
//await sequelize.sync({ force: true }); // Sincroniza os modelos, recriando as tabelas
//console.log('tabelas criadas')
//------------------------------------------------------------------------------------------------------

// Resolver diretório raiz
const __dirname = path.resolve();

// Rota GET para retornar todos os cadastros
app.get('/cadastro', async (req, res) => {
    try {
        const users = await Cadastro.findAll(); // Busca todos os registros no banco
        res.json(users);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao buscar cadastros');
    }


});


//-----------------------------------------------------------------------------------------------------


// Rota POST para cadastrar um usuário
app.post('/enviar', async (req, res) => {
    const { email, senha, nome } = req.body;

    try {
        // Verificar se o email já existe no banco
        const userExists = await Cadastro.findOne({ where: { email } });
        if (userExists) {
            return res.status(201).send('Email já cadastrado');
        }

        // Hash da senha usando bcrypt
        const hashedSenha = await bcrypt.hash(senha, 10);

        // Criar usuário no banco de dados
        const novoUsuario = await Cadastro.create({
            email: email,
            senha: hashedSenha,
            usuario: nome,
            foto: 'http://localhost:3000/uploads/default.png'

        });

        res.status(201).send(`Usuário cadastrado com sucesso! ID: ${novoUsuario.id}`);


    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao cadastrar usuário');
    }
});


//----------------------------------------------------------------------------------------------


//rota para realizar login

app.post('/login', async (req, res) => {


    //pegando os dados do login
    const { email, senha } = req.body;
    const user = await Cadastro.findOne({ where: { email } });

    //comparando o email e a senha do usuario
    if (!user || !(await bcrypt.compare(senha, user.senha))) {
        return res.status(401).json({ error: 'Email ou senha inválidos' });

    }


    //criando o token 

    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });


    console.log(token)
    res.send(token);


}
)




//---------------------------------------------------------------------------------------------------------


//funçao pra envio do email
const sendResetEmail = async (email, link) => {
    try {

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: "ingeniumprosite@gmail.com",
                pass: "mqgg gcpu aazm ysec"
            },
        });

        await transporter.sendMail({
            from: 'ingeniumprosite@gmail.com',
            to: email,
            subject: "Redefinição de Senha",
            html: `<p>Clique no link para redefinir sua senha:</p>
                   <a href="${link}">${link}</a>`
        });

    } catch (error) {
        console.error('Erro ao enviar email:', error);
        throw new Error('Erro ao enviar email');
    }
};


// Rota para redefinir senha
app.post('/redefinir', async (req, res) => {
    try {
        // Verificar se existe o email do usuário
        const { email } = req.body;
        const user = await Cadastro.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: 'Email não encontrado' });
        }

        // Criar token JWT
        const SECRET_KEY = 'supersecretkey'
        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });

        // Gerar link
        const link = `http://localhost:5173/novasenha/${token}`;

        // Atualizar usuário com token e expiração
        await user.update({
            resetToken: token,
            resetTokenExpiry: Date.now() + 3600000, // 1 hora
        });

        // Enviar e-mail
        await sendResetEmail(email, link);

        res.json({ message: 'Email enviado com sucesso!' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro no servidor' });
    }
});



//-------------------------------------------------------------------------------------------------

app.post('/novasenha', async (req, res) => {

    const { senha, token } = req.body
    console.log("token recebido:", token) //debug



    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await Cadastro.findOne({ where: { id: decoded.id } });

        if (!user || user.resetToken !== token || user.resetTokenExpiry < Date.now()) {
            return res.status(400).json({ message: 'Token inválido ou expirado' });
        }

        const hashedPassword = await bcrypt.hash(senha, 10);
        await user.update({
            senha: hashedPassword,
            resetToken: null,
            resetTokenExpiry: null
        });

        res.json({ message: 'Senha redefinida com sucesso!' });
    }
    catch (err) {
        console.error(err);
        return res.json({ message: 'Token inválido ou expirado' });
    }








}
)
//---------------------------------------------------------------------------

// Rota protegida para buscar usuário
const verifyToken = (req, res, next) => {
    const authHeader = req.headers;



    if (!authHeader) {
        return res.status(403).send('Token não fornecido');
    }

    const token = authHeader.authorization; // Extrai o token após "Bearer"

    console.log('Token recebido:', token); // Debug




    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        console.log(decoded.id);

        if (err) {
            console.error('Erro na verificação:', err); // Log do erro
            return res.status(401).send('Token inválido');
        }
        req.userId = decoded.id;
        next();
    });
};

app.get('/usuario', verifyToken, async (req, res) => {

    //buscar dados do usuario
    const user = await Cadastro.findOne({ where: { id: req.userId } })


    const cadastro = await Cadastro.findOne({
        where: { id: req.userId },
        include: Modulo, // Inclui os progressos associados
        through: {
            attributes: ['completed'], // Campo da tabela intermediária (Progresso)
        },
    });

    var completos = 0;


    if (cadastro) {
        // Itera pelos módulos associados

        cadastro.Modulos.forEach((modulo) => {
            console.log(`Módulo: ${modulo.title}`);
            console.log(`Progresso: ${modulo.Progresso.completed ? 'Concluído' : 'Pendente'}`);
            if (modulo.Progresso.completed == 1) {
                completos += 1
            }
        });
        console.log(completos)
    }
    res.json({ user, completos })

});

//------------------------------------------------------------
// Configurar o armazenamento das imagens
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Pasta onde as imagens serão armazenadas
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nome único para o arquivo
    },
});

const upload = multer({ storage: storage });

// Rota para upload de imagem
app.post('/upload', upload.single('profileImage'), verifyToken, async (req, res) => {
    if (req.file) {
        res.json({ imageUrl: `http://localhost:3000/uploads/${req.file.filename}` });
        const imageUrl = 'http://localhost:3000/uploads/' + req.file.filename
        const user = await Cadastro.findOne({ where: { id: req.userId } })
        await user.update({
            foto: imageUrl
        });


    } else {
        res.status(400).json({ error: 'Erro ao fazer upload.' });
    }
});
//----------------------------------------------------------------------------------
//rota para pegar pesquisar outros usuarios
app.post('/pesquisar', async (req, res) => {
    const { pesquisar } = req.body
    const user = await Cadastro.findOne({ where: { usuario: pesquisar } })



    res.send(user)
})

//rota para carregar o perfil de outro usuario

app.post('/mostrarUser', async (req, res) => {


    const usuario = req.body
    console.log(usuario.usuario)
    const user = await Cadastro.findOne({ where: { usuario: usuario.usuario } })

    if (!user) {
        return res.send('usuario nao encontrada')
    }

    const cadastro = await Cadastro.findOne({
        where: { usuario: usuario.usuario },
        include: Modulo, // Inclui os progressos associados
        through: {
            attributes: ['completed'], // Campos da tabela intermediária (Progresso)
        },
    });

    var completos = 0;


    if (cadastro) {
        // Itera pelos módulos associados

        cadastro.Modulos.forEach((modulo) => {
            console.log(`Módulo: ${modulo.title}`);
            console.log(`Progresso: ${modulo.Progresso.completed ? 'Concluído' : 'Pendente'}`);
            if (modulo.Progresso.completed == 1) {
                completos += 1
            }
        });

       console.log(completos)


    }

    return res.json({user, completos})
});
//---------------------------------------------------------------------
//rota para identificar o modulo

app.post('/requisitar', verifyToken, async (req, res) => {

    const id_modulo = req.body.id
    const id_usuario = req.userId

    const modulo = await Modulo.findOne({ where: { id: id_modulo } })
    res.send(modulo)


    //verificando se o progresso do usuario naquele modulo existe, caso nao, cria um

    const user = await Progresso.findOne({ where: { cadastroId: id_usuario, ModuloId: id_modulo } });
    if (!user) {
        const progresso = await Progresso.create({
            cadastroId: id_usuario,
            ModuloId: id_modulo

        })
        try {
            progresso
        } catch (err) {
            console.log(err)
        }

    }

    console.log(Modulo.associations)
    const cadastro = await Cadastro.findOne({
        where: { usuario: 'if you die' },
        include: Modulo, // Inclui os progressos associados
        through: {
            attributes: ['completed'], // Campos da tabela intermediária (Progresso)
        },
    });

    if (cadastro) {
        // Itera pelos módulos associados
        cadastro.Modulos.forEach((modulo) => {
            console.log(`Módulo: ${modulo.title}`);
            console.log(`Progresso: ${modulo.Progresso.completed ? 'Concluído' : 'Pendente'}`);
        });
    }

})

//-------------------------------------------------------------------
//rota para marcar modulo como concluido

app.post('/marcar', verifyToken, async (req, res) => {


    const id_usuario = req.userId
    const id_modulo = req.body.id

    const progresso = await Progresso.findOne({ where: { cadastroId: id_usuario, ModuloId: id_modulo } });


    if (progresso.completed == 0) {
        await progresso.update({
            completed: true

        })
        res.send("marcado como concluido")
    }

    else {
        await progresso.update({
            completed: false
        })
        res.send("marcado como nao concluido")
        return
    }


})
//------------------------------------------------------------------

app.post('/mostrarmaterial', async (req, res) =>{

    const id_modulo = req.body.id
    const tipo = req.body.tipo


    const material = await Material.findAll({ where: { modulosId: id_modulo, tipo: tipo } });
    console.log (material)

    res.json(material)


})









//-----------------------------------------
// Inicialização do servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
