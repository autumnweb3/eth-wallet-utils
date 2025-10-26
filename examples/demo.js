// Node demo: generate a wallet and sign/verify a message
import { generateLocalWallet, verifyMessage } from "../src/index.js";

const wallet = generateLocalWallet();
const message = "hello web3";
const signature = await wallet.signMessage(message);
const recovered = verifyMessage(message, signature);

console.log("Generated:", wallet.address);
console.log("Signature:", signature);
console.log("Recovered:", recovered);
console.log("Match:", recovered.toLowerCase() === wallet.address.toLowerCase());
