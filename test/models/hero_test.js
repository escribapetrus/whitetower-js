var assert = require('assert');
const abilities = require('../../data/abilities')
var Hero = require("../../models/Hero")

describe('Hero', () => {

    describe("isAlive", () => {
        it("should return true if life > 0", () => {
            char = new Hero("Thessalonike", 8000);
            char.decreaseLifeBy(2000);
    
            assert.equal(char.isAlive(), true);
        })
        it("should return false if life <= 0", () => {
            char = new Hero("Thessalonike", 8000);
            char.decreaseLifeBy(9000);
    
            assert.rejects(char.isAlive());
        })
    })

    describe('decreaseLifeBy', () => {
        it('should reduce life by x if remaining > 0', () =>  {
            char = new Hero("Thessalonike", 8000);
            char.decreaseLifeBy(2000);

            assert.equal(char.getLife(), 6000);
        });

        it("should kill Hero when remaining < 0", () => {
            char = new Hero("Thessalonike", 8000);
            char.decreaseLifeBy(10000);

            assert.equal(char.getLife(), 0);
            assert.rejects(char.isAlive());
        });
    });

    describe("increaseLifeBy", () => {
        it("should increase life by x if remaining < life total", () => {
            char = new Hero("Thessalonike", 8000);
            char.decreaseLifeBy(4000);
            char.increaseLifeBy(1000);

            assert.equal(char.getLife(), 5000);
        });
        it("should restore life if remaining > life total", () => {
            char = new Hero("Thessalonike", 8000);
            char.decreaseLifeBy(4000);
            char.increaseLifeBy(10000);
            
            assert.equal(char.getLife(), char.getLifeTotal());
        })
    });

    describe("restoreLife", () => {
        it("should set life to lifeTotal", () => {
            char = new Hero("Thessalonike", 8000);
            char.decreaseLifeBy(4000);
            char.restoreLife();

            assert.equal(char.getLife(), char.getLifeTotal());
        });
    });

    describe("learnAbility", () => {
        it("should add ability when there is free space", () => {
            char = new Hero("Thessalonike", 8000);
            ability = abilities["raw magic"];
            char.learnAbility(ability);

            assert.equal(char.getAbilities().length, 1);
            assert.equal(char.getAbilities()[0].getName(), ability.name)
        });

        it("should not add ability when there is free space", () => {
            char = new Hero("Thessalonike", 8000);
            char.abilities = [0,0,0,0,0]
            ability = abilities["raw magic"];

            assert.throws(() => char.learnAbility(ability))
        });
    });

    describe("unlearnAbility", () => {
        it("should unlearn ability", () => {
            char = new Hero("Thessalonike", 8000);
            char.abilities = [1,2,3,4,5]
            ability = abilities["raw magic"];
            char.unlearnAbility(2);

            assert.equal(char.getAbilities().length, 4)
            console.log(char.getAbilities())
            assert.rejects(char.getAbilities().find(el => el == 2))
        })
    })
});