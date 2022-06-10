/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 

 P: a string of text
 R: returning a new version of the string with capatilized first letters 
 E: capSentence('my name') // 'My Name'
 P: split up each word, split join? capitalize first letter of each word, then join to new string return result

 charAt method
*/


function capSentence(text) {
  
let arr = text.toLowerCase().split(' ')
console.log(arr)
arr.forEach( el => {
  el.charAt(0).toUpperCase()
  console.log(el)
})
console.log(arr)
return arr.join(' ')
}

capSentence('the tales of scotch!')

module.exports = capSentence