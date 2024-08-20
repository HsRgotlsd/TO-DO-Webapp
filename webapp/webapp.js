document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskName = taskInput.value.trim();

    if (taskName !== '') {
        addTask(taskName);
        taskInput.value = ''; 
    }
});

function addTask(name) {
    const taskList = document.getElementById('pending-tasks');
    const taskItem = document.createElement('li');
    const taskText = document.createElement('span');
    const taskCompleteButton = document.createElement('button');
    const taskDeleteButton = document.createElement('button');
    const timestamp = new Date().toLocaleString();

    taskText.textContent = `${name} (Added on: ${timestamp})`;
    taskCompleteButton.textContent = 'Complete';
    taskDeleteButton.textContent = 'Delete';

    taskItem.appendChild(taskText);
    taskItem.appendChild(taskCompleteButton);
    taskItem.appendChild(taskDeleteButton);

    taskList.appendChild(taskItem);

    taskCompleteButton.addEventListener('click', function() {
        completeTask(taskItem);
    });

    taskDeleteButton.addEventListener('click', function() {
        deleteTask(taskItem);
    });
}

function completeTask(taskItem) {
    const completedList = document.getElementById('completed-tasks');
    const taskText = taskItem.querySelector('span').textContent;
    taskItem.classList.add('completed');
    taskItem.querySelector('button').remove(); 

    const newTaskItem = document.createElement('li');
    newTaskItem.innerHTML = `<span>${taskText}</span>`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    newTaskItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', function() {
        deleteTask(newTaskItem);
    });

    completedList.appendChild(newTaskItem);
    taskItem.remove();
}

function deleteTask(taskItem) {
    taskItem.remove();
}
