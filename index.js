//1- Task: Create a Program to Calculate Student Grades
var engMarks = 60;
var urduMarks = 80;
var avgMarks = (engMarks + urduMarks) / 2;
if (avgMarks >= 80) {
    console.log("A Grade");
}
else if (avgMarks >= 70 && avgMarks < 80) {
    console.log("B Grade");
}
else if (avgMarks >= 60 && avgMarks < 70) {
    console.log("C Grade");
}
else {
    console.log("F Grade");
}
// 2- Task: Create an Array Manipulation Program
var fruits = ["apple", "banana", "cherry", "date", "elderberry"];
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
    }
    else {
        var discountAmount = productPrice * (discountPercentage / 100);
        var finalPrice = productPrice - discountAmount;
        console.log("Orignal price: ".concat(productPrice));
        console.log("Discount percentage: ".concat(discountPercentage, "%"));
        console.log("Discount amount: ".concat(discountAmount));
        console.log("Final price: ".concat(finalPrice));
    }
}
calculateDiscount(100, 30);
// 4- Task: Create a Function to Calculate the Factorial of a Number
function fictorialNum(num) {
    if (num === 0) {
        return 1;
    }
    else {
        var result = 1;
        for (var i = 1; i <= num; i++) {
            result *= i;
        }
        console.log(result);
    }
}
fictorialNum(6);
