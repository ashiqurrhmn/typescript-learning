// type vs interface

// 1. Basic interface
interface User {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
}

const user1: User = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "X",
  },
  gender: "male",
  contactNo: "0177",
  address: {
    division: "Chattogram",
    city: "Chattogram",
  },
};

// 2. Same shape with type alias (for comparison)
type UserType = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user2: UserType = {
  id: 124,
  name: {
    firstName: "Mr.",
    lastName: "Y",
  },
  gender: "female",
  contactNo: "01999",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};

// 3. Optional (?) and readonly
interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string; // optional
}

const product1: Product = {
  id: 1,
  name: "Laptop",
  price: 80000,
};

// product1.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

// 4. Interface extension with extends
interface Employee {
  id: string;
  name: string;
  phoneNo: string;
}

interface Manager extends Employee {
  designation: string;
  teamSize: number;
}

const ChowdhuryShaheb: Manager = {
  id: "123",
  name: "Chowdhury Shaheb",
  phoneNo: "017",
  designation: "manager",
  teamSize: 20,
};

// Same with type + intersection (for comparison)
type EmployeeType = {
  id: string;
  name: string;
  phoneNo: string;
};

type ManagerType = EmployeeType & {
  designation: string;
  teamSize: number;
};

// 5. Function type: type vs interface
type AddFuncType = (num1: number, num2: number) => number;

interface AddFuncInterface {
  (num1: number, num2: number): number;
}

const add1: AddFuncType = (num1, num2) => num1 + num2;
const add2: AddFuncInterface = (num1, num2) => num1 + num2;

// 6. Class implements interface
interface Animal {
  name: string;
  makeSound(): string;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return "Woof!";
  }
}

const tommy = new Dog("Tommy");
console.log(tommy.makeSound());

// 7. Declaration merging: interface can be re-opened, type cannot
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person1: Person = {
  name: "Mr. X",
  age: 30,
};

// type PersonType = { name: string };
// type PersonType = { age: number }; // Error: Duplicate identifier 'PersonType'.

// 8. When to use which?
// - Use `interface` for object shapes, OOP, extension, library APIs.
// - Use `type` for unions, intersections, primitives, tuples, functions.
