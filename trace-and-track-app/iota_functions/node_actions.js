const crypto = require('crypto');

// generate a seed
function generateSeed() {
    const seed = crypto.createHash('sha256').update(crypto.randomBytes(256)).digest('hex');
    console.log(seed);
}

//Function exported
module.exports = { generateSeed };