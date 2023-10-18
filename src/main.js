const { BlockChain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myPrivateKey = ec.keyFromPrivate(
  "fce81e24911d210d43bc58fd76b4734b6e0654be2d8443e069e6f00e65856753"
);
const myWalletAddress = myPrivateKey.getPublic("hex");

let sadraCoin = new BlockChain();
const tx1 = new Transaction(myWalletAddress, "public key goes here", 10);
tx1.signTransaction(myPrivateKey);
sadraCoin.addTranasction(tx1);

console.log("starting the miner");
sadraCoin.minePendingTransactions(myWalletAddress);

console.log("myWalletAddress", sadraCoin.getBalanceOfAddress(myWalletAddress));
