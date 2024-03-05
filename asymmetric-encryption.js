/*
Why Asymmetric Encryption?

Sending data through the web is risky. Thus we want to encrypt this data which can only
be decrypted by the party we intendet to send the data.
By using assymetric encrpytion every party which has the public key can encrypt a
message but only the party with the private key can decrypt the message.

E.g. Using HTTPS to establish an encrypted connection to a website. 
The browser finds the public key of an SSL certificate installed on the website, 
which is used to encrypt any data you send, then the private key decrypts it.
*/

// Import functions
const {  publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const secretMessage = 'Suprise! The spanish inquisition!'

// Encypt data with public key
const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(secretMessage) // needs to be in buffer format
  );

// Display encrypted data
console.log(encryptedData.toString('hex'))

// Decrypt data with private key
const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
);

// Display decrypted data
console.log(decryptedData.toString('utf-8'));