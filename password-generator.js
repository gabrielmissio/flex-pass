// Define pools of characters to be used to generate password
const numericCharacters = '0123456789'
const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
const specialCharacters = '.+-*/!@#$'

function generatePassword({ numbers = 2, upperCase = 2, lowerCase = 3, specials = 1 } = {}) {
  // Generate password by shuffling characters from each pool
  let newPassword = ''
  newPassword += shuffleCharacters(numericCharacters, numbers)
  newPassword += shuffleCharacters(uppercaseCharacters, upperCase)
  newPassword += shuffleCharacters(lowercaseCharacters, lowerCase)
  newPassword += shuffleCharacters(specialCharacters, specials)
  
  // Calculate the total length of the password
  const desiredLength = numbers + upperCase + lowerCase + specials

  // Shuffle the password one more time to make it even more random
  newPassword = shuffleCharacters(newPassword, desiredLength)

  return newPassword
}

function shuffleCharacters(characters, desiredLength) {
  if (!characters) throw new Error('MissingParamError: characters')
  if (isNaN(desiredLength)) throw new Error('MissingParamError: desiredLength')

  // Return empty string when desiredLength is equal to 0
  if (desiredLength === 0) return ''

  // Calculate the actual number of characters to be shuffled
  const actualLength = Math.min(characters.length, desiredLength)

  // Shuffle the characters by converting the string into an array, shuffling it and converting it back to a string
  const randomizedCharacters = characters.split('').sort(() => Math.random() - 0.5).slice(0, actualLength).join('')

  return randomizedCharacters
}
