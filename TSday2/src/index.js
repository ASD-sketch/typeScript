var myArr1 = [1,
    "GeeksforGeeks", 2, "TypeScript"];
var myArr2 = [1,
    "GeeksforGeeks", 2, true, "TypeScript", false];
console.log(myArr1);
console.log(myArr2);
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
function prints(name) {
    return "Hello, ".concat(name, "!");
}
console.log(prints("Ahmad"));
function ahmad(name, age) {
    if (age) {
        return "Hello ".concat(name, ", you are ").concat(age, " years old.");
    }
    return "Hello ".concat(name, "!");
}
console.log(ahmad("ahmad", 12));
function defualt(name) {
    if (name === void 0) { name = "Ahmad"; }
    return "Hello, ".concat(name, "!");
}
console.log(defualt("mohammad"));
function average() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var num = numbers_1[_a];
        total += num;
    }
    return numbers.length === 0 ? 0 : total / numbers.length;
}
console.log("Average of the given numbers is:", average(10, 20, 30, 60));
console.log("Average of the given numbers is:", average(5, 6));
console.log("Average of the given numbers is:", average(4));
var products = [
    { name: "Laptop", description: "A powerful laptop.", price: 1200 },
    { name: "Phone", description: "A smart phone.", price: 800 },
    { name: "Tablet", description: "A lightweight tablet.", price: 500 }
];
function loadProducts() {
    var container = document.getElementById("product-container");
    container.innerHTML = "";
    products.forEach(function (product) {
        var item = document.createElement("div");
        item.innerHTML = "<h3>".concat(product.name, "</h3><p>").concat(product.description, "</p><p>Price: $").concat(product.price, "</p>");
        container.appendChild(item);
    });
}
// -------------------------------------------------------------------------------------
// interface Product {
//     name: string;
//     description: string;
//     price: number;
// }
var productList = [
    { name: "Laptop", description: "A powerful laptop.", price: 1200 },
    { name: "Phone", description: "A smart phone.", price: 800 },
    { name: "Tablet", description: "A lightweight tablet.", price: 500 }
];
function displayProducts() {
    var container = document.getElementById("product");
    container.innerHTML = "";
    productList.forEach(function (product) {
        var item = document.createElement("div");
        item.innerHTML = "<h3>".concat(product.name, "</h3><p>").concat(product.description, "</p><p>Price: $").concat(product.price, "</p>");
        container.appendChild(item);
    });
}
