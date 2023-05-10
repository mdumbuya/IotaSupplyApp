function run() {
    const crypto = require('crypto');
    const seed = crypto.createHash('sha256').update(crypto.randomBytes(256)).digest('hex');
    console.log(seed);

    const { ClientBuilder } = require('@iota/client');
    const client = new ClientBuilder().build();

    const mnemonic = client.generateMnemonic();
    console.log(mnemonic);

    const hexEncodedSeed = client.mnemonicToHexSeed(mnemonic);
    console.log(hexEncodedSeed);
}

run()

/* 7c71158fd4e0ca38d9a72eb8d1af5f462dcee80f6782647f12d9765327441b67
junior decade stereo require next goddess slide slight spatial erase actress october spirit desert fix machine syrup sugar angle drip distance seven already scheme
43b7e71af27ec313c43ece9b7ad0d5c0e7f3ce1f02e296f61124655a031bc243c3ffad3bfa0ee2963baa33bc1026b4608f63221ed39eef56095c3da347c351da
 */