
 async function run() {
    const { ClientBuilder } = require('@iota/client');

    // client will connect to testnet by default
    const client = new ClientBuilder().build();

    const output = await client.getOutput('bf503cc4c60bd1320e952f4d994099ad34a820fcd196f04accdd9c5ac0fe4931:1');
    console.log(output);
}

run()