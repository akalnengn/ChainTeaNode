// src/blockchain.js
const Web3 = require('web3');
const BigNumber = require('bignumber.js');

// Creating a Web3 instance
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'));

// Function to query the balance of an address
async function getBalance(address) {
  try {
    const balanceWei = await web3.eth.getBalance(address);
    const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
    return new BigNumber(balanceEther).toFixed(2); // Balance in Ether
  } catch (error) {
    console.error(`An error occurred while querying the balance: ${error}`);
    throw error;
  }
}

// Function to send a transaction
async function sendTransaction(fromAddress, privateKey, toAddress, amountEther) {
  try {
    const nonce = await web3.eth.getTransactionCount(fromAddress);
    const gasPrice = await web3.eth.getGasPrice();
    const gasLimit = 21000; // Sufficient for a simple ETH transfer

    const transaction = {
      to: toAddress,
      value: web3.utils.toWei(amountEther.toString(), 'ether'),
      gas: gasLimit,
      gasPrice: gasPrice,
      nonce: nonce,
      chainId: await web3.eth.getChainId()
    };

    const signedTransaction = await web3.eth.accounts.signTransaction(transaction, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
    return receipt;
  } catch (error) {
    console.error(`An error occurred while sending the transaction: ${error}`);
    throw error;
  }
}

module.exports = { getBalance, sendTransaction };
