//Importar biblioteca e instânciar
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//Permissões 
app.use(express.json()); //usar no formato json

//Conexão com o banco de dados
mongoose.connect('mongodb://localhost/waleks',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com o MongoDB realizada com sucesso!");
}).catch((erro) => {
    console.log("Erro: Conexão com o MongoDB não realizada ");
});

//Rotas
app.get('/', (req, res) => {
    return res.json({titulo: "Como criar API"})
});

//Rodar o servidor
app.listen(8080, () => {
    console.log("Servidor inicado na porta 8080: http://localhost:8080/");
});