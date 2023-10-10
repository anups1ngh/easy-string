class StringBuddy {
    constructor(string) {
      if (typeof string !== 'string') {
        throw new Error('Input must be a string');
      }
      this.string = string;
    }
  
    setString(string) {
      if (typeof string !== 'string') {
        throw new Error('Input must be a string');
      }
      this.string = string;
    }
  
    reverse() {
      return this.string.split('').reverse().join('');
    }
  
    isPalindrome() {
      const reversed = this.reverse();
      return this.string === reversed;
    }
  
    isAnagram(str) {
      if (typeof str !== 'string') {
        throw new Error('Input must be a string');
      }
  
      const sortedThis = this.string.split('').sort().join('');
      const sortedStr = str.split('').sort().join('');
  
      return sortedThis === sortedStr;
    }
  
    isEmail() {
      return this.string.includes('@');
    }
  
    isPhone() {
      return /^\d{10}$/.test(this.string);
    }
  
    isStrongPassword() {
      return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@!#$%^&*()_+])[A-Za-z\d@!#$%^&*()_+]{8,}$/.test(this.string);
    }
  
    isWeakPassword() {
      return this.string.length < 8;
    }
  
    isNumber() {
      return !isNaN(this.string);
    }
  
    isAlphaNumeric() {
      return /^[0-9a-zA-Z]+$/.test(this.string);
    }
  
    isLowerCase() {
      return this.string === this.string.toLowerCase();
    }
  
    isUpperCase() {
      return this.string === this.string.toUpperCase();
    }
  
    isCapitalized() {
      return /^[A-Z]/.test(this.string);
    }
  
    isVowel() {
      return /[aeiouAEIOU]/.test(this.string);
    }
  
    isConsonant() {
      return /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(this.string);
    }
  
    isSpecialCharacter() {
      return /[^a-zA-Z0-9\s]/.test(this.string);
    }
  
    isSpace() {
      return /\s/.test(this.string);
    }
  
    isBinary() {
      return /^[01]+$/.test(this.string);
    }
  
    isOctal() {
      return /^[0-7]+$/.test(this.string);
    }
  
    isHexadecimal() {
      return /^[0-9a-fA-F]+$/.test(this.string);
    }
  
    isURL() {
      return /^(http|https):\/\/[^ "]+$/.test(this.string);
    }
  
    isDate() {
      return /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/.test(this.string);
    }
}
  
module.exports = StringBuddy;