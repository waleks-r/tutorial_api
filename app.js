//Importar biblioteca e instânciar
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const res = require('express/lib/response');

require("./models/Artigo"); //Importando models
const Artigo = mongoose.model('artigo');

const app = express();

//Permissões 
app.use(express.json()); //usar no formato json
res.header("Access-control-Allow-Origin", "*"); //Site que pode fazer acesso o "*" quer dizer que todos podem fazer a requisição
res.header("Access-control-Allow-Methods", "POST, PUT, GET, DELETE"); //Quais são os metodos que podem ser usados
app.use((req, res, nex) =>{
    app.use(cors());
    next();
})

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
    Artigo.find({}).then((artigo) => {
        return res.json(artigo);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum artigo encontrado!"
        });
    });
});

app.get('/artigo/:id', (req, res) => {
    Artigo.findOne({_id: req.params.id}).then((artigo) =>{
        return res.json(artigo)
    }).catch((erro) => {
            return res.status(400).json({
                error: true,
                message: "Nenhum artigo encontrado!"
        });
            });
});

app.put('/artigo/:id', (req, res) => {
    const artigo = Artigo.updateOne({_id: req.params.id}, req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Artigo não foi editado com sucesso!"
        });
        return res.json({
            error: false,
            message:"Artigo editado com sucesso!"
        });
    });
});

app.post("/artigo", (req, res) =>{
    const artigo = Artigo.create(req.body, (erro) => {
        if(erro) return res.status(400).json({ //Caso dê algum erro 
            error: true,
            message: "Error: Artigo não foi cadastrado com sucesso!"
        });
        return res.json({ //Caso não dê erro 
            error: false,
            message: "Artigo foi cadastrado com sucesso!"
    });
})
});

app.delete("/artigo/:id", (req, res) => {
    const artigo = Artigo.deleteOne({_id: req.params.id}, req.body, (err) =>{
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Artigo não foi apagado com sucesso!"
        })
        return res.json({
            error: false,
            message: "Artigo foi apagado com sucesso!"
        });
    });
});

//Rodar o servidor
app.listen(8080, () => {
    console.log("Servidor inicado na porta 8080: http://localhost:8080/");
});