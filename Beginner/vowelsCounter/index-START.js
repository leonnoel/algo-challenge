/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3


P; a string of text
R: returning total number of voles so a number 
E: emily -> 3 including y - not including y is 2
P: 
- have to check what counts as a vowel
- have to count how many vowels there are
- have to return the total count of vowels
*/

// what I got

function vowelsCounter(text) {
    // Code goes here
    let count = 0
    let vowels = ['a','e','i','o', 'u']
    Array.from(text).forEach(letter => {
        if(arrText.includes(vowels)){
            return true

            count++
        }
    })
    return count

}

// solution

const vowels = ["a", "e", "i", "o", "u"]


function vowelsCounter(text) {
    // Initialize counter
    let counter = 0;


    // Loop through text to test if each character is a vowel
    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }

    // Return number of vowels
    return counter
}



module.exports = vowelsCounter;
