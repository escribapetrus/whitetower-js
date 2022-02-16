const Hero = require("../models/Hero");

const heroes = {
    "Alexander": new Hero("Alexander", 1500, 200, 100, 25),
    "Thessalonike": new Hero("Thessalonike", 1000, 100, 200, 20),
    "Aristotle": new Hero("Aristotle", 1000, 70, 70, 15)
}

module.exports = heroes