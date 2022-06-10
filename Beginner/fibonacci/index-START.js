/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]

P: a number, n an integer
R: returning the nth element in the fib sequence
E: n = 5, returns 8, 
P: so we need to start at one, 
*/


function fibonacci(n) {
    // Code goes here
    let previousNum = 0
    let currentNum = 1
    let counter = 1
    while (counter <= n) {
        let sum = 0
        sum = previousNum + currentNum
        previousNum = currentNum;
        currentNum = sum
        counter++
      }
    return currentNum

}

module.exports = fibonacci