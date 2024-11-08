// Problem 4:
/* Define a union type Circle and Rectangle, where each type has a unique shape property.
Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.*/
// Type guard function to check if the shape is a circle
function isCircle(shape) {
    return shape.Shape === "circle";
}
// Type guard function to check if the shape is a rectangle
function isRectangle(shape) {
    return shape.shape === "rectangle";
}
// Function to calculate the area based on the shape type
function calculateShapeArea(shape) {
    if (isCircle(shape)) {
        return 3.1416 * shape.radius * shape.radius;
    }
    else if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
    // Default return (should never reach here if input is correctly typed)
    return 0;
}
// Sample input 1:
var circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
// Sample input 2:
var rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
console.log(rectangleArea);
