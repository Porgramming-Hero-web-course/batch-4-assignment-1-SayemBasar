// Problem 2:
/* Create a TypeScript function removeDuplicates that accepts an array of
numbers and returns a new array with duplicates removed. Preserve the original order of elements.*/
function removeDuplicates(numbers) {
    var uniqueNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        if (!uniqueNumbers.includes(numbers[i])) {
            uniqueNumbers.push(numbers[i]);
        }
    }
    return uniqueNumbers;
}
// Sample usage
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
