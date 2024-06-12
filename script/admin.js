let products =  JSON.parse(localStorage.getItem('products'))
let table = document.getElementsByTagName('table')
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


