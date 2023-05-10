async function run() {
    const {
        ClientBuilder
    } = require('@iota/client');

    // Get the seed from environment variable
    const IOTA_SEED_SECRET = process.env.IOTA_SEED_SECRET;

    // client will connect to testnet by default
    const client = new ClientBuilder().build();

    const message = await client.message()
        .seed(IOTA_SEED_SECRET)
        .output('atoi1qrxtyks8shyryscvk0dfc58tv2lwmhx44nh06hf644c30ey4zj0pzr7vnrr', 1000000)
        .submit();

    console.log(message);
}

run()