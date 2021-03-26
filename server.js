const express = require('express');
const morgan = require('morgan');
const myConnection = require('express-myconnection');
const dotenv = require('dotenv');
const mysql = require('mysql')

const app = express()

//settings
dotenv.config({path: './.env'})
app.set('port', process.env.PORT || 5000)

//middlewares
app.use(myConnection(mysql,{
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
},'single'));
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('hola ericka')
})

app.listen(app.get('port'), () => {
    console.log('Server running on port ' + app.get('port'))
})