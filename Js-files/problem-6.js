// Problem 6:
/* Define an interface Profile with properties name, age, and email. Create a
function updateProfile that accepts an object of type Profile and an object of
type Partial representing the updates. The function should return the updated profile.*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Function to update the profile
function updateProfile(currentProfile, updates) {
    return __assign(__assign({}, currentProfile), updates);
}
// Sample Input
var myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// Call the updateProfile function with updates
console.log(updateProfile(myProfile, { age: 26 }));
