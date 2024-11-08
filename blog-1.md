>> The significance of union and intersection types in Typescript.

Union Type (|)
A union type allows a variable to be one of several types. For example, consider Rahim and Karim as two different people. Rahim is a very quick to act, and Karim is the opposite very calm and thoughtful. However, they both work at the same company as web developers and are both skilled in TypeScript. For a project, we might need one of them, so we can consider either Rahim or Karim. we can represent flexibility using a union type.

type Developer = Rahim | Karim;

In this sense, a union type increases flexibility. This principle also applies to object with different properties but similar roles. It allows handling values that could be multiple types, such as a function that returns different types depending on the situation.

Another example using union types:

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

Here, Shape is a type that includes properties from both Circle and Rectangle, even though they are different types, allowing TypeScript to validate each shape's properties when accessed.


Intersection Type (&)

An intersection type allows a variable to be a combination of several types, merging multiple types into one. It's like saying "this type and that type" making it useful for creating composite types.

Syntax:
type IntersectionType = TypeA & TypeB;

For example, imagine Sayem and Basar working in Programming Hero's X team, while Jhankar and Mahbub contribute to the Y team in the same company. If we're building a project that needs experties from both teams, We would want a type that combines both team's skills.

interface XTeam {
    platform: string;
    employees: number;
}

interface YTeam {
    language: string;
    database: string;
}

type FullProject = XTeam & YTeam;

const fullProject: FullProject = {
    platform: "React",
    employee: 2,
    language: "TypeScript",
    database: "MongoDB",
};

In this case, to develop the full project (FullProject), we need properties from both XTeam and YTeam, combining their expertise into one.

Intersection types make it easier to create flexible, composable types without redundant definitions. We can define several small, reusable types and then compose them into more complex types as needed.

When dealing with complex type relationships, intersection types allow for modeling types that must satisfy multiple contracts at once, leading to highly descriptive and robust type checking.

