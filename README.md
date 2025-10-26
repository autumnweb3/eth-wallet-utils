\# eth-wallet-utils

Small utils for interacting with Ethereum-compatible wallets using `ethers`.



\## Features

\- Connect to MetaMask / injected provider

\- Generate a random wallet (local)

\- Sign and verify messages

\- Format addresses



\## Quickstart

```bash

npm i ethers

node examples/demo.js

## Usage Example

```js
import { generateLocalWallet, verifyMessage } from "eth-wallet-utils";

const wallet = generateLocalWallet();
const msg = "gm web3";
const sig = await wallet.signMessage(msg);
console.log("verified:", verifyMessage(msg, sig));




