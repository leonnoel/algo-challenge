/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).



P: taking in an array of numbers, and another number/value that will need to be input in the array
R: the lowest index in the array, where the value can be inserted and make sense in the original array.
E: [3,4,5,6],2.5 // index 0 [2,4,6,8,10],5 // return index 2
P: 
1. go through each number in the array, 
2. test if the number is greater than, or less than each value
3.find the index where the new number will take place, 
4. and return that index
*/


// solution;

function whereIBelong(arr, num) {
   // Code goes here
   let index = 0
   for ( let i = 0; i < arr.length; i++){
      if (num > arr[i]){
         index++
      }
   }
   return index
}


module.exports = whereIBelong