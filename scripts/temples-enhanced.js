const temples = [
	{
		templeName: "Arequipa Peru",
		location: "Peru",
		dedicated: "1, April, 2006",
		area: 756,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/1280x800/1-55f6c59ce8f9c093a9c689067f8674335de544e2.jpeg",
	  },
  
	{
	  templeName: "Bountiful Utah",
	  location: "USA",
	  dedicated: "1, 9, 2003",
	  area: 1200,
	  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/1280x800/bountiful-temple-766347-wallpaper.jpg",
	},
	{
		templeName: "Boise Idaho Temple",
		location: "USA",
		dedicated: "6, 4,  2012",
		area: 800,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/1280x800/boise-idaho-temple-exterior-2012-1029114-wallpaper.jpg",
	  },
  ];
  
  function generateTempleCards(filteredTemples) {
	// Clear the existing temple cards (optional)
	const container = document.querySelector(".container");
	container.innerHTML = ""; // This removes existing cards
  
	filteredTemples.forEach((temple) => {
	  const figure = document.createElement("figure");
  
	  // Add temple name (h2)
	  const templeName = document.createElement("h2");
	  templeName.textContent = temple.templeName;
	  figure.appendChild(templeName);
  
	  // Add temple location (h3)
	  const templeLocation = document.createElement("h3");
	  templeLocation.textContent = temple.location;
	  figure.appendChild(templeLocation);
  
	  // Add dedicated date (p)
	  const dedicatedDate = document.createElement("p");
	  dedicatedDate.textContent = "Dedicated: " + temple.dedicated;
	  figure.appendChild(dedicatedDate);
  
	  // Add temple area (p)
	  const templeArea = document.createElement("p");
	  templeArea.textContent = "Total Area: " + temple.area + " sq ft";
	  figure.appendChild(templeArea);
  
	  // Add temple image with lazy loading
	  const templeImage = document.createElement("img");
	  templeImage.src = temple.imageUrl;
	  templeImage.alt = temple.templeName;
	  templeImage.loading = "lazy";
	  figure.appendChild(templeImage);
  
	  // Append the temple card to the container
	  container.appendChild(figure);
	});
  }
  
  // Generate temple cards initially (show all temples)
  generateTempleCards(temples);
  
  const menuItems = document.querySelectorAll(".navigation a");
  
  // Add event listeners to menu items for filtering
  menuItems.forEach((menuItem) => {
	menuItem.addEventListener("click", (event) => {
	  event.preventDefault(); // Prevent default link behavior
  
	  const filter = menuItem.textContent.toLowerCase(); // Get filter criteria
  
	  let filteredTemples;
	  if (filter === "home") {
		filteredTemples = temples; // Show all temples
	  } else if (filter === "old") {
		filteredTemples = temples.filter((temple) => {
		  const year = parseInt(temple.dedicated.split(", ")[0]);
		  return year < 1900;
		});
	  } else if (filter === "new") {
		filteredTemples = temples.filter((temple) => {
		  const year = parseInt(temple.dedicated.split(", ")[0]);
		  return year > 2000;
		});
	  } else if (filter === "large") {
		filteredTemples = temples.filter((temple) => temple.area > 90000);
	  } else if (filter === "small") {
		filteredTemples = temples.filter((temple) => temple.area < 10000);
	  }
  
	  // Generate temple cards based on the filtered results
	  generateTempleCards(filteredTemples);
	});
  });