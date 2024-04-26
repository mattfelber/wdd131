// Select the DOM element for output
const full = document.querySelector("#full");

// Use the last modified date of the document
const lastModifiedDate = new Date(document.lastModified);

// Display the last modified date in the "full" paragraph
full.textContent = `©️ 2024 | Matheus Felber | Last modified: ${lastModifiedDate.toLocaleString()}`;