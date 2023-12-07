fetch('https://fakestoreapi.com/products')
    .then((apiData)=>{
        return apiData.json();
    }).then((dataInObj)=>{
        let obj = '';
        dataInObj.map((objects)=>{
            obj += `
            <div class="pro mb-4" onclick="window.location.href='../pages/single-product.html';">
          <img src=${objects.image} alt="Product Image" class='my-3'>
          <hr>
          <div class="des">
            <span>${objects.category}</span>
            <h5>${objects.title}</h5>
            <div class="star">${objects.rating.rate}
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>₹${objects.price}</h4>
          </div>
          <a href=""><i class="fa-solid fa-circle-info fa-xl detail"></i></a>
          <a href=""><i class="fa-solid fa-cart-plus fa-xl cart"></i></a>
        </div>
            `;
        });
       document.querySelector('#product-grid').innerHTML = obj;
    })