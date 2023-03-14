//1- Task: Create a Program to Calculate Student Grades

let engMarks = 60;
let urduMarks = 80;
let avgMarks = (engMarks + urduMarks) / 2;
if (avgMarks >= 80) {
  console.log("A Grade");
} else if (avgMarks >= 70 && avgMarks < 80) {
  console.log("B Grade");
} else if (avgMarks >= 60 && avgMarks < 70) {
  console.log("C Grade");
} else {
  console.log("F Grade");
}

// 2- Task: Create an Array Manipulation Program

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits);

fruits.push("mango"); //Append a string to the end of the array using push method
console.log(fruits);

fruits.unshift("water-malon"); //Prepend a string to the beginning of the array using unshift method
console.log(fruits);

fruits.splice(5, 1, "Gava"); //Remove a string from a specific index in the array and replace it with another string using splice method
console.log(fruits);

// 3- Task: Create a Function to Determine the Discount Amount for a Product

function calculateDiscount(productPrice, discountPercentage) {
  if (discountPercentage >= 50) {
    console.log("the discount percentage is invalid");
  } else {
    let discountAmount = productPrice * (discountPercentage / 100);
    let finalPrice = productPrice - discountAmount;
    console.log(`Orignal price: ${productPrice}`);
    console.log(`Discount percentage: ${discountPercentage}%`);
    console.log(`Discount amount: ${discountAmount}`);
    console.log(`Final price: ${finalPrice}`);
  }
}
calculateDiscount(100, 30);

// 4- Task: Create a Function to Calculate the Factorial of a Number

function fictorialNum(num: number) {
  if (num === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    console.log(result);
  }
}
fictorialNum(6);
