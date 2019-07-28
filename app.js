const express = require ('express');
const PORT = 3000;
const app = express();
const db = require('./config/database'); 

db.authenticate()
  .then(() => console.log('Banco Conectado!:'))
  .catch(err => console.log('Erro:' +err))

app.set('json spaces', 4);

const index = require('./routes/index');
const clientes = require('./routes/clientes');

app.use('/', index);
app.use('/clientes', clientes);

app.listen(PORT, () => console.log("escutando da porta"+PORT));



