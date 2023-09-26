class easyString{
    constructor(string){
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
}

module.exports = {
    easyString
}

// npm version patch
// npm publish