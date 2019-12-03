/* User model */
'use strict';

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const ItemSchema = new mongoose.Schema({
	name: String,
	description: String,
	price: String,
	duration: String,
	location: String,
	image: {data: Buffer, contentType: String }
});

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const UserSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	lastname: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	phonenumber: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
		validate: {
			validator: validator.isEmail,   // custom validator
			message: 'Not valid email'
		}
	}, 
	location: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
	},
	username: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	password: {
		type: String,
		required: true,
		minlength: 6
	},
	usertype: {
		type: Boolean,
		default: false
	},
	itemlist: {
		type: Object,
		default: [ItemSchema]

	},
	description: {
		type: String,
		default: "Hi! Welcome to my profile."
	}
})

// An example of Mongoose middleware.
// This function will run immediately prior to saving the document
// in the database.
UserSchema.pre('save', function(next) {
	const user = this; // binds this to User document instance

	// checks to ensure we don't hash password more than once
	if (user.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash
				next()
			})
		})
	} else {
		next()
	}
})

// A static method on the document model.
// Allows us to find a User document by comparing the hashed password
//  to a given one, for example when logging in.
UserSchema.statics.findByEmailPassword = function(email, password) {
	const User = this // binds this to the User model

	// First find the user by their email
	return User.findOne({ email: email }).then((user) => {
		if (!user) {
			return Promise.reject()  // a rejected promise
		}
		// if the user exists, make sure their password is correct
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					resolve(user)
				} else {
					reject()
				}
			})
		})
	})
}

// make a model using the User schema
const User = mongoose.model('User', UserSchema)
module.exports = { User }

