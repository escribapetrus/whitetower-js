const Character = require("./Character");

class Fiend extends Character{
    constructor(name, lifeTotal, strength, magic, speed) {
        super(name, lifeTotal, speed)
        this.strength = strength;
        this.magic = magic;
    }

    cast(){
        return {
            type: "damage",
            amount: this.strength + this.magic
        }
    }
}

module.exports = Fiend;