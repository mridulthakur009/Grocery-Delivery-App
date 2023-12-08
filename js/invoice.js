document.addEventListener('DOMContentLoaded', () => {
    displayInvoiceDetails();
});

function generateRandomOrderId() {
    return Math.floor(100000 + Math.random() * 900000);
}

function displayInvoiceDetails() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const invoiceTableBody = document.getElementById('invoiceTableBody');
    const invoiceTotalAmount = document.getElementById('invoiceTotalAmount');
    const currentDate = new Date().toLocaleDateString();

    const orderId = generateRandomOrderId();

    invoiceTableBody.innerHTML = '';

    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.title}" style="width: 50px; height: 50px;"></td>
            <td>${item.title}</td>
            <td>₹${item.price}</td>
            <td>${item.quantity}</td>
            <td>₹${item.price * item.quantity}</td>
        `;
        invoiceTableBody.appendChild(row);
    });

    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    invoiceTotalAmount.textContent = subtotal.toFixed(2);

    document.getElementById('invoiceDate').textContent = currentDate;
    document.getElementById('orderId').textContent = orderId;

}
