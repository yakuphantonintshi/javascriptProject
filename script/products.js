let products =  JSON.parse(localStorage.getItem('products'))
let container = document.querySelector('[flowerProducts]')


let sortbtn = document.querySelector('#sort-btn');
let searchbtn = document.querySelector('#search-btn');
let itemsInp = document.querySelector('#productsInput');

function loadProductOnSite(products){
  
  container.innerHTML = ''
  products.forEach(product => {

    // console.log(product);
    container.innerHTML += `
    <div class="card" style="width: 18rem;" id="product">
    <img src="${product.ImageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${product.productName}</h5>
      <p class="card-description">${product.Description}</p>
      <p class="card-text">R ${product.Price}</p>
      <a href="#" class="btn btn-primary" id="${product.id}" addToCart >Add to Cart</a>
    </div>
  </div>`

  
    
});
}
loadProductOnSite(products)

//search products

searchbtn.addEventListener('click', () => {
  try {
      if (itemsInp.value.length > 1) {
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

//Add to cart

    function addToCart(products) {

      try {
        let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
    ? JSON.parse(localStorage.getItem('checkout'))
    : []
          
          checkoutItems.push(products)
          localStorage.setItem('checkout', JSON.stringify(checkoutItems))
          document.querySelector('[counter]').textContent = checkoutItems.length || 0
      } catch (e) {
          alert("Unable to add to cart")
      }
  }

  document.querySelectorAll("[addToCart]").forEach(button => {
    button.addEventListener("click", ()=> {
      try {
          products.forEach(product => {
            if (product.id == button.id) {
              
              
              checkoutItems.push(product)
              localStorage.setItem('checkout', JSON.stringify(checkoutItems))
              document.querySelector('[counter]').textContent = checkoutItems.length || 0
            }
          })
    } catch (e) {
        alert("Unable to add to cart")
    }
    })
  })

  window.onload = () => {
      document.querySelector('[counter]').textContent = checkoutItems.length || 0
  }

 
;
  












    