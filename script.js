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

// Function to remove articles for sorting
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').toLowerCase();
}

// Sort bands ignoring a, an, the
bands.sort((a, b) => {
  return stripArticle(a).localeCompare(stripArticle(b));
});

// Get the UL element
const ul = document.getElementById("band");

// Add sorted bands to the list
bands.forEach(band => {
  const li = document.createElement("li");
  li.textContent = band;
  ul.appendChild(li);
});






