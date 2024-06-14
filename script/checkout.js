let products = JSON.parse(localStorage.getItem('products'));
let checkoutItems = JSON.parse(localStorage.getItem('checkout'));

let checkoutTableBody = document.getElementById('checkoutTableBody');
let finalTotalElement = document.getElementById('finalTotal');

function updateCheckoutTable() {
    checkoutTableBody.innerHTML = '';
    let finalTotal = 0;
    console.log(checkoutItems);
    checkoutItems.forEach(item => {
        let product = products.find(prod => prod.id === item.id);

        if (product) {
            let total = item.quantity * product.Price;
            finalTotal += total;

            checkoutTableBody.innerHTML += `
                <tr>
                    <td>${product.productName}</td>
                    <td>${product.Price.toFixed(2)}</td>
                    <td><input type="number" class="quantity" value="1" style="width: 5rem;" ></td>
                    <td>${total.toFixed(2)}</td>
                </tr>
            `;
        }
    });

    finalTotalElement.textContent = finalTotal.toFixed(2);
}

updateCheckoutTable();