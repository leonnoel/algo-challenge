/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true

    P: taking in two strings, comparing them to one another
    R: boolean, true if it is an anagram, false if it is not
    E: 'race','care' // true 'pear', 'apple' // false
    P: separate each string into an array, so we can compare each value
    - take into account opper/lowercase
    - compare both array items
    - determine what is true or false

    
    

*/



function isAnagram(stringA, stringB) {
    // Code goes here
    arrA = stringA.toLowerCase().split('').sort()
    arrB = stringB.toLowerCase().split('').sort()
    console.log(arrA)
    console.log(arrB)
if(arrA.join() === arrB.join() ){
    return true
}else{
    return false
}
}


module.exports = isAnagram