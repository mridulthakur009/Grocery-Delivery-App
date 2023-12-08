document.addEventListener('DOMContentLoaded', () => {
    displaySavedAddress();
});

function displaySavedAddress() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    if (userDetails) {
        const addressContainer = document.getElementById('savedAddress');

        const card = document.createElement('div');
        card.classList.add('card', 'mb-4');

        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Saved Address</h5>
                <p class="card-text"><strong>Name:</strong> ${userDetails.name}</p>
                <p class="card-text"><strong>Address 1:</strong> ${userDetails.address1}</p>
                <p class="card-text"><strong>Address 2:</strong> ${userDetails.address2 || 'N/A'}</p>
                <p class="card-text"><strong>Town/City:</strong> ${userDetails.townName}</p>
                <p class="card-text"><strong>Landmark:</strong> ${userDetails.landmark || 'N/A'}</p>
                <p class="card-text"><strong>State:</strong> ${userDetails.state}</p>
                <p class="card-text"><strong>Zip Code:</strong> ${userDetails.zipCode}</p>
                <p class="card-text"><strong>Email:</strong> ${userDetails.email}</p>
                <p class="card-text"><strong>Mobile Number:</strong> ${userDetails.mobNumber}</p>
            </div>
        `;

        addressContainer.innerHTML = ''; 
        addressContainer.appendChild(card);
    }
}

function addressValidation() {
    const name = document.getElementById('name').value.trim();
    const address1 = document.getElementById('address1').value.trim();
    const address2 = document.getElementById('address2').value.trim();
    const townName = document.getElementById('townName').value.trim();
    const landmark = document.getElementById('landmark').value.trim();
    const state = document.getElementById('state').value.trim();
    const zipCode = document.getElementById('zipCode').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobNumber = document.getElementById('mobNumber').value.trim();

    if (name === '' || address1 === '' || townName === '' || state === '' || zipCode === '' || email === '' || mobNumber === '') {
        alert('All fields are required. Please fill in all details.');
        return;
    }
    
    let emailRegex = /^[\w-._]+@[\w-._]+\.[a-zA-Z]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email address. Please enter a valid email.');
        return;
    }
    let mobileNumberRegex = /^[0-9]{10}$/;
    if (!mobileNumberRegex.text(mobNumber)) {
        alert('Invalid mobile number. Please enter a 10-digit mobile number.');
        return;
    }

    const userDetails = {
        name,
        address1,
        address2,
        townName,
        landmark,
        state,
        zipCode,
        email,
        mobNumber
    };

    localStorage.setItem(email, JSON.stringify(userDetails));

    displaySavedAddress();

    alert('Your Address Saved Successfully');
}
