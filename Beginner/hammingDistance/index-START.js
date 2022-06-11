/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1


P: taking in two strings, that have the same length
R: returning the number of letters that are different from each other
E: 'rock' , 'sock' // return 1 'table', 'maple' // return 2
P: count the number of letters that are different, check the letters that differ from each other, increase the count
*/



function hammingDistance(stringA, stringB) {
    // Code goes here
    let counter = 0
    for (let i = 0; i <= stringA.length; i++){
        if(stringA.charAt(i) != stringB.charAt(i)){
            counter++
        }
    } return counter
}



module.exports = hammingDistance