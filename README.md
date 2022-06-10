Criar o arquivo package
npm init

//Gerencia as requisições, rota e url, entre outra funcionalidades
npm install express

//Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte ( formato de Desenvolvedor )
npm i -D nodemon

//Instalar o gitignore para ignorar arquivos que não queremos que suba para o github
npm i gitignore -g
gitignore node

//Instalar o moongoDB 
npm i --save mongodb 

//Instalar o mongoose - Mongoose traduz os dados do banco de dados pra pbjetos javaScript para que possam ser utulizados por sua aplicação.
npm i --save mongoose

//Instalar o cors - faz o filtro de quais sites ou metodos podem usar API
npm i cors --save

Como rodar o servidor

//com o nodemon 
nodemon app.js

//sem nodemon
node app.js

//Usar API
http://localhost:8080/

//Como utilizar repositorio baixado do github
abra a pasta raiz do sistema e no termimanal utilize o comando npm i

Programação 

//Importar bibliotecas necessárias para para projeto rodar: express
criar rota principal, configurar o servidor
