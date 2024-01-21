const users = [];

document.getElementById('userForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = document.getElementById('age').value;

  const user = {
    id: Date.now(),
    firstName,
    lastName,
    age,
  };

  users.push(user);
  rerender();
  this.reset();
});

document.getElementById('userContainer').addEventListener('dblclick', function (event) {
  const userId = event.target.dataset.userId;

  if (userId) {
    deleteUserById(userId);
  }
});

function rerender() {
  const container = document.getElementById('userContainer');
  container.innerHTML = '';

  users.forEach(user => {
    const card = document.createElement('div');
    card.className = 'user-card';
    card.dataset.userId = user.id;
    card.innerHTML = `<p>${user.firstName} ${user.lastName}, Age: ${user.age}</p>`;
    container.appendChild(card);
  });
}

function deleteUserById(userId) {
  const index = users.findIndex(user => user.id == userId);

  if (index !== -1) {
    users.splice(index, 1);
    rerender();
  }
}

rerender();
