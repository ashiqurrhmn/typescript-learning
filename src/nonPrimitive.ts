// array, object

//TS - tuple

let arr: number[] = [1, 2, 3];

arr.push('hello'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

arr.push(4); // Valid, as 4 is a number

let arr2 : (string | number)[] = [1, 2, 3, 'hello'];

arr2.push('world'); // Valid, as 'world' is a string

let arr3 = [1, 2, 3, 'hello']; // TypeScript infers the type as (string | number)[]


let rollAndName: [number, string] = [1, 'John Doe']; // tuple with a number and a string
rollAndName[0] = 2; // Valid, as 2 is a number
rollAndName[1] = 'Jane Doe'; // Valid, as 'Jane Doe' is a string
rollAndName.push('extra'); // Valid, as tuples can have additional elements of the same type
rollAndName.push(3); // Valid, as tuples can have additional elements of the same type
rollAndName.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.


let rollAndName: [number, string] = [1, 'John Doe', 15]; // Error: Type '[number, string, number]' is not assignable to type '[number, string]'. Source has 3 element(s) but target allows only 2.

//object

let user : {
    type: "user", // literal type
    readonly id: number; // read-only property
    firstName: string;
    middleName?: string; // optional property
    lastName: string;
    age: number;
} = {
    id: 1,
    type: "user",
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};
user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
console.log(user);