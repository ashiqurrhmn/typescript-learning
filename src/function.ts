//arrow function and normal function

function add(num1: number, num2: number) {
  return num1 + num2;
}

const res = add(5, 10);

console.log(res);

const addArrow = (a: number, b: number): number => {
  return a + b;
};

console.log(addArrow(10, 309));
