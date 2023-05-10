async function run() {
    const { ClientBuilder } = require('@iota/client');

    // client will connect to testnet by default
    const client = new ClientBuilder().build();

    const message = await client.message()
        .index('IOTA.RS BINDING - NODE.JS')
        .data('A test message group 2.3 ICTE')
        .submit();

    console.log(message);
}

// messageId: '836bfbfeeb8ff983f22efb2466a6be470edfbd61a83cb0cc7bd9974cd458f37b'
run()