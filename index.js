const express = require('express');

const app = express();

app.set('view engine', 'ejs'); // Estou dizendo para o express usar o ejs como view engine

app.get('/', (req, res)=>{
    res.render('index'); //Por padrão o express procura os arquivos de renderização na pasta views. Por isso não precisa incluir views/index.
});

app.listen(4000, ()=>{
    console.log('Server running!');
});