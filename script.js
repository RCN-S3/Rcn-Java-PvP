const cartItems = [];

// Function to add items to the cart
function addToCart(item) {
    cartItems.push(item);
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartList = document.getElementById('cartItems');
    cartList.innerHTML = '';
    cartItems.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
}

// Event listeners for buy buttons
document.querySelectorAll('.buy-button').forEach((button) => {
    button.addEventListener('click', () => {
        addToCart(button.textContent);
    });
});

// Login modal functionality
const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const closeModal = document.querySelector('.close');
const toggleLink = document.getElementById('toggleLink');
const 