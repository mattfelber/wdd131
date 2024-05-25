const productSelect = document.getElementById('product');
const ratingContainer = document.getElementById('rating');
const featuresContainer = document.getElementById('features');

// Product Array (replace with your actual data)
const products = [
  { name: 'Product 1', id: 'product1' },
  { name: 'Product 2', id: 'product2' },
  // ... add more products
];

// Populate product options
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// Create rating radio buttons
for (let i = 1; i <= 5; i++) {
  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.id = `rating${i}`;
  radio.name = 'rating'; // Same name for radio buttons
  radio.value = i;
  
  const label = document.createElement('label');
  label.for = `rating${i}`;
  label.textContent = '*'.repeat(i); // You can use your preferred rating display

  ratingContainer.appendChild(radio);
  ratingContainer.appendChild(label);
}

// Create feature checkboxes (replace with your features list)
const features = ['Feature 1', 'Feature 2', 'Feature 3'];
features.forEach(feature => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = feature.toLowerCase().replace(/ /g, '-'); // Generate unique IDs
  checkbox.name = 'features[]'; // Use an array name for multiple selections
  checkbox.value = feature;

  const label = document.createElement('label');
  label.for = checkbox.id;
  label.textContent = feature;

  featuresContainer.appendChild(checkbox);
  featuresContainer.appendChild(label);
});
