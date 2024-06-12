let product =  JSON.parse(localStorage.getItem('products'))
let container = document.querySelector('[flowerP]')
product.forEach(product => {
    container.innerHTML += `
    <tr>
    <th>
       ${product.productNmae}
    </th>
    <th>${product.category}</th>
    <th>${product.Description}</th>
    <th>${product.ImageUrl}</th>
    <th>${product.Price}</th>
</tr>`})