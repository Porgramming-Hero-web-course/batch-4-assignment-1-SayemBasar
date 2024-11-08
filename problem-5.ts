{
// Problem 5:
/* Write a generic function getProperty that takes an object and a property name as arguments 
and returns the property value. Add a constraint to ensure the property name exists on the object.*/

// Define a generic function with a constraint on the property name
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Sample input
const person = { name: "Alice", age: 30 };

// Considering the 'name' property
console.log(getProperty(person, "name")); 

// Considering the 'age' property
console.log(getProperty(person, "age")); 

}