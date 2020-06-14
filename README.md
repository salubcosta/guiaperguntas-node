# Guia Perguntas e Respostas
Este é um projeto de perguntas e respostas para testar conhecimentos.

Faz parte de curso Formação Node do <a href='https://www.udemy.com/course/formacao-nodejs/' target='_blank'>guiadoprogramador.</a>

Tanto o backend quanto o frontend será realizado neste único projeto.

Aqui será abordado: NodeJS, JS, EJS (para front) e MariaDB.

### Se quiser testar:
Clone o projeto:
<code>git clone https://github.com/salubcosta/guiaperguntas-node.git </code>

Instale as dependências:
<code>npm install</code>

Para executar o projeto:
<code>npm run dev</code>


### meu log
Para iniciar o projeto Nodejs:
<code>
npm init
</code>

Trabalhar com rotas, utilizamos o express. Sua instalação no projeto:
<code>
npm install express --save
</code>

Renderização de interfaces será responsabilidade do EJS. Para incluir:
<code>
npm install ejs --save
</code>

Para deixar de forma automática a reinicialização do servidor quando realizar alguma alteração, tipo hot reload. Faça:
<code>
npm install nodemon --save
</code>

O node em si não sabe converter dados do body para o formato que precisamos. Para tanto, existe um módulo capaz de fazer esta conversão. Execute:
<code>
npm install body-parser --save
</code>

Para trabalhar com bando de dados, podemos utilizar uma biblioteca que irá nos auxiliar. Sequelizer.
<code>
npm install sequelize --save
</code>

Como este projeto está utilizando o MariaDB. Segue o fluxo:
<code>
npm install --save mariadb
</code>

Dessa forma podes usar <code>nodemon index.js</code>. Ou ainda, ir no arquivo package.json e na chave scripts incluir o seguinte:
<code>"dev": "nodemon index.js"</code>

Agora para iniciar o servidor para todo sempre amém, basta digitar: <code>npm run dev</code>

### Screenshots

Home
<img src='https://raw.githubusercontent.com/salubcosta/guiaperguntas-node/master/public/screenshots/screenshot-home.png' width='100%'> 


Details and Answer
<img src='https://raw.githubusercontent.com/salubcosta/guiaperguntas-node/master/public/screenshots/screenshot-details-and-answer.png' width='100%'> 


Ask
<img src='https://raw.githubusercontent.com/salubcosta/guiaperguntas-node/master/public/screenshots/screenshot-ask.png' width='100%'> 
<hr />

Thank you for coming here,<br />
You can know more about me at: <a href="https://www.linkedin.com/in/salumao/" target="_blank">LinkedIn</a>
