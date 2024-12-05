document.getElementById('todo-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
  
    if (task) {
      addTask(task);
      input.value = '';
    }
  });

  function addTask(task) {
    const list = document.getElementById('todo-list');
  
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';
  
    const text = document.createElement('span');
    text.textContent = task;

    const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    text.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => listItem.remove());

  listItem.append(checkbox, text, deleteBtn);
  list.appendChild(listItem);
}
