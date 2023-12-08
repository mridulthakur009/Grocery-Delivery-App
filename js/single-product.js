let retriveID = new URLSearchParams(window.location.search);
let id = retriveID.get('id');

fetch(`https://fakestoreapi.com/products/${id}`)
    .then(apisData => apisData.json())
    .then(product => {
        let obj = `
            <div class="single-pro-image">
                <img src="${product.image}" width="100%" height="100%" id="MainImg" alt="Product Image">
            </div>
            <div class="single-pro-details">
                <h6>${product.category}</h6>
                <h2>${product.title}</h2>
                <h4>₹${product.price}</h4>
                <input type="number" value="2" max="10" min="2">
                <button class="btn btn-success" id="addToCartBtn">Add to cart</button>
                <h4 class="my-3">Product Details</h4>
                <span>${product.description}</span>
            </div>
        `;
        document.querySelector('#prodetails').innerHTML = obj;

        let quantityInput = document.querySelector('.single-pro-details input');
        let addToCartButton = document.getElementById('addToCartBtn');

        quantityInput.value = 1; 

        addToCartButton.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value, 10);
            addToCart(product, quantity);
        });
    })
    .catch(error => alert('Error fetching product details:', error));

function addToCart(product, quantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: quantity
    });

    localStorage.setItem('cart', JSON.stringify(cart));

    window.location.href = './cart.html';
}
