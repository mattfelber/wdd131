const productSelect = document.getElementById('product');
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    avgRating: 4.5 // Corrected typo in key name
  },
  {
    id: "fc-2050",
    name: "power laces",
    averageRating: 4.7 // Corrected typo in key name
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averageRating: 3.5 // Corrected typo in key name
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averageRating: 3.9 // Corrected typo in key name
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averageRating: 5.0 // Corrected typo in key name
  }
];

function populateProducts() {
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.text = product.name;
    productSelect.appendChild(option);
  });
}

populateProducts();
