fetch('https://fakestoreapi.com/products')
    .then(apiData => apiData.json())
    .then((dataInObj) => {
        let obj = '';
        dataInObj.map((product) => {
            obj += `
            <div class="pro mb-4" onclick="openProductPage(${product.id});">
                <img src="${product.image}" alt="Product Image" class='my-3'>
                <hr>
                <div class="des">
                    <span>${product.category}</span>
                    <h5>${product.title}</h5>
                    <div class="star">${product.rating.rate}
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>₹${product.price}</h4>
                </div>
                <a href=""><i class="fa-solid fa-circle-info fa-xl detail"></i></a>
                <a href=""><i class="fa-solid fa-cart-plus fa-xl cart"></i></a>
            </div>
            `;
        });
        document.querySelector('#product-grid').innerHTML = obj;
    });

function openProductPage(productId) {
    window.location.href = `../pages/single-product.html?id=${productId}`;
}
