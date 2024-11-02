let isLoggedIn = false;
const loginButton = document.getElementById('loginButton');
const content = document.getElementById('content');
const loginContainer = document.getElementById('loginContainer');
const premiumPrompt = document.getElementById('premiumPrompt');
const errorDiv = document.getElementById('error');

// Start 2-minute countdown
setTimeout(() => {
    if (!isLoggedIn) {
        loginContainer.style.display = 'none';
        premiumPrompt.style.display = 'block';
        setupPayPal();
    }
}, 2 * 60 * 1000);  // 2 minutes

// Login validation
loginButton.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'flynn.j.reid@gmail.com' && password === 'Crypto') {
        isLoggedIn = true;
        loginContainer.style.display = 'none';
        content.style.display = 'block';
    } else {
        errorDiv.textContent = "Invalid email or password";
    }
});

// Setup PayPal Button
function setupPayPal() {
    paypal.Buttons({
        createOrder: (data, actions) => {
            return actions.order.create({
                purchase_units: [{
                    amount: { value: '10.00' } // Example price
                }]
            });
        },
        onApprove: (data, actions) => {
            return actions.order.capture().then(details => {
                premiumPrompt.style.display = 'none';
                content.style.display = 'block';
                alert('Premium Access Granted');
            });
        }
    }).render('#paypal-button-container');
}
loginButton.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'flynn.j.reid@gmail.com' && password === 'Crypto') {
        isLoggedIn = true;
        // Redirect to the dashboard page
        window.location.href = 'dashboard.html';
    } else {
        errorDiv.textContent = "Invalid email or password";
    }
});
