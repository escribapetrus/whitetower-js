var Hero = require("../models/Hero")
const ask = require("../utils/ask");

const battle = {
    action: (abilityIndex, source, target) => {
        let { type, amount } = source.cast(abilityIndex);
        
        if (type == "damage") target.decreaseLifeBy(amount);
        source.resetInitiative();
    },
    updateInitiative: (characters) => {
        characters.forEach(c => c.increaseInitiative());
    },
    getActiveCharacter: (characters) => {
        let ready = characters.filter(c => c.isReady());
        if (ready.length > 0)
            return ready.reduce((a, b) => b.getSpeed() > a.getSpeed() ? b : a);
        else
            return characters.reduce((a, b) => b.getInitiative() > a.getInitiative() ? b : a);

    },
    battle: (party, enemies) => {
        party = party.filter(c => c.isAlive());
        enemies = enemies.filter(c => c.isAlive());

        if (party.length == 0) { 
            console.log("defeat");
            return "defeat" 
        };
        if (enemies.length == 0) { 
            console.log("victory");
            return "victory" 
        };

        let characters = party.concat(enemies);
        let activeCharacter = battle.getActiveCharacter(characters);
        battle.updateInitiative(characters);

        console.log(characters.map(({ name, life, initiative }) => ({ name, life, initiative })))
        console.log(`[TURN] ${activeCharacter.name}`)
        if (activeCharacter instanceof Hero) {
            let questions = [
                `[SELECT ABILITY]${activeCharacter.getAbilities().map(({ name }, i) => ` ${i}: ${name}`)}\n`,
                `[SELECT TARGET]${enemies.map(({ name }, i) => ` ${i}: ${name}`)}\n`
            ]
            ask(questions).then(([i, t]) => {
                let abilityIndex = parseInt(i);
                let target = enemies[parseInt(t)]
                battle.action(abilityIndex, activeCharacter, target)
                battle.battle(party, enemies)
            });
        }
        else {
            abilityIndex = 0;
            // DECIDE LATER HOW TO TARGET PARTY
            target = party[0];
            battle.action(abilityIndex, activeCharacter, target)
            battle.battle(party, enemies)
        }
    },
}

module.exports = battle