'use strict';

const testInput = document.getElementsByTagName('textarea')[0];
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  toCamelCase();
});

function toCamelCase() {
  const arr = testInput.value
    .toLowerCase()
    .split('\n')
    .forEach(val => {
      const [firstWord, secondWord] = val.trim().split('_');
      console.log(
        [firstWord, secondWord[0].toUpperCase(), secondWord.slice(1)].join('')
      );
    });
}
