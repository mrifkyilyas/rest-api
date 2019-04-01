const jwt = require('jsonwebtoken')
module.exports = { authentication : function(req,res,next){
    try{
        const decoded = jwt.verify(req.headers.token,'secret_Code' )
        req.decoded = decoded
        next()
    }catch (err){
        res.status(400).json({msg:'authetication failed'})
    }

}}