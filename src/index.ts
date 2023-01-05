let age: number = 20;
if (age < 50) age += 10;
console.log(age);

const enum Size {
  Small,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 0.2;
  return income * 0.3;
}

interface Employee {
  id: number;
  name: string;
}

let employee: Employee = {
  id: 1,
  name: "John",
};
