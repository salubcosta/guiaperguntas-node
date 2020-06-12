const Sequelize = require('sequelize');

// Source : https://sequelize.org/v5/manual/getting-started.html
const connection = new Sequelize('guideaskdb', 'salumao', '123456', {
    host: 'localhost',
    dialect: 'mariadb'
});

module.exports = connection;