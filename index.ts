let num: number = 7; 

if (num % 2 == 0) {
    console.log(`${num} is Even`);
} else {
    console.log(`${num} is Odd`);
}


let product: number[] = [10, 25, 50, 40, 15, 60];
let big: number = 50;

for (let i = 0; i < product.length; i++) {
    if (product[i] > big) {
        console.log(`Expensive Product Price: ${product[i]}`);
    }
}



let arr: number[] = [5, 10, 20, 30, 40];
let sum: number = 0; 

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(`Sum: ${sum}`);

