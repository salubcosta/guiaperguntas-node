const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const connection = require('./database/database'); 
const Ask = require('./database/Ask');

/**
 * Conexão com Banco de dados
 */
connection.authenticate()
    .then(()=>{
        console.log('Connected on batabase')
    }).catch((err)=>{
        console.log('Oh no! There are something wrong. ', err);
    });

app.set('view engine', 'ejs'); // Estou dizendo para o express usar o ejs como view engine

app.use(express.static('public')); //Já está mapeado que arquivos estáticos estarão em public. Assim não precisa utilizar public/css/style.css no arquivo HTML

/** Dessa forma o node é capaz de pegar os dados do body em uma requisição */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Rotas
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
    // res.render('index');
    Ask.findAll({raw: true, order: [
        ['id','desc']
    ]}).then((ask)=>{
        res.render('index',{
            ask: ask
        });
    })
});

app.get('/ask', (req, res)=>{
    res.render('ask');
});

app.post('/saveask', (req, res)=>{    
    Ask.create({
        title: req.body.title,
        description: req.body.description
    }).then(()=>{
        res.redirect('/');
    }).catch((err)=>{
        res.send(`Something wrong happened. Error: ${err}`);
    }); 
});

app.get('/details/:id', (req, res)=>{
    let _id = Number(req.params.id);
    Ask.findOne({where: {id: _id}})
    .then((ask)=>{
        if(ask != undefined){
            res.render('details', { ask: ask });
        } else {
            res.send('Ask not found!');
        }
    });
    // Ask.findOne({where: {id: id}})
    // .then((ask) =>{
    //     if(ask != undefined){ //Ask found.
    //         res.send('Found!!!');
    //     } else{ //Not found
    //         res.send('Nothing found!');
    //     }
    // });
})
app.listen(4000, ()=>{
    console.log('Server running!');
});