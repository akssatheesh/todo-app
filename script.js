function addTask() {
  let taskText = document.getElementById('taskInput').value;
  if (taskText) {
    let li = document.createElement('li');
    li.textContent = taskText;

    let btn = document.createElement('button');
    btn.textContent = "❌";
    btn.onclick = function() { li.remove(); };
    li.appendChild(btn);

    document.getElementById('tasks').appendChild(li);
    document.getElementById('taskInput').value = '';
  }
}
