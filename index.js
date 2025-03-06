var num = 7;
if (num % 2 == 0) {
    console.log("".concat(num, " is Even"));
}
else {
    console.log("".concat(num, " is Odd"));
}
var product = [10, 25, 50, 40, 15, 60];
var big = 50;
for (var i = 0; i < product.length; i++) {
    if (product[i] > big) {
        console.log("Expensive Product Price: ".concat(product[i]));
    }
}
var arr = [5, 10, 20, 30, 40];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Sum: ".concat(sum));
