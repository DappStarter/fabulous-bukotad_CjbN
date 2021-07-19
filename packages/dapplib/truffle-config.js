require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain exchange hidden knife blue size'; 
let testAccounts = [
"0xc46acb99a8c6ed8a26ccebdfc458d301ae65ed45c210c5c13bce6668a1d4a6bf",
"0xcd0eee4a5f1e547fcb111c96b55a3c44be8b27f91dad33c55a0340cf4c0b9431",
"0x6af592aa98377d93cb35d0922ee71697274aa07b1f173f3ef9fb75da1acee1cc",
"0x3f11deaf447466a73fdc75b9e3e6e639bd6a690e3cc4fba92b65ef5d35a5c974",
"0x4ad9f200b79c75a4784b64a06ed78c7c563031e9c8cd204ee473fdca59df8718",
"0x5579b70019533f67339a75c1ba1ca4389e77651ad7aaf08ec90a566eea544e43",
"0xe2ce55233a53ad6c32a248ba62aecc2b4c43d4e185e723ce7ba4aceb2b5ae7be",
"0x3751f1d6d22f0c3bd7cfd4349038068f9c7d0cf601ad1e5f64f0d24c3e3c205a",
"0x024164dbd33ac5a3894c72ed7b705084024aa7914062ad16face76a2cf003195",
"0xe2a7839538846765ee6083cad7857535ca30cdcfa3c35e2a451de76af5640fe8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


