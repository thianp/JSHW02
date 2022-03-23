let input1 = prompt('input a number');
let input2 = prompt('input another number');

num1 = Number(input1);
num2 = Number(input2);

console.log(num1);
console.log(typeof(num1));
console.log(num2);
console.log(typeof(num2));

if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert('invalid number!');
} else if (typeof(num1) === "number" && typeof(num2) === "number") {
    alert(num1 + num2);
} else {
    alert('invalid number!');
}