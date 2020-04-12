const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const userRouter = express.Router()

userRouter.post('/user', UserCtrl.createUser)
userRouter.put('/user/:id', UserCtrl.updateUser)
userRouter.delete('/user/:id', UserCtrl.deleteUser)
userRouter.get('/user/:id', UserCtrl.authenticateToken, UserCtrl.getUserById)
userRouter.get('/users', UserCtrl.getUsers)
userRouter.post('/login', UserCtrl.logInUser)
userRouter.delete('/logout', UserCtrl.logOutUser)

userRouter.put('/user/:id/categories', UserCtrl.addCategory)
userRouter.delete('/user/:id/categories', UserCtrl.removeCategory)
userRouter.put('/user/:id/subcategories', UserCtrl.addSubcategory)
userRouter.delete('/user/:id/subcategories', UserCtrl.removeSubcategory)

module.exports = userRouter