const productSelect = document.getElementById('product');
const ratingContainer = document.getElementById('rating');
const featuresContainer = document.getElementById('features');

// Product Array
const products = [
  { id: 'fc-1888', name: "flux capacitor", avgRating: 4.5 },
  { id: 'fc-2050', name: "power laces", averagerating: 4.7 },
  { id: 'fs-1987', name: "time circuits", averagerating: 3.5 },
  { id: 'ac-2000', name: "low voltage reactor", averagerating: 3.9 },
  { id: 'jj-1969', name: "warp equalizer", averagerating: 5.0 }
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
  label.textContent = '⭐'.repeat(i); // You can use your preferred rating display

  ratingContainer.appendChild(radio);
  ratingContainer.appendChild(label);
}

// Create feature checkboxes (replace with your features list)
const features = ['Feature 1', 'Feature 2', 'Feature 3'];
features.forEach(feature => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `feature-${feature}`; // Unique ID for each checkbox
  checkbox.name = 'features[]'; // Use an array name for multiple selections
  checkbox.value = feature;

  const label = document.createElement('label');
  label.for = `feature-${feature}`;
  label.textContent = feature;

  featuresContainer.appendChild(checkbox);
  featuresContainer.appendChild(label);
});
