{
// Problem 8:
/* Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj 
and an array of keys keys. The function should return true if all of the specified 
keys exist in the object; otherwise, it should return false.*/

// Generic function to validate if all specified keys exist in the object
function validateKeys<T extends object>(obj: T, keys: (keyof T)[]){
    // Check if every key in the keys array exists in the object
    return keys.every(key => key in obj);
  }
  
  // Sample Input:
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  
  // Sample Output:
  console.log(validateKeys(person, ["name", "age"]));  
  
}
  