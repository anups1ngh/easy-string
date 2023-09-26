# EasyString - JavaScript String Utility Class

EasyString is a JavaScript utility class that provides a wide range of methods to perform various string-related operations. Whether you need to check if a string is a palindrome, validate it as an email or phone number, manipulate its case, or perform other common string tasks, EasyString has you covered.

## Installation

You can install EasyString via npm:

```bash
npm install easy-string-utils
```

## Usages

const { easyString } = require('easy-string-utils');

// Create an EasyString instance

const myString = new easyString('Hello, World!');

// Example usage of EasyString methods

console.log(myString.reverse()); // "!dlroW ,olleH"

console.log(myString.isPalindrome()); // false

console.log(myString.isUpperCase()); // false


## Methods

EasyString provides a wide range of methods to manipulate and validate strings. Here are some of the available methods:

setString(string): Set the internal string to the provided value.

reverse(): Reverse the characters in the string.

isPalindrome(): Check if the string is a palindrome (reads the same forwards and backward).

isEmail(): Check if the string is a valid email address.

isPhone(): Check if the string represents a valid phone number.

isStrongPassword(): Check if the string is a strong password (at least 8 characters and includes '!' symbol).

isAlphaNumeric(): Check if the string consists of alphanumeric characters.

isUpperCase(): Check if the string is in uppercase.

isLowerCase(): Check if the string is in lowercase.

isVowel(): Check if the string contains any vowels.

isConsonant(): Check if the string contains any consonants.

isSpecialCharacter(): Check if the string contains special characters.

isSpace(): Check if the string contains whitespace characters.

isBinary(): Check if the string is a binary number.

isOctal(): Check if the string is an octal number.

isHexadecimal(): Check if the string is a hexadecimal number.

isURL(): Check if the string is a valid URL.

isDate(): Check if the string is a valid date in the format "DD/MM/YYYY".


## Contribution

Contributions to EasyString are welcome! If you have any improvements, bug fixes, or new features to add, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author
This utility class was created by Anup Kumar Singh. You can contact me at [anupsingh841208@gmail.com].