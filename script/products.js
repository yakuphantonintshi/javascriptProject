let products =  JSON.parse(localStorage.getItem('products'))
// products.forEach(product => {console.log(product.productName);})
let container = document.querySelector('[flowerProducts]')


let sortbtn = document.querySelector('#sort-btn');
let searchbtn = document.querySelector('#search-btn');
let itemsInp = document.querySelector('#productsInput');

//Sorting by price
// sortbtn.addEventListener('click', ()=>{
//     if (itemsInp.value == ''){
//         alert('No value entered')
//         return
//     }
//     let price = parseFloat(itemsInp.value)
//     let sortedItems = products.filter((a,b) => product.Price <= price);
//     loadProductOnSite(sortedItems);
// })


function loadProductOnSite(products){
  container.innerHTML = ''
  products.forEach(product => {
    container.innerHTML += `
    <div class="card" style="width: 18rem;" id="product">
    <img src="${product.ImageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.productName}</h5>
      <p class="card-description">${product.Description}</p>
      <p class="card-text">R ${product.Price}</p>
      <a href="#" class="btn btn-primary" onclick="addToCart()" id="cartBtn" >Add to Cart</a>
    </div>
  </div>`

  
    
});
}
loadProductOnSite(products)

searchbtn.addEventListener('click', () => {
  try {
      if (itemsInp.value.length < 1) {
        loadProductOnSite(products)
      }
      let filteredProduct = products.filter(product => product.productName.toLowerCase().includes(itemsInp.value))
      loadProductOnSite(filteredProduct)
      if (!filteredProduct.length) throw new Error(`${itemsInp.value} product was not found`)
  } catch (e) {
      container.textContent = e.message || 'Please try again later'
  }
})
//sorting items
let isPrice = false
sortbtn.addEventListener('click', () => {
  
    try {
        if (!products) throw new Error('Please try again later')
        if (!isPrice) {
            products.sort((a, b) => b.Price - a.Price)
            itemsInp.textContent = 'Sorted by highest amount'
            isPrice = true
        } else {
            products.sort((a, b) => a.amount - b.amount)
            itemsInp.textContent = 'Sorted by lowest amount'
            isPrice = false
        }
        loadProductOnSite(products)
    } catch (e) {
        container.textContent = e.message || 'We are working on this issue'
    }
})












    // let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
    //  ? JSON.parse(localStorage.getItem('checkout')) 
    //  : []
 
    // function addToCart(products) {
    //     try{
    //         checkoutItems.push(products) 
    //         localStorage.setItem('checkout', JSON.stringify(checkoutItems))
    //         document.querySelector('[counter]').textContent = checkoutItems.length || 0
    //     } catch(e){
    //         alert('Unable to add to cart')
    //     }
    // }

    // window.onload = () => {
    //     document.querySelector('[counter]').textContent = JSON.parse(localStorage.getItem('checkout'))
    //         ? JSON.parse(localStorage.getItem('checkout')).length
    //         : 0
    // }