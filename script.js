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

function sortBands(bands) {
  function stripArticle(name) {
    return name.replace(/^(a |an |the )/i, '').toLowerCase();
  }

  return bands.sort((a, b) => {
    return stripArticle(a).localeCompare(stripArticle(b));
  });
}

const sortedBands = sortBands(bands);

const ul = document.getElementById('band');

sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});


