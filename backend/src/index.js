const express = require('express');
const routes = require('./routes'); //./ porque é um arquivo, e nao um modulo
const cors = require('cors');

const app = express(); //instanciando o app 

app.use(cors());
app.use(express.json()); //todos os body da aplicação, serão lidos em formato JSON.
app.use(routes);

/**tipos de parametros:
Query params: parametros paassados na rota apos o '?' (filtros, paginação)
Route params: identifica recursos. Ex: /user/:id - /user/1
Request body: corpo da requisição. Utilizado para criar ou alterar recursos.

*/


app.listen(3333); //definindo a porta