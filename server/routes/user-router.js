const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.put('/user/:id', UserCtrl.updateUser)
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:id', UserCtrl.authenticateToken, UserCtrl.getUserById)
router.get('/users', UserCtrl.getUsers)
router.post('/login', UserCtrl.logInUser)
router.delete('/logout', UserCtrl.logOutUser)

router.put('/user/:id/categories', UserCtrl.addCategory)
router.delete('/user/:id/categories', UserCtrl.removeCategory)
router.put('/user/:id/subcategories', UserCtrl.addSubcategory)
router.delete('/user/:id/subcategories', UserCtrl.removeSubcategory)

module.exports = router