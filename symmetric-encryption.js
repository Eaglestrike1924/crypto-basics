/*
Why Symmetric Encryption?

We want a confidential message to be reversible with the correct key. But we want to
be able to send the same message, without it being noticed (non determinism, unlike hashes).
*/

// Import functions from node cypto
const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

/// Cipher
const message = 'Dune 2 is a great movie!';
const key = randomBytes(32);
// Different iv (initial vector) is used every time to produce different cypher each time
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);

/// Encrypt

const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
console.log(`Encrypted: ${encryptedMessage}`);

/// Decrypt

const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf8');
console.log(`Deciphered: ${decryptedMessage.toString('utf-8')}`);

// Running this code multiple times shows, that the same message gets encoded differently.