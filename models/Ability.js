class Ability {
    constructor(name, type, rawDamage, strengthMultiplier, magicMultiplier){
        this.name = name;
        this.type = type;
        this.rawDamage = rawDamage;
        this.strengthMultiplier = strengthMultiplier;
        this.magicMultiplier = magicMultiplier;
    }

    getName() { return this.name }
}

module.exports = Ability