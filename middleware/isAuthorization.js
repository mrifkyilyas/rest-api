module.exports = {authorization : function(req,res,next){
    if(req.decoded.role == 'admin'){
        next()
    }else{
        res.status(401).json({msg:'authorization failed'})
    }

}}