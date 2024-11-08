// Problem 3:
/* Create a TypeScript function called countWordOccurrences that accepts a sentence (string) 
and a word (string). The function should return the number of times the word appears in the 
sentence, ignoring case. Use the simple sentence without punctuation as input. */

function countWordOccurrences(sentence: string, word: string): number {
    
    // Converting both, sentence and word to lowercase to ignoring case
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    
    // Spliting the sentence into an array of words
    const words = lowerCaseSentence.split(" ");
    
    // Count occurrences of the target word
    let count = 0;
    for (const currentWord of words) {
        if (currentWord === lowerCaseWord) {
            count++;
        }
    }
    
    return count;
}


console.log(countWordOccurrences("I love typescript TyPescript", "typescript"));
