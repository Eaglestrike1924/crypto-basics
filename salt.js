/*
Why Salt?

Users input weak pwds often that can be easily be searched in a rainbow table.
Thus we append a random string to an input before hashing to make the hash more
unique and harder to guess.
*/

// Import fuctions from node crypto
const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

// Create email and pwd pair using salt on pwd
// Input: email String, password String
// Output: (email, pwd) pair
function signup(email, password) {
    const salt = randomBytes(16).toString('hex');
    
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user = { email, password: `${salt}:${hashedPassword}` }
  
    users.push(user);

    return user
}

// Simulate login of user with email and pwd
// Input: email String, password String
// Output: String representing successful/failed login process
function login(email, password) {
    const user = users.find(v => v.email === email);
  
    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);
  
    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);
    
    if (match) {
        return 'Login successful!'
    } else {
        return 'Login failed!'
    }
}

const users = [];

// Create (email, pwd) pair
const user = signup('foo@bar.com', 'pa$$word');
console.log(user)

// Check if login is successful with wrong password
let result = login('foo@bar.com', 'password')
console.log(result)

// Check if login is successful with right password
result = login('foo@bar.com', 'pa$$word')
console.log(result)