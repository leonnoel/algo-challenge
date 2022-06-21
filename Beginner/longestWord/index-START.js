/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
longestWord('Top Shelf Web Development Training on Scotch') 
//should return 'Development'



P: A string of words
R: the longest word in the string
E: 'Random words here' -> Random
P: turn the string into array, split - 
*/



function longestWord(text) {
   // Code goes here
   let arr = text.split(' ')
   // console.log(arr)
   const lengthMap = arr.map(x => x.length)
   // console.log(lengthMap)
   let longest =  Math.max(...lengthMap)
   // console.log(longest)
   let result = lengthMap.indexOf(longest)
   return arr[result]
}

// function longestWord(text) {
//    let wordArray = text.split(' ')
//    let maxLength = 0
//    let result = ''
//    for (let i = 0; i < wordArray.length; i++) {
//        if (wordArray[i].length > maxLength) {
//            maxLength = wordArray[i].length
//            result = wordArray[i]
//        }
//    }
//    return result
// }

module.exports = longestWord