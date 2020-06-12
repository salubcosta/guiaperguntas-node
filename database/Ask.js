const Sequelize = require('sequelize');
const connection = require('./database');

const Ask = connection.define('ask', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Ask.sync({force: false}).then(()=>{
    console.log('Table created');
}).catch(err=>{
    console.log('Something wrong on create table. ', err);
});

module.exports = Ask;