
//QUOTES:

const quotes = []; // Empty array to store quotes
const quoteContainer = document.getElementById('quote-container');
const getRandomQuoteButton = document.getElementById('get-random-quote');

// Function to fetch quotes from the text file
async function fetchQuotes() {
  const response = await fetch('quotes.txt'); // Replace 'quotes.txt' with your actual file path
  const text = await response.text();
  quotes.push(...text.split('\n')); // Split text by newline and add to quotes array
}

// Function to display a random quote
function displayRandomQuote() {
  if (quotes.length === 0) {
    quoteContainer.textContent = 'Loading quotes...';
    fetchQuotes().then(() => displayRandomQuote()); // Fetch quotes if empty and display quote after fetching
    return;
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteContainer.textContent = randomQuote;
}

// Fetch quotes on page load
fetchQuotes().then(() => displayRandomQuote());

// Add event listener for button click
getRandomQuoteButton.addEventListener('click', displayRandomQuote);

