/* 
Why Hash?

Useful for storing user data without knowing true value (e.g. saving user pwd).
Takes an input value of any length and outputs a fixed length value.
Creates a random, unique, fixed-length string from a given input.
Hash functions are deterministic.
They are fast to compute, but computationally expensive to find the original input.
Although there is a small probability of collision (unique).
*/

// Import createHash function from node crypto
const { createHash } = require('crypto');

// Create a string hash
// Input: String
// Ouput: Hash-String
function hash(str) {
    // SHA : "Secure Hashing Algorithm " 256-bits
    // createHash: returns hash value (digest)
    // digest: common formats 'hex' or 'base64'
    return createHash('sha256').update(str).digest('hex');
}

// Create hashed passwords and log them

let pwd = 'cryptography';
const hash1 = hash(pwd);
console.log(hash1)

pwd = 'cryptography sucks';
const hash2 = hash(pwd);
console.log(hash2)

pwd = 'cryptography'
const hash3 = hash(pwd)
console.log(hash3)

let match = hash1 === hash2;

// Consol log whether hashes matches or not

console.log('Match hash1 & hash2:')
console.log(match ? '✔️  good password' : '❌  password doesn\'t match');

match = hash1 === hash3;

console.log('Match hash1 & hash3:')
console.log(match ? '✔️  good password' : '❌  password doesn\'t match');