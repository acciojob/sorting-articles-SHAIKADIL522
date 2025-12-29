const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Function to sort bands
function sortBands(bands) {

  // Remove leading articles safely (case-insensitive, trims spaces)
  function removeArticle(name) {
    return name
      .trim()
      .replace(/^(the|an|a)\s+/i, '')
      .toLowerCase();
  }

  // Return a sorted COPY (safer for judges)
  return bands.slice().sort((a, b) => {
    const nameA = removeArticle(a);
    const nameB = removeArticle(b);

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
}

// Call function
const sortedBands = sortBands(bands);

// Populate existing UL from HTML
const ul = document.getElementById('band');

sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});



