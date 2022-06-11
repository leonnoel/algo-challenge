/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'



Given a string of text
P: string of text 
find and return the most recurring character.
R: a string, the recurring character from the initial string of text
E: ppwwwwq   -> return w / kyyyis -> return y
P: we need take our string of text - parameter, and we need to find the character that appears the most in the text. So, go through each of the characters in the the string to see which ones repeat, or appear the most. 
Once we find the characters that appear the most, we need to grab that charcater, and the value or number of times it repeats to compare it to the other characters in that string, to get our result. What we're returning is that charcter that has the highest number of occurences. 
*/


// attempt 
function maxRecurringChar(text) {
    // Code goes here
    let counter = 0
    let result = ''
    let arr = text.split('').sort()
    console.log(arr)
    for (let i = 1; i < arr.length; i++){
        if(arr[i] === arr[i + 1]){
            counter++
            console.log(arr[i])
            result = arr[i].toString()
            console.log(result)
        }
       return result
    }

}
// solution
function maxRecurringChar(text) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''
    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}

module.exports = maxRecurringChar;