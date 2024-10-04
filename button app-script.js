let counterValue = 0;

// Get the DOM elements
const counterDisplay = document.getElementById('counter-value');
const incrementButton = document.getElementById('increment-btn');
const decrementButton = document.getElementById('decrement-btn');
const resetButton = document.getElementById('reset-btn');

// Increment counter
incrementButton.addEventListener('click', () => {
    counterValue++;
    updateCounter();
});

// Decrement counter
decrementButton.addEventListener('click', () => {
    counterValue--;
    updateCounter();
});

// Reset counter
resetButton.addEventListener('click', () => {
    counterValue = 0;
    updateCounter();
});

// Function to update the counter display
function updateCounter() {
    counterDisplay.textContent = counterValue;
}
