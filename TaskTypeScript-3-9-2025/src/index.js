// interface Person {
//     name: string;
//     age: number;
// }
window.onload = function () {
    function getStoredProducts() {
        var storedProducts = localStorage.getItem("products");
        return storedProducts ? JSON.parse(storedProducts) : [];
    }
    function addProduct(product) {
        var products = getStoredProducts();
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
    }
    function displayProducts() {
        var products = getStoredProducts();
        var container = document.getElementById("productContainer");
        container.innerHTML = "";
        products.forEach(function (product) {
            var card = document.createElement("div");
            card.className = "card";
            card.innerHTML = "\n                <h3>".concat(product.name, "</h3>\n                <p>").concat(product.description, "</p>\n                <p>Price: $").concat(product.price, "</p>\n                <p>Quantity: ").concat(product.quantity, "</p>\n            ");
            container.appendChild(card);
        });
    }
    document.getElementById("productForm").addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var description = document.getElementById("description").value;
        var price = parseFloat(document.getElementById("price").value);
        var quantity = parseInt(document.getElementById("quantity").value);
        var newProduct = { name: name, description: description, price: price, quantity: quantity };
        addProduct(newProduct);
        displayProducts();
        document.getElementById("productForm").reset();
    });
    displayProducts();
};
