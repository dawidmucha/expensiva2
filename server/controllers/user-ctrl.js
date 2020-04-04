const bcrypt = require('bcrypt')
const _ = require('lodash')
const User = require('../models/user-model')

const SALT_ROUNDS = 10

createUser = (req, res) => {
	const body = req.body
	let user

	if (!body) {
		return res.status(400).json({
			success: false,
			error: 'You must provide a user',
		})
	}
	
	bcrypt.hash(body.password, SALT_ROUNDS, (err, hash) => {
		if(err) return console.log('error while hashing password!', err)
		const bodyWithHashedPassword = { ...body, password: hash }
		user = new User(bodyWithHashedPassword)

		if (!user) { res.status(400).json({ success: false, error: 'err' }) }
	
		user.save().then(() => {
			return res.status(201).json({
				success: true,
				id: user._id,
				message: 'User created!',
			})
		}).catch(error => {
			return res.status(400).json({
				error,
				message: 'User not created!',
			})
		})
	})
}

updateUser = async (req, res) => {
	const body = req.body

	if (!body) {
		return res.status(400).json({
			success: false,
			error: 'You must provide a body to update',
		})
	}

	User.findOne({ _id: req.params.id }, (err, user) => {
		if (err || !user) {
			return res.status(404).json({
				err,
				message: 'User not found!',
			})
		}
		user.settings = {...user.settings, ...body.settings}
		user.email = body.email
		user.password = body.password
		user
			.save()
			.then(() => {
				return res.status(200).json({
					success: true,
					id: user._id,
					message: 'User updated!',
				})
			})
			.catch(error => {
				return res.status(404).json({
					error,
					message: 'User not updated!',
				})
			})
	})
}

deleteUser = async (req, res) => {
	await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
		if (err) {
			return res.status(400).json({ success: false, error: err })
		}

		if (!user) {
			return res
				.status(404)
				.json({ success: false, error: `User not found` })
		}

		return res.status(200).json({ success: true, data: user })
	}).catch(err => console.log(err))
}

getUserById = async (req, res) => {
	await User.findOne({ _id: req.params.id }, (err, user) => {
		if (err) {
			return res.status(400).json({ success: false, error: err })
		}

		if (!user) {
			return res
				.status(404)
				.json({ success: false, error: `User not found` })
		}
		return res.status(200).json({ success: true, data: user })
	}).catch(err => console.log(err))
}

getUsers = async (req, res) => {
	await User.find({}, (err, users) => {
		if (err) {
			return res.status(400).json({ success: false, error: err })
		}
		if (!users.length) {
			return res
				.status(404)
				.json({ success: false, error: `Users not found` })
		}
		return res.status(200).json({ success: true, data: users })
	}).catch(err => console.log(err))
}

addCategory = async (req, res) => {
	const body = req.body
	if(!body) {
		return res.status(400).json({ success: false, error: "you must provide a user id"})
	}

	User.findOne({ _id: req.params.id }, (err, user) => {
		if(err) {
			return res.status(400).json({ success: false, error: err})
		}
		if(!user) {
			return res.status(404).json({ success: false, error: "cannot find a user"})
		}

		user.categories = user.categories.concat([{ name: body.category }])
		user.save().then(() => {
			return res.status(200).json({
				success: true,
				message: 'Category added!',
			})
		}).catch(error => {
			return res.status(404).json({
				error,
				message: 'Category not added.',
			})
		})
	})
}

removeCategory = async (req, res) => {
	const body = req.body
	if(!body) {
		return res.status(400).json({ success: false, error: "you must provide a user id"})
	}

	User.findOne({ _id: req.params.id }, (err, user) => {
		if(err) {
			return res.status(400).json({ success: false, error: err})
		}
		if(!user) {
			return res.status(404).json({ success: false, error: "cannot find a user" })
		}
		if(!user.categories.find(category => category.name === body.category)) {
			return res.status(404).json({ success: false, error: "category not found" })
		}

		user.categories = user.categories.filter(category => {
			return category.name !== body.category
		})
		user.save().then(() => {
			return res.status(200).json({
				success: true,
				message: 'Category removed!',
			})
		}).catch(error => {
			return res.status(404).json({
				error,
				message: 'Category not removed.',
			})
		})
	})
}

addSubcategory = async (req, res) => {
	const body = req.body
	if(!body) {
		return res.status(400).json({ success: false, error: "you must provide a user id"})
	}

	User.findOne({ _id: req.params.id }, (err, user) => {
		if(err) {
			return res.status(400).json({ success: false, error: err})
		}
		if(!user) {
			return res.status(404).json({ success: false, error: "cannot find a user"})
		}

		const categoryIndex = user.categories.findIndex((category, i) => {
			return category.name === body.category
		})
		console.log(categoryIndex)
		user.categories[categoryIndex].subcategories = user.categories[categoryIndex].subcategories.concat({ name: body.subcategory})
		user.save().then(() => {
			return res.status(200).json({
				success: true,
				message: 'subcategory added!',
			})
		}).catch(error => {
			return res.status(404).json({
				error,
				message: 'subcategory not added.',
			})
		})
	})
}

removeSubcategory = async (req, res) => {
	const body = req.body
	if(!body) {
		return res.status(400).json({ success: false, error: "you must provide a user id"})
	}

	User.findOne({ _id: req.params.id }, (err, user) => {
		const categoryIndex = user.categories.findIndex((category, i) => {
			return category.name === body.category
		})

		if(err) {
			return res.status(400).json({ success: false, error: err})
		}
		if(!user) {
			return res.status(404).json({ success: false, error: "cannot find a user" })
		}
		if(!user.categories[categoryIndex].subcategories.find(subcat => subcat.name === body.subcategory)) {
			return res.status(404).json({ success: false, error: "subcategory not found" })
		}
		
		// let subcats = user.categories[categoryIndex].subcategories
		user.categories[categoryIndex].subcategories = user.categories[categoryIndex].subcategories.filter(subcat => {
			console.log(subcat.name, body.subcategory)
			return subcat.name !== body.subcategory
		})

		user.save().then(() => {
			return res.status(200).json({
				success: true,
				message: 'Category removed!',
			})
		}).catch(error => {
			return res.status(404).json({
				error,
				message: 'Category not removed.',
			})
		})
	})
}

module.exports = {
	createUser,
	updateUser,
	deleteUser,
	getUsers,
	getUserById,
	addCategory,
	removeCategory,
	addSubcategory,
	removeSubcategory
}