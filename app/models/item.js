/* Item mongoose model */
const mongoose = require('mongoose')

const Item = mongoose.model('Item', {
	name: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
	price: {
		type: Number,
		required: true,
		// default: 1
	}
})

module.exports = { Item }