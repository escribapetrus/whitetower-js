const Character = require("./Character");

class Hero extends Character {
    constructor(name, lifeTotal, strength, magic) {
        super(name, lifeTotal)
        this.strength = strength;
        this.magic = magic;
        this.abilities = []
    }

    getAbilities(){ return this.abilities }

    learnAbility(x){
        if (this.abilities.length >= 5){
            throw Error("Ability limit reached");
        }
        else {
            this.abilities.push(x)
        }
    }

    unlearnAbility(i){
        this.abilities.splice(i,1)
    }
}

module.exports = Hero