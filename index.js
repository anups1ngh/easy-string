class easyString{
    constructor(string){
        this.string = string
    }
    setString(string){
        this.string = string
    }
    reverse(){
        return this.string.split('').reverse().join('')
    }
    isPalindrome(){
        let reverse = ''
        for(let i = this.string.length - 1; i >= 0; i--){
            reverse += this.string[i]
        }
        return this.string === reverse
    }
    isAnagram(str){
        return this.string.split('').sort().join('') === str.split('').sort().join('')
    }
    isEmail(){
        return this.string.includes('@')
    }
    isPhone(){
        return this.string.length === 10
    }
    isStrongPassword(){
        return this.string.length >= 8 && this.string.includes('!')
    }
    isWeekPassword(){
        return this.string.length < 8
    }
    isNumber(){
        return !isNaN(this.string)
    }
    isAlphaNumeric(){
        return !this.string.match(/^[0-9a-z]+$/i)
    }
    isLowerCase(){
        return this.string === this.string.toLowerCase()
    }
    isUpperCase(){
        return this.string === this.string.toUpperCase()
    }
    isCapitalized(){
        return this.string[0] === this.string[0].toUpperCase()
    }
    isVowel(){
        return this.string.match(/[aeiou]/gi)
    }
    isConsonant(){
        return this.string.match(/[bcdfghjklmnpqrstvwxyz]/gi)
    }
    isSpecialCharacter(){
        return this.string.match(/[^a-zA-Z0-9]/gi)
    }
    isSpace(){
        return this.string.match(/\s/gi)
    }
    isBinary(){
        return this.string.match(/^[0-1]+$/)
    }
    isOctal(){
        return this.string.match(/^[0-7]+$/)
    }
    isHexadecimal(){
        return this.string.match(/^[0-9a-f]+$/i)
    }
    isURL(){
        return this.string.match(/^(http|https):\/\/[^ "]+$/)
    }
    isDate(){
        return this.string.match(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/)
    }
}

module.exports = {
    easyString
}

// npm version patch
// npm publish