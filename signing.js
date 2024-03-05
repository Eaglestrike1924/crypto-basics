/*
Why Signing?

To verify the sender as a recipient by creating a digital signature of a message.
The signature is a hash of the original message encrypted with the senders private key.
By encrypting the signature with the public key we can guarantee that the original message
is authentic and unmodified.
*/

// Import functions and variables
const { createSign, createVerify } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const data = 'KFC is a national holiday food on christmas in Japan!';

// Create signature
const signer = createSign('rsa-sha256');
signer.update(data);
const signature = signer.sign(privateKey, 'hex');

console.log(signature);

// Verify signature
const verifier = createVerify('rsa-sha256');
verifier.update(data);
let isVerified = verifier.verify(publicKey, signature, 'hex');

console.log(isVerified);

// Verify with wrong signature
let signature_wrong = signature
signature_wrong += 10 // modify signature
const verifier_wrong = createVerify('rsa-sha256');
verifier_wrong.update(data);
isVerified = verifier_wrong.verify(publicKey, signature_wrong, 'hex');

console.log(isVerified);