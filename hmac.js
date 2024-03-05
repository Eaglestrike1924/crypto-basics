/*
Why Hmac?

We want to know whether the created hash is authentic or not. Therefore we add a key
which has to be inputed in the hashing process which creates a unique output and
therefor guarantees the authenticity and originator of the data.
*/

// Import createHmac from node crypto
const { createHmac } = require('crypto');


const password = 'Very-important-secret!';
const message = 'Alice likes Bob!'

// Create Hmac and create a hash of the message using the password
const hmac = createHmac('sha256', password).update(message).digest('hex');
console.log(hmac)

// Create Hmac and create a hash of the same message using the wrong password
const password_false = 'Wrong-Password!'
const hmac_false = createHmac('sha256', password_false).update(message).digest('hex');
console.log(hmac_false)

const match = hmac === hmac_false

console.log(match ? '✔️  authentic message' : '❌  not authentic message');