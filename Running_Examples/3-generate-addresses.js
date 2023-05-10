// this code is run in the terminal
// export IOTA_SEED_SECRET=43b7e71af27ec313c43ece9b7ad0d5c0e7f3ce1f02e296f61124655a031bc243c3ffad3bfa0ee2963baa33bc1026b4608f63221ed39eef56095c3da347c351da
// replace the seed with your personal seed

async function run() {
  const { ClientBuilder } = require('@iota/client');

  // Get the seed from environment variable
  const IOTA_SEED_SECRET = process.env.IOTA_SEED_SECRET;

  // client will connect to testnet by default
  const client = new ClientBuilder().build();

  const addresses = await client.getAddresses(IOTA_SEED_SECRET)
    .accountIndex(0)
    .range(0, 5)
    .get();

  console.log(addresses);
}

run()
/* 
Generated Addresses
[
    'atoi1qrxtyks8shyryscvk0dfc58tv2lwmhx44nh06hf644c30ey4zj0pzr7vnrr',
    'atoi1qpjvhcqrfx8awxf57j3hjnr8e2upqc2ev936shjsqsc5qephajqr22crte6',
    'atoi1qp3q08fzat5ueknx6pug8k3m0sc687rmmtyghqzdg9cxvepfvxm06a79n9h',
    'atoi1qqemvcdrvyp9g8l4nda2z3y85alhe4a5l60xhetahw2xyveezy3ex6lqds2',
    'atoi1qpgfwhkspqtgcrth8vmcvxcpfuduak2h06wen7yeg7zgr3ta7wn7wq89cha'
] */