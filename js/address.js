document.addEventListener('DOMContentLoaded', function () {
        displaySavedAddresses();
    });
    
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
        if (!mobileNumberRegex.test(mobNumber)) {
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
    
        displaySavedAddresses();
    
        alert('Address added successfully!');
    }
    
    function displaySavedAddresses() {
        const savedAddressContainer = document.getElementById('savedAddress');
        savedAddressContainer.innerHTML = ''; 

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const userDetails = JSON.parse(localStorage.getItem(key));
    
            const addressHtml = `
                <div>
                    <p><strong>Name: </strong> ${userDetails.name}</p>
                    <p><strong>Address:</strong> ${userDetails.address1} <span>${userDetails.address2} ${userDetails.townName} ${userDetails.landmark} </span></p>
                    <p><strong>State: </strong>${userDetails.state}
                    <p><strong>Zip-Code: </strong>${userDetails.zipCode}
                    <p><strong>Email:</strong> ${userDetails.email}</p>
                    <button class="btn btn-success" onclick="window.location.href = '../pages/invoice.html'">Pay Now</button>
                    </div>
            `;
    
            savedAddressContainer.innerHTML += addressHtml;
        }
    }
    