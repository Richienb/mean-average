const test = require("ava")
const meanAverage = require(".")

test("main", t => {
	t.is(meanAverage([1, 2, 6]), 3)
})
