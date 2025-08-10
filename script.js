function addTask() {
  let taskText = document.getElementById('taskInput').value;
  if (taskText) {
    let li = document.createElement('li');
    li.textContent = taskText;
    document.getElementById('tasks').appendChild(li);
    document.getElementById('taskInput').value = '';
  }
}
