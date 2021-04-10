const bcrypt = require('bcryptjs')
const handlers = require("../../lib/handlers")

const usuarios = {}

var query 
usuarios.read = (req,res) => {
    req.getConnection((err, conn) => {
        query = "select * from usuarios"
        conn.query(query, (err, rows) => {
            if (err) return res.json(err);
            res.json(rows)
        })
    })
}

usuarios.readId = (req, res) => {
    const {id} = req.params
    req.getConnection((err,conn) => {
        query = "select * from usuarios where id = ?"
        conn.query(query,[id], (err,rows) => {
            if (err) return res.json(err);
            res.json(rows)
        })
    })
}

usuarios.create = (req, res) => {
    req.body.password = handlers.encryptPwd(req.body.password)
    const data = req.body
    req.getConnection((err, conn) => {
        query = "insert into usuarios set ?"
        conn.query(query, [data], (err, rows) => {
            if (err) return res.json(err);
            res.send(200);
            res.json(rows)
            console.log(req.body)
        })
    })
}

usuarios.auth = (req, res) => {
    const {cedula, password} = req.body
    req.getConnection((err, conn) => {
        query = "select * from usuarios where cedula = ?"
        if(!err){
            conn.query(query, [cedula,password], (err, rows) => {

                if (err) return res.json(err);

                if (rows.length > 0) {
                    bcrypt.compare(password,rows[0].password, (err,result) => {
                        if (result){
                            res.json("Sesion iniciada")
                            return true
                        }
                        else {
                            res.json("Contraseña incorrecta")
                            return false
                        }
                    });
                }
                else {
                    res.json("El usuario no existe")
                    return false
                }
            })
        }
        else{
            res.json(err)
        }
    })
}
module.exports = usuarios