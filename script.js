//your JS code here. If required.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Alphabetical Article Sorter</title>
</head>
<body>

  <ul id="band"></ul>

  <script>
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

    function stripArticle(name) {
      return name.replace(/^(a |an |the )/i, '').trim();
    }

    const sortedBands = bands.sort((a, b) => {
      const bandA = stripArticle(a).toLowerCase();
      const bandB = stripArticle(b).toLowerCase();
      return bandA.localeCompare(bandB);
    });

    const ul = document.getElementById('band');

    sortedBands.forEach(band => {
      const li = document.createElement('li');
      li.textContent = band;
      ul.appendChild(li);
    });
  </script>

</body>
</html>
