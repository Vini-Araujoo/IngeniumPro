import express from 'express';
import publicRoutes from './routes/public.js'

const app = express();
app.use(express.json())

app.use('/', publicRoutes)

app.listen(3000, ()=>{
    console.log("Servidor aberto");
})

/*
Rotas precisam de: 
1)Tipo da rota(GET, POST, PUT, PATCH ou DELETE) -
2)Endereço
*/