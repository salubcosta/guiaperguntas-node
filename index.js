const express = require('express');

const app = express();

app.set('view engine', 'ejs'); // Estou dizendo para o express usar o ejs como view engine

app.use(express.static('public')); //Já está mapeado que arquivos estáticos estarão em public. Assim não precisa utilizar public/css/style.css no arquivo HTML

app.get('/', (req, res)=>{
    /**
     * Por padrão o express procura os arquivos de renderização na pasta views. Por isso não precisa incluir views/index.
     * res.render('index');
     * É possível passar valores para ser renderizado. Por exemplo:
     * res.render('index', {chave: valor, chave: valor})
     */
    // let name = 'Salumão Barbosa da Costa';
    // let language = 'Javascript'

    // res.render('index', {name: name, lang: language, age: 28});
    res.render('index');
});

app.get('/ask', (req, res)=>{
    res.render('ask');
});

app.listen(4000, ()=>{
    console.log('Server running!');
});