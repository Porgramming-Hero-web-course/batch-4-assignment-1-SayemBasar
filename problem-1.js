// Problem 1:
/* Write a TypeScript function sumArray that takes an array of numbers
and returns the sum of all elements in the array. */
// Sample Input:
function sumArray(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
