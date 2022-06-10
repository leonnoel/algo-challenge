/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]

P- an array of elements - can be string, number, or null
R- return which values are truthy
E- above
P- test each value, if truthy or not
- return only values that are truthy

use node to check which values are truthy or not
*/





function falsyBouncer(array) {
    return array.filter((value) =>{ //filters through array and creates new array with only truthy values
      return Boolean(value)  
    })
}


module.exports = falsyBouncer