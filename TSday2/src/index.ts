const myArr1: (string | number)[] = [1,
	"GeeksforGeeks", 2, "TypeScript"];
const myArr2: (string | number | boolean)[] = [1,
	"GeeksforGeeks", 2, true, "TypeScript", false];
console.log(myArr1);
console.log(myArr2);


function add(a: number, b: number): number {
    return a + b;
}

console.log(add(1,2));



function prints(name: string): string {
    return `Hello, ${name}!`;
}

console.log(prints("Ahmad"));




function ahmad(name: string, age?: number): string {
    if (age) {
        return `Hello ${name}, you are ${age} years old.`;
    }
    return `Hello ${name}!`;
}

console.log(ahmad("ahmad",12));


function defualt(name: string = "Ahmad"): string {
    return `Hello, ${name}!`;
}

console.log(defualt("mohammad"));





function average(...numbers): number {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return numbers.length === 0 ? 0 : total / numbers.length;
}

console.log("Average of the given numbers is:", average(10, 20, 30, 60));
console.log("Average of the given numbers is:", average(5, 6));
console.log("Average of the given numbers is:", average(4));



let products = [
    { name: "Laptop", description: "A powerful laptop.", price: 1200 },
    { name: "Phone", description: "A smart phone.", price: 800 },
    { name: "Tablet", description: "A lightweight tablet.", price: 500 }
];


function loadProducts() {
    let container = document.getElementById("product-container")!;
    container.innerHTML = ""; 
    products.forEach(product => {
        let item = document.createElement("div");
        item.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p><p>Price: $${product.price}</p>`;
        container.appendChild(item);
    });
}


// -------------------------------------------------------------------------------------

interface Product {
    name: string;
    description: string;
    price: number;
}


let productList: Product[] = [
    { name: "Laptop", description: "A powerful laptop.", price: 1200 },
    { name: "Phone", description: "A smart phone.", price: 800 },
    { name: "Tablet", description: "A lightweight tablet.", price: 500 }
];


function displayProducts() {
    let container:any = document.getElementById("product");
    container.innerHTML = "";

    productList.forEach(product => {
        let item = document.createElement("div");
        item.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p><p>Price: $${product.price}</p>`;
        container.appendChild(item);
    });
}
