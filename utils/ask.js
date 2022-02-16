const readline = require("readline");

function askQuestion(rl, question) {
    return new Promise((resolve, reject) => {
        try {
            rl.question(question, answer => resolve(answer));
        } catch (error) {
            reject(error);
        }
    });
}

function ask(questions){
    return new Promise(async resolve => {
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
            });

        let results = [];
        for (let i = 0; i < questions.length; i++) {
            const res = await askQuestion(rl, questions[i]);
            results.push(res);
        }
        rl.close();
        resolve(results);
    })
}

module.exports = ask