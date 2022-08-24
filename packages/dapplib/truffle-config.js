require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inner drink fortune strategy guard render remain eternal gesture desert forget slam'; 
let testAccounts = [
"0xf4c36fecfc096298bc7a501cc234cbdaa48ad4dfd2fce726b93de2297050b5f9",
"0x3a3295800de6f1867296b4ffa7e360eb5a81cad8429e936b642d0861152f9826",
"0xb4443e69dfa01993643cdac7fd25f58186f441010994a1f45bea94ed0406d6b8",
"0x6f92e565696d48b7338e6f6f69121650a88d63545cf785d4aa98f795b6fda74a",
"0xf568136c4bfb9006281a131b9029341422768cfc122ff4854b6fcde562f3d4c6",
"0x140dca06a54727970ef2cb56b0cf4eb93139c672aa1e86d4dbd951d97841a637",
"0xe9e455fdd10d6246ec10bb117e3ade5425264d7a9aab89e3833c7c7ca40621de",
"0xb6f15677ced226b610a10f844b19c6f32304d55540028d560ee7845304b5d78c",
"0x5c906a2b145f39cb6b59e1901cc0524c549445dbc35d9ddb4e9cb29329426297",
"0x50278d5658d7e7f9addd9de7e439d16a400be0555068a31398320c923f42c01b"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


