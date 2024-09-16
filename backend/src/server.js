 const express = require('express');
 const routes = require('./routes');
 const arquivos = require('./arquivo_diretorio');
 const app = express();

 app.use(express.json());
 app.use(routes);
 app.use(arquivos);

 app.get('/', (req, res)=>{
    res.send('Olá mundo');
 });

 app.listen(3001,()=>{
        console.log('conectando porta padrão 3001')

 });