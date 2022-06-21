/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true

P 'string of text
R true or false - if the text is a palindrome
E 'emily' // false - 'kayak' // true
P compare string to its reversed version, 
- check if they are equal to each other, 
- return true or false
*/




function palindromeChecker(text) {
    // Code goes here
   let reversed = text.split('').reverse().join('')
   if (text == reversed){
       return true
   }else{
       return false
   }
}



module.exports = palindromeChecker;