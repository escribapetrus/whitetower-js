Class = require("../models/Class")

const classes = {
    "paladin": new Class("paladin", 1, 0, 1, 0),
    "sorcerer": new Class("sorcerer", 0, 0, 2, 0)
}

module.exports = classes