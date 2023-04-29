# FlexPass

This is a simple module that generates a random password based on specified criteria. It allows you to customize the length of the password, as well as the number of numbers, uppercase letters, lowercase letters, and special characters included.

## Installation

You can install this module using npm:

```bash
npm install flex-pass
```

## Usage

Here's an example of how to generate a password using the default settings:

```javascript
const passwordGenerator = require('flex-pass');

console.log(passwordGenerator());
```

This will output a randomly generated password that includes two numbers, two uppercase letters, three lowercase letters, and one special character.

You can also customize the password by passing in an options object:

```javascript
const passwordGenerator = require('flex-pass');

console.log(passwordGenerator({
  numbers: 4,
  upperCase: 2,
  lowerCase: 2,
  specials: 1
}));
```

This will generate a password that includes four numbers, two uppercase letters, two lowercase letters, and one special character.

## Options

Here are the available options that you can use to customize the password:

 - numbers (default: 2): The number of numbers to include in the password.
 - upperCase (default: 2): The number of uppercase letters to include in the password.
 - lowerCase (default: 2): The number of lowercase letters to include in the password.
 - specials (default: 2): The number of special characters to include in the password.

## License

This module is licensed under the MIT License.
