/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.

    P a number  n 
    R an array of numbers 1 to n, for mult of 3 return Fizz, mult of 5 return Buzz, and both Fizzbuzz
    E 5 // returns [1,2, fizz, 4, buzz]
    P if remainder is 0, multiple of 3, or 5 - find the remainder of each number, change the number that is a multiple into fizz or buzz or both, count from 1 - the number taken in 
*/



function fizzBuzz(n) {
    // Code goes here
    for( let i = 1; i <= n; i++){
        if (i % 15 === 0){
            console.log('fizzbuzz')
        }

        else if (i % 3 === 0){
            console.log('fizz')
        }

        else if (i % 5 === 0){
            console.log('buzz')
        }
        else  {
            console.log(i)
        }

    }
}  



module.exports = fizzBuzz