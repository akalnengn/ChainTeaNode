// src/utils.js

// Converting hex string to normal string
function hexToString(hex) {
    return Buffer.from(hex.replace(/^0x/, ''), 'hex').toString();
}

// Converting normal string to hex string
function stringToHex(str) {
    return '0x' + Buffer.from(str, 'utf8').toString('hex');
}

// Converting Ether to Wei
function etherToWei(ether) {
    return Web3.utils.toWei(ether.toString(), 'ether');
}

// Converting Wei to Ether
function weiToEther(wei) {
    return Web3.utils.fromWei(wei.toString(), 'ether');
}

module.exports = {
    hexToString,
    stringToHex,
    etherToWei,
    weiToEther
};
