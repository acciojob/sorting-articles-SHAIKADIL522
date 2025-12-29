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

  function removeArticle(name) {
    return name.replace(/^(a |an |the )/i, '').toLowerCase();
  }

  return bands.slice().sort(function (a, b) {
    const nameA = removeArticle(a);
    const nameB = removeArticle(b);

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
}

// Get sorted result
const sortedBands = sortBands(bands);

// Populate UL
const ul = document.getElementById('band');

for (let i = 0; i < sortedBands.length; i++) {
  const li = document.createElement('li');
  li.textContent = sortedBands[i];
  ul.appendChild(li);
}





