function savePerson(event) {
  event.preventDefault();

  const person = {
    name: document.getElementById('name').value,
    surname: document.getElementById('surname').value,
    birthdate: document.getElementById('birthdate').value,
    description: document.getElementById('description').value
  };

  let people = JSON.parse(localStorage.getItem('people')) || [];
  people.push(person);
  localStorage.setItem('people', JSON.stringify(people));

  alert('Person successfully added!');
  event.target.reset();
}

function searchPerson() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const people = JSON.parse(localStorage.getItem('people')) || [];
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  const results = people.filter(p =>
    p.name.toLowerCase().includes(query) || p.surname.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    resultsDiv.innerHTML = '<p>Nothing found 😢</p>';
    return;
  }

  results.forEach(p => {
    const card = `<div class="person-card">
      <h3>${p.name} ${p.surname}</h3>
      <p>Date of birth: ${p.birthdate}</p>
      <p>${p.description}</p>
    </div>`;
    resultsDiv.innerHTML += card;
  });
}

function displayAllPeople() {
  const people = JSON.parse(localStorage.getItem('people')) || [];
  const container = document.getElementById('allResults');
  container.innerHTML = '';

  if (people.length === 0) {
    container.innerHTML = '<p>No data saved.</p>';
    return;
  }

  people.forEach(p => {
    container.innerHTML += `<div class="person-card">
      <h3>${p.name} ${p.surname}</h3>
      <p>${p.birthdate}</p>
      <p>${p.description}</p>
    </div>`;
  });
}
