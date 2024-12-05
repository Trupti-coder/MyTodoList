document.getElementById('todo-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
  
    if (task) {
      addTask(task);
      input.value = '';
    }
  });
  