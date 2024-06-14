let products =  JSON.parse(localStorage.getItem('products'))
let container = document.querySelector('[flowerP]')

products.forEach(product => {
    container.innerHTML += `

    <tr>
        <td>${product.productName}</td>
        <td>${product.category}</td>
        <td>${product.Description}</td>
        <td>${product.Price}</td>
    </tr>`
})

let btnSaveItem = document.querySelector('#modal-btn');
let btnClose = document.querySelector('#modal-close');
let prodName = document.querySelector('#prodName');
let prodCat = document.querySelector('#prodCat')
let prodDescr = document.querySelector('#prodDescr')
let prodImage = document.querySelector('#prodImg')
let prodPrice = document.querySelector('#prodPrice')
let deleteItem = document.querySelector('.delete')

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
deleteItem.addEventListener('click' , () =>{
    let indexToDelete = products.findIndex(products => products.productName === prodName)
    products.splice(indexToDelete, 1)
})



