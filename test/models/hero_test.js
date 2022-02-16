const assert = require('assert');
const abilities = require('../../data/abilities')
const Hero = require("../../models/Hero")

describe('Hero', () => {

    describe("isAlive", () => {
        it("should return true if life > 0", () => {
            let char = new Hero("Thessalonike", 1000, 100, 200);
            char.decreaseLifeBy(200);
    
            assert.equal(char.isAlive(), true);
        });

        it("should return false if life <= 0", () => {
            let char = new Hero("Thessalonike", 1000,);
            char.decreaseLifeBy(1200);
    
            assert.rejects(char.isAlive());
        });
    })

    describe('decreaseLifeBy', () => {
        it('should reduce life by x if remaining > 0', () =>  {
            let char = new Hero("Thessalonike", 1000, 100, 200);
            char.decreaseLifeBy(200);

            assert.equal(char.getLife(), 800);
        });

        it("should kill Hero when remaining < 0", () => {
            let char = new Hero("Thessalonike", 1000, 100, 200);
            char.decreaseLifeBy(10000);

            assert.equal(char.getLife(), 0);
            assert.rejects(char.isAlive());
        });
    });

    describe("increaseLifeBy", () => {
        it("should increase life by x if remaining < life total", () => {
            let char = new Hero("Thessalonike", 1000, 100, 200);
            char.decreaseLifeBy(400);
            char.increaseLifeBy(100);

            assert.equal(char.getLife(), 700);
        });
        it("should restore life if remaining > life total", () => {
            let char = new Hero("Thessalonike", 1000, 100, 200);
            char.decreaseLifeBy(4000);
            char.increaseLifeBy(10000);
            
            assert.equal(char.getLife(), char.getLifeTotal());
        })
    });

    describe("restoreLife", () => {
        it("should set life to lifeTotal", () => {
            let char = new Hero("Thessalonike", 1000, 100, 200);
            char.decreaseLifeBy(4000);
            char.restoreLife();

            assert.equal(char.getLife(), char.getLifeTotal());
        });
    });

    describe("learnAbility", () => {
        it("should add ability when there is free space", () => {
            let char = new Hero("Thessalonike", 1000, 100, 200);
            ability = abilities["raw magic"];
            char.learnAbility(ability);

            assert.equal(char.getAbilities().length, 1);
            assert.equal(char.getAbilities()[0].getName(), ability.name)
        });

        it("should not add ability when there is free space", () => {
            let char = new Hero("Thessalonike", 1000, 100, 200);
            char.abilities = [0,0,0,0,0]
            ability = abilities["raw magic"];

            assert.throws(() => char.learnAbility(ability))
        });
    });

    describe("unlearnAbility", () => {
        it("should unlearn ability", () => {
            let char = new Hero("Thessalonike", 1000, 100, 200);
            char.abilities = [1,2,3,4,5]
            ability = abilities["raw magic"];
            char.unlearnAbility(2);

            assert.equal(char.getAbilities().length, 4)
            assert.rejects(char.getAbilities().find(el => el == 2))
        })
    });

    describe("resetInitiative", () => {
        it("should set initiative to 0", () => {
            let char = new Hero("Thessalonike", 1000, 100, 200, 25);
            char.resetInitiative();

            assert.equal(char.getInitiative(), 0);
        });
    });

    describe("increaseInitiative", () => {
        it("should increase initiative by speed", () => {
            let char = new Hero("Thessalonike", 1000, 100, 200, 25);
            char.resetInitiative();
            char.increaseInitiative();

            assert.equal(char.getInitiative(), char.getSpeed());
        });
    });
    
    describe("increaseInitiative", () => {
        it("should set initiative to 200 when maxed", () => {
            let char = new Hero("Thessalonike", 1000, 100, 200, 25);
            char.increaseInitiative();

            assert.equal(char.getInitiative(), 200);
        });
    });
});