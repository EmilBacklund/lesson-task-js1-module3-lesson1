const menuIsOpen = false;

if (menuIsOpen) {
  console.log('truthy');
} else {
  console.log('falsy');
}

const url = 'https://noroff.herokuapp.com/v1/cat-facts/facts';
const resultContainer = document.querySelector('.results');

async function getCatFacts() {
  const response = await fetch(url);
  const results = await response.json();
  console.log(results.length);

  resultContainer.innerHTML = '';

  for (let i = 0; i < results.length; i++) {
    console.log(results[i].text);

    resultContainer.innerHTML += `<div class="result">${results[i].text}</div>`;
  }
}

getCatFacts();
