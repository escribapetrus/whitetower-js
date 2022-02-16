const Fiend = require("../models/Fiend");

const fiends = {
    "puck": new Fiend("Puck", 100, 10, 10, 7),
    "hobgoblin": new Fiend("Hobgoblin", 300, 30, 30, 18),
    "hydra spawn": new Fiend("Hydra Spawn", 700, 300, 30, 30, 12),
    "hydra": new Fiend("Hydra", 3000, 100, 30, 30, 15)
}

module.exports = fiends