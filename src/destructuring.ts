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