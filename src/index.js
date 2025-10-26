import { ethers } from "ethers";

export function shortAddress(addr, chars = 4) {
  if (!addr) return "";
  return `${addr.slice(0, 2 + chars)}…${addr.slice(-chars)}`;
}

export async function getBrowserProvider() {
  if (typeof window !== "undefined" && window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    return provider;
  }
  throw new Error("No injected provider found");
}

export async function getSigner(provider) {
  const signer = await provider.getSigner();
  return signer;
}

export async function signMessage(signer, message) {
  return await signer.signMessage(message);
}

export function verifyMessage(message, signature) {
  return ethers.verifyMessage(message, signature);
}

export function generateLocalWallet() {
  return ethers.Wallet.createRandom();
}

// Quick validation for Ethereum addresses
export function isAddress(addr) {
  try {
    return ethers.isAddress(addr);
  } catch {
    return false;
  }
}
