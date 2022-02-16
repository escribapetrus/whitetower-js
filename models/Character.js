class Character {
    constructor(name, lifeTotal, speed) {
        this.name = name;
        this.lifeTotal = lifeTotal;
        this.life = lifeTotal;
        this.speed = speed;
        this.initiative = 200;
    }

    isAlive() { return this.life > 0 }
    isReady() { return this.initiative == 200 }

    getName() { return this.name }
    getLifeTotal() { return this.lifeTotal }
    getLife() { return this.life }
    getInitiative() { return this.initiative }
    getSpeed() { return this.speed }

    decreaseLifeBy(x) {
        let remaining = this.life - x

        if (remaining > 0) {
            this.life = remaining
        }
        else {
            this.life = 0
        }

    }
    increaseLifeBy(x) {
        let remaining = this.life + x

        if (remaining < this.lifeTotal) {
            this.life = remaining
        }
        else {
            this.life = this.lifeTotal
        }
    }

    restoreLife() { this.life = this.lifeTotal }


    restoreInitiative() { this.initiative = 200 }
    resetInitiative() { this.initiative = 0 }
    increaseInitiative() {
        let remaining = this.initiative + this.speed;

        if (remaining < 200) {
            this.initiative = remaining;
        }
        else {
            this.initiative = 200
        }
    }
}

module.exports = Character