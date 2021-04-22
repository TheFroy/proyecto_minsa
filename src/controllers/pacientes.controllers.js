const pacientes = {}

var query
pacientes.getAll = (req, res) =>{
    req.getConnection((err, conn)=>{
        if(!err){
            query = 'select * from pacientes'
            conn.query(query, (err, rows)=>{
                if (err) return res.json(err)
                console.log(rows)
                res.json(rows)
            })
        }
        else{
            console.log(err)
        }
    })
}

pacientes.getOne = (req, res) => {
    req.getConnection((err, conn) => {
        const {id} = req.params
        if(!err){
            query = 'select * from pacientes where id = ?'
            conn.query(query, [id], (err, rows) => {
                res.json(rows)
                console.log(rows)
            })
        }
        else{
            res.json(err)
        }
    })
}


module.exports = pacientes