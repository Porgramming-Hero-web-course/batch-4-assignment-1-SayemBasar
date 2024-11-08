{
    // Problem 8:
    /* Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj
    and an array of keys keys. The function should return true if all of the specified
    keys exist in the object; otherwise, it should return false.*/
    // Generic function to validate if all specified keys exist in the object
    function validateKeys(obj, keys) {
        // Check if every key in the keys array exists in the object
        return keys.every(function (key) { return key in obj; });
    }
    // Sample Input:
    var person = { name: "Alice", age: 25, email: "alice@example.com" };
    // Sample Output:
    console.log(validateKeys(person, ["name", "age"]));
}
