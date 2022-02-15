class Character {
    constructor(name, lifeTotal) {
        this.name = name;
        this.lifeTotal = lifeTotal;
        this.life = lifeTotal;
    }

    isAlive() { return this.life > 0 }

    getName() { return this.name }
    getLifeTotal() { return this.lifeTotal }
    getLife() { return this.life }

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

        if (remaining < this.lifeTotal){
            this.life = remaining
        }
        else {
            this.life = this.lifeTotal
        }
    }

    restoreLife() { this.life = this.lifeTotal }
}

module.exports = Character