// Problem 2:
/* Create a TypeScript function removeDuplicates that accepts an array of 
numbers and returns a new array with duplicates removed. Preserve the original order of elements.*/

function removeDuplicates(numbers: number[]): number[] {
    // creating new empty array for store unique numbers
    const uniqueNumbers: number[] = [];

    // Using for-loop to check all the numbers of removeDuplicate array
    for (let i = 0; i < numbers.length; i++) {
        
        // if the number dose not exit in new array, then added it
        if (!uniqueNumbers.includes(numbers[i])) {
            uniqueNumbers.push(numbers[i]);
        }
    }
    return uniqueNumbers;
}


// Sample Input:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


