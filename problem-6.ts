// Problem 6:
/* Define an interface Profile with properties name, age, and email. Create a 
function updateProfile that accepts an object of type Profile and an object of 
type Partial representing the updates. The function should return the updated profile.*/

// Profile interface
interface Profile {
    name: string;
    age: number;
    email: string;
  }
  
  // Function to update the profile
  function updateProfile(currentProfile: Profile, updates: Partial<Profile>): Profile {
    return { ...currentProfile, ...updates };
  }
  
  // Sample Input
  const myProfile: Profile = { name: "Alice", age: 25, email: "alice@example.com" };
  
  // Calling the updateProfile function with updates
  console.log(updateProfile(myProfile, { age: 26 }));
  