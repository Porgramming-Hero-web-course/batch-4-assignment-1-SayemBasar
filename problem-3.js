// Problem 3:
/* Create a TypeScript function called countWordOccurrences that accepts a sentence (string)
and a word (string). The function should return the number of times the word appears in the
sentence, ignoring case. Use the simple sentence without punctuation as input. */
function countWordOccurrences(sentence, word) {
    // Convert both sentence and word to lowercase to ignore case
    var lowerCaseSentence = sentence.toLowerCase();
    var lowerCaseWord = word.toLowerCase();
    // Split the sentence into an array of words
    var words = lowerCaseSentence.split(" ");
    // Count occurrences of the target word
    var count = 0;
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var currentWord = words_1[_i];
        if (currentWord === lowerCaseWord) {
            count++;
        }
    }
    return count;
}
console.log(countWordOccurrences("I love typescript TyPescript", "typescript"));
