const user = {
  name: {
    first: "Akash",
    last: "Rahman"
  },
  age: 22,
  email: "akash@example.com"
};

const myAge = user.age;
const {age} = user; // destructuring assignment

const {age: myAge2} = user; // destructuring assignment with alias

const {name: {first, last}} = user; // destructuring assignment with nested object

console.log(myAge);
console.log(age);
console.log(myAge2);
console.log(first);
console.log(last);

// array destructuring
const friends = ["Alice", "Bob", "Charlie"];

const [, friend2] = friends; // destructuring assignment with array
const [firstFriend] = friends; // destructuring assignment with rest operator
const [, , thirdFriend] = friends; // destructuring assignment with rest operator


console.log(firstFriend);
console.log(friend2);
console.log(thirdFriend);

