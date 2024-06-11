let product =  JSON.parse(localStorage.getItem('products'))
let container = document.querySelector('[flowerProducts]')
product.forEach(product => {
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



    let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
     ? JSON.parse(localStorage.getItem('checkout')) 
     : []
 
    function addToCart(products) {
        try{
            checkoutItems.push(products) 
            localStorage.setItem('checkout', JSON.stringify(checkoutItems))
            document.querySelector('[counter]').textContent = checkoutItems.length || 0
        } catch(e){
            alert('Unable to add to cart')
        }
    }

    window.onload = () => {
        document.querySelector('[counter]').textContent = JSON.parse(localStorage.getItem('checkout'))
            ? JSON.parse(localStorage.getItem('checkout')).length
            : 0
    }