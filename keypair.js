/*
Why Keypairs?

Sharing a single key through the internet is not secure. Thus use algorithm like RSA to
generate keypair which contains a public and private key (which are mathematically) 
linked. The public key can be public so that party A can encrypt messages sent to 
party B which can decrypt the message using their private key.
*/

// Import generateKeyPairSync from node crypto
const { generateKeyPairSync } = require('crypto');

// Generate (privateKey, publicKey) key pair using RSA 2048bits
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048, // the length of your key in bits
  publicKeyEncoding: {
    type: 'spki', // recommended to be 'spki' by the Node.js docs
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8', // recommended to be 'pkcs8' by the Node.js docs
    format: 'pem',
  },
});

module.exports = { privateKey, publicKey };

console.log(publicKey);
console.log(privateKey);

// It is to notice that the public key is shorter than the private key since the private
// key has a higher security risk.