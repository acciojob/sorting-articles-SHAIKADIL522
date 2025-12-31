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

// Remove articles for sorting comparison
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, "").trim().toLowerCase();
}

// SORT and assign back
const sortedBands = bands.sort((a, b) => {
  return stripArticle(a).localeCompare(stripArticle(b));
});

// Get list and clear it first
const list = document.getElementById("band");
list.innerHTML = "";

// Add each sorted band
sortedBands.forEach(band => {
  const li = document.createElement("li");
  li.textContent = band;
  list.appendChild(li);
});







