
const { ClientBuilder } = require('@iota/client')
const client = new ClientBuilder()
    .node('https://api.lb-0.h.chrysalis-devnet.iota.cafe:443')
    .localPow(true)
    .build()
client.getInfo().then(console.log).catch(console.error)