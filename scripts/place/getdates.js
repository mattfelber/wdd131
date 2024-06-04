function calculateWindChill(temperature, windSpeed) {
    // Windchill formula (in °C)
    const windChill = 13.12 + (0.6215 * temperature) - (39.38 * Math.pow(windSpeed, 0.5)) + (0.47 * temperature * Math.pow(windSpeed, 0.5));
    return windChill.toFixed(1); // Round to one decimal place
  }
  
  // Assuming static values for temperature and wind speed (replace these with actual data fetching later)
  const temperature = 9;
  const windSpeed = 21;
  
  const windchillValue = calculateWindChill(temperature, windSpeed);

  const windchillElement = document.getElementById("windchill");
    windchillElement.textContent = windchillValue;  



  // Select the DOM element for output (moved outside the block)
const outputElement = document.querySelector("#full");

// Use the last modified date of the document
const lastModifiedDate = new Date(document.lastModified);

// Display the last modified date in the "full" paragraph
outputElement.textContent = `©️ 2024 | Last modified: ${lastModifiedDate.toLocaleString()}`;

