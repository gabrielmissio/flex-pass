const generatePassword = require('./index')

console.log(`Default: ${generatePassword()}`)
/* 
  Default config are:
    numbers: 2,
    upperCase: 2,
    lowerCase: 2,
    specials: 2
*/

console.log(`Only Numbers: ${generatePassword({
    numbers: 6,
    upperCase: 0,
    lowerCase: 0,
    specials: 0
})}`)

console.log(`Numbers and Lowercase: ${generatePassword({
    numbers: 4,
    upperCase: 0,
    lowerCase: 4,
    specials: 0
})}`)

console.log(`Short Password: ${generatePassword({
    numbers: 2,
    upperCase: 1,
    lowerCase: 2,
    specials: 1
})}`)

console.log(`Big Password: ${generatePassword({
    numbers: 10,
    upperCase: 10,
    lowerCase: 10,
    specials: 10
})}`)
