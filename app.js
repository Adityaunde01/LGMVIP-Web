const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        return;
    }
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function removeTask(button) {
    button.parentElement.remove();
}
