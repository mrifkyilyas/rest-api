const express = require('express')
const route = express.Router()
const user = require('./user')
const Controller = require('../controllers/')

route.use('/users/',user)
route.post('/signup',Controller.signup)
route.post('/signin',Controller.signin)




module.exports = route
