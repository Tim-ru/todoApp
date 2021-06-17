const addTaskButton = document.querySelector('.addTaskButton')
const taskList = document.querySelector('.taskList')
const taskInput = document.querySelector('.taskInput')
const taskReadyButton = document.querySelector('.taskReadyButton')
const taskReadyChecker = document.querySelector('.taskReadyChecker')
const removeButton = document.querySelector('.removeButton')
const readyButton = document.querySelector('.readyButton')


function addTask() {
    console.log('asdfas');
    // Create todo
    const taskItem = document.createElement('div')
    taskItem.classList.add('taskItem')
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todoDiv')
    // Input text
    const todoText = document.createElement('div')
    todoText.innerText = taskInput.value
    todoText.classList.add('taskText')
    todoDiv.appendChild(todoText)
    // add buttons
    const readyButton = document.createElement('button')
    const deleteButton = document.createElement('button')
    readyButton.textContent = 'Ready'
    deleteButton.textContent = 'Delete'
    readyButton.classList.add('taskReadyButton')
    deleteButton.classList.add('taskDeleteButton')
    todoDiv.appendChild(readyButton)
    todoDiv.appendChild(deleteButton)
    // Add taskReadyChecker
    const taskReadyChecker = document.createElement('div')
    taskReadyChecker.classList.add('taskReadyChecker')
    todoDiv.appendChild(taskReadyChecker)
    // Append to list
    taskItem.appendChild(todoDiv)
    taskItem.appendChild(taskReadyChecker)
    taskList.appendChild(taskItem)
    // Clear input text
    taskInput.value = ''
}

function deleteReady(e) {
    const item = e.target
    console.log(item);
    // Complete task
    if (item.classList[0] === 'taskReadyButton') {
        const checker = item.parentElement.parentElement.querySelector('.taskReadyChecker') 
        checker.classList.toggle('completed')
        if (checker.classList.contains('completed')) {
            item.textContent = 'Unready'
        } else {
            item.textContent = 'Ready'
        }
    }
    // Delete task
    if (item.classList[0] === 'taskDeleteButton') {
        console.log('fds');
        const todo = item.parentElement.parentElement
        todo.remove()
    }
}

function removeAll() {
    document.querySelectorAll('.taskItem').forEach(e => {
        e.remove()
    })
}

function readyAll() {
    document.querySelectorAll('.taskReadyChecker').forEach(e => {
        e.classList.toggle('completed')
        if (e.classList.contains('completed')) {
            e.parentElement.querySelector('.taskReadyButton').textContent = 'Unready'
            
        } else if (!e.classList.contains('completed')) {
            e.classList.toggle('completed')
        }
    })
}

addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', deleteReady);
removeButton.addEventListener('click', removeAll);
readyButton.addEventListener('click', readyAll);