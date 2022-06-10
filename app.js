//Importar biblioteca e instânciar
const express = require('express');
const app = express();

//Permissões 
app.use(express.json()); //usar no formato json

//Rotas
app.get('/', (req, res) => {
    return res.json({titulo: "Como criar API"})
});

//Rodar o servidor
app.listen(8080, () => {
    console.log("Servidor inicado na porta 8080: http://localhost:8080/");
});