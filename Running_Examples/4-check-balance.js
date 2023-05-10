async function run() {
    const { ClientBuilder } = require('@iota/client');

    // Get the seed from environment variable
    const IOTA_SEED_SECRET = process.env.IOTA_SEED_SECRET;

    // client will connect to testnet by default
    const client = new ClientBuilder().build();

    // Get the balance of a single known address
    console.log(
        await client.getAddressBalance("atoi1qrxtyks8shyryscvk0dfc58tv2lwmhx44nh06hf644c30ey4zj0pzr7vnrr")
    );

    // Get the balance of addresses from an account
    const balance = await client.getBalance(IOTA_SEED_SECRET)
        .accountIndex(0)
        .initialAddressIndex(0)
        .get();

    console.log("Account balance: " + balance);
}

run()