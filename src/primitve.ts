//JS 
// string, number, boolean, null, undefined

//TS: never, unknown, void


let userName: string = "John Doe";  // explicit type annotation

let userId = 1234; // implicit type annotation (TypeScript infers the type as number)

let isActive: boolean = true; // explicit type annotation 

let x; // TypeScript infers the type as any, allowing reassignment to different types
x = 121;
x = "Hello"; // TypeScript infers the type as any, allowing reassignment to different types
