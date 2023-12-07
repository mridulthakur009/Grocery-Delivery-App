document.addEventListener('DOMContentLoaded', () => {
    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Display the cart details on the page
    const cartTableBody = document.querySelector('#cart tbody');

    cart.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="#" class="removeProduct" data-id="${product.id}"><i class="fa fa-times-circle"></i></a></td>
            <td><img src="" alt=""></td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>Quantity</td>
            <td>Subtotal</td>
        `;
        cartTableBody.appendChild(row);
    });

    // Add event listeners for removing products from the cart
    document.querySelectorAll('.removeProduct').forEach(removeLink => {
        removeLink.addEventListener('click', removeProduct);
    });
});

function removeProduct(event) {
    event.preventDefault();

    const productId = event.target.dataset.id;

    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find the index of the product with the given ID in the cart
    const productIndex = cart.findIndex(product => product.id === parseInt(productId, 10));

    // Remove the product from the cart array
    if (productIndex !== -1) {
        cart.splice(productIndex, 1);

        // Update the cart data in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Refresh the page to reflect the changes
        location.reload();
    }
}
