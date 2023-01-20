window.onload=function(){
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');
  
  addTaskBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (taskInput.value === '') {
      alert("Please Add Task..")
      return;
    }
    const newTask = document.createElement('li');
    newTask.innerHTML = taskInput.value;
    taskInput.value = '';
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function() {
      taskList.removeChild(newTask);
    });
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
  });
}


