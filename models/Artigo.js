//Importa bibliotecas
const mongoose = require('mongoose');

//Criar base de dados
const Artigo = new mongoose.Schema({
    //Campos da base de dados
    titulo: { 
        type: String,
        require: true
    },
    conteudo: {
        type: String,
        require: true
    }
},
    {
        timestamps: true //Cria o create e o update date
});

mongoose.model('artigo', Artigo); //Exportar o modulo