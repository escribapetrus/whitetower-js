const Ability = require("../models/Ability");

const abilities = {
    "raw attack": new Ability("raw attack", "physical", 0, 1.5, 0),
    "raw magic": new Ability("raw attack", "magic", 0, 0, 1.5),
    "magic attack": new Ability("magic attack", "hybrid", 0, 1.25, 1.25)
}

module.exports = abilities