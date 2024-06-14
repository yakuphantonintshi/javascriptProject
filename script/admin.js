let products =  JSON.parse(localStorage.getItem('products'))
let editIndex = -1;

let btnSaveItem = document.querySelector('#modal-btn');
// let btnClose = document.querySelector('#modal-close');
let prodName = document.querySelector('#prodName');
let prodCat = document.querySelector('#prodCat')
let prodDescr = document.querySelector('#prodDescr')
let prodImage = document.querySelector('#prodImg')
let prodPrice = document.querySelector('#prodPrice')
let deleteItem = document.querySelector('#deleteItem')

function Product(name, category, description, image, price){
    this.productName = name;
    this.category = category;
    this.Description = description;
    this.ImageUrl = image;
    this.Price = price;
}
btnSaveItem.addEventListener('click', ()=>{
    let name = prodName.value;
    let category = prodCat.value;
    let description= prodDescr.value;
    let image = prodImage.value;
    let price = prodPrice.value;

    let NewProduct = new Product(name, category, description, image, price)
    let products = JSON.parse(localStorage.getItem('products'))
    products.push(NewProduct)

    localStorage.setItem('products' , JSON.stringify(products))


})

function loadProducts() {
    const tableBody = document.querySelector('#productTable tbody');
    tableBody.innerHTML = '';

    products.forEach((product, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${product.productName}</td>
            <td>${product.category}</td>
            <td>${product.Description}</td>
            <td> <img src="${product.ImageUrl}" width="75px" height="75px" class="admin-img"></td>
            <td>${product.Price}</td>
            <td><button class="delete-btn" data-index="${index}"><i class="bi bi-trash3-fill"></i></button></td>
        `;

        tableBody.appendChild(row);
    });
    // Attach delete event listener to each delete button
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            deleteProduct(index);
        });
    });
}

// Function to delete a product by its index
function deleteProduct(index) {
    // Remove the product from the array
    products.splice(index, 1);

    // Update local storage
    localStorage.setItem('products', JSON.stringify(products));

    // Reload the products to update the table
    loadProducts();
}

// Load products when the page loads
document.addEventListener('DOMContentLoaded', loadProducts);


