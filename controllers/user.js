const {User} = require('../models/')
class ControllerUser {
    static getAllUser(req,res){
        User
        .findAll()
        .then(users=>{
            res.status(200).json(users)
        })
        .catch(err=>{
            res.status(500).json(err)
        })        
    }

    static getOne(req,res){
        User
        .findByPk(req.params.id)
        .then(user=>{
            res.status(200).json(user)
        })
        .catch(err=>{
            res.status(500).json(err)
        })

    }

    static create(req,res){
        User
        .create(req.body)
        .then(success=>{
            res.status(201).json('berhasil create')
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static delete(req,res){
        User
        .findByPk(req.params.id)
        .then(user=>{
            return user.destroy()
        })
        .then (succes=>{
            res.status(200).json('berhasil menghapus')
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static update(req,res){
        User
        .findByPk(req.params.id)
        .then(user=>{
            return user.update(req.body)

        })
        .then(succes=>{
            res.status(200).json('berhasil mengupdate')
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }

    static signup(req,res){
        
    }
    


}

module.exports = ControllerUser