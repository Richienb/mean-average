"use strict"

const totalled = require("totalled")

module.exports = array => {
	if (!Array.isArray(array)) {
		throw new TypeError("An array of numbers must be provided!")
	}

	if (array.length === 0) {
		return NaN
	}

	return totalled(array) / array.length
}
