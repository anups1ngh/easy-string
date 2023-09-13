function isPalindrome(string){
    let reverse = ''
    for(let i = string.length - 1; i >= 0; i--){
        reverse += string[i]
    }
    return string === reverse
}

function reverseString(string){
    return string.split('').reverse().join('')
}

module.exports = {
    reverseString,
    isPalindrome
}