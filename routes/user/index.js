const express = require('express')
const route = express.Router()
const ControllerUser = require('../../controllers/user')
const {authentication} = require('../../middleware/isAuthentication')
const {authorization } = require('../../middleware/isAuthorization')

route.use('/',authentication)
route.get('/',authorization,ControllerUser.getAllUser)
route.get('/:id',authorization,ControllerUser.getOne)
route.post('/',authorization,ControllerUser.create)
route.delete('/:id',authorization,ControllerUser.delete)
route.put('/:id',authorization,ControllerUser.update)






module.exports = route