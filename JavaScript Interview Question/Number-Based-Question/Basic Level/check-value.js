// Check the value in js 3 types

// 1-Typeof

let num =10;
let num1="20";
console.log(typeof num);
console.log(typeof num2);

// Number.isfinite() function

function isfinite(value){
    return Number.isFinite(value)
}
// isfinite()
console.log(isfinite(20));
console.log(isfinite("20"));


// !isNaN() this is function

function isNumber(value){
    // return !isNaN(value)&& typeof value === "number"
    return !isNaN(Number(value)) // chenge the value 
}
console.log("------------------");

console.log(isNumber("20"));
console.log(isNumber("abc"));

