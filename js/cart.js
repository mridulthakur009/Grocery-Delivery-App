document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
});

function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTableBody = document.querySelector('#cart tbody');

    cartTableBody.innerHTML = '';

    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td onclick="removeCartItem(${item.id})" class="align-middle"><a href="#"><i class="fa fa-times-circle fa-2xl text-danger"></i></a></td>
            <td><img src="${item.image}" alt="${item.title}" style="width: 150px; height: 150px;"></td>
            <td class='align-middle'>${item.title}</td>
            <td class='align-middle'>₹${item.price}</td>
            <td class='align-middle'>
                <input type="number" class="quantity-input p-2" value="${item.quantity}" min="2" max="10" onchange="updateQuantity(${item.id}, this.value)">
            </td>
            <td class='align-middle'>₹${item.price * item.quantity}</td>
        `;
        cartTableBody.appendChild(row);
    });

    updateCartTotal();
}

function removeCartItem(itemId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    displayCartItems();
}

function updateQuantity(itemId, newQuantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.map(item => {
        if (item.id === itemId) {
            return { ...item, quantity: parseInt(newQuantity) };
        }
        return item;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    displayCartItems();
}

function updateCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const totalRow = document.querySelector('#subtotal td:nth-child(2)');
    const amountRow = document.querySelector('#subtotal tr:nth-child(3) td:last-child');

    totalRow.textContent = `₹${subtotal}`;
    amountRow.textContent = `₹${subtotal}`;
}
