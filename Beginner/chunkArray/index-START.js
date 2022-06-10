/* 
 Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. E.g
 E.g  chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]

P: array, and chunk number
R: return the array split into subarrays with the specified length. 
E: ([1, 2, 3, 4, 5, 6, 7, 8]) size 3 // returns [[1, 2, 3], [4, 5, 6,], [7, 8]]
P: iterate through the elements with a loop, slice to break array down, remainder if statement to put remaining into own array as well, toArray
*/



function chunkArray(array, size) {
    // Code goes here
    let newArray = []
    for (i = 0; i < array.length; i += size){
        array.splice(i,i + size)
    }
    return newArray
}

function chunkArray(array, size) {
    let result = []

    for (i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size)
        result.push(chunk)
    }

    return result
}


module.exports = chunkArray