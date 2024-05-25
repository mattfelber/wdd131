const inputSpan = document.querySelector('.input');
const cursor = document.querySelector('.cursor');
const outputDiv = document.querySelector('.output');

inputSpan.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    // Handle user input (e.g., display message in output)
    const userInput = inputSpan.textContent.trim();
    // Clear input field
    inputSpan.textContent = '';
    
    // Example: Simulate output message
    const message = `Processing: ${userInput}`;
    const outputElement = document.createElement('p');
    outputElement.textContent = message;
    outputDiv.appendChild(outputElement);
  }
});

// Simulate blinking cursor effect
setInterval(() => {
  cursor.classList.toggle('hidden');
}, 500);
