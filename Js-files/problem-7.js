// Problem 7:
/* Create a TypeScript class Car with properties make, model, and year.
Include a method getCarAge that returns the car's age based on the current year.*/
var Car = /** @class */ (function () {
    // Constructor to initialize the properties of the car
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Method to calculate the car's age based on the current year
    Car.prototype.getCarAge = function () {
        var currentYear = new Date().getFullYear(); // Get the current year
        return currentYear - this.year; // Return the car's age
    };
    return Car;
}());
// Sample Input 1:
var car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge()); // Sample Output 1: 6 (assuming current year is 2024)
