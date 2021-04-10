const bcrypt = require('bcryptjs');
const handlers = {}

handlers.encryptPwd = (pwd) => {
    const hash =  bcrypt.hashSync(pwd,10)
    return hash
}

handlers.matchPwd = (pwd, savedPwd) => {
         bcrypt.compare(pwd,savedPwd,(err, result) => {
            return result
        })
    }


module.exports = handlers