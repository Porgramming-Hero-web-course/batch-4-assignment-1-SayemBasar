// Problem 4:
/* Define a union type Circle and Rectangle, where each type has a unique shape property. 
Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.*/

//union types for Circle and Rectangle
type Circle = {
    shape: "circle";
    radius: number;
};

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};

// Union type for Circle or Rectangle
type Shape = Circle | Rectangle;

// Type guard function to check if the shape is a circle
function isCircle(shape: Shape): shape is Circle {
    return shape.shape === "circle";
}

// Type guard function to check if the shape is a rectangle
function isRectangle(shape: Shape): shape is Rectangle {
    return shape.shape === "rectangle";
}

// Function to calculate the area based on the shape type
function calculateShapeArea(shape: Shape): number {
    if (isCircle(shape)) {
        return 3.1416 * shape.radius * shape.radius;
    } else if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
   
    return 0;
}

// Sample input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea); 

// Sample input 2:
const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
console.log(rectangleArea);
