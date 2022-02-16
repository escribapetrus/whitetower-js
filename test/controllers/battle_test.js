const assert = require("assert");
const { action, getActiveCharacter, updateInitiative } = require("../../controllers/battle");
const Ability = require("../../models/Ability");
const Fiend = require("../../models/Fiend");
const Hero = require("../../models/Hero");

describe("Battle Controller", () =>{
    describe("action", () => {
        it("should do damage to target", () => {
            let ability = new Ability("magic attack", "hybrid", 100, 1.25, 1.25),
                hero = new Hero("Thessalonike", 1000, 100, 200),
                enemy = new Fiend("test fiend", 1000, 100, 100);
    
            hero.learnAbility(ability);
            action(0, hero, enemy);
    
            assert.equal(enemy.getLife(), 525)
        });
    });
   
    describe("getActiveCharacter", () => {
        it("should return the fastest ready character", () => {
            let heroes = [
                new Hero("Thessalonike", 1000, 100, 200, 20),
                new Hero("Alexander", 1000, 200, 100, 25),
                new Hero("Aristotle", 800, 75, 75, 15)
            ];

            assert.equal(getActiveCharacter(heroes), heroes[1]);
        });

        it("should return the ready character", () => {
            let heroes = [
                new Hero("Thessalonike", 1000, 100, 200, 20),
                new Hero("Alexander", 1000, 200, 100, 25),
                new Hero("Aristotle", 800, 75, 75, 15)
            ];
            heroes[0].resetInitiative();
            heroes[1].resetInitiative();

            assert.equal(getActiveCharacter(heroes), heroes[2]);
        });

        it("should return the character with the most initiative", () => {
            let heroes = [
                new Hero("Thessalonike", 1000, 100, 200, 20),
                new Hero("Alexander", 1000, 200, 100, 25),
                new Hero("Aristotle", 800, 75, 75, 15)
            ];
            heroes[0].resetInitiative();
            heroes[1].resetInitiative();
            heroes[2].resetInitiative();
            heroes[0].increaseInitiative();

            assert.equal(getActiveCharacter(heroes), heroes[0]);
        });
    });

    describe("updateInitiative", () => {
        it("should increase initiative of all characters by speed", () => {
            let heroes = [
                new Hero("Thessalonike", 1000, 100, 200, 20),
                new Hero("Alexander", 1000, 200, 100, 25),
                new Hero("Aristotle", 800, 75, 75, 15)
            ];
            heroes[0].resetInitiative();
            heroes[1].resetInitiative();
            heroes[2].resetInitiative();

            updateInitiative(heroes)

            assert.equal(heroes[0].getInitiative(), heroes[0].getSpeed());
            assert.equal(heroes[1].getInitiative(), heroes[1].getSpeed());
            assert.equal(heroes[2].getInitiative(), heroes[2].getSpeed());
        });
    })
});