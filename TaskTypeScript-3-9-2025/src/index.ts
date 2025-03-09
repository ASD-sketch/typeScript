// interface Person {
//     name: string;
//     age: number;
// }


// function check(person: Person): void {
//     if (person.age > 18) {
//         console.log("Adult");
//     } else {
//         console.log("Minor");
//     }
// }


// let person1: Person = { name: "Ahmad", age: 20 };
// let person2: Person = { name: "rami", age: 16 };

// check(person1);
// check(person2);




// Q2---------------------------------------------------------------------------

// interface Teacher {
//     name: string;
//     Subject: String[];
// }


// function prints(teacher:Teacher):any{
//     for(let i=0;i<teacher.Subject.length;i++)
//     {
//         console.log(teacher.Subject[i]);
//     }
// }


// let teacher:Teacher = {name:"Ahmad",Subject:["a","b"]}

// console.log(prints(teacher));


// Q3--------------------------------------------------------------------------------------

// interface Product  {
//         name: string;
//         price: number;
//         quantity:number;
//      }



//      function decrease(product:Product):any{
//         if(product.quantity>5)
//         {
//             return product.price*15;
//         }
//         else
//         {
//             console.log("quantity less 5")
//         }
//      }


//     let product:Product = {name:"gl",price:12,quantity:4};

//     console.log(decrease(product));


// Q4------------------------------------------------------------------------------------

interface Product {
    name: string;
    description: string;
    price: number;
    quantity: number;
}

 window.onload = () => {

    function getStoredProducts(): Product[] {
        let storedProducts = localStorage.getItem("products");
        return storedProducts ? JSON.parse(storedProducts) : [];
    }

    function addProduct(product: Product): void {
        let products = getStoredProducts();
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
    }

    function displayProducts(): void {
        let products = getStoredProducts();
        let container = document.getElementById("productContainer")!;
        container.innerHTML = "";

        products.forEach(product => {
            let card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <p>Quantity: ${product.quantity}</p>
            `;
            container.appendChild(card);
        });
    }

     document.getElementById("productForm")!.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = (document.getElementById("name") as HTMLInputElement).value;
        let description = (document.getElementById("description") as HTMLInputElement).value;
        let price = parseFloat((document.getElementById("price") as HTMLInputElement).value);
        let quantity = parseInt((document.getElementById("quantity") as HTMLInputElement).value);

        let newProduct: Product = { name, description, price, quantity };

        addProduct(newProduct);
        displayProducts();

        (document.getElementById("productForm") as HTMLFormElement).reset();
    });

     displayProducts();
};


