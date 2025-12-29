
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

function removeArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

bands.sort((a, b) => {
  return removeArticle(a).localeCompare(removeArticle(b));
});

const ul = document.createElement('ul');
ul.id = 'band';


bands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});

document.body.appendChild(ul);

