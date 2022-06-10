/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'


P: A string of words
R: the longest word in the string
E: 'Random words here' -> Random
P: turn the string into array, split - 
*/




function longestWord(text) {
   let arr = text.split(' ')
   const lengthMap = arr.map(x => arr.length)
   return Math.max
}



module.exports = reverseString