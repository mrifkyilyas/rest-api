const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
    User
} = require('../models/')
class Controller {
    static signup(req, res) {
        User
            .create(req.body)
            .then(success => {
                res.status(201).json('berhasil signup')
            })
            .catch(err => {
                res.status(500).json(err)
            })
        // res.json('lalala')
    }
    static signin(req, res) {
        let {
            username,
            password
        } = req.body
        User
            .findOne({
                where: {
                    username
                }
            })
            .then(user => {
                if (!user) {
                    res.status(401).json('password/username salah,username gak ada')
                } else {                  
                    if(!bcrypt.compareSync(password, user.password)){
                        res.status(401).json('password/username salah')
                    }else{
                        let token = jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET);
                        // req.header.token = token
                        res.status(200).json({                          
                           token
                        })
                    }
                }
            })

    }

}

module.exports = Controller