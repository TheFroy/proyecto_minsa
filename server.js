const express = require('express');
const morgan = require('morgan');
const myConnection = require('express-myconnection');
const dotenv = require('dotenv');
const mysql = require('mysql')
const app = express()

const usuariosRoute = require('./src/routes/usuarios.routes')

//settings
dotenv.config({path: './.env'})
app.use(express.urlencoded({extended: true}));
app.set('port', process.env.PORT || 5000)

//middlewares
app.use(myConnection(mysql,{
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
},'request'));
app.use(morgan('dev'))

app.use('/usuarios',usuariosRoute)

app.listen(app.get('port'), () => {
    console.log('Server running on port ' + app.get('port'))
})