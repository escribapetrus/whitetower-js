var heroes = require("./data/heroes");
var abilities = require("./data/abilities");
var fiends = require("./data/fiends")
let battle = require("./controllers/battle")


heroes = Object.values(heroes);
abilities = Object.values(abilities);
fiends = Object.values(fiends);

heroes.forEach(hero => {
    hero.learnAbility(abilities[0]);
    hero.learnAbility(abilities[1]);
    hero.learnAbility(abilities[2]);
})

battle.battle(heroes, fiends)
