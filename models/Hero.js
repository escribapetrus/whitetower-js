const Character = require("./Character");

class Hero extends Character {
    constructor(name, lifeTotal, strength, magic, speed) {
        super(name, lifeTotal, speed)
        this.strength = strength;
        this.magic = magic;
        this.abilities = [];
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

    cast(abilityIndex){
        let ability = this.abilities[abilityIndex]
        return {
            type: "damage",
            amount: ability.rawDamage + (this.strength * ability.strengthMultiplier) + (this.magic * ability.magicMultiplier)
        }
    }
}

module.exports = Hero