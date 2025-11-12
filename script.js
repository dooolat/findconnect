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

  alert('Родственник успешно добавлен!');
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
    resultsDiv.innerHTML = '<p>Ничего не найдено 😢</p>';
    return;
  }

  results.forEach(p => {
    const card = `<div class="person-card">
      <h3>${p.name} ${p.surname}</h3>
      <p>Дата рождения: ${p.birthdate}</p>
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
    container.innerHTML = '<p>Нет сохранённых данных.</p>';
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
