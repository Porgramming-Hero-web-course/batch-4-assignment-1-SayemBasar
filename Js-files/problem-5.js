// Problem 5:
/* Write a generic function getProperty that takes an object and a property name as arguments
and returns the property value. Add a constraint to ensure the property name exists on the object.*/


// Define a generic function with a constraint on the property name
function getProperty(obj, key) {
    return obj[key];
}
// Sample usage
var person = { name: "Alice", age: 30 };

// Accessing the 'name' property
console.log(getProperty(person, "name")); // Output: Alice

// Accessing the 'age' property
console.log(getProperty(person, "age")); // Output: 30
