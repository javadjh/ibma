const Jwt = require('jsonwebtoken')
module.exports = (data)=>{
    return Jwt.sign(data, "=WA8xcp&qPesz%YJ4RFBq");
}
